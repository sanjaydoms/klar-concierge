/**
 * Map deep links — no API keys, no embedded tiles, no CSP exceptions.
 * Links open the user's own maps app (Google Maps universal URLs), which
 * handles geocoding, live hours and navigation far better than an embed.
 */
export function mapSearchUrl(place: string, context: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place}, ${context}`)}`;
}

/** A day's stops as a single directions route (up to 8 stops). */
export function dayRouteUrl(places: string[], context: string): string | undefined {
  const stops = places.slice(0, 8).map((p) => encodeURIComponent(`${p}, ${context}`));
  if (stops.length < 2) return undefined;
  const origin = stops[0];
  const destination = stops[stops.length - 1];
  const waypoints = stops.slice(1, -1);
  return (
    `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}` +
    (waypoints.length ? `&waypoints=${waypoints.join("%7C")}` : "")
  );
}
