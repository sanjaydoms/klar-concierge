export type RecommendationDirection =
  | "best-match"
  | "best-for-taste"
  | "something-special";

export type RecommendationScore = {
  seasonFit: number;
  travellerTypeFit: number;
  childAgeFit: number;
  seniorFit: number;
  interestFit: number;
  dislikesPenalty: number;
  durationFit: number;
  paceFit: number;
  climateFit: number;
  crowdFit: number;
  budgetBandFit: number;
  flightToleranceFit: number;
  accessibilityFit: number;
  practicalityFit: number;
  knowledgeConfidence: number;
  overall: number;
};

export type ExclusionReason =
  | "explicitly-excluded"
  | "not-verified"
  | "season-below-threshold"
  | "duration-impossible"
  | "accessibility-conflict"
  | "child-age-conflict"
  | "senior-burden"
  | "climate-conflict"
  | "flight-tolerance-conflict"
  | "knowledge-stale";

export type Recommendation = {
  conceptId: string;
  destinationSlug: string;
  destinationName: string;
  country: string;
  positioningLine: string;
  direction: RecommendationDirection;
  directionLabel: string;
  bestForLabel: string;
  seasonalSummary: string;
  idealNights: number;
  reasons: string[];
  tradeOff: string;
  whoMayNotEnjoy: string;
  verifyWithExpert: string[];
  confidenceLabel: "high" | "good" | "moderate";
  score: RecommendationScore;
};

/** Honest result: two strong options beat a forced weak third. */
export type RecommendationResult = {
  recommendations: Recommendation[];
  limitedOptions: boolean;
  limitedOptionsMessage?: string;
  excluded: Array<{ slug: string; reasons: ExclusionReason[] }>;
};

// ---------- Itinerary ----------

export type ItineraryBlock = {
  title: string;
  description: string;
  category?: string;
  optional?: boolean;
  attractionId?: string;
};

export type ItineraryDay = {
  day: number;
  title: string;
  baseLocation: string;
  pace: "light" | "balanced" | "active";

  morning: ItineraryBlock[];
  afternoon: ItineraryBlock[];
  evening: ItineraryBlock[];

  flexibilityOption?: string;
  weatherAlternative?: string;

  childNotes: string[];
  seniorNotes: string[];
  accessibilityNotes: string[];
  practicalNotes: string[];
};

// ---------- Comparison ----------

export type ComparisonDimension = {
  key: string;
  label: string;
  winnerSlug: string | "tie";
  values: Record<string, string>; // slug → human-readable value
  reason: string;
};

export type ComparisonResult = {
  slugs: string[];
  month?: number;
  decisionSummary: string;
  dimensions: ComparisonDimension[];
  finalRecommendationSlug: string;
  finalReasons: string[];
  conditions: string[];
  confidenceLabel: "high" | "good" | "moderate";
  alternativeIfPrioritiesChange: string;
};
