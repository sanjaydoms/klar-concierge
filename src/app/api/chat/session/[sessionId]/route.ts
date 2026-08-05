import { NextResponse } from "next/server";
import { getSessionStore } from "@/repositories/sessions";
import { track } from "@/services/analytics";

export const runtime = "nodejs";

/** Session recovery after a page refresh. Sessions are anonymous and TTL-bound. */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ sessionId: string }> },
) {
  const { sessionId } = await params;
  const session = await getSessionStore().get(sessionId);
  if (!session) {
    return NextResponse.json({ error: "Session not found or expired." }, { status: 404 });
  }
  return NextResponse.json({
    sessionId: session.id,
    brief: session.brief,
    messages: session.messages,
    turnIndex: session.turnIndex,
    selectedDestinationSlug: session.selectedDestinationSlug,
    expiresAt: session.expiresAt,
  });
}

/** "Start over" / delete my session. */
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ sessionId: string }> },
) {
  const { sessionId } = await params;
  await getSessionStore().delete(sessionId);
  await track("session_restarted");
  return NextResponse.json({ ok: true });
}
