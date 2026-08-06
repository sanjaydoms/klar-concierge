import type { AttractionIntelligence } from "../../src/types/knowledge";
import { attractions } from "./builders";

export const ATTRACTIONS_5: AttractionIntelligence[] = [
  ...attractions("uzbekistan", [
    { name: "Registan Square, Samarkand", category: "landmark", summary: "Three tilework madrassas around one plaza — the Silk Road's grandest stage, hypnotic at dusk when the domes light up.", bestTimeOfDay: "late afternoon into evening", seniorNotes: ["Flat plaza, but interior stairs are steep and worn"], practicalNotes: ["Evening light show runs most nights — verify timings locally"] },
    { name: "Shah-i-Zinda Necropolis", category: "culture", summary: "A narrow avenue of mausoleums in the bluest tilework in Central Asia — small, sacred and overwhelming.", unsuitableFor: ["limited mobility"], practicalNotes: ["Steep entry staircase; modest dress expected"] },
    { name: "Bukhara Old City", category: "culture", summary: "A living medieval city: trading domes, the Kalyan minaret and courtyard tea houses, best absorbed slowly on foot.", seniorNotes: ["Distances add up — break the day with tea stops"] },
    { name: "Itchan Kala, Khiva", category: "landmark", summary: "A walled desert city so intact it feels like a film set — sunset from the walls is the Silk Road's best photograph.", practicalNotes: ["Reached by internal flight or long drive — plan it as its own leg"] },
    { name: "Chorsu Bazaar, Tashkent", category: "shopping", summary: "A turquoise-domed food hall piled with bread, spices and dried fruit — Tashkent's daily life in one building.", childNotes: ["Sensory and busy but safe — keep small hands close at sample stalls"] },
    { name: "Afrosiyob High-Speed Train", category: "experience", summary: "Tashkent to Samarkand in about two hours — comfortable, punctual and itself a slice of modern Uzbekistan.", practicalNotes: ["Book seats ahead in spring and autumn — trains sell out"] },
  ]),

  ...attractions("almaty", [
    { name: "Big Almaty Lake", category: "nature", summary: "A turquoise alpine bowl at 2,500m ringed by peaks — an hour from the city and another world entirely.", unsuitableFor: ["anyone unacclimatised to quick altitude gain"], practicalNotes: ["Bring warm layers even in July; swimming is prohibited (drinking-water reservoir)"] },
    { name: "Shymbulak Ski Resort", category: "adventure", summary: "Cable cars from Medeu up to 3,200m — proper ski runs in winter, ridge hikes and views the rest of the year.", childNotes: ["Gentle beginner slopes and equipment hire on site"] },
    { name: "Medeu Ice Rink", category: "experience", summary: "The world's highest-altitude Olympic ice rink, open-air against a mountain wall — winter joy for every age.", practicalNotes: ["Skate hire available; weekends get crowded"] },
    { name: "Charyn Canyon", category: "nature", summary: "A red-rock 'Valley of Castles' three hours east — Kazakhstan's answer to the Grand Canyon at a fraction of the crowds.", unsuitableFor: ["travellers who dislike long drives"], practicalNotes: ["Full-day trip; combine with Kolsai Lakes on an overnight"] },
    { name: "Kok Tobe Hill", category: "landmark", summary: "Cable car above the city to funfair stalls, viewpoints and sunset panoramas of peaks meeting the steppe.", childNotes: ["Small rides and a petting zoo keep young children busy"] },
    { name: "Green Bazaar", category: "food", summary: "Almaty's central market: horse sausage and honey, dried apricots, Korean salads — Central Asia's crossroads on a plate.", practicalNotes: ["Vendors expect gentle haggling; taste before buying dried fruit"] },
  ]),

  ...attractions("armenia", [
    { name: "Geghard Monastery", category: "religious", summary: "Chapels hand-carved into the living cliff, candlelit and echoing with chants — Armenia's most atmospheric sacred site.", practicalNotes: ["Combine with Garni Temple in one half-day from Yerevan"] },
    { name: "Garni Temple", category: "landmark", summary: "A Greco-Roman temple on a gorge edge — the only one of its kind in the former Soviet world, framed by basalt cliffs.", seniorNotes: ["Uneven cobbles around the site; the temple platform has steps"] },
    { name: "Lake Sevan & Sevanavank", category: "nature", summary: "A high-altitude sea in the mountains with a hilltop monastery — summer beaches, whitefish kebabs and cool air.", childNotes: ["Shallow beach areas in summer; water stays brisk"] },
    { name: "Khor Virap Monastery", category: "religious", summary: "The classic Armenia photograph: a monastery in the vineyards with Mount Ararat towering behind the border.", practicalNotes: ["Clearest Ararat views are early morning"] },
    { name: "Cascade Complex, Yerevan", category: "culture", summary: "A giant limestone stairway of gardens and modern art with the whole city — and Ararat — laid out from the top.", seniorNotes: ["Internal escalators cover most of the climb"] },
    { name: "Vernissage Market", category: "shopping", summary: "Weekend open-air market of carpets, carved backgammon boards, silver and Soviet curios — souvenir heaven.", practicalNotes: ["Strongest on weekends; cash preferred"] },
  ]),

  ...attractions("jordan", [
    { name: "Petra", category: "landmark", summary: "Walk the Siq as it cracks open onto the Treasury, then keep going — a carved city of tombs, temples and trails that rewards a full day.", unsuitableFor: ["limited mobility", "anyone unable to walk several kilometres"], childNotes: ["Manageable for school-age kids with breaks; carriers beat strollers"], practicalNotes: ["Start at gate-opening to beat heat and crowds; the Monastery climb adds 800 steps"] },
    { name: "Wadi Rum Desert", category: "adventure", summary: "Jeep tracks between sandstone mountains, tea with Bedouin hosts and a night under desert stars — the trip's emotional peak.", childNotes: ["Kids love the jeeps and dunes; nights get cold"], practicalNotes: ["Overnight in a camp rather than day-tripping — sunset and dawn are the point"] },
    { name: "Dead Sea", category: "wellness", summary: "Float without effort at the lowest point on Earth, then a mineral mud scrub — surreal, restorative, unmissable.", unsuitableFor: ["open cuts (the salt finds them instantly)"], childNotes: ["Keep water away from eyes; short floats work best for kids"], practicalNotes: ["Resorts sell day passes with showers and pools"] },
    { name: "Jerash Roman Ruins", category: "culture", summary: "Colonnaded streets, theatres and plazas of one of the best-preserved Roman cities anywhere — an easy Amman half-day.", seniorNotes: ["Large site with sun exposure — morning visits and a hat"] },
    { name: "Amman Citadel & Downtown", category: "culture", summary: "Temple columns above a hillside capital, then knafeh and falafel in the buzzing downtown souks below.", practicalNotes: ["Pair sunset at the Citadel with dinner on Rainbow Street"] },
    { name: "Aqaba Red Sea Snorkelling", category: "beach", summary: "Coral gardens and warm clear water at Jordan's toe — a soft landing after Petra's dust.", childNotes: ["Calm house reefs suit young snorkellers"] },
  ]),

  ...attractions("zanzibar", [
    { name: "Stone Town", category: "culture", summary: "Carved doors, spice-scented alleys, rooftop sunset bars and layered Swahili-Omani-Indian history — get lost on purpose.", practicalNotes: ["Modest dress respects local custom; lanes are unmapped — wander in daylight first"] },
    { name: "Nungwi & Kendwa Beaches", category: "beach", summary: "The island's swim-all-day north coast: white sand, tide-free turquoise water and dhow-silhouette sunsets.", childNotes: ["Gentle entries and warm water — ideal for young swimmers"] },
    { name: "Spice Farm Tour", category: "experience", summary: "Smell, touch and taste cloves, vanilla and cinnamon where they grow — the island's history explained through your senses.", childNotes: ["Hands-on and genuinely fun for kids"] },
    { name: "Jozani Forest", category: "nature", summary: "Boardwalks through mangroves and red colobus monkeys found nowhere else on Earth, minutes from the beach.", seniorNotes: ["Flat boardwalk trails — one of the island's easiest excursions"] },
    { name: "Mnemba Atoll Snorkelling", category: "adventure", summary: "Zanzibar's clearest water: turtles, reef fish and occasionally dolphins around a private-island atoll.", practicalNotes: ["Morning boats get the calmest sea; wear reef-safe sunscreen"] },
    { name: "Prison Island", category: "experience", summary: "A short dhow hop to giant Aldabra tortoises and a snorkel stop — Stone Town's classic half-day.", childNotes: ["Feeding the century-old tortoises is a guaranteed hit"] },
  ]),
];
