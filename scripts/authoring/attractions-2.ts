import type { AttractionIntelligence } from "../../src/types/knowledge";
import { attractions } from "./builders";

export const ATTRACTIONS_2: AttractionIntelligence[] = [
  ...attractions("langkawi", [
    { name: "SkyCab & SkyBridge", category: "landmark", summary: "Steep cable car to a curved bridge floating above the rainforest canopy.", weatherSensitivity: "high", practicalNotes: ["Go the first clear morning — clouds close the views"] },
    { name: "Island-hopping boat tour", category: "beach", summary: "Pregnant Maiden Lake, eagle watching and Beras Basah sands.", childNotes: ["Short hops suit young children"] },
    { name: "Kilim Karst mangrove cruise", category: "nature", summary: "Limestone river channels, bat caves and fish farms by boat.", seniorNotes: ["Seated boat tour — minimal walking"] },
    { name: "Pantai Cenang beach", category: "beach", summary: "The island's liveliest sunset beach with watersports and dining.", bestTimeOfDay: "sunset" },
    { name: "Duty-free shopping at Kuah", category: "shopping", summary: "Island-wide duty-free pricing on chocolate and more.", indoorOutdoor: "indoor" },
    { name: "Tanjung Rhu quiet coast", category: "beach", summary: "Casuarina-lined white sand on the island's calm northern tip.", idealFor: ["couple", "relaxation", "family"] },
  ]),

  ...attractions("vietnam", [
    { name: "Ha Long Bay overnight cruise", category: "nature", summary: "Sleep among thousands of limestone towers; kayak emerald coves at dawn.", seniorNotes: ["Choose newer boats with lifts and fewer steps"], practicalNotes: ["Fog can mute views Dec–Feb"] },
    { name: "Hoi An lantern old town", category: "culture", summary: "UNESCO trading port glowing with silk lanterns; tailors work overnight.", bestTimeOfDay: "evening", idealFor: ["couple", "culture", "food"] },
    { name: "Hanoi Old Quarter street food walk", category: "food", summary: "Pho, bun cha and egg coffee through 36 ancient guild streets.", physicalIntensity: "medium" },
    { name: "Golden Bridge at Ba Na Hills", category: "landmark", summary: "The giant stone hands holding a mountain walkway above the clouds.", practicalNotes: ["Long cable-car queues on weekends — go on weekdays"] },
    { name: "Ninh Binh river & karst day", category: "nature", summary: "Rowed sampans through caves beneath rice-field karsts — 'Ha Long on land'.", seniorNotes: ["Seated boat ride; gentle unless climbing Mua viewpoint"] },
    { name: "Cu Chi Tunnels", category: "culture", summary: "The war-era tunnel network outside Ho Chi Minh City.", unsuitableFor: ["claustrophobic travellers"], minimumAge: 8 },
  ]),

  ...attractions("japan", [
    { name: "Fushimi Inari shrine trail", category: "religious", summary: "Ten thousand vermilion torii gates winding up the sacred mountain.", bestTimeOfDay: "dawn — near-empty before 8am", physicalIntensity: "medium", seniorNotes: ["First gate clusters need only 20 minutes of easy walking"] },
    { name: "Shinkansen bullet-train journey", category: "experience", summary: "The 300 km/h ride past Mt Fuji — an attraction in itself.", accessibilityNotes: ["Full step-free boarding with reserved wheelchair spaces"] },
    { name: "teamLab Planets Tokyo", category: "museum", summary: "Barefoot immersive digital art through water and mirrored infinity rooms.", childNotes: ["Sensory wonderland for kids; knee-deep water sections"], practicalNotes: ["Timed tickets sell out — book early"] },
    { name: "Tokyo DisneySea", category: "theme-park", summary: "Widely rated the world's most beautiful theme park — unique to Tokyo.", childNotes: ["Gentler than Disneyland for the youngest visitors"] },
    { name: "Kyoto: Kinkaku-ji & Arashiyama bamboo", category: "culture", summary: "The golden pavilion and the west hills' bamboo groves and river.", bestTimeOfDay: "before 9am" },
    { name: "Osaka Dotonbori food night", category: "food", summary: "Takoyaki, kushikatsu and neon along the canal — Japan's kitchen.", bestTimeOfDay: "evening" },
  ]),

  ...attractions("south-korea", [
    { name: "Gyeongbokgung Palace in hanbok", category: "culture", summary: "Joseon-era grand palace; hanbok wearers enter free and photograph beautifully.", practicalNotes: ["Guard-change ceremony at set times — verify schedule"] },
    { name: "N Seoul Tower & Namsan", category: "landmark", summary: "Cable car to the love-lock deck above the city lights.", bestTimeOfDay: "sunset into night" },
    { name: "Myeongdong street food & shopping", category: "shopping", summary: "K-beauty flagships between rows of sizzling snack stalls.", bestTimeOfDay: "evening" },
    { name: "DMZ half-day tour", category: "experience", summary: "The world's most fortified border — tunnels, lookouts and history.", minimumAge: 10, practicalNotes: ["Passport required; book licensed tours ahead"] },
    { name: "Bukchon Hanok Village", category: "culture", summary: "Hillside lanes of traditional wooden homes between the palaces.", seniorNotes: ["Sloped lanes — take the downhill route"] },
    { name: "Everland or Lotte World", category: "theme-park", summary: "Korea's two giant parks — gardens and coasters vs indoor ice rink city.", childNotes: ["Lotte World's indoor half rescues rainy days"] },
  ]),

  ...attractions("sri-lanka", [
    { name: "Sigiriya Lion Rock", category: "landmark", summary: "1,200 steps up the 5th-century sky fortress with frescoes en route.", physicalIntensity: "high", bestTimeOfDay: "7am start beats heat and queues", unsuitableFor: ["vertigo sufferers", "limited mobility"], seniorNotes: ["Pidurangala rock opposite offers an easier alternative view"] },
    { name: "Kandy-to-Ella scenic train", category: "experience", summary: "The world-famous tea-country line past waterfalls and cloud forests.", practicalNotes: ["Reserve seats weeks ahead or ride short unreserved hops"] },
    { name: "Yala leopard safari", category: "nature", summary: "Dawn game drives in the island's premier leopard territory.", childNotes: ["Long bumpy rides — best for ages 6+"], bestTimeOfDay: "dawn" },
    { name: "Galle Fort ramparts", category: "culture", summary: "Sunset walls around the Dutch-colonial old town's cafés and boutiques.", seniorNotes: ["Flat rampart walk with sea breeze"] },
    { name: "Temple of the Tooth, Kandy", category: "religious", summary: "Sri Lanka's holiest Buddhist shrine beside the lake.", practicalNotes: ["Shoulders and knees covered; shoes off"] },
    { name: "Mirissa whale watching (seasonal)", category: "nature", summary: "Blue whales off the south coast, roughly November–April.", practicalNotes: ["Seasonal — verify sailing conditions"], unsuitableFor: ["easily seasick travellers"] },
  ]),

  ...attractions("maldives", [
    { name: "House-reef snorkelling", category: "beach", summary: "Turtles, rays and reef fish steps from your villa deck.", childNotes: ["Lagoon-facing villas give calm, shallow water for beginners"] },
    { name: "Sunset dolphin cruise", category: "experience", summary: "Spinner dolphins riding the bow at golden hour.", seniorNotes: ["Seated cruise — fully accessible with boarding help"] },
    { name: "Sandbank picnic", category: "beach", summary: "A private sliver of white sand in open blue — the honeymoon classic.", idealFor: ["honeymoon", "couple"] },
    { name: "Manta & whale-shark excursions", category: "adventure", summary: "Snorkel alongside gentle giants at seasonal aggregation sites.", practicalNotes: ["Sightings seasonal and never guaranteed"] },
    { name: "Overwater spa treatment", category: "wellness", summary: "Massage over glass floors above the lagoon.", idealFor: ["couple", "relaxation", "honeymoon"] },
    { name: "Night fishing, Maldivian style", category: "experience", summary: "Handline fishing at dusk; the chef grills your catch.", childNotes: ["Easy, seated activity kids genuinely enjoy"] },
  ]),

  ...attractions("mauritius", [
    { name: "Île aux Cerfs catamaran day", category: "beach", summary: "Sail the east-coast lagoon to a playground island of sandbars.", childNotes: ["Shallow lagoon entries suit all ages"] },
    { name: "Chamarel Seven Coloured Earth & waterfall", category: "nature", summary: "Surreal rainbow dunes beside the island's tallest single-drop falls.", seniorNotes: ["Viewpoints reachable with minimal walking"] },
    { name: "Le Morne beach & mountain", category: "beach", summary: "UNESCO peninsula with the island's most photogenic beach and kite lagoon.", practicalNotes: ["Summit hike is guided-only and strenuous; the beach needs no effort"] },
    { name: "Port Louis Central Market", category: "culture", summary: "Dholl puri, tropical fruit and craft stalls in the capital's bazaar.", bestTimeOfDay: "morning" },
    { name: "Undersea walk or glass-bottom lagoon trip", category: "adventure", summary: "Helmet-walk the lagoon floor among fish — no swimming required.", physicalIntensity: "low", minimumAge: 7 },
    { name: "Bois Chéri tea route tasting", category: "food", summary: "Plantation, factory and hilltop tasting pavilion in the green south.", seniorNotes: ["Fully drivable with gentle strolls"] },
  ]),

  ...attractions("seychelles", [
    { name: "Anse Source d'Argent", category: "beach", summary: "Pink-granite boulders and shallow turquoise — the world's most photographed beach.", practicalNotes: ["Entry via L'Union Estate ticket; shallow at low tide"] },
    { name: "La Digue by bicycle", category: "experience", summary: "Car-free island cycling between ox-carts, vanilla farms and coves.", physicalIntensity: "medium", seniorNotes: ["Flat main routes; electric bikes available"] },
    { name: "Vallée de Mai palm forest", category: "nature", summary: "Primeval UNESCO valley of coco-de-mer palms and rare black parrots.", physicalIntensity: "medium" },
    { name: "Curieuse giant tortoises", category: "nature", summary: "Free-roaming Aldabra tortoises and mangrove boardwalks by boat trip.", childNotes: ["Tortoise encounters thrill all ages"] },
    { name: "Anse Lazio, Praslin", category: "beach", summary: "Praslin's takamaka-fringed swimming bay, often ranked world top-ten.", practicalNotes: ["Strong swells possible in trade-wind months"] },
    { name: "Beau Vallon sunset & Creole dinner", category: "food", summary: "Mahé's family bay with beachside grills at golden hour.", idealFor: ["family", "couple", "food"] },
  ]),

  ...attractions("turkey", [
    { name: "Cappadocia sunrise balloon flight", category: "adventure", summary: "A hundred balloons over fairy-chimney valleys at dawn — the bucket-list classic.", practicalNotes: ["Weather-dependent; keep two mornings free"], unsuitableFor: ["pregnant travellers"], minimumAge: 6 },
    { name: "Hagia Sophia & Blue Mosque", category: "religious", summary: "Byzantine dome facing Ottoman minarets across Sultanahmet square.", practicalNotes: ["Modest dress; prayer-time closures"], seniorNotes: ["Benches and shade in the square between visits"] },
    { name: "Grand Bazaar & Spice Market", category: "shopping", summary: "4,000 shops of lamps, carpets and lokum in the covered labyrinth.", indoorOutdoor: "indoor" },
    { name: "Bosphorus sunset cruise", category: "experience", summary: "Palaces and fortresses from the strait between two continents.", seniorNotes: ["Seated cruise with easy central boarding"] },
    { name: "Pamukkale travertines & Hierapolis", category: "nature", summary: "Barefoot walk over white thermal terraces to a Roman spa city.", practicalNotes: ["Shoes off on terraces; water is shallow"] },
    { name: "Göreme Open-Air Museum", category: "culture", summary: "Frescoed cave churches carved into Cappadocian rock.", physicalIntensity: "medium" },
  ]),
];
