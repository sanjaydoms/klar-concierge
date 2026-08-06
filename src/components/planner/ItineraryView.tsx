"use client";

import type { ItineraryBlock, ItineraryDay } from "@/types/recommendation";
import { dayRouteUrl, mapSearchUrl } from "@/lib/maps";
import { ShareBar } from "@/components/share/ShareBar";

const PACE_LABEL: Record<ItineraryDay["pace"], string> = {
  light: "Light day",
  balanced: "Balanced day",
  active: "Active day",
};

function Blocks({ label, blocks, place }: { label: string; blocks: ItineraryBlock[]; place: string }) {
  if (blocks.length === 0) return null;
  return (
    <div className="mt-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">{label}</p>
      <ul className="mt-1 space-y-1.5">
        {blocks.map((b, i) => (
          <li key={i} className="text-sm">
            <span className="font-medium text-foreground">
              {b.title}
              {b.optional ? (
                <span className="ml-2 rounded bg-surface-muted px-1.5 py-0.5 text-xs font-normal text-foreground/60">
                  optional
                </span>
              ) : null}
              {b.attractionId ? (
                <a
                  href={mapSearchUrl(b.title, place)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-xs font-normal text-brand underline-offset-2 hover:underline"
                  aria-label={`Open ${b.title} in maps`}
                >
                  📍 Map
                </a>
              ) : null}
            </span>
            <p className="text-foreground/65">{b.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** All mappable stops for a day, in visit order. */
function dayStops(day: ItineraryDay): string[] {
  return [...day.morning, ...day.afternoon, ...day.evening]
    .filter((b) => b.attractionId)
    .map((b) => b.title);
}

export type ItineraryRefinement =
  | { pace: "relaxed" }
  | { pace: "active" }
  | { changeDay: number };

export function ItineraryView({
  destinationName,
  itinerary,
  crmEnabled,
  sharePath,
  busy,
  onBack,
  onContinue,
  onRefine,
  onFinish,
}: {
  destinationName: string;
  itinerary: ItineraryDay[];
  crmEnabled: boolean | null;
  sharePath?: string;
  busy?: boolean;
  onBack: () => void;
  onContinue: () => void;
  onRefine?: (refinement: ItineraryRefinement) => void;
  onFinish?: () => void;
}) {
  const notes = (day: ItineraryDay) =>
    [...day.childNotes, ...day.seniorNotes, ...day.accessibilityNotes, ...day.practicalNotes];
  // Only days built around named attractions can be meaningfully swapped.
  const changeableDays = itinerary
    .filter((d) => [...d.morning, ...d.afternoon, ...d.evening].some((b) => b.attractionId))
    .map((d) => d.day);

  return (
    <section aria-labelledby="itin-heading">
      <h1 id="itin-heading" className="text-2xl font-bold text-brand sm:text-3xl">
        Your {destinationName} itinerary
      </h1>
      <p className="mt-2 rounded-lg bg-brand-soft px-4 py-2.5 text-sm font-medium text-brand">
        A decision-ready starting plan for a Klar expert to refine — not a confirmed package.
      </p>

      {onRefine ? (
        <div className="mt-4 flex flex-wrap items-center gap-2" aria-label="Refine your plan">
          <span className="text-xs font-medium text-foreground/55">Refine:</span>
          <button
            type="button"
            className="chip"
            disabled={busy}
            onClick={() => onRefine({ pace: "relaxed" })}
          >
            Make it more relaxed
          </button>
          <button
            type="button"
            className="chip"
            disabled={busy}
            onClick={() => onRefine({ pace: "active" })}
          >
            Add more experiences
          </button>
          {changeableDays.length > 0 ? (
            <label className="chip flex cursor-pointer items-center gap-1.5">
              Change a day
              <select
                aria-label="Choose a day to change"
                className="bg-transparent text-inherit outline-none"
                disabled={busy}
                value=""
                onChange={(e) => {
                  const day = Number(e.target.value);
                  if (day) onRefine({ changeDay: day });
                }}
              >
                <option value="">…</option>
                {changeableDays.map((d) => (
                  <option key={d} value={d}>Day {d}</option>
                ))}
              </select>
            </label>
          ) : null}
        </div>
      ) : null}

      {sharePath ? (
        <ShareBar
          path={sharePath}
          message={`Our ${destinationName} plan from Klar Travels:`}
        />
      ) : null}

      <ol className="mt-6 space-y-4">
        {itinerary.map((day) => (
          <li key={day.day} className="card">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-semibold text-brand">
                Day {day.day} — {day.title}
              </h2>
              <span className="flex items-center gap-3 text-xs text-foreground/55">
                {PACE_LABEL[day.pace]}
                {dayRouteUrl(dayStops(day), `${day.baseLocation}, ${destinationName}`) ? (
                  <a
                    href={dayRouteUrl(dayStops(day), `${day.baseLocation}, ${destinationName}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-brand underline-offset-2 hover:underline"
                  >
                    Day route map ↗
                  </a>
                ) : null}
              </span>
            </div>
            <Blocks label="Morning" blocks={day.morning} place={`${day.baseLocation}, ${destinationName}`} />
            <Blocks label="Afternoon" blocks={day.afternoon} place={`${day.baseLocation}, ${destinationName}`} />
            <Blocks label="Evening" blocks={day.evening} place={`${day.baseLocation}, ${destinationName}`} />
            {day.weatherAlternative ? (
              <p className="mt-3 rounded-lg bg-surface-muted px-3 py-2 text-xs text-foreground/65">
                ☂ {day.weatherAlternative}
              </p>
            ) : null}
            {notes(day).length > 0 ? (
              <ul className="mt-3 space-y-1 border-t border-line pt-2 text-xs text-foreground/55">
                {notes(day).map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button type="button" className="btn-secondary" onClick={onBack}>
          ← Back to matches
        </button>
        {crmEnabled ? (
          <button type="button" className="btn-primary" onClick={onContinue}>
            Continue with Klar
          </button>
        ) : onFinish ? (
          <button type="button" className="btn-primary" disabled={busy} onClick={onFinish}>
            {busy ? "One moment…" : "Finish My Plan"}
          </button>
        ) : null}
      </div>
    </section>
  );
}
