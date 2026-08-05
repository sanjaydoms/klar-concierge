/**
 * Compiles the Git-managed knowledge files under knowledge/ into
 * src/generated-knowledge/knowledge.json (statically imported by the app),
 * validating every record against the schemas first.
 *
 * Run: npm run knowledge:build   (also invoked automatically before builds)
 */
import fs from "node:fs";
import path from "node:path";
import {
  attractionSchema,
  countrySchema,
  destinationSchema,
} from "../src/lib/knowledgeSchemas";

const ROOT = path.join(__dirname, "..");
const KNOWLEDGE = path.join(ROOT, "knowledge");
const OUT_DIR = path.join(ROOT, "src", "generated-knowledge");

function readJson(file: string): unknown {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function listJson(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".json")).map((f) => path.join(dir, f));
}

let errors = 0;

const countries = (readJson(path.join(KNOWLEDGE, "countries", "registry.json")) as unknown[]).map(
  (c, i) => {
    const parsed = countrySchema.safeParse(c);
    if (!parsed.success) {
      errors++;
      console.error(`countries/registry.json [${i}]: ${parsed.error.issues[0]?.message}`);
      return null;
    }
    return parsed.data;
  },
);

const destinations = listJson(path.join(KNOWLEDGE, "destinations")).map((file) => {
  const parsed = destinationSchema.safeParse(readJson(file));
  if (!parsed.success) {
    errors++;
    const issue = parsed.error.issues[0];
    console.error(`${path.basename(file)}: ${issue?.path.join(".")} — ${issue?.message}`);
    return null;
  }
  return parsed.data;
});

const attractions = listJson(path.join(KNOWLEDGE, "attractions")).flatMap((file) => {
  const raw = readJson(file);
  if (!Array.isArray(raw)) {
    errors++;
    console.error(`${path.basename(file)}: expected an array of attractions`);
    return [];
  }
  return raw.map((a, i) => {
    const parsed = attractionSchema.safeParse(a);
    if (!parsed.success) {
      errors++;
      const issue = parsed.error.issues[0];
      console.error(`${path.basename(file)} [${i}]: ${issue?.path.join(".")} — ${issue?.message}`);
      return null;
    }
    return parsed.data;
  });
});

// Cross-reference checks
const destSlugs = new Set(destinations.filter(Boolean).map((d) => d!.slug));
const seenAttractionIds = new Set<string>();
for (const a of attractions) {
  if (!a) continue;
  if (!destSlugs.has(a.destinationSlug)) {
    errors++;
    console.error(`attraction ${a.id}: unknown destinationSlug ${a.destinationSlug}`);
  }
  if (seenAttractionIds.has(a.id)) {
    errors++;
    console.error(`attraction ${a.id}: duplicate id`);
  }
  seenAttractionIds.add(a.id);
}
const iso2s = new Set(countries.filter(Boolean).map((c) => c!.iso2));
for (const d of destinations) {
  if (d && !iso2s.has(d.countryIso2)) {
    errors++;
    console.error(`destination ${d.slug}: countryIso2 ${d.countryIso2} not in registry`);
  }
}

if (errors > 0) {
  console.error(`\nKnowledge build FAILED with ${errors} error(s).`);
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(
  path.join(OUT_DIR, "knowledge.json"),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      countries: countries.filter(Boolean),
      destinations: destinations.filter(Boolean),
      attractions: attractions.filter(Boolean),
    },
    null,
    0,
  ),
);

console.log(
  `Knowledge build OK: ${countries.length} countries, ${destinations.filter(Boolean).length} destinations, ${attractions.filter(Boolean).length} attractions → src/generated-knowledge/knowledge.json`,
);
