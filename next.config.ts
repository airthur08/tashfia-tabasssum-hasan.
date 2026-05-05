import type { NextConfig } from "next";

// Security headers applied to every response by Vercel/Next.js at the edge.
// CSP is intentionally NOT set here — it's set per-request in proxy.ts so each
// response gets a unique nonce that's also injected into Next.js's hydration
// scripts (avoids needing 'unsafe-inline' for script-src).
const securityHeaders = [
  // Force HTTPS for two years on the apex + all subdomains; Vercel terminates TLS.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Prevent MIME sniffing.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Belt-and-suspenders against framing (CSP frame-ancestors is the modern path).
  { key: "X-Frame-Options", value: "DENY" },
  // Don't leak full URLs as Referer to other origins.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable powerful features the site doesn't use.
  {
    key: "Permissions-Policy",
    value: [
      "accelerometer=()",
      "autoplay=(self)",
      "camera=()",
      "display-capture=()",
      "encrypted-media=()",
      "fullscreen=(self)",
      "geolocation=()",
      "gyroscope=()",
      "magnetometer=()",
      "microphone=()",
      "midi=()",
      "payment=()",
      "picture-in-picture=()",
      "publickey-credentials-get=()",
      "screen-wake-lock=()",
      "sync-xhr=()",
      "usb=()",
      "xr-spatial-tracking=()",
      "interest-cohort=()",
    ].join(", "),
  },
  // Cross-origin isolation: keep the browsing context isolated from external openers.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Allow same-origin and CORS-marked subresources only.
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  // Block legacy XSS-auditor heuristics; CSP is the real protection.
  { key: "X-XSS-Protection", value: "0" },
  // Disallow Adobe cross-domain policies.
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];

const nextConfig: NextConfig = {
  // Don't expose the framework name in the response header.
  poweredByHeader: false,
  // Only React strict mode (no extra runtime, just dev correctness).
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply security headers to all routes.
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Long-lived caching for the hashed Next.js build assets.
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
