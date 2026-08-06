import { createHash } from "node:crypto";

/**
 * Lead-capture abstraction, per the product review: CRM stays a placeholder,
 * isolated behind one interface. When Klar's CRM becomes available, implement
 * this interface against it and swap the factory — no UI changes required.
 *
 * The placeholder stores NOTHING. It issues a deterministic plan reference
 * derived from the anonymous session id, so a traveller can quote it to Klar
 * and the team can connect the conversation later. No PII at rest, ever.
 */
export type LeadCaptureInput = {
  sessionId: string;
  destinationSlug?: string;
  themeKey?: string;
};

export type LeadCaptureResult = {
  referenceId: string;
  /** True when a real CRM accepted the lead; false for the placeholder. */
  delivered: boolean;
};

export interface LeadCaptureAdapter {
  readonly id: string;
  capture(input: LeadCaptureInput): Promise<LeadCaptureResult>;
}

/** Human-friendly, deterministic per session: same session → same reference. */
export function planReference(sessionId: string): string {
  const digest = createHash("sha256").update(`klar-plan:${sessionId}`).digest("hex");
  const code = parseInt(digest.slice(0, 10), 16).toString(36).toUpperCase().slice(0, 6);
  return `KLAR-${code}`;
}

export class PlaceholderLeadAdapter implements LeadCaptureAdapter {
  readonly id = "placeholder";

  async capture(input: LeadCaptureInput): Promise<LeadCaptureResult> {
    return { referenceId: planReference(input.sessionId), delivered: false };
  }
}

export function getLeadAdapter(): LeadCaptureAdapter {
  // Future: return a CRM-backed adapter when configured. The existing
  // /api/crm/handover flow remains the delivery path once CRM is live.
  return new PlaceholderLeadAdapter();
}
