function bool(value: string | undefined, fallback: boolean): boolean {
  if (value === undefined || value === "") return fallback;
  return value === "true" || value === "1";
}

function int(value: string | undefined, fallback: number): number {
  const n = parseInt(value ?? "", 10);
  return Number.isNaN(n) ? fallback : n;
}

export const config = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3002",
  isProduction: process.env.NODE_ENV === "production",

  openaiApiKey: process.env.OPENAI_API_KEY ?? "",
  openaiModel: process.env.OPENAI_MODEL ?? "gpt-5-mini",
  enableAIPersonalisation: bool(process.env.ENABLE_AI_PERSONALISATION, true),

  sessionTtlMinutes: int(process.env.SESSION_TTL_MINUTES, 120),

  crmEnabled: bool(process.env.CRM_ENABLED, false),
  crmProvider: process.env.CRM_PROVIDER ?? "placeholder",
  crmWebhookUrl: process.env.CRM_WEBHOOK_URL ?? "",
  crmWebhookToken: process.env.CRM_WEBHOOK_TOKEN ?? "",
  crmTimeoutMs: int(process.env.CRM_TIMEOUT_MS, 8000),

  analyticsProvider: process.env.ANALYTICS_PROVIDER ?? "none",

  rateLimitChatPerMinute: int(process.env.RATE_LIMIT_CHAT_PER_MINUTE, 20),
  rateLimitPlanPerMinute: int(process.env.RATE_LIMIT_PLAN_PER_MINUTE, 10),
  rateLimitCrmPerMinute: int(process.env.RATE_LIMIT_CRM_PER_MINUTE, 5),

  logLevel: process.env.LOG_LEVEL ?? "info",
};
