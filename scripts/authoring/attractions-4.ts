import type { AttractionIntelligence } from "../../src/types/knowledge";
import { attractions } from "./builders";

export const ATTRACTIONS_4: AttractionIntelligence[] = [
  ...attractions("hong-kong", [
    { name: "Victoria Peak & Peak Tram", category: "landmark", summary: "The funicular climb to Hong Kong's definitive skyline panorama.", bestTimeOfDay: "late afternoon into the lights", seniorNotes: ["Tram avoids all climbing; viewing decks are step-free"] },
    { name: "Hong Kong Disneyland", category: "theme-park", summary: "The compact, friendly Disney — ideal first park for younger children.", childNotes: ["Shorter queues than most Disney parks; great for under-10s"] },
    { name: "Star Ferry & Tsim Sha Tsui promenade", category: "experience", summary: "The century-old harbour crossing and the Symphony of Lights.", bestTimeOfDay: "8pm light show", accessibilityNotes: ["Step-free boarding with assistance"] },
    { name: "Dim sum trail", category: "food", summary: "From Michelin-starred trolleys to teahouse classics — the world's dim sum capital.", idealFor: ["food", "family", "couple"] },
    { name: "Ngong Ping 360 & Big Buddha", category: "nature", summary: "Glass-bottom cable car over country park to the giant Tian Tan Buddha.", weatherSensitivity: "high", seniorNotes: ["Cable car plus shuttle avoids the 268 steps if needed"] },
    { name: "Temple Street Night Market", category: "shopping", summary: "Fortune tellers, clay-pot rice and neon bargains after dark.", bestTimeOfDay: "evening" },
  ]),

  ...attractions("nepal", [
    { name: "Everest scenic mountain flight", category: "experience", summary: "An hour along the Himalayan wall to Everest — window seat guaranteed.", practicalNotes: ["Weather-dependent; book the first morning slot and keep a buffer day"], unsuitableFor: ["nervous flyers"] },
    { name: "Kathmandu Durbar Square & Swayambhunath", category: "culture", summary: "Living royal squares and the monkey-guarded stupa above the valley.", physicalIntensity: "medium", seniorNotes: ["Swayambhunath has 365 steps — drive-up access exists"] },
    { name: "Boudhanath Stupa", category: "religious", summary: "The great white dome circled by prayer wheels and butter-lamp light.", bestTimeOfDay: "dusk, when pilgrims circumambulate", accessibilityNotes: ["Flat kora path around the stupa"] },
    { name: "Pokhara lakeside & Sarangkot sunrise", category: "nature", summary: "Phewa Lake boats and dawn over the Annapurna range.", bestTimeOfDay: "sunrise" },
    { name: "Short Annapurna foothill trek", category: "adventure", summary: "One to three day teahouse walks with big-mountain views.", physicalIntensity: "high", minimumAge: 8, unsuitableFor: ["limited mobility"] },
    { name: "Chitwan jungle safari", category: "nature", summary: "Rhinos, crocodiles and (if lucky) tigers in the Terai grasslands.", childNotes: ["Jeep safaris suit families better than foot safaris"] },
  ]),

  ...attractions("bhutan", [
    { name: "Tiger's Nest Monastery hike", category: "religious", summary: "The cliff-hung monastery — Bhutan's icon, earned by a half-day walk.", physicalIntensity: "high", typicalDurationHours: 5, unsuitableFor: ["limited mobility"], seniorNotes: ["Horses assist to the midway café; steps remain after"], practicalNotes: ["Go early; carry water; dress modestly"] },
    { name: "Punakha Dzong", category: "culture", summary: "The kingdom's most beautiful fortress at the meeting of two rivers.", seniorNotes: ["Steep entry steps with handrail"] },
    { name: "Dochula Pass 108 chortens", category: "nature", summary: "Himalayan panorama through fluttering prayer flags at 3,100m.", weatherSensitivity: "high", practicalNotes: ["Clearest views October–February mornings"] },
    { name: "Thimphu: Buddha Dordenma & weekend market", category: "culture", summary: "The giant golden Buddha and the capital's produce-and-craft market.", accessibilityNotes: ["Buddha plaza is drive-up and step-free"] },
    { name: "Traditional hot-stone bath", category: "wellness", summary: "River stones heated over fire warm a wooden tub of herbal water.", idealFor: ["couple", "relaxation", "senior"] },
    { name: "Archery match & farmhouse lunch", category: "experience", summary: "Bhutan's exuberant national sport plus ema datshi at a family farmhouse.", childNotes: ["Kids love the whooping celebrations at hits"] },
  ]),

  ...attractions("oman", [
    { name: "Sultan Qaboos Grand Mosque", category: "religious", summary: "Serene marble courtyards and one of the world's great chandeliers.", practicalNotes: ["Open mornings to non-Muslim visitors; strict dress code"], accessibilityNotes: ["Fully step-free"] },
    { name: "Wadi Shab swim & hike", category: "adventure", summary: "Boat, boulder-hop and swim to a waterfall cave of turquoise pools.", physicalIntensity: "high", minimumAge: 8, unsuitableFor: ["non-swimmers", "limited mobility"] },
    { name: "Wahiba Sands overnight desert camp", category: "experience", summary: "Dune-bashing to a starlit camp with Bedouin dinner and dawn silence.", seniorNotes: ["Request gentle-drive transfer; camps have proper beds"] },
    { name: "Nizwa Fort & souq", category: "culture", summary: "The great drum tower and Friday goat market of the interior.", bestTimeOfDay: "Friday morning for the market" },
    { name: "Mutrah Corniche & souq", category: "shopping", summary: "Frankincense lanes and harbour lights along Muscat's old waterfront.", bestTimeOfDay: "evening" },
    { name: "Daymaniyat Islands snorkelling", category: "nature", summary: "Turtles and coral gardens in a protected marine reserve.", weatherSensitivity: "high", practicalNotes: ["Seasonal boat trips; whale sharks possible Sep–Oct"] },
  ]),

  ...attractions("qatar", [
    { name: "Museum of Islamic Art", category: "museum", summary: "I. M. Pei's geometric masterpiece holding 1,400 years of treasures.", accessibilityNotes: ["Fully accessible; waterfront park adjoins"] },
    { name: "Souq Waqif", category: "shopping", summary: "Falcon shops, spice alleys and shisha courtyards in the restored souq.", bestTimeOfDay: "evening" },
    { name: "National Museum of Qatar", category: "museum", summary: "The desert-rose building whose galleries wrap you in film and sound.", childNotes: ["Immersive halls hold kids' attention unusually well"] },
    { name: "Khor Al Adaid inland sea safari", category: "adventure", summary: "Dunes meeting the sea — UNESCO-recognised desert theatre.", seniorNotes: ["Gentle-drive option on request"] },
    { name: "Katara Cultural Village & beach", category: "culture", summary: "Amphitheatre, galleries and a family beach between the towers.", idealFor: ["family", "culture", "couple"] },
    { name: "The Pearl & Corniche evening", category: "landmark", summary: "Marina promenades and the skyline's nightly glow.", accessibilityNotes: ["Flat, step-free promenades throughout"] },
  ]),

  ...attractions("cambodia", [
    { name: "Angkor Wat sunrise", category: "landmark", summary: "The world's largest religious monument mirrored in its lotus pools at dawn.", bestTimeOfDay: "5am start", practicalNotes: ["Multi-day passes reward slower exploration"], seniorNotes: ["Ground level is rewarding without tower climbs"] },
    { name: "Ta Prohm & Bayon temples", category: "culture", summary: "Tree-strangled corridors and the enigmatic smiling faces.", physicalIntensity: "medium" },
    { name: "Floating villages of Tonlé Sap", category: "nature", summary: "Stilted schools and floating markets on Southeast Asia's great lake.", seniorNotes: ["Seated boat tour with assisted boarding"] },
    { name: "Phare circus, Siem Reap", category: "experience", summary: "Cambodia's acclaimed social-enterprise circus — raw, joyful, moving.", idealFor: ["family", "children", "culture"], bestTimeOfDay: "evening" },
    { name: "Khmer cooking class", category: "food", summary: "Market shopping then fish amok and banana-flower salad from scratch.", childNotes: ["Hands-on classes welcome kids"] },
    { name: "Phnom Penh royal palace & history circuit", category: "culture", summary: "Silver Pagoda splendour and the nation's sobering modern history.", practicalNotes: ["Genocide-memorial sites deserve emotional preparation; optional"] },
  ]),

  ...attractions("kenya", [
    { name: "Masai Mara game drives", category: "nature", summary: "Big cats at dawn on Africa's most storied savannah.", bestTimeOfDay: "dawn and dusk drives", childNotes: ["Private vehicles give families flexibility"], practicalNotes: ["Migration timing varies yearly — verify"] },
    { name: "Hot-air balloon over the Mara", category: "adventure", summary: "Sunrise drift above herds, ending with champagne breakfast on the plains.", minimumAge: 7, unsuitableFor: ["pregnant travellers"], practicalNotes: ["Weather-dependent; book early"] },
    { name: "Amboseli elephants & Kilimanjaro", category: "nature", summary: "Great tuskers crossing dust flats beneath Africa's highest peak.", bestTimeOfDay: "clear early mornings for the mountain" },
    { name: "Maasai village visit", category: "culture", summary: "Jumping dances, beadwork and daily life with Mara communities.", practicalNotes: ["Choose community-run visits recommended by your camp"] },
    { name: "Nairobi: Giraffe Centre & Sheldrick elephants", category: "experience", summary: "Feed Rothschild giraffes and meet orphaned elephant calves.", childNotes: ["The most child-perfect wildlife hour in Africa"], practicalNotes: ["Sheldrick visiting hour is fixed — book ahead"] },
    { name: "Diani Beach add-on", category: "beach", summary: "Powder-white Indian Ocean sands to end the safari softly.", idealFor: ["couple", "family", "relaxation"] },
  ]),

  ...attractions("morocco", [
    { name: "Jemaa el-Fnaa & the Marrakech souks", category: "culture", summary: "Snake charmers, storytellers and lantern lanes — the great square's nightly theatre.", bestTimeOfDay: "sunset onward", practicalNotes: ["Pick landmarks before entering the souk maze"] },
    { name: "Sahara camel trek & desert camp", category: "experience", summary: "Ride into Erg Chebbi's dunes for drums and the deepest starfield.", seniorNotes: ["4x4 transfer to camp available instead of camels"], practicalNotes: ["Two-day journey from Marrakech; worth every hour"] },
    { name: "Jardin Majorelle & YSL Museum", category: "nature", summary: "Cobalt-blue gardens and the couturier's Marrakech legacy.", practicalNotes: ["Timed tickets — book online days ahead"] },
    { name: "Chefchaouen blue city", category: "culture", summary: "Powder-blue lanes spilling down the Rif mountains.", physicalIntensity: "medium" },
    { name: "Fes el-Bali medina & tanneries", category: "culture", summary: "The medieval world's largest car-free maze, dyeing leather as it has for centuries.", practicalNotes: ["Licensed guide strongly recommended"], unsuitableFor: ["strong smell sensitivity at the tanneries"] },
    { name: "Hammam & riad courtyard evening", category: "wellness", summary: "Steam, black-soap scrub and mint tea under orange trees.", idealFor: ["couple", "relaxation", "honeymoon"] },
  ]),

  ...attractions("portugal", [
    { name: "Lisbon: Tram 28 & Alfama", category: "culture", summary: "The rattling yellow tram through hill-hung lanes to the castle viewpoints.", bestTimeOfDay: "early morning beats the queues", seniorNotes: ["Tram covers the hills; miradouros are steps away"] },
    { name: "Belém: Jerónimos & pastéis de nata", category: "landmark", summary: "Manueline cloisters, the Discoveries monument and the original custard tart.", idealFor: ["culture", "food", "family"] },
    { name: "Sintra: Pena Palace day", category: "culture", summary: "A fairytale of painted turrets in misty forested hills.", practicalNotes: ["Timed entry; go at opening or late afternoon"], physicalIntensity: "medium" },
    { name: "Porto: Ribeira & port wine cellars", category: "food", summary: "Douro-side tastings beneath the double-deck iron bridge.", minimumAge: 0, childNotes: ["Cellar tours welcome kids; tastings for adults"] },
    { name: "Algarve: Benagil caves & golden cliffs", category: "beach", summary: "Kayak or boat into the famous dome-lit sea cave.", weatherSensitivity: "high", practicalNotes: ["Sea conditions decide entry — book flexible slots"] },
    { name: "Fado night in Alfama", category: "experience", summary: "Portugal's blues sung close enough to touch, over dinner.", bestTimeOfDay: "evening", idealFor: ["couple", "culture", "food"] },
  ]),

  ...attractions("united-kingdom", [
    { name: "Tower of London & Crown Jewels", category: "culture", summary: "A thousand years of intrigue guarded by Beefeaters and ravens.", practicalNotes: ["Book timed entry; Jewels first thing"], childNotes: ["Yeoman Warder tours enchant kids"] },
    { name: "British Museum & Natural History Museum", category: "museum", summary: "The Rosetta Stone and the dinosaur hall — both free.", accessibilityNotes: ["Fully accessible; free entry eases short visits"] },
    { name: "Westminster & Buckingham Palace walk", category: "landmark", summary: "Big Ben, the Abbey and Changing of the Guard in one royal mile.", practicalNotes: ["Guard-change schedule varies — verify morning-of"] },
    { name: "West End theatre night", category: "experience", summary: "The world's deepest stage line-up, eight shows a week.", bestTimeOfDay: "evening", seniorNotes: ["Ask for aisle stalls to skip stairs"] },
    { name: "Stonehenge & Windsor day trip", category: "culture", summary: "The 5,000-year mystery plus the world's oldest occupied castle.", typicalDurationHours: 10 },
    { name: "Borough Market & South Bank stroll", category: "food", summary: "London's larder, then riverside walking from the Eye to Tate Modern.", idealFor: ["food", "family", "couple"] },
  ]),
];
