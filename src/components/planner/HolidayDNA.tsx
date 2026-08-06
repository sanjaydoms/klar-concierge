"use client";

import type { TravelBrief } from "@/types/brief";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function label(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, " ");
}

/**
 * Holiday DNA — the trip's fingerprint in one glance: who, when, style,
 * weather and where. This same picture is what a Klar expert receives at
 * handover, so the customer and consultant start from an identical brief.
 */
export function HolidayDNA({
  brief,
  destinations,
}: {
  brief: TravelBrief;
  destinations?: string[];
}) {
  const weather = brief.climatePreferences.map((c) => label(c.replace("avoid-", "avoid ").replace("want-", "loves "))).join(", ");
  const chips: Array<{ k: string; v: string }> = [];
  if (brief.travellerType !== "unknown") chips.push({ k: "Travellers", v: label(brief.travellerType) });
  if (brief.travelScope) chips.push({ k: "Scope", v: brief.travelScope === "domestic" ? "Within India" : "International" });
  if (brief.travelMonth) chips.push({ k: "When", v: MONTHS[brief.travelMonth - 1] });
  if (brief.durationNights) chips.push({ k: "Nights", v: String(brief.durationNights) });
  if (brief.pace !== "unknown") chips.push({ k: "Pace", v: label(brief.pace) });
  if (brief.budgetBand !== "unknown") chips.push({ k: "Comfort", v: label(brief.budgetBand) });
  if (brief.interests.length) chips.push({ k: "Style", v: brief.interests.slice(0, 4).map(label).join(" · ") });
  if (weather) chips.push({ k: "Weather", v: weather });
  if (destinations?.length) chips.push({ k: "Directions", v: destinations.join(" · ") });

  if (chips.length < 2) return null;

  return (
    <section aria-label="Your holiday DNA" className="mb-6 rounded-2xl border border-line bg-surface p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand">Your holiday DNA</p>
      <dl className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5">
        {chips.map((c) => (
          <div key={c.k} className="text-sm">
            <dt className="inline text-foreground/55">{c.k}: </dt>
            <dd className="inline font-medium text-foreground">{c.v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-2 text-xs text-foreground/55">
        This summary travels with your enquiry to the Klar team — nothing else does.
      </p>
    </section>
  );
}
