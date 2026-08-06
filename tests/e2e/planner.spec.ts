import { expect, test } from "@playwright/test";

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
  test("family flow: conversation → brief → directions → itinerary", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/concierge");

    const input = page.getByPlaceholder("Describe your holiday…");
    await input.fill(
      "We are a family of four from Hyderabad looking for a relaxed seven-night holiday in December. Our children are 6 and 10, and we enjoy food and fun activities.",
    );
    await page.getByRole("button", { name: "Send", exact: true }).click();

    await page.getByRole("button", { name: "Review My Trip Brief" }).click();
    await expect(page.getByRole("heading", { name: "Your trip brief" })).toBeVisible();
    await expect(page.locator("#bf-nights")).toHaveValue("7");

    await page.getByRole("button", { name: "Show My Directions" }).click();
    await expect(page.getByRole("heading", { name: /directions for your holiday/i })).toBeVisible({ timeout: 20_000 });
    await expect(page.getByText("Best Match")).toBeVisible();
    await expect(page.getByText(/Worth knowing:/).first()).toBeVisible();

    await page.getByRole("button", { name: "View This Direction" }).first().click();
    await expect(page.getByText(/decision-ready starting plan/i)).toBeVisible({ timeout: 20_000 });
    await expect(page.getByText("Day 1 —", { exact: false }).first()).toBeVisible();

    // CRM is disabled in this environment: no live handover CTA, honest note instead.
    await expect(page.getByRole("button", { name: "Hand Over to a Klar Expert" })).toHaveCount(0);
    await expect(page.getByText(/contact Klar Travels directly/i)).toBeVisible();

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
