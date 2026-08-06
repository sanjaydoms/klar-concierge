import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  timeout: 60_000,
  retries: 2,
  // Two workers keep the suite honest without starving the app server in
  // small CI containers (interactive tests are sensitive to CPU contention).
  workers: 2,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:3002",
    trace: "retain-on-failure",
    // The CI/build environment ships Chromium at a fixed path; a locally
    // downloaded browser (npx playwright install) also works when this
    // path is absent.
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH }
      : undefined,
  },
  webServer: {
    command: "npm run start",
    url: "http://localhost:3002",
    reuseExistingServer: true,
    timeout: 60_000,
    // The whole suite shares one IP; production limits would rate-limit the
    // tests against each other, not real abuse.
    env: { RATE_LIMIT_CHAT_PER_MINUTE: "300", RATE_LIMIT_PLAN_PER_MINUTE: "300" },
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile-320", use: { ...devices["Desktop Chrome"], viewport: { width: 320, height: 640 } } },
  ],
});
