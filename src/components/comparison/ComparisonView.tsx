"use client";

import { Fragment } from "react";
import type { ComparisonResult } from "@/types/recommendation";

function pretty(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function ComparisonView({ result }: { result: ComparisonResult }) {
  return (
    <section aria-labelledby="cmp-heading">
      <h1 id="cmp-heading" className="text-2xl font-bold text-brand sm:text-3xl">
        {result.slugs.map(pretty).join(" vs ")}
      </h1>

      <p className="mt-4 rounded-2xl bg-brand-soft p-5 text-sm font-medium text-brand">
        {result.decisionSummary}
      </p>

      {/* Mobile: stacked dimension cards — every value visible, nothing cut off */}
      <div className="mt-6 space-y-3 sm:hidden">
        {result.dimensions.map((dim) => (
          <div key={dim.key} className="rounded-2xl border border-line bg-surface p-4">
            <p className="text-sm font-semibold text-brand">{dim.label}</p>
            <dl className="mt-2 space-y-1.5">
              {result.slugs.map((s) => (
                <div
                  key={s}
                  className={
                    dim.winnerSlug === s
                      ? "flex items-baseline justify-between gap-3 rounded-lg bg-success-soft px-2.5 py-1.5 text-sm font-medium text-success"
                      : "flex items-baseline justify-between gap-3 px-2.5 py-1.5 text-sm text-foreground/70"
                  }
                >
                  <dt>{pretty(s)}</dt>
                  <dd className="text-right">
                    {dim.values[s]}
                    {dim.winnerSlug === s ? <span aria-hidden> ✓</span> : null}
                  </dd>
                </div>
              ))}
            </dl>
            {dim.reason ? (
              <p className="mt-2 border-t border-line pt-2 text-xs leading-relaxed text-foreground/60">
                {dim.reason}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      {/* Desktop/tablet: side-by-side table */}
      <div className="mt-6 hidden overflow-x-auto rounded-2xl border border-line bg-surface sm:block">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="border-b border-line text-xs uppercase tracking-wide text-foreground/55">
            <tr>
              <th className="px-4 py-3">Dimension</th>
              {result.slugs.map((s) => (
                <th key={s} className="px-4 py-3">{pretty(s)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {result.dimensions.map((dim) => (
              <Fragment key={dim.key}>
                <tr className={dim.reason ? undefined : "border-b border-line last:border-0"}>
                  <td className="px-4 py-3 font-medium text-brand">{dim.label}</td>
                  {result.slugs.map((s) => (
                    <td
                      key={s}
                      className={
                        dim.winnerSlug === s
                          ? "bg-success-soft px-4 py-3 font-medium text-success"
                          : "px-4 py-3 text-foreground/70"
                      }
                    >
                      {dim.values[s]}
                      {dim.winnerSlug === s ? <span aria-hidden> ✓</span> : null}
                    </td>
                  ))}
                </tr>
                {dim.reason ? (
                  <tr className="border-b border-line last:border-0">
                    <td
                      colSpan={result.slugs.length + 1}
                      className="px-4 pb-3 pt-0 text-xs leading-relaxed text-foreground/55"
                    >
                      {dim.reason}
                    </td>
                  </tr>
                ) : null}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="card">
          <h2 className="font-semibold text-brand">
            Recommendation: {pretty(result.finalRecommendationSlug)}
          </h2>
          <ul className="mt-2 space-y-1.5 text-sm text-foreground/75">
            {result.finalReasons.map((r, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden className="text-success">✓</span>
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-foreground/55">
            Confidence: {result.confidenceLabel}
          </p>
        </div>
        <div className="card">
          <h2 className="font-semibold text-brand">Conditions &amp; the other side</h2>
          <ul className="mt-2 space-y-1.5 text-sm text-foreground/75">
            {result.conditions.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
          {result.alternativeIfPrioritiesChange ? (
            <p className="mt-3 rounded-lg bg-surface-muted px-3 py-2 text-sm text-foreground/70">
              {result.alternativeIfPrioritiesChange}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
