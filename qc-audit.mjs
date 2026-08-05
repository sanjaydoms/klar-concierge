import { chromium } from "@playwright/test";

const OUT = "/tmp/claude-0/-home-user-Scaleeasy/7918d01a-399f-54fa-92e2-93626245772e/scratchpad";
const WIDTHS = [320, 375, 390, 430];
const PAGES = ["/", "/concierge", "/concierge/discover", "/concierge/compare", "/concierge/how-it-works", "/privacy", "/terms"];

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });

async function audit(page, label) {
  return await page.evaluate((label) => {
    const issues = [];
    const vw = document.documentElement.clientWidth;
    if (document.documentElement.scrollWidth > vw + 1) {
      issues.push(`HSCROLL: page scrollWidth ${document.documentElement.scrollWidth} > viewport ${vw}`);
    }
    const describe = (el) => {
      const id = el.id ? `#${el.id}` : "";
      const cls = typeof el.className === "string" ? "." + el.className.split(/\s+/).slice(0, 3).join(".") : "";
      const text = (el.textContent || "").trim().slice(0, 30);
      return `${el.tagName.toLowerCase()}${id}${cls} "${text}"`;
    };
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.right > vw + 2 && getComputedStyle(el).position !== "fixed") {
        const inScroller = el.closest("[class*='overflow-x-auto'],[class*='overflow-y-auto'],table");
        if (!inScroller) issues.push(`OVERFLOW: ${describe(el)} right=${Math.round(r.right)} vw=${vw}`);
      }
    }
    for (const el of document.querySelectorAll("button, [role=button], input, select, textarea")) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      if (r.height < 40) issues.push(`TOUCH<40h: ${describe(el)} h=${Math.round(r.height)}`);
    }
    for (const el of document.querySelectorAll("h1,h2,h3,button,a,span,p,dd,dt,th,td")) {
      if (el.children.length > 0) continue;
      if (el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).overflow === "hidden") {
        issues.push(`CLIPPED: ${describe(el)} scrollW=${el.scrollWidth} clientW=${el.clientWidth}`);
      }
    }
    return issues.map((i) => `[${label}] ${i}`);
  }, label);
}

const allIssues = [];

// Static pages at all widths
for (const width of WIDTHS) {
  const page = await browser.newPage({ viewport: { width, height: 800 } });
  for (const path of PAGES) {
    await page.goto(`http://localhost:3002${path}`, { waitUntil: "networkidle" });
    allIssues.push(...(await audit(page, `${width}px ${path}`)));
  }
  await page.close();
}

// Planner stages at 320 and 390
for (const width of [320, 390]) {
  const page = await browser.newPage({ viewport: { width, height: 800 } });
  await page.goto("http://localhost:3002/concierge", { waitUntil: "networkidle" });
  allIssues.push(...(await audit(page, `${width}px planner:conversation`)));
  await page.getByPlaceholder("Describe your holiday…").fill(
    "Family of four from Hyderabad, relaxed seven-night holiday in December, kids 6 and 10, we enjoy food and fun activities",
  );
  await page.getByRole("button", { name: "Send", exact: true }).click();
  await page.getByRole("button", { name: "Review My Trip Brief" }).waitFor({ timeout: 15000 });
  allIssues.push(...(await audit(page, `${width}px planner:chat-replied`)));
  await page.getByRole("button", { name: "Review My Trip Brief" }).click();
  await page.waitForTimeout(300);
  allIssues.push(...(await audit(page, `${width}px planner:brief`)));
  await page.getByRole("button", { name: "Show My Directions" }).click();
  await page.getByText("Best Match").waitFor({ timeout: 20000 });
  allIssues.push(...(await audit(page, `${width}px planner:recommendations`)));
  await page.screenshot({ path: `${OUT}/qc-${width}-recs.png`, fullPage: true });
  await page.getByRole("button", { name: "Why this?" }).first().click();
  await page.waitForTimeout(200);
  allIssues.push(...(await audit(page, `${width}px planner:why-panel`)));
  await page.getByRole("button", { name: "View This Direction" }).first().click();
  await page.getByText(/decision-ready starting plan/i).waitFor({ timeout: 20000 });
  allIssues.push(...(await audit(page, `${width}px planner:itinerary`)));
  await page.screenshot({ path: `${OUT}/qc-${width}-itin.png`, fullPage: true });
  await page.close();

  // Comparison at this width
  const page2 = await browser.newPage({ viewport: { width, height: 800 } });
  await page2.goto("http://localhost:3002/concierge/compare", { waitUntil: "networkidle" });
  await page2.getByRole("button", { name: "Japan", exact: true }).click();
  await page2.getByRole("button", { name: "South Korea", exact: true }).click();
  await page2.locator("#cmp-month").selectOption("10");
  await page2.getByRole("button", { name: "Compare", exact: true }).click();
  await page2.getByRole("heading", { name: /Japan vs South Korea/i }).waitFor({ timeout: 20000 });
  allIssues.push(...(await audit(page2, `${width}px comparison-result`)));
  await page2.screenshot({ path: `${OUT}/qc-${width}-compare.png`, fullPage: true });
  await page2.close();
}

await browser.close();

// Dedupe similar issues
const unique = [...new Set(allIssues)];
console.log(`\n===== ${unique.length} unique issues =====`);
for (const issue of unique) console.log(issue);
