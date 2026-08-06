import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllDestinations, getAttractions, getDestination } from "@/repositories/knowledge";
import { DestinationHero } from "@/components/destinations/DestinationVisual";
import { mapSearchUrl } from "@/lib/maps";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function generateStaticParams() {
  return getAllDestinations().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return { title: "Destination not found" };
  const best = bestMonths(d);
  return {
    title: `${d.name} Travel Guide — Best Time, Attractions & Honest Trade-offs`,
    description: `${d.positioningLine} Best months: ${best.join(", ")}. Season-by-season intelligence, real attractions and honest trade-offs from Klar Travels.`,
    alternates: { canonical: `/destinations/${d.slug}` },
    openGraph: {
      title: `${d.name} — Klar Travels Destination Guide`,
      description: d.summary,
      type: "article",
    },
  };
}

function bestMonths(d: NonNullable<ReturnType<typeof getDestination>>): string[] {
  return [...d.monthlyIntelligence]
    .sort((a, b) => b.seasonScore - a.seasonScore)
    .slice(0, 3)
    .map((m) => MONTH_NAMES[m.month - 1]);
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <span className="text-foreground/75">{label}</span>
        <span className="font-medium text-brand">{value}/100</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface-muted" aria-hidden>
        <div className="h-full rounded-full bg-brand" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function seasonTone(score: number): string {
  if (score >= 75) return "bg-success-soft text-success";
  if (score >= 55) return "bg-surface-muted text-foreground/75";
  return "bg-danger-soft text-danger";
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();
  const attractions = getAttractions(d.slug);
  const best = bestMonths(d);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: d.name,
    description: d.summary,
    touristType: d.idealTraveller,
    address: { "@type": "PostalAddress", addressCountry: d.countryName },
    includesAttraction: attractions.map((a) => ({
      "@type": "TouristAttraction",
      name: a.name,
      description: a.summary,
    })),
  };

  return (
    <div className="mx-auto max-w-content px-4 py-14 sm:px-6">
      <script
        type="application/ld+json"
        // "<" escaped so no knowledge string can ever close the script tag
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <nav aria-label="Breadcrumb" className="text-xs text-foreground/55">
        <Link href="/destinations" className="hover:text-brand">Destinations</Link>
        <span aria-hidden> / </span>
        <span>{d.name}</span>
      </nav>

      <DestinationHero slug={d.slug} name={d.name} countryIso2={d.countryIso2} />

      <header className="mt-6">
        <h1 className="sr-only">{d.name}</h1>
        <p className="text-sm text-foreground/60">
          {d.countryName === d.name ? d.region : `${d.countryName} · ${d.region}`}
        </p>
        <p className="mt-4 max-w-3xl text-lg text-foreground/80">{d.summary}</p>
        <p className="mt-2 max-w-3xl text-sm text-foreground/65">
          <span className="font-medium text-brand">Ideal for:</span> {d.idealTraveller}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/concierge" className="btn-primary">Plan a {d.name} Holiday</Link>
          <Link href="/concierge/compare" className="btn-secondary">Compare With Another</Link>
        </div>
      </header>

      {/* Trip shape at a glance */}
      <section aria-labelledby="shape-heading" className="mt-12">
        <h2 id="shape-heading" className="text-xl font-semibold text-brand">The trip at a glance</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card">
            <p className="text-xs uppercase tracking-wide text-foreground/55">Nights</p>
            <p className="mt-1 font-semibold text-brand">{d.idealNights} ideal</p>
            <p className="text-sm text-foreground/65">works from {d.minimumNights} to {d.maximumNights}</p>
          </div>
          <div className="card">
            <p className="text-xs uppercase tracking-wide text-foreground/55">Flight from India</p>
            <p className="mt-1 font-semibold text-brand">~{d.travelPracticality.averageFlightHoursFromIndia}h</p>
            <p className="text-sm text-foreground/65">{d.travelPracticality.walkingIntensity} walking once there</p>
          </div>
          <div className="card">
            <p className="text-xs uppercase tracking-wide text-foreground/55">Best months</p>
            <p className="mt-1 font-semibold text-brand">{best.join(", ")}</p>
            <p className="text-sm text-foreground/65">see the full season table below</p>
          </div>
          <div className="card">
            <p className="text-xs uppercase tracking-wide text-foreground/55">Comfort levels</p>
            <p className="mt-1 font-semibold capitalize text-brand">{d.budgetBands.join(" · ")}</p>
            <p className="text-sm text-foreground/65">suits a {d.suitablePaces.filter((p) => p !== "unknown").join(" or ")} pace</p>
          </div>
        </div>
      </section>

      {/* Month by month */}
      <section aria-labelledby="season-heading" className="mt-12">
        <h2 id="season-heading" className="text-xl font-semibold text-brand">Month by month</h2>
        <p className="mt-1 text-sm text-foreground/65">
          Klar&rsquo;s season intelligence — what each month is genuinely like, not just averages.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {d.monthlyIntelligence.map((m) => (
            <div key={m.month} className="rounded-2xl border border-line bg-surface p-4">
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-semibold text-brand">{MONTH_NAMES[m.month - 1]}</p>
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${seasonTone(m.seasonScore)}`}>
                  {m.seasonLabel}
                </span>
              </div>
              <p className="mt-1.5 text-xs text-foreground/65">
                {m.temperatureBand} · {m.rainfall} rain · {m.humidity} humidity · {m.crowdLevel} crowds
              </p>
              {m.highlights[0] ? (
                <p className="mt-1.5 text-xs text-foreground/70">✓ {m.highlights[0]}</p>
              ) : null}
              {m.warnings[0] ? (
                <p className="mt-1 text-xs text-danger">! {m.warnings[0]}</p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Who it suits */}
      <section aria-labelledby="suits-heading" className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="card">
          <h2 id="suits-heading" className="text-xl font-semibold text-brand">Who it suits</h2>
          <div className="mt-4 space-y-3">
            <ScoreBar label="Families" value={d.suitability.family} />
            <ScoreBar label="Young children (5–10)" value={d.suitability.children5To10} />
            <ScoreBar label="Teenagers" value={d.suitability.teenagers} />
            <ScoreBar label="Seniors" value={d.suitability.seniors} />
            <ScoreBar label="Honeymoons & couples" value={d.suitability.honeymoon} />
            <ScoreBar label="Solo travellers" value={d.suitability.solo} />
            <ScoreBar label="First international trip" value={d.suitability.firstInternationalTrip} />
          </div>
        </div>
        <div className="space-y-5">
          <div className="card">
            <h3 className="font-semibold text-brand">The honest trade-offs</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground/75">
              {d.tradeOffs.map((t, i) => (
                <li key={i} className="flex gap-2"><span aria-hidden>•</span>{t}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold text-brand">Who may not enjoy it</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground/75">
              {d.whoShouldAvoid.map((t, i) => (
                <li key={i} className="flex gap-2"><span aria-hidden>•</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Food & practicality */}
      <section aria-labelledby="practical-heading" className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="card">
          <h2 id="practical-heading" className="text-xl font-semibold text-brand">Food, honestly</h2>
          <div className="mt-4 space-y-3">
            <ScoreBar label="Vegetarian ease" value={d.food.vegetarianFriendly} />
            <ScoreBar label="Indian food availability" value={d.food.indianFoodAvailability} />
            <ScoreBar label="Halal ease" value={d.food.halalFriendly} />
            <ScoreBar label="Local cuisine" value={d.food.localCuisineScore} />
            <ScoreBar label="Street food" value={d.food.streetFoodScore} />
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-brand">On the ground</h2>
          <div className="mt-4 space-y-3">
            <ScoreBar label="Public transport ease" value={d.travelPracticality.publicTransportEase} />
            <ScoreBar label="Accessibility maturity" value={d.travelPracticality.accessibilityScore} />
            <ScoreBar label="Medical access" value={d.travelPracticality.medicalAccessScore} />
          </div>
          <p className="mt-4 text-sm text-foreground/70">
            Expect <span className="font-medium">{d.travelPracticality.walkingIntensity}</span> walking intensity
            and a <span className="font-medium">{d.travelPracticality.roadTransferBurden}</span> road-transfer burden.
          </p>
        </div>
      </section>

      {/* Attractions */}
      {attractions.length > 0 ? (
        <section aria-labelledby="attractions-heading" className="mt-12">
          <h2 id="attractions-heading" className="text-xl font-semibold text-brand">
            What you&rsquo;ll actually do
          </h2>
          <p className="mt-1 text-sm text-foreground/65">
            {attractions.length} Klar-reviewed experiences — each with who it suits and who it doesn&rsquo;t.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {attractions.map((a) => (
              <div key={a.id} className="card">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-semibold text-brand">{a.name}</h3>
                  <span className="flex shrink-0 items-center gap-2">
                    <span className="rounded-full bg-surface-muted px-2 py-0.5 text-xs capitalize text-foreground/60">
                      {a.category.replace(/-/g, " ")}
                    </span>
                    <a
                      href={mapSearchUrl(a.name, d.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-brand underline-offset-2 hover:underline"
                      aria-label={`Open ${a.name} in maps`}
                    >
                      📍
                    </a>
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-foreground/70">{a.summary}</p>
                <p className="mt-2 text-xs text-foreground/60">
                  {a.physicalIntensity} intensity · {a.indoorOutdoor}
                  {a.typicalDurationHours ? ` · ~${a.typicalDurationHours}h` : ""}
                  {a.bestTimeOfDay ? ` · best ${a.bestTimeOfDay}` : ""}
                </p>
                {a.idealFor.length ? (
                  <p className="mt-1.5 text-xs text-foreground/65">
                    <span className="font-medium text-success">Ideal for:</span> {a.idealFor.join(", ")}
                  </p>
                ) : null}
                {a.unsuitableFor.length ? (
                  <p className="mt-0.5 text-xs text-foreground/65">
                    <span className="font-medium text-danger">Skip if:</span> {a.unsuitableFor.join(", ")}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Planning wisdom */}
      <section aria-labelledby="wisdom-heading" className="mt-12 grid gap-5 lg:grid-cols-3">
        <div className="card">
          <h2 id="wisdom-heading" className="font-semibold text-brand">Common mistakes</h2>
          <ul className="mt-2 space-y-1.5 text-sm text-foreground/75">
            {d.commonMistakes.map((m, i) => (
              <li key={i} className="flex gap-2"><span aria-hidden>•</span>{m}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3 className="font-semibold text-brand">Pairs well with</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-foreground/75">
            {d.commonTripCombinations.map((c, i) => (
              <li key={i} className="flex gap-2"><span aria-hidden>•</span>{c}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3 className="font-semibold text-brand">Worth packing</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-foreground/75">
            {d.packingConsiderations.map((p, i) => (
              <li key={i} className="flex gap-2"><span aria-hidden>•</span>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Provenance & honesty */}
      <section aria-labelledby="provenance-heading" className="mt-12">
        <div className="rounded-2xl bg-surface-muted p-5">
          <h2 id="provenance-heading" className="text-sm font-semibold text-brand">
            About this intelligence
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-foreground/65">
            Status: {d.status} · reviewed by {d.reviewedBy} on {d.reviewedAt} · next review {d.nextReviewAt} ·
            data confidence {d.confidence}/100. Visa rules, entry requirements, prices and availability change
            constantly — Klar Travels verifies those live for your booking; this page never guesses them.
          </p>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/concierge" className="btn-primary">Plan a {d.name} Holiday</Link>
        <Link href="/destinations" className="btn-secondary">All Destinations</Link>
      </div>
    </div>
  );
}
