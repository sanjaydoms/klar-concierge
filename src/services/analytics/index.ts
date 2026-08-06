import { config } from "@/lib/config";

export const ALLOWED_EVENTS = [
  "concierge_page_view",
  "planner_started",
  "planner_message_sent",
  "brief_completed",
  "recommendations_viewed",
  "recommendation_selected",
  "comparison_started",
  "comparison_completed",
  "itinerary_viewed",
  "plan_completed",
  "crm_handover_started",
  "crm_handover_succeeded",
  "crm_handover_failed",
  "session_restarted",
] as const;

export type AnalyticsEventName = (typeof ALLOWED_EVENTS)[number];

/** Property keys that must never leave the server — PII and sensitive detail. */
const FORBIDDEN_KEY_FRAGMENTS = [
  "name", "phone", "email", "message", "prompt", "transcript", "notes",
  "accessibility", "dietary", "budgetvalue", "address", "customer", "payload",
];

export function sanitiseProps(
  props: Record<string, unknown> | undefined,
): Record<string, unknown> | undefined {
  if (!props) return undefined;
  const clean: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props)) {
    if (FORBIDDEN_KEY_FRAGMENTS.some((f) => key.toLowerCase().includes(f))) continue;
    if (typeof value === "string" && value.length > 120) continue;
    clean[key] = value;
  }
  return clean;
}

export interface AnalyticsProvider {
  readonly id: string;
  track(name: AnalyticsEventName, props?: Record<string, unknown>): Promise<void>;
  counts(): Record<string, number>;
}

class NoopAnalyticsProvider implements AnalyticsProvider {
  readonly id: string = "none";
  private counters = new Map<string, number>();
  async track(name: AnalyticsEventName): Promise<void> {
    this.counters.set(name, (this.counters.get(name) ?? 0) + 1);
  }
  counts(): Record<string, number> {
    return Object.fromEntries(this.counters);
  }
}

class ConsoleAnalyticsProvider extends NoopAnalyticsProvider {
  override readonly id: string = "console";
  async track(name: AnalyticsEventName, props?: Record<string, unknown>): Promise<void> {
    await super.track(name);
    console.log(`[analytics] ${name}`, sanitiseProps(props) ?? {});
  }
}

const globalStore = globalThis as unknown as { klarAnalytics?: AnalyticsProvider };

export function getAnalytics(): AnalyticsProvider {
  if (!globalStore.klarAnalytics) {
    globalStore.klarAnalytics =
      config.analyticsProvider === "console"
        ? new ConsoleAnalyticsProvider()
        : new NoopAnalyticsProvider();
  }
  return globalStore.klarAnalytics;
}

export async function track(
  name: AnalyticsEventName,
  props?: Record<string, unknown>,
): Promise<void> {
  if (!ALLOWED_EVENTS.includes(name)) return;
  try {
    await getAnalytics().track(name, sanitiseProps(props));
  } catch {
    // Analytics must never break the customer flow.
  }
}
