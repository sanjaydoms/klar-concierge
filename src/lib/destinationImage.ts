import images from "@/generated-knowledge/images.json";

export type DestinationImage = {
  /** Local path under public/, e.g. /destinations/bali.jpg */
  file: string;
  alt: string;
  credit?: string;
  sourceUrl?: string;
};

const registry = images as Record<string, DestinationImage>;

/**
 * Photo for a destination, if the CI image pipeline has fetched one
 * (scripts/knowledge-images.ts — Wikimedia lead images with credits).
 * The UI must always render beautifully without one: use gradientFor().
 */
export function destinationImage(slug: string): DestinationImage | undefined {
  return registry[slug];
}

/**
 * Deterministic, brand-adjacent gradient per destination — the fallback art
 * when no photo has been fetched yet. Same slug, same gradient, every render.
 */
export function gradientFor(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  const h1 = 190 + (hash % 50); // deep blue → teal band, near the Klar brand
  const h2 = 210 + ((hash >> 8) % 40);
  return `linear-gradient(135deg, hsl(${h1} 65% 32%), hsl(${h2} 70% 18%))`;
}
