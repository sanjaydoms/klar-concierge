import { describe, expect, it } from "vitest";
import {
  aggregateDaily,
  climateComfortScore,
  humidityLevel,
  rainfallLevel,
  reconcileSeasonScore,
  seasonLabelFor,
  temperatureBand,
} from "../../scripts/lib/climate";
import { DESTINATION_GEO } from "../../scripts/lib/coordinates";
import { getAllDestinations } from "@/repositories/knowledge";

describe("deterministic climate mapping (measured data → bands)", () => {
  it("maps mean max temperature to bands at documented thresholds", () => {
    expect(temperatureBand(5)).toBe("cold");
    expect(temperatureBand(12)).toBe("cool");
    expect(temperatureBand(20)).toBe("mild");
    expect(temperatureBand(28)).toBe("warm");
    expect(temperatureBand(35)).toBe("hot");
  });

  it("maps monthly precipitation to rainfall levels", () => {
    expect(rainfallLevel(20)).toBe("low");
    expect(rainfallLevel(100)).toBe("medium");
    expect(rainfallLevel(300)).toBe("high");
  });

  it("maps relative humidity to levels", () => {
    expect(humidityLevel(40)).toBe("low");
    expect(humidityLevel(60)).toBe("medium");
    expect(humidityLevel(85)).toBe("high");
  });

  it("comfort score punishes monsoon heat and rewards mild dry weather", () => {
    const monsoon = climateComfortScore({ month: 7, meanMaxC: 33, precipMm: 350, humidityPct: 85 });
    const pleasant = climateComfortScore({ month: 10, meanMaxC: 26, precipMm: 30, humidityPct: 55 });
    expect(pleasant).toBeGreaterThan(80);
    expect(monsoon).toBeLessThan(45);
  });

  it("clamps season scores that contradict measured weather, never inflates", () => {
    const monsoon = { month: 7, meanMaxC: 33, precipMm: 350, humidityPct: 85 };
    // A "95 = excellent" claim during heavy monsoon gets pulled down…
    expect(reconcileSeasonScore(95, monsoon)).toBeLessThan(80);
    // …a modest score stays untouched, and good weather never boosts scores.
    expect(reconcileSeasonScore(55, monsoon)).toBe(55);
    const pleasant = { month: 10, meanMaxC: 26, precipMm: 30, humidityPct: 55 };
    expect(reconcileSeasonScore(40, pleasant)).toBe(40);
  });

  it("season labels match the authoring thresholds", () => {
    expect(seasonLabelFor(85)).toBe("Excellent time to visit");
    expect(seasonLabelFor(70)).toBe("Good season");
    expect(seasonLabelFor(55)).toBe("Shoulder season");
    expect(seasonLabelFor(30)).toBe("Off season");
  });

  it("aggregates daily archive rows into 12 monthly normals", () => {
    const time: string[] = [];
    const tmax: number[] = [];
    const precip: number[] = [];
    const rh: number[] = [];
    for (let m = 1; m <= 12; m++) {
      for (let day = 1; day <= 28; day++) {
        time.push(`2023-${String(m).padStart(2, "0")}-${String(day).padStart(2, "0")}`);
        tmax.push(20 + m);
        precip.push(2);
        rh.push(60);
      }
    }
    const months = aggregateDaily({
      time,
      temperature_2m_max: tmax,
      precipitation_sum: precip,
      relative_humidity_2m_mean: rh,
    });
    expect(months).toHaveLength(12);
    expect(months[0].meanMaxC).toBe(21);
    expect(months[11].meanMaxC).toBe(32);
    expect(months[0].precipMm).toBe(56); // 28 days × 2mm in one year
  });
});

describe("coordinates registry", () => {
  it("covers every destination in the knowledge base", () => {
    for (const d of getAllDestinations()) {
      expect(DESTINATION_GEO[d.slug], `coordinates for ${d.slug}`).toBeDefined();
    }
  });
});
