import type { CRMHealth, CRMLeadPayload, CRMProvider, CRMSubmissionResult } from "@/types/crm";

/**
 * The explicit no-integration provider. It never calls a vendor, never invents
 * an external CRM reference and never pretends a submission occurred. While it
 * is active the UI must not collect PII for a fake handover.
 */
export class PlaceholderCRMProvider implements CRMProvider {
  readonly id = "placeholder";
  readonly name = "No CRM integration configured";

  async submitLead(
    _payload: CRMLeadPayload,
    _options: { idempotencyKey: string },
  ): Promise<CRMSubmissionResult> {
    return {
      success: false,
      status: "disabled",
      errorCode: "CRM_DISABLED",
      errorMessage: "CRM/RMS integration is not configured. No customer data was transmitted or stored.",
    };
  }

  async health(): Promise<CRMHealth> {
    return {
      healthy: true,
      provider: this.id,
      detail: "CRM handover is not configured. The decision engine is fully usable; expert handover activates when Klar connects the CRM.",
    };
  }
}

export type WebhookCRMConfig = {
  webhookUrl: string;
  webhookToken: string;
  timeoutMs: number;
};

/** HTTPS webhook delivery: bearer auth + idempotency header + timeout. */
export class WebhookCRMProvider implements CRMProvider {
  readonly id = "webhook";
  readonly name = "Webhook CRM delivery";

  constructor(private cfg: WebhookCRMConfig) {
    if (!cfg.webhookUrl || !cfg.webhookUrl.startsWith("https://")) {
      throw new Error("WebhookCRMProvider requires an HTTPS CRM_WEBHOOK_URL");
    }
    if (!cfg.webhookToken) {
      throw new Error("WebhookCRMProvider requires CRM_WEBHOOK_TOKEN");
    }
  }

  async submitLead(
    payload: CRMLeadPayload,
    options: { idempotencyKey: string },
  ): Promise<CRMSubmissionResult> {
    try {
      const response = await fetch(this.cfg.webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.cfg.webhookToken}`,
          "Idempotency-Key": options.idempotencyKey,
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(this.cfg.timeoutMs),
      });
      if (!response.ok) {
        return {
          success: false,
          status: "failed",
          errorCode: `HTTP_${response.status}`,
          errorMessage: "The Klar team's system did not accept the handover just now.",
        };
      }
      let crmReferenceId: string | undefined;
      try {
        const body = (await response.json()) as { referenceId?: string; id?: string };
        crmReferenceId = body.referenceId ?? body.id;
      } catch {
        // Body optional — delivery already succeeded.
      }
      return { success: true, status: "submitted", crmReferenceId };
    } catch (error) {
      const timedOut = error instanceof Error && error.name === "TimeoutError";
      return {
        success: false,
        status: "failed",
        errorCode: timedOut ? "TIMEOUT" : "NETWORK_ERROR",
        errorMessage: "The handover did not complete. Your plan is safe in this session — please try again.",
      };
    }
  }

  async health(): Promise<CRMHealth> {
    return { healthy: true, provider: this.id, detail: "Webhook provider configured." };
  }
}

export type CRMFactoryConfig = {
  crmEnabled: boolean;
  crmProvider: string;
  crmWebhookUrl: string;
  crmWebhookToken: string;
  crmTimeoutMs: number;
};

/**
 * Provider factory. When CRM is enabled but misconfigured this throws —
 * the app must never silently fall back to the placeholder.
 */
export function createCRMProvider(cfg: CRMFactoryConfig): CRMProvider {
  if (!cfg.crmEnabled) return new PlaceholderCRMProvider();
  switch (cfg.crmProvider) {
    case "webhook":
      return new WebhookCRMProvider({
        webhookUrl: cfg.crmWebhookUrl,
        webhookToken: cfg.crmWebhookToken,
        timeoutMs: cfg.crmTimeoutMs,
      });
    default:
      throw new Error(`Unsupported CRM provider: ${cfg.crmProvider}`);
  }
}
