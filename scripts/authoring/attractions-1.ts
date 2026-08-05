import type { AttractionIntelligence } from "../../src/types/knowledge";
import { attractions } from "./builders";

export const ATTRACTIONS_1: AttractionIntelligence[] = [
  ...attractions("singapore", [
    { name: "Gardens by the Bay", category: "nature", summary: "Futuristic Supertree Grove and cooled conservatories; the evening light show is free.", indoorOutdoor: "mixed", weatherSensitivity: "medium", bestTimeOfDay: "late afternoon into the 7:45pm light show", accessibilityNotes: ["Step-free routes and wheelchair hire available"], childNotes: ["Cloud Forest mist walk delights younger children"] },
    { name: "Universal Studios Singapore", category: "theme-park", summary: "Compact movie theme park on Sentosa with rides across every age band.", childNotes: ["Height restrictions on major coasters — check before promising rides"], seniorNotes: ["Shaded rest areas throughout"] },
    { name: "Singapore Zoo & River Wonders", category: "nature", summary: "Open-concept rainforest zoo consistently rated among the world's best.", idealFor: ["family", "children", "wildlife"], childNotes: ["Kidzworld water play area — bring a change of clothes"] },
    { name: "Hawker centre food trail", category: "food", summary: "Michelin-listed street food across Chinatown, Little India and Lau Pa Sat.", idealFor: ["food", "family", "solo"], practicalNotes: ["Cash or local cards preferred at older stalls"] },
    { name: "Sentosa Island beaches & cable car", category: "beach", summary: "Man-made beach playground with luges, aquariums and the harbour cable car.", childNotes: ["Skyline Luge is a reliable hit for ages 6+"] },
    { name: "Marina Bay & Merlion waterfront walk", category: "landmark", summary: "The classic skyline loop past the Merlion, Esplanade and Marina Bay Sands.", physicalIntensity: "low", bestTimeOfDay: "sunset", accessibilityNotes: ["Fully step-free waterfront promenade"] },
  ]),

  ...attractions("dubai", [
    { name: "Burj Khalifa At the Top", category: "landmark", summary: "Observation decks on the world's tallest building; sunset slots sell out first.", indoorOutdoor: "indoor", weatherSensitivity: "low", practicalNotes: ["Book timed tickets ahead; sunset premium is worth it"] },
    { name: "Desert safari with Bedouin camp", category: "adventure", summary: "Dune drive, camel rides and dinner under the stars outside the city.", unsuitableFor: ["pregnant travellers", "severe back problems"], childNotes: ["Gentler 'no dune-bashing' family variants exist"], seniorNotes: ["Request the calmer drive option"] },
    { name: "Dubai Mall, Fountain & Aquarium", category: "shopping", summary: "The world's most-visited mall with the fountain show and a walk-through aquarium.", indoorOutdoor: "indoor", accessibilityNotes: ["Fully accessible; wheelchairs available"] },
    { name: "Old Dubai: Creek, souks & Al Fahidi", category: "culture", summary: "Abra boat across the Creek to gold and spice souks and the old quarter.", bestTimeOfDay: "late afternoon", seniorNotes: ["Abra boarding requires a confident step — helpers assist"] },
    { name: "Palm Jumeirah & The View", category: "landmark", summary: "The palm-shaped island, its beach clubs and the 52nd-floor viewing deck.", weatherSensitivity: "low" },
    { name: "Global Village (seasonal)", category: "experience", summary: "Open-air festival park of world pavilions, food and shows — winter months only.", indoorOutdoor: "outdoor", practicalNotes: ["Open roughly October–April; verify dates"] },
  ]),

  ...attractions("abu-dhabi", [
    { name: "Sheikh Zayed Grand Mosque", category: "religious", summary: "One of the world's most beautiful mosques — 82 white domes and vast marble courtyards.", bestTimeOfDay: "late afternoon into sunset", practicalNotes: ["Strict dress code; free abaya loan available", "Book free entry slots online"], accessibilityNotes: ["Wheelchair-accessible routes throughout"] },
    { name: "Louvre Abu Dhabi", category: "museum", summary: "Jean Nouvel's floating dome sheltering art spanning all civilisations.", seniorNotes: ["Plenty of seating; easily a half-day at gentle pace"] },
    { name: "Ferrari World & Yas Island", category: "theme-park", summary: "Indoor Ferrari park with the world's fastest coaster, next to Warner Bros. World.", minimumAge: 0, childNotes: ["Formula Rossa requires 130cm+; junior zone covers younger kids"] },
    { name: "Qasr Al Watan palace", category: "culture", summary: "The working presidential palace's staggering great hall, open to visitors.", indoorOutdoor: "indoor" },
    { name: "Corniche beach & waterfront", category: "beach", summary: "Eight kilometres of groomed public beachfront with family zones.", childNotes: ["Lifeguarded family sections with calm water"] },
    { name: "Mangrove kayaking", category: "adventure", summary: "Paddle the city's protected mangrove channels at high tide.", physicalIntensity: "medium", minimumAge: 6 },
  ]),

  ...attractions("bali", [
    { name: "Ubud rice terraces & jungle swings", category: "nature", summary: "Tegallalang's sculpted terraces with photo swings and gentle valley walks.", bestTimeOfDay: "early morning before tour buses" },
    { name: "Uluwatu Temple & Kecak dance", category: "religious", summary: "Clifftop temple with sunset fire-dance performances above the surf.", practicalNotes: ["Guard belongings from monkeys"], seniorNotes: ["Some uneven clifftop paths"] },
    { name: "Nusa Penida day trip", category: "adventure", summary: "Kelingking's T-rex cliff and Crystal Bay by fast boat.", physicalIntensity: "high", unsuitableFor: ["limited mobility", "toddlers"], practicalNotes: ["Rough seas cancel boats — keep the day flexible"] },
    { name: "Balinese spa & wellness day", category: "wellness", summary: "Flower baths, massage and jungle-view relaxation — Bali's signature indulgence.", idealFor: ["couple", "relaxation", "honeymoon"] },
    { name: "Tanah Lot sunset", category: "landmark", summary: "The island's iconic sea temple silhouetted at golden hour.", bestTimeOfDay: "sunset", weatherSensitivity: "medium" },
    { name: "Jimbaran seafood beach dinner", category: "food", summary: "Grilled seafood at candlelit tables on the sand.", idealFor: ["couple", "family", "food"] },
  ]),

  ...attractions("bangkok", [
    { name: "Grand Palace & Wat Phra Kaew", category: "culture", summary: "Thailand's dazzling royal complex and the Emerald Buddha.", bestTimeOfDay: "opening time, before heat and crowds", practicalNotes: ["Strict dress code enforced — cover shoulders and knees"], seniorNotes: ["Extensive walking on hot stone — hats and water essential"] },
    { name: "Wat Arun & river ferries", category: "religious", summary: "The porcelain-encrusted Temple of Dawn, best crossed to by public ferry.", bestTimeOfDay: "late afternoon for sunset from across the river" },
    { name: "Chatuchak Weekend Market", category: "shopping", summary: "15,000 stalls of everything imaginable — Saturdays and Sundays only.", indoorOutdoor: "mixed", practicalNotes: ["Weekends only; go early to beat the heat"] },
    { name: "Street-food night tour", category: "food", summary: "Guided tastings through Chinatown's legendary Yaowarat lanes.", bestTimeOfDay: "evening", idealFor: ["food", "friends", "couple"] },
    { name: "Chao Phraya dinner cruise", category: "experience", summary: "Temples and bridges lit up from the river over dinner.", seniorNotes: ["Easy boarding at central piers with assistance"] },
    { name: "ICONSIAM & Mahanakhon SkyWalk", category: "landmark", summary: "Riverside mega-mall paired with a glass-floored skyscraper deck.", indoorOutdoor: "mixed" },
  ]),

  ...attractions("phuket", [
    { name: "Phi Phi Islands speedboat day", category: "adventure", summary: "Maya Bay, lagoons and snorkelling stops around the famous karst islands.", practicalNotes: ["Choose morning departures for calmer seas"], unsuitableFor: ["easily seasick travellers on rough days"] },
    { name: "Phang Nga Bay & James Bond Island", category: "nature", summary: "Sea-canoe through caves beneath limestone towers in the emerald bay.", physicalIntensity: "medium" },
    { name: "Patong, Kata & Karon beaches", category: "beach", summary: "The west coast's classic trio — lively, family and relaxed in that order.", childNotes: ["Kata's gentle slope suits younger swimmers in high season"] },
    { name: "Old Phuket Town walking streets", category: "culture", summary: "Sino-Portuguese shophouses, murals and Sunday walking-street market.", bestTimeOfDay: "late afternoon" },
    { name: "Big Buddha viewpoint", category: "landmark", summary: "45-metre marble Buddha with 360° island views.", seniorNotes: ["Drive to the top; short walk from the car park"] },
    { name: "Elephant sanctuary (ethical)", category: "experience", summary: "Observe rescued elephants feeding and bathing — no riding.", idealFor: ["family", "children", "wildlife"], childNotes: ["Half-day visits fit young attention spans"] },
  ]),

  ...attractions("krabi", [
    { name: "Railay Beach & viewpoints", category: "beach", summary: "Boat-only peninsula framed by climbing cliffs — Thailand's most dramatic beach.", practicalNotes: ["Longtail boats from Ao Nang; wet landings likely"] },
    { name: "Four Islands longtail tour", category: "adventure", summary: "Phra Nang Cave beach, Chicken Island and the sandbar walk at low tide.", childNotes: ["Calm-season lagoons are toddler-friendly"] },
    { name: "Tiger Cave Temple climb", category: "religious", summary: "1,237 steps to a summit Buddha with jungle panoramas.", physicalIntensity: "high", unsuitableFor: ["limited mobility", "heart conditions"], minimumAge: 8 },
    { name: "Emerald Pool & Hot Springs", category: "nature", summary: "Jungle pools and warm cascades in Khao Phra Bang Khram reserve.", physicalIntensity: "medium" },
    { name: "Ao Nang beachfront", category: "beach", summary: "The main resort strip — sunset dining with karst silhouettes.", seniorNotes: ["Flat promenade, easy access"] },
    { name: "Hong Islands lagoon day", category: "nature", summary: "Enclosed turquoise lagoon and quiet white-sand coves.", weatherSensitivity: "high" },
  ]),

  ...attractions("kuala-lumpur", [
    { name: "Petronas Towers & KLCC Park", category: "landmark", summary: "The twin icons — skybridge visits by timed ticket, fountain shows below.", practicalNotes: ["Book skybridge slots online days ahead"] },
    { name: "Batu Caves", category: "religious", summary: "Rainbow steps beside a golden statue up to Hindu cave temples.", physicalIntensity: "medium", practicalNotes: ["272 steps; monkeys snatch loose items"], seniorNotes: ["Steps are steep — take them slowly with the handrail"] },
    { name: "Jalan Alor food street", category: "food", summary: "The city's famous open-air hawker strip, alive from dusk.", bestTimeOfDay: "evening" },
    { name: "KL Bird Park & Lake Gardens", category: "nature", summary: "Walk-through free-flight aviary in the green heart of the city.", idealFor: ["family", "children", "seniors"] },
    { name: "Merdeka Square & heritage walk", category: "culture", summary: "Colonial-era square, Sultan Abdul Samad Building and river of life views.", bestTimeOfDay: "evening for the illuminated river" },
    { name: "Genting Highlands day trip", category: "theme-park", summary: "Cool hilltop resort with theme parks and the Awana SkyWay cable car.", practicalNotes: ["One hour from the city; pack a light layer"] },
  ]),
];
