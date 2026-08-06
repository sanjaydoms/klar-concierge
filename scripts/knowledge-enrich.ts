/**
 * Autonomous knowledge enrichment — replaces estimated climate with MEASURED
 * climate and attaches real, citable sources. No human input, no AI guesses:
 *
 *   - Open-Meteo archive (5 years of measured daily data) → monthly
 *     temperature/rainfall/humidity bands, deterministically mapped
 *   - Season scores clamped where they contradict measured weather
 *   - Wikipedia + Wikivoyage citations attached with access dates
 *   - Confidence recomputed: measured climate earns it, assertions don't
 *
 * Run (needs open internet — designed for CI):
 *   npm run knowledge:enrich              # all destinations
 *   npm run knowledge:enrich -- bali japan  # specific slugs
 *
 * Then: npm run knowledge:build
 */
import fs from "node:fs";
import path from "node:path";
import { DESTINATION_GEO } from "./lib/coordinates";
import {
  humidityLevel,
  rainfallLevel,
  reconcileSeasonScore,
  seasonLabelFor,
  temperatureBand,
} from "./lib/climate";
import {
  fetchMeasuredClimate,
  fetchWikipediaSummary,
  fetchWikivoyageExtract,
} from "./lib/evidence";
import type { DestinationIntelligence, KnowledgeSource } from "../src/types/knowledge";

const ROOT = path.join(__dirname, "..");
const DEST_DIR = path.join(ROOT, "knowledge", "destinations");

const PIPELINE_REVIEWER = "Klar autonomous knowledge pipeline (measured climate + cited sources)";

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function plusDays(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function upsertSource(sources: KnowledgeSource[], source: KnowledgeSource): KnowledgeSource[] {
  return [...sources.filter((s) => s.id !== source.id), source];
}

async function enrichDestination(slug: string): Promise<string[]> {
  const notes: string[] = [];
  const file = path.join(DEST_DIR, `${slug}.json`);
  const d = JSON.parse(fs.readFileSync(file, "utf8")) as DestinationIntelligence;
  const geo = DESTINATION_GEO[slug];
  if (!geo) throw new Error(`No coordinates registered for ${slug} — add it to scripts/lib/coordinates.ts`);

  // ---- Measured climate ----
  const climate = await fetchMeasuredClimate(geo.lat, geo.lon, geo.station);
  let clamped = 0;
  d.monthlyIntelligence = d.monthlyIntelligence.map((mi) => {
    const measured = climate.months.find((m) => m.month === mi.month)!;
    const newScore = reconcileSeasonScore(mi.seasonScore, measured);
    if (newScore !== mi.seasonScore) clamped++;
    return {
      ...mi,
      seasonScore: newScore,
      seasonLabel: seasonLabelFor(newScore),
      temperatureBand: temperatureBand(measured.meanMaxC),
      rainfall: rainfallLevel(measured.precipMm),
      humidity: humidityLevel(measured.humidityPct),
    };
  });
  notes.push(
    `measured climate applied (${climate.periodStart}..${climate.periodEnd} @ ${climate.station})` +
      (clamped ? `; ${clamped} season score(s) clamped against measured weather` : ""),
  );

  d.sources = upsertSource(d.sources, {
    id: `open-meteo-${slug}`,
    sourceType: "meteorological-service",
    sourceName: `Open-Meteo ERA5 archive, ${climate.periodStart}–${climate.periodEnd}, station ${climate.station}`,
    sourceUrl: "https://open-meteo.com/",
    accessedAt: climate.accessedAt,
    applicableFields: ["monthlyIntelligence.temperatureBand", "monthlyIntelligence.rainfall", "monthlyIntelligence.humidity"],
    reliability: "high",
    freshness: "current",
  });

  // ---- Encyclopedic citations ----
  const title = geo.articleTitle ?? d.name;
  try {
    const wiki = await fetchWikipediaSummary(title);
    d.sources = upsertSource(d.sources, {
      id: `wikipedia-${slug}`,
      sourceType: "licensed-data-provider",
      sourceName: `Wikipedia: ${wiki.title}`,
      sourceUrl: wiki.url,
      accessedAt: wiki.accessedAt,
      applicableFields: ["summary", "positioningLine"],
      reliability: "medium",
      freshness: "current",
    });
    notes.push("wikipedia citation attached");
  } catch {
    notes.push(`wikipedia citation SKIPPED (article "${title}" not fetchable)`);
  }
  try {
    const voyage = await fetchWikivoyageExtract(title.replace(" (country)", ""));
    if (voyage) {
      d.sources = upsertSource(d.sources, {
        id: `wikivoyage-${slug}`,
        sourceType: "licensed-data-provider",
        sourceName: `Wikivoyage: ${voyage.title}`,
        sourceUrl: voyage.url,
        accessedAt: voyage.accessedAt,
        applicableFields: ["idealTraveller", "tradeOffs", "practicalWarnings"],
        reliability: "medium",
        freshness: "current",
      });
      notes.push("wikivoyage citation attached");
    }
  } catch {
    notes.push("wikivoyage citation skipped");
  }

  // ---- Provenance: earned confidence, autonomous review stamp ----
  d.confidence = Math.min(95, Math.max(d.confidence, 60) + 10);
  d.reviewedBy = PIPELINE_REVIEWER;
  d.reviewedAt = today();
  d.nextReviewAt = plusDays(90);

  fs.writeFileSync(file, JSON.stringify(d, null, 2) + "\n");
  return notes;
}

async function main() {
  const requested = process.argv.slice(2).filter((a) => a !== "--" && !a.startsWith("-"));
  const all = fs
    .readdirSync(DEST_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));
  const slugs = requested.length > 0 ? requested : all;

  let failed = 0;
  for (const slug of slugs) {
    try {
      const notes = await enrichDestination(slug);
      console.log(`✓ ${slug}: ${notes.join("; ")}`);
    } catch (err) {
      failed++;
      console.error(`✗ ${slug}: ${err instanceof Error ? err.message : err}`);
    }
    // Be a polite API citizen
    await new Promise((r) => setTimeout(r, 400));
  }

  console.log(`\nEnriched ${slugs.length - failed}/${slugs.length} destinations.`);
  console.log("Now run: npm run knowledge:build");
  if (failed > 0) process.exit(1);
}

main();
