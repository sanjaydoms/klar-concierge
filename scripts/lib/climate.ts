/**
 * Deterministic climate interpretation — pure functions that turn measured
 * monthly aggregates (from the Open-Meteo historical archive) into the
 * knowledge base's band values. No AI involved: measured numbers in,
 * reproducible bands out. Thresholds documented here are the single source
 * of truth and are unit-tested.
 */
import type { MonthIntelligence } from "../../src/types/knowledge";

export type MonthlyClimate = {
  month: number; // 1-12
  /** Mean daily maximum temperature, °C */
  meanMaxC: number;
  /** Mean monthly precipitation total, mm */
  precipMm: number;
  /** Mean relative humidity, % */
  humidityPct: number;
};

export function temperatureBand(meanMaxC: number): MonthIntelligence["temperatureBand"] {
  if (meanMaxC < 10) return "cold";
  if (meanMaxC < 17) return "cool";
  if (meanMaxC < 24) return "mild";
  if (meanMaxC < 31) return "warm";
  return "hot";
}

export function rainfallLevel(precipMm: number): MonthIntelligence["rainfall"] {
  if (precipMm < 60) return "low";
  if (precipMm <= 150) return "medium";
  return "high";
}

export function humidityLevel(humidityPct: number): MonthIntelligence["humidity"] {
  if (humidityPct < 55) return "low";
  if (humidityPct <= 70) return "medium";
  return "high";
}

/**
 * A measured-comfort score (0-100) for a month: how pleasant the weather
 * alone is for a typical leisure traveller. Season scores in the knowledge
 * base also encode events, colours and crowds — so this is used as a sanity
 * bound, not a replacement.
 */
export function climateComfortScore(c: MonthlyClimate): number {
  let score = 100;
  // Temperature: ideal band 18-29°C mean max, penalise distance from it
  if (c.meanMaxC < 18) score -= Math.min(50, (18 - c.meanMaxC) * 3.5);
  if (c.meanMaxC > 29) score -= Math.min(45, (c.meanMaxC - 29) * 4.5);
  // Rain: light rain is fine, monsoon is not
  if (c.precipMm > 60) score -= Math.min(40, (c.precipMm - 60) / 6);
  // Oppressive humidity
  if (c.humidityPct > 70) score -= Math.min(15, (c.humidityPct - 70) / 2);
  return Math.max(0, Math.round(score));
}

/**
 * Reconcile a curated season score with measured climate. Curated scores may
 * legitimately exceed pure weather comfort (festivals, wildlife, snow sports)
 * — but a month marketed as excellent while the sky dumps monsoon rain is a
 * data error. Clamp only egregious contradictions, and never inflate.
 */
export function reconcileSeasonScore(curated: number, measured: MonthlyClimate): number {
  const comfort = climateComfortScore(measured);
  if (curated - comfort > 30) return comfort + 20; // keep some event headroom
  return curated;
}

/** Season label thresholds — must match the authoring builders. */
export function seasonLabelFor(score: number): string {
  if (score >= 80) return "Excellent time to visit";
  if (score >= 65) return "Good season";
  if (score >= 50) return "Shoulder season";
  return "Off season";
}

/** Aggregate Open-Meteo daily archive rows into monthly climate normals. */
export function aggregateDaily(rows: {
  time: string[];
  temperature_2m_max: (number | null)[];
  precipitation_sum: (number | null)[];
  relative_humidity_2m_mean: (number | null)[];
}): MonthlyClimate[] {
  type Acc = { tSum: number; tN: number; pSum: number; hSum: number; hN: number; years: Set<string> };
  const byMonth = new Map<number, Acc>();
  for (let i = 0; i < rows.time.length; i++) {
    const date = rows.time[i];
    const month = parseInt(date.slice(5, 7), 10);
    const acc = byMonth.get(month) ?? { tSum: 0, tN: 0, pSum: 0, hSum: 0, hN: 0, years: new Set() };
    const t = rows.temperature_2m_max[i];
    const p = rows.precipitation_sum[i];
    const h = rows.relative_humidity_2m_mean[i];
    if (t !== null && t !== undefined) { acc.tSum += t; acc.tN += 1; }
    if (p !== null && p !== undefined) { acc.pSum += p; acc.years.add(date.slice(0, 4)); }
    if (h !== null && h !== undefined) { acc.hSum += h; acc.hN += 1; }
    byMonth.set(month, acc);
  }
  const result: MonthlyClimate[] = [];
  for (let m = 1; m <= 12; m++) {
    const acc = byMonth.get(m);
    if (!acc || acc.tN === 0) throw new Error(`No climate data for month ${m}`);
    result.push({
      month: m,
      meanMaxC: Math.round((acc.tSum / acc.tN) * 10) / 10,
      precipMm: Math.round(acc.pSum / Math.max(1, acc.years.size)),
      humidityPct: Math.round(acc.hSum / Math.max(1, acc.hN)),
    });
  }
  return result;
}
