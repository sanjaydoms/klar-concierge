/**
 * Autonomous destination photography — fetches each destination's Wikipedia
 * lead image (Wikimedia-hosted, freely licensable), resizes it locally and
 * records proper attribution. Runs in CI (open internet); the app serves the
 * committed files from public/destinations/ so the CSP stays self-only.
 *
 *   npm run knowledge:images            # all destinations missing a photo
 *   npm run knowledge:images -- --all   # re-fetch everything
 *
 * Output: public/destinations/<slug>.jpg + src/generated-knowledge/images.json
 */
import fs from "node:fs";
import path from "node:path";
import { DESTINATION_GEO } from "./lib/coordinates";

const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "destinations");
const REGISTRY = path.join(ROOT, "src", "generated-knowledge", "images.json");
const DEST_DIR = path.join(ROOT, "knowledge", "destinations");

const UA = "KlarConciergeKnowledgeBot/1.0 (travel knowledge pipeline; contact: klartravels.com)";

type ImageEntry = { file: string; alt: string; credit?: string; sourceUrl?: string };

async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(30_000) });
  if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
  return (await response.json()) as T;
}

function stripHtml(s: string): string {
  return s.replace(/<[^>]*>/g, "").trim();
}

async function creditFor(imageUrl: string): Promise<string | undefined> {
  // Derive the Commons file name from the upload URL and ask for its licence.
  const fileName = decodeURIComponent(imageUrl.split("/").pop() ?? "");
  if (!fileName) return undefined;
  try {
    const data = await getJson<{
      query?: { pages?: Record<string, { imageinfo?: Array<{ extmetadata?: Record<string, { value?: string }> }> }> };
    }>(
      `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(fileName)}&prop=imageinfo&iiprop=extmetadata&format=json`,
    );
    const meta = Object.values(data.query?.pages ?? {})[0]?.imageinfo?.[0]?.extmetadata;
    if (!meta) return undefined;
    const artist = meta.Artist?.value ? stripHtml(meta.Artist.value).slice(0, 60) : undefined;
    const licence = meta.LicenseShortName?.value ? stripHtml(meta.LicenseShortName.value) : undefined;
    if (!artist && !licence) return undefined;
    return `Photo: ${artist ?? "Wikimedia Commons"}${licence ? ` (${licence})` : ""}, via Wikimedia Commons`;
  } catch {
    return "Photo via Wikimedia Commons";
  }
}

async function fetchImage(slug: string, name: string, articleTitle: string): Promise<ImageEntry | undefined> {
  const summary = await getJson<{
    title: string;
    originalimage?: { source: string };
    thumbnail?: { source: string };
    content_urls?: { desktop?: { page?: string } };
  }>(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(articleTitle)}`);

  const source = summary.originalimage?.source ?? summary.thumbnail?.source;
  if (!source) return undefined;

  const response = await fetch(source, { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(60_000) });
  if (!response.ok) throw new Error(`image HTTP ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());

  // Resize with sharp (already a dependency via Next) — 1600px wide, quality 78.
  const sharp = (await import("sharp")).default;
  const output = await sharp(buffer).rotate().resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: 78 }).toBuffer();

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, `${slug}.jpg`), output);

  return {
    file: `/destinations/${slug}.jpg`,
    alt: `${name} — ${summary.title}`,
    credit: await creditFor(source),
    sourceUrl: summary.content_urls?.desktop?.page,
  };
}

async function main() {
  const refetchAll = process.argv.includes("--all");
  const registry: Record<string, ImageEntry> = fs.existsSync(REGISTRY)
    ? JSON.parse(fs.readFileSync(REGISTRY, "utf8"))
    : {};

  const slugs = fs
    .readdirSync(DEST_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));

  let fetched = 0;
  let failed = 0;
  for (const slug of slugs) {
    if (!refetchAll && registry[slug] && fs.existsSync(path.join(OUT_DIR, `${slug}.jpg`))) continue;
    const d = JSON.parse(fs.readFileSync(path.join(DEST_DIR, `${slug}.json`), "utf8")) as { name: string };
    const title = DESTINATION_GEO[slug]?.articleTitle ?? d.name;
    try {
      const entry = await fetchImage(slug, d.name, title);
      if (entry) {
        registry[slug] = entry;
        fetched++;
        console.log(`✓ ${slug} ← ${title}`);
      } else {
        console.log(`– ${slug}: article has no lead image`);
      }
    } catch (err) {
      failed++;
      console.error(`✗ ${slug}: ${err instanceof Error ? err.message : err}`);
    }
    await new Promise((r) => setTimeout(r, 2500));
  }

  fs.writeFileSync(REGISTRY, JSON.stringify(registry, null, 2) + "\n");
  console.log(`\nImages: ${fetched} fetched, ${failed} failed, ${Object.keys(registry).length} total in registry.`);
}

main();
