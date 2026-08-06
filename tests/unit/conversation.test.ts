import { describe, expect, it } from "vitest";
import { processChatTurn } from "@/services/conversation/engine";
import { getSessionStore } from "@/repositories/sessions";

describe("conversation intelligence", () => {
  it("acknowledges everything it understood from a rich first message", async () => {
    const session = await getSessionStore().create();
    const turn = await processChatTurn(
      session,
      "We are a family from Mumbai, 7 nights in December, kids are 6 and 10, relaxed pace, we love food",
    );
    // A rich first message completes the essentials in one go — the reply is
    // the full understanding moment, not another question.
    expect(turn.assistantMessage).toContain("Here's what I've understood");
    expect(turn.assistantMessage).toContain("7 nights");
    expect(turn.assistantMessage).toContain("December");
    expect(turn.assistantMessage).toContain("children aged 6 and 10");
    expect(turn.assistantMessage).toMatch(/show your matches/i);
    expect(turn.awaitingField).toBeUndefined();
  });

  it("answers destination questions from KTIE with honesty built in", async () => {
    const session = await getSessionStore().create();
    const turn = await processChatTurn(session, "Tell me about Bali?");
    expect(turn.assistantMessage).toContain("Bali");
    expect(turn.assistantMessage.toLowerCase()).toContain("trade-off");
    expect(turn.assistantMessage).toContain("?"); // always moves the plan forward
  });

  it("answers best-time questions with strongest and riskiest months", async () => {
    const session = await getSessionStore().create();
    const turn = await processChatTurn(session, "When is the best time to visit Maldives?");
    expect(turn.assistantMessage).toContain("Maldives");
    expect(turn.assistantMessage).toMatch(/January|February|March/);
    expect(turn.assistantMessage.toLowerCase()).toContain("which month");
  });

  it("gives a grounded seasonal shortlist to undecided travellers with a month", async () => {
    const session = await getSessionStore().create();
    await processChatTurn(session, "Thinking of travelling in June");
    const turn = await processChatTurn(session, "but honestly no idea where to go");
    expect(turn.assistantMessage).toContain("June");
    expect(turn.assistantMessage.toLowerCase()).toContain("seasonal best");
  });
});
