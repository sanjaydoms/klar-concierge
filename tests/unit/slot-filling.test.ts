import { describe, expect, it } from "vitest";
import { processChatTurn } from "@/services/conversation/engine";
import { isUnreadableMessage, parseAwaitedAnswer } from "@/services/conversation/slotFill";
import { getSessionStore } from "@/repositories/sessions";

describe("slot filling — bare answers land in the right field", () => {
  it('parses "9" as nights when nights was asked', () => {
    const result = parseAwaitedAnswer("9", "durationNights");
    expect(result).toEqual({ kind: "filled", patch: { durationNights: 9 } });
  });

  it('parses "nine" and "maybe 9" too', () => {
    expect(parseAwaitedAnswer("nine", "durationNights")).toEqual({
      kind: "filled",
      patch: { durationNights: 9 },
    });
    expect(parseAwaitedAnswer("maybe 9", "durationNights")).toEqual({
      kind: "filled",
      patch: { durationNights: 9 },
    });
  });

  it("rejects impossible night counts with an honest reply", () => {
    const result = parseAwaitedAnswer("99", "durationNights");
    expect(result.kind).toBe("invalid");
    if (result.kind === "invalid") expect(result.reply).toContain("45");
  });

  it("parses a bare month number and rejects month 13", () => {
    expect(parseAwaitedAnswer("3", "travelMonth")).toEqual({
      kind: "filled",
      patch: { travelMonth: 3 },
    });
    expect(parseAwaitedAnswer("13", "travelMonth").kind).toBe("invalid");
  });

  it("parses children's ages from a short answer", () => {
    expect(parseAwaitedAnswer("6 and 10", "childrenAges")).toEqual({
      kind: "filled",
      patch: { childrenAges: [6, 10] },
    });
  });

  it("accepts a bare city name for origin", () => {
    expect(parseAwaitedAnswer("guwahati", "originCity")).toEqual({
      kind: "filled",
      patch: { originCity: "Guwahati", originCountry: "India" },
    });
  });

  it("flags emoji-only and symbol-only messages as unreadable", () => {
    expect(isUnreadableMessage("❤️")).toBe(true);
    expect(isUnreadableMessage("!!!")).toBe(true);
    expect(isUnreadableMessage("9")).toBe(false);
    expect(isUnreadableMessage("food")).toBe(false);
  });
});

describe("conversation honesty on unusable input", () => {
  it('fills nights when the user answers "9" to the nights question', async () => {
    const session = await getSessionStore().create();
    await processChatTurn(session, "We are a couple from Delhi travelling in March");
    // The engine asked for nights next; a bare number must answer it.
    expect(session.awaitingField).toBe("durationNights");
    await processChatTurn(session, "9");
    expect(session.brief.durationNights).toBe(9);
  });

  it("never says 'Got it' to an emoji — it re-asks honestly", async () => {
    const session = await getSessionStore().create();
    await processChatTurn(session, "We are a couple from Delhi travelling in March");
    const turn = await processChatTurn(session, "❤️");
    expect(turn.assistantMessage).toContain("couldn't make sense");
    expect(turn.assistantMessage).not.toContain("Got it");
    expect(session.brief.durationNights).toBeUndefined();
  });

  it("admits when a message taught it nothing instead of faking understanding", async () => {
    const session = await getSessionStore().create();
    await processChatTurn(session, "We are a couple from Delhi travelling in March");
    const turn = await processChatTurn(session, "hmm okay whatever");
    expect(turn.assistantMessage).toContain("didn't quite catch");
  });
});
