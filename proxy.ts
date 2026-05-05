import { NextResponse, type NextRequest } from "next/server";

// Per-request nonce-based Content Security Policy.
// Next.js (App Router) automatically reads the nonce from the
// `Content-Security-Policy` header on the inbound request and attaches it to
// every framework/page script tag during SSR — that's why we set the header
// on `requestHeaders` (so the renderer sees it) AND on the response (so the
// browser enforces it).
//
// In production:
//   script-src is locked to first-party scripts that carry the nonce, with
//   `strict-dynamic` so transitively-loaded modules inherit trust from the
//   nonced bootstrap. No `unsafe-inline`. No external script origins.
// In development:
//   `unsafe-eval` is required for React's eval-based debug stacks, and
//   `unsafe-inline` for the dev style streaming + HMR.
export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV === "development";

  const cspDirectives = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${
      isDev ? " 'unsafe-eval'" : ""
    }`,
    // 'unsafe-inline' is intentional for style: Tailwind/Next stream inline
    // <style> tags during hydration, and React `style={}` props produce inline
    // style attributes that nonces cannot cover. Modern browsers ignore
    // 'unsafe-inline' for <style> tags when a nonce is present, so this is
    // effectively only a permission for inline style ATTRIBUTES.
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: blob:`,
    `media-src 'self'`,
    `font-src 'self' data:`,
    // Allow Next.js dev HMR websocket; production stays first-party only.
    `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
    `frame-src 'none'`,
    `frame-ancestors 'none'`,
    `form-action 'self'`,
    `base-uri 'self'`,
    `object-src 'none'`,
    `worker-src 'self' blob:`,
    `manifest-src 'self'`,
    `upgrade-insecure-requests`,
  ];
  const csp = cspDirectives.join("; ");

  // Pass the nonce + CSP through to Next.js's renderer so it can inject the
  // nonce into framework scripts.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  // Skip static assets, optimized images, the favicon, the local video, and
  // any future api routes — they don't render HTML so they don't need CSP and
  // proxying them just wastes cycles on Vercel.
  matcher: [
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|icon\\.png|tta\\.mp4|robots\\.txt|sitemap\\.xml).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
