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

export function ItineraryView({
  destinationName,
  itinerary,
  crmEnabled,
  production,
  sharePath,
  onBack,
  onContinue,
}: {
  destinationName: string;
  itinerary: ItineraryDay[];
  crmEnabled: boolean | null;
  production: boolean;
  sharePath?: string;
  onBack: () => void;
  onContinue: () => void;
}) {
  const notes = (day: ItineraryDay) =>
    [...day.childNotes, ...day.seniorNotes, ...day.accessibilityNotes, ...day.practicalNotes];

  return (
    <section aria-labelledby="itin-heading">
      <h1 id="itin-heading" className="text-2xl font-bold text-brand sm:text-3xl">
        Your {destinationName} itinerary
      </h1>
      <p className="mt-2 rounded-lg bg-brand-soft px-4 py-2.5 text-sm font-medium text-brand">
        A decision-ready starting plan for a Klar expert to refine — not a confirmed package.
      </p>

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
          ← Other directions
        </button>
        {crmEnabled ? (
          <button type="button" className="btn-primary" onClick={onContinue}>
            Hand Over to a Klar Expert
          </button>
        ) : crmEnabled === false && !production ? (
          <button
            type="button"
            className="btn-secondary cursor-not-allowed opacity-60"
            disabled
            title="Expert handover activates when Klar connects its CRM"
          >
            Expert handover — not yet available (preview)
          </button>
        ) : null}
      </div>
      {crmEnabled === false ? (
        <p className="mt-4 rounded-lg bg-surface-muted p-4 text-sm text-foreground/70">
          To take this plan further right now, contact Klar Travels directly and mention your
          chosen direction — nothing you&rsquo;ve planned here has been sent anywhere.
        </p>
      ) : null}
    </section>
  );
}
