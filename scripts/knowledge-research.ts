/**
 * LLM-assisted knowledge drafting — the automated half of how the engine
 * learns. It researches a destination with the configured OpenAI model and
 * writes a DRAFT into knowledge/drafts/<slug>/. Drafts are:
 *
 *   - validated against the same zod schemas as live knowledge;
 *   - forced to status "reviewed" with confidence capped at 55, so the
 *     eligibility gate (verified + confidence ≥ 60) can NEVER surface them
 *     to customers before a human review;
 *   - kept outside knowledge/destinations/, so knowledge:build ignores them
 *     entirely until a human promotes them (scripts/knowledge-promote.ts).
 *
 * Usage:
 *   OPENAI_API_KEY=... npm run knowledge:research -- "Sri Lanka"
 *   npm run knowledge:research -- --refresh-stale          # list stale
 *   npm run knowledge:research -- --refresh-stale --draft  # draft refreshes
 */
import fs from "node:fs";
import path from "node:path";
import { attractionSchema, destinationSchema } from "../src/lib/knowledgeSchemas";

const ROOT = path.join(__dirname, "..");
const KNOWLEDGE = path.join(ROOT, "knowledge");
const DRAFTS = path.join(KNOWLEDGE, "drafts");

const API_KEY = process.env.OPENAI_API_KEY;
const MODEL = process.env.OPENAI_MODEL || "gpt-5-mini";

const DRAFT_CONFIDENCE_CAP = 55; // below the 60 eligibility threshold, always

function slugify(name: string): string {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function plusDays(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

type DraftBundle = { destination: unknown; attractions: unknown[] };

async function callModel(destinationName: string): Promise<DraftBundle> {
  const exampleDest = JSON.parse(
    fs.readFileSync(path.join(KNOWLEDGE, "destinations", "bali.json"), "utf8"),
  );
  const exampleAttractions = JSON.parse(
    fs.readFileSync(path.join(KNOWLEDGE, "attractions", "bali.json"), "utf8"),
  ).slice(0, 2);

  const system = [
    "You draft destination intelligence for Klar Travels, an Indian travel agency.",
    "You produce STRICT JSON only — no markdown, no commentary.",
    "Audience: travellers departing from India. Flight hours are from major Indian metros.",
    "Be honest and conservative: real trade-offs, who should avoid it, realistic month-by-month seasons.",
    "NEVER include prices, visa rules, availability or anything that changes weekly.",
    "This is a DRAFT for human expert review — accuracy over flattery.",
  ].join(" ");

  const user = [
    `Draft complete destination intelligence for: ${destinationName}.`,
    "Return a single JSON object with two keys:",
    `  "destination": an object matching exactly the shape of this example: ${JSON.stringify(exampleDest)}`,
    `  "attractions": an array of 6-8 objects matching exactly the shape of these examples: ${JSON.stringify(exampleAttractions)}`,
    `Use slug "${slugify(destinationName)}" and matching destinationSlug on every attraction.`,
    "Cover all 12 months in monthlyIntelligence. Use ISO-3166 alpha-2 for countryIso2.",
    "Set sources to an empty array — the human reviewer attaches real sources.",
  ].join("\n");

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_KEY}` },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      response_format: { type: "json_object" },
    }),
  });
  if (!response.ok) {
    throw new Error(`OpenAI API error ${response.status}: ${await response.text()}`);
  }
  const data = (await response.json()) as { choices: Array<{ message: { content: string } }> };
  return JSON.parse(data.choices[0].message.content) as DraftBundle;
}

/** Governance clamps: a draft can never look review-approved or eligible. */
function clampDraft(bundle: DraftBundle, name: string) {
  const dest = bundle.destination as Record<string, unknown>;
  dest.status = "reviewed";
  dest.confidence = Math.min(Number(dest.confidence) || 0, DRAFT_CONFIDENCE_CAP);
  dest.reviewedBy = "auto-draft (NOT human-reviewed)";
  dest.reviewedAt = today();
  dest.nextReviewAt = plusDays(30);
  dest.version = "draft-1";
  dest.sources = [];
  for (const a of bundle.attractions as Array<Record<string, unknown>>) {
    a.status = "requires-verification";
    a.sources = [];
  }
  if (!dest.slug) dest.slug = slugify(name);
}

function writeDraft(slug: string, bundle: DraftBundle): { ok: boolean; problems: string[] } {
  const problems: string[] = [];
  const dest = destinationSchema.safeParse(bundle.destination);
  if (!dest.success) {
    for (const issue of dest.error.issues.slice(0, 10)) {
      problems.push(`destination.${issue.path.join(".")}: ${issue.message}`);
    }
  }
  const attractions = (bundle.attractions ?? []).map((a, i) => {
    const parsed = attractionSchema.safeParse(a);
    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      problems.push(`attractions[${i}].${issue?.path.join(".")}: ${issue?.message}`);
      return null;
    }
    return parsed.data;
  });

  const dir = path.join(DRAFTS, slug);
  fs.mkdirSync(dir, { recursive: true });
  if (problems.length > 0) {
    fs.writeFileSync(path.join(dir, "rejected.json"), JSON.stringify(bundle, null, 2));
    return { ok: false, problems };
  }
  fs.writeFileSync(path.join(dir, "destination.json"), JSON.stringify(dest.data, null, 2) + "\n");
  fs.writeFileSync(
    path.join(dir, "attractions.json"),
    JSON.stringify(attractions.filter(Boolean), null, 2) + "\n",
  );
  fs.writeFileSync(
    path.join(dir, "REVIEW.md"),
    [
      `# Review checklist — ${slug}`,
      "",
      "This draft was produced by an AI model and MUST NOT go live as-is.",
      "A Klar destination expert must:",
      "",
      "- [ ] Verify every month's season data against a real climate source",
      "- [ ] Verify flight hours from India and transfer burden",
      "- [ ] Verify each attraction exists and its practical notes are current",
      "- [ ] Rewrite trade-offs / who-should-avoid from real customer experience",
      "- [ ] Attach sources (tourism board, met service, expert) with dates",
      "- [ ] Set honest suitability and food scores",
      "",
      "Then promote it:",
      "",
      `    npm run knowledge:promote -- ${slug} --reviewed-by "Your Name"`,
      "",
      "Promotion sets status=verified and confidence you provide, moves the files",
      "into knowledge/, and knowledge:build makes it live on the next deploy.",
    ].join("\n") + "\n",
  );
  return { ok: true, problems: [] };
}

function listStale(): Array<{ slug: string; nextReviewAt: string }> {
  const now = today();
  const stale: Array<{ slug: string; nextReviewAt: string }> = [];
  for (const file of fs.readdirSync(path.join(KNOWLEDGE, "destinations"))) {
    if (!file.endsWith(".json")) continue;
    const d = JSON.parse(fs.readFileSync(path.join(KNOWLEDGE, "destinations", file), "utf8"));
    if (d.nextReviewAt && d.nextReviewAt < now) stale.push({ slug: d.slug, nextReviewAt: d.nextReviewAt });
  }
  return stale;
}

async function main() {
  const args = process.argv.slice(2).filter((a) => a !== "--");

  if (args.includes("--refresh-stale")) {
    const stale = listStale();
    if (stale.length === 0) {
      console.log("No destinations are past their next-review date. Nothing to do.");
      return;
    }
    console.log(`${stale.length} destination(s) past next-review date:`);
    for (const s of stale) console.log(`  - ${s.slug} (due ${s.nextReviewAt})`);
    if (!args.includes("--draft")) {
      console.log("\nRun with --draft to generate refresh drafts for human review.");
      return;
    }
    if (!API_KEY) throw new Error("OPENAI_API_KEY is required to draft refreshes.");
    for (const s of stale) {
      console.log(`\nDrafting refresh for ${s.slug}…`);
      const bundle = await callModel(s.slug.replace(/-/g, " "));
      clampDraft(bundle, s.slug);
      const result = writeDraft(s.slug, bundle);
      console.log(result.ok ? `  draft written to knowledge/drafts/${s.slug}/` : `  REJECTED:\n  ${result.problems.join("\n  ")}`);
    }
    return;
  }

  const name = args[0];
  if (!name) {
    console.error('Usage: npm run knowledge:research -- "Destination Name"');
    console.error("       npm run knowledge:research -- --refresh-stale [--draft]");
    process.exit(1);
  }
  if (!API_KEY) throw new Error("OPENAI_API_KEY is required for knowledge research.");

  const slug = slugify(name);
  if (fs.existsSync(path.join(KNOWLEDGE, "destinations", `${slug}.json`))) {
    console.log(`${slug} already exists in live knowledge — drafting a refresh instead.`);
  }
  console.log(`Researching ${name} with ${MODEL}…`);
  const bundle = await callModel(name);
  clampDraft(bundle, name);
  const result = writeDraft(slug, bundle);
  if (!result.ok) {
    console.error(`Draft REJECTED by schema validation (saved to knowledge/drafts/${slug}/rejected.json):`);
    for (const p of result.problems) console.error(`  - ${p}`);
    process.exit(1);
  }
  console.log(`Draft written to knowledge/drafts/${slug}/ — see REVIEW.md for the human checklist.`);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
