/** @type {import('next').NextConfig} */
// The app is embedded inside klartravels.com (chat box + portal tabs), so the
// portal's origins are the only allowed frame ancestors. CSP frame-ancestors
// supersedes X-Frame-Options in modern browsers, and an allow-list cannot be
// expressed in X-Frame-Options — so that header is intentionally absent.
const FRAME_ANCESTORS =
  "frame-ancestors 'self' https://klartravels.com https://*.klartravels.com";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self'",
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
