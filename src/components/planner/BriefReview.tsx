"use client";

import { useState } from "react";
import type { BudgetBand, Pace, TravelBrief, TravellerType } from "@/types/brief";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const TRAVELLER_TYPES: Exclude<TravellerType, "unknown">[] = [
  "family", "couple", "honeymoon", "solo", "friends", "senior", "multi-generational", "corporate",
];
const PACES: Exclude<Pace, "unknown">[] = ["relaxed", "balanced", "active"];
const BUDGETS: Exclude<BudgetBand, "unknown">[] = ["value", "comfort", "premium", "luxury"];
const INTEREST_OPTIONS = [
  "beach", "food", "culture", "history", "city", "shopping", "adventure",
  "nature", "relaxation", "nightlife", "themeparks", "romance", "wildlife", "snow",
];

const DISPLAY_LABELS: Record<string, string> = {
  romance: "Romantic",
  themeparks: "Theme parks",
};

function label(value: string): string {
  return DISPLAY_LABELS[value] ?? value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, " ");
}

export function BriefReview({
  brief,
  busy,
  onBack,
  onConfirm,
}: {
  brief: TravelBrief;
  busy: boolean;
  onBack: () => void;
  onConfirm: (brief: TravelBrief) => void;
}) {
  const [draft, setDraft] = useState<TravelBrief>(brief);

  function set<K extends keyof TravelBrief>(key: K, value: TravelBrief[K]) {
    setDraft((d) => ({ ...d, [key]: value }));
  }

  return (
    <section aria-labelledby="brief-heading">
      <h1 id="brief-heading" className="text-2xl font-bold text-brand sm:text-3xl">
        Here&rsquo;s what I&rsquo;ve understood
      </h1>
      <p className="mt-2 text-sm text-foreground/60">
        Change anything you like — then I&rsquo;ll show your matches.
      </p>

      <form
        className="mt-6 grid gap-4 sm:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          onConfirm(draft);
        }}
      >
        <div>
          <label className="field-label" htmlFor="bf-origin">Starting city</label>
          <input
            id="bf-origin"
            className="field-input"
            value={draft.originCity ?? ""}
            onChange={(e) => set("originCity", e.target.value || undefined)}
            placeholder="e.g. Hyderabad"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="bf-month">Travel month</label>
          <select
            id="bf-month"
            className="field-input"
            value={draft.travelMonth ?? ""}
            onChange={(e) => set("travelMonth", e.target.value ? Number(e.target.value) : undefined)}
          >
            <option value="">Not sure yet</option>
            {MONTHS.map((m, i) => (
              <option key={m} value={i + 1}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="bf-nights">Nights</label>
          <input
            id="bf-nights"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            pattern="[0-9]*"
            maxLength={2}
            className="field-input"
            value={draft.durationNights ?? ""}
            onChange={(e) => {
              // Mobile keyboards allow emoji even in number fields — keep
              // digits only and clamp to a plannable range.
              const digits = e.target.value.replace(/\D/g, "").slice(0, 2);
              set("durationNights", digits ? Math.min(45, Math.max(1, parseInt(digits, 10))) : undefined);
            }}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="bf-type">Trip type</label>
          <select
            id="bf-type"
            className="field-input"
            value={draft.travellerType}
            onChange={(e) => set("travellerType", e.target.value as TravellerType)}
          >
            <option value="unknown">Choose…</option>
            {TRAVELLER_TYPES.map((t) => (
              <option key={t} value={t}>{label(t)}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="bf-adults">Adults</label>
          <input
            id="bf-adults"
            type="number"
            inputMode="numeric"
            min={1}
            max={20}
            className="field-input"
            value={draft.adults}
            onChange={(e) => set("adults", Math.max(1, Number(e.target.value) || 1))}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="bf-children">Children&rsquo;s ages</label>
          <input
            id="bf-children"
            className="field-input"
            value={draft.childrenAges.join(", ")}
            onChange={(e) =>
              set(
                "childrenAges",
                e.target.value
                  .split(/[,\s]+/)
                  .map((v) => parseInt(v, 10))
                  .filter((n) => !Number.isNaN(n) && n >= 0 && n <= 17),
              )
            }
            placeholder="e.g. 6, 10"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="bf-seniors">Senior travellers</label>
          <input
            id="bf-seniors"
            type="number"
            inputMode="numeric"
            min={0}
            max={20}
            className="field-input"
            value={draft.seniorTravellers}
            onChange={(e) => set("seniorTravellers", Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="bf-pace">Pace</label>
          <select
            id="bf-pace"
            className="field-input"
            value={draft.pace}
            onChange={(e) => set("pace", e.target.value as Pace)}
          >
            <option value="unknown">Choose…</option>
            {PACES.map((p) => (
              <option key={p} value={p}>{label(p)}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="bf-budget">Comfort level</label>
          <select
            id="bf-budget"
            className="field-input"
            value={draft.budgetBand}
            onChange={(e) => set("budgetBand", e.target.value as BudgetBand)}
          >
            <option value="unknown">Not sure yet</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>{label(b)}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="bf-excluded">Anywhere to avoid?</label>
          <input
            id="bf-excluded"
            className="field-input"
            value={draft.excludedDestinations.join(", ")}
            onChange={(e) =>
              set(
                "excludedDestinations",
                e.target.value.split(",").map((v) => v.trim()).filter(Boolean),
              )
            }
            placeholder="e.g. Dubai, Thailand"
          />
        </div>

        <div className="sm:col-span-2">
          <fieldset>
            <legend className="field-label">Interests</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {INTEREST_OPTIONS.map((interest) => {
                const active = draft.interests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    aria-pressed={active}
                    className={active ? "chip border-brand bg-brand-soft font-medium" : "chip"}
                    onClick={() =>
                      set(
                        "interests",
                        active
                          ? draft.interests.filter((i) => i !== interest)
                          : [...draft.interests, interest],
                      )
                    }
                  >
                    {label(interest)}
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>

        <div className="mt-2 flex flex-wrap gap-3 sm:col-span-2">
          <button type="button" className="btn-secondary" onClick={onBack} disabled={busy}>
            Back to conversation
          </button>
          <button type="submit" className="btn-primary" disabled={busy}>
            {busy ? "Finding your matches…" : "Show My Matches"}
          </button>
        </div>
      </form>
    </section>
  );
}
