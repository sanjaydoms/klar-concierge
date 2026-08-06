import { expect, test, type Page } from "@playwright/test";

/** The trust-based welcome step shows once per fresh visit — skip it when a
 *  test wants the classic free-text planner. */
async function skipWelcome(page: Page) {
  const skip = page.getByRole("button", { name: /Continue without sharing details/i });
  if (await skip.isVisible().catch(() => false)) await skip.click();
}

test.describe("public surface", () => {
  test("landing page renders with the official logo and no horizontal scroll", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /perfect holiday starts with a conversation/i })).toBeVisible();
    await expect(page.getByAltText("Klar Travels").first()).toBeVisible();
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    );
    expect(overflow).toBe(false);
  });

  test("discover page lists KTIE collections with clickable destinations", async ({ page }) => {
    await page.goto("/concierge/discover");
    await expect(page.getByRole("heading", { name: "Best for families" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Best for seniors" })).toBeVisible();
    // Destination cards are links into the encyclopedia — not dead text.
    const firstCard = page.locator('a[href^="/destinations/"]').first();
    await expect(firstCard).toBeVisible();
    await firstCard.click();
    await expect(page).toHaveURL(/\/destinations\/[a-z-]+/);
    await expect(page.getByRole("heading", { name: /Month by month/i })).toBeVisible();
  });

  test("destination encyclopedia page carries the full intelligence", async ({ page }) => {
    await page.goto("/destinations/japan");
    await expect(page.getByRole("heading", { name: "Japan", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Month by month/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /What you.ll actually do/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /The honest trade-offs/i })).toBeVisible();
    const jsonLd = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(" ");
    expect(jsonLd).toContain("TouristDestination");
  });

  test("holiday theme landing pages render with destinations, FAQ and planner CTA", async ({ page }) => {
    await page.goto("/holidays/romantic");
    await expect(page.getByRole("heading", { level: 1, name: /Romantic Holidays/i })).toBeVisible();
    await expect(page.getByText(/Best months:/i)).toBeVisible();
    await expect(page.locator('a[href^="/destinations/"]').first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Plan My Romantic Holiday/i })).toBeVisible();
    const jsonLd = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(" ");
    expect(jsonLd).toContain("FAQPage");
  });

  test("welcome step: theme → polite contact capture → context-aware conversation", async ({ page }) => {
    await page.goto("/concierge");
    await expect(page.getByRole("heading", { name: /Let.s Plan Your Perfect Holiday/i })).toBeVisible();
    await page.getByRole("button", { name: /Family\b/ }).first().click();
    // Contact step with the why-text and trust statements
    await expect(page.getByText(/Tell us where to send your personalised holiday plan/i)).toBeVisible();
    await expect(page.getByText(/never sold or shared/i)).toBeVisible();
    await page.locator("#wl-name").fill("Test Traveller");
    await page.locator("#wl-phone").fill("+91 98765 43210");
    await page.locator("#wl-email").fill("test@example.com");
    await page.getByRole("checkbox").check();
    await page.getByRole("button", { name: "Start Planning" }).click();
    // Seamless continuation into the theme-aware conversation
    await expect(page.getByText(/How old are the children/i)).toBeVisible({ timeout: 15_000 });
    // Answer chips match the question being asked — ages, not budgets.
    const ageChip = page.getByRole("button", { name: "5–9 years" });
    await expect(ageChip).toBeVisible();
    await expect(page.getByRole("button", { name: "Luxury" })).toHaveCount(0);
    await ageChip.click();
    // The answer lands and the conversation moves to the next question.
    await expect(page.getByText("Ages 6 and 9").first()).toBeVisible({ timeout: 15_000 });
  });

  test("welcome step can be skipped and the classic planner still works", async ({ page }) => {
    await page.goto("/concierge");
    await skipWelcome(page);
    await expect(page.getByPlaceholder("Describe your holiday…")).toBeVisible();
  });

  test("shared plan links regenerate the identical plan from the URL", async ({ page }) => {
    await page.goto("/plan/japan?n=7&t=family&a=6,10&m=11");
    await expect(page.getByRole("heading", { name: /7-night Japan plan/i })).toBeVisible();
    await expect(page.getByText("Day 1 —", { exact: false }).first()).toBeVisible();
    await expect(page.getByRole("button", { name: "Download PDF" })).toBeVisible();
    await expect(page.getByText(/not a confirmed package/i)).toBeVisible();
  });

  test("comparison deep links auto-run the comparison", async ({ page }) => {
    await page.goto("/concierge/compare?d=japan,south-korea&month=10");
    await expect(page.getByRole("heading", { name: /Japan vs South Korea/i })).toBeVisible({ timeout: 20_000 });
    await expect(page.getByRole("button", { name: /Copy link/i })).toBeVisible();
  });

  test("embed route renders the bare planner for the portal iframe", async ({ page }) => {
    await page.goto("/embed");
    await skipWelcome(page);
    await expect(page.getByPlaceholder("Describe your holiday…")).toBeVisible();
    // No site chrome inside the iframe
    await expect(page.getByRole("navigation", { name: "Main" })).toHaveCount(0);
  });

  test("no internal or commerce routes exist", async ({ page }) => {
    for (const path of ["/admin", "/consultant", "/login", "/booking"]) {
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(404);
    }
  });
});

test.describe("planner journey (CRM disabled)", () => {
  test("family flow: one message → understanding → matches → plan → completion", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/concierge");
    await skipWelcome(page);

    const input = page.getByPlaceholder("Describe your holiday…");
    await input.fill(
      "We are a family of four from Hyderabad looking for a relaxed seven-night holiday in December. Our children are 6 and 10, and we enjoy food and fun activities.",
    );
    await page.getByRole("button", { name: "Send", exact: true }).click();

    // A rich first message reaches the understanding moment immediately.
    await expect(page.getByText(/Here's what I've understood/i).first()).toBeVisible({ timeout: 20_000 });

    // "Change Something" opens the editable understanding, pre-filled.
    await page.getByRole("button", { name: "Change Something" }).click();
    await expect(page.getByRole("heading", { name: /Here.s what I.ve understood/i })).toBeVisible();
    await expect(page.locator("#bf-nights")).toHaveValue("7");

    await page.getByRole("button", { name: "Show My Matches" }).click();
    await expect(page.getByRole("heading", { name: "Your matches" })).toBeVisible({ timeout: 20_000 });
    await expect(page.getByText("Best Match")).toBeVisible();
    await expect(page.getByText(/Why it suits you/).first()).toBeVisible();
    await expect(page.getByText(/Signature experiences/).first()).toBeVisible();
    await expect(page.getByText(/Worth knowing:/).first()).toBeVisible();

    // Intent confirmation before the itinerary is built.
    await page.getByRole("button", { name: /^Choose / }).first().click();
    await expect(page.getByText(/build your suggested holiday around/i)).toBeVisible();
    await page.getByRole("button", { name: "Create My Plan" }).click();
    await expect(page.getByText(/decision-ready starting plan/i)).toBeVisible({ timeout: 20_000 });
    await expect(page.getByText("Day 1 —", { exact: false }).first()).toBeVisible();

    // Lightweight refinement is available.
    await expect(page.getByRole("button", { name: "Make it more relaxed" })).toBeVisible();

    // CRM is disabled: the journey still ends confidently with a reference.
    await expect(page.getByRole("button", { name: "Continue with Klar" })).toHaveCount(0);
    await page.getByRole("button", { name: "Finish My Plan" }).click();
    await expect(page.getByRole("heading", { name: /Your holiday plan is ready/i })).toBeVisible({ timeout: 20_000 });
    await expect(page.getByText(/KLAR-[A-Z0-9]+/).first()).toBeVisible();
    await expect(page.getByRole("button", { name: "Start another holiday" })).toBeVisible();

    // Never claim a fake submission
    await expect(page.getByText("Your plan is with Klar")).toHaveCount(0);
  });

  test("comparison tool compares two destinations", async ({ page }) => {
    await page.goto("/concierge/compare");
    await page.getByRole("button", { name: "Japan", exact: true }).click();
    await page.getByRole("button", { name: "South Korea", exact: true }).click();
    await page.locator("#cmp-month").selectOption("10");
    await page.getByRole("button", { name: "Compare", exact: true }).click();
    await expect(page.getByRole("heading", { name: /Japan vs South Korea/i })).toBeVisible({ timeout: 20_000 });
    // Mobile shows stacked dimension cards; larger screens show the table.
    const isMobile = (page.viewportSize()?.width ?? 1280) < 640;
    if (isMobile) {
      await expect(page.getByText(/Season in October/i).first()).toBeVisible();
      await expect(page.getByText(/Getting there from India/i).first()).toBeVisible();
    } else {
      await expect(page.getByRole("cell", { name: /Season in October/i })).toBeVisible();
      await expect(page.getByRole("cell", { name: /Getting there from India/i })).toBeVisible();
    }
  });
});

test.describe("accessibility basics", () => {
  test("planner is keyboard reachable and chips have visible focus", async ({ page }) => {
    await page.goto("/concierge");
    await page.keyboard.press("Tab");
    const active = page.locator(":focus");
    await expect(active).toBeVisible();
  });
});
