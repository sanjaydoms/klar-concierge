import {
  briefReadyForRecommendations,
  missingBriefFields,
  missingEssentialFields,
  type TravelBrief,
} from "@/types/brief";
import type { PlanningSession } from "@/types/session";
import { getAIProvider } from "@/services/ai";
import { isUnreadableMessage, parseAwaitedAnswer } from "@/services/conversation/slotFill";
import { getDestination } from "@/repositories/knowledge";
import { buildDiscoverCollections } from "@/services/ktie/discover";
import { getTheme } from "@/services/ktie/themes";
import type { DestinationIntelligence } from "@/types/knowledge";

export type ChatTurnResult = {
  session: PlanningSession;
  assistantMessage: string;
  readyForRecommendations: boolean;
  missingFields: string[];
  /** The field the assistant's question is asking for — drives answer chips. */
  awaitingField?: string;
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
  if (patch.travelScope) {
    bits.push(patch.travelScope === "domestic" ? "a holiday within India" : "an international holiday");
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

/**
 * The complete "Here's what I've understood" moment — spoken once the
 * essentials are in, right before matches. Always covers the whole brief,
 * so the traveller can confirm or correct in one glance.
 */
function fullBriefSummary(brief: TravelBrief): string {
  const bits: string[] = [];
  const who =
    brief.travellerType === "multi-generational"
      ? "a multi-generational trip"
      : brief.travellerType === "honeymoon"
        ? "a honeymoon"
        : brief.travellerType === "couple"
          ? "a couple's holiday"
          : brief.travellerType === "friends"
            ? "a friends' trip"
            : `a ${brief.travellerType} holiday`;
  bits.push(who);
  if (brief.childrenAges.length) bits.push(`children aged ${brief.childrenAges.join(" and ")}`);
  if (brief.originCity) bits.push(`starting from ${brief.originCity}`);
  if (brief.durationNights) bits.push(`${brief.durationNights} nights`);
  if (brief.travelMonth) bits.push(`in ${MONTH_NAMES[brief.travelMonth - 1]}`);
  if (brief.travelScope) bits.push(brief.travelScope === "domestic" ? "within India" : "international");
  if (brief.pace !== "unknown") bits.push(`${brief.pace} pace`);
  if (brief.interests.length) {
    const INTEREST_PHRASES: Record<string, string> = {
      romance: "romantic escapes",
      themeparks: "theme parks",
      relaxation: "unwinding",
    };
    const phrased = brief.interests.slice(0, 3).map((i) => INTEREST_PHRASES[i] ?? i);
    bits.push(`you enjoy ${phrased.join(", ")}`);
  }
  if (brief.budgetBand !== "unknown") bits.push(`${brief.budgetBand} comfort`);
  return `Here's what I've understood: ${bits.join(", ")}.`;
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
 * Discovery-layer entry: the traveller picked a holiday theme instead of
 * typing. Seeds the brief with the theme's implied preferences and opens
 * with the theme's tailored question — the conversation adapts from the
 * first word instead of interrogating everyone identically.
 */
export function startWithTheme(session: PlanningSession, themeKey: string): ChatTurnResult | undefined {
  const theme = getTheme(themeKey);
  if (!theme) return undefined;
  session.brief = mergeBrief(
    session.brief.originalPrompt
      ? session.brief
      : { ...session.brief, originalPrompt: `${theme.label} holiday` },
    {
      ...theme.briefPatch,
      // The chosen theme travels with the enquiry to the Klar team.
      decisionPriorities: [...(theme.briefPatch.decisionPriorities ?? []), `theme:${theme.key}`],
    },
  );
  const assistantMessage = theme.openingQuestion;
  const now = new Date().toISOString();
  session.messages.push({ role: "user", content: `${theme.emoji} ${theme.label} holiday`, createdAt: now });
  session.messages.push({ role: "assistant", content: assistantMessage, createdAt: new Date().toISOString() });
  session.turnIndex += 1;
  // The opening question is multi-part, but it leads with one primary field —
  // remembering it lets a bare answer ("6 and 9", "April") land correctly.
  session.awaitingField = theme.awaitingField;
  return {
    session,
    assistantMessage,
    readyForRecommendations: briefReadyForRecommendations(session.brief),
    missingFields: missingBriefFields(session.brief),
    awaitingField: session.awaitingField,
  };
}

/**
 * Deep-link entry from a destination page: "Plan a South Africa Holiday"
 * must arrive with South Africa already the subject of the conversation —
 * never a generic (or worse, someone else's previous) planner.
 */
export function startWithDestination(session: PlanningSession, slug: string): ChatTurnResult | undefined {
  const destination = getDestination(slug);
  if (!destination) return undefined;
  session.brief = mergeBrief(
    session.brief.originalPrompt
      ? session.brief
      : { ...session.brief, originalPrompt: `${destination.name} holiday` },
    { destinationPreferences: [destination.slug] },
  );
  const assistantMessage =
    `${destination.name} — wonderful choice. ${destination.positioningLine} ` +
    `Which month are you thinking of travelling?`;
  const now = new Date().toISOString();
  session.messages.push({ role: "user", content: `Plan a ${destination.name} holiday`, createdAt: now });
  session.messages.push({ role: "assistant", content: assistantMessage, createdAt: new Date().toISOString() });
  session.turnIndex += 1;
  session.awaitingField = session.brief.travelMonth ? undefined : "travelMonth";
  return {
    session,
    assistantMessage,
    readyForRecommendations: briefReadyForRecommendations(session.brief),
    missingFields: missingBriefFields(session.brief),
    awaitingField: session.awaitingField,
  };
}

/** Record a complete turn (used for early honest replies that skip extraction). */
function recordTurn(
  session: PlanningSession,
  userMessage: string,
  assistantMessage: string,
): ChatTurnResult {
  const now = new Date().toISOString();
  session.messages.push({ role: "user", content: userMessage, createdAt: now });
  session.messages.push({ role: "assistant", content: assistantMessage, createdAt: new Date().toISOString() });
  session.turnIndex += 1;
  return {
    session,
    assistantMessage,
    readyForRecommendations: briefReadyForRecommendations(session.brief),
    missingFields: missingBriefFields(session.brief),
    awaitingField: session.awaitingField,
  };
}

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

  // Honesty first: emoji-only or symbol-only input carries nothing to plan
  // with. Never reply "Got it" to it — say so, and re-ask the open question.
  if (isUnreadableMessage(message)) {
    const openField = session.awaitingField ?? missingEssentialFields(session.brief)[0];
    const question = openField
      ? await ai.composeFollowUp({ brief: session.brief, missingField: openField })
      : "Tell me about the holiday you have in mind.";
    session.awaitingField = openField;
    return recordTurn(session, message, `Sorry — I couldn't make sense of that message. ${question}`);
  }

  // If the assistant just asked a specific question, read short replies as the
  // answer to it: "9" after "How many nights?" means nine nights.
  let slotPatch: Partial<TravelBrief> = {};
  if (session.awaitingField) {
    const slot = parseAwaitedAnswer(message, session.awaitingField);
    if (slot.kind === "invalid") {
      return recordTurn(session, message, slot.reply);
    }
    if (slot.kind === "filled") slotPatch = slot.patch;
  }

  const extraction = await ai.extractBrief({ message, currentBrief: session.brief });
  extraction.briefPatch = { ...slotPatch, ...extraction.briefPatch };

  const brief = mergeBrief(
    session.brief.originalPrompt ? session.brief : { ...session.brief, originalPrompt: message },
    extraction.briefPatch,
  );
  session.brief = brief;
  const now = new Date().toISOString();
  session.messages.push({ role: "user", content: message, createdAt: now });

  const missing = missingBriefFields(brief);
  const essentials = missingEssentialFields(brief);
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
  } else if (essentials.length === 0) {
    // Every essential is in — never ask another blocking question. Optional
    // preferences (pace, tastes, comfort) only sharpen matches and can be
    // adjusted behind "Change something".
    assistantMessage = `${fullBriefSummary(brief)} Shall I show your matches, or would you like to change something first?`;
  } else {
    nextQuestion = await ai.composeFollowUp({ brief, missingField: essentials[0] });
    const learnedNothing =
      Object.keys(extraction.briefPatch).length === 0 && extraction.detectedIntent === "unknown";
    // Only acknowledge warmly when the message actually taught us something —
    // pretending to understand junk is exactly what erodes trust.
    const ack = learnedNothing
      ? "I didn't quite catch that, so let me ask again:"
      : ACKNOWLEDGEMENTS[session.turnIndex % ACKNOWLEDGEMENTS.length];
    assistantMessage = [session.turnIndex === 0 ? undefined : ack, summary, nextQuestion]
      .filter(Boolean)
      .join(" ");
  }

  // Remember which question is open so a bare answer next turn lands in the
  // right slot. Cleared when no question is pending.
  session.awaitingField = nextQuestion ? essentials[0] : undefined;

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
    awaitingField: session.awaitingField,
    suggestedAction,
    comparisonSlugs,
  };
}

/** Non-PII one-line summary of the conversation for the CRM payload. */
export function conversationSummary(session: PlanningSession): string {
  const b = session.brief;
  const parts = [
    b.decisionPriorities.find((p) => p.startsWith("theme:"))?.replace("theme:", "theme ") ?? null,
    b.travellerType !== "unknown" ? b.travellerType : null,
    b.travelMonth ? `month ${b.travelMonth}` : null,
    b.durationNights ? `${b.durationNights} nights` : null,
    b.interests.length ? `interests: ${b.interests.slice(0, 4).join("/")}` : null,
    session.selectedDestinationSlug ? `selected ${session.selectedDestinationSlug}` : null,
  ].filter(Boolean);
  return `Planned via Klar Concierge over ${session.turnIndex} turns — ${parts.join(", ")}.`;
}
