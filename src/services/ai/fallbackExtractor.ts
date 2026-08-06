import type { BudgetBand, Pace, TravelBrief, TravelScope, TravellerType } from "@/types/brief";
import { getAllDestinations } from "@/repositories/knowledge";
import type {
  AIProvider,
  BriefExtractionInput,
  BriefExtractionOutput,
  DetectedIntent,
  FollowUpInput,
} from "./types";

const MONTHS: Record<string, number> = {
  january: 1, jan: 1, february: 2, feb: 2, march: 3, mar: 3, april: 4, apr: 4,
  may: 5, june: 6, jun: 6, july: 7, jul: 7, august: 8, aug: 8,
  september: 9, sep: 9, sept: 9, october: 10, oct: 10,
  november: 11, nov: 11, december: 12, dec: 12,
};

const ORIGIN_CITIES = [
  "hyderabad", "mumbai", "delhi", "bengaluru", "bangalore", "chennai", "kolkata",
  "pune", "ahmedabad", "kochi", "cochin", "jaipur", "lucknow", "goa", "chandigarh",
  "visakhapatnam", "vizag", "nagpur", "indore", "coimbatore", "trivandrum", "surat",
];

const CITY_DISPLAY: Record<string, string> = {
  bangalore: "Bengaluru", cochin: "Kochi", vizag: "Visakhapatnam",
};

const INTEREST_KEYWORDS: Record<string, string[]> = {
  beach: ["beach", "beaches", "island", "sea", "seaside", "lagoon"],
  food: ["food", "foodie", "cuisine", "eating", "restaurants", "street food"],
  culture: ["culture", "cultural", "temples", "local life", "traditions", "art"],
  history: ["history", "historic", "heritage", "ruins", "museums", "monuments", "pyramids"],
  city: ["city break", "cities", "skyline", "urban"],
  shopping: ["shopping", "shop", "malls", "markets", "bazaar"],
  adventure: ["adventure", "trek", "trekking", "hiking", "diving", "rafting", "adventurous", "bungee", "bungy"],
  nature: ["nature", "mountains", "waterfalls", "scenery", "landscape", "lakes", "countryside", "fiords", "fjords", "hill station", "hill stations", "himalaya", "himalayas", "backwaters", "valley"],
  relaxation: ["relax", "chill", "unwind", "spa", "wellness", "peaceful", "do nothing"],
  nightlife: ["nightlife", "party", "clubs", "bars"],
  themeparks: ["theme park", "theme parks", "universal", "disneyland", "disney", "amusement", "fun activities", "ferrari world"],
  romance: ["romantic", "romance", "honeymoon", "anniversary"],
  wildlife: ["wildlife", "safari", "animals", "leopard", "elephants", "big five", "whales", "penguins"],
  snow: ["snow", "snowfall", "skiing", "alps", "winter wonderland"],
};

function extractMonth(text: string): number | undefined {
  const lower = text.toLowerCase();
  for (const [name, num] of Object.entries(MONTHS)) {
    if (new RegExp(`\\b${name}\\b`).test(lower)) return num;
  }
  if (/\bthis month\b/.test(lower)) return new Date().getMonth() + 1;
  if (/\bnext month\b/.test(lower)) return ((new Date().getMonth() + 1) % 12) + 1;
  return undefined;
}

const WORD_NUMBERS: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7,
  eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, fourteen: 14, fifteen: 15,
};

function extractDuration(text: string): number | undefined {
  const lower = text.toLowerCase();
  const nightDigit = lower.match(/(\d+)[\s-]*night/);
  if (nightDigit) return parseInt(nightDigit[1], 10);
  const nightWord = lower.match(/\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|fourteen|fifteen)[\s-]*night/);
  if (nightWord) return WORD_NUMBERS[nightWord[1]];
  const dayDigit = lower.match(/(\d+)[\s-]*day/);
  if (dayDigit) return Math.max(1, parseInt(dayDigit[1], 10) - 1);
  const dayWord = lower.match(/\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|fourteen|fifteen)[\s-]*day/);
  if (dayWord) return Math.max(1, WORD_NUMBERS[dayWord[1]] - 1);
  const week = lower.match(/(\d+|a|one|two)[\s-]*week/);
  if (week) {
    const n = week[1] === "a" || week[1] === "one" ? 1 : week[1] === "two" ? 2 : parseInt(week[1], 10);
    if (!Number.isNaN(n)) return n * 7;
  }
  return undefined;
}

function extractChildrenAges(text: string): number[] {
  const lower = text.toLowerCase();
  const ages: number[] = [];
  const grouped = lower.match(/(?:child(?:ren)?|kids?|son|daughter)[^.]*?\b(?:are|aged|age|of|is)\b([^.]*)/);
  if (grouped) {
    const nums = grouped[1].match(/\b(\d{1,2})\b/g);
    if (nums) for (const n of nums) {
      const v = parseInt(n, 10);
      if (v >= 0 && v <= 17) ages.push(v);
    }
  }
  for (const m of lower.matchAll(/\b(\d{1,2})[\s-]*year[\s-]*old/g)) {
    const v = parseInt(m[1], 10);
    if (v >= 0 && v <= 17 && !ages.includes(v)) ages.push(v);
  }
  if (/\btoddler\b/.test(lower) && ages.length === 0) ages.push(2);
  return ages;
}

function extractAdults(text: string): number | undefined {
  const lower = text.toLowerCase();
  const explicit = lower.match(/(\d+)\s*adult/);
  if (explicit) return parseInt(explicit[1], 10);
  if (/family of (four|five|three|4|5|3)/.test(lower)) return 2;
  if (/\b(couple|honeymoon|my wife|my husband|my partner|two of us)\b/.test(lower)) return 2;
  if (/\b(solo|by myself|on my own|travelling alone|traveling alone)\b/.test(lower)) return 1;
  return undefined;
}

function extractSeniors(text: string): number | undefined {
  const lower = text.toLowerCase();
  const explicit = lower.match(/(\d+)\s*senior/);
  if (explicit) return parseInt(explicit[1], 10);
  if (/\b(my parents|our parents)\b/.test(lower)) return 2;
  if (/\b(my mother|my father|my mom|my dad)\b/.test(lower)) return 1;
  if (/\b(senior|elderly|retired)\b/.test(lower)) return 1;
  return undefined;
}

function extractTravellerType(text: string): TravellerType | undefined {
  const lower = text.toLowerCase();
  const hasParents = /\b(my parents|our parents)\b/.test(lower);
  const hasKids = /children|kids|son|daughter|toddler/.test(lower);
  if (hasParents && hasKids) return "multi-generational";
  if (/\bhoneymoon\b/.test(lower)) return "honeymoon";
  if (/\bfamily\b/.test(lower) || hasKids) return "family";
  if (/\b(senior|elderly|retired)\b/.test(lower) || hasParents) return "senior";
  if (/\b(couple|my wife|my husband|my partner|anniversary)\b/.test(lower)) return "couple";
  if (/\b(friends|group of|bachelor|bachelorette)\b/.test(lower)) return "friends";
  if (/\b(solo|by myself|on my own|alone)\b/.test(lower)) return "solo";
  if (/\b(corporate|offsite|team outing|incentive)\b/.test(lower)) return "corporate";
  return undefined;
}

function extractPace(text: string): Pace | undefined {
  const lower = text.toLowerCase();
  if (/\b(relaxed|relaxing|slow|easy|laid[\s-]?back|unhurried|chill)\b/.test(lower)) return "relaxed";
  if (/\b(active|packed|adventurous|action|busy itinerary|see everything)\b/.test(lower)) return "active";
  if (/\b(balanced|mix of|bit of both|moderate)\b/.test(lower)) return "balanced";
  return undefined;
}

function extractBudgetBand(text: string): BudgetBand | undefined {
  const lower = text.toLowerCase();
  if (/\b(luxury|luxurious|5[\s-]?star|five[\s-]?star|no budget)\b/.test(lower)) return "luxury";
  if (/\b(premium|upscale|4[\s-]?star|four[\s-]?star)\b/.test(lower)) return "premium";
  if (/\b(budget|cheap|affordable|value|economical|pocket[\s-]?friendly)\b/.test(lower)) return "value";
  if (/\b(comfortable|mid[\s-]?range|3[\s-]?star|three[\s-]?star|reasonable)\b/.test(lower)) return "comfort";
  return undefined;
}

function extractInterests(text: string): string[] {
  const lower = text.toLowerCase();
  const found: string[] = [];
  for (const [interest, keywords] of Object.entries(INTEREST_KEYWORDS)) {
    if (keywords.some((k) => lower.includes(k))) found.push(interest);
  }
  return found;
}

function extractOriginCity(text: string): string | undefined {
  const lower = text.toLowerCase();
  // Only a "from <city>" phrasing marks a departure city — a bare mention of
  // Goa or Kochi is a destination wish, not an origin. Bare answers to the
  // "which city are you starting from?" question are handled by slot filling.
  for (const city of ORIGIN_CITIES) {
    if (new RegExp(`\\bfrom\\s+${city}\\b`).test(lower)) {
      return CITY_DISPLAY[city] ?? city.charAt(0).toUpperCase() + city.slice(1);
    }
  }
  return undefined;
}

/** "Within India" vs "abroad" — the first fork in any Indian agency's funnel. */
function extractScope(text: string): TravelScope | undefined {
  const lower = text.toLowerCase();
  if (/\b(domestic|within india|inside india|india only|somewhere in india|india trip|india holiday|india tour)\b/.test(lower)) {
    return "domestic";
  }
  if (/\bin india\b/.test(lower) && !/\bfrom india\b/.test(lower)) return "domestic";
  if (/\b(international|abroad|foreign|overseas|outside india|out of india)\b/.test(lower)) {
    return "international";
  }
  return undefined;
}

function extractDietary(text: string): string[] {
  const lower = text.toLowerCase();
  const prefs: string[] = [];
  if (/\b(pure veg|vegetarian|veg only|veg food)\b/.test(lower)) prefs.push("vegetarian");
  if (/\bvegan\b/.test(lower)) prefs.push("vegan");
  if (/\bhalal\b/.test(lower)) prefs.push("halal");
  if (/\bjain\b/.test(lower)) prefs.push("jain");
  return prefs;
}

function extractAccessibility(text: string): string[] {
  const lower = text.toLowerCase();
  const needs: string[] = [];
  if (/\bwheelchair\b/.test(lower)) needs.push("wheelchair access");
  if (/\b(limited mobility|mobility issues|knee problem|can'?t walk much|cannot walk much|walking difficulty|less tiring)\b/.test(lower)) needs.push("limited walking");
  if (/\b(step[\s-]?free|no stairs)\b/.test(lower)) needs.push("step-free access");
  return needs;
}

function extractClimate(text: string): string[] {
  const lower = text.toLowerCase();
  const prefs: string[] = [];
  if (/\b(avoid|hate|no|not too)[\s\w]*humid/.test(lower) || /\bhumidity\b.*\b(avoid|hate)\b/.test(lower)) prefs.push("avoid-humidity");
  if (/\b(avoid|hate|not too)[\s\w]*(hot|heat)\b/.test(lower)) prefs.push("avoid-heat");
  if (/\b(avoid|hate|no)[\s\w]*cold\b/.test(lower) || /\bwarm weather\b/.test(lower)) prefs.push("avoid-cold");
  if (/\b(avoid|hate|no)[\s\w]*rain/.test(lower)) prefs.push("avoid-rain");
  if (/\b(want|love|see)[\s\w]*snow\b/.test(lower)) prefs.push("want-snow");
  return prefs;
}

function extractCrowdTolerance(text: string): "low" | undefined {
  return /\b(avoid|hate|no|away from)[\s\w]*crowd/.test(text.toLowerCase()) ? "low" : undefined;
}

function extractFlightTolerance(text: string): "short" | undefined {
  return /\b(short flight|short-haul|not too far|nearby|close to india|no long flight)\b/.test(text.toLowerCase())
    ? "short"
    : undefined;
}

function knownDestinationMentions(text: string): { mentioned: string[]; excluded: string[] } {
  const lower = ` ${text.toLowerCase()} `;
  const mentioned: string[] = [];
  const excluded: string[] = [];
  const exclusionPatterns = [
    /different (?:from|than) ([^.?!]*)/g,
    /not ([a-z\s,]+?)(?: again| this time)/g,
    /(?:avoid|skip|except|other than|already (?:been|seen|done)) ([^.?!]*)/g,
  ];
  const exclusionZones: string[] = [];
  for (const p of exclusionPatterns) {
    for (const m of lower.matchAll(p)) exclusionZones.push(m[1]);
  }
  for (const d of getAllDestinations()) {
    const name = d.name.toLowerCase();
    const country = d.countryName.toLowerCase();
    const inText = lower.includes(` ${name}`) || lower.includes(`${name} `);
    const inCountry = lower.includes(` ${country}`) || lower.includes(`${country} `);
    if (!inText && !inCountry) continue;
    const inExclusion = exclusionZones.some((z) => z.includes(name) || z.includes(country));
    if (inExclusion) excluded.push(d.slug);
    else mentioned.push(d.slug);
  }
  return { mentioned: Array.from(new Set(mentioned)), excluded: Array.from(new Set(excluded)) };
}

function detectIntent(text: string, patch: Partial<TravelBrief>, mentions: string[]): DetectedIntent {
  const lower = text.toLowerCase();
  if (/\b(price|cost|how much|book|booking|reserve|ticket|flight fare)\b/.test(lower)) {
    return "out-of-scope";
  }
  if (/\bvisa\b/.test(lower) && /\b(guarantee|approved|approval|confirm)\b/.test(lower)) {
    return "out-of-scope";
  }
  if ((/\bor\b/.test(lower) || /\b(vs|versus|compare|better)\b/.test(lower)) && mentions.length >= 2) {
    return "compare-destinations";
  }
  if (mentions.length === 1 && /\bbest (time|month|season|weather)\b|\bwhen (should|to|is)\b/.test(lower)) {
    return "best-time";
  }
  if (
    mentions.length === 1 &&
    /\b(tell me about|what'?s .{0,30}like|how is|is it worth|about)\b|\bis \w[\w\s]* (good|nice|safe|worth)\b|\?/.test(lower) &&
    !patch.durationNights && !patch.travellerType
  ) {
    return "destination-info";
  }
  if (/\b(no idea|not sure|don'?t know|undecided|anywhere|surprise me|you decide|suggest something)\b/.test(lower)) {
    return "undecided";
  }
  if (Object.keys(patch).length > 0) return "plan-holiday";
  return "unknown";
}

/**
 * Deterministic extraction — keeps the planner fully usable when no AI
 * provider is configured or reachable. Never invents destination facts.
 */
export function extractBriefPatch(message: string): Partial<TravelBrief> {
  const patch: Partial<TravelBrief> = {};

  const month = extractMonth(message);
  if (month) patch.travelMonth = month;
  const duration = extractDuration(message);
  if (duration) patch.durationNights = duration;
  const childrenAges = extractChildrenAges(message);
  if (childrenAges.length) patch.childrenAges = childrenAges;
  const adults = extractAdults(message);
  if (adults) patch.adults = adults;
  const seniors = extractSeniors(message);
  if (seniors) patch.seniorTravellers = seniors;
  const travellerType = extractTravellerType(message);
  if (travellerType) patch.travellerType = travellerType;
  const pace = extractPace(message);
  if (pace) patch.pace = pace;
  const budgetBand = extractBudgetBand(message);
  if (budgetBand) patch.budgetBand = budgetBand;
  const interests = extractInterests(message);
  if (interests.length) patch.interests = interests;
  const originCity = extractOriginCity(message);
  if (originCity) {
    patch.originCity = originCity;
    patch.originCountry = "India";
  }
  const scope = extractScope(message);
  if (scope) patch.travelScope = scope;
  const dietary = extractDietary(message);
  if (dietary.length) patch.dietaryPreferences = dietary;
  const accessibility = extractAccessibility(message);
  if (accessibility.length) patch.accessibilityNeeds = accessibility;
  const climate = extractClimate(message);
  if (climate.length) patch.climatePreferences = climate;
  const crowd = extractCrowdTolerance(message);
  if (crowd) patch.crowdTolerance = crowd;
  const flight = extractFlightTolerance(message);
  if (flight) patch.flightTolerance = flight;

  const { mentioned, excluded } = knownDestinationMentions(message);
  if (mentioned.length) patch.destinationPreferences = mentioned;
  if (excluded.length) patch.excludedDestinations = excluded;

  const occasion = /\bhoneymoon\b/i.test(message) ? "honeymoon"
    : /\banniversary\b/i.test(message) ? "anniversary"
      : /\bbirthday\b/i.test(message) ? "birthday" : undefined;
  if (occasion) patch.occasion = occasion;

  return patch;
}

const FOLLOW_UP_QUESTIONS: Record<string, string> = {
  originCity: "Which city will you be starting your journey from?",
  travelMonth: "When are you thinking of travelling — which month works best?",
  durationNights: "How many nights would you like the holiday to be?",
  travellerType: "Who's travelling — is this a family trip, a couple's getaway, or something else?",
  childrenAges: "How old are the children travelling with you?",
  pace: "Do you prefer a relaxed pace, a balanced mix, or a packed, active itinerary?",
  interests: "What do you enjoy most on holiday — beaches, food, culture, adventure, shopping?",
  budgetBand: "Roughly what comfort level suits you best — value, comfortable, premium or luxury?",
};

export class FallbackAIProvider implements AIProvider {
  readonly id = "deterministic-fallback";

  async extractBrief(input: BriefExtractionInput): Promise<BriefExtractionOutput> {
    const briefPatch = extractBriefPatch(input.message);
    const { mentioned } = knownDestinationMentions(input.message);
    const detectedIntent = detectIntent(input.message, briefPatch, mentioned);
    const fieldsFound = Object.keys(briefPatch).length;
    return {
      briefPatch,
      detectedIntent,
      mentionedSlugs: mentioned,
      comparisonSlugs: detectedIntent === "compare-destinations" ? mentioned.slice(0, 3) : [],
      confidence: Math.min(0.9, 0.3 + fieldsFound * 0.1),
    };
  }

  async composeFollowUp(input: FollowUpInput): Promise<string> {
    return FOLLOW_UP_QUESTIONS[input.missingField] ?? "Is there anything else that matters for this holiday?";
  }
}
