import { describe, expect, it } from "vitest";
import { createCRMProvider, PlaceholderCRMProvider } from "@/services/crm/providers";
import { maskEmail, maskPhone, redactForTelemetry } from "@/lib/privacy";
import { sanitiseProps } from "@/services/analytics";
import type { CRMLeadPayload } from "@/types/crm";
import { emptyBrief } from "@/types/brief";

const baseConfig = {
  crmEnabled: false,
  crmProvider: "placeholder",
  crmWebhookUrl: "",
  crmWebhookToken: "",
  crmTimeoutMs: 8000,
};

const payload: CRMLeadPayload = {
  source: "klar-concierge",
  idempotencyKey: "idem-1",
  customer: {
    name: "Test Customer",
    phone: "+911234567890",
    email: "test@example.com",
    preferredContactChannel: "whatsapp",
    consent: true,
    consentTimestamp: new Date().toISOString(),
  },
  tripBrief: emptyBrief("x"),
  selectedDestinationSlug: "bali",
  itinerary: [],
  conversationSummary: "test",
};

describe("CRM provider factory", () => {
  it("returns the placeholder when CRM is disabled", () => {
    expect(createCRMProvider(baseConfig).id).toBe("placeholder");
  });

  it("throws instead of silently falling back when enabled but misconfigured", () => {
    expect(() => createCRMProvider({ ...baseConfig, crmEnabled: true, crmProvider: "webhook" })).toThrow();
    expect(() => createCRMProvider({ ...baseConfig, crmEnabled: true, crmProvider: "vendor-x" })).toThrow();
  });

  it("creates a webhook provider with valid HTTPS config", () => {
    const provider = createCRMProvider({
      ...baseConfig,
      crmEnabled: true,
      crmProvider: "webhook",
      crmWebhookUrl: "https://crm.example.com/leads",
      crmWebhookToken: "secret",
    });
    expect(provider.id).toBe("webhook");
  });
});

describe("placeholder truthfulness", () => {
  it("never claims success and never invents a CRM reference", async () => {
    const provider = new PlaceholderCRMProvider();
    const result = await provider.submitLead(payload, { idempotencyKey: "idem-1" });
    expect(result.success).toBe(false);
    expect(result.status).toBe("disabled");
    expect(result.crmReferenceId).toBeUndefined();
  });
});

describe("PII redaction", () => {
  it("masks emails and phones", () => {
    expect(maskEmail("ravi@example.com")).toBe("r***@e***");
    expect(maskPhone("+911234567890")).toMatch(/\*+90$/);
  });

  it("strips PII keys from telemetry objects recursively", () => {
    const redacted = redactForTelemetry({
      status: "failed",
      customer: { name: "Ravi", phone: "123" },
      customerEmail: "x@y.com",
      nested: { errorCode: "TIMEOUT", name: "leak" },
    });
    expect(JSON.stringify(redacted)).not.toContain("Ravi");
    expect(JSON.stringify(redacted)).not.toContain("x@y.com");
    expect((redacted.nested as Record<string, unknown>).errorCode).toBe("TIMEOUT");
  });

  it("analytics props drop PII-shaped keys and long strings", () => {
    const clean = sanitiseProps({
      destination: "bali",
      customerName: "Ravi",
      email: "x@y.com",
      long: "a".repeat(200),
    });
    expect(clean).toEqual({ destination: "bali" });
  });
});
