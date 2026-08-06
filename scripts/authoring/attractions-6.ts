import type { AttractionIntelligence } from "../../src/types/knowledge";
import { attractions } from "./builders";

export const ATTRACTIONS_6: AttractionIntelligence[] = [
  ...attractions("germany", [
    { name: "Neuschwanstein Castle", category: "landmark", summary: "The fairy-tale castle — spires above an alpine gorge, the template for every storybook fortress since.", practicalNotes: ["Timed tickets sell out; book weeks ahead and allow the uphill walk or shuttle"], unsuitableFor: ["limited mobility (steep approach)"] },
    { name: "Museum Island, Berlin", category: "museum", summary: "Five world-class museums on one river island — Nefertiti, the Pergamon and 6,000 years of civilisation.", seniorNotes: ["Flat island, lifts throughout — one of Europe's easiest great museum days"] },
    { name: "Rothenburg & the Romantic Road", category: "culture", summary: "Half-timbered walled towns strung along medieval trade roads — Germany at its most storybook.", childNotes: ["Walkable walls and night-watchman tours delight kids"] },
    { name: "Rhine Valley Cruise", category: "experience", summary: "Castle after castle above terraced vineyards on Europe's great river — sightseeing at deck-chair pace.", seniorNotes: ["Effortless — the scenery comes to you"] },
    { name: "Munich's Marienplatz & Beer Halls", category: "food", summary: "The Glockenspiel, market stalls and vaulted beer halls with pretzels bigger than plates — Bavaria distilled.", practicalNotes: ["Beer halls welcome families by day; evenings get rowdier"] },
    { name: "Black Forest", category: "nature", summary: "Cuckoo-clock villages, waterfall walks and cake in the region that invented it — gentle nature between city stops.", childNotes: ["Easy trails and open-air museums work for all ages"] },
  ]),

  ...attractions("netherlands", [
    { name: "Amsterdam Canal Cruise", category: "experience", summary: "The city as it was designed to be seen — gabled houses, houseboat life and 165 canals from water level.", seniorNotes: ["Seated sightseeing at its best; heated boats in winter"] },
    { name: "Keukenhof Gardens", category: "nature", summary: "Seven million bulbs in bloom — the world's most photographed spring garden, open roughly mid-March to mid-May.", practicalNotes: ["Strictly seasonal — verify open dates; go at opening on weekdays"] },
    { name: "Rijksmuseum", category: "museum", summary: "Rembrandt's Night Watch and the Dutch Golden Age in a cathedral of art.", childNotes: ["Family multimedia tours turn masters into treasure hunts"] },
    { name: "Anne Frank House", category: "museum", summary: "The hidden annexe itself — quiet, devastating, essential.", practicalNotes: ["Tickets released online six weeks ahead only — set a reminder"], unsuitableFor: ["very young children (emotionally heavy, steep stairs)"] },
    { name: "Zaanse Schans Windmills", category: "culture", summary: "Working windmills, clog and cheese workshops on green polder — the classic Holland postcard, 20 minutes out.", childNotes: ["Hands-on demonstrations keep young children engaged"] },
    { name: "Giethoorn Village", category: "experience", summary: "A village with canals for streets and whisper-boats for cars — impossibly serene.", practicalNotes: ["Half-day trip; rent an electric boat early before tour groups"] },
  ]),

  ...attractions("croatia", [
    { name: "Dubrovnik City Walls", category: "landmark", summary: "Two kilometres of ramparts above orange roofs and open Adriatic — Europe's finest walled-city walk.", unsuitableFor: ["limited mobility (continuous stairs, no shade)"], practicalNotes: ["Walk at opening or golden hour; midday is a hot queue"] },
    { name: "Plitvice Lakes National Park", category: "nature", summary: "Sixteen terraced lakes spilling into each other through travertine waterfalls — boardwalks through pure colour.", seniorNotes: ["Lower-lakes route with boat and train covers the highlights gently"] },
    { name: "Diocletian's Palace, Split", category: "culture", summary: "A Roman emperor's retirement palace that became a living city — cafés between 1,700-year-old columns.", childNotes: ["Cellars and peristyle spark imaginations; evenings bring street music"] },
    { name: "Hvar Island", category: "beach", summary: "Lavender hills, Venetian harbour glamour and swim-off-the-rocks coves — the Adriatic's stylish island.", practicalNotes: ["Fast catamarans from Split book out in summer"] },
    { name: "Krka Waterfalls", category: "nature", summary: "Wide emerald cascades in a river canyon — Plitvice's warmer, easier sibling.", childNotes: ["Flat boardwalk loop suits younger children"] },
    { name: "Dubrovnik Cable Car & Srđ Sunset", category: "experience", summary: "The old town, islands and sea from above as the light turns gold — the photograph you came for.", seniorNotes: ["Effortless access to the region's best view"] },
  ]),

  ...attractions("hungary", [
    { name: "Hungarian Parliament", category: "landmark", summary: "A neo-Gothic crown on the Danube — vast, gilded and best seen twice: inside by tour, outside lit at night from a river cruise.", practicalNotes: ["English tours sell out — book online ahead"] },
    { name: "Széchenyi Thermal Baths", category: "wellness", summary: "Steaming outdoor pools in a lemon-yellow palace — chess players in the water, snow in the air come winter.", childNotes: ["Most pools welcome children; bring flip-flops and caps"] },
    { name: "Fisherman's Bastion & Buda Castle", category: "culture", summary: "White turrets framing the Parliament across the river — Budapest's fairy-tale viewpoint above the old town.", seniorNotes: ["Funicular avoids the climb; terraces are stepped but manageable"] },
    { name: "Danube Evening Cruise", category: "experience", summary: "Parliament, bridges and castle floodlit from the water — one of Europe's great night views, dinner optional.", seniorNotes: ["Seated, warm and utterly effortless"] },
    { name: "Great Market Hall", category: "food", summary: "Paprika garlands, lángos counters and three floors of Hungarian abundance under a painted iron roof.", practicalNotes: ["Mornings for locals' atmosphere; upstairs for lángos lunch"] },
    { name: "Ruin Bars of the Jewish Quarter", category: "nightlife", summary: "Bars grown wild inside derelict courtyards — mismatched chairs, fairy lights and Budapest's famous night energy.", unsuitableFor: ["families with young children (evening scene)"] },
  ]),

  ...attractions("norway", [
    { name: "Nærøyfjord Cruise", category: "nature", summary: "The narrowest arm of the great fjords — thousand-metre walls, waterfalls and silence. UNESCO-listed for a reason.", seniorNotes: ["Panoramic boats make this the gentlest world-class view in Norway"] },
    { name: "Flåm Railway", category: "experience", summary: "One of the world's steepest scenic railways, hairpinning from fjord to high plateau past cascading water.", childNotes: ["Short, dramatic and stop-off friendly — ideal first mountain rail"] },
    { name: "Bryggen, Bergen", category: "culture", summary: "The crooked, colourful Hanseatic wharf — fish market lunches and gateway to every fjord.", practicalNotes: ["Bergen rains ~200 days a year — waterproofs, then enjoy it anyway"] },
    { name: "Preikestolen (Pulpit Rock)", category: "adventure", summary: "A flat granite pulpit hanging 600m above Lysefjord — Norway's most famous hike, effort rewarded tenfold.", unsuitableFor: ["limited mobility", "vertigo sufferers"], practicalNotes: ["4-hour round trip; start early, check weather"] },
    { name: "Tromsø Northern Lights Chase", category: "experience", summary: "Guided hunts under the auroral oval — Norway's best odds of green fire in the sky, September to March.", practicalNotes: ["Aurora is probabilistic — book two nights of chasing, not one"] },
    { name: "Geirangerfjord & Eagle Road", category: "nature", summary: "The postcard fjord: Seven Sisters falls, switchback viewpoints and cruise-deck drama.", seniorNotes: ["Viewpoints are drive-up; boats do the rest"] },
  ]),

  ...attractions("iceland", [
    { name: "Golden Circle", category: "nature", summary: "Geysir's eruptions, Gullfoss's double cascade and the rift valley where continents pull apart — Iceland's greatest-hits loop.", childNotes: ["Short walks, big paybacks — ideal family day"] },
    { name: "Blue Lagoon", category: "wellness", summary: "Milky-blue geothermal water in a black lava field — touristy, yes; transcendent anyway.", practicalNotes: ["Pre-book time slots; don't schedule on landing/departure day"] },
    { name: "South Coast Waterfalls & Black Beach", category: "nature", summary: "Walk behind Seljalandsfoss, stand under Skógafoss's roar, then Reynisfjara's basalt columns and black sand.", practicalNotes: ["Respect sneaker-wave warnings at Reynisfjara — they are lethal"], childNotes: ["Waterfall spray means full waterproofs for kids"] },
    { name: "Jökulsárlón Glacier Lagoon", category: "nature", summary: "Icebergs calved from a glacier drifting to sea past seals — then washing up like diamonds on the black beach.", seniorNotes: ["Lagoon shore is flat; amphibian boats add a gentle close-up"] },
    { name: "Northern Lights Hunt", category: "experience", summary: "September to April, dark clear skies away from town — green curtains that make grown-ups gasp.", practicalNotes: ["Probability, not promise — plan around it, celebrate if it shows"] },
    { name: "Reykjavik & Hallgrímskirkja", category: "culture", summary: "The concrete-basalt church tower, colourful tin houses, hot-dog stands and the world's northernmost capital charm.", childNotes: ["Tower lift gives the city view without any climb"] },
  ]),

  ...attractions("united-states", [
    { name: "New York City Icons", category: "landmark", summary: "Times Square's neon canyon, Central Park's calm, the Statue of Liberty and a skyline that needs no introduction.", practicalNotes: ["Buy Liberty/Ellis ferry tickets only from the official operator"], childNotes: ["Central Park playgrounds and the Natural History Museum balance the crowds"] },
    { name: "Grand Canyon National Park", category: "nature", summary: "A mile-deep, ten-mile-wide silence in banded stone — no photograph prepares you.", seniorNotes: ["Rim Trail is flat and shuttle-served; sunrise beats the heat and crowds"], practicalNotes: ["Summer inner-canyon hiking is dangerous heat — rim views are the point"] },
    { name: "Niagara Falls", category: "nature", summary: "Thundering horseshoe of water on the border — boat decks get you close enough to feel it in your chest.", childNotes: ["Ponchos provided; kids adore getting soaked"] },
    { name: "Las Vegas Strip", category: "nightlife", summary: "Fountains, volcanoes, gondolas and casinos in a desert fever dream — gloriously excessive.", unsuitableFor: ["young children (adult-oriented evenings)"], practicalNotes: ["Shows sell out — book headliners before flying"] },
    { name: "Orlando Theme Parks", category: "theme-park", summary: "Disney World and Universal — the deepest theme-park universe on Earth; plan like a military operation, smile like a child.", childNotes: ["Ride-reservation apps are essential; build rest days in"], practicalNotes: ["Park-hopper strategy matters — one park per day minimum"] },
    { name: "Golden Gate & San Francisco Bay", category: "landmark", summary: "The rust-red bridge in and out of fog, cable cars, Alcatraz and sourdough at the wharf.", practicalNotes: ["Alcatraz tickets vanish weeks ahead — book first, plan around it"] },
  ]),

  ...attractions("canada", [
    { name: "Banff & Lake Louise", category: "nature", summary: "Turquoise water under glacier walls, canoes at dawn, grizzly country gondolas — the Rockies' crown jewels.", practicalNotes: ["Summer parking at Louise/Moraine requires pre-booked shuttles"], childNotes: ["Gondolas and lakeshore strolls make big nature toddler-possible"] },
    { name: "Niagara Falls (Canadian Side)", category: "nature", summary: "The Horseshoe head-on — Canada owns the view; boats, tunnels and evening illuminations complete it.", seniorNotes: ["Paved promenade viewing; no effort required for the best angle"] },
    { name: "Icefields Parkway", category: "experience", summary: "230 km of glaciers, waterfalls and jade lakes between Banff and Jasper — often called the world's most beautiful drive.", practicalNotes: ["Fuel up at Saskatchewan Crossing; watch for wildlife jams"] },
    { name: "CN Tower & Toronto Waterfront", category: "landmark", summary: "Glass-floor views over the city and islands, then markets and harbour ferries below.", childNotes: ["The glass floor is a guaranteed shriek of delight"] },
    { name: "Capilano Suspension Bridge & Stanley Park", category: "nature", summary: "Treetop walkways over a rainforest canyon, then seawall cycling past totem poles in Vancouver's great park.", unsuitableFor: ["severe fear of heights (bridge sways)"] },
    { name: "Old Québec City", category: "culture", summary: "Cobbled ramparts, the Château Frontenac and French-speaking street life — Europe without the transatlantic flight.", seniorNotes: ["Funicular links upper and lower towns, sparing the stairs"] },
  ]),
];
