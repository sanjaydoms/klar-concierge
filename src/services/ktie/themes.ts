import type { TravelBrief } from "@/types/brief";
import type { DestinationIntelligence } from "@/types/knowledge";
import { getEligibleDestinations } from "@/repositories/knowledge";

/**
 * The discovery layer: holiday themes a traveller picks before (or instead
 * of) typing. Fully data-driven — adding a theme here automatically creates
 * its planner chip, its conversation seeding and its /holidays/<key> landing
 * page. No theme ever invents facts: destination lists come from KTIE
 * interest scores, seasons from month intelligence.
 */
export type HolidayTheme = {
  key: string;
  label: string;
  emoji: string;
  tagline: string;
  /** Landing-page introduction — honest, no prices/availability. */
  intro: string;
  /** Preferences the theme implies — merged into the brief on selection. */
  briefPatch: Partial<TravelBrief>;
  /** The tailored first question the assistant asks for this theme. */
  openingQuestion: string;
  /** KTIE interest keys that rank destinations for this theme. */
  interestKeys: string[];
  /** Optional suitability key that must also be strong. */
  suitabilityKey?: keyof DestinationIntelligence["suitability"];
  /** Cruise-style themes Klar's experts arrange directly. */
  expertLed?: boolean;
  faq: Array<{ q: string; a: string }>;
};

export const THEMES: HolidayTheme[] = [
  {
    key: "romance",
    label: "Romance",
    emoji: "💞",
    tagline: "Honeymoons, anniversaries and trips that feel like an occasion.",
    intro:
      "Sunset dinners, private pools, lantern-lit old towns — romantic holidays work when the destination does the wooing for you. These are the places Klar's intelligence rates highest for couples, each with honest notes on when to go and what to weigh.",
    briefPatch: { interests: ["romance"], occasion: "romance" },
    openingQuestion:
      "Lovely. Is this a honeymoon, an anniversary, or simply time together — and which month are you thinking of?",
    interestKeys: ["romance"],
    suitabilityKey: "honeymoon",
    faq: [
      { q: "When should we book a honeymoon?", a: "Once your wedding date is fixed — the best romantic stays fill earliest in peak season. Your Klar expert confirms live availability; this planner helps you choose the destination first." },
      { q: "Which is better for privacy — islands or cities?", a: "Islands (Maldives, Seychelles, Andamans) build privacy into the design; cities romance you with evenings instead. Tell the planner which mood fits and it will call it honestly." },
      { q: "Do you handle proposals and celebrations?", a: "Klar's human experts arrange the special touches after handover — the planner's job is finding the place worth proposing in." },
    ],
  },
  {
    key: "family",
    label: "Family",
    emoji: "👨‍👩‍👧‍👦",
    tagline: "Holidays where every generation actually enjoys themselves.",
    intro:
      "The best family holidays balance wow-moments for children with sane logistics for parents. These destinations score highest on Klar's family metrics — child-friendly attractions, manageable transfers and food everyone will eat.",
    briefPatch: { travellerType: "family" },
    openingQuestion:
      "Wonderful — how old are the children travelling, and which month works for the family?",
    interestKeys: ["themeparks", "beach", "nature"],
    suitabilityKey: "family",
    faq: [
      { q: "What ages does the planner handle?", a: "All of them — tell it the exact ages and it adjusts pacing, attraction choices and even which destinations get excluded as too demanding." },
      { q: "Are these itineraries realistic with young children?", a: "Yes — days are capped, nap-friendly, and every attraction carries child notes. The honest ones say 'skip this with toddlers'." },
      { q: "Can grandparents join?", a: "Absolutely — say so, and the planner weighs walking intensity and medical access as first-class factors." },
    ],
  },
  {
    key: "luxury",
    label: "Luxury",
    emoji: "✨",
    tagline: "Where premium is the standard, not the upgrade.",
    intro:
      "Luxury travel is less about thread counts and more about places where excellence is effortless. These destinations carry genuine top-end depth — and Klar's notes tell you when money buys magic versus when it merely buys more.",
    briefPatch: { budgetBand: "luxury" },
    openingQuestion:
      "Excellent. Who's travelling, and is this about resort seclusion, city glamour, or once-in-a-lifetime scenery?",
    interestKeys: ["romance", "relaxation", "city"],
    faq: [
      { q: "Does the planner show prices?", a: "No — deliberately. Rates change daily, so your Klar expert quotes live options after you've chosen the direction. The planner tells you honestly which destinations deliver at luxury level." },
      { q: "Which destinations are truly luxury-grade?", a: "The list below is filtered for genuine top-end depth — places like the Maldives, Dubai and Switzerland where the premium tier is world-class, not a label." },
      { q: "Can luxury work with children?", a: "Very well in the right places — say who's travelling and the planner balances indulgence with family practicality." },
    ],
  },
  {
    key: "adventure",
    label: "Adventure",
    emoji: "🧗",
    tagline: "Treks, dives, passes and stories you'll tell for years.",
    intro:
      "Adventure means different pulses — Himalayan passes, reef dives, canyon jeeps, paragliding valleys. These destinations rate highest for genuine adventure depth, with honest notes on fitness, altitude and season windows.",
    briefPatch: { interests: ["adventure"], pace: "active" },
    openingQuestion:
      "Great — what kind of adventure calls you: mountains and treks, water and diving, or desert and wildlife? And who's coming along?",
    interestKeys: ["adventure"],
    faq: [
      { q: "How fit do I need to be?", a: "Every adventure destination and attraction carries a physical-intensity rating, and hard limits (like Ladakh's altitude) are stated plainly — the planner excludes what genuinely won't fit." },
      { q: "Is it safe?", a: "The planner recommends only licensed-operator experiences and flags the real risks (altitude, seasons, road conditions). Your Klar expert vets the operators at booking." },
      { q: "Best months for adventure travel?", a: "Each destination page below shows its true season windows — monsoon and winter closures included, never glossed over." },
    ],
  },
  {
    key: "beach",
    label: "Beach",
    emoji: "🏖️",
    tagline: "Warm water, slow mornings, nowhere to be.",
    intro:
      "From India's own Andamans to the Maldives' lagoons, these are the beach destinations Klar rates highest — with the honest seasonal truth about monsoons, seaweed and crowds that brochures skip.",
    briefPatch: { interests: ["beach", "relaxation"] },
    openingQuestion:
      "Perfect. Which month are you dreaming of — and is this a couples' escape, a family trip, or friends together?",
    interestKeys: ["beach"],
    faq: [
      { q: "Which beach destination has the best weather in my month?", a: "Pick a month in the planner and it ranks every beach destination by measured seasonal data — monsoon months are marked honestly, not hidden." },
      { q: "Domestic or international beaches?", a: "Both are covered — say 'within India' for Goa and the Andamans, or go international from Langkawi to Mauritius." },
      { q: "Are these good for non-swimmers?", a: "Many are — lagoon destinations and calm-bay beaches are flagged, and your itinerary adapts if you tell the planner." },
    ],
  },
  {
    key: "nature",
    label: "Nature",
    emoji: "🏔️",
    tagline: "Fjords, tea hills, lakes and landscapes that reset you.",
    intro:
      "For travellers whose ideal photo has no buildings in it: these destinations score highest for raw natural beauty — Himalayan valleys, alpine lakes, rainforests and fjords — with real season windows for each.",
    briefPatch: { interests: ["nature"] },
    openingQuestion:
      "Beautiful choice. Mountains, lakes, forests or all of it — and roughly when would you like to travel?",
    interestKeys: ["nature"],
    faq: [
      { q: "When is nature at its best?", a: "It depends entirely on the destination — autumn colours, spring blooms and post-monsoon clarity all have narrow windows. The season tables below are built from measured climate data." },
      { q: "Can nature trips be comfortable?", a: "Yes — from drive-up viewpoints in Switzerland to houseboats in Kerala. Tell the planner your walking comfort and it plans accordingly." },
      { q: "What about photography trips?", a: "The month-by-month intelligence flags the clearest-visibility windows — the difference between seeing Kanchenjunga and seeing cloud." },
    ],
  },
  {
    key: "wellness",
    label: "Wellness",
    emoji: "🧘",
    tagline: "Ayurveda, spas, yoga and coming home lighter.",
    intro:
      "Real wellness travel needs the right setting and genuine traditions — not just a hotel spa menu. These destinations offer authentic depth, from Kerala's Ayurveda heritage to Bali's retreat culture and Europe's thermal towns.",
    briefPatch: { interests: ["relaxation"], pace: "relaxed" },
    openingQuestion:
      "A wise choice. Is this about a full programme (like Ayurveda or a retreat), or simply a deeply restful holiday — and for how many nights?",
    interestKeys: ["relaxation"],
    faq: [
      { q: "How long should a wellness trip be?", a: "Genuine Ayurveda programmes want 7+ nights; a restorative break works from 4. The planner shapes the itinerary around your answer honestly." },
      { q: "Are the retreats vetted?", a: "The planner recommends destinations with authentic wellness depth; your Klar expert selects certified centres and programmes at booking." },
      { q: "Can I mix wellness with sightseeing?", a: "Easily — say so and your days balance treatments with gentle exploring." },
    ],
  },
  {
    key: "cruises",
    label: "Cruises",
    emoji: "🚢",
    tagline: "Unpack once, wake somewhere new.",
    intro:
      "Cruise holidays — from Singapore sailings to the Mediterranean — are arranged directly by Klar's cruise specialists, because ships, cabins and itineraries change constantly. What the planner does brilliantly: help you choose the region and the land-stay around your sailing.",
    briefPatch: { interests: ["beach", "relaxation"], decisionPriorities: ["cruise"] },
    openingQuestion:
      "Noted — a cruise is on the cards, and a Klar cruise specialist will handle the sailing itself. Meanwhile, which region tempts you for the trip around it — Southeast Asia, the Gulf, or the Mediterranean?",
    interestKeys: ["beach", "city"],
    expertLed: true,
    faq: [
      { q: "Can I book a cruise through this planner?", a: "Not directly — cruise inventory changes daily, so Klar's cruise specialists arrange sailings personally. The planner records your interest and plans the destinations around your cruise." },
      { q: "Which regions do Indians cruise most?", a: "Singapore–Malaysia sailings, the Arabian Gulf from Dubai, and the Mediterranean are the favourites — each pairs beautifully with a land stay the planner can shape." },
      { q: "Is a cruise good for families?", a: "Often excellent — ships are floating resorts. Tell your Klar expert the children's ages and they'll match the right ship and season." },
    ],
  },
  {
    key: "snow",
    label: "Snow",
    emoji: "❄️",
    tagline: "First snowfalls, ski runs and white-mountain mornings.",
    intro:
      "Whether it's a first-ever snowfall in Gulmarg or the Alps in full winter dress, snow holidays are about timing — these destinations and their honest snow windows, from Klar's measured season data.",
    briefPatch: { interests: ["snow"], climatePreferences: ["want-snow"] },
    openingQuestion:
      "Magical. Is this about seeing and playing in snow, or proper skiing — and who's travelling?",
    interestKeys: ["snow"],
    faq: [
      { q: "When is snow guaranteed?", a: "Nothing in weather is guaranteed — but the month tables below show when snow is reliable in each destination, from Himachal's December–February to the Alps' longer season." },
      { q: "Can beginners ski?", a: "Yes — Gulmarg, Solang and several Alpine resorts have gentle beginner setups with instructors. The planner flags which suit first-timers." },
      { q: "Is snow travel okay with young children?", a: "Delightful in small doses — the planner keeps snow days short and warm-up options close for little ones." },
    ],
  },
  {
    key: "food",
    label: "Food",
    emoji: "🍜",
    tagline: "Destinations where eating is the itinerary.",
    intro:
      "Some places feed you; a few change how you eat forever. These are Klar's highest-rated food destinations — street stalls to fine dining — with honest vegetarian and Indian-food practicality scores for each.",
    briefPatch: { interests: ["food"] },
    openingQuestion:
      "A traveller after our own heart. Street food and markets, or fine dining — and any dietary preferences I should plan around?",
    interestKeys: ["food"],
    faq: [
      { q: "I'm vegetarian — where will I eat well?", a: "Every destination carries a vegetarian-ease score built for Indian travellers. Tell the planner and it weighs this seriously, not as an afterthought." },
      { q: "Are food tours included?", a: "Itineraries feature the food experiences worth planning around; your Klar expert books specific tours and tables." },
      { q: "Which destination has the best street food?", a: "The rankings below come from Klar's scored data — Bangkok, Hong Kong and India's own cities lead, each for different reasons." },
    ],
  },
  {
    key: "culture",
    label: "Culture",
    emoji: "🏛️",
    tagline: "Temples, palaces, old towns and living traditions.",
    intro:
      "For travellers who measure a trip in stories: destinations where history and living culture run deepest — Kyoto's temples, Rajasthan's forts, the Silk Road's domes — with the season windows that make walking them a joy.",
    briefPatch: { interests: ["culture", "history"] },
    openingQuestion:
      "Wonderful. Ancient history, living traditions, or grand architecture — and which month suits you?",
    interestKeys: ["culture", "history"],
    faq: [
      { q: "How much walking do culture trips involve?", a: "Usually plenty — but every attraction carries intensity notes, and the planner builds gentler days if you ask. Seniors' comfort is a first-class factor." },
      { q: "Guided or independent?", a: "The itinerary works either way; your Klar expert adds licensed guides where they transform the experience." },
      { q: "Best-value culture destinations?", a: "Uzbekistan, Hungary and India's own circuits deliver world-class depth at gentle prices — the honest rankings are below." },
    ],
  },
  {
    key: "wildlife",
    label: "Wildlife",
    emoji: "🦁",
    tagline: "Safaris, sanctuaries and eyes meeting across the wild.",
    intro:
      "From Kenya's great herds to Kerala's elephants and Sri Lanka's leopards — wildlife travel is about right place, right season. These destinations rate highest for genuine wildlife depth, with honest sighting-season windows.",
    briefPatch: { interests: ["wildlife", "nature"] },
    openingQuestion:
      "Thrilling. Big-cat safaris, elephants and forests, or marine life — and when can you travel?",
    interestKeys: ["wildlife"],
    faq: [
      { q: "Are sightings guaranteed?", a: "Never — and anyone who promises otherwise is selling something. The planner shows honest season windows when odds are highest." },
      { q: "Is safari suitable for children?", a: "From around age 6 it can be magical — long drives are the constraint. The planner adjusts pacing and flags age limits per experience." },
      { q: "Domestic or international wildlife?", a: "Both — Kerala's sanctuaries and India's parks for shorter trips; Kenya and South Africa for the epic version." },
    ],
  },
];

export function getTheme(key: string): HolidayTheme | undefined {
  return THEMES.find((t) => t.key === key);
}

/** Top destinations for a theme, ranked from KTIE scores — never invented. */
export function topDestinationsForTheme(theme: HolidayTheme, count = 6): DestinationIntelligence[] {
  const score = (d: DestinationIntelligence) => {
    const interest =
      theme.interestKeys.reduce((sum, k) => sum + (d.interests[k] ?? 0), 0) / theme.interestKeys.length;
    const suitability = theme.suitabilityKey ? d.suitability[theme.suitabilityKey] : interest;
    const budgetFit =
      theme.briefPatch.budgetBand && theme.briefPatch.budgetBand !== "unknown"
        ? d.budgetBands.includes(theme.briefPatch.budgetBand) ? 100 : 40
        : 100;
    return interest * 0.6 + suitability * 0.3 + budgetFit * 0.1;
  };
  return [...getEligibleDestinations()].sort((a, b) => score(b) - score(a)).slice(0, count);
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Months when the theme's top destinations collectively peak. */
export function bestMonthsForTheme(theme: HolidayTheme): string[] {
  const top = topDestinationsForTheme(theme, 4);
  const byMonth = Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    avg:
      top.reduce(
        (sum, d) => sum + (d.monthlyIntelligence.find((m) => m.month === i + 1)?.seasonScore ?? 0),
        0,
      ) / top.length,
  }));
  return byMonth
    .sort((a, b) => b.avg - a.avg)
    .slice(0, 3)
    .map((m) => MONTH_NAMES[m.month - 1]);
}
