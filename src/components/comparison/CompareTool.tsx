"use client";

import { useState } from "react";
import type { ComparisonResult } from "@/types/recommendation";
import { ComparisonView } from "./ComparisonView";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function CompareTool({
  options,
}: {
  options: Array<{ slug: string; name: string; country: string }>;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [month, setMonth] = useState<number | undefined>(undefined);
  const [result, setResult] = useState<ComparisonResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function toggle(slug: string) {
    setSelected((s) =>
      s.includes(slug) ? s.filter((x) => x !== slug) : s.length >= 3 ? s : [...s, slug],
    );
  }

  async function run() {
    setBusy(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slugs: selected, month }),
      });
      const data = (await res.json()) as ComparisonResult | { error: string };
      if (!res.ok || "error" in data) {
        setError("error" in data ? data.error : "Comparison failed — please try again.");
        return;
      }
      setResult(data);
    } catch {
      setError("The comparison couldn't run just now — please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <fieldset>
        <legend className="field-label">Choose two or three destinations</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {options.map((o) => {
            const active = selected.includes(o.slug);
            return (
              <button
                key={o.slug}
                type="button"
                aria-pressed={active}
                className={active ? "chip border-brand bg-brand-soft font-medium" : "chip"}
                onClick={() => toggle(o.slug)}
              >
                {o.name}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5 flex flex-wrap items-end gap-4">
        <div>
          <label className="field-label" htmlFor="cmp-month">Travel month (optional)</label>
          <select
            id="cmp-month"
            className="field-input"
            value={month ?? ""}
            onChange={(e) => setMonth(e.target.value ? Number(e.target.value) : undefined)}
          >
            <option value="">Any month</option>
            {MONTHS.map((m, i) => (
              <option key={m} value={i + 1}>{m}</option>
            ))}
          </select>
        </div>
        <button
          type="button"
          className="btn-primary"
          disabled={busy || selected.length < 2}
          onClick={() => void run()}
        >
          {busy ? "Comparing…" : "Compare"}
        </button>
      </div>
      {selected.length < 2 ? (
        <p className="mt-2 text-xs text-foreground/50">Pick at least two destinations.</p>
      ) : null}
      {error ? (
        <p role="alert" className="mt-4 rounded-lg bg-accent-soft px-4 py-3 text-sm text-accent-strong">
          {error}
        </p>
      ) : null}

      {result ? (
        <div className="mt-10">
          <ComparisonView result={result} />
        </div>
      ) : null}
    </div>
  );
}
