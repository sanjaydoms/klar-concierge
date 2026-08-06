/**
 * Free, keyless evidence sources for the autonomous knowledge pipeline:
 *
 *   - Wikipedia REST API      → encyclopedic summary + canonical URL
 *   - Wikivoyage MediaWiki API → traveller-focused page extract
 *   - Open-Meteo archive API   → measured daily climate, aggregated monthly
 *
 * All fetchers retry with backoff and fail loudly — the pipeline prefers
 * "no data" over silently stale data. These run from CI (open internet),
 * not from the app at runtime.
 */
import { aggregateDaily, type MonthlyClimate } from "./climate";

const UA = "KlarConciergeKnowledgeBot/1.0 (travel knowledge pipeline; contact: klartravels.com)";

async function getJson<T>(url: string, tries = 3): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt < tries; attempt++) {
    try {
      const response = await fetch(url, { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(30_000) });
      if (response.status === 429 || response.status >= 500) {
        throw new Error(`HTTP ${response.status}`);
      }
      if (!response.ok) throw Object.assign(new Error(`HTTP ${response.status} for ${url}`), { fatal: true });
      return (await response.json()) as T;
    } catch (err) {
      lastError = err;
      if ((err as { fatal?: boolean }).fatal) break;
      await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
    }
  }
  throw new Error(`Failed to fetch ${url}: ${lastError instanceof Error ? lastError.message : lastError}`);
}

export type WikipediaEvidence = {
  title: string;
  summary: string;
  url: string;
  accessedAt: string;
};

export async function fetchWikipediaSummary(articleTitle: string): Promise<WikipediaEvidence> {
  const data = await getJson<{
    title: string;
    extract: string;
    content_urls?: { desktop?: { page?: string } };
  }>(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(articleTitle)}`);
  return {
    title: data.title,
    summary: data.extract,
    url: data.content_urls?.desktop?.page ?? `https://en.wikipedia.org/wiki/${encodeURIComponent(articleTitle)}`,
    accessedAt: new Date().toISOString().slice(0, 10),
  };
}

export type WikivoyageEvidence = {
  title: string;
  extract: string;
  url: string;
  accessedAt: string;
};

export async function fetchWikivoyageExtract(articleTitle: string): Promise<WikivoyageEvidence | undefined> {
  const data = await getJson<{
    query?: { pages?: Record<string, { title?: string; extract?: string; missing?: string }> };
  }>(
    `https://en.wikivoyage.org/w/api.php?action=query&prop=extracts&explaintext=1&exsectionformat=plain&format=json&redirects=1&titles=${encodeURIComponent(articleTitle)}`,
  );
  const page = Object.values(data.query?.pages ?? {})[0];
  if (!page?.extract) return undefined;
  return {
    title: page.title ?? articleTitle,
    // Wikivoyage pages are long; the lead + first sections carry the travel character
    extract: page.extract.slice(0, 6000),
    url: `https://en.wikivoyage.org/wiki/${encodeURIComponent((page.title ?? articleTitle).replace(/ /g, "_"))}`,
    accessedAt: new Date().toISOString().slice(0, 10),
  };
}

export type ClimateEvidence = {
  months: MonthlyClimate[];
  periodStart: string;
  periodEnd: string;
  station: string;
  accessedAt: string;
};

/** Five full calendar years of measured daily data, aggregated to monthly normals. */
export async function fetchMeasuredClimate(
  lat: number,
  lon: number,
  station: string,
): Promise<ClimateEvidence> {
  const endYear = new Date().getFullYear() - 1;
  const startYear = endYear - 4;
  const url =
    `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}` +
    `&start_date=${startYear}-01-01&end_date=${endYear}-12-31` +
    `&daily=temperature_2m_max,precipitation_sum,relative_humidity_2m_mean&timezone=UTC`;
  const data = await getJson<{
    daily: {
      time: string[];
      temperature_2m_max: (number | null)[];
      precipitation_sum: (number | null)[];
      relative_humidity_2m_mean: (number | null)[];
    };
  }>(url);
  return {
    months: aggregateDaily(data.daily),
    periodStart: `${startYear}-01-01`,
    periodEnd: `${endYear}-12-31`,
    station,
    accessedAt: new Date().toISOString().slice(0, 10),
  };
}
