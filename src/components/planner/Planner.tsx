"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { TravelBrief } from "@/types/brief";
import type {
  ComparisonResult,
  ItineraryDay,
  Recommendation,
  RecommendationResult,
} from "@/types/recommendation";
import { BriefReview } from "./BriefReview";
import { RecommendationCards } from "./RecommendationCards";
import { ItineraryView } from "./ItineraryView";
import { ComparisonView } from "@/components/comparison/ComparisonView";
import { HandoverForm, type HandoverValues } from "@/components/handover/HandoverForm";
import { HandoverSuccess } from "@/components/handover/HandoverSuccess";
import { planSharePath } from "@/lib/shareLinks";
import { TypewriterText } from "./TypewriterText";
import { HolidayDNA } from "./HolidayDNA";

export type ThemeChip = { key: string; label: string; emoji: string; tagline: string };

type Stage =
  | "conversation"
  | "brief-review"
  | "recommendations"
  | "comparison"
  | "itinerary"
  | "handover"
  | "submitted";

type ChatMessage = { role: "user" | "assistant"; content: string; createdAt: string };

function getDynamicChips(brief?: TravelBrief): string[] {
  if (!brief) {
    return [
      "Family holiday",
      "Honeymoon",
      "Within India",
      "Best this month",
      "Relaxed beach escape",
      "Senior-friendly trip",
      "Short international break",
      "Food and culture",
      "Surprise me",
    ].slice(0, 7);
  }

  const chips: string[] = [];

  // Step 1: Missing Travel Month
  if (!brief.travelMonth) {
    chips.push("Traveling in April", "Traveling in July", "Traveling in October", "Flexible dates");
  }

  // Step 2: Missing Duration
  if (!brief.durationNights) {
    chips.push("7 nights (1 week)", "10 nights", "14 nights (2 weeks)", "Short 4-day break");
  }

  // Step 3: Missing Pace
  if (brief.pace === "unknown") {
    chips.push("Relaxed pace", "Balanced pace", "Active & adventurous");
  }

  // Step 4: Missing Budget
  if (brief.budgetBand === "unknown") {
    chips.push("Comfort budget", "Premium budget", "Luxury getaway");
  }

  // Step 5: Interests & Vibe
  if (brief.interests.length === 0) {
    chips.push("Beaches & relaxation", "Historical sites", "Food & wine", "Nature & wildlife");
  }

  // Fallback defaults if most parameters are filled
  if (chips.length < 3) {
    chips.push("Show recommendations", "Surprise me", "Within India", "Direct flights preferred");
  }

  return chips.slice(0, 6);
}

const SESSION_KEY = "klar-session-id";

export function Planner({
  themes = [],
  isEmbedded = false,
}: {
  themes?: ThemeChip[];
  isEmbedded?: boolean;
}) {
  const [stage, setStage] = useState<Stage>("conversation");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [brief, setBrief] = useState<TravelBrief | undefined>(undefined);
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recResult, setRecResult] = useState<RecommendationResult | null>(null);
  const [selected, setSelected] = useState<Recommendation | null>(null);
  const [comparison, setComparison] = useState<ComparisonResult | null>(null);
  const [itinerary, setItinerary] = useState<ItineraryDay[]>([]);
  const [crmEnabled, setCrmEnabled] = useState<boolean | null>(null);
  const [production, setProduction] = useState(false);
  const [crmReference, setCrmReference] = useState<string | null>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const recovered = useRef(false);
  // Animate only replies that just arrived — never on refresh/recovery.
  const [animateLast, setAnimateLast] = useState(false);

  const greeting: ChatMessage = {
    role: "assistant",
    content:
      "Tell me about the holiday you have in mind. You can name a destination, or simply describe how you want the trip to feel.",
    createdAt: "",
  };

  // Session recovery after refresh + capability flags.
  useEffect(() => {
    if (recovered.current) return;
    recovered.current = true;
    fetch("/api/system/health")
      .then((r) => r.json())
      .then((h: { crmEnabled?: boolean; production?: boolean }) => {
        setCrmEnabled(Boolean(h.crmEnabled));
        setProduction(Boolean(h.production));
      })
      .catch(() => setCrmEnabled(false));
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(SESSION_KEY) : null;
    if (!saved) return;
    fetch(`/api/chat/session/${saved}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { sessionId: string; brief: TravelBrief; messages: ChatMessage[] } | null) => {
        if (!data) {
          window.localStorage.removeItem(SESSION_KEY);
          return;
        }
        setSessionId(data.sessionId);
        setBrief(data.brief);
        setMessages(data.messages);
        setReady(Boolean(data.brief.travelMonth && data.brief.durationNights));
      })
      .catch(() => undefined);
  }, []);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages]);

  const startOver = useCallback(async () => {
    if (sessionId) {
      await fetch(`/api/chat/session/${sessionId}`, { method: "DELETE" }).catch(() => undefined);
      window.localStorage.removeItem(SESSION_KEY);
    }
    setSessionId(null);
    setMessages([]);
    setBrief(undefined);
    setReady(false);
    setRecResult(null);
    setSelected(null);
    setComparison(null);
    setItinerary([]);
    setCrmReference(null);
    setError(null);
    setStage("conversation");
  }, [sessionId]);

  // Discovery layer: a theme picked instead of typed starts a context-aware
  // conversation. Also honours /concierge?theme=… links from landing pages.
  const selectTheme = useCallback(
    async (theme: ThemeChip) => {
      if (busy) return;
      setBusy(true);
      setError(null);
      setMessages((m) => [
        ...m,
        { role: "user", content: `${theme.emoji} ${theme.label} holiday`, createdAt: new Date().toISOString() },
      ]);
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ theme: theme.key, sessionId: sessionId ?? undefined }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as {
          sessionId: string;
          brief: TravelBrief;
          assistantMessage: string;
          readyForRecommendations: boolean;
        };
        setSessionId(data.sessionId);
        window.localStorage.setItem(SESSION_KEY, data.sessionId);
        setBrief(data.brief);
        setReady(data.readyForRecommendations);
        setAnimateLast(true);
        setMessages((m) => [
          ...m,
          { role: "assistant", content: data.assistantMessage, createdAt: new Date().toISOString() },
        ]);
      } catch {
        setError("We couldn't start that theme just now — please try again.");
      } finally {
        setBusy(false);
      }
    },
    [busy, sessionId],
  );

  useEffect(() => {
    if (themes.length === 0) return;
    const wanted = new URLSearchParams(window.location.search).get("theme");
    if (!wanted) return;
    const theme = themes.find((t) => t.key === wanted);
    const hasSession = window.localStorage.getItem(SESSION_KEY);
    if (theme && !hasSession) void selectTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || busy) return;
      setBusy(true);
      setError(null);
      setMessages((m) => [...m, { role: "user", content: trimmed, createdAt: new Date().toISOString() }]);
      setInput("");
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: trimmed, sessionId: sessionId ?? undefined }),
        });
        if (res.status === 429) {
          setError("You're sending messages a little fast — give it a few seconds and try again.");
          return;
        }
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as {
          sessionId: string;
          brief: TravelBrief;
          assistantMessage: string;
          readyForRecommendations: boolean;
          suggestedAction?: "recommend" | "compare";
          comparisonSlugs?: string[];
        };
        setSessionId(data.sessionId);
        window.localStorage.setItem(SESSION_KEY, data.sessionId);
        setBrief(data.brief);
        setReady(data.readyForRecommendations);
        setAnimateLast(true);
        setMessages((m) => [
          ...m,
          { role: "assistant", content: data.assistantMessage, createdAt: new Date().toISOString() },
        ]);
        if (data.suggestedAction === "compare" && data.comparisonSlugs?.length) {
          await runComparison(data.comparisonSlugs, data.sessionId);
        }
      } catch {
        setError("We couldn't process that just now. Your conversation is safe — please try again.");
      } finally {
        setBusy(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [busy, sessionId],
  );

  const runComparison = useCallback(
    async (slugs: string[], sid?: string) => {
      setBusy(true);
      try {
        const res = await fetch("/api/compare", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slugs, sessionId: sid ?? sessionId ?? undefined }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setComparison((await res.json()) as ComparisonResult);
        setStage("comparison");
      } catch {
        setError("The comparison couldn't run just now — please try again.");
      } finally {
        setBusy(false);
      }
    },
    [sessionId],
  );

  const confirmBrief = useCallback(
    async (finalBrief: TravelBrief) => {
      if (!sessionId) return;
      setBusy(true);
      setError(null);
      try {
        const completeRes = await fetch("/api/chat/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, brief: finalBrief }),
        });
        if (!completeRes.ok) throw new Error(`HTTP ${completeRes.status}`);
        setBrief(finalBrief);
        const res = await fetch("/api/plan", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });
        if (res.status === 410) {
          setError("Your session expired — let's start fresh. Nothing was sent anywhere.");
          await startOver();
          return;
        }
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setRecResult((await res.json()) as RecommendationResult);
        setStage("recommendations");
      } catch {
        setError("We couldn't prepare recommendations just now. Please try again in a moment.");
      } finally {
        setBusy(false);
      }
    },
    [sessionId, startOver],
  );

  const selectRecommendation = useCallback(
    async (rec: Recommendation) => {
      if (!sessionId) return;
      setBusy(true);
      setError(null);
      setSelected(rec);
      try {
        const res = await fetch("/api/plan", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, destinationSlug: rec.destinationSlug }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as { itinerary: ItineraryDay[] };
        setItinerary(data.itinerary);
        setStage("itinerary");
      } catch {
        setError("We couldn't build the itinerary just now. Please try again.");
        setSelected(null);
      } finally {
        setBusy(false);
      }
    },
    [sessionId],
  );

  const compareRecommendations = useCallback(
    (recs: Recommendation[]) => {
      void runComparison(recs.map((r) => r.destinationSlug).slice(0, 3));
    },
    [runComparison],
  );

  const submitHandover = useCallback(
    async (values: HandoverValues) => {
      if (!sessionId) return;
      setBusy(true);
      setError(null);
      try {
        const res = await fetch("/api/crm/handover", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, customer: values }),
        });
        const data = (await res.json()) as { crmReferenceId?: string; error?: string };
        if (!res.ok || !data.crmReferenceId) {
          setError(data.error ?? "The handover didn't complete. Your plan is safe — please try again.");
          return;
        }
        setCrmReference(data.crmReferenceId);
        window.localStorage.removeItem(SESSION_KEY);
        setStage("submitted");
      } catch {
        setError("The handover didn't complete. Your plan is safe in this session — please try again.");
      } finally {
        setBusy(false);
      }
    },
    [sessionId],
  );

  // ---------- Render ----------

  if (stage === "submitted" && crmReference && selected) {
    return <HandoverSuccess crmReference={crmReference} destinationName={selected.destinationName} />;
  }

  const showMessages = messages.length > 0 ? messages : [greeting];

  return (
    <div>
      {!isEmbedded && <StageIndicator stage={stage} />}
      {error ? (
        <p role="alert" className="mb-4 rounded-lg bg-accent-soft px-4 py-3 text-sm text-accent-strong">
          {error}
        </p>
      ) : null}

      {stage === "conversation" ? (
        <section aria-label="Holiday conversation">
          <h1 className="text-2xl font-bold text-brand sm:text-3xl">
            Tell me about the holiday you have in mind.
          </h1>
          <p className="mt-2 text-sm text-foreground/60">
            Name a destination — or simply describe how you want the trip to feel.
          </p>

          {messages.length === 0 && themes.length > 0 ? (
            <fieldset className="mt-6">
              <legend className="text-sm font-medium text-foreground/70">
                What kind of holiday is calling you?
              </legend>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                {themes.map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    className="rounded-xl border border-line bg-surface px-3 py-2.5 text-left transition hover:border-brand hover:bg-brand-soft"
                    onClick={() => void selectTheme(t)}
                    disabled={busy}
                  >
                    <span className="block text-lg" aria-hidden>{t.emoji}</span>
                    <span className="block text-sm font-semibold text-brand">{t.label}</span>
                    <span className="mt-0.5 block text-xs leading-snug text-foreground/55">{t.tagline}</span>
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs text-foreground/50">
                — or simply describe your holiday below in your own words.
              </p>
            </fieldset>
          ) : null}

          <div
            ref={logRef}
            aria-live="polite"
            className="mt-6 max-h-[45vh] space-y-3 overflow-y-auto rounded-2xl border border-line bg-surface p-4"
          >
            {showMessages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-brand px-4 py-2.5 text-sm text-white"
                    : "mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-surface-muted px-4 py-2.5 text-sm text-foreground"
                }
              >
                {m.role === "assistant" && animateLast && i === showMessages.length - 1 ? (
                  <TypewriterText content={m.content} />
                ) : (
                  m.content
                )}
              </div>
            ))}
            {busy ? (
              <p className="text-sm text-foreground/50" aria-live="polite">
                Klar is thinking…
              </p>
            ) : null}
          </div>

          {/* Dynamic contextual suggestion chips */}
          <div className="mt-4 flex flex-wrap gap-2" aria-label="Quick ideas">
            {getDynamicChips(brief).map((chip) => (
              <button
                key={chip}
                type="button"
                className="chip"
                onClick={() => void sendMessage(chip)}
              >
                {chip}
              </button>
            ))}
          </div>

          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              void sendMessage(input);
            }}
          >
            <label htmlFor="planner-input" className="sr-only">
              Describe your holiday
            </label>
            <input
              id="planner-input"
              className="field-input mt-0 flex-1"
              placeholder="Describe your holiday…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={busy}
              autoComplete="off"
            />
            <button type="submit" className="btn-primary shrink-0" disabled={busy || !input.trim()}>
              Send
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            {sessionId ? (
              <button type="button" className="btn-quiet text-xs" onClick={() => void startOver()}>
                Start over
              </button>
            ) : <span />}
            {ready && brief ? (
              <button type="button" className="btn-primary" onClick={() => setStage("brief-review")}>
                Review My Trip Brief
              </button>
            ) : null}
          </div>
        </section>
      ) : null}

      {stage === "brief-review" && brief ? (
        <BriefReview
          brief={brief}
          busy={busy}
          onBack={() => setStage("conversation")}
          onConfirm={(b) => void confirmBrief(b)}
        />
      ) : null}

      {stage === "recommendations" && recResult && brief ? (
        <HolidayDNA
          brief={brief}
          destinations={recResult.recommendations.map((r) => r.destinationName)}
        />
      ) : null}
      {stage === "recommendations" && recResult ? (
        <RecommendationCards
          result={recResult}
          busy={busy}
          onBack={() => setStage("brief-review")}
          onSelect={(rec) => void selectRecommendation(rec)}
          onCompare={compareRecommendations}
        />
      ) : null}

      {stage === "comparison" && comparison ? (
        <div>
          <ComparisonView result={comparison} />
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setStage(recResult ? "recommendations" : "conversation")}
            >
              ← Back
            </button>
            <button
              type="button"
              className="btn-primary"
              disabled={busy}
              onClick={() => {
                const winner = recResult?.recommendations.find(
                  (r) => r.destinationSlug === comparison.finalRecommendationSlug,
                );
                if (winner) void selectRecommendation(winner);
                else if (recResult) setStage("recommendations");
                else setStage("conversation");
              }}
            >
              Continue with {comparison.finalRecommendationSlug.replace(/-/g, " ")}
            </button>
          </div>
        </div>
      ) : null}

      {stage === "itinerary" && selected ? (
        <ItineraryView
          destinationName={selected.destinationName}
          itinerary={itinerary}
          crmEnabled={crmEnabled}
          production={production}
          sharePath={brief ? planSharePath(selected.destinationSlug, brief) : undefined}
          onBack={() => setStage("recommendations")}
          onContinue={() => setStage("handover")}
        />
      ) : null}

      {stage === "handover" && selected ? (
        <HandoverForm
          destinationName={selected.destinationName}
          busy={busy}
          onBack={() => setStage("itinerary")}
          onSubmit={(values) => void submitHandover(values)}
        />
      ) : null}
    </div>
  );
}

const STAGE_LABELS: Array<{ key: Stage; label: string }> = [
  { key: "conversation", label: "Conversation" },
  { key: "brief-review", label: "Trip brief" },
  { key: "recommendations", label: "Directions" },
  { key: "itinerary", label: "Itinerary" },
  { key: "handover", label: "Klar expert" },
];

function StageIndicator({ stage }: { stage: Stage }) {
  const effective = stage === "comparison" ? "recommendations" : stage;
  const activeIndex = STAGE_LABELS.findIndex((s) => s.key === effective);
  return (
    <nav aria-label="Planning progress" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:gap-2">
        {STAGE_LABELS.map((s, i) => (
          <li key={s.key} className="flex items-center gap-2">
            <span
              aria-current={i === activeIndex ? "step" : undefined}
              className={
                i === activeIndex
                  ? "rounded-full bg-brand px-3 py-1 font-semibold text-white"
                  : i < activeIndex
                    ? "rounded-full bg-success-soft px-3 py-1 font-medium text-success"
                    : "rounded-full bg-surface-muted px-3 py-1 text-foreground/50"
              }
            >
              {s.label}
            </span>
            {i < STAGE_LABELS.length - 1 ? (
              <span aria-hidden className="hidden text-foreground/30 sm:inline">→</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
