# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack

# Build
npm run build            # prisma generate + optional WASM build + next build
npm run build:wasm       # Build Rust WASM module (hero-sim-wasm) — optional step

# Linting
npm run lint             # ESLint via next lint

# Testing
npm test                 # Run Jest test suite

# Database
npm run db:migrate       # Run Prisma migrations (dev)
npm run db:push          # Push schema without migrations
npm run db:studio        # Open Prisma Studio
npm run db:seed          # Seed development data
npm run db:seed:production  # Seed production data

# SEO
npm run verify:seo       # Verify SEO integrity (static)
npm run verify:seo:runtime  # Verify SEO at runtime (tsx)

# Bundle analysis
npm run analyze          # Build with bundle analyzer
```

## Architecture

**Stack**: Next.js 15 (App Router), React 19, TypeScript, Prisma (PostgreSQL), Tailwind v4, Framer Motion, Three.js / R3F, GSAP, next-auth v5 beta.

### Directory Layout

```
app/
  layout.tsx          — Root layout; detects admin routes via x-pathname header to toggle header/footer
  page.tsx            — Homepage
  pages/              — Marketing landing pages (each sub-folder is a route segment)
  admin/              — Admin UI (no site header/footer; protected by middleware)
  api/                — API route handlers grouped by domain (admin, ai-agent, blog, contact, lead, …)
  components/         — Shared UI components
    AIAgent/          — AI sales chat widget (deferred-loaded)
    Analytics/        — Google Analytics + Google Ads tracking wrappers
    SEO/              — StructuredData JSON-LD components
    ui/               — Shadcn-style primitives (button, card, tabs, …)
    illustrations/    — Animated SVG illustration components
    EnhancedHeader.tsx — Main site navigation
  data/               — Static/quasi-static data
    companyProfile.ts — SINGLE SOURCE OF TRUTH for company identity (branding, legal, social)
    navigation.ts     — Nav link definitions
    blogPosts.ts, resources.ts
  lib/
    prisma.ts         — Prisma client singleton
    googleAds.ts      — Google Ads conversion helpers
    zohoService.ts    — Zoho CRM service layer
    seo/              — SEO utilities: constants.ts, metadata.ts, routes.ts
  hooks/              — Custom React hooks
  types/              — Shared TypeScript types
prisma/
  schema.prisma       — PostgreSQL schema (see Data Models below)
  seed.ts / seed-production.ts
utils/                — Shared server/client utilities (performanceMonitoring, etc.)
middleware.ts         — Protects /admin/* and /api/admin/* with cookie-based password auth
instrumentation.ts    — Next.js instrumentation hook
```

### Key Architectural Patterns

**Admin auth** (`middleware.ts`): Simple cookie-based auth — the `admin_session` cookie value is compared directly to `ADMIN_PASSWORD` env var. No database, no JWT. Login page at `/login`.

**Admin route detection** (`app/layout.tsx`): Middleware sets an `x-pathname` response header on every request. The root layout reads this header to decide whether to render the site header/footer (skipped for `/admin/*`).

**Company identity** (`app/data/companyProfile.ts`): All brand names, legal identifiers (CIN/GST), social links, and contact info flow from this one file into UI components, SEO metadata, and JSON-LD structured data. Update here, not in scattered components.

**SEO metadata** (`app/lib/seo/`): `constants.ts` exports `SEO_SITE_URL` (resolved from `NEXT_PUBLIC_SITE_URL` → `NEXT_PUBLIC_APP_URL` → company profile URL). Use `toAbsoluteSeoUrl()` to build absolute URLs for OG images and canonicals.

**AI Agent** (`app/components/AIAgent/`): Configured via the admin panel at `/admin/ai-agent`. Supports OpenAI, Claude, and Gemini. Config and conversation history stored in `AIAgentConfig` / `AIConversation` Prisma models. Widget is deferred-loaded (`DeferredAIAgentWidget`) so it doesn't block page rendering.

**CRM / conversion pipeline**: Leads flow `ContactSubmission` → Zoho CRM (via `app/lib/zohoService.ts`) + Google Ads conversion tracking. Failed pushes queue in `IntegrationRetry`. All interactions logged to `IntegrationLog`. Settings stored in `IntegrationSettings` DB model (configured via `/admin/integrations`).

**WASM module** (`rust/hero-sim-wasm`): Optional Rust/wasm-pack build for hero section particle simulation. Output goes to `public/wasm/hero_sim/`. Build is best-effort — CI skips it if wasm-pack is unavailable.

### Data Models (Prisma)

Core models: `BlogPost`, `Author`, `Comment`, `Resource`, `Project`, `Technology`, `Testimonial`, `TeamMember`, `Service`, `ContactSubmission`, `NewsletterSubscription`, `User`.

Integration models: `IntegrationSettings`, `Lead`, `IntegrationLog`, `IntegrationRetry`.

AI models: `AIAgentConfig`, `AIConversation`, `AIAnalytics`.

Extended lead model: `HealthcareLeadMetadata` (one-to-one with `Lead`).

## Environment Variables

See `ENV_VARIABLES.md` for the full list. Required variables:

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `ADMIN_PASSWORD` | Admin panel password (cookie auth) |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for SEO/sitemap (e.g. `https://vedpragya.com`) |
| `ZOHO_CLIENT_ID/SECRET/REFRESH_TOKEN` | Zoho CRM OAuth |
| `GOOGLE_CONVERSION_ID`, `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Ads + Analytics |

AI agent API keys are stored encrypted in the database and configured via the admin UI — not in `.env`.
