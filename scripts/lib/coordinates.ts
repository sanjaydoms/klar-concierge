/**
 * Reference coordinates per destination — the measurement point used for
 * climate data (the main tourist hub, not the geographic centroid) and the
 * Wikipedia/Wikivoyage article titles where they differ from the name.
 */
export type DestinationGeo = {
  lat: number;
  lon: number;
  station: string;
  /** Wikipedia/Wikivoyage article title when it differs from the destination name. */
  articleTitle?: string;
};

export const DESTINATION_GEO: Record<string, DestinationGeo> = {
  "abu-dhabi": { lat: 24.45, lon: 54.38, station: "Abu Dhabi" },
  australia: { lat: -33.87, lon: 151.21, station: "Sydney" },
  austria: { lat: 48.21, lon: 16.37, station: "Vienna" },
  azerbaijan: { lat: 40.41, lon: 49.87, station: "Baku" },
  bali: { lat: -8.65, lon: 115.22, station: "Denpasar" },
  bangkok: { lat: 13.76, lon: 100.5, station: "Bangkok" },
  bhutan: { lat: 27.47, lon: 89.64, station: "Thimphu" },
  cambodia: { lat: 13.36, lon: 103.86, station: "Siem Reap" },
  "czech-republic": { lat: 50.09, lon: 14.42, station: "Prague" },
  dubai: { lat: 25.2, lon: 55.27, station: "Dubai" },
  egypt: { lat: 30.04, lon: 31.24, station: "Cairo" },
  france: { lat: 48.86, lon: 2.35, station: "Paris" },
  georgia: { lat: 41.72, lon: 44.79, station: "Tbilisi", articleTitle: "Georgia (country)" },
  greece: { lat: 37.98, lon: 23.73, station: "Athens" },
  "hong-kong": { lat: 22.32, lon: 114.17, station: "Hong Kong" },
  italy: { lat: 41.9, lon: 12.5, station: "Rome" },
  japan: { lat: 35.68, lon: 139.69, station: "Tokyo" },
  kenya: { lat: -1.29, lon: 36.82, station: "Nairobi" },
  krabi: { lat: 8.09, lon: 98.91, station: "Krabi" },
  "kuala-lumpur": { lat: 3.14, lon: 101.69, station: "Kuala Lumpur" },
  langkawi: { lat: 6.35, lon: 99.8, station: "Langkawi" },
  maldives: { lat: 4.18, lon: 73.51, station: "Malé" },
  mauritius: { lat: -20.16, lon: 57.5, station: "Port Louis" },
  morocco: { lat: 31.63, lon: -8.01, station: "Marrakech" },
  nepal: { lat: 27.72, lon: 85.32, station: "Kathmandu" },
  "new-zealand": { lat: -36.85, lon: 174.76, station: "Auckland" },
  oman: { lat: 23.59, lon: 58.41, station: "Muscat" },
  phuket: { lat: 7.88, lon: 98.39, station: "Phuket" },
  portugal: { lat: 38.72, lon: -9.14, station: "Lisbon" },
  qatar: { lat: 25.29, lon: 51.53, station: "Doha" },
  seychelles: { lat: -4.62, lon: 55.45, station: "Victoria" },
  singapore: { lat: 1.35, lon: 103.82, station: "Singapore" },
  "south-africa": { lat: -33.92, lon: 18.42, station: "Cape Town" },
  "south-korea": { lat: 37.57, lon: 126.98, station: "Seoul" },
  spain: { lat: 41.39, lon: 2.17, station: "Barcelona" },
  "sri-lanka": { lat: 6.93, lon: 79.85, station: "Colombo" },
  switzerland: { lat: 46.69, lon: 7.87, station: "Interlaken" },
  turkey: { lat: 41.01, lon: 28.98, station: "Istanbul" },
  "united-kingdom": { lat: 51.51, lon: -0.13, station: "London" },
  vietnam: { lat: 21.03, lon: 105.85, station: "Hanoi" },
  // 2.3.0 additions
  uzbekistan: { lat: 41.3, lon: 69.24, station: "Tashkent" },
  almaty: { lat: 43.24, lon: 76.89, station: "Almaty" },
  armenia: { lat: 40.18, lon: 44.51, station: "Yerevan" },
  jordan: { lat: 31.95, lon: 35.93, station: "Amman" },
  zanzibar: { lat: -6.16, lon: 39.2, station: "Zanzibar City" },
};
