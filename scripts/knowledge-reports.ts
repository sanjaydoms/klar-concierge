/**
 * Knowledge governance reports:
 *   npm run knowledge:validate  → schema + cross-reference validation (exit 1 on error)
 *   npm run knowledge:coverage  → tier coverage + recommendation eligibility report
 *   npm run knowledge:staleness → review-due and stale records
 *
 * Mode is the first CLI argument.
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { destinationEligibility } from "../src/services/ktie/eligibility";
import type { AttractionIntelligence, CountryIntelligence, DestinationIntelligence } from "../src/types/knowledge";

const mode = process.argv[2] ?? "validate";
const ROOT = path.join(__dirname, "..");
const COMPILED = path.join(ROOT, "src", "generated-knowledge", "knowledge.json");

if (mode === "validate") {
  // Full validation happens in knowledge-build; run it and surface the result.
  execSync("npx tsx scripts/knowledge-build.ts", { stdio: "inherit", cwd: ROOT });
  process.exit(0);
}

if (!fs.existsSync(COMPILED)) {
  console.error("Compiled knowledge missing — run: npm run knowledge:build");
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(COMPILED, "utf8")) as {
  countries: CountryIntelligence[];
  destinations: DestinationIntelligence[];
  attractions: AttractionIntelligence[];
};

if (mode === "coverage") {
  const byStatus = (s: string) => data.countries.filter((c) => c.status === s).length;
  console.log("=== Knowledge coverage ===");
  console.log(`Countries: ${data.countries.length} total — ${byStatus("reviewed")} reviewed, ${byStatus("skeleton")} skeleton, ${byStatus("verified")} verified`);
  console.log(`Destinations: ${data.destinations.length} (tier 1: ${data.destinations.filter((d) => d.tier === 1).length})`);
  console.log(`Attractions: ${data.attractions.length}`);
  console.log("\n=== Recommendation eligibility ===");
  let eligible = 0;
  for (const d of data.destinations) {
    const result = destinationEligibility(d, data.attractions.filter((a) => a.destinationSlug === d.slug));
    if (result.eligible) {
      eligible++;
    } else {
      console.log(`✗ ${d.slug}: ${result.reasons.join("; ")}`);
    }
  }
  console.log(`\nEligible for customer recommendations: ${eligible}/${data.destinations.length}`);
  const report = {
    generatedAt: new Date().toISOString(),
    countries: { total: data.countries.length, reviewed: byStatus("reviewed"), skeleton: byStatus("skeleton") },
    destinations: data.destinations.length,
    attractions: data.attractions.length,
    eligibleDestinations: eligible,
  };
  fs.mkdirSync(path.join(ROOT, "knowledge", "coverage"), { recursive: true });
  fs.writeFileSync(
    path.join(ROOT, "knowledge", "coverage", "coverage-report.json"),
    JSON.stringify(report, null, 2) + "\n",
  );
  process.exit(eligible >= 10 ? 0 : 1);
}

if (mode === "staleness") {
  const now = new Date();
  let due = 0;
  console.log("=== Staleness report ===");
  for (const d of data.destinations) {
    const next = new Date(d.nextReviewAt);
    if (next < now) {
      due++;
      console.log(`REVIEW DUE: destination ${d.slug} (next review ${d.nextReviewAt})`);
    }
  }
  for (const c of data.countries) {
    if (c.nextReviewAt && new Date(c.nextReviewAt) < now) {
      due++;
      console.log(`REVIEW DUE: country ${c.iso2} (${c.name})`);
    }
  }
  for (const a of data.attractions) {
    for (const s of a.sources) {
      if (s.freshness === "stale") {
        due++;
        console.log(`STALE SOURCE: attraction ${a.id} → ${s.sourceName}`);
      }
    }
  }
  if (due === 0) console.log("No records due for review. ✓");
  else console.log(`\n${due} record(s) need attention.`);
  process.exit(0);
}

console.error(`Unknown mode: ${mode}`);
process.exit(1);
