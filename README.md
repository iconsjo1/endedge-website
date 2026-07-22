# EndEdge — Website

Enterprise Technology &amp; AI marketing site for **EndEdge** (Dubai, UAE), with a live
**AI Readiness Assessment** as the headline interactive demo.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS**.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # optional — see "AI Readiness" below
npm run dev                  # http://localhost:3000
```

The site runs fully **without any API key**. The assessment returns a strong deterministic
report by default, so the demo always works. Add a key to switch on AI-generated reports.

```bash
npm run build && npm run start   # production build
```

---

## Design system

Tokens live in `tailwind.config.ts` and `app/globals.css`.

| Token | Value | Use |
|---|---|---|
| `ink` | `#0A0E14` | Primary dark surface |
| `edge` | `#2DD4BF` | Primary accent (teal) |
| `signal` | `#6366F1` | Secondary accent (indigo) |
| `paper` | `#F7F9FB` | Light section surface |

Type: **Sora** (display) · **Inter** (body) · **JetBrains Mono** (labels, data, score),
all loaded via `next/font`. The signature visual is `components/ui/StackMark.tsx` — a
layered stack (infrastructure → intelligence) reused in the hero and the value section.

Sections alternate dark / light bands. Motion respects `prefers-reduced-motion`.

---

## Project structure

```
app/
  layout.tsx            Fonts, metadata, <html> shell
  page.tsx              Homepage — composes all sections in order
  globals.css           Design tokens, utilities, component classes
  api/assess/route.ts   AI Readiness endpoint (Anthropic + fallback)
components/
  Nav, Hero, LogoStrip, Services, ValueStack,
  Readiness,            <-- the interactive AI demo (client component)
  WhyEndEdge, TechStack, Industries, CTA, Footer
  ui/StackMark.tsx      Signature layered-stack SVG
lib/
  assessment.ts         Questions, scoring, deterministic fallback report
```

---

## AI Readiness Assessment

The centerpiece. Flow:

1. `components/Readiness.tsx` collects 5 answers and `POST`s them to `/api/assess`.
2. `app/api/assess/route.ts` scores the answers (`lib/assessment.ts`) and:
   - **with `ANTHROPIC_API_KEY`** → calls Claude to write a tailored report, returned as JSON;
   - **without a key** → returns a deterministic report keyed to the score band.
3. The widget renders a score dial, headline, summary, and 3 next steps.

To enable AI reports, set in `.env.local`:

```
ANTHROPIC_API_KEY=sk-ant-...
ANTHROPIC_MODEL=claude-sonnet-5   # optional; use what your account supports
```

The key is only ever read server-side in the route handler — it is never exposed to the
browser. Edit the questions and scoring in `lib/assessment.ts`; both the client and the
API import from there, so they stay in sync.

---

## Deploy

Works on Vercel, Cloudflare, Netlify, or your own Node host (the app uses the `nodejs`
runtime for the API route). Set `ANTHROPIC_API_KEY` (and optionally `ANTHROPIC_MODEL`) as
environment variables in your host. Consider dogfooding your own EndEdge hosting here.

---

## Suggested next steps for the team

- Swap the sector labels in `LogoStrip.tsx` for real client logos once cleared for use.
- Wire the contact CTA (`mailto:` today) to a proper form + booking tool (e.g. Cal.com).
- Add the inner pages from the sitemap (Services detail, Case Studies, Insights, About).
- Add Arabic (RTL) via `next-intl` or the App Router `[locale]` pattern — the layout is
  already structured to accommodate it.
- Add analytics (Plausible or GA4) and JSON-LD `Organization` structured data.
```
