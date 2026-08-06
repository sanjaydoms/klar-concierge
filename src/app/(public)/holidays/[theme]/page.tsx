import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bestMonthsForTheme, getTheme, THEMES, topDestinationsForTheme } from "@/services/ktie/themes";
import { DestinationThumb } from "@/components/destinations/DestinationVisual";

export function generateStaticParams() {
  return THEMES.map((t) => ({ theme: t.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ theme: string }>;
}): Promise<Metadata> {
  const { theme: key } = await params;
  const theme = getTheme(key);
  if (!theme) return { title: "Holiday type not found" };
  return {
    title: `${theme.label} Holidays — Best Destinations & Seasons`,
    description: `${theme.tagline} Klar Travels' honest ${theme.label.toLowerCase()}-holiday guide: top destinations, real season windows and an AI planner to shape yours.`,
    alternates: { canonical: `/holidays/${theme.key}` },
  };
}

export default async function ThemePage({
  params,
}: {
  params: Promise<{ theme: string }>;
}) {
  const { theme: key } = await params;
  const theme = getTheme(key);
  if (!theme) notFound();

  const destinations = topDestinationsForTheme(theme, 6);
  const months = bestMonthsForTheme(theme);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: theme.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="mx-auto max-w-content px-4 py-14 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

      <nav aria-label="Breadcrumb" className="text-xs text-foreground/55">
        <Link href="/holidays" className="hover:text-brand">Holiday Types</Link>
        <span aria-hidden> / </span>
        <span>{theme.label}</span>
      </nav>

      <h1 className="mt-3 text-3xl font-bold text-brand sm:text-4xl">
        {theme.emoji} {theme.label} Holidays
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-foreground/75">{theme.intro}</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link href={`/concierge?theme=${theme.key}`} className="btn-primary">
          Plan My {theme.label} Holiday
        </Link>
        <span className="rounded-full bg-brand-soft px-4 py-2 text-sm font-medium text-brand">
          Best months: {months.join(" · ")}
        </span>
      </div>

      <section aria-labelledby="dest-heading" className="mt-12">
        <h2 id="dest-heading" className="text-xl font-semibold text-brand">
          Where {theme.label.toLowerCase()} holidays shine
        </h2>
        <p className="mt-1 text-sm text-foreground/65">
          Ranked by Klar&rsquo;s destination intelligence — not by advertising.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <Link key={d.slug} href={`/destinations/${d.slug}`} className="card block transition hover:border-brand">
              <DestinationThumb slug={d.slug} name={d.name} className="mb-3 h-32" />
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-semibold text-brand">{d.name}</span>
                <span className="text-xs text-foreground/55">
                  {d.countryName === d.name ? d.region : d.countryName}
                </span>
              </div>
              <p className="mt-1 text-sm text-foreground/65">{d.positioningLine}</p>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="mt-12">
        <h2 id="faq-heading" className="text-xl font-semibold text-brand">Good questions</h2>
        <div className="mt-4 space-y-4">
          {theme.faq.map((f, i) => (
            <details key={i} className="card group">
              <summary className="cursor-pointer font-medium text-brand marker:content-none">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-foreground/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-12 rounded-2xl bg-brand px-6 py-8 text-white">
        <h2 className="text-xl font-bold">Ready to shape yours?</h2>
        <p className="mt-2 max-w-2xl text-white/80">
          Two minutes of conversation and Klar&rsquo;s planner turns this theme into three
          personalised directions with honest trade-offs — then a Klar expert takes it from there.
        </p>
        <Link
          href={`/concierge?theme=${theme.key}`}
          className="mt-5 inline-flex min-h-[44px] items-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-brand hover:bg-white/90"
        >
          Start Planning
        </Link>
      </div>
    </div>
  );
}
