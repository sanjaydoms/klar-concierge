"use client";

import Link from "next/link";

/** Shown only after a real, confirmed CRM handover. */
export function HandoverSuccess({
  crmReference,
  destinationName,
}: {
  crmReference: string;
  destinationName: string;
}) {
  return (
    <section aria-labelledby="success-heading" className="py-6 text-center">
      <div
        aria-hidden
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success-soft text-2xl text-success"
      >
        ✓
      </div>
      <h1 id="success-heading" className="mt-5 text-2xl font-bold text-brand sm:text-3xl">
        Your plan is with Klar
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-foreground/70">
        A Klar travel expert will review your preferences, selected destination and itinerary,
        then contact you on your preferred channel to finalise the holiday.
      </p>

      <dl className="mx-auto mt-8 max-w-md space-y-3 rounded-2xl border border-line bg-surface p-6 text-left text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-foreground/60">Klar reference</dt>
          <dd className="font-mono font-semibold text-brand">{crmReference}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-foreground/60">Selected destination</dt>
          <dd className="font-medium">{destinationName}</dd>
        </div>
      </dl>

      <p className="mt-6 text-xs text-foreground/50">
        For your privacy, your planning session has now been cleared from Klar Concierge —
        the Klar team holds your plan from here.
      </p>
      <Link href="/" className="btn-secondary mt-6">
        Return to Klar Travels
      </Link>
    </section>
  );
}
