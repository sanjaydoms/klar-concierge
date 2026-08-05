import type { AttractionIntelligence } from "../../src/types/knowledge";
import { attractions } from "./builders";

export const ATTRACTIONS_3: AttractionIntelligence[] = [
  ...attractions("georgia", [
    { name: "Tbilisi Old Town & sulphur baths", category: "culture", summary: "Balconied lanes, the Narikala fortress cable car and domed bathhouses.", physicalIntensity: "medium", seniorNotes: ["Cable car avoids the fortress climb"] },
    { name: "Kazbegi & Gergeti Trinity Church", category: "nature", summary: "The 14th-century church beneath 5,000m Mount Kazbek — Georgia's defining view.", practicalNotes: ["Winding mountain road; 4x4 or short hike to the church"] },
    { name: "Kakheti wine-country tastings", category: "food", summary: "Qvevri cellars and family wineries in the 8,000-year-old wine cradle.", idealFor: ["couple", "food", "friends"] },
    { name: "Mtskheta UNESCO monasteries", category: "religious", summary: "Georgia's ancient capital and the hilltop Jvari viewpoint.", seniorNotes: ["Drivable to both major sites"] },
    { name: "Traditional supra feast with polyphony", category: "food", summary: "Endless toasts, khinkali and UNESCO-listed polyphonic singing.", idealFor: ["friends", "food", "culture"] },
    { name: "Chronicle of Georgia monument", category: "landmark", summary: "Colossal 30m pillars overlooking the Tbilisi Sea.", bestTimeOfDay: "late afternoon" },
  ]),

  ...attractions("azerbaijan", [
    { name: "Icherisheher old city & Maiden Tower", category: "culture", summary: "The walled medieval core beneath the Flame Towers' glow.", physicalIntensity: "medium" },
    { name: "Heydar Aliyev Centre", category: "landmark", summary: "Zaha Hadid's flowing white masterpiece — inside and out.", indoorOutdoor: "mixed", accessibilityNotes: ["Fully step-free interior"] },
    { name: "Gobustan rock art & mud volcanoes", category: "nature", summary: "Prehistoric petroglyphs and gurgling miniature mud volcanoes.", practicalNotes: ["Mud-volcano access via local 4x4 shuttle"] },
    { name: "Yanar Dag burning hillside", category: "experience", summary: "Natural gas flames that have burned on this slope for decades.", bestTimeOfDay: "dusk, when flames glow" },
    { name: "Baku Boulevard & Flame Towers night walk", category: "landmark", summary: "Caspian promenade with the towers' LED fire show.", bestTimeOfDay: "night", seniorNotes: ["Flat, benched promenade"] },
    { name: "Sheki Khan's Palace day trip", category: "culture", summary: "Stained-glass shebeke palace and caravanserai in the Caucasus foothills.", practicalNotes: ["Long day trip — consider overnighting"] },
  ]),

  ...attractions("egypt", [
    { name: "Pyramids of Giza & Sphinx", category: "landmark", summary: "The last ancient wonder, guarding the desert edge of Cairo.", bestTimeOfDay: "opening hour", practicalNotes: ["Interior pyramid entry is tight and hot — optional"], seniorNotes: ["Panorama point reachable by vehicle"] },
    { name: "Grand Egyptian Museum", category: "museum", summary: "Tutankhamun's full treasures in the vast new museum at Giza.", accessibilityNotes: ["Modern, fully accessible galleries"] },
    { name: "Nile cruise: Luxor to Aswan", category: "experience", summary: "Sail past temples and villages with Edfu and Kom Ombo stops.", seniorNotes: ["Unpack-once comfort; ramps vary by boat"] },
    { name: "Karnak & Luxor Temples", category: "culture", summary: "The colossal columned halls of ancient Thebes.", bestTimeOfDay: "early morning or evening sound-and-light" },
    { name: "Valley of the Kings", category: "culture", summary: "Painted royal tombs including Tutankhamun's.", practicalNotes: ["Tomb rotation varies; photography passes extra"], unsuitableFor: ["claustrophobic travellers in deeper tombs"] },
    { name: "Red Sea snorkelling at Hurghada", category: "beach", summary: "Coral gardens and reef fish in some of the world's clearest warm water.", childNotes: ["Sheltered lagoon resorts suit young swimmers"] },
  ]),

  ...attractions("switzerland", [
    { name: "Jungfraujoch — Top of Europe", category: "nature", summary: "Rail through the Eiger to Europe's highest station at 3,454m.", practicalNotes: ["Check summit webcam before buying tickets"], seniorNotes: ["Altitude affects some visitors — move slowly"] },
    { name: "Lake Lucerne paddle-steamer", category: "experience", summary: "Belle-époque boats gliding beneath Pilatus and Rigi.", accessibilityNotes: ["Step-free boarding on major piers"] },
    { name: "Zermatt & Gornergrat railway", category: "nature", summary: "Car-free village and the cog train to the Matterhorn's grandstand.", bestTimeOfDay: "morning, before summit clouds" },
    { name: "Glacier Express panoramic train", category: "experience", summary: "Eight hours of gorges and passes between Zermatt and St. Moritz.", seniorNotes: ["All-seated with meal service — ideal pace"] },
    { name: "Lauterbrunnen valley & Trümmelbach Falls", category: "nature", summary: "72 waterfalls off sheer cliffs; glacier water thundering inside the mountain.", childNotes: ["Trümmelbach's tunnels feel like an adventure"], unsuitableFor: ["wheelchair users at Trümmelbach (lifts + stairs)"] },
    { name: "Swiss chocolate & cheese experiences", category: "food", summary: "Maison Cailler's chocolate line and Gruyères' show dairy.", idealFor: ["family", "food", "children"] },
  ]),

  ...attractions("france", [
    { name: "Eiffel Tower at sparkling hour", category: "landmark", summary: "Summit views by day; hourly night sparkles from the Trocadéro.", practicalNotes: ["Pre-book summit lifts; sparkles first 5 minutes each hour after dark"] },
    { name: "Louvre highlights route", category: "museum", summary: "Mona Lisa, Venus de Milo and the medieval moats — with a plan.", practicalNotes: ["Timed entry essential; closed Tuesdays"], seniorNotes: ["Lifts exist but distances are long — pace the visit"] },
    { name: "Seine evening cruise", category: "experience", summary: "Notre-Dame, Musée d'Orsay and lit bridges from the water.", accessibilityNotes: ["Major operators offer step-free boarding"] },
    { name: "Versailles palace & gardens", category: "culture", summary: "The Hall of Mirrors and fountain gardens of the Sun King.", practicalNotes: ["Full day; garden fountain shows on select days"] },
    { name: "Montmartre & Sacré-Cœur", category: "culture", summary: "Artists' square, winding lanes and the white basilica's city view.", physicalIntensity: "medium", seniorNotes: ["Funicular avoids the steps"] },
    { name: "Disneyland Paris", category: "theme-park", summary: "Europe's Disney — castle, Star Wars land and parades.", childNotes: ["Two parks; one full day minimum each"] },
  ]),

  ...attractions("italy", [
    { name: "Colosseum & Roman Forum", category: "culture", summary: "The arena floor and the ruins of the empire's heart.", practicalNotes: ["Timed combined tickets; book official site early"], seniorNotes: ["Forum paths are uneven — walking poles help"] },
    { name: "Vatican Museums & St Peter's", category: "museum", summary: "The Sistine Chapel ceiling and the basilica's dome climb.", practicalNotes: ["Dress code enforced; first-entry slots beat crowds"], unsuitableFor: ["claustrophobic visitors on the dome stairs"] },
    { name: "Venice gondola & back canals", category: "experience", summary: "Glide the silent side canals off the Grand Canal.", seniorNotes: ["Boarding requires a steadying hand"] },
    { name: "Florence: Duomo & Uffizi", category: "culture", summary: "Brunelleschi's dome and the Renaissance's greatest gallery.", practicalNotes: ["Dome climb is 463 tight steps — optional"] },
    { name: "Amalfi Coast drive: Positano & Ravello", category: "nature", summary: "Cliff-hugging road linking pastel villages above the Tyrrhenian.", unsuitableFor: ["motion-sick travellers on the corniche road"], practicalNotes: ["Go by ferry in season to skip traffic"] },
    { name: "Tuscan vineyard long lunch", category: "food", summary: "Chianti tastings and farm tables among the cypress hills.", idealFor: ["couple", "food", "friends"] },
  ]),

  ...attractions("greece", [
    { name: "Acropolis & Parthenon", category: "culture", summary: "The marble crown of Athens, 2,500 years on.", bestTimeOfDay: "8am opening or late afternoon", practicalNotes: ["Slippery marble paths — grippy shoes"], seniorNotes: ["Lift available on the north slope (verify operation)"] },
    { name: "Oia sunset, Santorini", category: "landmark", summary: "The world's most famous sunset over the caldera's blue domes.", practicalNotes: ["Arrive 90 minutes early for a spot; or watch from a caldera cruise"] },
    { name: "Caldera catamaran cruise", category: "experience", summary: "Hot springs, red beach and grilled dinner sailing the volcano's rim.", idealFor: ["couple", "honeymoon", "friends"] },
    { name: "Naxos or Paros beach day", category: "beach", summary: "The quieter Cyclades' long golden sands and taverna bays.", childNotes: ["Naxos' shallow west-coast beaches are ideal for kids"] },
    { name: "Delos archaeological island", category: "culture", summary: "The sacred birthplace of Apollo, a short boat from Mykonos.", physicalIntensity: "medium" },
    { name: "Greek taverna night with live music", category: "food", summary: "Meze, ouzo and bouzouki under the vines.", idealFor: ["food", "friends", "couple"] },
  ]),

  ...attractions("spain", [
    { name: "Sagrada Família", category: "religious", summary: "Gaudí's forest-of-light basilica, still rising after 140 years.", practicalNotes: ["Timed tickets only — book days ahead; tower add-on optional"] },
    { name: "Park Güell & Gaudí's Barcelona", category: "culture", summary: "Mosaic terraces above the city plus Casa Batlló's dragon roof.", physicalIntensity: "medium" },
    { name: "Alhambra, Granada", category: "culture", summary: "The Nasrid palaces' carved paradise — Spain's most visited monument.", practicalNotes: ["Nasrid Palace slots sell out weeks ahead"], seniorNotes: ["Long but largely flat visit; allow 3+ hours"] },
    { name: "Prado & Retiro Park, Madrid", category: "museum", summary: "Velázquez and Goya, then rowboats under the Crystal Palace.", accessibilityNotes: ["Prado fully accessible"] },
    { name: "Seville: Cathedral, Alcázar & flamenco", category: "culture", summary: "The Giralda tower, Moorish gardens and a night of raw flamenco.", bestTimeOfDay: "evening flamenco shows" },
    { name: "Tapas crawl", category: "food", summary: "Bar-hopping jamón, tortilla and vermút the local way.", idealFor: ["food", "friends", "couple"], bestTimeOfDay: "from 8:30pm" },
  ]),

  ...attractions("austria", [
    { name: "Schönbrunn Palace & gardens", category: "culture", summary: "The Habsburgs' summer palace, maze gardens and the Gloriette view.", childNotes: ["World's oldest zoo adjoins the gardens"], accessibilityNotes: ["Palace tour is lift-accessible"] },
    { name: "Vienna coffee-house evening & concert", category: "experience", summary: "Sachertorte in gilded cafés, then Mozart in a chandelier hall.", seniorNotes: ["Seated elegance — ideal evening pace"] },
    { name: "Salzburg old town & fortress", category: "culture", summary: "Mozart's birthplace beneath the Hohensalzburg's funicular-served ramparts.", seniorNotes: ["Funicular avoids the fortress climb"] },
    { name: "Hallstatt lakeside village", category: "nature", summary: "The postcard alpine village between mirror lake and salt-mine mountain.", practicalNotes: ["Stay overnight or arrive before 9am — day crowds are heavy"] },
    { name: "Sound of Music tour", category: "experience", summary: "The lakes, gazebos and abbey of the beloved film's locations.", idealFor: ["family", "seniors", "culture"] },
    { name: "Prater & Giant Ferris Wheel", category: "theme-park", summary: "Vienna's 1897 wheel and old-world funfair.", childNotes: ["Gentle classic rides suit younger children"] },
  ]),

  ...attractions("czech-republic", [
    { name: "Charles Bridge at dawn", category: "landmark", summary: "Baroque statues over the Vltava — empty and misty at sunrise.", bestTimeOfDay: "before 8am" },
    { name: "Prague Castle complex", category: "culture", summary: "St Vitus Cathedral, Golden Lane and the largest ancient castle on earth.", physicalIntensity: "medium", seniorNotes: ["Tram 22 reaches the top gate — walk down, not up"] },
    { name: "Old Town Square & Astronomical Clock", category: "landmark", summary: "The medieval heart with the hourly parade of apostles.", practicalNotes: ["Clock show is brief — the square itself is the star"] },
    { name: "Vltava evening cruise", category: "experience", summary: "Bridges and the lit castle from the river at dusk.", accessibilityNotes: ["Main piers offer step-free boarding"] },
    { name: "Český Krumlov day trip", category: "culture", summary: "A fairy-tale walled town looped by the river beneath its castle tower.", practicalNotes: ["3 hours by bus/car each way — start early"] },
    { name: "Czech beer hall dinner", category: "food", summary: "Goulash, dumplings and the world's best lager in vaulted cellars.", idealFor: ["friends", "food", "couple"] },
  ]),

  ...attractions("australia", [
    { name: "Sydney Opera House & Harbour Bridge", category: "landmark", summary: "Tour the sails, climb the bridge or ferry beneath both.", practicalNotes: ["BridgeClimb needs pre-booking and closed shoes"], seniorNotes: ["Ferry ride delivers the views with zero effort"] },
    { name: "Great Barrier Reef snorkel/dive day", category: "nature", summary: "Pontoon or boat day on the outer reef from Cairns.", childNotes: ["Pontoon platforms suit non-swimmers with underwater observatories"], practicalNotes: ["Stinger suits in season; reef-safe sunscreen only"] },
    { name: "Blue Mountains & Scenic World", category: "nature", summary: "The Three Sisters, cliff railways and eucalyptus valleys.", seniorNotes: ["Cableways make the valley floor accessible"] },
    { name: "Great Ocean Road & Twelve Apostles", category: "nature", summary: "Australia's most scenic drive to the limestone sea stacks.", practicalNotes: ["Full-day from Melbourne; sunset light is best"] },
    { name: "Wildlife encounters: kangaroos & koalas", category: "nature", summary: "Sanctuary mornings with roos, wombats and koala photo sessions.", childNotes: ["Hand-feeding kangaroos is a guaranteed highlight"] },
    { name: "Melbourne laneways & coffee crawl", category: "food", summary: "Street art alleys and the flat-white culture that started it all.", idealFor: ["food", "couple", "solo"] },
  ]),

  ...attractions("new-zealand", [
    { name: "Milford Sound cruise", category: "nature", summary: "Waterfalls off mile-high cliffs in Fiordland — rain makes it better.", practicalNotes: ["Long day from Queenstown; flightseeing return option"], seniorNotes: ["Fully seated cruise; terminals accessible"] },
    { name: "Queenstown adventure day", category: "adventure", summary: "Bungy's birthplace: jet boats, gondola luge and the Nevis swing.", minimumAge: 10, unsuitableFor: ["heart conditions on major thrill rides"], childNotes: ["Luge and jet boat suit families; bungy is 10+"] },
    { name: "Hobbiton Movie Set", category: "experience", summary: "The Shire's 44 hobbit holes and a drink at the Green Dragon.", idealFor: ["family", "culture", "friends"] },
    { name: "Rotorua geothermal & Māori culture", category: "culture", summary: "Geysers, mud pools and a hāngī feast with a cultural performance.", childNotes: ["Boiling mud fascinates kids — stay on boardwalks"] },
    { name: "Waitomo glow-worm caves", category: "nature", summary: "Silent boat ride under a living galaxy of blue lights.", seniorNotes: ["Standard tour has stairs; boat section is seated"] },
    { name: "Lake Tekapo & Mt Cook stargazing", category: "nature", summary: "Turquoise lake, lupins and a Dark Sky Reserve's blazing night skies.", bestTimeOfDay: "night", practicalNotes: ["Dress very warmly for night sessions year-round"] },
  ]),

  ...attractions("south-africa", [
    { name: "Kruger Big Five safari", category: "nature", summary: "Dawn and dusk game drives among lion, leopard and elephant.", childNotes: ["Private reserves accept younger children more flexibly than some lodges"], bestTimeOfDay: "dawn", practicalNotes: ["Winter (Jun–Sep) gives the best sightings"] },
    { name: "Table Mountain cableway", category: "nature", summary: "Rotating cable car to Cape Town's flat-topped icon.", practicalNotes: ["Goes clear-day only — take the first gap in the weather"], accessibilityNotes: ["Upper paths partially wheelchair-accessible"] },
    { name: "Cape Peninsula: Cape Point & penguins", category: "nature", summary: "Chapman's Peak drive, the Cape of Good Hope and Boulders Beach penguins.", childNotes: ["Boardwalk penguin viewing delights all ages"] },
    { name: "Winelands: Stellenbosch & Franschhoek", category: "food", summary: "Cape Dutch estates, tram-hopped tastings and long vineyard lunches.", idealFor: ["couple", "food", "friends"], seniorNotes: ["Wine tram offers effortless estate-hopping"] },
    { name: "V&A Waterfront & Robben Island", category: "culture", summary: "Harbour dining plus the ferry to Mandela's prison island.", practicalNotes: ["Robben Island ferries sell out and are sea-dependent — book early"] },
    { name: "Hermanus whale watching (seasonal)", category: "nature", summary: "Southern right whales breach metres off the cliffs, roughly June–November.", practicalNotes: ["Seasonal — verify sightings window"] },
  ]),
];
