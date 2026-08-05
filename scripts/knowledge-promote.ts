/**
 * Promote a human-reviewed draft from knowledge/drafts/<slug>/ into live
 * knowledge. This is the ONLY path from AI draft to customer-visible fact,
 * and it requires a named human reviewer — the CLI arguments are the
 * attestation.
 *
 * Usage:
 *   npm run knowledge:promote -- <slug> --reviewed-by "Full Name" [--confidence 80]
 *
 * After promoting: npm run knowledge:build && commit both together.
 */
import fs from "node:fs";
import path from "node:path";
import { attractionSchema, destinationSchema } from "../src/lib/knowledgeSchemas";

const ROOT = path.join(__dirname, "..");
const KNOWLEDGE = path.join(ROOT, "knowledge");
const DRAFTS = path.join(KNOWLEDGE, "drafts");

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function plusDays(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

const args = process.argv.slice(2).filter((a) => a !== "--");
const slug = args[0];
const reviewedByIdx = args.indexOf("--reviewed-by");
const reviewedBy = reviewedByIdx >= 0 ? args[reviewedByIdx + 1] : undefined;
const confidenceIdx = args.indexOf("--confidence");
const confidence = confidenceIdx >= 0 ? parseInt(args[confidenceIdx + 1], 10) : 70;

if (!slug || !reviewedBy) {
  console.error('Usage: npm run knowledge:promote -- <slug> --reviewed-by "Full Name" [--confidence 80]');
  console.error("The --reviewed-by name is the human attestation that every fact was checked.");
  process.exit(1);
}

const dir = path.join(DRAFTS, slug);
const destFile = path.join(dir, "destination.json");
const attrFile = path.join(dir, "attractions.json");
if (!fs.existsSync(destFile)) {
  console.error(`No draft found at knowledge/drafts/${slug}/destination.json`);
  process.exit(1);
}

const destination = JSON.parse(fs.readFileSync(destFile, "utf8"));
destination.status = "verified";
destination.confidence = Math.min(100, Math.max(60, confidence));
destination.reviewedBy = reviewedBy;
destination.reviewedAt = today();
destination.nextReviewAt = plusDays(90);
destination.version = String(destination.version || "1").replace(/^draft-/, "");

if (!Array.isArray(destination.sources) || destination.sources.length === 0) {
  console.error(
    "Refusing to promote: destination.sources is empty. A verified destination must cite " +
      "at least one source — add it to the draft first (tourism board, met service or klar-expert).",
  );
  process.exit(1);
}

const attractions = fs.existsSync(attrFile) ? JSON.parse(fs.readFileSync(attrFile, "utf8")) : [];
for (const a of attractions) {
  if (a.status === "requires-verification") a.status = "reviewed";
  if (!Array.isArray(a.sources) || a.sources.length === 0) a.sources = destination.sources;
}

const destCheck = destinationSchema.safeParse(destination);
if (!destCheck.success) {
  console.error(`destination.json fails validation: ${destCheck.error.issues[0]?.message}`);
  process.exit(1);
}
for (const [i, a] of attractions.entries()) {
  const check = attractionSchema.safeParse(a);
  if (!check.success) {
    console.error(`attractions[${i}] fails validation: ${check.error.issues[0]?.message}`);
    process.exit(1);
  }
}

fs.writeFileSync(
  path.join(KNOWLEDGE, "destinations", `${slug}.json`),
  JSON.stringify(destination, null, 2) + "\n",
);
if (attractions.length > 0) {
  fs.writeFileSync(
    path.join(KNOWLEDGE, "attractions", `${slug}.json`),
    JSON.stringify(attractions, null, 2) + "\n",
  );
}
fs.rmSync(dir, { recursive: true });

console.log(`Promoted ${slug} (reviewed by ${reviewedBy}, confidence ${destination.confidence}).`);
console.log("Now run: npm run knowledge:build — then commit knowledge/ and src/generated-knowledge/ together.");
