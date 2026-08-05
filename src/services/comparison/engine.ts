import type { TravelBrief } from "@/types/brief";
import type { DestinationIntelligence } from "@/types/knowledge";
import type { ComparisonDimension, ComparisonResult } from "@/types/recommendation";
import { getDestination } from "@/repositories/knowledge";
import { scoreDestination } from "@/services/recommendations/engine";
import { emptyBrief } from "@/types/brief";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

type Candidate = { d: DestinationIntelligence; score: ReturnType<typeof scoreDestination> };

function dimension(
  key: string,
  label: string,
  candidates: Candidate[],
  value: (c: Candidate) => { display: string; rank: number },
  reason: (winner: Candidate) => string,
): ComparisonDimension {
  const evaluated = candidates.map((c) => ({ c, ...value(c) }));
  const best = Math.max(...evaluated.map((e) => e.rank));
  const winners = evaluated.filter((e) => e.rank === best);
  const winnerSlug = winners.length === 1 ? winners[0].c.d.slug : ("tie" as const);
  return {
    key,
    label,
    winnerSlug,
    values: Object.fromEntries(evaluated.map((e) => [e.c.d.slug, e.display])),
    reason: winnerSlug === "tie" ? "Too close to call on this dimension." : reason(winners[0].c),
  };
}

/**
 * Deterministic destination comparison. Two or three destinations, optionally
 * month- and traveller-specific via the brief.
 */
export function compareDestinations(
  slugs: string[],
  brief?: Partial<TravelBrief>,
): ComparisonResult | { error: string } {
  if (slugs.length < 2 || slugs.length > 3) {
    return { error: "Comparison supports two or three destinations." };
  }
  const fullBrief: TravelBrief = { ...emptyBrief(""), ...brief };
  const month = fullBrief.travelMonth;

  const destinations: DestinationIntelligence[] = [];
  for (const slug of slugs) {
    const d = getDestination(slug);
    if (!d) return { error: `Unknown destination: ${slug}` };
    destinations.push(d);
  }

  const candidates: Candidate[] = destinations.map((d) => ({
    d,
    score: scoreDestination(d, fullBrief),
  }));

  const dims: ComparisonDimension[] = [];

  if (month) {
    dims.push(
      dimension("season", `Season in ${MONTH_NAMES[month - 1]}`, candidates,
        (c) => {
          const m = c.d.monthlyIntelligence.find((mi) => mi.month === month)!;
          return { display: `${m.seasonLabel} (${m.temperatureBand}, ${m.rainfall} rain)`, rank: m.seasonScore };
        },
        (w) => `${w.d.name} has the stronger season that month.`),
    );
  }

  if (fullBrief.childrenAges.length > 0) {
    dims.push(
      dimension("children", "Fit for your children's ages", candidates,
        (c) => ({ display: `${Math.round(c.score.childAgeFit)}/100`, rank: c.score.childAgeFit }),
        (w) => `${w.d.name} suits these ages better across attractions and pacing.`),
    );
  } else {
    dims.push(
      dimension("family", "Family friendliness", candidates,
        (c) => ({ display: `${c.d.suitability.family}/100`, rank: c.d.suitability.family }),
        (w) => `${w.d.name} is the easier all-round family destination.`),
    );
  }

  dims.push(
    dimension("seniors", "Comfort for seniors", candidates,
      (c) => ({ display: `${c.d.suitability.seniors}/100 (${c.d.travelPracticality.walkingIntensity} walking)`, rank: c.d.suitability.seniors }),
      (w) => `${w.d.name} demands less walking and offers better access.`),
    dimension("food", "Food for your preferences", candidates,
      (c) => {
        const veg = fullBrief.dietaryPreferences.includes("vegetarian");
        const halal = fullBrief.dietaryPreferences.includes("halal");
        const rank = veg ? c.d.food.vegetarianFriendly : halal ? c.d.food.halalFriendly : c.d.food.localCuisineScore;
        return { display: `${rank}/100${veg ? " vegetarian" : halal ? " halal" : " overall"}`, rank };
      },
      (w) => `${w.d.name} is the easier and richer food destination for you.`),
    dimension("flight", "Flight fatigue from India", candidates,
      (c) => ({ display: `~${c.d.travelPracticality.averageFlightHoursFromIndia}h`, rank: -c.d.travelPracticality.averageFlightHoursFromIndia }),
      (w) => `${w.d.name} is the shorter journey.`),
    dimension("duration", "Fit for your duration", candidates,
      (c) => ({ display: `ideal ${c.d.idealNights} nights (${c.d.minimumNights}–${c.d.maximumNights})`, rank: c.score.durationFit }),
      (w) => `${w.d.name} fits your available nights more naturally.`),
    dimension("pace", "Pace and transfer burden", candidates,
      (c) => ({ display: `${c.d.travelPracticality.roadTransferBurden} transfers, ${c.d.travelPracticality.walkingIntensity} walking`, rank: c.score.practicalityFit }),
      (w) => `${w.d.name} moves you around with less effort.`),
    dimension("crowds", month ? `Crowds in ${MONTH_NAMES[month - 1]}` : "Typical crowds", candidates,
      (c) => {
        const m = month ? c.d.monthlyIntelligence.find((mi) => mi.month === month) : undefined;
        const level = m?.crowdLevel ?? "medium";
        return { display: level, rank: level === "low" ? 3 : level === "medium" ? 2 : 1 };
      },
      (w) => `${w.d.name} feels less crowded then.`),
    dimension("accessibility", "Accessibility", candidates,
      (c) => ({ display: `${c.d.travelPracticality.accessibilityScore}/100`, rank: c.d.travelPracticality.accessibilityScore }),
      (w) => `${w.d.name} handles step-free needs better.`),
    dimension("interests", "Match to your interests", candidates,
      (c) => ({ display: `${Math.round(c.score.interestFit)}/100`, rank: c.score.interestFit }),
      (w) => `${w.d.name} aligns more closely with what you enjoy.`),
  );

  const overallSorted = [...candidates].sort((a, b) => b.score.overall - a.score.overall);
  const winner = overallSorted[0];
  const runnerUp = overallSorted[1];

  const winnerDims = dims.filter((d) => d.winnerSlug === winner.d.slug);
  const runnerDims = dims.filter((d) => d.winnerSlug === runnerUp.d.slug);

  const conditions: string[] = [];
  const wMonth = month ? winner.d.monthlyIntelligence.find((m) => m.month === month) : undefined;
  if (wMonth?.warnings.length) conditions.push(`${winner.d.name} in ${MONTH_NAMES[month! - 1]}: ${wMonth.warnings[0]}`);
  conditions.push("Visa and entry requirements must be verified for your nationality before booking.");
  if (winner.d.tradeOffs[0]) conditions.push(`${winner.d.name} trade-off: ${winner.d.tradeOffs[0]}`);

  const margin = winner.score.overall - runnerUp.score.overall;

  return {
    slugs: destinations.map((d) => d.slug),
    month,
    decisionSummary:
      margin >= 8
        ? `${winner.d.name} is the clearer choice for this trip — it wins on ${winnerDims.slice(0, 3).map((d) => d.label.toLowerCase()).join(", ")}.`
        : `It's genuinely close. ${winner.d.name} edges ahead overall, but ${runnerUp.d.name} wins on ${runnerDims.slice(0, 2).map((d) => d.label.toLowerCase()).join(" and ") || "some dimensions"} — your priorities decide.`,
    dimensions: dims,
    finalRecommendationSlug: winner.d.slug,
    finalReasons: winnerDims.slice(0, 3).map((d) => d.reason),
    conditions,
    confidenceLabel: margin >= 8 && winner.score.knowledgeConfidence >= 80 ? "high" : margin >= 4 ? "good" : "moderate",
    alternativeIfPrioritiesChange: runnerUp
      ? `If ${runnerDims[0]?.label.toLowerCase() ?? "budget or timing"} matters most to you, choose ${runnerUp.d.name} instead.`
      : "",
  };
}
