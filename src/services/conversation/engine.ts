import {
  briefReadyForRecommendations,
  missingBriefFields,
  type TravelBrief,
} from "@/types/brief";
import type { PlanningSession } from "@/types/session";
import { getAIProvider } from "@/services/ai";
import { getDestination } from "@/repositories/knowledge";
import { buildDiscoverCollections } from "@/services/ktie/discover";
import type { DestinationIntelligence } from "@/types/knowledge";

export type ChatTurnResult = {
  session: PlanningSession;
  assistantMessage: string;
  readyForRecommendations: boolean;
  missingFields: string[];
  suggestedAction?: "recommend" | "compare";
  comparisonSlugs?: string[];
};

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function mergeBrief(current: TravelBrief, patch: Partial<TravelBrief>): TravelBrief {
  const union = (a: string[], b?: string[]) => (b ? Array.from(new Set([...a, ...b])) : a);
  return {
    ...current,
    ...patch,
    destinationPreferences: union(current.destinationPreferences, patch.destinationPreferences),
    excludedDestinations: union(current.excludedDestinations, patch.excludedDestinations),
    interests: union(current.interests, patch.interests),
    dislikes: union(current.dislikes, patch.dislikes),
    accessibilityNeeds: union(current.accessibilityNeeds, patch.accessibilityNeeds),
    dietaryPreferences: union(current.dietaryPreferences, patch.dietaryPreferences),
    climatePreferences: union(current.climatePreferences, patch.climatePreferences),
    decisionPriorities: union(current.decisionPriorities, patch.decisionPriorities),
    childrenAges: patch.childrenAges ?? current.childrenAges,
    travellerType: patch.travellerType && patch.travellerType !== "unknown" ? patch.travellerType : current.travellerType,
    pace: patch.pace && patch.pace !== "unknown" ? patch.pace : current.pace,
    budgetBand: patch.budgetBand && patch.budgetBand !== "unknown" ? patch.budgetBand : current.budgetBand,
    originalPrompt: current.originalPrompt || patch.originalPrompt || "",
  };
}

/** Human summary of what was newly understood — the "I heard you" moment. */
function understoodSummary(patch: Partial<TravelBrief>, brief: TravelBrief): string | undefined {
  const bits: string[] = [];
  if (patch.travellerType && patch.travellerType !== "unknown") {
    bits.push(
      patch.travellerType === "multi-generational"
        ? "a multi-generational trip"
        : `a ${patch.travellerType} holiday`,
    );
  }
  if (patch.durationNights) bits.push(`${patch.durationNights} nights`);
  if (patch.travelMonth) bits.push(`in ${MONTH_NAMES[patch.travelMonth - 1]}`);
  if (patch.originCity) bits.push(`from ${patch.originCity}`);
  if (patch.childrenAges?.length) bits.push(`children aged ${patch.childrenAges.join(" and ")}`);
  if (patch.seniorTravellers) bits.push(`${patch.seniorTravellers} senior traveller${patch.seniorTravellers > 1 ? "s" : ""}`);
  if (patch.pace && patch.pace !== "unknown") bits.push(`${patch.pace} pace`);
  if (patch.interests?.length) bits.push(`you enjoy ${patch.interests.slice(0, 3).join(", ")}`);
  if (patch.budgetBand && patch.budgetBand !== "unknown") bits.push(`${patch.budgetBand} comfort`);
  if (patch.excludedDestinations?.length) {
    const names = patch.excludedDestinations
      .map((s) => getDestination(s)?.name ?? s)
      .slice(0, 3);
    bits.push(`skipping ${names.join(" and ")}`);
  }
  if (bits.length < 2) return undefined;
  return `So far I have: ${bits.join(", ")}.`;
}

function bestMonthsOf(d: DestinationIntelligence): { name: string; label: string }[] {
  return [...d.monthlyIntelligence]
    .sort((a, b) => b.seasonScore - a.seasonScore)
    .slice(0, 3)
    .map((m) => ({ name: MONTH_NAMES[m.month - 1], label: m.seasonLabel.toLowerCase() }));
}

/** KTIE-grounded answer to "tell me about X" / "is X good for …". */
function destinationInfoReply(slug: string, brief: TravelBrief): string | undefined {
  const d = getDestination(slug);
  if (!d) return undefined;
  const parts: string[] = [`${d.name}: ${d.positioningLine}`];
  if (brief.travelMonth) {
    const m = d.monthlyIntelligence.find((mi) => mi.month === brief.travelMonth);
    if (m) {
      parts.push(
        `${MONTH_NAMES[brief.travelMonth - 1]} is ${m.seasonLabel.toLowerCase()} there — ${m.temperatureBand} temperatures, ${m.rainfall} rainfall, ${m.crowdLevel} crowds.`,
      );
    }
  } else {
    const best = bestMonthsOf(d);
    parts.push(`Its best months are usually ${best.map((b) => b.name).join(", ")}.`);
  }
  if (brief.childrenAges.length > 0) {
    const fit = d.suitability.children5To10;
    parts.push(
      fit >= 80
        ? `It's genuinely strong for children — plenty that works at their ages.`
        : fit >= 60
          ? `It works for children with a bit of planning.`
          : `Honestly, it's not the easiest choice with young children.`,
    );
  }
  if (brief.seniorTravellers > 0 || brief.travellerType === "senior") {
    parts.push(
      d.suitability.seniors >= 80
        ? `Comfortable for senior travellers too.`
        : `For seniors, expect ${d.travelPracticality.walkingIntensity} walking intensity — worth weighing.`,
    );
  }
  parts.push(`One honest trade-off: ${d.tradeOffs[0]?.toLowerCase() ?? "your Klar expert will confirm the practical details"}.`);
  parts.push(`Want me to build ${d.name} into your plan, or shall we look at alternatives too?`);
  return parts.join(" ");
}

function bestTimeReply(slug: string): string | undefined {
  const d = getDestination(slug);
  if (!d) return undefined;
  const best = bestMonthsOf(d);
  const worst = [...d.monthlyIntelligence].sort((a, b) => a.seasonScore - b.seasonScore)[0];
  return (
    `For ${d.name}, the strongest months are ${best.map((b) => b.name).join(", ")}. ` +
    `${MONTH_NAMES[worst.month - 1]} is the one to be careful with${worst.warnings[0] ? ` — ${worst.warnings[0].toLowerCase()}` : ""}. ` +
    `Which month were you thinking of? I'll shape the plan around it.`
  );
}

/** "Where can I go this month / in June?" — grounded seasonal shortlist. */
function seasonalScanReply(month: number): string {
  const top = buildDiscoverCollections(month)[0].destinations.slice(0, 4);
  return (
    `${MONTH_NAMES[month - 1]} is lovely for ${top.map((d) => d.name).join(", ")} — ` +
    `each at its seasonal best then. Tell me who's travelling and for how many nights, ` +
    `and I'll narrow it to the three best directions for you.`
  );
}

const ACKNOWLEDGEMENTS = ["Lovely.", "Great, that helps.", "Perfect, thank you.", "Got it."];

const OUT_OF_SCOPE_REPLY =
  "I can't quote prices, check availability or make bookings — and I never guess visa rules. What I can do brilliantly is help you decide where to go and shape the trip. Once you choose a direction, a Klar expert handles the commercial side. So — tell me about the holiday itself?";

const UNDECIDED_REPLY =
  "That's exactly what I'm for. Let's narrow it gently: which month are you thinking of, roughly how many nights, and who's travelling?";

/**
 * Process one user message inside a planning session: extract preferences,
 * merge into the brief and choose the single most useful next step. When an
 * AI provider is configured, replies are naturally rephrased but remain
 * strictly grounded in the deterministic facts below.
 */
export async function processChatTurn(
  session: PlanningSession,
  message: string,
): Promise<ChatTurnResult> {
  const ai = getAIProvider();
  const extraction = await ai.extractBrief({ message, currentBrief: session.brief });

  const brief = mergeBrief(
    session.brief.originalPrompt ? session.brief : { ...session.brief, originalPrompt: message },
    extraction.briefPatch,
  );
  session.brief = brief;
  const now = new Date().toISOString();
  session.messages.push({ role: "user", content: message, createdAt: now });

  const missing = missingBriefFields(brief);
  const ready = briefReadyForRecommendations(brief);
  const summary = understoodSummary(extraction.briefPatch, brief);
  let assistantMessage: string;
  let nextQuestion: string | undefined;
  let suggestedAction: ChatTurnResult["suggestedAction"];
  let comparisonSlugs: string[] | undefined;
  let polishable = true;

  if (extraction.detectedIntent === "out-of-scope") {
    assistantMessage = OUT_OF_SCOPE_REPLY;
    polishable = false;
  } else if (extraction.detectedIntent === "compare-destinations" && extraction.comparisonSlugs.length >= 2) {
    const names = extraction.comparisonSlugs.map((s) => getDestination(s)?.name ?? s).join(" and ");
    assistantMessage = `Good question — let me compare ${names} properly for your trip. One moment.`;
    suggestedAction = "compare";
    comparisonSlugs = extraction.comparisonSlugs;
    polishable = false;
  } else if (extraction.detectedIntent === "best-time" && extraction.mentionedSlugs.length === 1) {
    assistantMessage = bestTimeReply(extraction.mentionedSlugs[0]) ?? UNDECIDED_REPLY;
  } else if (extraction.detectedIntent === "destination-info" && extraction.mentionedSlugs.length === 1) {
    assistantMessage = destinationInfoReply(extraction.mentionedSlugs[0], brief) ?? UNDECIDED_REPLY;
  } else if (
    extraction.detectedIntent === "undecided" &&
    brief.travelMonth &&
    !ready
  ) {
    assistantMessage = seasonalScanReply(brief.travelMonth);
  } else if (extraction.detectedIntent === "undecided" && !ready) {
    assistantMessage = UNDECIDED_REPLY;
  } else if (missing.length === 0 || (ready && session.turnIndex >= 3)) {
    assistantMessage = [
      summary,
      "I have a clear picture of your holiday. Review your trip brief below, adjust anything you like, and I'll suggest the best directions.",
    ]
      .filter(Boolean)
      .join(" ");
  } else {
    nextQuestion = await ai.composeFollowUp({ brief, missingField: missing[0] });
    const ack = ACKNOWLEDGEMENTS[session.turnIndex % ACKNOWLEDGEMENTS.length];
    assistantMessage = [session.turnIndex === 0 ? undefined : ack, summary, nextQuestion]
      .filter(Boolean)
      .join(" ");
  }

  // Optional natural-language polish — strictly grounded, always falls back.
  if (polishable && ai.polishReply) {
    assistantMessage = await ai.polishReply({
      deterministicReply: assistantMessage,
      understoodSummary: summary,
      nextQuestion,
    });
  }

  session.messages.push({ role: "assistant", content: assistantMessage, createdAt: new Date().toISOString() });
  session.turnIndex += 1;

  return {
    session,
    assistantMessage,
    readyForRecommendations: ready,
    missingFields: missing,
    suggestedAction,
    comparisonSlugs,
  };
}

/** Non-PII one-line summary of the conversation for the CRM payload. */
export function conversationSummary(session: PlanningSession): string {
  const b = session.brief;
  const parts = [
    b.travellerType !== "unknown" ? b.travellerType : null,
    b.travelMonth ? `month ${b.travelMonth}` : null,
    b.durationNights ? `${b.durationNights} nights` : null,
    b.interests.length ? `interests: ${b.interests.slice(0, 4).join("/")}` : null,
    session.selectedDestinationSlug ? `selected ${session.selectedDestinationSlug}` : null,
  ].filter(Boolean);
  return `Planned via Klar Concierge over ${session.turnIndex} turns — ${parts.join(", ")}.`;
}
