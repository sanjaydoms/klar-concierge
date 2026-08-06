/**
 * Converts a 2-letter ISO country code (e.g. "JP", "FR", "IN") into its Unicode flag emoji.
 */
export function countryFlag(iso2?: string): string {
  if (!iso2 || iso2.length !== 2) return "";
  const codePoints = iso2
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}
