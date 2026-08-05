import { NextResponse } from "next/server";
import { z } from "zod";
import { getSessionStore } from "@/repositories/sessions";
import { briefReadyForRecommendations, missingBriefFields, type TravelBrief } from "@/types/brief";
import { clientKey, rateLimit } from "@/lib/rateLimit";
import { config } from "@/lib/config";
import { track } from "@/services/analytics";

export const runtime = "nodejs";

const briefPatchSchema = z.record(z.unknown());

const bodySchema = z.object({
  sessionId: z.string().uuid(),
  brief: briefPatchSchema,
});

/**
 * Completes the conversational stage: the customer confirmed/edited the brief
 * in the review screen and it becomes the session's brief of record.
 */
export async function POST(request: Request) {
  const limit = rateLimit(clientKey(request, "chat"), config.rateLimitChatPerMinute);
  if (!limit.allowed) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  let parsed: z.infer<typeof bodySchema>;
  try {
    parsed = bodySchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const store = getSessionStore();
  const session = await store.get(parsed.sessionId);
  if (!session) {
    return NextResponse.json(
      { error: "Session expired. Start a new plan — it only takes a minute." },
      { status: 410 },
    );
  }

  session.brief = { ...session.brief, ...(parsed.brief as Partial<TravelBrief>) };
  await store.save(session);
  await track("brief_completed");

  return NextResponse.json({
    sessionId: session.id,
    brief: session.brief,
    readyForRecommendations: briefReadyForRecommendations(session.brief),
    missingFields: missingBriefFields(session.brief),
  });
}
