import type { AttractionIntelligence, DestinationIntelligence } from "@/types/knowledge";

export type EligibilityResult = {
  eligible: boolean;
  reasons: string[];
};

const MIN_ATTRACTIONS = 5;
const MIN_CONFIDENCE = 60;

/**
 * The recommendation eligibility gate. A destination may enter customer
 * recommendations only when its evidence is complete — never merely because
 * its name exists in the registry.
 */
export function destinationEligibility(
  destination: DestinationIntelligence,
  destinationAttractions: AttractionIntelligence[],
  now: Date = new Date(),
): EligibilityResult {
  const reasons: string[] = [];

  if (destination.status !== "verified") {
    reasons.push(`status is ${destination.status}, needs verified`);
  }
  if (destination.monthlyIntelligence.length !== 12) {
    reasons.push("monthly intelligence incomplete");
  }
  if (destinationAttractions.length < MIN_ATTRACTIONS) {
    reasons.push(`only ${destinationAttractions.length} attractions (need ${MIN_ATTRACTIONS})`);
  }
  if (destination.tradeOffs.length === 0) {
    reasons.push("no trade-offs recorded");
  }
  if (destination.whoShouldAvoid.length === 0) {
    reasons.push("who-should-avoid missing");
  }
  if (destination.confidence < MIN_CONFIDENCE) {
    reasons.push(`confidence ${destination.confidence} below ${MIN_CONFIDENCE}`);
  }
  if (destination.sources.length === 0) {
    reasons.push("no source metadata");
  }
  if (!destination.nextReviewAt || Number.isNaN(Date.parse(destination.nextReviewAt))) {
    reasons.push("next review date invalid");
  } else {
    // Grace period: review-due knowledge stays usable for 90 days, then goes stale.
    const staleAt = new Date(Date.parse(destination.nextReviewAt) + 90 * 24 * 3600_000);
    if (now > staleAt) {
      reasons.push("critical fields stale (past review grace period)");
    }
  }

  return { eligible: reasons.length === 0, reasons };
}
