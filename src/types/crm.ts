import type { TravelBrief } from "./brief";
import type { ItineraryDay, RecommendationDirection } from "./recommendation";

/**
 * The qualified payload delivered to the CRM/RMS at handover. This is the only
 * place customer PII appears — Klar Concierge does not persist it.
 */
export type CRMLeadPayload = {
  source: "klar-concierge";
  idempotencyKey: string;

  customer: {
    name: string;
    phone: string;
    email: string;
    city?: string;
    preferredContactChannel: "phone" | "email" | "whatsapp";
    preferredContactTime?: string;
    additionalNotes?: string;
    consent: true;
    consentTimestamp: string;
  };

  tripBrief: TravelBrief;
  selectedDestinationSlug: string;
  selectedDirection?: RecommendationDirection;
  itinerary: ItineraryDay[];
  conversationSummary: string;
};

export type CRMSubmissionResult = {
  success: boolean;
  status: "disabled" | "submitted" | "failed";
  crmReferenceId?: string;
  errorCode?: string;
  errorMessage?: string;
};

export type CRMHealth = {
  healthy: boolean;
  provider: string;
  detail: string;
};

export interface CRMProvider {
  readonly id: string;
  readonly name: string;
  submitLead(
    payload: CRMLeadPayload,
    options: { idempotencyKey: string },
  ): Promise<CRMSubmissionResult>;
  health(): Promise<CRMHealth>;
}
