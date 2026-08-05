import type { BudgetBand, Pace } from "./brief";

export type KnowledgeStatus = "skeleton" | "reviewed" | "verified";

export type Reliability = "high" | "medium" | "low";
export type Freshness = "current" | "review-due" | "stale";

export type KnowledgeSource = {
  id: string;
  sourceType:
    | "official-tourism-board"
    | "government"
    | "airport"
    | "meteorological-service"
    | "public-transport-authority"
    | "official-attraction"
    | "klar-expert"
    | "licensed-data-provider";
  sourceName: string;
  sourceUrl?: string;
  accessedAt: string;
  applicableFields: string[];
  reliability: Reliability;
  freshness: Freshness;
};

// ---------- Country intelligence (Tier 0 / reviewed overlays) ----------

export type CountryIntelligence = {
  iso2: string;
  iso3: string;
  name: string;
  region: string;
  subregion: string;

  currencies: string[];
  languages: string[];
  timezones: string[];

  climateZones: string[];
  seasonOverview: string[];

  travellerFit?: {
    family: number;
    children: number;
    teenagers: number;
    seniors: number;
    honeymoon: number;
    solo: number;
    firstInternationalTrip: number;
  };

  travelPracticality?: {
    typicalFlightTimeFromIndia?: number;
    connectivityLevel: "strong" | "moderate" | "limited" | "unknown";
    internalTransportEase: number;
    accessibilityMaturity: number;
    medicalAccess: number;
    languageEaseForIndianTravellers: number;
  };

  foodPracticality?: {
    vegetarianEase: number;
    indianFoodAvailability: number;
    halalEase: number;
  };

  stableAdvisoryNotes: string[];
  dynamicFieldsRequireVerification: string[];

  status: KnowledgeStatus;

  sources: KnowledgeSource[];
  reviewedAt?: string;
  nextReviewAt?: string;
};

// ---------- Destination intelligence (Tier 1 / Tier 2) ----------

export type MonthIntelligence = {
  month: number; // 1-12
  seasonScore: number; // 0-100
  seasonLabel: string;
  rainfall: "low" | "medium" | "high";
  humidity: "low" | "medium" | "high";
  temperatureBand: "cold" | "cool" | "mild" | "warm" | "hot";
  crowdLevel: "low" | "medium" | "high";
  highlights: string[];
  warnings: string[];
};

export type DestinationIntelligence = {
  slug: string;
  name: string;
  countryIso2: string;
  countryName: string;
  region: string;

  summary: string;
  positioningLine: string;
  idealTraveller: string;

  status: KnowledgeStatus;
  tier: 1 | 2;

  minimumNights: number;
  idealNights: number;
  maximumNights: number;

  suitablePaces: Pace[];

  /** interest key → 0-100 strength */
  interests: Record<string, number>;

  suitability: {
    family: number;
    toddlers: number;
    children5To10: number;
    teenagers: number;
    seniors: number;
    honeymoon: number;
    solo: number;
    firstInternationalTrip: number;
  };

  food: {
    vegetarianFriendly: number;
    indianFoodAvailability: number;
    halalFriendly: number;
    localCuisineScore: number;
    streetFoodScore: number;
    fineDiningScore: number;
  };

  travelPracticality: {
    averageFlightHoursFromIndia: number;
    walkingIntensity: "low" | "medium" | "high";
    publicTransportEase: number;
    roadTransferBurden: "low" | "medium" | "high";
    accessibilityScore: number;
    medicalAccessScore: number;
  };

  budgetBands: Exclude<BudgetBand, "unknown">[];

  climateTags: string[];

  monthlyIntelligence: MonthIntelligence[];

  commonTripCombinations: string[];
  commonMistakes: string[];
  packingConsiderations: string[];
  practicalWarnings: string[];

  tradeOffs: string[];
  whoShouldAvoid: string[];

  confidence: number; // 0-100 data confidence
  version: string;
  reviewedBy: string;
  reviewedAt: string;
  nextReviewAt: string;

  sources: KnowledgeSource[];
};

// ---------- Attraction intelligence ----------

export type AttractionCategory =
  | "landmark"
  | "museum"
  | "beach"
  | "nature"
  | "theme-park"
  | "food"
  | "shopping"
  | "culture"
  | "religious"
  | "adventure"
  | "wellness"
  | "nightlife"
  | "experience";

export type AttractionIntelligence = {
  id: string;
  destinationSlug: string;
  name: string;
  category: AttractionCategory;

  summary: string;

  idealFor: string[];
  unsuitableFor: string[];

  minimumAge?: number;
  typicalDurationHours?: number;

  physicalIntensity: "low" | "medium" | "high";
  indoorOutdoor: "indoor" | "outdoor" | "mixed";
  weatherSensitivity: "low" | "medium" | "high";

  bestTimeOfDay?: string;
  closedDays?: string[];

  accessibilityNotes: string[];
  childNotes: string[];
  seniorNotes: string[];
  practicalNotes: string[];

  status: "reviewed" | "verified" | "requires-verification";

  sources: KnowledgeSource[];
};
