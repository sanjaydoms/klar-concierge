import type { AttractionIntelligence } from "../../src/types/knowledge";
import { attractions } from "./builders";

export const ATTRACTIONS_7: AttractionIntelligence[] = [
  ...attractions("goa", [
    { name: "Palolem & South Goa Beaches", category: "beach", summary: "Crescent bays, palm shade and slow mornings — the Goa people fall in love with.", childNotes: ["Gentle gradients at Palolem suit young swimmers"] },
    { name: "Baga–Calangute Strip", category: "nightlife", summary: "Shacks, water sports and Goa's famous night energy — loud, alive and unapologetic.", unsuitableFor: ["quiet-seekers"] },
    { name: "Old Goa Churches", category: "culture", summary: "Basilica of Bom Jesus and Se Cathedral — UNESCO-listed Portuguese grandeur.", seniorNotes: ["Flat sites, easy visits, best in morning cool"] },
    { name: "Fontainhas Latin Quarter", category: "culture", summary: "Ochre-and-indigo Portuguese lanes, azulejo tiles and café corners — Panjim's picture-book heart.", practicalNotes: ["Best explored on a slow morning walk"] },
    { name: "Dudhsagar Waterfalls", category: "nature", summary: "A four-tier cascade thundering under a railway bridge — monsoon-fed drama an easy day trip away.", practicalNotes: ["Jeep-safari access; closed in peak monsoon flow"] },
    { name: "Sunset Cruise on the Mandovi", category: "experience", summary: "Live music, river breeze and Panjim lighting up — Goa's easiest golden hour.", seniorNotes: ["Seated, gentle and effortless"] },
  ]),

  ...attractions("kerala", [
    { name: "Alleppey Backwater Houseboat", category: "experience", summary: "A night drifting past paddies, kingfishers and village life — Kerala's signature memory.", seniorNotes: ["Sightseeing at armchair pace — ideal"], childNotes: ["Life jackets provided; railings vary by boat — check when booking"] },
    { name: "Munnar Tea Gardens", category: "nature", summary: "Emerald slopes to the horizon, tea-factory tours and air that feels washed.", practicalNotes: ["Carry layers — evenings drop cool"] },
    { name: "Fort Kochi", category: "culture", summary: "Chinese fishing nets, spice warehouses, café art and colonial lanes — history you can stroll.", seniorNotes: ["Flat, compact and shaded — very senior-friendly"] },
    { name: "Thekkady / Periyar Wildlife Sanctuary", category: "nature", summary: "Boat safaris past elephant herds on the lake shore, spice plantations next door.", childNotes: ["Boat slots book out — reserve morning rides"] },
    { name: "Kathakali Performance", category: "culture", summary: "Painted faces, drumming and epic storytelling — arrive early to watch the make-up ritual.", practicalNotes: ["Evening shows in Kochi and Thekkady; one hour is enough for first-timers"] },
    { name: "Ayurveda Wellness Session", category: "wellness", summary: "From single massages to full panchakarma — the original wellness tradition, done properly.", practicalNotes: ["Choose certified centres; genuine programmes need multiple days"] },
  ]),

  ...attractions("rajasthan", [
    { name: "Amber Fort, Jaipur", category: "landmark", summary: "Mirror halls and ramparts above a lake — Rajasthan's grand overture.", unsuitableFor: ["limited mobility (long ramps and stairs)"], practicalNotes: ["Go at opening; skip the elephant ride, take the jeep"] },
    { name: "Mehrangarh Fort, Jodhpur", category: "landmark", summary: "A cliff-top colossus over the blue city — India's best-run fort museum.", seniorNotes: ["Lift available to upper courtyards"] },
    { name: "Udaipur Lake Pichola", category: "experience", summary: "Sunset boat past the Lake Palace, ghats glowing gold — India's most romantic hour.", seniorNotes: ["Effortless beauty — seated boat cruise"] },
    { name: "Jaisalmer & Sam Dunes Overnight", category: "adventure", summary: "Golden sandstone lanes, then camel-back dunes and folk music under stars.", childNotes: ["Kids adore the camels and campfire; nights get cold"] },
    { name: "City Palace, Udaipur", category: "culture", summary: "Courtyards, peacock mosaics and lake views through marble jharokhas.", practicalNotes: ["Audio guide turns corridors into stories"] },
    { name: "Jaipur Bazaars", category: "shopping", summary: "Block prints, blue pottery, juttis and gemstones — haggling as sport in the pink city.", practicalNotes: ["Fixed-price government emporia calibrate your bargaining"] },
  ]),

  ...attractions("himachal-pradesh", [
    { name: "Solang Valley & Atal Tunnel", category: "adventure", summary: "Paragliding, zorbing and ropeway rides — then through the tunnel to Sissu's stark beauty.", childNotes: ["Activity operators vary — pick licensed ones"] },
    { name: "Old Manali & Hadimba Temple", category: "culture", summary: "Cedar-forest temple, café lanes and apple orchards — Manali's gentler face.", seniorNotes: ["Short forest walk on mostly even paths"] },
    { name: "Shimla Mall Road & Ridge", category: "experience", summary: "Colonial promenade, Christ Church and valley views — the original hill-station evening.", seniorNotes: ["Lift connects Cart Road to Mall Road, sparing the climb"] },
    { name: "Kalka–Shimla Toy Train", category: "experience", summary: "A UNESCO narrow-gauge climb through 100 tunnels and pine forests.", practicalNotes: ["Book windows seats weeks ahead in season"] },
    { name: "Bir Billing Paragliding", category: "adventure", summary: "One of the world's top paragliding sites — tandem flights over tea gardens and monasteries.", unsuitableFor: ["young children (operator age limits)", "vertigo sufferers"], minimumAge: 12 },
    { name: "Kasol & Parvati Valley", category: "nature", summary: "Riverside cafés, easy village hikes and the Himalaya at backpacker pace.", practicalNotes: ["Day-hike to Chalal is the gentle classic"] },
  ]),

  ...attractions("kashmir", [
    { name: "Dal Lake Shikara & Houseboat", category: "experience", summary: "Glide past floating gardens and lotus fields at dawn; sleep on a carved houseboat.", seniorNotes: ["The most effortless beauty in India — seated throughout"] },
    { name: "Gulmarg Gondola", category: "adventure", summary: "Asia's highest cable car, meadows in summer, serious powder in winter.", practicalNotes: ["Book Phase 2 slots online ahead; carry warm layers year-round"] },
    { name: "Mughal Gardens, Srinagar", category: "culture", summary: "Nishat and Shalimar's terraced fountains framed by chinar and mountains.", childNotes: ["Open lawns for restless legs"] },
    { name: "Pahalgam & Betaab Valley", category: "nature", summary: "Pine-lined river valleys and pony trails — the Kashmir of film songs.", practicalNotes: ["Fix pony/taxi rates before starting"] },
    { name: "Sonamarg Meadows", category: "nature", summary: "The 'meadow of gold' beneath glaciers — day-trip drama on the Ladakh road.", seniorNotes: ["Viewpoints are drive-up; glacier walks optional"] },
    { name: "Srinagar Old City & Craft Shopping", category: "shopping", summary: "Pashmina, papier-mâché and walnut carving from generational workshops.", practicalNotes: ["Buy GI-tagged pashmina from reputed houses"] },
  ]),

  ...attractions("andaman-islands", [
    { name: "Radhanagar Beach, Havelock", category: "beach", summary: "Repeatedly ranked Asia's best beach — forest meeting flour-white sand and glass water.", childNotes: ["Lifeguarded main stretch; gentle evening swims"] },
    { name: "Elephant Beach Snorkelling", category: "adventure", summary: "Reef fish and coral just metres off the sand — snorkelling for absolute beginners.", practicalNotes: ["Morning boats get the clearest water"] },
    { name: "Scuba at Havelock", category: "adventure", summary: "Discover dives with patient instructors — many people's first breath underwater.", minimumAge: 10, practicalNotes: ["Choose SSI/PADI-certified operators only"] },
    { name: "Cellular Jail & Light-and-Sound Show", category: "museum", summary: "The moving story of India's freedom fighters, told where it happened.", seniorNotes: ["Evening show is seated; site has stairs"] },
    { name: "Neil Island (Shaheed Dweep)", category: "beach", summary: "Cycling lanes, natural coral bridge and sunsets without a crowd.", practicalNotes: ["Half the pace of Havelock — stay a night, not a rush"] },
    { name: "Bioluminescence Kayaking", category: "experience", summary: "Paddle through glowing water on new-moon nights — pure magic.", practicalNotes: ["Season and moon-phase dependent — plan around dark nights"] },
  ]),

  ...attractions("ladakh", [
    { name: "Pangong Tso", category: "nature", summary: "A 130km lake that shifts through impossible blues at 4,225m — worth every hour of the road.", practicalNotes: ["Stay overnight in a lakeside camp; acclimatise in Leh first"], unsuitableFor: ["unacclimatised same-day visitors"] },
    { name: "Nubra Valley & Hunder Dunes", category: "nature", summary: "Over Khardung La to sand dunes, double-humped camels and monastery views.", childNotes: ["Camel rides delight older kids; the road is long"] },
    { name: "Thiksey Monastery", category: "religious", summary: "A mini-Potala at dawn — monks' prayers echoing over the Indus valley.", practicalNotes: ["Attend morning prayers around 6am for the full experience"] },
    { name: "Khardung La Pass", category: "adventure", summary: "One of the world's highest motorable passes — prayer flags at 5,359m.", unsuitableFor: ["anyone with altitude symptoms — do not linger"], practicalNotes: ["Short stop only; descend if unwell"] },
    { name: "Leh Old Town & Shanti Stupa", category: "culture", summary: "Palace lanes, rooftop cafés and the white stupa's sunset panorama.", seniorNotes: ["Take taxis up; steps are steep at altitude"] },
    { name: "Magnetic Hill & Sangam", category: "experience", summary: "The optical-illusion hill and the Indus–Zanskar confluence — classic road-trip stops.", practicalNotes: ["Combine on the Leh–Alchi road day"] },
  ]),

  ...attractions("sikkim-darjeeling", [
    { name: "Tiger Hill Sunrise", category: "nature", summary: "Kanchenjunga igniting at dawn — on clear days, even Everest on the horizon.", practicalNotes: ["4am start; October–November clearest"], seniorNotes: ["Viewing pavilion has seating"] },
    { name: "Darjeeling Himalayan Railway", category: "experience", summary: "The UNESCO toy train looping through bazaars and tea slopes.", childNotes: ["Short joy-rides from Darjeeling suit young kids"] },
    { name: "Tea Estate Visit & Tasting", category: "food", summary: "Pluck-to-cup at a working estate — first flush tastes nothing like the tin at home.", practicalNotes: ["Estates close Sundays/Mondays for plucking cycles — check days"] },
    { name: "Rumtek Monastery", category: "religious", summary: "Sikkim's great Kagyu seat — murals, prayer wheels and valley silence.", practicalNotes: ["Modest dress; photography rules vary by hall"] },
    { name: "Tsomgo Lake & Baba Mandir", category: "nature", summary: "A sacred glacial lake at 3,753m, yak rides and prayer flags against snow.", practicalNotes: ["Permit required — arranged by operators; weather can close the road"] },
    { name: "Gangtok MG Marg", category: "experience", summary: "A spotless pedestrian boulevard of momos, bakeries and mountain views.", seniorNotes: ["Flat, traffic-free and bench-lined — ideal evening stroll"] },
  ]),
];
