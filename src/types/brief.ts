export type TravellerType =
  | "family"
  | "couple"
  | "honeymoon"
  | "solo"
  | "friends"
  | "senior"
  | "multi-generational"
  | "corporate"
  | "unknown";

export type Pace = "relaxed" | "balanced" | "active" | "unknown";

export type BudgetBand = "value" | "comfort" | "premium" | "luxury" | "unknown";

export type FlightTolerance = "short" | "medium" | "long" | "no-preference";

export type CrowdTolerance = "low" | "medium" | "high";

/** Domestic = within India; international = abroad; unset = open to both. */
export type TravelScope = "domestic" | "international";

export type TravelBrief = {
  originalPrompt: string;

  originCountry?: string;
  originCity?: string;
  departureAirport?: string;

  destinationPreferences: string[];
  excludedDestinations: string[];

  travelScope?: TravelScope;

  travelMonth?: number;
  startDate?: string;
  endDate?: string;
  flexibilityDays?: number;
  durationNights?: number;

  travellerType: TravellerType;

  adults: number;
  childrenAges: number[];
  seniorTravellers: number;

  pace: Pace;

  interests: string[];
  dislikes: string[];

  occasion?: string;

  accessibilityNeeds: string[];
  dietaryPreferences: string[];

  flightTolerance?: FlightTolerance;

  climatePreferences: string[];
  crowdTolerance?: CrowdTolerance;

  budgetBand: BudgetBand;

  decisionPriorities: string[];
};

export function emptyBrief(originalPrompt = ""): TravelBrief {
  return {
    originalPrompt,
    destinationPreferences: [],
    excludedDestinations: [],
    travellerType: "unknown",
    adults: 2,
    childrenAges: [],
    seniorTravellers: 0,
    pace: "unknown",
    interests: [],
    dislikes: [],
    accessibilityNeeds: [],
    dietaryPreferences: [],
    climatePreferences: [],
    budgetBand: "unknown",
    decisionPriorities: [],
  };
}

/** Fields the conversation engine tries to fill before recommending. */
export type BriefField =
  | "originCity"
  | "travelMonth"
  | "durationNights"
  | "travellerType"
  | "childrenAges"
  | "pace"
  | "interests"
  | "budgetBand";

export function missingBriefFields(brief: TravelBrief): BriefField[] {
  const missing: BriefField[] = [...missingEssentialFields(brief)];
  if (brief.pace === "unknown") missing.push("pace");
  if (brief.interests.length === 0) missing.push("interests");
  if (brief.budgetBand === "unknown") missing.push("budgetBand");
  return missing;
}

/**
 * The only questions allowed to stand between a traveller and their matches:
 * period, duration, who's travelling (+ ages for a family) and origin.
 * Everything else improves recommendations but must never block them —
 * that's the 4–6 answer promise.
 */
export function missingEssentialFields(brief: TravelBrief): BriefField[] {
  const missing: BriefField[] = [];
  if (!brief.travelMonth) missing.push("travelMonth");
  if (!brief.durationNights) missing.push("durationNights");
  if (brief.travellerType === "unknown") missing.push("travellerType");
  if (brief.travellerType === "family" && brief.childrenAges.length === 0) {
    missing.push("childrenAges");
  }
  if (!brief.originCity) missing.push("originCity");
  return missing;
}

/** The brief supports recommendations once the core trip shape is known. */
export function briefReadyForRecommendations(brief: TravelBrief): boolean {
  return Boolean(
    brief.travelMonth && brief.durationNights && brief.travellerType !== "unknown",
  );
}
