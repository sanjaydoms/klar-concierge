import { z } from "zod";

export const knowledgeSourceSchema = z.object({
  id: z.string().min(1),
  sourceType: z.enum([
    "official-tourism-board",
    "government",
    "airport",
    "meteorological-service",
    "public-transport-authority",
    "official-attraction",
    "klar-expert",
    "licensed-data-provider",
  ]),
  sourceName: z.string().min(1),
  sourceUrl: z.string().url().optional(),
  accessedAt: z.string().min(4),
  applicableFields: z.array(z.string()),
  reliability: z.enum(["high", "medium", "low"]),
  freshness: z.enum(["current", "review-due", "stale"]),
});

const score = z.number().min(0).max(100);

export const monthIntelligenceSchema = z.object({
  month: z.number().int().min(1).max(12),
  seasonScore: score,
  seasonLabel: z.string().min(1),
  rainfall: z.enum(["low", "medium", "high"]),
  humidity: z.enum(["low", "medium", "high"]),
  temperatureBand: z.enum(["cold", "cool", "mild", "warm", "hot"]),
  crowdLevel: z.enum(["low", "medium", "high"]),
  highlights: z.array(z.string()),
  warnings: z.array(z.string()),
});

export const destinationSchema = z
  .object({
    slug: z.string().regex(/^[a-z0-9-]+$/),
    name: z.string().min(1),
    countryIso2: z.string().length(2),
    countryName: z.string().min(1),
    region: z.string().min(1),
    summary: z.string().min(40),
    positioningLine: z.string().min(10),
    idealTraveller: z.string().min(10),
    status: z.enum(["skeleton", "reviewed", "verified"]),
    tier: z.union([z.literal(1), z.literal(2)]),
    minimumNights: z.number().int().min(1),
    idealNights: z.number().int().min(1),
    maximumNights: z.number().int().min(1),
    suitablePaces: z.array(z.enum(["relaxed", "balanced", "active"])).min(1),
    interests: z.record(score),
    suitability: z.object({
      family: score,
      toddlers: score,
      children5To10: score,
      teenagers: score,
      seniors: score,
      honeymoon: score,
      solo: score,
      firstInternationalTrip: score,
    }),
    food: z.object({
      vegetarianFriendly: score,
      indianFoodAvailability: score,
      halalFriendly: score,
      localCuisineScore: score,
      streetFoodScore: score,
      fineDiningScore: score,
    }),
    travelPracticality: z.object({
      averageFlightHoursFromIndia: z.number().min(0).max(30),
      walkingIntensity: z.enum(["low", "medium", "high"]),
      publicTransportEase: score,
      roadTransferBurden: z.enum(["low", "medium", "high"]),
      accessibilityScore: score,
      medicalAccessScore: score,
    }),
    budgetBands: z.array(z.enum(["value", "comfort", "premium", "luxury"])).min(1),
    climateTags: z.array(z.string()).min(1),
    monthlyIntelligence: z.array(monthIntelligenceSchema).length(12),
    commonTripCombinations: z.array(z.string()),
    commonMistakes: z.array(z.string()).min(1),
    packingConsiderations: z.array(z.string()).min(1),
    practicalWarnings: z.array(z.string()),
    tradeOffs: z.array(z.string()).min(1),
    whoShouldAvoid: z.array(z.string()).min(1),
    confidence: score,
    version: z.string().min(1),
    reviewedBy: z.string().min(1),
    reviewedAt: z.string().min(4),
    nextReviewAt: z.string().min(4),
    sources: z.array(knowledgeSourceSchema).min(1),
  })
  .refine((d) => d.minimumNights <= d.idealNights && d.idealNights <= d.maximumNights, {
    message: "night bounds must satisfy minimum ≤ ideal ≤ maximum",
  });

export const attractionSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  destinationSlug: z.string().min(1),
  name: z.string().min(1),
  category: z.enum([
    "landmark", "museum", "beach", "nature", "theme-park", "food", "shopping",
    "culture", "religious", "adventure", "wellness", "nightlife", "experience",
  ]),
  summary: z.string().min(15),
  idealFor: z.array(z.string()).min(1),
  unsuitableFor: z.array(z.string()),
  minimumAge: z.number().int().min(0).optional(),
  typicalDurationHours: z.number().min(0.5).max(24).optional(),
  physicalIntensity: z.enum(["low", "medium", "high"]),
  indoorOutdoor: z.enum(["indoor", "outdoor", "mixed"]),
  weatherSensitivity: z.enum(["low", "medium", "high"]),
  bestTimeOfDay: z.string().optional(),
  closedDays: z.array(z.string()).optional(),
  accessibilityNotes: z.array(z.string()),
  childNotes: z.array(z.string()),
  seniorNotes: z.array(z.string()),
  practicalNotes: z.array(z.string()),
  status: z.enum(["reviewed", "verified", "requires-verification"]),
  sources: z.array(knowledgeSourceSchema).min(1),
});

export const countrySchema = z.object({
  iso2: z.string().length(2),
  iso3: z.string().length(3),
  name: z.string().min(1),
  region: z.string(),
  subregion: z.string(),
  currencies: z.array(z.string()),
  languages: z.array(z.string()),
  timezones: z.array(z.string()),
  climateZones: z.array(z.string()),
  seasonOverview: z.array(z.string()),
  travellerFit: z
    .object({
      family: score,
      children: score,
      teenagers: score,
      seniors: score,
      honeymoon: score,
      solo: score,
      firstInternationalTrip: score,
    })
    .optional(),
  travelPracticality: z
    .object({
      typicalFlightTimeFromIndia: z.number().min(0).max(30).optional(),
      connectivityLevel: z.enum(["strong", "moderate", "limited", "unknown"]),
      internalTransportEase: score,
      accessibilityMaturity: score,
      medicalAccess: score,
      languageEaseForIndianTravellers: score,
    })
    .optional(),
  foodPracticality: z
    .object({
      vegetarianEase: score,
      indianFoodAvailability: score,
      halalEase: score,
    })
    .optional(),
  stableAdvisoryNotes: z.array(z.string()),
  dynamicFieldsRequireVerification: z.array(z.string()),
  status: z.enum(["skeleton", "reviewed", "verified"]),
  sources: z.array(knowledgeSourceSchema),
  reviewedAt: z.string().optional(),
  nextReviewAt: z.string().optional(),
});

export const compiledKnowledgeSchema = z.object({
  generatedAt: z.string(),
  countries: z.array(countrySchema),
  destinations: z.array(destinationSchema),
  attractions: z.array(attractionSchema),
});
