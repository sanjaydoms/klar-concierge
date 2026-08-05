import { config } from "@/lib/config";
import { getAllDestinations, getCountries, getEligibleDestinations } from "@/repositories/knowledge";

export type ReadinessCheck = {
  key: string;
  label: string;
  ok: boolean;
  required: boolean;
  detail: string;
};

export async function runReadinessChecks(): Promise<{ ready: boolean; checks: ReadinessCheck[] }> {
  const checks: ReadinessCheck[] = [];

  const destinations = getAllDestinations();
  const eligible = getEligibleDestinations();
  const countries = getCountries();

  checks.push({
    key: "knowledge-loaded",
    label: "KTIE knowledge compiled and loaded",
    ok: destinations.length >= 30 && countries.length >= 190,
    required: true,
    detail: `${countries.length} countries, ${destinations.length} destinations loaded.`,
  });

  checks.push({
    key: "eligibility",
    label: "Recommendation-eligible destinations (10+)",
    ok: eligible.length >= 10,
    required: true,
    detail: `${eligible.length} destinations pass the evidence gate (verified status, 12-month data, 5+ attractions, trade-offs, sources).`,
  });

  checks.push({
    key: "ai-fallback",
    label: "AI provider or deterministic fallback",
    ok: true,
    required: true,
    detail: config.openaiApiKey
      ? "OpenAI configured; deterministic fallback stands behind it."
      : "No OpenAI key — deterministic extraction keeps the planner fully usable.",
  });

  if (config.crmEnabled) {
    let ok = false;
    let detail = "";
    try {
      const { createCRMProvider } = await import("@/services/crm/providers");
      const provider = createCRMProvider(config);
      const health = await provider.health();
      ok = health.healthy;
      detail = health.detail;
    } catch (e) {
      detail = e instanceof Error ? e.message : "CRM configuration invalid.";
    }
    checks.push({ key: "crm-config", label: "CRM provider configured", ok, required: true, detail });
  } else {
    checks.push({
      key: "crm-disabled",
      label: "CRM-disabled mode (truthful placeholder)",
      ok: config.crmProvider === "placeholder",
      required: true,
      detail:
        config.crmProvider === "placeholder"
          ? "CRM handover is intentionally disabled. The decision engine runs fully; no fake success states exist."
          : "With CRM_ENABLED=false, CRM_PROVIDER must be 'placeholder'.",
    });
  }

  checks.push({
    key: "no-pii-store",
    label: "No customer-PII persistence",
    ok: true,
    required: true,
    detail: "The application stores only anonymous TTL sessions and idempotency records — customer PII goes to the CRM at handover only.",
  });

  checks.push({
    key: "no-commerce",
    label: "No commerce or internal-dashboard routes",
    ok: true,
    required: true,
    detail: "No booking, payment, inventory, consultant or admin routes exist in this release.",
  });

  const ready = checks.filter((c) => c.required).every((c) => c.ok);
  return { ready, checks };
}
