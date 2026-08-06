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
import { ItineraryView, type ItineraryRefinement } from "./ItineraryView";
import { PlanReady } from "./PlanReady";
import { ComparisonView } from "@/components/comparison/ComparisonView";
import { HandoverForm, type HandoverValues } from "@/components/handover/HandoverForm";
import { HandoverSuccess } from "@/components/handover/HandoverSuccess";
import { planSharePath } from "@/lib/shareLinks";
import { answerChipsFor } from "@/lib/answerChips";
import { TypewriterText } from "./TypewriterText";
import { HolidayDNA } from "./HolidayDNA";
import { WelcomeStep } from "./WelcomeStep";
import { welcomeAlreadyHandled } from "@/lib/leadContact";

export type ThemeChip = { key: string; label: string; emoji: string; tagline: string };

type Stage =
  | "conversation"
  | "brief-review"
  | "recommendations"
  | "comparison"
  | "itinerary"
  | "handover"
  | "submitted"
  | "complete";

type ChatMessage = { role: "user" | "assistant"; content: string; createdAt: string };

const STARTER_CHIPS = [
  "Family holiday",
  "Honeymoon",
  "Within India",
  "Best this month",
  "Relaxed beach escape",
  "Senior-friendly trip",
  "Short international break",
  "Food and culture",
  "Surprise me",
];


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
  // What the assistant's open question is asking for — drives answer chips.
  const [awaitingField, setAwaitingField] = useState<string | null>(null);
  const [missingFields, setMissingFields] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recResult, setRecResult] = useState<RecommendationResult | null>(null);
  const [selected, setSelected] = useState<Recommendation | null>(null);
  const [comparison, setComparison] = useState<ComparisonResult | null>(null);
  const [itinerary, setItinerary] = useState<ItineraryDay[]>([]);
  const [crmEnabled, setCrmEnabled] = useState<boolean | null>(null);
  const [crmReference, setCrmReference] = useState<string | null>(null);
  const [planReference, setPlanReference] = useState<string | null>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const recovered = useRef(false);
  // Animate only replies that just arrived — never on refresh/recovery.
  const [animateLast, setAnimateLast] = useState(false);
  // Trust-based onboarding: shown once per visit before the conversation.
  // null = undecided (until client-side checks run), then true/false.
  const [showWelcome, setShowWelcome] = useState<boolean | null>(null);
  const [welcomeTheme, setWelcomeTheme] = useState<ThemeChip | undefined>(undefined);

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
      .then((h: { crmEnabled?: boolean }) => {
        setCrmEnabled(Boolean(h.crmEnabled));
      })
      .catch(() => setCrmEnabled(false));
    // A destination/theme deep link means a fresh, focused conversation —
    // never resurrect an unrelated previous session under it.
    const deepLink = new URLSearchParams(window.location.search);
    if (deepLink.get("destination") || deepLink.get("theme")) return;
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
    setAwaitingField(null);
    setMissingFields([]);
    setRecResult(null);
    setSelected(null);
    setComparison(null);
    setItinerary([]);
    setCrmReference(null);
    setPlanReference(null);
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
          awaitingField?: string | null;
          missingFields?: string[];
        };
        setSessionId(data.sessionId);
        window.localStorage.setItem(SESSION_KEY, data.sessionId);
        setBrief(data.brief);
        setReady(data.readyForRecommendations);
        setAwaitingField(data.awaitingField ?? null);
        setMissingFields(data.missingFields ?? []);
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

  // Deep-link entry from a destination page: a fresh conversation already
  // about that destination — the planner opens mid-thought, not blank.
  const selectDestination = useCallback(async (slug: string) => {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ destination: slug }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as {
        sessionId: string;
        brief: TravelBrief;
        assistantMessage: string;
        readyForRecommendations: boolean;
        awaitingField?: string | null;
        missingFields?: string[];
      };
      setSessionId(data.sessionId);
      window.localStorage.setItem(SESSION_KEY, data.sessionId);
      setBrief(data.brief);
      setReady(data.readyForRecommendations);
      setAwaitingField(data.awaitingField ?? null);
      setMissingFields(data.missingFields ?? []);
      setAnimateLast(true);
      const prettyName = slug
        .split("-")
        .map((w) => (w.length > 1 ? w[0].toUpperCase() + w.slice(1) : w.toUpperCase()))
        .join(" ");
      setMessages([
        { role: "user", content: `Plan a ${prettyName} holiday`, createdAt: new Date().toISOString() },
        { role: "assistant", content: data.assistantMessage, createdAt: new Date().toISOString() },
      ]);
    } catch {
      setError("We couldn't start that plan just now — please try again.");
    } finally {
      setBusy(false);
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const destinationSlug = params.get("destination");
    const rawTheme = params.get("theme");
    // Old links may still say "romance" — the theme is now called "romantic".
    const wanted = rawTheme === "romance" ? "romantic" : rawTheme;
    const linkedTheme = wanted ? themes.find((t) => t.key === wanted) : undefined;

    // "Plan a South Africa Holiday" arrived with intent — honour it
    // immediately, in a fresh conversation about that destination.
    if (destinationSlug) {
      setShowWelcome(false);
      void selectDestination(destinationSlug);
      return;
    }
    if (themes.length === 0) {
      setShowWelcome(false);
      return;
    }
    const hasSession = Boolean(window.localStorage.getItem(SESSION_KEY));
    if (linkedTheme && (hasSession || welcomeAlreadyHandled())) {
      // A theme link always starts that theme — even for returning visitors.
      setShowWelcome(false);
      void selectTheme(linkedTheme);
      return;
    }
    if (hasSession || welcomeAlreadyHandled()) {
      setShowWelcome(false);
      return;
    }
    setWelcomeTheme(linkedTheme);
    setShowWelcome(true);
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
          awaitingField?: string | null;
          missingFields?: string[];
          suggestedAction?: "recommend" | "compare";
          comparisonSlugs?: string[];
        };
        setSessionId(data.sessionId);
        window.localStorage.setItem(SESSION_KEY, data.sessionId);
        setBrief(data.brief);
        setReady(data.readyForRecommendations);
        setAwaitingField(data.awaitingField ?? null);
        setMissingFields(data.missingFields ?? []);
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

  // Lightweight refinement: the itinerary regenerates deterministically with
  // the traveller's adjustment — no complex editors.
  const refineItinerary = useCallback(
    async (refinement: ItineraryRefinement) => {
      if (!sessionId || !selected) return;
      setBusy(true);
      setError(null);
      try {
        const res = await fetch("/api/plan", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId,
            destinationSlug: selected.destinationSlug,
            refine: refinement,
          }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as { itinerary: ItineraryDay[] };
        setItinerary(data.itinerary);
      } catch {
        setError("We couldn't adjust the plan just now — it's unchanged. Please try again.");
      } finally {
        setBusy(false);
      }
    },
    [sessionId, selected],
  );

  // Completion (placeholder-CRM phase): issue the plan reference and end on a
  // confident note — never a dead end or an unavailable form.
  const finishPlan = useCallback(async () => {
    if (!sessionId) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as { referenceId: string };
      setPlanReference(data.referenceId);
      setStage("complete");
    } catch {
      setError("We couldn't finish up just now — your plan is safe. Please try again.");
    } finally {
      setBusy(false);
    }
  }, [sessionId]);

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

      {stage === "conversation" && showWelcome ? (
        <WelcomeStep
          themes={themes}
          initialTheme={welcomeTheme}
          onStart={(theme) => {
            setShowWelcome(false);
            void selectTheme(theme);
          }}
          onSkip={() => setShowWelcome(false)}
        />
      ) : null}

      {stage === "conversation" && showWelcome === false ? (
        <section aria-label="Holiday conversation" className="pb-24 sm:pb-4">
          <div className="mb-2">
            <button
              type="button"
              className="btn-quiet text-xs"
              onClick={() => {
                if (window.history.length > 1) window.history.back();
                else window.location.href = "/";
              }}
            >
              ← Back
            </button>
          </div>
          {/* Once the conversation is live, the chat gets the phone screen. */}
          <div className={messages.length > 0 ? "hidden sm:block" : undefined}>
            <h1 className="text-2xl font-bold text-brand sm:text-3xl">
              Tell me about the holiday you have in mind.
            </h1>
            <p className="mt-2 text-sm text-foreground/60">
              Name a destination — or simply describe how you want the trip to feel.
            </p>
          </div>

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
            className="mt-4 max-h-[52vh] space-y-3 overflow-y-auto rounded-2xl border border-line bg-surface p-4 sm:mt-6 sm:max-h-[45vh]"
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

          {ready && brief && !busy && awaitingField == null && messages.length > 0 ? (
            <div className="mt-4 rounded-xl border border-brand/30 bg-brand-soft p-4">
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => void confirmBrief(brief)}
                >
                  Show My Matches
                </button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setStage("brief-review")}
                >
                  Change Something
                </button>
              </div>
            </div>
          ) : null}

          {messages.length === 0 ? (
            <div className="mt-4 flex flex-wrap gap-2" aria-label="Quick ideas">
              {STARTER_CHIPS.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  className="chip"
                  onClick={() => setInput((v) => (v ? `${v} ${chip.toLowerCase()}` : chip))}
                >
                  {chip}
                </button>
              ))}
            </div>
          ) : (
            (() => {
              // Answer chips always match the question on screen — never a
              // random grab-bag of pace/budget options.
              const chips = busy ? [] : answerChipsFor(awaitingField ?? missingFields[0] ?? null);
              return chips.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2" aria-label="Quick answers">
                  {chips.map((chip) => (
                    <button
                      key={chip.label}
                      type="button"
                      className="chip"
                      disabled={busy}
                      onClick={() => void sendMessage(chip.send)}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              ) : null;
            })()
          )}

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

          <div className="mt-4">
            {sessionId ? (
              <button type="button" className="btn-quiet text-xs" onClick={() => void startOver()}>
                Start over
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
          busy={busy}
          sharePath={brief ? planSharePath(selected.destinationSlug, brief) : undefined}
          onBack={() => setStage("recommendations")}
          onContinue={() => setStage("handover")}
          onRefine={(r) => void refineItinerary(r)}
          onFinish={crmEnabled ? undefined : () => void finishPlan()}
        />
      ) : null}

      {stage === "complete" && planReference && selected ? (
        <PlanReady
          referenceId={planReference}
          destinationName={selected.destinationName}
          summaryLine={
            brief
              ? [
                  brief.durationNights ? `${brief.durationNights} nights` : null,
                  brief.travelMonth
                    ? `in ${["January","February","March","April","May","June","July","August","September","October","November","December"][brief.travelMonth - 1]}`
                    : null,
                ]
                  .filter(Boolean)
                  .join(" ")
              : ""
          }
          sharePath={brief ? planSharePath(selected.destinationSlug, brief) : undefined}
          onStartOver={() => void startOver()}
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

// Human progress language, per the product review — a journey, not software.
const STAGE_LABELS: Array<{ key: Stage; label: string }> = [
  { key: "conversation", label: "Your Trip" },
  { key: "recommendations", label: "Your Matches" },
  { key: "itinerary", label: "Your Plan" },
  { key: "handover", label: "Next Step" },
];

const STAGE_ALIASES: Partial<Record<Stage, Stage>> = {
  comparison: "recommendations",
  "brief-review": "conversation",
  complete: "handover",
  submitted: "handover",
};

function StageIndicator({ stage }: { stage: Stage }) {
  const effective = STAGE_ALIASES[stage] ?? stage;
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
