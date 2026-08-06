import { NextResponse } from "next/server";
import { z } from "zod";
import { processChatTurn, startWithTheme } from "@/services/conversation/engine";
import { getSessionStore } from "@/repositories/sessions";
import { clientKey, rateLimit } from "@/lib/rateLimit";
import { config } from "@/lib/config";
import { track } from "@/services/analytics";

export const runtime = "nodejs";

const bodySchema = z
  .object({
    message: z.string().min(1).max(2000).optional(),
    theme: z.string().max(30).optional(),
    sessionId: z.string().uuid().optional(),
  })
  .refine((b) => b.message || b.theme, { message: "message or theme required" });

export async function POST(request: Request) {
  const limit = rateLimit(clientKey(request, "chat"), config.rateLimitChatPerMinute);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many messages. Please wait a moment." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  let parsed: z.infer<typeof bodySchema>;
  try {
    parsed = bodySchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  try {
    const store = getSessionStore();
    let session = parsed.sessionId ? await store.get(parsed.sessionId) : null;
    if (!session) {
      session = await store.create();
      await track("planner_started");
    }

    const result = parsed.theme
      ? startWithTheme(session, parsed.theme)
      : await processChatTurn(session, parsed.message!);
    if (!result) {
      return NextResponse.json({ error: "Unknown holiday theme." }, { status: 400 });
    }
    await store.save(session);
    await track("planner_message_sent");
    if (result.readyForRecommendations) await track("brief_completed");

    return NextResponse.json({
      sessionId: session.id,
      brief: session.brief,
      assistantMessage: result.assistantMessage,
      readyForRecommendations: result.readyForRecommendations,
      missingFields: result.missingFields,
      awaitingField: result.awaitingField ?? null,
      suggestedAction: result.suggestedAction,
      comparisonSlugs: result.comparisonSlugs,
      expiresAt: session.expiresAt,
    });
  } catch {
    return NextResponse.json(
      { error: "We couldn't process that just now. Your conversation is safe — please try again." },
      { status: 500 },
    );
  }
}
