# Canyon Data Labs — Multi-Page Site

Production-ready **Next.js 15 (App Router)** marketing site. CSS-first (near-zero JS), fully
static-prerendered, SEO/AEO-ready. Ports the v3 design system (rust / sand / bark · Cormorant +
DM Sans + DM Mono).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all routes prerender static)
npm run start      # serve the production build
```

## Routes (13 pages)

| Route | Status | Purpose |
|---|---|---|
| `/` | ✅ built | Condensed home — hero, trust bar, outcomes, personas, showcase teaser, CTA |
| `/platform` | ✅ built | Full platform: approach, 4 module showcases, own-systems, security |
| `/platform/sales-intelligence` | stub | Module deep-dive |
| `/platform/supply-chain` | stub | Module deep-dive |
| `/platform/procurement` | stub | Module deep-dive |
| `/solutions` | stub | Industry index |
| `/solutions/fmcg` `/pharma` `/manufacturing` `/retail` | stub | Per-industry landing (SEO/ads) |
| `/customers` | stub | Astral + Bond-it case studies |
| `/pricing` | stub | 4-stage engagement model + bands |
| `/about` | stub | Boutique / AI-first story |
| `/resources` | stub | Blog/field-notes index |
| `/faq` | stub | FAQ + FAQPage JSON-LD |
| `/contact` | ✅ built | Discovery Workshop form |

"stub" pages render correctly with hero + CTA; full content is being built in batches.

## Architecture

```
app/
  layout.tsx        # fonts, metadata, JSON-LD, Nav/Footer/StickyCTA chrome
  globals.css       # entire design system (tokens + components)
  page.tsx          # home
  <route>/page.tsx  # one file per route, per-page metadata
components/
  Nav, Footer, StickyCTA, FadeUp   # shared chrome (client where needed)
  Shells.tsx        # reusable product-mockup UI (DistributorHealth, AskAI, DemandFunnel, Spend)
  Sections.tsx      # FinalCTA, CheckList, Arrow, Check
lib/site.ts         # nav links, footer nav, module data, site metadata
```

## Design / conversion principles baked in
- Outcome-led hero + proof chip, repeated CTAs, sticky bar, full-bleed final CTA
- Live-product mockups instead of static screenshots (the "signature move")
- Persona routing (CFO / Sales / COO)
- Per-page `<title>` + description + OpenGraph; Organization JSON-LD site-wide
- `prefers-reduced-motion` respected; visible focus rings; no-JS fade-up fallback
- All content server-rendered (view-source shows text) for SEO/AEO

## Next steps
1. Flesh out the 11 stub pages (Solutions, modules, Customers, Pricing, About, Resources, FAQ)
2. Swap the illustrative testimonial/AI-chat numbers for real attributed proof before launch
3. Wire the contact form to an endpoint (currently client-side success state only)
4. Optional: move content to Sanity (matches your headless stack)
