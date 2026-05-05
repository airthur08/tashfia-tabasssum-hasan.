# Tashfia Tabassum Hasan — Personal Portfolio

A single-page personal portfolio site built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS 4**, and **TypeScript**. Includes a cinematic video hero, scroll-revealed content sections, and production-grade security headers configured for Vercel.

---

## Tech stack

| Tool                                | Version  | Purpose                                  |
| ----------------------------------- | -------- | ---------------------------------------- |
| Next.js                             | 16.2.4   | App Router, server rendering, build      |
| React / React-DOM                   | 19.2     | UI runtime                               |
| Tailwind CSS                        | 4        | Styling                                  |
| TypeScript                          | 5        | Static types                             |
| `next/font/google`                  | built-in | Self-hosted Inter + Instrument Serif     |

The site has **no database, no API routes, no auth, and no environment variables**.

---

## Prerequisites

- **Node.js 20+** (or **Bun 1.x** — this repo ships a `bun.lock`)
- A modern browser (Chrome, Firefox, Safari)

You can use any package manager, but `bun` is what the lockfile pins.

---

## Quick start

```bash
# 1. Clone the repo
git clone https://github.com/airthur08/tashfia-tabasssum-hasan.git
cd tashfia-tabasssum-hasan

# 2. Install dependencies
bun install
# or: npm install

# 3. Run the dev server
npm run dev
# Open http://localhost:3000
```

The page hot-reloads as you edit files in `app/`.

---

## Available scripts

| Command          | What it does                                                     |
| ---------------- | ---------------------------------------------------------------- |
| `npm run dev`    | Starts the dev server with Turbopack on `http://localhost:3000`  |
| `npm run build`  | Builds for production into `.next/`                              |
| `npm run start`  | Serves the production build (run `build` first)                  |
| `npm run lint`   | Runs ESLint                                                      |

---

## Project structure

```
.
├── app/                          # Next.js App Router pages + components
│   ├── components/               # Page sections (one per file)
│   │   ├── Navigation.tsx        # Top nav (logo + menu + CTA)
│   │   ├── Hero.tsx              # Hero section with looping video bg
│   │   ├── RevealOnScroll.tsx    # Wrapper that fades children in on scroll
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Clubs.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── globals.css               # Tailwind import + theme tokens + animations
│   ├── icon.png                  # Site favicon (auto-detected by Next.js)
│   ├── layout.tsx                # Root layout, font setup, <html> shell
│   ├── page.tsx                  # Composes all sections into the home page
│   └── robots.ts                 # Generates /robots.txt
├── public/
│   └── tta.mp4                   # Hero background video (~31 MB)
├── next.config.ts                # Static security headers + cache control
├── proxy.ts                      # Per-request CSP nonce middleware (Next 16)
├── tsconfig.json
├── package.json
└── bun.lock
```

---

## Customizing the site

### Change the name / brand mark

- **Browser tab title + meta description:** `app/layout.tsx`
- **Top-left logo:** `app/components/Navigation.tsx`
- **Footer copyright:** `app/components/Contact.tsx`

### Update the LinkedIn link

There are **two** copies of the LinkedIn URL — keep them in sync:

- `app/components/Navigation.tsx` (the "Let's Connect" button)
- `app/components/Contact.tsx` (the LinkedIn CTA in the footer)

### Edit the headline / subtitle / location badge

`app/components/Hero.tsx` — the heading, paragraph, location text, and "View My Journey" button copy all live here.

### Replace section content (Experience, Education, Clubs, Skills, Contact)

Each section is its own file in `app/components/`. Most have a top-of-file `const` array that drives the rendering — edit the array to change items.

For example, in `app/components/Experience.tsx`:

```ts
const roles = [
  {
    title: "Executive Associate",
    org: "Paper Rhyme Advertising Limited",
    duration: "Jan 2026 – Present",
    description: "...",
  },
  // add / remove / edit entries here
];
```

### Replace the background video

1. Drop your new `.mp4` file into `public/` (e.g. `public/my-video.mp4`).
2. Open `app/components/Hero.tsx`.
3. Change the constant near the top:
   ```ts
   const VIDEO_SRC = "/my-video.mp4";
   ```

The component handles the fade-in / fade-out / loop logic automatically — just provide an MP4.

> **Tip:** Keep the video small (< 50 MB) and use H.264. Vercel delivers it efficiently but the asset itself ships in the git repo.

### Replace the favicon

1. Save your icon as a PNG.
2. Replace `app/icon.png` with it.

Next.js App Router auto-discovers `app/icon.png` and wires it up as the favicon — no code change needed.

### Tweak fonts

`app/layout.tsx` imports `Inter` (body) and `Instrument_Serif` (display) via `next/font/google`. Both are downloaded at build time and self-hosted, so no runtime requests to Google.

To swap fonts, change the imports — every Google Font is supported.

---

## Deploying to Vercel

This site is built for Vercel. Two paths:

### Option A — connect the GitHub repo (recommended)

1. Push to GitHub (already configured if you've cloned this repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — leave all settings at default.
4. Click **Deploy**.

Subsequent pushes to `main` auto-deploy as production. Pushes to other branches create preview URLs.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel       # follow prompts, link to your account
vercel --prod
```

### Custom domain

Vercel → Project → **Settings → Domains** → Add. Vercel handles TLS automatically.

### Environment variables

Currently **none required**. The site is fully static / first-party.

If you ever add server-side API keys (e.g. for a contact form), set them in Vercel:

- **Server-only secrets:** any name without the `NEXT_PUBLIC_` prefix.
- **Public values:** prefix with `NEXT_PUBLIC_` (these are inlined into the client bundle — never put secrets here).

Add via **Vercel Project → Settings → Environment Variables**, or `vercel env add` from the CLI.

---

## Security architecture

This project ships hardened defaults. You don't need to do anything to use them — they apply automatically to every Vercel deployment.

### Static headers — `next.config.ts`

| Header                              | Value                                          | Why                                              |
| ----------------------------------- | ---------------------------------------------- | ------------------------------------------------ |
| `Strict-Transport-Security`         | `max-age=63072000; includeSubDomains; preload` | Force HTTPS for 2 years                          |
| `X-Content-Type-Options`            | `nosniff`                                      | Prevent MIME-sniffing                            |
| `X-Frame-Options`                   | `DENY`                                         | Block iframe embedding (legacy companion to CSP) |
| `Referrer-Policy`                   | `strict-origin-when-cross-origin`              | Don't leak full URLs to other sites              |
| `Permissions-Policy`                | (camera/mic/geo/etc disabled)                  | Disable browser features the site doesn't use   |
| `Cross-Origin-Opener-Policy`        | `same-origin`                                  | Process-isolate from external tabs               |
| `Cross-Origin-Resource-Policy`      | `same-origin`                                  | Block hot-linking from other origins             |
| `X-Permitted-Cross-Domain-Policies` | `none`                                         | Disallow Adobe cross-domain policies             |
| `X-Powered-By`                      | (removed)                                      | Don't leak the framework                         |

### Per-request nonce CSP — `proxy.ts`

A Next.js 16 `proxy.ts` (the renamed-from-middleware request hook) generates a unique nonce per request and emits a strict `Content-Security-Policy` header. Next.js automatically injects the nonce into all framework `<script>` tags during SSR.

Production CSP highlights:

- `script-src 'self' 'nonce-…' 'strict-dynamic'` — no `unsafe-inline`, no `unsafe-eval`
- `frame-ancestors 'none'` — clickjacking-proof
- `object-src 'none'` — blocks Flash/Java applet shenanigans
- `upgrade-insecure-requests` — auto-upgrades any `http://` subresource to HTTPS

In **development**, `unsafe-eval` is added to support React's dev error stacks, and `ws: wss:` is allowed for HMR. These are stripped in production automatically.

> **Tradeoff:** nonce-based CSP requires Next.js to render every page dynamically (no static HTML cache). Fine at any reasonable traffic level for a portfolio. If you ever need full edge-cache, swap to the experimental SRI mode — see the Next.js Content Security Policy guide.

### Other defaults

- `app/robots.ts` generates `/robots.txt` allowing all crawlers.
- All `target="_blank"` links carry `rel="noopener noreferrer"`.
- `bun.lock` is committed for reproducible builds.
- TypeScript is in strict mode (`tsconfig.json`).

---

## Manual smoke-test checklist

Run this after a fresh deploy to confirm nothing regressed:

1. Open the site — page renders with hero video + 5 sections + footer.
2. Open DevTools → Network → click the document request → confirm all security headers from the table above are present.
3. View source — every `<script>` tag has a `nonce="…"` attribute. Refresh: nonce changes.
4. Try to embed the URL in an iframe at https://codepen.io — browser refuses (clickjacking blocked).
5. Click the LinkedIn CTA — opens in a new tab. In that tab's console: `window.opener` returns `null`.
6. Visit `/robots.txt` — returns `User-Agent: * / Allow: /`.
7. `curl -I https://your-domain.com` — confirm `Strict-Transport-Security`, `Content-Security-Policy`, no `X-Powered-By`.

---

## Known notes

- **Lockfile warning in dev:** if you have a global `~/pnpm-lock.yaml` (e.g. from another pnpm project), Next.js may warn "Next.js inferred your workspace root, but it may not be correct." This is cosmetic — the site builds fine. To silence, set `turbopack.root: __dirname` in `next.config.ts`.
- **Cache-Control dev warning:** the `Cache-Control: public, max-age=31536000, immutable` we set on `/_next/static/*` triggers a benign Next.js dev warning. It's the right header for production performance and doesn't affect dev functionality.
- **`postcss <8.5.10` advisory:** `npm audit` reports a moderate advisory in this transitive build dependency (CSS-stringify XSS). It's a build-tool issue affecting projects that process untrusted CSS — not relevant to this site. Will resolve when the upstream `next` and `@tailwindcss/postcss` packages publish updated pins.

---

## License

No license file included. Treat as **All Rights Reserved** unless one is added.
