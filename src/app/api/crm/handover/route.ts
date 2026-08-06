import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { z } from "zod";
import { config } from "@/lib/config";
import { clientKey, rateLimit } from "@/lib/rateLimit";
import { createCRMProvider } from "@/services/crm/providers";
import { getSessionStore } from "@/repositories/sessions";
import { getIdempotencyStore } from "@/repositories/idempotency";
import { composeItinerary } from "@/services/itinerary/composer";
import { getDestination } from "@/repositories/knowledge";
import { conversationSummary } from "@/services/conversation/engine";
import { track } from "@/services/analytics";
import type { CRMLeadPayload } from "@/types/crm";

export const runtime = "nodejs";

const bodySchema = z.object({
  sessionId: z.string().uuid(),
  customer: z.object({
    name: z.string().min(2).max(120),
    phone: z.string().regex(/^[+\d][\d\s-]{7,15}$/),
    email: z.string().email().max(200),
    city: z.string().max(120).optional(),
    preferredContactChannel: z.enum(["phone", "email", "whatsapp"]),
    preferredContactTime: z.string().max(120).optional(),
    additionalNotes: z.string().max(2000).optional(),
    consent: z.literal(true),
  }),
});

/**
 * The optional expert handover. Customer PII appears here only in transit —
 * it is sent to the CRM and never persisted by Klar Concierge. When CRM is
 * disabled the endpoint says so truthfully and transmits nothing.
 */
export async function POST(request: Request) {
  const limit = rateLimit(clientKey(request, "crm"), config.rateLimitCrmPerMinute);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many attempts. Please wait a minute and try again." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  if (!config.crmEnabled) {
    return NextResponse.json(
      {
        error:
          "Expert handover isn't switched on yet. Your plan stays saved in this session — contact Klar Travels directly and mention your plan, or try again once handover is live.",
        crmDisabled: true,
      },
      { status: 503 },
    );
  }

  let parsed: z.infer<typeof bodySchema>;
  try {
    parsed = bodySchema.parse(await request.json());
  } catch {
    return NextResponse.json(
      { error: "Please check the form details and try again." },
      { status: 400 },
    );
  }

  const store = getSessionStore();
  const session = await store.get(parsed.sessionId);
  if (!session) {
    return NextResponse.json(
      { error: "Session expired. Your details were not sent — please start a new plan." },
      { status: 410 },
    );
  }
  if (!session.selectedDestinationSlug) {
    return NextResponse.json(
      { error: "Choose a destination direction before the handover." },
      { status: 400 },
    );
  }

  const destination = getDestination(session.selectedDestinationSlug);
  if (!destination) {
    return NextResponse.json({ error: "Selected destination unavailable." }, { status: 400 });
  }

  await track("crm_handover_started", { destination: destination.slug });

  // Idempotency: one delivery per session.
  const idempotencyKey = `klar-concierge-${session.id}`;
  const idempotency = getIdempotencyStore();
  const existingRef = await idempotency.get(idempotencyKey);
  if (existingRef) {
    return NextResponse.json({ crmReferenceId: existingRef, duplicate: true });
  }

  const payload: CRMLeadPayload = {
    source: "klar-concierge",
    idempotencyKey,
    customer: { ...parsed.customer, consentTimestamp: new Date().toISOString() },
    tripBrief: session.brief,
    selectedDestinationSlug: destination.slug,
    itinerary: composeItinerary(destination, session.brief),
    conversationSummary: conversationSummary(session),
  };

  try {
    const provider = createCRMProvider(config);
    const result = await provider.submitLead(payload, { idempotencyKey });

    if (!result.success) {
      await track("crm_handover_failed", { code: result.errorCode });
      return NextResponse.json(
        {
          error:
            result.errorMessage ??
            "The handover didn't complete. Your plan is safe in this session — please try again in a moment.",
        },
        { status: 502 },
      );
    }

    const crmReferenceId = result.crmReferenceId ?? randomUUID().slice(0, 8).toUpperCase();
    await idempotency.set(idempotencyKey, crmReferenceId);
    await track("crm_handover_succeeded", { destination: destination.slug });

    // Retention: the planning session (brief/transcript) is deleted after a
    // successful handover — the CRM now owns the customer relationship.
    await store.delete(session.id);

    return NextResponse.json({ crmReferenceId });
  } catch {
    await track("crm_handover_failed", { code: "CONFIG" });
    return NextResponse.json(
      { error: "The handover couldn't run. Your plan is safe in this session — please try again." },
      { status: 502 },
    );
  }
}
