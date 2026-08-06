/**
 * Fully autonomous knowledge generation — no human in the loop.
 *
 * For each requested destination:
 *   1. EVIDENCE   — fetch Wikipedia summary, Wikivoyage travel extract and
 *                   five years of measured climate (all free, keyless APIs)
 *   2. SYNTHESIS  — an AI engine (Claude via ANTHROPIC_API_KEY, else OpenAI
 *                   via OPENAI_API_KEY) writes the destination intelligence
 *                   grounded ONLY in that evidence pack
 *   3. HARD FACTS — measured climate bands overwrite whatever the model
 *                   said (deterministic mapping, no AI opinion on weather)
 *   4. AUDIT      — a second AI pass tries to refute the synthesis against
 *                   the evidence; refuted drafts never go live
 *   5. PROMOTION  — schema-valid + evidence-covered + audit-passed results
 *                   are written straight into live knowledge with earned
 *                   confidence and real citations; anything weaker lands in
 *                   knowledge/drafts/ instead
 *
 * Usage (CI or any machine with open internet + an AI key):
 *   npm run knowledge:autonomous -- "Jordan" "Uzbekistan"
 *   npm run knowledge:autonomous -- --refresh-stale
 *
 * Then: npm run knowledge:build
 */
import fs from "node:fs";
import path from "node:path";
import { attractionSchema, destinationSchema } from "../src/lib/knowledgeSchemas";
import { DESTINATION_GEO } from "./lib/coordinates";
import { humidityLevel, rainfallLevel, seasonLabelFor, reconcileSeasonScore, temperatureBand } from "./lib/climate";
import {
  fetchMeasuredClimate,
  fetchWikipediaSummary,
  fetchWikivoyageExtract,
  type ClimateEvidence,
  type WikipediaEvidence,
  type WikivoyageEvidence,
} from "./lib/evidence";
import type { DestinationIntelligence, KnowledgeSource } from "../src/types/knowledge";

const ROOT = path.join(__dirname, "..");
const KNOWLEDGE = path.join(ROOT, "knowledge");

const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY;
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";
const OPENAI_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-5-mini";

const PIPELINE_REVIEWER = "Klar autonomous knowledge pipeline (evidence-grounded AI synthesis, measured climate, adversarial audit)";

function today(): string {
  return new Date().toISOString().slice(0, 10);
}
function plusDays(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}
function slugify(name: string): string {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// ---------- Multi-engine LLM call ----------

async function llm(system: string, user: string, maxTokens: number): Promise<string> {
  if (ANTHROPIC_KEY) {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: ANTHROPIC_MODEL,
        max_tokens: maxTokens,
        system,
        messages: [{ role: "user", content: user }],
      }),
    });
    if (!response.ok) throw new Error(`Anthropic HTTP ${response.status}: ${await response.text()}`);
    const data = (await response.json()) as { content?: Array<{ type: string; text?: string }> };
    const text = data.content?.find((b) => b.type === "text")?.text;
    if (!text) throw new Error("Empty Anthropic response");
    return text;
  }
  if (OPENAI_KEY) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${OPENAI_KEY}` },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
      }),
    });
    if (!response.ok) throw new Error(`OpenAI HTTP ${response.status}: ${await response.text()}`);
    const data = (await response.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const text = data.choices?.[0]?.message?.content;
    if (!text) throw new Error("Empty OpenAI response");
    return text;
  }
  throw new Error("No AI engine available: set ANTHROPIC_API_KEY or OPENAI_API_KEY.");
}

function firstJson(text: string): string {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end <= start) throw new Error("No JSON in model reply");
  return text.slice(start, end + 1);
}

// ---------- Evidence pack ----------

type EvidencePack = {
  name: string;
  slug: string;
  wikipedia?: WikipediaEvidence;
  wikivoyage?: WikivoyageEvidence;
  climate: ClimateEvidence;
};

async function gatherEvidence(name: string): Promise<EvidencePack> {
  const slug = slugify(name);
  const geo = DESTINATION_GEO[slug];
  if (!geo) {
    throw new Error(
      `No coordinates for "${slug}". Add lat/lon to scripts/lib/coordinates.ts first — measured climate is mandatory evidence.`,
    );
  }
  const title = geo.articleTitle ?? name;
  const climate = await fetchMeasuredClimate(geo.lat, geo.lon, geo.station);
  let wikipedia: WikipediaEvidence | undefined;
  let wikivoyage: WikivoyageEvidence | undefined;
  try {
    wikipedia = await fetchWikipediaSummary(title);
  } catch { /* recorded as missing coverage below */ }
  try {
    wikivoyage = await fetchWikivoyageExtract(title.replace(" (country)", ""));
  } catch { /* recorded as missing coverage below */ }
  return { name, slug, wikipedia, wikivoyage, climate };
}

// ---------- Synthesis ----------

async function synthesize(pack: EvidencePack): Promise<{ destination: DestinationIntelligence; attractions: unknown[] }> {
  const exampleDest = JSON.parse(fs.readFileSync(path.join(KNOWLEDGE, "destinations", "bali.json"), "utf8"));
  const exampleAttractions = JSON.parse(
    fs.readFileSync(path.join(KNOWLEDGE, "attractions", "bali.json"), "utf8"),
  ).slice(0, 2);

  const system = [
    "You write destination intelligence for Klar Travels, an Indian travel agency.",
    "Audience: travellers departing from India; flight hours from major Indian metros.",
    "GROUNDING RULE: base every claim on the EVIDENCE section provided. Where evidence is silent",
    "(e.g. suitability scores), give conservative, defensible estimates and keep them modest.",
    "Be honest: real trade-offs, who should avoid it. Never include prices, visa specifics or availability.",
    "Output a single strict JSON object, no prose, no code fences.",
  ].join(" ");

  const user = [
    `EVIDENCE for ${pack.name}:`,
    `--- Measured monthly climate (${pack.climate.periodStart}..${pack.climate.periodEnd}, ${pack.climate.station}) ---`,
    JSON.stringify(pack.climate.months),
    pack.wikipedia ? `--- Wikipedia summary ---\n${pack.wikipedia.summary}` : "--- Wikipedia: unavailable ---",
    pack.wikivoyage ? `--- Wikivoyage travel guide extract ---\n${pack.wikivoyage.extract}` : "--- Wikivoyage: unavailable ---",
    "",
    "TASK: produce JSON with two keys:",
    `"destination": matching exactly the shape of this example: ${JSON.stringify(exampleDest)}`,
    `"attractions": 6-8 objects matching the shape of these examples: ${JSON.stringify(exampleAttractions)}`,
    `Use slug "${pack.slug}" and destinationSlug "${pack.slug}" everywhere.`,
    "monthlyIntelligence must cover all 12 months; align seasonScore with the measured climate",
    "(a monsoon month cannot be an excellent month unless a major event justifies it — then say so in highlights).",
    "Set sources to [] — the pipeline attaches real citations. Use ISO-3166 alpha-2 for countryIso2.",
  ].join("\n");

  const parsed = JSON.parse(firstJson(await llm(system, user, 16_000))) as {
    destination: DestinationIntelligence;
    attractions: unknown[];
  };
  return parsed;
}

// ---------- Deterministic hard-fact injection ----------

function injectMeasuredClimate(dest: DestinationIntelligence, climate: ClimateEvidence): void {
  dest.monthlyIntelligence = dest.monthlyIntelligence.map((mi) => {
    const measured = climate.months.find((m) => m.month === mi.month);
    if (!measured) return mi;
    const score = reconcileSeasonScore(mi.seasonScore, measured);
    return {
      ...mi,
      seasonScore: score,
      seasonLabel: seasonLabelFor(score),
      temperatureBand: temperatureBand(measured.meanMaxC),
      rainfall: rainfallLevel(measured.precipMm),
      humidity: humidityLevel(measured.humidityPct),
    };
  });
}

// ---------- Adversarial audit ----------

async function audit(pack: EvidencePack, dest: DestinationIntelligence): Promise<{ passed: boolean; problems: string[] }> {
  const system = [
    "You are a sceptical fact auditor. You are given EVIDENCE and a DRAFT destination profile.",
    "Your job is to REFUTE the draft: list every material claim that contradicts the evidence",
    "or is dangerously overconfident (e.g. calling a monsoon month excellent, wrong country/region,",
    "misplaced attractions, absurd flight hours from India).",
    'Ignore subjective scores unless they are indefensible. Respond with strict JSON only:',
    '{"verdict":"pass"|"fail","problems":["..."]}. "fail" only for material contradictions.',
  ].join(" ");
  const user = [
    "EVIDENCE:",
    JSON.stringify({
      climate: pack.climate.months,
      wikipedia: pack.wikipedia?.summary ?? null,
      wikivoyage: pack.wikivoyage?.extract?.slice(0, 3000) ?? null,
    }),
    "DRAFT:",
    JSON.stringify({
      name: dest.name,
      countryName: dest.countryName,
      region: dest.region,
      summary: dest.summary,
      flightHours: dest.travelPracticality.averageFlightHoursFromIndia,
      months: dest.monthlyIntelligence.map((m) => ({ m: m.month, score: m.seasonScore, label: m.seasonLabel })),
      tradeOffs: dest.tradeOffs,
    }),
  ].join("\n");
  try {
    const result = JSON.parse(firstJson(await llm(system, user, 2000))) as { verdict?: string; problems?: string[] };
    return { passed: result.verdict !== "fail", problems: result.problems ?? [] };
  } catch (err) {
    // Audit engine unavailable → be conservative, do not go live
    return { passed: false, problems: [`audit call failed: ${err instanceof Error ? err.message : err}`] };
  }
}

// ---------- Confidence: earned from evidence coverage ----------

function earnedConfidence(pack: EvidencePack, auditPassed: boolean): number {
  let confidence = 30; // schema-valid synthesis baseline
  confidence += 30; // measured climate is mandatory to get here
  if (pack.wikipedia) confidence += 10;
  if (pack.wikivoyage) confidence += 15;
  if (auditPassed) confidence += 10;
  return Math.min(95, confidence);
}

function citationSources(pack: EvidencePack): KnowledgeSource[] {
  const sources: KnowledgeSource[] = [
    {
      id: `open-meteo-${pack.slug}`,
      sourceType: "meteorological-service",
      sourceName: `Open-Meteo ERA5 archive, ${pack.climate.periodStart}–${pack.climate.periodEnd}, station ${pack.climate.station}`,
      sourceUrl: "https://open-meteo.com/",
      accessedAt: pack.climate.accessedAt,
      applicableFields: ["monthlyIntelligence.temperatureBand", "monthlyIntelligence.rainfall", "monthlyIntelligence.humidity"],
      reliability: "high",
      freshness: "current",
    },
  ];
  if (pack.wikipedia) {
    sources.push({
      id: `wikipedia-${pack.slug}`,
      sourceType: "licensed-data-provider",
      sourceName: `Wikipedia: ${pack.wikipedia.title}`,
      sourceUrl: pack.wikipedia.url,
      accessedAt: pack.wikipedia.accessedAt,
      applicableFields: ["summary", "positioningLine"],
      reliability: "medium",
      freshness: "current",
    });
  }
  if (pack.wikivoyage) {
    sources.push({
      id: `wikivoyage-${pack.slug}`,
      sourceType: "licensed-data-provider",
      sourceName: `Wikivoyage: ${pack.wikivoyage.title}`,
      sourceUrl: pack.wikivoyage.url,
      accessedAt: pack.wikivoyage.accessedAt,
      applicableFields: ["idealTraveller", "tradeOffs", "practicalWarnings"],
      reliability: "medium",
      freshness: "current",
    });
  }
  return sources;
}

// ---------- Orchestration ----------

async function processDestination(name: string): Promise<void> {
  console.log(`\n=== ${name} ===`);
  const pack = await gatherEvidence(name);
  console.log(
    `evidence: climate ✓ (${pack.climate.station}), wikipedia ${pack.wikipedia ? "✓" : "✗"}, wikivoyage ${pack.wikivoyage ? "✓" : "✗"}`,
  );

  const { destination, attractions } = await synthesize(pack);
  injectMeasuredClimate(destination, pack.climate);

  const auditResult = await audit(pack, destination);
  if (auditResult.problems.length) {
    for (const p of auditResult.problems) console.log(`  audit: ${p}`);
  }

  destination.slug = pack.slug;
  destination.sources = citationSources(pack);
  destination.confidence = earnedConfidence(pack, auditResult.passed);
  destination.reviewedBy = PIPELINE_REVIEWER;
  destination.reviewedAt = today();
  destination.nextReviewAt = plusDays(90);
  destination.version = "auto-1";
  destination.status = "verified";

  const attractionRecords = (attractions as Array<Record<string, unknown>>).map((a) => ({
    ...a,
    destinationSlug: pack.slug,
    status: "reviewed",
    sources: destination.sources,
  }));

  // Validation + go-live policy
  const destCheck = destinationSchema.safeParse(destination);
  const attractionChecks = attractionRecords.map((a) => attractionSchema.safeParse(a));
  const validAttractions = attractionChecks.filter((c) => c.success).map((c) => (c as { data: unknown }).data);
  const schemaOk = destCheck.success && validAttractions.length >= 5;
  const coverageOk = Boolean(pack.wikipedia || pack.wikivoyage);
  const goLive = schemaOk && coverageOk && auditResult.passed;

  if (goLive) {
    fs.writeFileSync(
      path.join(KNOWLEDGE, "destinations", `${pack.slug}.json`),
      JSON.stringify(destCheck.data, null, 2) + "\n",
    );
    fs.writeFileSync(
      path.join(KNOWLEDGE, "attractions", `${pack.slug}.json`),
      JSON.stringify(validAttractions, null, 2) + "\n",
    );
    console.log(
      `LIVE ✓ ${pack.slug} (confidence ${destination.confidence}, ${validAttractions.length} attractions, audit passed)`,
    );
  } else {
    const dir = path.join(KNOWLEDGE, "drafts", pack.slug);
    fs.mkdirSync(dir, { recursive: true });
    destination.status = "reviewed"; // drafts stay below the eligibility gate
    destination.confidence = Math.min(destination.confidence, 55);
    fs.writeFileSync(path.join(dir, "destination.json"), JSON.stringify(destination, null, 2) + "\n");
    fs.writeFileSync(path.join(dir, "attractions.json"), JSON.stringify(attractionRecords, null, 2) + "\n");
    const reasons = [
      !destCheck.success ? `schema: ${destCheck.error.issues[0]?.path.join(".")} ${destCheck.error.issues[0]?.message}` : null,
      validAttractions.length < 5 ? `only ${validAttractions.length} valid attractions (need 5)` : null,
      !coverageOk ? "no encyclopedic source reachable" : null,
      !auditResult.passed ? `audit failed: ${auditResult.problems[0] ?? "unspecified"}` : null,
    ].filter(Boolean);
    fs.writeFileSync(path.join(dir, "WHY_NOT_LIVE.txt"), reasons.join("\n") + "\n");
    console.log(`DRAFT ⚠ ${pack.slug} — not promoted: ${reasons.join("; ")}`);
  }
}

function listStale(): string[] {
  const now = today();
  const stale: string[] = [];
  for (const file of fs.readdirSync(path.join(KNOWLEDGE, "destinations"))) {
    if (!file.endsWith(".json")) continue;
    const d = JSON.parse(fs.readFileSync(path.join(KNOWLEDGE, "destinations", file), "utf8"));
    if (d.nextReviewAt && d.nextReviewAt < now) stale.push(d.name);
  }
  return stale;
}

async function main() {
  const args = process.argv.slice(2).filter((a) => a !== "--");
  const names = args.includes("--refresh-stale") ? listStale() : args.filter((a) => !a.startsWith("-"));
  if (names.length === 0) {
    console.log(
      args.includes("--refresh-stale")
        ? "Nothing is past its review date."
        : 'Usage: npm run knowledge:autonomous -- "Jordan" "Uzbekistan" | --refresh-stale',
    );
    return;
  }
  let failed = 0;
  for (const name of names) {
    try {
      await processDestination(name);
    } catch (err) {
      failed++;
      console.error(`✗ ${name}: ${err instanceof Error ? err.message : err}`);
    }
  }
  console.log(`\nDone (${names.length - failed}/${names.length} ok). Now run: npm run knowledge:build`);
  if (failed > 0) process.exit(1);
}

main();
