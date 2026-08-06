"use client";

import { useState } from "react";
import Link from "next/link";
import type { Recommendation, RecommendationResult } from "@/types/recommendation";

const CONFIDENCE_COPY: Record<Recommendation["confidenceLabel"], string> = {
  high: "High confidence",
  good: "Good confidence",
  moderate: "Moderate confidence",
};

export function RecommendationCards({
  result,
  busy,
  onBack,
  onSelect,
  onCompare,
}: {
  result: RecommendationResult;
  busy: boolean;
  onBack: () => void;
  onSelect: (rec: Recommendation) => void;
  onCompare: (recs: Recommendation[]) => void;
}) {
  const [whyOpen, setWhyOpen] = useState<string | null>(null);
  // Intent confirmation: choosing a card asks before building the plan.
  const [confirming, setConfirming] = useState<string | null>(null);
  const { recommendations } = result;

  if (recommendations.length === 0) {
    return (
      <section aria-labelledby="rec-heading">
        <h1 id="rec-heading" className="text-2xl font-bold text-brand sm:text-3xl">
          Let&rsquo;s adjust the plan together
        </h1>
        <p className="mt-4 rounded-2xl bg-surface-muted p-5 text-sm text-foreground/75">
          {result.limitedOptionsMessage}
        </p>
        <button type="button" className="btn-primary mt-6" onClick={onBack}>
          Change something
        </button>
      </section>
    );
  }

  return (
    <section aria-labelledby="rec-heading">
      <h1 id="rec-heading" className="text-2xl font-bold text-brand sm:text-3xl">
        Your matches
      </h1>
      <p className="mt-2 text-sm text-foreground/60">
        {recommendations.length === 3
          ? "Three destinations, each matched to your season, travellers and taste — with one honest trade-off each."
          : "Matched to your season, travellers and taste — with one honest trade-off each."}
      </p>
      {result.limitedOptions && result.limitedOptionsMessage ? (
        <p className="mt-3 rounded-lg bg-brand-soft px-4 py-2.5 text-sm text-brand">
          {result.limitedOptionsMessage}
        </p>
      ) : null}

      <div className="mt-6 space-y-5">
        {recommendations.map((rec) => (
          <article key={rec.conceptId} className="card">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
                {rec.directionLabel}
              </span>
              <span className="text-xs text-foreground/55">{CONFIDENCE_COPY[rec.confidenceLabel]}</span>
            </div>
            <h2 className="mt-3 text-xl font-bold text-brand">
              {rec.destinationName}
              <span className="block text-sm font-normal text-foreground/55 sm:ml-2 sm:inline">
                {rec.country}
              </span>
            </h2>
            <p className="mt-1 text-sm text-foreground/70">{rec.positioningLine}</p>

            <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium text-brand">Season</dt>
                <dd className="text-foreground/70">{rec.seasonalSummary}</dd>
              </div>
              <div>
                <dt className="font-medium text-brand">Best for</dt>
                <dd className="text-foreground/70">
                  {rec.bestForLabel} · ideal {rec.idealNights} nights
                </dd>
              </div>
            </dl>

            <div className="mt-4">
              <p className="text-sm font-medium text-brand">Why it suits you</p>
              <ul className="mt-1 space-y-1.5 text-sm text-foreground/75">
                {rec.reasons.map((reason, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden className="text-success">✓</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            {rec.signatureExperiences.length > 0 ? (
              <div className="mt-4">
                <p className="text-sm font-medium text-brand">Signature experiences</p>
                <ul className="mt-1 flex flex-wrap gap-2">
                  {rec.signatureExperiences.map((exp) => (
                    <li
                      key={exp}
                      className="rounded-full bg-surface-muted px-3 py-1 text-xs text-foreground/75"
                    >
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <p className="mt-4 rounded-lg bg-warning-soft px-3 py-2 text-sm text-warning">
              <span className="font-medium">Worth knowing:</span> {rec.tradeOff}
            </p>

            {confirming === rec.conceptId ? (
              <div className="mt-4 rounded-xl border border-brand/30 bg-brand-soft p-4">
                <p className="text-sm font-medium text-brand">
                  Would you like me to build your suggested holiday around {rec.destinationName}?
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="btn-primary"
                    disabled={busy}
                    onClick={() => onSelect(rec)}
                  >
                    {busy ? "Creating your plan…" : "Create My Plan"}
                  </button>
                  <button
                    type="button"
                    className="btn-quiet text-sm"
                    disabled={busy}
                    onClick={() => setConfirming(null)}
                  >
                    View Other Matches
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="btn-primary"
                  disabled={busy}
                  onClick={() => setConfirming(rec.conceptId)}
                >
                  Choose {rec.destinationName}
                </button>
                <Link
                  href={`/destinations/${rec.destinationSlug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  Explore ↗
                </Link>
                <button
                  type="button"
                  className="btn-quiet text-sm"
                  onClick={() => setWhyOpen(whyOpen === rec.conceptId ? null : rec.conceptId)}
                  aria-expanded={whyOpen === rec.conceptId}
                >
                  Why this?
                </button>
              </div>
            )}

            {whyOpen === rec.conceptId ? (
              <div className="mt-3 rounded-lg bg-surface-muted p-4 text-xs text-foreground/70">
                <p className="font-medium text-brand">Who may not enjoy it</p>
                <p className="mt-1">{rec.whoMayNotEnjoy}</p>
                <p className="mt-3 font-medium text-brand">Your Klar expert will verify</p>
                <ul className="mt-1 list-inside list-disc">
                  {rec.verifyWithExpert.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" className="btn-quiet" onClick={onBack} disabled={busy}>
          ← Change something
        </button>
        {recommendations.length >= 2 ? (
          <button
            type="button"
            className="btn-secondary"
            disabled={busy}
            onClick={() => onCompare(recommendations)}
          >
            Compare these side by side
          </button>
        ) : null}
      </div>
    </section>
  );
}
