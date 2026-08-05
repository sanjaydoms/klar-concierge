import { z } from "zod";
import type { AIProvider, BriefExtractionInput, BriefExtractionOutput, FollowUpInput } from "./types";
import { FallbackAIProvider } from "./fallbackExtractor";

const patchSchema = z.object({
  briefPatch: z
    .object({
      originCountry: z.string().optional(),
      originCity: z.string().optional(),
      departureAirport: z.string().optional(),
      destinationPreferences: z.array(z.string()).optional(),
      excludedDestinations: z.array(z.string()).optional(),
      travelMonth: z.number().int().min(1).max(12).optional(),
      startDate: z.string().optional(),
      endDate: z.string().optional(),
      flexibilityDays: z.number().int().min(0).max(60).optional(),
      durationNights: z.number().int().min(1).max(30).optional(),
      travellerType: z
        .enum(["family", "couple", "honeymoon", "solo", "friends", "senior", "multi-generational", "corporate", "unknown"])
        .optional(),
      adults: z.number().int().min(1).max(20).optional(),
      childrenAges: z.array(z.number().int().min(0).max(17)).optional(),
      seniorTravellers: z.number().int().min(0).max(20).optional(),
      pace: z.enum(["relaxed", "balanced", "active", "unknown"]).optional(),
      interests: z.array(z.string()).optional(),
      dislikes: z.array(z.string()).optional(),
      occasion: z.string().optional(),
      accessibilityNeeds: z.array(z.string()).optional(),
      dietaryPreferences: z.array(z.string()).optional(),
      flightTolerance: z.enum(["short", "medium", "long", "no-preference"]).optional(),
      climatePreferences: z.array(z.string()).optional(),
      crowdTolerance: z.enum(["low", "medium", "high"]).optional(),
      budgetBand: z.enum(["value", "comfort", "premium", "luxury", "unknown"]).optional(),
      decisionPriorities: z.array(z.string()).optional(),
    })
    .partial(),
  detectedIntent: z.enum([
    "plan-holiday", "refine-preferences", "answer-follow-up",
    "compare-destinations", "undecided", "out-of-scope", "unknown",
  ]),
  confidence: z.number().min(0).max(1),
});

const SYSTEM_PROMPT = `You extract structured holiday preferences from customer messages for Klar Travels.
Rules:
- Only extract what the customer actually said. Never invent preferences.
- Never choose destinations, quote prices, state visa rules, or claim availability or bookings.
- interests must be from: beach, food, culture, history, city, shopping, adventure, nature, relaxation, nightlife, themeparks, romance, wildlife, snow.
- climatePreferences must be from: avoid-humidity, avoid-heat, avoid-cold, avoid-rain, want-snow.
- Respond with JSON only, matching the given schema.`;

/**
 * OpenAI-backed extraction. Any failure (network, key, malformed output)
 * falls back to the deterministic extractor, so the planner never depends on
 * the AI provider being available.
 */
export class OpenAIProvider implements AIProvider {
  readonly id = "openai";
  private fallback = new FallbackAIProvider();

  constructor(
    private apiKey: string,
    private model: string,
  ) {}

  async extractBrief(input: BriefExtractionInput): Promise<BriefExtractionOutput> {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: this.model,
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            {
              role: "user",
              content: JSON.stringify({ message: input.message, currentBrief: input.currentBrief }),
            },
          ],
        }),
        signal: AbortSignal.timeout(10_000),
      });
      if (!response.ok) throw new Error(`OpenAI HTTP ${response.status}`);
      const data = (await response.json()) as { choices?: Array<{ message?: { content?: string } }> };
      const content = data.choices?.[0]?.message?.content;
      if (!content) throw new Error("Empty AI response");
      const parsed = patchSchema.parse(JSON.parse(content));
      // Merge with deterministic extraction so obvious fields are never lost,
      // and comparison detection keeps working.
      const deterministic = await this.fallback.extractBrief(input);
      return {
        briefPatch: { ...deterministic.briefPatch, ...parsed.briefPatch },
        detectedIntent:
          deterministic.detectedIntent === "compare-destinations" || deterministic.detectedIntent === "out-of-scope"
            ? deterministic.detectedIntent
            : parsed.detectedIntent,
        comparisonSlugs: deterministic.comparisonSlugs,
        confidence: parsed.confidence,
      };
    } catch {
      return this.fallback.extractBrief(input);
    }
  }

  async composeFollowUp(input: FollowUpInput): Promise<string> {
    // A single follow-up question is deterministic — no AI round-trip needed.
    return this.fallback.composeFollowUp(input);
  }
}
