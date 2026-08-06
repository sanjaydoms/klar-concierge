import type { Metadata } from "next";
import Link from "next/link";
import { THEMES } from "@/services/ktie/themes";

export const metadata: Metadata = {
  title: "Holiday Types",
  description:
    "Romance, family, adventure, wellness and more — discover holidays by the kind of trip you want, powered by Klar Travels' destination intelligence.",
};

export default function HolidaysIndexPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-brand">What kind of holiday is calling you?</h1>
      <p className="mt-3 max-w-2xl text-foreground/70">
        Start from the feeling, not the map. Pick a holiday type and Klar&rsquo;s intelligence
        shows the destinations that genuinely deliver it — then the AI planner shapes the trip
        around you.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {THEMES.map((t) => (
          <Link key={t.key} href={`/holidays/${t.key}`} className="card block transition hover:border-brand">
            <span className="text-2xl" aria-hidden>{t.emoji}</span>
            <h2 className="mt-1 font-semibold text-brand">{t.label} Holidays</h2>
            <p className="mt-1 text-sm text-foreground/65">{t.tagline}</p>
            <p className="mt-2 text-xs font-medium text-brand">Explore →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
