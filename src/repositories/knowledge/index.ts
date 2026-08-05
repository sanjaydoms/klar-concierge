import compiled from "@/generated-knowledge/knowledge.json";
import type {
  AttractionIntelligence,
  CountryIntelligence,
  DestinationIntelligence,
} from "@/types/knowledge";
import { destinationEligibility } from "@/services/ktie/eligibility";

type CompiledKnowledge = {
  generatedAt: string;
  countries: CountryIntelligence[];
  destinations: DestinationIntelligence[];
  attractions: AttractionIntelligence[];
};

const knowledge = compiled as unknown as CompiledKnowledge;

const attractionsBySlug = new Map<string, AttractionIntelligence[]>();
for (const a of knowledge.attractions) {
  const list = attractionsBySlug.get(a.destinationSlug) ?? [];
  list.push(a);
  attractionsBySlug.set(a.destinationSlug, list);
}

export function getAllDestinations(): DestinationIntelligence[] {
  return knowledge.destinations;
}

export function getDestination(slug: string): DestinationIntelligence | undefined {
  return knowledge.destinations.find((d) => d.slug === slug);
}

/** Only evidence-qualified destinations may enter customer recommendations. */
export function getEligibleDestinations(now: Date = new Date()): DestinationIntelligence[] {
  return knowledge.destinations.filter(
    (d) => destinationEligibility(d, getAttractions(d.slug), now).eligible,
  );
}

export function getAttractions(slug: string): AttractionIntelligence[] {
  return attractionsBySlug.get(slug) ?? [];
}

export function getCountries(): CountryIntelligence[] {
  return knowledge.countries;
}

export function getCountry(iso2: string): CountryIntelligence | undefined {
  return knowledge.countries.find((c) => c.iso2 === iso2.toUpperCase());
}

export function knowledgeGeneratedAt(): string {
  return knowledge.generatedAt;
}

/** Case-insensitive destination lookup by name or slug, for chat mentions. */
export function findDestinationByNameOrSlug(text: string): DestinationIntelligence | undefined {
  const needle = text.trim().toLowerCase();
  return knowledge.destinations.find(
    (d) => d.slug === needle || d.name.toLowerCase() === needle,
  );
}
