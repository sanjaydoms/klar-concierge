import type { Metadata } from "next";
import Link from "next/link";
import { buildDiscoverCollections } from "@/services/ktie/discover";
import { DestinationThumb } from "@/components/destinations/DestinationVisual";

export const metadata: Metadata = {
  title: "Discover",
  description: "Destination ideas from Klar's travel intelligence — by season, traveller and taste.",
};

export default function DiscoverPage() {
  const month = new Date().getMonth() + 1;
  const collections = buildDiscoverCollections(month);

  return (
    <div className="mx-auto max-w-content px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-brand">Discover</h1>
      <p className="mt-3 max-w-2xl text-foreground/70">
        Ideas from Klar&rsquo;s destination intelligence. When something catches your eye,
        start a conversation and we&rsquo;ll shape it around you.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {collections.map((c) => (
          <section key={c.key} aria-labelledby={`col-${c.key}`} className="card">
            <h2 id={`col-${c.key}`} className="font-semibold text-brand">{c.title}</h2>
            <p className="mt-1 text-sm text-foreground/65">{c.description}</p>
            <ul className="mt-4 space-y-3">
              {c.destinations.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/destinations/${d.slug}`}
                    className="block rounded-lg bg-surface-muted px-4 py-3 transition hover:bg-brand-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
                  >
                    <DestinationThumb slug={d.slug} name={d.name} countryIso2={d.countryIso2} className="mb-2.5 h-28" />
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-medium text-brand">{d.name}</span>
                      <span className="text-xs text-foreground/55">
                        {d.country === d.name ? d.region : d.country}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-foreground/65">{d.positioningLine}</p>
                    <div className="mt-1 flex items-baseline justify-between gap-3">
                      {d.seasonLabel ? (
                        <p className="text-xs text-foreground/55">This month: {d.seasonLabel}</p>
                      ) : <span />}
                      <span aria-hidden className="text-xs font-medium text-brand">Explore →</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/concierge" className="btn-primary">Plan My Holiday</Link>
      </div>
    </div>
  );
}
