import { randomUUID } from "node:crypto";
import type { PlanningSession } from "@/types/session";
import { emptyBrief } from "@/types/brief";
import { config } from "@/lib/config";

/**
 * Anonymous planning-session store with TTL. No PII is ever stored here.
 *
 * The default implementation is in-memory: correct for a single instance and
 * for the session-recovery UX (the client also keeps its own state). To run
 * across many serverless instances, implement SessionStore against Redis or a
 * database — the interface is the contract.
 */
export interface SessionStore {
  create(): Promise<PlanningSession>;
  get(id: string): Promise<PlanningSession | null>;
  save(session: PlanningSession): Promise<void>;
  delete(id: string): Promise<void>;
}

class MemorySessionStore implements SessionStore {
  private sessions = new Map<string, PlanningSession>();

  private purgeExpired() {
    const now = Date.now();
    for (const [id, s] of this.sessions) {
      if (Date.parse(s.expiresAt) < now) this.sessions.delete(id);
    }
  }

  async create(): Promise<PlanningSession> {
    this.purgeExpired();
    const now = new Date();
    const session: PlanningSession = {
      id: randomUUID(),
      brief: emptyBrief(),
      messages: [],
      turnIndex: 0,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
      expiresAt: new Date(now.getTime() + config.sessionTtlMinutes * 60_000).toISOString(),
    };
    this.sessions.set(session.id, session);
    return session;
  }

  async get(id: string): Promise<PlanningSession | null> {
    const session = this.sessions.get(id);
    if (!session) return null;
    if (Date.parse(session.expiresAt) < Date.now()) {
      this.sessions.delete(id);
      return null;
    }
    return session;
  }

  async save(session: PlanningSession): Promise<void> {
    session.updatedAt = new Date().toISOString();
    session.expiresAt = new Date(Date.now() + config.sessionTtlMinutes * 60_000).toISOString();
    // Bound per-session memory: only the recent transcript matters for
    // planning; the brief carries the accumulated understanding.
    if (session.messages.length > 80) {
      session.messages = session.messages.slice(-80);
    }
    this.sessions.set(session.id, session);
  }

  async delete(id: string): Promise<void> {
    this.sessions.delete(id);
  }
}

const globalStore = globalThis as unknown as { klarSessions?: SessionStore };

export function getSessionStore(): SessionStore {
  if (!globalStore.klarSessions) globalStore.klarSessions = new MemorySessionStore();
  return globalStore.klarSessions;
}
