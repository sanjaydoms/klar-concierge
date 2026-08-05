/**
 * Idempotency records for CRM handover — prevents duplicate lead delivery.
 * Stores only the key and the CRM reference; never any PII.
 */
export interface IdempotencyStore {
  get(key: string): Promise<string | undefined>;
  set(key: string, crmReferenceId: string): Promise<void>;
}

class MemoryIdempotencyStore implements IdempotencyStore {
  private records = new Map<string, { crmReferenceId: string; createdAt: number }>();
  private readonly ttlMs = 24 * 3600_000;

  async get(key: string): Promise<string | undefined> {
    const record = this.records.get(key);
    if (!record) return undefined;
    if (Date.now() - record.createdAt > this.ttlMs) {
      this.records.delete(key);
      return undefined;
    }
    return record.crmReferenceId;
  }

  async set(key: string, crmReferenceId: string): Promise<void> {
    this.records.set(key, { crmReferenceId, createdAt: Date.now() });
  }
}

const globalStore = globalThis as unknown as { klarIdempotency?: IdempotencyStore };

export function getIdempotencyStore(): IdempotencyStore {
  if (!globalStore.klarIdempotency) globalStore.klarIdempotency = new MemoryIdempotencyStore();
  return globalStore.klarIdempotency;
}
