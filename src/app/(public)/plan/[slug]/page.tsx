import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDestination } from "@/repositories/knowledge";
import { composeItinerary } from "@/services/itinerary/composer";
import { emptyBrief, type Pace, type TravelBrief, type TravellerType } from "@/types/brief";
import { DestinationHero } from "@/components/destinations/DestinationVisual";
import { ShareBar } from "@/components/share/ShareBar";
import { dayRouteUrl, mapSearchUrl } from "@/lib/maps";
import { planSharePath } from "@/lib/shareLinks";
import type { ItineraryBlock, ItineraryDay } from "@/types/recommendation";

type Search = Record<string, string | string[] | undefined>;

const TRAVELLER_TYPES = new Set([
  "family", "couple", "honeymoon", "solo", "friends", "senior", "multi-generational", "corporate",
]);
const PACES = new Set(["relaxed", "balanced", "active"]);

function first(v: string | string[] | undefined): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}

/** Rebuild the trip brief from URL parameters — bounded, never trusted raw. */
function briefFromParams(search: Search): TravelBrief {
  const brief = emptyBrief();
  const nights = parseInt(first(search.n) ?? "", 10);
  if (nights >= 1 && nights <= 45) brief.durationNights = nights;
  const month = parseInt(first(search.m) ?? "", 10);
  if (month >= 1 && month <= 12) brief.travelMonth = month;
  const type = first(search.t);
  if (type && TRAVELLER_TYPES.has(type)) brief.travellerType = type as TravellerType;
  const ages = (first(search.a) ?? "")
    .split(",")
    .map((x) => parseInt(x, 10))
    .filter((x) => x >= 0 && x <= 17)
    .slice(0, 8);
  if (ages.length) brief.childrenAges = ages;
  const seniors = parseInt(first(search.s) ?? "", 10);
  if (seniors >= 1 && seniors <= 20) brief.seniorTravellers = seniors;
  const pace = first(search.p);
  if (pace && PACES.has(pace)) brief.pace = pace as Pace;
  const interests = (first(search.i) ?? "").split(",").filter((x) => /^[a-z-]{2,20}$/.test(x)).slice(0, 6);
  if (interests.length) brief.interests = interests;
  return brief;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return { title: "Plan not found" };
  return {
    title: `${d.name} holiday plan — shared via Klar Concierge`,
    description: `A day-by-day ${d.name} plan drafted by Klar Travels' concierge.`,
    robots: { index: false }, // parameterised duplicates shouldn't compete with the guides
  };
}

function BlockList({ label, blocks, place }: { label: string; blocks: ItineraryBlock[]; place: string }) {
  if (blocks.length === 0) return null;
  return (
    <div className="mt-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">{label}</p>
      <ul className="mt-1 space-y-1.5">
        {blocks.map((b, i) => (
          <li key={i} className="text-sm">
            <span className="font-medium text-foreground">
              {b.title}
              {b.attractionId ? (
                <a
                  href={mapSearchUrl(b.title, place)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-xs font-normal text-brand underline-offset-2 hover:underline print:hidden"
                >
                  📍 Map
                </a>
              ) : null}
            </span>
            <p className="text-foreground/65">{b.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function stops(day: ItineraryDay): string[] {
  return [...day.morning, ...day.afternoon, ...day.evening]
    .filter((b) => b.attractionId)
    .map((b) => b.title);
}

export default async function SharedPlanPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Search>;
}) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const brief = briefFromParams(await searchParams);
  const itinerary = composeItinerary(destination, brief);
  const nights = brief.durationNights ?? destination.idealNights;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <DestinationHero slug={destination.slug} name={destination.name} />

      <h1 className="mt-6 text-2xl font-bold text-brand sm:text-3xl">
        A {nights}-night {destination.name} plan
      </h1>
      <p className="mt-2 rounded-lg bg-brand-soft px-4 py-2.5 text-sm font-medium text-brand">
        Drafted by Klar Concierge from Klar Travels&rsquo; destination intelligence — a starting
        plan for a Klar expert to refine, not a confirmed package. Prices, availability and
        visas are handled by the Klar team.
      </p>

      <ShareBar
        path={planSharePath(destination.slug, brief)}
        message={`Our ${nights}-night ${destination.name} plan from Klar Travels:`}
      />

      <ol className="mt-6 space-y-4">
        {itinerary.map((day) => (
          <li key={day.day} className="card">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-semibold text-brand">
                Day {day.day} — {day.title}
              </h2>
              {dayRouteUrl(stops(day), `${day.baseLocation}, ${destination.name}`) ? (
                <a
                  href={dayRouteUrl(stops(day), `${day.baseLocation}, ${destination.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-brand underline-offset-2 hover:underline print:hidden"
                >
                  Day route map ↗
                </a>
              ) : null}
            </div>
            <BlockList label="Morning" blocks={day.morning} place={`${day.baseLocation}, ${destination.name}`} />
            <BlockList label="Afternoon" blocks={day.afternoon} place={`${day.baseLocation}, ${destination.name}`} />
            <BlockList label="Evening" blocks={day.evening} place={`${day.baseLocation}, ${destination.name}`} />
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-2xl bg-surface-muted p-5 print:hidden">
        <p className="text-sm font-medium text-brand">Want this shaped around your own family?</p>
        <p className="mt-1 text-sm text-foreground/70">
          Tell the concierge who&rsquo;s travelling and when — it adjusts every day of this plan.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/concierge" className="btn-primary">Plan My Holiday</Link>
          <Link href={`/destinations/${destination.slug}`} className="btn-secondary">
            About {destination.name}
          </Link>
        </div>
      </div>
    </div>
  );
}
