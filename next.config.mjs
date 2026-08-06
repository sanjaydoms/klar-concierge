/** @type {import('next').NextConfig} */
// The app is embedded inside klartravels.com (chat box + portal tabs), so the
// portal's origins are the only allowed frame ancestors. CSP frame-ancestors
// supersedes X-Frame-Options in modern browsers, and an allow-list cannot be
// expressed in X-Frame-Options — so that header is intentionally absent.
const FRAME_ANCESTORS =
  "frame-ancestors 'self' https://klartravels.com https://*.klartravels.com";

// Next's dev server evaluates strings as JavaScript for Fast Refresh and opens
// a websocket for HMR — both blocked by the production policy. These two
// relaxations apply to `next dev` only; the shipped policy is unchanged.
const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      `connect-src 'self'${isDev ? " ws://localhost:3002" : ""}`,
      FRAME_ANCESTORS,
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
