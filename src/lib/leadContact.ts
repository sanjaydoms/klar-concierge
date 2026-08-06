/**
 * Browser-side contact storage for the welcome step. Details captured before
 * the conversation live ONLY in the visitor's own browser — the server never
 * sees them until the existing CRM enquiry is submitted, preserving the
 * no-PII-at-rest architecture. Clearing browser data clears them.
 */
export type LeadContact = {
  name: string;
  phone: string;
  email: string;
  city?: string;
  consent: true;
  themeKey?: string;
  capturedAt: string;
};

const KEY = "klar-lead-contact";
const SKIP_KEY = "klar-lead-skipped";

export function saveLeadContact(contact: LeadContact): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(contact));
  } catch {
    // Storage unavailable (private mode) — the enquiry form still works later.
  }
}

export function loadLeadContact(): LeadContact | undefined {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw) as LeadContact;
    return parsed && parsed.consent === true && parsed.name ? parsed : undefined;
  } catch {
    return undefined;
  }
}

export function markWelcomeSkipped(): void {
  try {
    window.sessionStorage.setItem(SKIP_KEY, "1");
  } catch { /* fine */ }
}

/** Welcome shows once per visit — captured contact or an explicit skip hides it. */
export function welcomeAlreadyHandled(): boolean {
  try {
    return Boolean(window.sessionStorage.getItem(SKIP_KEY)) || Boolean(loadLeadContact());
  } catch {
    return false;
  }
}
