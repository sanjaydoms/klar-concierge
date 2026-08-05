import type { TravelBrief } from "@/types/brief";

export type BriefExtractionInput = {
  message: string;
  currentBrief: TravelBrief;
};

export type DetectedIntent =
  | "plan-holiday"
  | "refine-preferences"
  | "answer-follow-up"
  | "compare-destinations"
  | "destination-info"
  | "best-time"
  | "undecided"
  | "out-of-scope"
  | "unknown";

export type BriefExtractionOutput = {
  briefPatch: Partial<TravelBrief>;
  detectedIntent: DetectedIntent;
  /** All known destinations mentioned in the message */
  mentionedSlugs: string[];
  /** Slugs to compare, when intent is compare-destinations */
  comparisonSlugs: string[];
  confidence: number;
};

export type FollowUpInput = {
  brief: TravelBrief;
  missingField: string;
};

/**
 * Facts pack for optional LLM reply polishing. The model may rephrase these
 * facts naturally but must not add information — the deterministic text is
 * always the fallback and the source of truth.
 */
export type ReplyFacts = {
  deterministicReply: string;
  understoodSummary?: string;
  nextQuestion?: string;
  destinationFacts?: string[];
};

export interface AIProvider {
  readonly id: string;
  extractBrief(input: BriefExtractionInput): Promise<BriefExtractionOutput>;
  composeFollowUp(input: FollowUpInput): Promise<string>;
  /** Optional natural-language polish; must degrade to deterministicReply. */
  polishReply?(facts: ReplyFacts): Promise<string>;
}
