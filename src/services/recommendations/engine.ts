import type { TravelBrief } from "@/types/brief";
import type { AttractionIntelligence, DestinationIntelligence } from "@/types/knowledge";
import type {
  ExclusionReason,
  Recommendation,
  RecommendationDirection,
  RecommendationResult,
  RecommendationScore,
} from "@/types/recommendation";
import { getAttractions, getEligibleDestinations } from "@/repositories/knowledge";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const clamp = (v: number, min = 0, max = 100) => Math.min(max, Math.max(min, v));
const round1 = (v: number) => Math.round(v * 10) / 10;

// ---------- Hard exclusions ----------

const SEASON_MINIMUM = 45;

export function hardExclusions(
  destination: DestinationIntelligence,
  brief: TravelBrief,
): ExclusionReason[] {
  const reasons: ExclusionReason[] = [];

  const excludedNames = brief.excludedDestinations.map((e) => e.toLowerCase());
  if (
    excludedNames.includes(destination.slug) ||
    excludedNames.includes(destination.name.toLowerCase()) ||
    excludedNames.includes(destination.countryName.toLowerCase())
  ) {
    reasons.push("explicitly-excluded");
  }

  if (destination.status !== "verified") reasons.push("not-verified");

  // Trip scope: "within India" excludes international, and vice versa.
  if (brief.travelScope === "domestic" && destination.countryIso2 !== "IN") {
    reasons.push("scope-conflict");
  }
  if (brief.travelScope === "international" && destination.countryIso2 === "IN") {
    reasons.push("scope-conflict");
  }

  if (brief.travelMonth) {
    const month = destination.monthlyIntelligence.find((m) => m.month === brief.travelMonth);
    if (month && month.seasonScore < SEASON_MINIMUM) reasons.push("season-below-threshold");
  }

  if (brief.durationNights && brief.durationNights < destination.minimumNights - 1) {
    reasons.push("duration-impossible");
  }

  if (
    brief.accessibilityNeeds.length > 0 &&
    destination.travelPracticality.accessibilityScore < 50
  ) {
    reasons.push("accessibility-conflict");
  }

  if (brief.childrenAges.some((a) => a <= 4) && destination.suitability.toddlers < 55) {
    reasons.push("child-age-conflict");
  }

  const seniorParty = brief.seniorTravellers > 0 || brief.travellerType === "senior";
  if (
    seniorParty &&
    destination.suitability.seniors < 55 &&
    destination.travelPracticality.walkingIntensity === "high"
  ) {
    reasons.push("senior-burden");
  }

  if (brief.flightTolerance === "short" && destination.travelPracticality.averageFlightHoursFromIndia > 8) {
    reasons.push("flight-tolerance-conflict");
  }

  if (brief.climatePreferences.includes("avoid-humidity")) {
    const month = brief.travelMonth
      ? destination.monthlyIntelligence.find((m) => m.month === brief.travelMonth)
      : undefined;
    if (month?.humidity === "high") reasons.push("climate-conflict");
  }
  if (brief.climatePreferences.includes("avoid-cold")) {
    const month = brief.travelMonth
      ? destination.monthlyIntelligence.find((m) => m.month === brief.travelMonth)
      : undefined;
    if (month?.temperatureBand === "cold") reasons.push("climate-conflict");
  }

  return reasons;
}

// ---------- Scoring ----------

export function scoreDestination(
  destination: DestinationIntelligence,
  brief: TravelBrief,
): RecommendationScore {
  const month = brief.travelMonth
    ? destination.monthlyIntelligence.find((m) => m.month === brief.travelMonth)
    : undefined;
  const seasonFit = month ? month.seasonScore : 60;

  const s = destination.suitability;
  let travellerTypeFit = 70;
  switch (brief.travellerType) {
    case "family": travellerTypeFit = s.family; break;
    case "honeymoon": travellerTypeFit = s.honeymoon; break;
    case "couple": travellerTypeFit = Math.round(s.honeymoon * 0.7 + s.solo * 0.3); break;
    case "solo": travellerTypeFit = s.solo; break;
    case "friends": travellerTypeFit = Math.round((s.solo + s.teenagers) / 2); break;
    case "senior": travellerTypeFit = s.seniors; break;
    case "multi-generational": travellerTypeFit = Math.round((s.family + s.seniors) / 2); break;
    case "corporate": travellerTypeFit = Math.round((s.solo + (destination.interests.city ?? 50)) / 2); break;
  }

  let childAgeFit = 100;
  if (brief.childrenAges.length > 0) {
    const perChild = brief.childrenAges.map((age) =>
      age <= 4 ? s.toddlers : age <= 10 ? s.children5To10 : s.teenagers,
    );
    childAgeFit = Math.round(perChild.reduce((a, b) => a + b, 0) / perChild.length);
  }

  const seniorParty = brief.seniorTravellers > 0 || brief.travellerType === "senior" || brief.travellerType === "multi-generational";
  const seniorFit = seniorParty ? s.seniors : 100;

  let interestFit = 65;
  if (brief.interests.length > 0) {
    const matched = brief.interests.map((i) => destination.interests[i] ?? 30);
    interestFit = Math.round(matched.reduce((a, b) => a + b, 0) / matched.length);
  }

  let dislikesPenalty = 0;
  for (const dislike of brief.dislikes) {
    const strength = destination.interests[dislike] ?? 0;
    if (strength >= 70) dislikesPenalty += 15;
    else if (strength >= 50) dislikesPenalty += 8;
  }
  dislikesPenalty = clamp(dislikesPenalty, 0, 40);

  let durationFit = 80;
  if (brief.durationNights) {
    const n = brief.durationNights;
    if (n < destination.minimumNights) durationFit = clamp(100 - (destination.minimumNights - n) * 25);
    else if (n > destination.maximumNights) durationFit = clamp(100 - (n - destination.maximumNights) * 10);
    else durationFit = clamp(100 - Math.abs(n - destination.idealNights) * 5);
  }

  const paceFit =
    brief.pace === "unknown"
      ? 80
      : destination.suitablePaces.includes(brief.pace)
        ? 100
        : 55;

  let climateFit = 80;
  if (brief.climatePreferences.length > 0 && month) {
    climateFit = 100;
    if (brief.climatePreferences.includes("avoid-humidity") && month.humidity === "high") climateFit -= 40;
    if (brief.climatePreferences.includes("avoid-heat") && month.temperatureBand === "hot") climateFit -= 30;
    if (brief.climatePreferences.includes("avoid-cold") && (month.temperatureBand === "cold" || month.temperatureBand === "cool")) climateFit -= 30;
    if (brief.climatePreferences.includes("avoid-rain") && month.rainfall === "high") climateFit -= 30;
    if (brief.climatePreferences.includes("want-snow") && !(destination.interests.snow && destination.interests.snow >= 50)) climateFit -= 40;
    climateFit = clamp(climateFit);
  }

  let crowdFit = 85;
  if (brief.crowdTolerance === "low" && month) {
    crowdFit = month.crowdLevel === "high" ? 40 : month.crowdLevel === "medium" ? 75 : 100;
  }

  const budgetBandFit =
    brief.budgetBand === "unknown"
      ? 80
      : destination.budgetBands.includes(brief.budgetBand)
        ? 100
        : 45;

  const hours = destination.travelPracticality.averageFlightHoursFromIndia;
  let flightToleranceFit = 85;
  if (brief.flightTolerance === "short") flightToleranceFit = hours <= 5 ? 100 : hours <= 8 ? 55 : 25;
  else if (brief.flightTolerance === "medium") flightToleranceFit = hours <= 9 ? 95 : 60;
  else {
    flightToleranceFit = clamp(110 - hours * 5);
    const sensitive = brief.childrenAges.some((a) => a <= 6) || brief.seniorTravellers > 0;
    if (sensitive) flightToleranceFit = clamp(flightToleranceFit - hours * 3);
  }

  let accessibilityFit = 100;
  if (brief.accessibilityNeeds.length > 0) {
    accessibilityFit = destination.travelPracticality.accessibilityScore;
    if (destination.travelPracticality.walkingIntensity === "high") accessibilityFit = clamp(accessibilityFit - 15);
    if (destination.travelPracticality.roadTransferBurden === "high") accessibilityFit = clamp(accessibilityFit - 10);
  }

  const practicalityFit = Math.round(
    destination.travelPracticality.publicTransportEase * 0.4 +
      destination.travelPracticality.medicalAccessScore * 0.3 +
      (destination.travelPracticality.roadTransferBurden === "low" ? 100 : destination.travelPracticality.roadTransferBurden === "medium" ? 70 : 40) * 0.3,
  );

  const knowledgeConfidence = destination.confidence;

  const overall = round1(
    clamp(
      seasonFit * 0.18 +
        travellerTypeFit * 0.13 +
        childAgeFit * 0.08 +
        seniorFit * 0.05 +
        interestFit * 0.14 +
        durationFit * 0.07 +
        paceFit * 0.05 +
        climateFit * 0.06 +
        crowdFit * 0.04 +
        budgetBandFit * 0.07 +
        flightToleranceFit * 0.05 +
        accessibilityFit * 0.04 +
        practicalityFit * 0.04 -
        dislikesPenalty,
    ),
  );

  return {
    seasonFit: round1(seasonFit),
    travellerTypeFit: round1(travellerTypeFit),
    childAgeFit: round1(childAgeFit),
    seniorFit: round1(seniorFit),
    interestFit: round1(interestFit),
    dislikesPenalty: round1(dislikesPenalty),
    durationFit: round1(durationFit),
    paceFit: round1(paceFit),
    climateFit: round1(climateFit),
    crowdFit: round1(crowdFit),
    budgetBandFit: round1(budgetBandFit),
    flightToleranceFit: round1(flightToleranceFit),
    accessibilityFit: round1(accessibilityFit),
    practicalityFit: round1(practicalityFit),
    knowledgeConfidence: round1(knowledgeConfidence),
    overall,
  };
}

// ---------- Explanation ----------

function confidenceLabel(score: RecommendationScore): "high" | "good" | "moderate" {
  if (score.knowledgeConfidence >= 85 && score.overall >= 75) return "high";
  if (score.overall >= 60) return "good";
  return "moderate";
}

function buildReasons(
  destination: DestinationIntelligence,
  brief: TravelBrief,
  score: RecommendationScore,
): string[] {
  const reasons: string[] = [];
  const month = brief.travelMonth
    ? destination.monthlyIntelligence.find((m) => m.month === brief.travelMonth)
    : undefined;

  if (month && month.seasonScore >= 75) {
    reasons.push(
      `${MONTH_NAMES[month.month - 1]} is ${month.seasonLabel.toLowerCase()} here${month.highlights[0] ? ` — ${month.highlights[0].toLowerCase()}` : ""}.`,
    );
  }
  if (brief.travellerType === "family" && destination.suitability.family >= 80) {
    reasons.push("Strong family fit, with attractions that work across your children's ages.");
  }
  if (brief.travellerType === "honeymoon" && destination.suitability.honeymoon >= 85) {
    reasons.push("A proven honeymoon favourite with romance built into the setting.");
  }
  if ((brief.seniorTravellers > 0 || brief.travellerType === "senior") && destination.suitability.seniors >= 80) {
    reasons.push("Comfortable for senior travellers — gentle pacing options and good medical access.");
  }
  if (score.interestFit >= 75 && brief.interests.length > 0) {
    const top = [...brief.interests]
      .sort((a, b) => (destination.interests[b] ?? 0) - (destination.interests[a] ?? 0))
      .slice(0, 2);
    reasons.push(`Matches your interest in ${top.join(" and ")}.`);
  }
  if (brief.dietaryPreferences.includes("vegetarian") && destination.food.vegetarianFriendly >= 80) {
    reasons.push("Vegetarian dining is genuinely easy here.");
  }
  if (brief.dietaryPreferences.includes("halal") && destination.food.halalFriendly >= 85) {
    reasons.push("Halal food is widely available.");
  }
  if (destination.travelPracticality.averageFlightHoursFromIndia <= 5) {
    reasons.push(`Short travel time — about ${destination.travelPracticality.averageFlightHoursFromIndia} flight hours from India.`);
  }
  if (brief.durationNights && Math.abs(brief.durationNights - destination.idealNights) <= 1) {
    reasons.push(`${brief.durationNights} nights sits right in this destination's sweet spot.`);
  }
  if (reasons.length < 2) reasons.push(destination.summary.split(".")[0] + ".");
  return reasons.slice(0, 3);
}

const DIRECTION_LABELS: Record<RecommendationDirection, string> = {
  "best-match": "Best Match",
  "best-for-taste": "Best for Your Taste",
  "something-special": "Something Special",
};

function bestForLabel(destination: DestinationIntelligence, brief: TravelBrief): string {
  if (brief.travellerType === "honeymoon") return destination.suitability.honeymoon >= 85 ? "Made for honeymoons" : "Great for couples";
  if (brief.travellerType === "family") return destination.suitability.family >= 85 ? "A family favourite" : "Works well for families";
  if (brief.travellerType === "senior") return "Senior-friendly pacing";
  const top = Object.entries(destination.interests).sort((a, b) => b[1] - a[1])[0];
  return top ? `Best for ${top[0]} lovers` : destination.idealTraveller;
}

/**
 * Three named experiences that make the destination feel real on the card —
 * always from KTIE, matched to who's travelling, never invented.
 */
function signatureExperiences(
  attractions: AttractionIntelligence[],
  brief: TravelBrief,
): string[] {
  const fits = (a: AttractionIntelligence): number => {
    let rank = 0;
    if (brief.travellerType === "family" && a.idealFor.includes("children")) rank += 4;
    if (
      (brief.travellerType === "honeymoon" || brief.travellerType === "couple") &&
      (a.idealFor.includes("honeymoon") || a.idealFor.includes("couple"))
    ) rank += 4;
    if ((brief.seniorTravellers > 0 || brief.travellerType === "senior") && a.idealFor.includes("seniors")) rank += 4;
    for (const interest of brief.interests) {
      if (a.idealFor.includes(interest)) rank += 2;
    }
    if (a.minimumAge && brief.childrenAges.some((c) => c < a.minimumAge!)) rank -= 10;
    return rank;
  };
  return [...attractions]
    .sort((a, b) => fits(b) - fits(a))
    .slice(0, 3)
    .map((a) => a.name);
}

function toRecommendation(
  destination: DestinationIntelligence,
  brief: TravelBrief,
  score: RecommendationScore,
  direction: RecommendationDirection,
  destinationAttractions: AttractionIntelligence[],
): Recommendation {
  const month = brief.travelMonth
    ? destination.monthlyIntelligence.find((m) => m.month === brief.travelMonth)
    : undefined;
  const verifyWithExpert = [
    "Visa and entry requirements for your nationality",
    ...(month?.warnings ?? []),
    ...destination.practicalWarnings.slice(0, 1),
  ];
  return {
    conceptId: `${destination.slug}-${direction}`,
    destinationSlug: destination.slug,
    destinationName: destination.name,
    country: destination.countryName,
    positioningLine: destination.positioningLine,
    direction,
    directionLabel: DIRECTION_LABELS[direction],
    bestForLabel: bestForLabel(destination, brief),
    seasonalSummary: month
      ? `${MONTH_NAMES[month.month - 1]}: ${month.seasonLabel.toLowerCase()} — ${month.temperatureBand} temperatures, ${month.rainfall} rainfall, ${month.crowdLevel} crowds`
      : "Season fit depends on your final travel dates.",
    idealNights: destination.idealNights,
    reasons: buildReasons(destination, brief, score),
    signatureExperiences: signatureExperiences(destinationAttractions, brief),
    tradeOff: destination.tradeOffs[0] ?? "Your Klar expert will confirm the practical details.",
    whoMayNotEnjoy: destination.whoShouldAvoid[0] ?? "",
    verifyWithExpert: verifyWithExpert.slice(0, 3),
    confidenceLabel: confidenceLabel(score),
    score,
  };
}

// ---------- Three directions with honest fallback ----------

const DEFENSIBLE_MINIMUM = 50;

export function recommendDirections(
  brief: TravelBrief,
  pool?: DestinationIntelligence[],
): RecommendationResult {
  const candidates = pool ?? getEligibleDestinations();
  const excluded: RecommendationResult["excluded"] = [];

  const survivors = candidates.filter((d) => {
    const reasons = hardExclusions(d, brief);
    if (reasons.length > 0) {
      excluded.push({ slug: d.slug, reasons });
      return false;
    }
    return true;
  });

  const scored = survivors
    .map((destination) => ({ destination, score: scoreDestination(destination, brief) }))
    .filter((c) => c.score.overall >= DEFENSIBLE_MINIMUM)
    .sort((a, b) => b.score.overall - a.score.overall);

  const build = (
    c: { destination: DestinationIntelligence; score: RecommendationScore },
    direction: RecommendationDirection,
  ) => toRecommendation(c.destination, brief, c.score, direction, getAttractions(c.destination.slug));

  if (scored.length === 0) {
    return {
      recommendations: [],
      limitedOptions: true,
      limitedOptionsMessage:
        "I couldn't find a direction I can honestly stand behind for these requirements. A Klar expert can look beyond my verified destinations — or we can adjust the month, duration or must-haves together.",
      excluded,
    };
  }

  const bestMatch = scored[0];
  const results: Recommendation[] = [build(bestMatch, "best-match")];

  const tasteSorted = scored
    .filter((c) => c.destination.slug !== bestMatch.destination.slug)
    .sort((a, b) => b.score.interestFit - a.score.interestFit || b.score.overall - a.score.overall);
  const bestForTaste = tasteSorted[0];
  if (bestForTaste) results.push(build(bestForTaste, "best-for-taste"));

  const remaining = scored.filter(
    (c) =>
      c.destination.slug !== bestMatch.destination.slug &&
      c.destination.slug !== bestForTaste?.destination.slug,
  );
  // Something Special: prefer a strong-but-less-obvious pick (lower
  // first-trip familiarity), never below the defensible threshold.
  const special = [...remaining].sort(
    (a, b) =>
      b.score.overall * 0.6 + (100 - b.destination.suitability.firstInternationalTrip) * 0.4 -
      (a.score.overall * 0.6 + (100 - a.destination.suitability.firstInternationalTrip) * 0.4),
  )[0];
  if (special) results.push(build(special, "something-special"));

  const limitedOptions = results.length < 3;
  return {
    recommendations: results,
    limitedOptions,
    limitedOptionsMessage: limitedOptions
      ? results.length === 2
        ? "I found two strong directions. I'd rather show you two honest options than add a weak third."
        : "Only one direction genuinely fits these requirements — I'd rather be honest than pad the list."
      : undefined,
    excluded,
  };
}
