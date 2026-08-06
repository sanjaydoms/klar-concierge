import type { Metadata } from "next";
import Link from "next/link";
import { getAllDestinations } from "@/repositories/knowledge";
import { DestinationThumb } from "@/components/destinations/DestinationVisual";

export const metadata: Metadata = {
  title: "Destination Encyclopedia",
  description:
    "Klar Travels' destination intelligence: month-by-month seasons, attractions, food practicality and honest trade-offs for every destination we know deeply.",
};

export default function DestinationsIndexPage() {
  const destinations = getAllDestinations();
  const byRegion = new Map<string, typeof destinations>();
  for (const d of destinations) {
    const list = byRegion.get(d.region) ?? [];
    list.push(d);
    byRegion.set(d.region, list);
  }
  const regions = [...byRegion.entries()].sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <div className="mx-auto max-w-content px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-brand">Destination Encyclopedia</h1>
      <p className="mt-3 max-w-2xl text-foreground/70">
        Every destination Klar knows deeply — with month-by-month seasons, real attractions,
        food practicality and the honest trade-offs. {destinations.length} destinations and growing.
      </p>
      {regions.map(([region, list]) => (
        <section key={region} aria-labelledby={`region-${region}`} className="mt-10">
          <h2 id={`region-${region}`} className="text-xl font-semibold text-brand">
            {region}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((d) => (
                <Link
                  key={d.slug}
                  href={`/destinations/${d.slug}`}
                  className="card block transition hover:border-brand"
                >
                  <DestinationThumb slug={d.slug} name={d.name} className="mb-3 h-32" />
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-semibold text-brand">{d.name}</span>
                    <span className="text-xs text-foreground/55">
                      {d.countryName === d.name ? d.region : d.countryName}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-foreground/65">{d.positioningLine}</p>
                  <p className="mt-2 text-xs font-medium text-brand">Explore →</p>
                </Link>
              ))}
          </div>
        </section>
      ))}
      <div className="mt-12 text-center">
        <Link href="/concierge" className="btn-primary">Plan My Holiday</Link>
      </div>
    </div>
  );
}
