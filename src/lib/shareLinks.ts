import type { TravelBrief } from "@/types/brief";

/**
 * Deterministic share links: the plan's inputs travel in the URL and the
 * engine regenerates the identical plan on arrival. No storage, no expiry,
 * no PII — a link holds only trip parameters.
 */
export function planSharePath(slug: string, brief: TravelBrief): string {
  const params = new URLSearchParams();
  if (brief.durationNights) params.set("n", String(brief.durationNights));
  if (brief.travelMonth) params.set("m", String(brief.travelMonth));
  if (brief.travellerType !== "unknown") params.set("t", brief.travellerType);
  if (brief.childrenAges.length) params.set("a", brief.childrenAges.join(","));
  if (brief.seniorTravellers > 0) params.set("s", String(brief.seniorTravellers));
  if (brief.pace !== "unknown") params.set("p", brief.pace);
  if (brief.interests.length) params.set("i", brief.interests.slice(0, 6).join(","));
  const query = params.toString();
  return `/plan/${slug}${query ? `?${query}` : ""}`;
}

export function compareSharePath(slugs: string[], month?: number): string {
  const params = new URLSearchParams({ d: slugs.join(",") });
  if (month) params.set("month", String(month));
  return `/concierge/compare?${params.toString()}`;
}
