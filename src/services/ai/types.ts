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
  | "undecided"
  | "out-of-scope"
  | "unknown";

export type BriefExtractionOutput = {
  briefPatch: Partial<TravelBrief>;
  detectedIntent: DetectedIntent;
  /** Slugs mentioned for comparison, when intent is compare-destinations */
  comparisonSlugs: string[];
  confidence: number;
};

export type FollowUpInput = {
  brief: TravelBrief;
  missingField: string;
};

export interface AIProvider {
  readonly id: string;
  extractBrief(input: BriefExtractionInput): Promise<BriefExtractionOutput>;
  composeFollowUp(input: FollowUpInput): Promise<string>;
}
