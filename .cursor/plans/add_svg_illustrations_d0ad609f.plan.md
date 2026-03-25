---
name: Add SVG Illustrations
overview: Add custom inline SVG line-art illustrations in brand colors (navy, electric blue, gold), animated with Framer Motion, to 5 high-visibility locations across the site for a premium, high-converting feel.
todos:
  - id: create-illustrations-folder
    content: Create app/components/illustrations/ with WebDevIllustration, AINetworkIllustration, ERPIllustration, MarketingIllustration, ShopifyIllustration, and index.ts barrel export
    status: pending
  - id: integrate-hero-mobile
    content: Add WebDevIllustration to HeroSection.tsx for mobile (lg:hidden block below CTA buttons)
    status: pending
  - id: integrate-bento-cards
    content: Add WebDevIllustration and ERPIllustration as accent overlays in the two large bento cards in app/page.tsx
    status: pending
  - id: integrate-process-timeline
    content: Add a decorative illustration to the ProcessTimeline.tsx section header (md:block right-side accent)
    status: pending
isProject: false
---

# Add SVG Illustrations to Website

## Approach

Minimalist line-art SVGs built as React components — zero external requests, perfectly on-brand (navy `#1A3A6C`, electric blue `#2563EB`, gold `#D4870A`), animated with Framer Motion's `pathLength` draw-in effect on scroll + gentle idle float. Works on both light and dark backgrounds.

## New Files — `app/components/illustrations/`

5 self-contained illustration components + 1 barrel export:

- `**WebDevIllustration.tsx**` — Browser window, floating code brackets `{ }`, cursor blink, code lines
- `**AINetworkIllustration.tsx**` — Neural network nodes connected by glowing lines, pulsing center node
- `**ERPIllustration.tsx**` — Connected module boxes (CRM, ERP, DB, API) linked by data-flow lines
- `**MarketingIllustration.tsx**` — Ascending bar chart + circle target/crosshair, trending arrow
- `**ShopifyIllustration.tsx**` — Storefront with cart icon, upward trend line, floating product tags
- `**index.ts**` — Barrel export for all five

Each illustration uses:

- `stroke` only (no fill) — clean line-art aesthetic
- `motion.path` with `pathLength` animated `0 → 1` on scroll entry
- Idle `y: [-6, 6]` float loop after draw-in completes
- Respects `useReducedMotion()`

## Integrations — Existing Files Modified

**1. `[app/components/home/HeroSection.tsx](app/components/home/HeroSection.tsx)`**

- The right column `DashboardVisual` is `hidden lg:block` — mobile users see no visual
- Add a `lg:hidden` block below the CTA buttons with `WebDevIllustration` (smaller, centered)
- Gives mobile visitors a premium branded visual above the fold

**2. `[app/page.tsx](app/page.tsx)`**

- The bento grid has two `large: true` cards: `web` and `erp`
- Add `WebDevIllustration` as an absolutely-positioned bottom-right accent in the web card
- Add `ERPIllustration` in the ERP large card
- Small non-interactive illustrations (`pointer-events-none`, `opacity-60`) so they don't compete with the link

**3. `[app/components/home/ProcessTimeline.tsx](app/components/home/ProcessTimeline.tsx)`**

- Currently text + number blocks on a navy `#0C1B33` background
- Add a decorative `MarketingIllustration` or abstract flow SVG to the right side of the section header, visible `md:block`

## Animation Pattern (consistent across all illustrations)

```tsx
// On scroll: draw in paths, then float idle
const drawIn = { pathLength: [0, 1], opacity: [0, 1] };
const floatIdle = { y: [-6, 6, -6], transition: { repeat: Infinity, duration: 4 } };
```

## Brand Color Usage in SVGs

- Primary strokes: `stroke="#2563EB"` (electric blue)
- Accent strokes: `stroke="#D4870A"` (gold) for highlight paths
- Muted structural lines: `stroke="currentColor" opacity="0.2"` (adapts to dark/light mode)
- Stroke width: `1.5` for main paths, `1` for secondary detail

