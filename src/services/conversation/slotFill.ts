import type { BriefField, BudgetBand, Pace, TravelBrief } from "@/types/brief";

const WORD_NUMBERS: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7,
  eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13,
  fourteen: 14, fifteen: 15, twenty: 20,
};

const MONTHS: Record<string, number> = {
  january: 1, jan: 1, february: 2, feb: 2, march: 3, mar: 3, april: 4, apr: 4,
  may: 5, june: 6, jun: 6, july: 7, jul: 7, august: 8, aug: 8,
  september: 9, sep: 9, sept: 9, october: 10, oct: 10,
  november: 11, nov: 11, december: 12, dec: 12,
};

export const MAX_PLANNABLE_NIGHTS = 45;

/**
 * True when a message carries nothing the planner can work with — emoji-only,
 * punctuation-only or empty input. These must never be acknowledged as
 * understood; the honest move is to say so and re-ask.
 */
export function isUnreadableMessage(message: string): boolean {
  return !/[\p{L}\p{N}]/u.test(message);
}

function bareNumber(message: string): number | undefined {
  // Accept "9", "9 ❤️", "nine", "maybe 9" — a single usable number in an
  // otherwise short answer. Longer sentences are left to the full extractor.
  const cleaned = message.toLowerCase().trim();
  if (cleaned.split(/\s+/).length > 4) return undefined;
  const digits = cleaned.match(/\d{1,3}/g);
  if (digits && digits.length === 1) return parseInt(digits[0], 10);
  if (digits && digits.length > 1) return undefined;
  for (const [word, value] of Object.entries(WORD_NUMBERS)) {
    if (new RegExp(`\\b${word}\\b`).test(cleaned)) return value;
  }
  return undefined;
}

export type SlotFillResult =
  | { kind: "filled"; patch: Partial<TravelBrief> }
  | { kind: "invalid"; reply: string }
  | { kind: "no-answer" };

/**
 * Interpret a short reply as the answer to the question the assistant just
 * asked. This is what lets "9" answer "How many nights?" — and what lets the
 * engine say, honestly, when an answer cannot be used ("❤️" is not a number
 * of nights). Returns "no-answer" when the message doesn't look like a direct
 * answer, so normal extraction takes over.
 */
export function parseAwaitedAnswer(message: string, field: BriefField): SlotFillResult {
  const lower = message.toLowerCase().trim();

  switch (field) {
    case "durationNights": {
      const n = bareNumber(message);
      if (n === undefined) return { kind: "no-answer" };
      if (n < 1) {
        return { kind: "invalid", reply: "A holiday needs at least one night — how many nights would you like?" };
      }
      if (n > MAX_PLANNABLE_NIGHTS) {
        return {
          kind: "invalid",
          reply: `I plan holidays up to ${MAX_PLANNABLE_NIGHTS} nights — for something longer, a Klar expert should shape it directly. How many nights within that would you like?`,
        };
      }
      return { kind: "filled", patch: { durationNights: n } };
    }
    case "travelMonth": {
      for (const [name, num] of Object.entries(MONTHS)) {
        if (new RegExp(`\\b${name}\\b`).test(lower)) return { kind: "filled", patch: { travelMonth: num } };
      }
      const n = bareNumber(message);
      if (n === undefined) return { kind: "no-answer" };
      if (n < 1 || n > 12) {
        return { kind: "invalid", reply: "I need a month for that one — for example March, or a number from 1 to 12. When would you like to travel?" };
      }
      return { kind: "filled", patch: { travelMonth: n } };
    }
    case "childrenAges": {
      if (lower.split(/\s+/).length > 6) return { kind: "no-answer" };
      const nums = (lower.match(/\d{1,2}/g) ?? []).map((d) => parseInt(d, 10));
      const ages = nums.filter((v) => v >= 0 && v <= 17);
      if (ages.length === 0) return { kind: "no-answer" };
      if (ages.length !== nums.length) {
        return { kind: "invalid", reply: "Those don't all look like children's ages (0–17). Could you share the children's ages again?" };
      }
      return { kind: "filled", patch: { childrenAges: ages } };
    }
    case "originCity": {
      // The traveller's own departure city — accept it verbatim when it looks
      // like a place name (1–3 words, letters only, not a refusal). Words that
      // answer a *different* question must never become a city called
      // "Relaxed Pace".
      if (/\b(no idea|not sure|don'?t know|anywhere)\b/.test(lower)) return { kind: "no-answer" };
      if (
        /\b(relax\w*|balanced?|active|packed|slow|easy|pace|luxury|premium|comfort\w*|value|budget|cheap|couple|family|honeymoon|friends?|solo|parents|senior\w*|nights?|days?|weeks?|beach\w*|mountain\w*|culture|food|wildlife|shopping|nature|adventure)\b/.test(lower)
      ) {
        return { kind: "no-answer" };
      }
      const stripped = message.trim().replace(/^from\s+/i, "");
      const words = stripped.split(/\s+/);
      if (words.length > 3 || !/^[\p{L}][\p{L}\s.'-]*$/u.test(stripped)) return { kind: "no-answer" };
      const city = words
        .map((w) => (w.length > 1 ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w.toUpperCase()))
        .join(" ");
      return { kind: "filled", patch: { originCity: city, originCountry: "India" } };
    }
    case "budgetBand": {
      const band: BudgetBand | undefined =
        /\b(luxury|5[\s-]?star)\b/.test(lower) ? "luxury"
          : /\b(premium|4[\s-]?star|upscale)\b/.test(lower) ? "premium"
            : /\b(value|budget|cheap|affordable|economical)\b/.test(lower) ? "value"
              : /\b(comfort|comfortable|mid|middle|3[\s-]?star|reasonable|normal|standard)\b/.test(lower) ? "comfort"
                : undefined;
      return band ? { kind: "filled", patch: { budgetBand: band } } : { kind: "no-answer" };
    }
    case "pace": {
      const pace: Pace | undefined =
        /\b(relax\w*|slow|easy|chill\w*|laid[\s-]?back|unhurried)\b/.test(lower) ? "relaxed"
          : /\b(active|packed|busy|fast|adventurous|everything)\b/.test(lower) ? "active"
            : /\b(balanced?|mix|both|moderate|medium)\b/.test(lower) ? "balanced"
              : undefined;
      return pace ? { kind: "filled", patch: { pace } } : { kind: "no-answer" };
    }
    case "travellerType": {
      // "A couple's getaway", "family with children", "with my parents" —
      // direct answers to "who's travelling?".
      if (/\bhoneymoon\b/.test(lower)) {
        return { kind: "filled", patch: { travellerType: "honeymoon", adults: 2 } };
      }
      if (/\b(my parents|our parents)\b/.test(lower)) {
        return { kind: "filled", patch: { travellerType: "senior", seniorTravellers: 2 } };
      }
      if (/\b(family|children|kids|son|daughter|toddler)\b/.test(lower)) {
        return { kind: "filled", patch: { travellerType: "family" } };
      }
      if (/\b(senior|elderly|retired)\b/.test(lower)) {
        return { kind: "filled", patch: { travellerType: "senior", seniorTravellers: 1 } };
      }
      if (/\b(couple|wife|husband|partner|two of us|anniversary)\b/.test(lower)) {
        return { kind: "filled", patch: { travellerType: "couple", adults: 2 } };
      }
      if (/\b(friends?|group|bachelor|bachelorette)\b/.test(lower)) {
        return { kind: "filled", patch: { travellerType: "friends" } };
      }
      if (/\b(solo|myself|my own|alone|just me)\b/.test(lower)) {
        return { kind: "filled", patch: { travellerType: "solo", adults: 1 } };
      }
      return { kind: "no-answer" };
    }
    default:
      return { kind: "no-answer" };
  }
}
