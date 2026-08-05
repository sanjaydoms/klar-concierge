import type { TravelBrief } from "./brief";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  createdAt: string;
};

/**
 * Anonymous planning session. Never contains customer PII — names, phone
 * numbers and emails go only to the CRM at handover and are never stored here.
 */
export type PlanningSession = {
  id: string;
  brief: TravelBrief;
  messages: ChatMessage[];
  turnIndex: number;
  selectedDestinationSlug?: string;
  createdAt: string;
  updatedAt: string;
  expiresAt: string;
};
