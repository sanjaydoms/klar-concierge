import type { DestinationIntelligence } from "@/types/knowledge";
import { getEligibleDestinations } from "@/repositories/knowledge";

export type DiscoverCollection = {
  key: string;
  title: string;
  description: string;
  destinations: Array<{
    slug: string;
    name: string;
    countryIso2?: string;
    country: string;
    region: string;
    positioningLine: string;
    seasonLabel?: string;
  }>;
};

function top(
  pool: DestinationIntelligence[],
  by: (d: DestinationIntelligence) => number,
  count = 4,
): DestinationIntelligence[] {
  return [...pool].sort((a, b) => by(b) - by(a)).slice(0, count);
}

/** KTIE-grounded discovery collections. Only eligible destinations appear. */
export function buildDiscoverCollections(month: number): DiscoverCollection[] {
  const pool = getEligibleDestinations();
  const monthScore = (d: DestinationIntelligence) =>
    d.monthlyIntelligence.find((m) => m.month === month)?.seasonScore ?? 0;

  const withSeason = (list: DestinationIntelligence[]) =>
    list.map((d) => ({
      slug: d.slug,
      name: d.name,
      countryIso2: d.countryIso2,
      country: d.countryName,
      region: d.region,
      positioningLine: d.positioningLine,
      seasonLabel: d.monthlyIntelligence.find((m) => m.month === month)?.seasonLabel,
    }));

  return [
    { key: "this-month", title: "Best places to visit this month", description: "Destinations at their seasonal best right now.", destinations: withSeason(top(pool, monthScore)) },
    { key: "families", title: "Best for families", description: "Easy logistics and attractions the whole family enjoys.", destinations: withSeason(top(pool, (d) => d.suitability.family)) },
    { key: "young-children", title: "Best for young children", description: "Gentle pacing, short transfers and guaranteed delights.", destinations: withSeason(top(pool, (d) => d.suitability.toddlers + d.suitability.children5To10)) },
    { key: "teenagers", title: "Best for teenagers", description: "Thrills, culture-cool and food teens actually rate.", destinations: withSeason(top(pool, (d) => d.suitability.teenagers)) },
    { key: "couples", title: "Best for couples", description: "Romantic settings, from lagoon villas to old-town evenings.", destinations: withSeason(top(pool, (d) => d.suitability.honeymoon)) },
    { key: "seniors", title: "Best for seniors", description: "Comfortable pacing, good access and gentle exploring.", destinations: withSeason(top(pool, (d) => d.suitability.seniors)) },
    { key: "food", title: "Best for food lovers", description: "Street food, markets and memorable meals.", destinations: withSeason(top(pool, (d) => d.food.localCuisineScore)) },
    { key: "first-trip", title: "Best for first international trips", description: "Forgiving logistics and big rewards for new travellers.", destinations: withSeason(top(pool, (d) => d.suitability.firstInternationalTrip)) },
    { key: "beach", title: "Relaxed beach holidays", description: "Slow mornings, warm water and nowhere to be.", destinations: withSeason(top(pool, (d) => (d.interests.beach ?? 0) + (d.interests.relaxation ?? 0))) },
    { key: "culture", title: "Culture and city breaks", description: "Museums, old towns, skylines and civilisations.", destinations: withSeason(top(pool, (d) => (d.interests.culture ?? 0) + (d.interests.city ?? 0))) },
    { key: "short-trips", title: "Short holidays from India", description: "Big experiences within about five flight hours.", destinations: withSeason(top(pool.filter((d) => d.travelPracticality.averageFlightHoursFromIndia <= 5.5), monthScore)) },
    { key: "different", title: "Something different", description: "Beyond the usual suspects — still fully Klar-verified.", destinations: withSeason(top(pool, (d) => 100 - d.suitability.firstInternationalTrip + (d.interests.nature ?? 0) / 2)) },
  ];
}
