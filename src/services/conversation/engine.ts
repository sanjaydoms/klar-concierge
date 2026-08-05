import {
  briefReadyForRecommendations,
  missingBriefFields,
  type TravelBrief,
} from "@/types/brief";
import type { PlanningSession } from "@/types/session";
import { getAIProvider } from "@/services/ai";
import { getDestination } from "@/repositories/knowledge";

export type ChatTurnResult = {
  session: PlanningSession;
  assistantMessage: string;
  readyForRecommendations: boolean;
  missingFields: string[];
  suggestedAction?: "recommend" | "compare";
  comparisonSlugs?: string[];
};

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

const ACKNOWLEDGEMENTS = ["Lovely — noted.", "Great, that helps.", "Perfect, thank you.", "Got it."];

const OUT_OF_SCOPE_REPLY =
  "I can't quote prices, check availability or make bookings — and I never guess visa rules. What I can do brilliantly is help you decide where to go and shape the trip. Once you choose a direction, a Klar expert handles the commercial side. So — tell me about the holiday itself?";

const UNDECIDED_REPLY =
  "That's exactly what I'm for. Let's narrow it gently: which month are you thinking of, roughly how many nights, and who's travelling?";

/**
 * Process one user message inside a planning session: extract preferences,
 * merge into the brief and choose the single most useful next step.
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
  let assistantMessage: string;
  let suggestedAction: ChatTurnResult["suggestedAction"];
  let comparisonSlugs: string[] | undefined;

  if (extraction.detectedIntent === "out-of-scope") {
    assistantMessage = OUT_OF_SCOPE_REPLY;
  } else if (extraction.detectedIntent === "compare-destinations" && extraction.comparisonSlugs.length >= 2) {
    const names = extraction.comparisonSlugs
      .map((s) => getDestination(s)?.name ?? s)
      .join(" and ");
    assistantMessage = `Good question — let me compare ${names} properly for your trip. One moment.`;
    suggestedAction = "compare";
    comparisonSlugs = extraction.comparisonSlugs;
  } else if (extraction.detectedIntent === "undecided" && !ready) {
    assistantMessage = UNDECIDED_REPLY;
  } else if (missing.length === 0 || (ready && session.turnIndex >= 3)) {
    assistantMessage =
      "Wonderful — I have a clear picture of your holiday. Review your trip brief below, adjust anything you like, and I'll suggest three directions.";
    suggestedAction = "recommend";
  } else {
    const ack = ACKNOWLEDGEMENTS[session.turnIndex % ACKNOWLEDGEMENTS.length];
    const question = await ai.composeFollowUp({ brief, missingField: missing[0] });
    assistantMessage = session.turnIndex === 0 ? question : `${ack} ${question}`;
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
