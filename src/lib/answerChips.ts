/**
 * One-tap answers for the exact question the planner is currently asking.
 * The chip row must always match the open question — a "budget" chip while
 * the assistant asks "who's travelling?" reads as broken, so chips are keyed
 * strictly by the awaited brief field. Every send text below is covered by a
 * unit test proving the conversation engine parses it into the intended field.
 */
export type AnswerChip = { label: string; send: string };

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function answerChipsFor(field: string | null, now = new Date()): AnswerChip[] {
  switch (field) {
    case "travelMonth": {
      const current = now.getMonth();
      return Array.from({ length: 6 }, (_, i) => {
        const name = MONTH_NAMES[(current + 1 + i) % 12];
        return { label: name, send: `In ${name}` };
      });
    }
    case "durationNights":
      return ["4 nights", "5 nights", "7 nights", "10 nights", "2 weeks"].map((t) => ({
        label: t,
        send: t,
      }));
    case "travellerType":
      return [
        { label: "A couple", send: "A couple's getaway" },
        { label: "Family with children", send: "Family with children" },
        { label: "Honeymoon", send: "Honeymoon" },
        { label: "Friends", send: "Friends trip" },
        { label: "Solo", send: "Travelling solo" },
        { label: "With my parents", send: "With my parents" },
      ];
    case "childrenAges":
      return [
        { label: "Under 5", send: "Ages 2 and 4" },
        { label: "5–9 years", send: "Ages 6 and 9" },
        { label: "10–12 years", send: "Ages 10 and 12" },
        { label: "Teenagers", send: "Ages 14 and 16" },
      ];
    case "pace":
      return [
        { label: "Relaxed", send: "Relaxed pace" },
        { label: "Balanced", send: "Balanced mix" },
        { label: "Active", send: "Active and packed" },
      ];
    case "interests":
      return [
        { label: "Beaches", send: "Beaches" },
        { label: "Mountains & nature", send: "Mountains and nature" },
        { label: "Culture & history", send: "Culture and history" },
        { label: "Food", send: "Food experiences" },
        { label: "Wildlife", send: "Wildlife and safari" },
        { label: "Shopping", send: "Shopping and markets" },
      ];
    case "originCity":
      return ["Hyderabad", "Mumbai", "Delhi", "Bengaluru", "Chennai", "Kolkata"].map((c) => ({
        label: c,
        send: `From ${c}`,
      }));
    case "budgetBand":
      return [
        { label: "Value", send: "Value for money" },
        { label: "Comfortable", send: "Comfortable" },
        { label: "Premium", send: "Premium" },
        { label: "Luxury", send: "Luxury" },
      ];
    default:
      return [];
  }
}
