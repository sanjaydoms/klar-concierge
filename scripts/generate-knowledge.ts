/**
 * Generates the Git-managed knowledge files under knowledge/ from the
 * authoring sources, then compiles knowledge/compiled/knowledge.json which the
 * application imports. Run: npm run knowledge:generate
 *
 * After initial generation, the JSON files under knowledge/ are the source of
 * truth — the Klar team edits them directly and runs knowledge:build.
 */
import fs from "node:fs";
import path from "node:path";
import countries from "world-countries";
import { DESTINATIONS_1 } from "./authoring/destinations-1";
import { DESTINATIONS_2 } from "./authoring/destinations-2";
import { DESTINATIONS_3 } from "./authoring/destinations-3";
import { ATTRACTIONS_1 } from "./authoring/attractions-1";
import { ATTRACTIONS_2 } from "./authoring/attractions-2";
import { ATTRACTIONS_3 } from "./authoring/attractions-3";
import type { CountryIntelligence, DestinationIntelligence } from "../src/types/knowledge";
import { KLAR_EXPERT_SOURCE } from "./authoring/builders";

const ROOT = path.join(__dirname, "..");
const KNOWLEDGE = path.join(ROOT, "knowledge");

const destinations = [...DESTINATIONS_1, ...DESTINATIONS_2, ...DESTINATIONS_3];
const attractions = [...ATTRACTIONS_1, ...ATTRACTIONS_2, ...ATTRACTIONS_3];

function writeJson(file: string, data: unknown) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
}

// ---------- Tier 0: full ISO country registry (skeletons) ----------

const destinationsByCountry = new Map<string, DestinationIntelligence[]>();
for (const d of destinations) {
  const list = destinationsByCountry.get(d.countryIso2) ?? [];
  list.push(d);
  destinationsByCountry.set(d.countryIso2, list);
}

function avg(nums: number[]): number {
  return Math.round(nums.reduce((a, b) => a + b, 0) / nums.length);
}

const registry: CountryIntelligence[] = countries
  .filter((c) => c.independent !== false || c.cca2 === "HK")
  .map((c) => {
    const dests = destinationsByCountry.get(c.cca2);
    const reviewed = Boolean(dests && dests.length > 0);
    const base: CountryIntelligence = {
      iso2: c.cca2,
      iso3: c.cca3,
      name: c.name.common,
      region: c.region,
      subregion: c.subregion ?? c.region,
      currencies: Object.keys(c.currencies ?? {}),
      languages: Object.values(c.languages ?? {}),
      timezones: [], // populated on review — world-countries does not carry tz
      climateZones: [],
      seasonOverview: [],
      stableAdvisoryNotes: [],
      dynamicFieldsRequireVerification: [
        "visa rules", "entry requirements", "safety advisories", "health requirements",
      ],
      status: "skeleton",
      sources: [],
    };
    if (reviewed && dests) {
      return {
        ...base,
        climateZones: Array.from(new Set(dests.flatMap((d) => d.climateTags))),
        seasonOverview: dests.map(
          (d) =>
            `${d.name}: best months score highest around ${bestMonths(d).join(", ")}`,
        ),
        travellerFit: {
          family: avg(dests.map((d) => d.suitability.family)),
          children: avg(dests.map((d) => d.suitability.children5To10)),
          teenagers: avg(dests.map((d) => d.suitability.teenagers)),
          seniors: avg(dests.map((d) => d.suitability.seniors)),
          honeymoon: avg(dests.map((d) => d.suitability.honeymoon)),
          solo: avg(dests.map((d) => d.suitability.solo)),
          firstInternationalTrip: avg(dests.map((d) => d.suitability.firstInternationalTrip)),
        },
        travelPracticality: {
          typicalFlightTimeFromIndia: dests[0].travelPracticality.averageFlightHoursFromIndia,
          connectivityLevel: "strong" as const,
          internalTransportEase: avg(dests.map((d) => d.travelPracticality.publicTransportEase)),
          accessibilityMaturity: avg(dests.map((d) => d.travelPracticality.accessibilityScore)),
          medicalAccess: avg(dests.map((d) => d.travelPracticality.medicalAccessScore)),
          languageEaseForIndianTravellers: 70,
        },
        foodPracticality: {
          vegetarianEase: avg(dests.map((d) => d.food.vegetarianFriendly)),
          indianFoodAvailability: avg(dests.map((d) => d.food.indianFoodAvailability)),
          halalEase: avg(dests.map((d) => d.food.halalFriendly)),
        },
        status: "reviewed" as const,
        sources: [KLAR_EXPERT_SOURCE],
        reviewedAt: "2026-08-01",
        nextReviewAt: "2026-11-01",
      };
    }
    return base;
  })
  .sort((a, b) => a.name.localeCompare(b.name));

function bestMonths(d: DestinationIntelligence): string[] {
  const names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return [...d.monthlyIntelligence]
    .sort((a, b) => b.seasonScore - a.seasonScore)
    .slice(0, 3)
    .map((m) => names[m.month - 1]);
}

// ---------- Write per-entity files ----------

writeJson(path.join(KNOWLEDGE, "countries", "registry.json"), registry);

for (const d of destinations) {
  writeJson(path.join(KNOWLEDGE, "destinations", `${d.slug}.json`), d);
}

const attractionsByDest = new Map<string, typeof attractions>();
for (const a of attractions) {
  const list = attractionsByDest.get(a.destinationSlug) ?? [];
  list.push(a);
  attractionsByDest.set(a.destinationSlug, list);
}
for (const [slug, list] of attractionsByDest) {
  writeJson(path.join(KNOWLEDGE, "attractions", `${slug}.json`), list);
}

writeJson(path.join(KNOWLEDGE, "sources", "sources.json"), [KLAR_EXPERT_SOURCE]);

console.log(
  `Generated: ${registry.length} countries, ${destinations.length} destinations, ${attractions.length} attractions`,
);
console.log("Now run: npm run knowledge:build");
