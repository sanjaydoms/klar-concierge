import { z } from "zod";
import type { AIProvider, BriefExtractionInput, BriefExtractionOutput, FollowUpInput, ReplyFacts } from "./types";
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
      durationNights: z.number().int().min(1).max(45).optional(),
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
    "compare-destinations", "destination-info", "best-time",
    "undecided", "out-of-scope", "unknown",
  ]),
  confidence: z.number().min(0).max(1),
});

const SYSTEM_PROMPT = `You extract structured holiday preferences from customer messages for Klar Travels.
Rules:
- Only extract what the customer actually said. Never invent preferences.
- Never choose destinations, quote prices, state visa rules, or claim availability or bookings.
- interests must be from: beach, food, culture, history, city, shopping, adventure, nature, relaxation, nightlife, themeparks, romance, wildlife, snow.
- climatePreferences must be from: avoid-humidity, avoid-heat, avoid-cold, avoid-rain, want-snow.
- Respond with a single JSON object only — no prose, no code fences.`;

/** Extract the first JSON object from a model reply (tolerates stray prose). */
function firstJsonObject(text: string): string {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end <= start) throw new Error("no JSON in reply");
  return text.slice(start, end + 1);
}

/**
 * Anthropic (Claude)-backed extraction and reply polishing. Same contract as
 * the OpenAI provider: any failure falls back to the deterministic engine,
 * so the planner never depends on the API being reachable.
 */
export class AnthropicProvider implements AIProvider {
  readonly id = "anthropic";
  private fallback = new FallbackAIProvider();

  constructor(
    private apiKey: string,
    private model: string,
  ) {}

  private async message(system: string, user: string, maxTokens: number, timeoutMs: number): Promise<string> {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: this.model,
        max_tokens: maxTokens,
        system,
        messages: [{ role: "user", content: user }],
      }),
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (!response.ok) throw new Error(`Anthropic HTTP ${response.status}`);
    const data = (await response.json()) as { content?: Array<{ type: string; text?: string }> };
    const text = data.content?.find((b) => b.type === "text")?.text;
    if (!text) throw new Error("Empty AI response");
    return text;
  }

  async extractBrief(input: BriefExtractionInput): Promise<BriefExtractionOutput> {
    try {
      const text = await this.message(
        SYSTEM_PROMPT,
        JSON.stringify({ message: input.message, currentBrief: input.currentBrief }),
        1000,
        10_000,
      );
      const parsed = patchSchema.parse(JSON.parse(firstJsonObject(text)));
      // Merge with deterministic extraction so obvious fields are never lost,
      // and comparison/out-of-scope detection keeps working.
      const deterministic = await this.fallback.extractBrief(input);
      return {
        briefPatch: { ...deterministic.briefPatch, ...parsed.briefPatch },
        detectedIntent:
          deterministic.detectedIntent === "compare-destinations" || deterministic.detectedIntent === "out-of-scope"
            ? deterministic.detectedIntent
            : parsed.detectedIntent,
        mentionedSlugs: deterministic.mentionedSlugs,
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

  /** Same strict grounding contract as the OpenAI polish. */
  async polishReply(facts: ReplyFacts): Promise<string> {
    try {
      const text = (
        await this.message(
          "You are Klar Concierge, a warm, concise holiday-planning assistant. Rewrite the given reply naturally in 1-3 short sentences (keep any question at the end). STRICT RULES: use ONLY the facts provided; never add destinations, prices, availability, bookings or visa claims; never remove the question; no emojis; no marketing fluff. Reply with the rewritten text only.",
          JSON.stringify(facts),
          300,
          8_000,
        )
      ).trim();
      if (!text || text.length < 10 || text.length > 600) throw new Error("bad polish");
      return text;
    } catch {
      return facts.deterministicReply;
    }
  }
}
