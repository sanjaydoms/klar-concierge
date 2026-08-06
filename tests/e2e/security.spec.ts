import { expect, test } from "@playwright/test";

test.describe("security headers", () => {
  test("every page ships the full security header set", async ({ page }) => {
    const response = await page.goto("/");
    const headers = response!.headers();
    expect(headers["strict-transport-security"]).toContain("max-age=");
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["permissions-policy"]).toContain("camera=()");
    const csp = headers["content-security-policy"];
    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain("frame-ancestors 'self' https://klartravels.com https://*.klartravels.com");
    expect(headers["x-powered-by"]).toBeUndefined();
  });
});

test.describe("injection resistance", () => {
  test("script tags in chat are rendered as inert text, never executed", async ({ page }) => {
    let dialogOpened = false;
    page.on("dialog", async (d) => {
      dialogOpened = true;
      await d.dismiss();
    });
    await page.goto("/concierge");
    const skip = page.getByRole("button", { name: /Continue without sharing details/i });
    if (await skip.isVisible().catch(() => false)) await skip.click();
    const payload = '<script>alert(1)</script><img src=x onerror=alert(2)>';
    await page.getByPlaceholder("Describe your holiday…").fill(payload);
    await page.getByRole("button", { name: "Send", exact: true }).click();
    // The user bubble renders the payload as text
    await expect(page.getByText("<script>alert(1)</script>", { exact: false })).toBeVisible();
    await page.waitForTimeout(500);
    expect(dialogOpened).toBe(false);
  });

  test("JSON-LD blocks cannot be broken out of", async ({ page }) => {
    await page.goto("/destinations/japan");
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    for (const block of blocks) {
      expect(block).not.toContain("</script");
      expect(() => JSON.parse(block)).not.toThrow();
    }
  });
});

test.describe("API abuse resistance", () => {
  test("oversized chat payloads are rejected with 400", async ({ request }) => {
    const response = await request.post("/api/chat", {
      data: { message: "x".repeat(5000) },
    });
    expect(response.status()).toBe(400);
  });

  test("malformed JSON is rejected with 400", async ({ request }) => {
    const response = await request.post("/api/chat", {
      headers: { "Content-Type": "application/json" },
      data: "not-json{{{",
    });
    expect(response.status()).toBe(400);
  });

  test("non-UUID session ids are rejected", async ({ request }) => {
    const response = await request.post("/api/chat", {
      data: { message: "hello", sessionId: "../../../etc/passwd" },
    });
    expect(response.status()).toBe(400);
  });

  test("unknown sessions 404 without leaking anything", async ({ request }) => {
    const response = await request.get("/api/chat/session/00000000-0000-4000-8000-000000000000");
    expect(response.status()).toBe(404);
    const body = await response.json();
    expect(JSON.stringify(body)).not.toContain("stack");
  });

  test("path traversal on destination lookups yields 404", async ({ request }) => {
    for (const slug of ["..%2F..%2Fetc%2Fpasswd", "__proto__", "constructor"]) {
      const response = await request.get(`/api/destinations/${slug}`);
      expect(response.status(), slug).toBe(404);
    }
  });

  test("comparison rejects out-of-bounds input", async ({ request }) => {
    const tooMany = await request.post("/api/compare", {
      data: { slugs: ["japan", "bali", "dubai", "spain"] },
    });
    expect(tooMany.status()).toBe(400);
    const badMonth = await request.post("/api/compare", {
      data: { slugs: ["japan", "bali"], month: 13 },
    });
    expect(badMonth.status()).toBe(400);
  });
});
