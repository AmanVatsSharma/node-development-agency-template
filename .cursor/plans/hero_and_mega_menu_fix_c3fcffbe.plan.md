---
name: Hero and Mega Menu Fix
overview: Upgrade the hero section to feel genuinely impactful (bigger type, proper visual split, dramatic background) and completely redesign the mega menu so all 7 service sections are visible at a glance with no scrolling.
todos:
  - id: hero-upgrade
    content: "Upgrade HeroSection.tsx: bigger headline (xl:text-8xl), fix grid to 52/48 split, add spotlight beam background, scale up DashboardVisual, three-line editorial headline"
    status: completed
  - id: megamenu-rebuild
    content: "Rebuild mega menu in EnhancedHeader.tsx: 6-column flat grid (5 service cols + featured), consolidate 7 sections to 5, drop descriptions, enforce max-height, everything visible at a glance"
    status: completed
isProject: false
---

# Hero Section + Mega Menu Redesign

## The Problems

**Hero (`HeroSection.tsx`):**

- Headline maxes at `xl:text-[4.5rem]` (72px) — world-class heroes use 96–128px
- Grid is `lg:grid-cols-[1fr_auto]` so the visual gets only its natural width, never filling the right half
- Background feels flat — no central light source, no dramatic depth

**Mega menu (`EnhancedHeader.tsx`):**

- `servicesMegaMenu.sections` has 7 sections (total 26+ items) rendered in a `grid-cols-4` — sections 5–7 wrap and scroll off screen
- Google Ads section alone has 9 items — one column is ~396px tall
- Result: a 700–800px tall panel with vertical scroll, defeating the purpose

---

## Hero Fix — `app/components/home/HeroSection.tsx`

**Headline scale bump:**

```
text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
```

At XL this is 96px. On a 1440px screen that's the right weight.

**Grid fix:** Change from `lg:grid-cols-[1fr_auto]` to `lg:grid-cols-[52%_48%]` so the visual always takes 48% of the container width. Remove `max-w-[460px]` constraint on `DashboardVisual`, replace with `w-full`.

**Background depth:** Add a centered radial "beam" element — a tall, narrow radial gradient from white/blue at center-top fading to transparent, absolutely positioned. This is the classic Linear/Vercel "spotlight" treatment. Pure CSS, no new deps.

```jsx
{/* Spotlight beam */}
<div className="absolute top-0 left-[30%] w-[40%] h-[70%] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.18)_0%,transparent_70%)] pointer-events-none" />
```

**Visual scale:** `DashboardVisual` removes its own `max-w-[460px]` cap, uses `w-full max-w-[560px]` so it fills the column properly on large screens.

**Word cycling:** Move the animated word to its own full line for more visual weight:

```jsx
<h1>
  We Build
  <br />
  <span className="cycling-word">{word}</span>  {/* own line, golden */}
  <br />
  <span className="text-white/80">That Last.</span>
</h1>
```

Three-line headline is more editorial and impactful.

---

## Mega Menu Fix — `app/components/EnhancedHeader.tsx`

**Core principle:** Everything scannable at a glance, no scroll, no overflow.

**New layout — full-width panel, 2-row structure:**

```
Row 1 (service columns, 6-col grid):
┌──────────────┬──────────────┬──────────────┬──────────────┬──────────────┬──────────────────────┐
│ Web & Dev    │ AI & Auto    │ E-Commerce   │ Marketing    │ Specialty    │  ← Featured card     │
│ • Next.js    │ • AI Chatbot │ • Shopify    │ • Google Ads │ • Trading    │  (spans 1 col,       │
│ • React.js   │ • Voice AI   │ • Headless   │ • Enterprise │ • Healthcare │   navy bg,           │
│ • Web Dev    │ • WhatsApp   │ • Store Setup│ • SEO Audit  │              │   gold CTA)          │
│ • Websites   │ • CRM        │              │ • B2B Leads  │              │                      │
└──────────────┴──────────────┴──────────────┴──────────────┴──────────────┴──────────────────────┘
```

**Specific changes:**

- Consolidate 7 sections → 5 service columns + 1 featured = 6 columns total in a `grid-cols-6`
- **Web & Dev**: Next.js, React, Web Development, Business Websites (4 items, drop duplicates)
- **AI & Automation**: AI Chatbot, Voice Agents, WhatsApp API, CRM (4 items)
- **E-Commerce**: Shopify Headless, Product Pages, Store Setup (3 items)
- **Marketing & Ads**: Google Ads Ecosystem, Enterprise Ads, B2B Leads, SEO Audit (4 items — drop lower-tier items, link to full page)
- **Specialty**: Trading Software, Market Data API, Healthcare Software (3 items)
- **Featured panel**: Google Ads Ecosystem with gold CTA (existing)

**Item rendering:** Drop the description line from each link — just icon + name. This halves the vertical height per item. Each column fits 4 items at `36px` each = 144px content + 32px header = 176px per column. Well under viewport.

**"See all services →"** link at the bottom of each column pointing to `/pages/services`.

**Panel max-height:** `max-h-[340px]` enforced — if any column somehow overflows, it shows a bottom fade with "more →", but with the trimmed item counts this won't trigger.

---

## Files Changed


| File                                  | What Changes                                             |
| ------------------------------------- | -------------------------------------------------------- |
| `app/components/home/HeroSection.tsx` | Headline scale, grid ratio, spotlight beam, visual width |
| `app/components/EnhancedHeader.tsx`   | Mega menu rebuilt as 6-col flat grid, trimmed items      |


No other files change.