# Hero Redesign — Light Enterprise, High-Converting

**Date:** 2026-08-09
**Status:** Approved (pending spec review)
**Scope:** Rewrite `app/components/home/HeroSection.tsx`; adjust homepage mount of `FreeConsultationBanner`.

## Goal

Replace the current dark hero with a modern, beautiful, **high-converting** light hero built around an **inline lead form**. Aesthetic baseline: Linear / Vercel enterprise-grade — restrained, premium, fast. Target buyer: technical founders / CTOs (value-prop angle = technical expertise).

## Non-goals

- Changing the brand palette, fonts, or `globals.css` tokens (we use existing `--vp-*` variables).
- Touching the nav, tech logo strip section, or services bento grid that sit below the hero.
- Building a new lead API endpoint (we reuse `POST /api/lead`).
- Per-page metadata changes (hero is on `/`, metadata unchanged).

## Current state (what changes)

- Dark obsidian (`#080C14`) base with `BackgroundBeams` + `Spotlight` → **light** base (`#FAFAFA` → white card).
- Right column = decorative `CodeCard` (fake API JSON) → **right column = inline lead form**.
- 4-stat trust strip (`500+ / 200+ / 5 / 99%`) → **folded into a single badge line**; full logo strip lives in its own existing section below.
- Headline "India's Web Development & AI Agency." → **"Software, shipped like a product team."**
- Primary CTA "Start a Project" → **"Get a project estimate"** (value-framed; lower commitment).
- Homepage mounts `FreeConsultationBanner` → **removed** (competes with hero form). `FloatingConsultationButton` **stays** (corner, persistent).

## Visual direction

**Light enterprise.** Single vivid accent = existing `--vp-cta: #2563EB`. Near-black type `#111827`. Big whitespace.

### Background
- Base: `#FAFAFA` (light mode bg token).
- One soft radial glow, top-center: `radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)`.
- Near-invisible dotted grid texture: 2px dots, ~3% opacity, `24px` spacing — applied as a CSS background or SVG mask.
- **No** `BackgroundBeams`, **no** `Spotlight`, **no** particles. Restraint is the aesthetic.

### Type
- Headline: Sora (existing `--font-sora`), `text-display-lg` scale (`clamp(2.75rem, 6vw, 5rem)`), `font-weight: 700`, `letter-spacing: -0.025em`, `line-height: 1.05`.
- Sub-copy: DM Sans (existing body font), `text-lg/xl`, `#6B7280`.
- Form labels: DM Sans `text-sm font-medium`, `#374151`.

### Gradient word
- Applied **only** to "product team." in the headline.
- `linear-gradient(135deg, #1A3A6C 0%, #2563EB 60%, #D4870A 100%)` (existing `vp-gradient-text` utility).
- Static — no animation.

## Layout

Two-column split, `lg:grid-cols-[52%_48%]`, gap `xl:gap-16`, items centered. Container `max-w-7xl mx-auto`, padding `px-4 sm:px-6 lg:px-8`, vertical `pt-12 pb-20 lg:pt-16 lg:pb-24`. Min-height `min-h-screen` retained.

**Mobile (≤ lg):** single column. Copy first, form below (still above the fold on most phones). CTAs stack full-width.

### Left column (copy)

```
[ID badge]  ◍ vedpragya — India · UAE · USA   ·   500+ products shipped · 99% retention

Software, shipped
like a [gradient]product team.[/gradient]

Next.js 15 · AI agents · cloud platforms —
from MVP to enterprise, without the agency overhead.

[ Get a project estimate → ]   [ See our work ]
```

- **Badge:** pill, `border border-gray-200 bg-white`, `text-xs text-gray-600`, inline dot separators between location + the single killer stat line.
- **Headline:** 2 lines. "product team." carries the gradient.
- **Sub-line:** `text-lg/xl`, muted. Leads with stack tokens (self-qualification for technical buyers).
- **Primary CTA:** solid `--vp-cta` button, `text-white font-bold`, `min-h-[52px]`, shadow `--vp-cta-shadow`, rounded-xl. Arrow icon `→`. On click: **scrolls to + focuses the inline form** (on desktop the form is already visible, so this is a gentle visual cue + keyboard focus into the `name` field; on mobile it scrolls the form into view since it sits below the copy). Keeps all conversion on-page — does **not** route away to `/pages/contact`.
- **Secondary CTA:** ghost button, `border border-gray-300 text-gray-900`, hover `bg-gray-50`. Routes to `/pages/portfolio` (opens same tab).

### Right column (lead form)

Floating card: `bg-white`, `rounded-2xl`, `shadow-[--vp-shadow-lg]`, `border border-gray-100`, `p-6 sm:p-8`. Subtle top-edge accent (1px gradient line) for premium feel.

```
Let's scope your project.
Free · no obligation · <24h reply

Full name            [ ____________ ]
Work email           [ ____________ ]
Phone (optional)     [ ____________ ]
What do you need?    [ Web/App development  ▾ ]

[      Get my estimate  ▶      ]

⚡ Avg reply in 14 hrs
```

**Fields (4):**
1. `name` — text, required.
2. `email` — email, required, labelled "Work email" (B2B filter).
3. `phone` — tel, **optional**.
4. `projectType` — select, required. Options:
   - `Web / app development` (value: `web-app`)
   - `AI agent` (value: `ai-agent`)
   - `E-commerce` (value: `ecommerce`)
   - `Cloud / DevOps` (value: `cloud-devops`)
   - `Other` (value: `other`)

**Button:** full-width, primary style (same as hero primary CTA), copy **"Get my estimate"** + `▶`.

**Micro-trust:** form sub-title ("Free · no obligation · <24h reply") and below-button line ("⚡ Avg reply in 14 hrs").

## Interactions

### Entrance reveal (mount only)
Staggered fade-up, `opacity 0→1`, `translateY(12px)→0`, `400ms ease-out`:
- Badge: 0ms
- Headline: 80ms
- Sub-copy: 160ms
- CTAs: 240ms
- Form card: 320ms

No infinite animations.

### Form field interactions
- **Focus:** border → `--vp-cta` + `ring-2 ring-blue-100`.
- **Valid email:** faint green check icon (`#22c55e`) appears right of field.
- **Errors:** inline below field, `text-sm text-red-600` (`#DC2626`). No shake.

### Button interactions
- **Hover:** `translateY(-1px)`, shadow deepens, arrow/`▶` translates `2px` right.
- **Submitting:** spinner + "Sending…", disabled.

### Logo strip
Static row, monochrome at 40% opacity, hover → 100% opacity + color. No marquee. Centers + wraps on mobile.

## Form states

1. **Idle** — as designed.
2. **Submitting** — button: spinner + "Sending…", disabled. Fields remain editable but not focusable.
3. **Success** — card content swaps:
   - Form fields fade out (`200ms`).
   - Confirmation panel fades in: green check circle, **"Got it — we'll reply within 14 hours."**, secondary link **"Book a call now"** (opens existing `ConsultationModal`).
4. **Error** — inline message above the button: "Something went wrong — try again, or email support@vedpragya.com." Form **stays populated** (no retype). Button returns to idle.

## Technical wiring

### Submission
`POST /api/lead` with:
```json
{
  "name": "...",
  "email": "...",
  "phone": "...",
  "source": "hero-form",
  "leadSource": "Homepage Hero",
  "raw": {
    "projectType": "web-app",
    "timeOnPage": 42000,
    "timeToForm": 18000,
    "formCompletionTime": 9500,
    "scrollDepth": 12
  }
}
```
Reuses the existing route — **no new endpoint**. The route already calls `createZohoLead`, `verifyRecaptcha`, `logServerConversion`, and runs `calculateBusinessWebsiteLeadScore`.

### Spam protection
- Google reCAPTCHA **v3 (invisible)**. Site key from `getRecaptchaSiteKey()`.
- Token executed client-side on submit, sent as `recaptchaToken` in the payload.
- `verifyRecaptcha` runs server-side (existing). Humans never see a challenge.

### Analytics
- **Server-side (existing):** `logServerConversion` fires on successful lead (Google Ads conversion).
- **Client-side (new):** on success, fire `window.gtag?.('event', 'generate_lead', { source: 'hero-form' })`. Guard for absence of `gtag`.

### Component structure
- `app/components/home/HeroSection.tsx` — rewrite (the layout, copy, badge, CTAs, background, mount of `HeroLeadForm`).
- `app/components/home/HeroLeadForm.tsx` — **new** sub-component (the form card + all form state/logic). Keeps each file focused.

Both are `"use client"` (interactivity required).

### Homepage change
In `app/page.tsx`:
- Remove `<FreeConsultationBanner />` (lines added in the consultation port). Keep `<FloatingConsultationButton />`.
- Remove the now-unused import.

### Accessibility
- All inputs have `<label>` (floating labels visually, but real `<label>` elements in DOM).
- Form has `aria-labelledby` pointing to the form title.
- Error messages use `role="alert"` and `aria-describedby` linking to the field.
- Button has `aria-busy` while submitting.
- Color contrast: type `#111827` on `#FAFAFA` = 16.1:1 (AAA); muted `#6B7280` on `#FAFAFA` = 5.3:1 (AA).

### Performance
- No new dependencies. No `framer-motion` for the hero (CSS transitions + a tiny `IntersectionObserver` or mount effect for the reveal).
- Form is client-rendered but the surrounding copy is in a client component already; no SSR penalty beyond the existing hero.
- Logo strip uses existing `public/logos/*.png` (Node, TS, Python, SAP) + Next.js/React wordmarks (text or SVG, no new fetches).

## Files

| File | Action |
|---|---|
| `app/components/home/HeroSection.tsx` | **Rewrite** |
| `app/components/home/HeroLeadForm.tsx` | **Create** |
| `app/page.tsx` | Remove `FreeConsultationBanner` mount + import |

## Verification

- `npx tsc --noEmit` introduces **0 new** errors (current pre-existing errors unchanged).
- Dev server compiles the new hero without warnings.
- Manual: submit form → success state appears → lead row created in DB (check via Prisma Studio or `/api/lead` 200 response).
- Manual: confirm Google Ads conversion + GA4 event fire on success (Network tab + GA debugger).
- Responsive: check 375px (mobile), 768px (tablet), 1280px (desktop) — form below copy on mobile, side-by-side on desktop.
- Lighthouse: hero LCP remains competitive (form is client-rendered but lightweight).
