import { NextResponse } from "next/server";
import { z } from "zod";
import { getLeadAdapter } from "@/services/leads/adapter";
import { getSessionStore } from "@/repositories/sessions";
import { clientKey, rateLimit } from "@/lib/rateLimit";
import { config } from "@/lib/config";
import { track } from "@/services/analytics";

export const runtime = "nodejs";

const bodySchema = z.object({
  sessionId: z.string().uuid(),
});

/**
 * Completion endpoint: issues the plan reference for a finished session via
 * the LeadCaptureAdapter. The placeholder adapter stores nothing — the
 * reference is deterministic from the anonymous session id.
 */
export async function POST(request: Request) {
  const limit = rateLimit(clientKey(request, "leads"), config.rateLimitPlanPerMinute);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  let parsed: z.infer<typeof bodySchema>;
  try {
    parsed = bodySchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const session = await getSessionStore().get(parsed.sessionId);
  if (!session) {
    return NextResponse.json(
      { error: "Session expired. Start a new plan — it only takes a minute." },
      { status: 410 },
    );
  }

  const result = await getLeadAdapter().capture({
    sessionId: session.id,
    destinationSlug: session.selectedDestinationSlug,
    themeKey: session.brief.decisionPriorities
      .find((p) => p.startsWith("theme:"))
      ?.replace("theme:", ""),
  });
  await track("plan_completed", { delivered: result.delivered });

  return NextResponse.json({
    referenceId: result.referenceId,
    delivered: result.delivered,
  });
}
