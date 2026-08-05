import { NextResponse } from "next/server";
import { knowledgeGeneratedAt } from "@/repositories/knowledge";
import { config } from "@/lib/config";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    ok: true,
    knowledgeGeneratedAt: knowledgeGeneratedAt(),
    crmEnabled: config.crmEnabled,
    production: config.isProduction,
    time: new Date().toISOString(),
  });
}
