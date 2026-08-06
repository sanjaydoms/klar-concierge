import { describe, expect, it } from "vitest";
import { answerChipsFor } from "@/lib/answerChips";
import { processChatTurn, startWithTheme } from "@/services/conversation/engine";
import { getSessionStore } from "@/repositories/sessions";
import type { BriefField } from "@/types/brief";
import type { PlanningSession } from "@/types/session";

async function sessionAwaiting(field: BriefField): Promise<PlanningSession> {
  const session = await getSessionStore().create();
  session.awaitingField = field;
  return session;
}

/**
 * The contract behind the chip row: every one-tap answer the UI offers must
 * actually be understood by the engine as an answer to that question. A chip
 * that produces "I didn't quite catch that" is worse than no chip at all.
 */
describe("answer chips always parse into the awaited field", () => {
  it("month chips fill travelMonth", async () => {
    for (const chip of answerChipsFor("travelMonth", new Date("2026-08-06"))) {
      const session = await sessionAwaiting("travelMonth");
      await processChatTurn(session, chip.send);
      expect(session.brief.travelMonth, chip.send).toBeGreaterThanOrEqual(1);
      expect(session.brief.travelMonth, chip.send).toBeLessThanOrEqual(12);
    }
  });

  it("night chips fill durationNights", async () => {
    const expected = [4, 5, 7, 10, 14];
    const chips = answerChipsFor("durationNights");
    for (let i = 0; i < chips.length; i++) {
      const session = await sessionAwaiting("durationNights");
      await processChatTurn(session, chips[i].send);
      expect(session.brief.durationNights, chips[i].send).toBe(expected[i]);
    }
  });

  it("traveller chips fill travellerType with the right party", async () => {
    const expected: Record<string, string> = {
      "A couple's getaway": "couple",
      "Family with children": "family",
      "Honeymoon": "honeymoon",
      "Friends trip": "friends",
      "Travelling solo": "solo",
      "With my parents": "senior",
    };
    for (const chip of answerChipsFor("travellerType")) {
      const session = await sessionAwaiting("travellerType");
      await processChatTurn(session, chip.send);
      expect(session.brief.travellerType, chip.send).toBe(expected[chip.send]);
    }
  });

  it("children-age chips fill childrenAges", async () => {
    for (const chip of answerChipsFor("childrenAges")) {
      const session = await sessionAwaiting("childrenAges");
      await processChatTurn(session, chip.send);
      expect(session.brief.childrenAges.length, chip.send).toBeGreaterThan(0);
    }
  });

  it("pace chips fill pace", async () => {
    const expected: Record<string, string> = {
      "Relaxed pace": "relaxed",
      "Balanced mix": "balanced",
      "Active and packed": "active",
    };
    for (const chip of answerChipsFor("pace")) {
      const session = await sessionAwaiting("pace");
      await processChatTurn(session, chip.send);
      expect(session.brief.pace, chip.send).toBe(expected[chip.send]);
    }
  });

  it("interest chips fill interests", async () => {
    for (const chip of answerChipsFor("interests")) {
      const session = await sessionAwaiting("interests");
      await processChatTurn(session, chip.send);
      expect(session.brief.interests.length, chip.send).toBeGreaterThan(0);
    }
  });

  it("origin-city chips fill originCity with the clean city name", async () => {
    for (const chip of answerChipsFor("originCity")) {
      const session = await sessionAwaiting("originCity");
      await processChatTurn(session, chip.send);
      expect(session.brief.originCity, chip.send).toBe(chip.label);
    }
  });

  it("budget chips fill budgetBand", async () => {
    const expected: Record<string, string> = {
      "Value for money": "value",
      "Comfortable": "comfort",
      "Premium": "premium",
      "Luxury": "luxury",
    };
    for (const chip of answerChipsFor("budgetBand")) {
      const session = await sessionAwaiting("budgetBand");
      await processChatTurn(session, chip.send);
      expect(session.brief.budgetBand, chip.send).toBe(expected[chip.send]);
    }
  });

  it("no chips are offered when no question is open", () => {
    expect(answerChipsFor(null)).toHaveLength(0);
    expect(answerChipsFor("unknown-field")).toHaveLength(0);
  });
});

describe("theme flow answers each question exactly once", () => {
  it("romantic: three answers to matches, never asking who's travelling", async () => {
    const session = await getSessionStore().create();
    startWithTheme(session, "romantic");

    const asked: string[] = [];
    let final = "";
    for (const answer of ["In April", "7 nights", "From Hyderabad"]) {
      const result = await processChatTurn(session, answer);
      if (result.awaitingField) asked.push(result.awaitingField);
      expect(result.assistantMessage).not.toMatch(/who'?s travelling/i);
      final = result.assistantMessage;
    }
    expect(session.brief.travellerType).toBe("couple");
    expect(session.brief.travelMonth).toBe(4);
    expect(session.brief.durationNights).toBe(7);
    expect(session.brief.originCity).toBe("Hyderabad");
    // Three answers reached the understanding moment — the 4–6 answer promise.
    expect(final).toContain("Here's what I've understood");
    expect(session.awaitingField).toBeUndefined();
    // No question was ever repeated, and no optional question ever blocked.
    expect(new Set(asked).size).toBe(asked.length);
    expect(asked).not.toContain("pace");
    expect(asked).not.toContain("interests");
    expect(asked).not.toContain("budgetBand");
  });

  it("family: ages land from a bare answer to the opening question", async () => {
    const session = await getSessionStore().create();
    startWithTheme(session, "family");
    await processChatTurn(session, "6 and 9");
    expect(session.brief.childrenAges).toEqual([6, 9]);
  });
});
