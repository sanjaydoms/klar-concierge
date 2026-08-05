import Link from "next/link";
import { buildDiscoverCollections } from "@/services/ktie/discover";

const TRUST_POINTS = [
  "Recommendations are grounded in Klar's own travel intelligence — never invented.",
  "The engine weighs your timing, travellers, pace and interests together.",
  "Every suggestion explains why it fits — and where it honestly may not.",
  "Final commercial arrangements are handled by Klar's team after handover.",
];

export default function LandingPage() {
  const month = new Date().getMonth() + 1;
  const collections = buildDiscoverCollections(month).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="bg-surface">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight text-brand sm:text-5xl">
              Your perfect holiday starts with a conversation.
            </h1>
            <p className="mt-5 text-lg text-foreground/75">
              Tell Klar where you want to go—or simply how you want the holiday to feel.
              Klar Concierge helps you discover, compare and shape the right holiday with
              practical intelligence for your season, family and travel style.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/concierge" className="btn-primary">Plan My Holiday</Link>
              <Link href="/concierge/discover" className="btn-secondary">Explore Destinations</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery collections */}
      <section aria-labelledby="collections-heading" className="mx-auto max-w-content px-4 py-14 sm:px-6">
        <h2 id="collections-heading" className="text-2xl font-bold text-brand">
          Where could you go?
        </h2>
        <p className="mt-2 text-foreground/70">
          A taste of the destinations Klar knows deeply, matched to the time of year.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {collections.map((c) => (
            <div key={c.key} className="card">
              <h3 className="font-semibold text-brand">{c.title}</h3>
              <p className="mt-1 text-sm text-foreground/65">{c.description}</p>
              <ul className="mt-4 space-y-2">
                {c.destinations.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/destinations/${d.slug}`}
                      className="flex items-baseline justify-between gap-3 rounded-md px-1 py-0.5 text-sm transition hover:bg-brand-soft"
                    >
                      <span className="font-medium text-brand">{d.name}</span>
                      <span className="text-right text-foreground/60">{d.positioningLine}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/concierge/discover" className="btn-quiet">See all collections →</Link>
          <Link href="/concierge/compare" className="btn-quiet">Compare destinations →</Link>
        </div>
      </section>

      {/* Trust section */}
      <section aria-labelledby="trust-heading" className="bg-surface-muted">
        <div className="mx-auto max-w-content px-4 py-14 sm:px-6">
          <h2 id="trust-heading" className="text-2xl font-bold text-brand">
            Intelligent planning. Honest trade-offs. Real Klar expertise when you need it.
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {TRUST_POINTS.map((point, i) => (
              <li key={i} className="card flex gap-3">
                <span aria-hidden className="text-success">✓</span>
                <p className="text-sm text-foreground/75">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-content px-4 py-14 sm:px-6">
        <div className="rounded-2xl bg-brand px-6 py-10 text-white sm:px-10">
          <h2 className="text-2xl font-bold">Ready when you are.</h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Start with anything — a place, a month, a feeling. Klar Concierge turns it into
            a decision you can trust.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/concierge" className="btn-primary">Plan My Holiday</Link>
            <Link
              href="/concierge/how-it-works"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/40 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
