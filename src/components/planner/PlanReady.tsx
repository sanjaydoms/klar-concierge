"use client";

import Link from "next/link";

/**
 * The completion screen for the placeholder-CRM phase: a confident, honest
 * ending with a plan reference the traveller can quote to Klar. No CRM
 * errors, no unavailable forms, no dead ends.
 */
export function PlanReady({
  referenceId,
  destinationName,
  summaryLine,
  sharePath,
  onStartOver,
}: {
  referenceId: string;
  destinationName: string;
  summaryLine: string;
  sharePath?: string;
  onStartOver: () => void;
}) {
  return (
    <section aria-labelledby="ready-heading" className="py-6 text-center">
      <div
        aria-hidden
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success-soft text-2xl text-success"
      >
        ✓
      </div>
      <h1 id="ready-heading" className="mt-5 text-2xl font-bold text-brand sm:text-3xl">
        Your holiday plan is ready
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-foreground/70">
        Quote your plan reference when you speak with Klar Travels and the team will pick up
        exactly where you left off.
      </p>

      <dl className="mx-auto mt-8 max-w-md space-y-3 rounded-2xl border border-line bg-surface p-6 text-left text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-foreground/60">Plan reference</dt>
          <dd className="font-mono font-semibold text-brand">{referenceId}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-foreground/60">Destination</dt>
          <dd className="font-medium">{destinationName}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-foreground/60">Your trip</dt>
          <dd className="text-right font-medium">{summaryLine}</dd>
        </div>
      </dl>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {sharePath ? (
          <Link href={sharePath} target="_blank" rel="noopener noreferrer" className="btn-primary">
            View &amp; download your plan
          </Link>
        ) : null}
        <button type="button" className="btn-secondary" onClick={onStartOver}>
          Start another holiday
        </button>
      </div>

      <p className="mx-auto mt-6 max-w-md text-xs text-foreground/50">
        Nothing has been sent anywhere — your plan lives in this link and your reference.
        A Klar expert takes over whenever you&rsquo;re ready.
      </p>
    </section>
  );
}
