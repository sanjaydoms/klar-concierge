import { NextResponse } from "next/server";
import { runReadinessChecks } from "@/services/readiness/checks";

export const runtime = "nodejs";

export async function GET() {
  const result = await runReadinessChecks();
  return NextResponse.json(result, { status: result.ready ? 200 : 503 });
}
