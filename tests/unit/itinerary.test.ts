import { describe, expect, it } from "vitest";
import { composeItinerary } from "@/services/itinerary/composer";
import { getDestination } from "@/repositories/knowledge";
import { emptyBrief, type TravelBrief } from "@/types/brief";

const bali = () => getDestination("bali")!;

function brief(overrides: Partial<TravelBrief> = {}): TravelBrief {
  return {
    ...emptyBrief("test"),
    travelMonth: 6,
    durationNights: 6,
    travellerType: "couple",
    pace: "balanced",
    ...overrides,
  };
}

describe("itinerary composer", () => {
  it("produces nights + 1 structured days", () => {
    const days = composeItinerary(bali(), brief({ durationNights: 6 }));
    expect(days).toHaveLength(7);
    for (const day of days) {
      expect(day.baseLocation).toBe("Bali");
      expect(Array.isArray(day.morning)).toBe(true);
      expect(Array.isArray(day.afternoon)).toBe(true);
      expect(Array.isArray(day.evening)).toBe(true);
    }
  });

  it("clamps to destination minimum and maximum nights", () => {
    expect(composeItinerary(bali(), brief({ durationNights: 1 }))).toHaveLength(bali().minimumNights + 1);
    expect(composeItinerary(bali(), brief({ durationNights: 25 }))).toHaveLength(bali().maximumNights + 1);
  });

  it("frames arrival and departure days correctly", () => {
    const days = composeItinerary(bali(), brief());
    expect(days[0].morning[0].title).toContain("Arrive");
    expect(days.at(-1)!.afternoon[0].title).toContain("Departure");
  });

  it("never repeats the same attraction", () => {
    const days = composeItinerary(bali(), brief({ durationNights: 9, pace: "active" }));
    const ids = days
      .flatMap((d) => [...d.morning, ...d.afternoon, ...d.evening])
      .map((b) => b.attractionId)
      .filter(Boolean);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("provides weather alternatives for weather-sensitive main blocks", () => {
    const days = composeItinerary(bali(), brief({ pace: "active", durationNights: 6 }));
    const sensitiveDays = days.filter((d) => d.weatherAlternative);
    expect(sensitiveDays.length).toBeGreaterThan(0);
  });

  it("filters out age-gated and high-intensity attractions for toddlers", () => {
    const krabi = getDestination("krabi")!;
    const days = composeItinerary(krabi, brief({ travellerType: "family", childrenAges: [2], adults: 2 }));
    const titles = days.flatMap((d) => [...d.morning, ...d.afternoon, ...d.evening]).map((b) => b.title);
    expect(titles).not.toContain("Tiger Cave Temple climb");
  });

  it("adds senior transport notes when seniors travel", () => {
    const days = composeItinerary(bali(), brief({ seniorTravellers: 2 }));
    expect(days.flatMap((d) => d.seniorNotes).join(" ")).toContain("transport");
  });

  it("adds an accessibility follow-up note when needs are recorded", () => {
    const days = composeItinerary(bali(), brief({ accessibilityNeeds: ["wheelchair access"] }));
    expect(days.flatMap((d) => d.accessibilityNotes).join(" ").toLowerCase()).toContain("accessibility");
  });

  it("never claims bookings, reservations or availability", () => {
    const text = JSON.stringify(composeItinerary(bali(), brief())).toLowerCase();
    expect(text).not.toContain("booked");
    expect(text).not.toContain("reserved");
    expect(text).not.toContain("availability");
  });
});
