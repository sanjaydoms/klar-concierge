import type { TravelBrief } from "@/types/brief";
import type { DestinationIntelligence, MonthIntelligence } from "@/types/knowledge";
import type { ComparisonDimension, ComparisonResult } from "@/types/recommendation";
import { getDestination } from "@/repositories/knowledge";
import { scoreDestination } from "@/services/recommendations/engine";
import { emptyBrief } from "@/types/brief";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

type Candidate = { d: DestinationIntelligence; score: ReturnType<typeof scoreDestination> };

/** Lowercase the first character — for splicing authored sentences into prose. */
function lc(s: string): string {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

function monthOf(d: DestinationIntelligence, month: number): MonthIntelligence {
  return d.monthlyIntelligence.find((mi) => mi.month === month)!;
}

function topInterests(d: DestinationIntelligence, n = 3): string[] {
  return Object.entries(d.interests)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([k]) => k);
}

function flightFeel(hours: number): string {
  if (hours <= 5) return "an easy hop";
  if (hours <= 8) return "a manageable overnight flight";
  return "a serious long-haul commitment";
}

/**
 * Build one comparison dimension. Every value is a self-explanatory sentence
 * fragment (never a bare score), and every reason contrasts the winner with
 * the runner-up so the row explains itself.
 */
function dimension(opts: {
  key: string;
  label: string;
  candidates: Candidate[];
  value: (c: Candidate) => { display: string; rank: number };
  reason: (winner: Candidate, contrast: Candidate) => string;
  tieReason: string;
}): ComparisonDimension {
  const evaluated = opts.candidates.map((c) => ({ c, ...opts.value(c) }));
  const best = Math.max(...evaluated.map((e) => e.rank));
  const winners = evaluated.filter((e) => e.rank === best);
  const isTie = winners.length !== 1;
  const contrast = isTie
    ? undefined
    : evaluated.filter((e) => e.rank !== best).sort((a, b) => b.rank - a.rank)[0];
  return {
    key: opts.key,
    label: opts.label,
    winnerSlug: isTie ? "tie" : winners[0].c.d.slug,
    values: Object.fromEntries(evaluated.map((e) => [e.c.d.slug, e.display])),
    reason: isTie ? opts.tieReason : opts.reason(winners[0].c, contrast!.c),
  };
}

/**
 * Deterministic destination comparison. Two or three destinations, optionally
 * month- and traveller-specific via the brief. Dimensions adapt to the trip:
 * a couple with no children never sees a "comfort for seniors" row.
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

  // ---- Season: what the month actually feels like in each place ----
  if (month) {
    const monthName = MONTH_NAMES[month - 1];
    dims.push(
      dimension({
        key: "season",
        label: `Season in ${monthName}`,
        candidates,
        value: (c) => {
          const m = monthOf(c.d, month);
          const colour = m.seasonScore >= 70 ? m.highlights[0] : m.warnings[0];
          return {
            display: `${m.seasonLabel} — ${m.temperatureBand}, ${m.rainfall} rain${colour ? `. ${colour}` : ""}`,
            rank: m.seasonScore,
          };
        },
        reason: (w, o) => {
          const wm = monthOf(w.d, month);
          const om = monthOf(o.d, month);
          const winnerColour = wm.highlights[0] ? ` — ${lc(wm.highlights[0])}` : "";
          if (wm.seasonLabel === om.seasonLabel) {
            return `Both are ${lc(wm.seasonLabel)} in ${monthName}, but ${w.d.name} has the edge over ${o.d.name}${winnerColour}${
              om.warnings[0] ? `; in ${o.d.name}, note ${lc(om.warnings[0])}` : ""
            }.`;
          }
          return `${monthName} favours ${w.d.name}: ${lc(wm.seasonLabel)}${winnerColour}. ${o.d.name} is ${lc(om.seasonLabel)}${
            om.warnings[0] ? ` — ${lc(om.warnings[0])}` : ""
          }.`;
        },
        tieReason: `Both are genuinely good in ${monthName} — weather won't decide this one.`,
      }),
    );
  }

  // ---- Trip character: what each place is actually about ----
  const characterTie = `Different personalities: ${candidates
    .map((c) => `${c.d.name} leans ${topInterests(c.d, 2).join(" and ")}`)
    .join("; ")} — pick the trip you want to have.`;
  dims.push(
    dimension({
      key: "character",
      label: "Trip character",
      candidates,
      value: (c) => {
        const strengths = topInterests(c.d);
        const matched = fullBrief.interests.filter((i) => (c.d.interests[i] ?? 0) >= 70);
        return {
          display: `Strongest for ${strengths.join(", ")}${
            fullBrief.interests.length ? ` — matches ${matched.length} of your ${fullBrief.interests.length} interests` : ""
          }`,
          rank: fullBrief.interests.length ? Math.round(c.score.interestFit) : 0,
        };
      },
      reason: (w, o) => {
        const matched = fullBrief.interests.filter((i) => (w.d.interests[i] ?? 0) >= 70);
        return `You said you enjoy ${fullBrief.interests.slice(0, 3).join(", ")} — ${w.d.name} delivers ${
          matched.length ? matched.join(" and ") : "more of that"
        } more strongly than ${o.d.name}.`;
      },
      tieReason: characterTie,
    }),
  );

  // ---- Flight: hours, and what those hours cost you ----
  dims.push(
    dimension({
      key: "flight",
      label: "Getting there from India",
      candidates,
      value: (c) => {
        const h = c.d.travelPracticality.averageFlightHoursFromIndia;
        return { display: `~${h}h — ${flightFeel(h)}`, rank: -h };
      },
      reason: (w, o) => {
        const saved = Math.round(
          (o.d.travelPracticality.averageFlightHoursFromIndia -
            w.d.travelPracticality.averageFlightHoursFromIndia) * 2,
        );
        if (saved <= 2) {
          return `${w.d.name} is marginally closer than ${o.d.name}, but the difference is barely a factor — decide on other rows.`;
        }
        return `${w.d.name} saves you roughly ${saved} hours of round-trip flying versus ${o.d.name} — the difference between arriving fresh and losing a day to recovery.`;
      },
      tieReason: "Flight time is effectively the same — it won't tip the decision.",
    }),
  );

  // ---- Who's travelling: only the rows this trip actually needs ----
  const hasChildren = fullBrief.childrenAges.length > 0;
  const hasSeniors =
    fullBrief.seniorTravellers > 0 ||
    fullBrief.travellerType === "senior" ||
    fullBrief.travellerType === "multi-generational";
  const isRomantic = fullBrief.travellerType === "honeymoon" || fullBrief.travellerType === "couple";

  if (hasChildren) {
    const ages = fullBrief.childrenAges.join(" & ");
    dims.push(
      dimension({
        key: "children",
        label: `With children aged ${ages}`,
        candidates,
        value: (c) => ({
          display: `${Math.round(c.score.childAgeFit)}/100 for these ages — ${c.d.travelPracticality.walkingIntensity} walking days`,
          rank: Math.round(c.score.childAgeFit),
        }),
        reason: (w, o) =>
          `${w.d.name} keeps days easier for ${ages}-year-olds; ${o.d.name} asks more of them (${o.d.travelPracticality.walkingIntensity} walking, ${o.d.travelPracticality.roadTransferBurden} transfer burden).`,
        tieReason: "Both handle these ages well — this row won't decide it.",
      }),
    );
  } else if (fullBrief.travellerType === "family") {
    dims.push(
      dimension({
        key: "family",
        label: "Family ease",
        candidates,
        value: (c) => ({
          display: `${c.d.suitability.family}/100 — first-trip friendliness ${c.d.suitability.firstInternationalTrip}/100`,
          rank: c.d.suitability.family,
        }),
        reason: (w, o) =>
          `${w.d.name} is simply less work as a family: logistics, food and pacing all cooperate more than in ${o.d.name}.`,
        tieReason: "Equally family-friendly — decide on season and character instead.",
      }),
    );
  }

  if (hasSeniors) {
    dims.push(
      dimension({
        key: "seniors",
        label: "Comfort for seniors",
        candidates,
        value: (c) => ({
          display: `${c.d.suitability.seniors}/100 — ${c.d.travelPracticality.walkingIntensity} walking, medical access ${c.d.travelPracticality.medicalAccessScore}/100`,
          rank: c.d.suitability.seniors,
        }),
        reason: (w, o) =>
          `${w.d.name} demands ${w.d.travelPracticality.walkingIntensity} walking against ${o.d.name}'s ${o.d.travelPracticality.walkingIntensity} — over a full holiday, that gap decides how the older travellers feel each evening.`,
        tieReason: "Both are workable for seniors with sensible pacing.",
      }),
    );
  }

  if (isRomantic) {
    dims.push(
      dimension({
        key: "romance",
        label: fullBrief.travellerType === "honeymoon" ? "As a honeymoon" : "As a couple's trip",
        candidates,
        value: (c) => ({
          display: `${c.d.suitability.honeymoon}/100 — ${lc(c.d.positioningLine)}`,
          rank: c.d.suitability.honeymoon,
        }),
        reason: (w, o) =>
          `${w.d.name} gives the trip more occasion — ${lc(w.d.positioningLine)} ${o.d.name} is lovely but reads more everyday by comparison.`,
        tieReason: "Equally romantic on paper — the season row should break the tie.",
      }),
    );
  }

  // ---- Food, grounded in stated dietary needs ----
  const veg = fullBrief.dietaryPreferences.includes("vegetarian") || fullBrief.dietaryPreferences.includes("jain");
  const halal = fullBrief.dietaryPreferences.includes("halal");
  dims.push(
    dimension({
      key: "food",
      label: veg ? "Eating vegetarian" : halal ? "Eating halal" : "Food scene",
      candidates,
      value: (c) => {
        if (veg) {
          return {
            display: `Vegetarian ease ${c.d.food.vegetarianFriendly}/100, Indian food ${c.d.food.indianFoodAvailability}/100`,
            rank: c.d.food.vegetarianFriendly,
          };
        }
        if (halal) {
          return {
            display: `Halal ease ${c.d.food.halalFriendly}/100, Indian food ${c.d.food.indianFoodAvailability}/100`,
            rank: c.d.food.halalFriendly,
          };
        }
        return {
          display: `Local cuisine ${c.d.food.localCuisineScore}/100, street food ${c.d.food.streetFoodScore}/100, Indian food ${c.d.food.indianFoodAvailability}/100`,
          rank: c.d.food.localCuisineScore,
        };
      },
      reason: (w, o) =>
        veg || halal
          ? `Finding ${veg ? "vegetarian" : "halal"} meals is meaningfully easier in ${w.d.name} — in ${o.d.name} it takes planning rather than luck.`
          : `${w.d.name} is the stronger eating destination — its food is a reason to go, not just fuel; ${o.d.name} feeds you well but won't headline the trip.`,
      tieReason: "You'll eat well in either — food won't separate them.",
    }),
  );

  // ---- Duration fit (only when we know the nights) ----
  if (fullBrief.durationNights) {
    const n = fullBrief.durationNights;
    dims.push(
      dimension({
        key: "duration",
        label: `Your ${n} nights`,
        candidates,
        value: (c) => {
          const { minimumNights: min, idealNights: ideal, maximumNights: max } = c.d;
          const display =
            n < min
              ? `Too tight — ${c.d.name} needs at least ${min} nights`
              : n > max
                ? `Longer than ${c.d.name} sustains (${max} max) — you'd be padding days`
                : Math.abs(n - ideal) <= 2
                  ? `Sits in the sweet spot (ideal ${ideal}, range ${min}–${max})`
                  : `Workable (ideal ${ideal}, range ${min}–${max})`;
          return { display, rank: Math.round(c.score.durationFit) };
        },
        reason: (w, o) =>
          `${n} nights matches ${w.d.name}'s natural rhythm (${w.d.idealNights} ideal); in ${o.d.name} the same nights would feel ${
            n < o.d.idealNights ? "rushed" : "stretched"
          }.`,
        tieReason: `Your ${n} nights works comfortably in either.`,
      }),
    );
  }

  // ---- Daily effort: how hard the holiday is on your body ----
  dims.push(
    dimension({
      key: "effort",
      label: "Daily effort on the ground",
      candidates,
      value: (c) => ({
        display: `${c.d.travelPracticality.walkingIntensity} walking, ${c.d.travelPracticality.roadTransferBurden} transfers, public transport ${c.d.travelPracticality.publicTransportEase}/100`,
        rank: Math.round(c.score.practicalityFit),
      }),
      reason: (w, o) =>
        `${w.d.name} is the gentler holiday day-to-day; ${o.d.name}'s ${o.d.travelPracticality.roadTransferBurden} transfer burden and ${o.d.travelPracticality.walkingIntensity} walking add up by day four.`,
      tieReason: "Similar physical demands — neither is the 'easy' option here.",
    }),
  );

  // ---- Crowds ----
  dims.push(
    dimension({
      key: "crowds",
      label: month ? `Crowds in ${MONTH_NAMES[month - 1]}` : "Typical crowds",
      candidates,
      value: (c) => {
        const m = month ? monthOf(c.d, month) : undefined;
        const level = m?.crowdLevel ?? "medium";
        const rank = level === "low" ? 3 : level === "medium" ? 2 : 1;
        const feel = level === "low" ? "you'll have space" : level === "medium" ? "busy but comfortable" : "expect queues at headline sights";
        return { display: `${level} — ${feel}`, rank };
      },
      reason: (w, o) => {
        const wl = month ? monthOf(w.d, month).crowdLevel : "medium";
        const ol = month ? monthOf(o.d, month).crowdLevel : "medium";
        return `${w.d.name} runs ${wl} crowds${month ? ` in ${MONTH_NAMES[month - 1]}` : ""} against ${o.d.name}'s ${ol} — queues and jostle shape a holiday more than people expect.`;
      },
      tieReason: "Crowd levels are comparable — no advantage either way.",
    }),
  );

  // ---- Accessibility: only when it was asked for ----
  if (fullBrief.accessibilityNeeds.length > 0) {
    dims.push(
      dimension({
        key: "accessibility",
        label: "Step-free and access needs",
        candidates,
        value: (c) => ({
          display: `${c.d.travelPracticality.accessibilityScore}/100 accessibility maturity`,
          rank: c.d.travelPracticality.accessibilityScore,
        }),
        reason: (w, o) =>
          `${w.d.name}'s infrastructure handles ${fullBrief.accessibilityNeeds.join(", ")} far more predictably than ${o.d.name} — fewer surprises at hotels, stations and sights.`,
        tieReason: "Both need attraction-level access checks — your Klar expert should verify the specifics.",
      }),
    );
  }

  // ---- Comfort level / value ----
  if (fullBrief.budgetBand !== "unknown") {
    dims.push(
      dimension({
        key: "budget",
        label: `At your ${fullBrief.budgetBand} comfort level`,
        candidates,
        value: (c) => {
          const fits = c.d.budgetBands.includes(fullBrief.budgetBand as (typeof c.d.budgetBands)[number]);
          return {
            display: fits
              ? `Works naturally at ${fullBrief.budgetBand} level (spans ${c.d.budgetBands.join(" to ")})`
              : `Stretches at ${fullBrief.budgetBand} level — really a ${c.d.budgetBands.join("/")} destination`,
            rank: fits ? 1 : 0,
          };
        },
        reason: (w, o) =>
          `Your money behaves differently: at ${fullBrief.budgetBand} level ${w.d.name} delivers comfortably, while in ${o.d.name} the same budget buys a compromised version of the place.`,
        tieReason: `Both destinations work honestly at ${fullBrief.budgetBand} level.`,
      }),
    );
  }

  // ---- The honest row: what you're accepting either way ----
  dims.push(
    dimension({
      key: "watchouts",
      label: "The trade-off you accept",
      candidates,
      value: (c) => ({ display: c.d.tradeOffs[0] ?? "No major trade-off recorded", rank: 0 }),
      reason: () => "",
      tieReason: "Trade-offs decide more than scores — choose the one you can genuinely live with.",
    }),
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
    finalReasons: winnerDims.filter((d) => d.reason).length
      ? winnerDims.filter((d) => d.reason).slice(0, 3).map((d) => d.reason)
      : [`${winner.d.name} scores best overall for this brief — the individual rows are close, but they lean its way.`],
    conditions,
    confidenceLabel: margin >= 8 && winner.score.knowledgeConfidence >= 80 ? "high" : margin >= 4 ? "good" : "moderate",
    alternativeIfPrioritiesChange: runnerUp
      ? `If ${runnerDims[0]?.label.toLowerCase() ?? "budget or timing"} matters most to you, choose ${runnerUp.d.name} instead.`
      : "",
  };
}
