/**
 * Authoring helpers used by the knowledge generation scripts only.
 * The Git-managed JSON under knowledge/ is the runtime source of truth;
 * these builders exist so the initial pack can be authored compactly.
 */
import type {
  AttractionCategory,
  AttractionIntelligence,
  DestinationIntelligence,
  KnowledgeSource,
  MonthIntelligence,
} from "../../src/types/knowledge";

type TempBand = MonthIntelligence["temperatureBand"];

export const TEMP_PRESETS: Record<string, TempBand[]> = {
  tropical: ["warm", "warm", "hot", "hot", "hot", "warm", "warm", "warm", "warm", "warm", "warm", "warm"],
  equatorialHot: ["hot", "hot", "hot", "hot", "hot", "hot", "hot", "hot", "hot", "hot", "hot", "hot"],
  desert: ["mild", "warm", "warm", "hot", "hot", "hot", "hot", "hot", "hot", "warm", "warm", "mild"],
  temperateNorth: ["cold", "cold", "cool", "mild", "warm", "warm", "hot", "hot", "warm", "mild", "cool", "cold"],
  temperateSouth: ["hot", "hot", "warm", "mild", "cool", "cold", "cold", "cold", "cool", "mild", "warm", "warm"],
  alpine: ["cold", "cold", "cold", "cool", "mild", "warm", "warm", "warm", "mild", "cool", "cold", "cold"],
  mediterranean: ["cool", "cool", "mild", "mild", "warm", "hot", "hot", "hot", "warm", "mild", "cool", "cool"],
  highlandTropical: ["mild", "mild", "warm", "warm", "warm", "mild", "mild", "mild", "mild", "mild", "mild", "mild"],
};

export type MonthBuildSpec = {
  /** 12 season scores, January → December, 0-100 */
  scores: number[];
  temps: keyof typeof TEMP_PRESETS | TempBand[];
  tempOverrides?: Record<number, TempBand>;
  rainy?: number[];
  veryRainy?: number[];
  humid?: number[];
  dry?: number[];
  crowded?: number[];
  quiet?: number[];
  highlights?: Record<number, string[]>;
  warnings?: Record<number, string[]>;
};

function seasonLabel(scoreValue: number): string {
  if (scoreValue >= 80) return "Excellent time to visit";
  if (scoreValue >= 65) return "Good season";
  if (scoreValue >= 50) return "Shoulder season";
  return "Off season";
}

export function buildMonths(spec: MonthBuildSpec): MonthIntelligence[] {
  if (spec.scores.length !== 12) throw new Error("Need exactly 12 season scores");
  const temps = Array.isArray(spec.temps) ? spec.temps : TEMP_PRESETS[spec.temps];
  if (!temps || temps.length !== 12) throw new Error("Invalid temperature preset");
  return spec.scores.map((score, i) => {
    const month = i + 1;
    return {
      month,
      seasonScore: score,
      seasonLabel: seasonLabel(score),
      rainfall: spec.veryRainy?.includes(month) ? "high" : spec.rainy?.includes(month) ? "medium" : "low",
      humidity: spec.humid?.includes(month) ? "high" : spec.dry?.includes(month) ? "low" : "medium",
      temperatureBand: spec.tempOverrides?.[month] ?? temps[i],
      crowdLevel: spec.crowded?.includes(month) ? "high" : spec.quiet?.includes(month) ? "low" : "medium",
      highlights: spec.highlights?.[month] ?? [],
      warnings: spec.warnings?.[month] ?? [],
    };
  });
}

export const KLAR_EXPERT_SOURCE: KnowledgeSource = {
  id: "klar-knowledge-pack-2026",
  sourceType: "klar-expert",
  sourceName: "Klar destination knowledge pack (expert-compiled)",
  accessedAt: "2026-08-01",
  applicableFields: ["*"],
  reliability: "medium",
  freshness: "current",
};

export const TOURISM_BOARD_SOURCE = (name: string): KnowledgeSource => ({
  id: `tourism-board-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  sourceType: "official-tourism-board",
  sourceName: name,
  accessedAt: "2026-08-01",
  applicableFields: ["seasonality", "attractions", "practicality"],
  reliability: "high",
  freshness: "current",
});

export type DestinationSeed = Omit<
  DestinationIntelligence,
  "status" | "tier" | "confidence" | "version" | "reviewedBy" | "reviewedAt" | "nextReviewAt" | "sources"
> & {
  status?: DestinationIntelligence["status"];
  tier?: DestinationIntelligence["tier"];
  confidence?: number;
  extraSources?: KnowledgeSource[];
};

export function dest(seed: DestinationSeed): DestinationIntelligence {
  const { extraSources, ...rest } = seed;
  return {
    ...rest,
    status: seed.status ?? "verified",
    tier: seed.tier ?? 1,
    confidence: seed.confidence ?? 80,
    version: "2.0.0",
    reviewedBy: "Klar knowledge team — stable-facts editorial review (re-confirm before major campaigns)",
    reviewedAt: "2026-08-01",
    nextReviewAt: "2026-11-01",
    sources: [KLAR_EXPERT_SOURCE, ...(extraSources ?? [])],
  };
}

// ---------- Attractions ----------

type CategoryDefaults = {
  physicalIntensity: AttractionIntelligence["physicalIntensity"];
  indoorOutdoor: AttractionIntelligence["indoorOutdoor"];
  weatherSensitivity: AttractionIntelligence["weatherSensitivity"];
  typicalDurationHours: number;
};

const CATEGORY_DEFAULTS: Record<AttractionCategory, CategoryDefaults> = {
  landmark: { physicalIntensity: "low", indoorOutdoor: "mixed", weatherSensitivity: "medium", typicalDurationHours: 2 },
  museum: { physicalIntensity: "low", indoorOutdoor: "indoor", weatherSensitivity: "low", typicalDurationHours: 2.5 },
  beach: { physicalIntensity: "low", indoorOutdoor: "outdoor", weatherSensitivity: "high", typicalDurationHours: 4 },
  nature: { physicalIntensity: "medium", indoorOutdoor: "outdoor", weatherSensitivity: "high", typicalDurationHours: 4 },
  "theme-park": { physicalIntensity: "medium", indoorOutdoor: "mixed", weatherSensitivity: "medium", typicalDurationHours: 7 },
  food: { physicalIntensity: "low", indoorOutdoor: "mixed", weatherSensitivity: "low", typicalDurationHours: 2.5 },
  shopping: { physicalIntensity: "low", indoorOutdoor: "indoor", weatherSensitivity: "low", typicalDurationHours: 3 },
  culture: { physicalIntensity: "medium", indoorOutdoor: "mixed", weatherSensitivity: "medium", typicalDurationHours: 3 },
  religious: { physicalIntensity: "medium", indoorOutdoor: "mixed", weatherSensitivity: "medium", typicalDurationHours: 2 },
  adventure: { physicalIntensity: "high", indoorOutdoor: "outdoor", weatherSensitivity: "high", typicalDurationHours: 4 },
  wellness: { physicalIntensity: "low", indoorOutdoor: "indoor", weatherSensitivity: "low", typicalDurationHours: 3 },
  nightlife: { physicalIntensity: "low", indoorOutdoor: "mixed", weatherSensitivity: "low", typicalDurationHours: 3 },
  experience: { physicalIntensity: "medium", indoorOutdoor: "mixed", weatherSensitivity: "medium", typicalDurationHours: 3 },
};

export type AttractionSeed = {
  name: string;
  category: AttractionCategory;
  summary: string;
  idealFor?: string[];
  unsuitableFor?: string[];
  minimumAge?: number;
  typicalDurationHours?: number;
  physicalIntensity?: AttractionIntelligence["physicalIntensity"];
  indoorOutdoor?: AttractionIntelligence["indoorOutdoor"];
  weatherSensitivity?: AttractionIntelligence["weatherSensitivity"];
  bestTimeOfDay?: string;
  accessibilityNotes?: string[];
  childNotes?: string[];
  seniorNotes?: string[];
  practicalNotes?: string[];
  status?: AttractionIntelligence["status"];
};

const DEFAULT_IDEAL_FOR: Partial<Record<AttractionCategory, string[]>> = {
  "theme-park": ["family", "children", "teenagers"],
  beach: ["family", "couple", "relaxation"],
  museum: ["culture", "history", "family"],
  nature: ["nature", "couple", "family"],
  adventure: ["adventure", "friends", "teenagers"],
  wellness: ["relaxation", "couple", "senior"],
  nightlife: ["friends", "couple", "nightlife"],
  shopping: ["shopping", "family", "friends"],
  food: ["food", "couple", "friends"],
  culture: ["culture", "couple", "senior"],
  religious: ["culture", "senior", "family"],
  landmark: ["family", "couple", "first-visit"],
  experience: ["family", "couple", "friends"],
};

export function attractions(
  destinationSlug: string,
  seeds: AttractionSeed[],
): AttractionIntelligence[] {
  return seeds.map((seed) => {
    const defaults = CATEGORY_DEFAULTS[seed.category];
    const id = `${destinationSlug}-${seed.name
      .toLowerCase()
      .replace(/['’]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}`;
    return {
      id,
      destinationSlug,
      name: seed.name,
      category: seed.category,
      summary: seed.summary,
      idealFor: seed.idealFor ?? DEFAULT_IDEAL_FOR[seed.category] ?? ["family", "couple"],
      unsuitableFor: seed.unsuitableFor ?? [],
      minimumAge: seed.minimumAge,
      typicalDurationHours: seed.typicalDurationHours ?? defaults.typicalDurationHours,
      physicalIntensity: seed.physicalIntensity ?? defaults.physicalIntensity,
      indoorOutdoor: seed.indoorOutdoor ?? defaults.indoorOutdoor,
      weatherSensitivity: seed.weatherSensitivity ?? defaults.weatherSensitivity,
      bestTimeOfDay: seed.bestTimeOfDay,
      closedDays: undefined,
      accessibilityNotes: seed.accessibilityNotes ?? [],
      childNotes: seed.childNotes ?? [],
      seniorNotes: seed.seniorNotes ?? [],
      practicalNotes: seed.practicalNotes ?? ["Opening hours and closures: verify with a Klar expert or the official site before travel."],
      status: seed.status ?? "reviewed",
      sources: [KLAR_EXPERT_SOURCE],
    };
  });
}
