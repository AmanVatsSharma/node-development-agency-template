---
name: World-Class Vedpragya Redesign
overview: Elevate the entire Vedpragya website to world-class quality — inspired by Linear, Vercel, Stripe, and Razorpay. The current redesign is a good foundation but lacks the visual depth, illustration work, bento grids, animated hero elements, and polished footer that separate great agency sites from outstanding ones.
todos:
  - id: global-visual-system
    content: Add grain texture (light/dark opacity), mesh gradient, bento card styles, word-swap animation, mobile-safe utilities to globals.css
    status: completed
  - id: announcement-bar
    content: Add dismissible AnnouncementBar (mobile-truncated, 44px tap target) + frosted glass polish to EnhancedHeader.tsx; update layout.tsx pt-offset
    status: completed
  - id: hero-split-layout
    content: Rewrite hero with split layout — right SVG hidden on mobile, word cycling headline, responsive font sizes, stacked CTAs on mobile
    status: completed
  - id: tech-logo-strip
    content: Add tech name marquee strip — mobile speed/height adjusted, overflow-hidden, light/dark backgrounds
    status: completed
  - id: bento-services
    content: Asymmetric bento services grid — single col mobile, 2-col tablet, bento desktop; light/dark card variants
    status: completed
  - id: product-spotlight
    content: Tabbed product spotlight — horizontal scroll chip tabs on mobile, side-by-side on desktop; light/dark panel variants
    status: completed
  - id: footer-rewrite
    content: Rewrite Footer.tsx — accordion collapse on mobile, newsletter stacked on mobile, full multi-column on desktop, Vedpragya brand
    status: completed
  - id: why-choose-editorial
    content: Editorial 2-column WhyChooseUs — stacks to single col on mobile; light/dark section and card backgrounds
    status: completed
  - id: timeline-connector
    content: Add animated connector line to ProcessTimeline — connector hidden on mobile, vertical variant shown
    status: completed
  - id: case-study-hover
    content: CaseStudyShowcase hover expand — replaced with persistent link on touch/mobile; light/dark section backgrounds
    status: completed
isProject: false
---

# Vedpragya — World-Class Redesign v2

## What's Missing vs World-Class

The previous pass established the design system and content. What's still needed to match Linear/Vercel/Razorpay quality:

- Hero has no visual element — just text on a dark background
- No animated/morphing headline (word cycling effect)
- No client/tech logo strip (trust signal every top site has)
- Services section is standard cards — not a distinctive bento grid
- No product spotlight with a "mockup frame" visual
- Footer still uses "Enterprise Hero" branding and generic gradient
- Navbar has no announcement bar or frosted glass polish
- No grain/noise texture overlay for depth
- No inline SVG illustrations in hero or sections
- Dark mode support is incomplete — many new elements will need explicit dark variants

---

## Mobile Responsiveness Contract

Every component is built mobile-first (`sm:` / `md:` / `lg:` breakpoints only added upward). Specific rules:

**Announcement bar** — Hidden on screens narrower than 360px using `hidden xs:flex`; text truncated with `truncate` on small screens. Dismiss button always reachable (min 44px tap target).

**Navbar** — Already responsive; no changes to existing mobile menu logic. Announcement bar height is accounted for in `pt-` offset on `<main>` in `layout.tsx` when bar is visible.

**Hero split layout** — On mobile (`< lg`): right-side SVG visual is hidden (`hidden lg:block`); left text column takes full width. CTA buttons stack vertically (`flex-col sm:flex-row`). Headline font size: `text-3xl sm:text-5xl lg:text-7xl`.

**Tech logo strip** — Marquee runs at 60% speed on mobile (CSS `animation-duration` media query). Strip height fixed at `py-3` on mobile, `py-4` on desktop.

**Bento services grid** — On mobile: single column stack. On tablet (`sm`): 2-column equal grid. On desktop (`lg`): asymmetric bento (large card spans 2 rows). CSS Grid with `grid-template-areas` for the asymmetric layout.

**Product spotlight** — On mobile: tabs become a horizontal scroll chip row (`overflow-x-auto`, `flex gap-2`); panel displays below. On desktop: side-by-side tab list + panel.

**Stats counter** — Already `grid-cols-2 md:grid-cols-4`. Dark dividers use `divide-y md:divide-y-0 md:divide-x` — already in place.

**Footer** — On mobile: single column, all link sections collapsed behind accordion toggles (already has `CollapsibleSection` pattern, will be preserved in rewrite). Newsletter signup stacks label + input vertically. Bottom bar wraps to 2 lines on small screens.

**WhyChooseUs editorial** — On mobile: left statement column and right card grid stack vertically, full width.

**ProcessTimeline** — Already 2-column on desktop, single column on mobile. Connector line hidden on mobile, vertical connector shown.

**CaseStudyShowcase** — On mobile: cards are full-width stack; hover expand effect replaced with a persistent "View details" link (touch devices have no hover).

**Typography clamp** — All section headings use `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` (or similar clamp) — never a fixed large size that overflows on mobile.

**Touch targets** — All interactive elements (buttons, links, tabs, accordion toggles) have `min-h-[44px]` and `min-w-[44px]` padding.

**Overflow safety** — All sections have `overflow-hidden` to prevent horizontal scroll from absolute-positioned decorative blobs.

**Images / SVGs** — All inline SVGs have explicit `width` and `height` and `viewBox`, with `max-w-full` to prevent overflow. The hero right-side SVG visual uses `w-full h-auto max-w-[420px]`.

## Light / Dark Mode Contract

Every component must look equally good in both modes. The rules applied throughout:

- **Backgrounds**: Light sections use `bg-white` or `bg-[#F4F4F5]`; dark sections (`#0C1B33`, `#080C14`) stay dark in both modes since they are intentional brand-dark panels, not theme-reactive.
- **Text**: `text-[#0C1B33] dark:text-white` for headings; `text-gray-500 dark:text-gray-400` for body.
- **Cards**: `bg-white dark:bg-[#0F1623]` with `border-gray-100 dark:border-[#1E293B]`.
- **Announcement bar**: Gold `bg-[#D4870A]` in both modes (it is a brand color, not a background).
- **Navbar**: Light mode = white/95; dark mode = `#080C14/95` — already in place, verified.
- **Grain texture**: Opacity 2% in light mode, 3% in dark mode so it remains visible.
- **Bento cards**: Light background with dark border hover; dark mode inverts to dark card + lighter border.
- **Hero section**: Always dark navy (`#0C1B33`) — this is intentional brand presentation, identical in both themes.
- **Logo strip**: `bg-[#F4F4F5] dark:bg-[#0F1623]` with `text-gray-400 dark:text-gray-600`.
- **Footer**: Always dark navy (`#080C14`) — footer is brand-dark in both modes.
- **Product spotlight tabs**: Active tab `bg-[#0C1B33] text-white dark:bg-[#1A3A6C]`; inactive `hover:bg-gray-50 dark:hover:bg-[#151C2B]`.
- **ThemeToggle**: Already present in navbar — no change needed.
- `**next-themes`**: Already configured in layout via `ThemeProvider` with `attribute="class"` — Tailwind `dark:` prefix works automatically.

Any component that uses inline `style={}` for colors must also handle the dark variant using `dark:` Tailwind classes alongside, not `style={}` alone.

---

## Design Inspiration

- **Linear** — Dark, precise grid, subtle beam/glow in hero, sharp typography
- **Vercel** — Frosted glass navbar, animated grid, bento features
- **Stripe** — Bold hero with visual mockup on right, colorful gradient mesh
- **Razorpay** — Indian tech, clean, illustrated sections, trust strips

---

## New Visual Elements

**Grain texture overlay** — Single CSS `::before` pseudo-element on `body` with a 2% opacity SVG noise filter. Adds depth without weight.

**Mesh gradient blobs** — In hero and CTA sections, soft `radial-gradient` circles (not animated, CSS only) instead of solid dark backgrounds.

**Announcement bar** — Above the navbar, a thin dismissible stripe: *"Vedpragya now offers AI Voice Agents — Book a demo →"*

---

## File Changes

### 1. `app/globals.css`

- Add grain texture on `body::after` — `opacity: 0.02` light / `.dark body::after { opacity: 0.035 }` dark
- Add `.vp-mesh-hero` gradient background class (animated soft color blobs)
- Add `.vp-bento-card` elevated card style with gradient border on hover — light and dark variants
- Add `@keyframes vp-word-swap` for the hero text cycling animation
- Add `.vp-logo-strip` for logo bar scrolling
- Add `.dark .vp-bento-card` override for dark mode card backgrounds

### 2. `app/components/EnhancedHeader.tsx`

- Add a top `AnnouncementBar` component (dismissible, gold background stripe)
- Header `z-index` bump to account for announcement bar
- Frosted glass polish: `backdrop-filter: saturate(180%) blur(16px)` on scroll

### 3. `app/page.tsx` — Hero section overhaul (dark in both modes)

Replace current text-only hero with a **split layout**:

```
Left half (60%):               Right half (40%):
- Badge pill                   - Geometric "code window" SVG
- Animated headline            - with floating tech cards
  (word cycling: Web Apps /    - subtle floating animation
   AI Systems / ERP /
   E-Commerce)
- Sub-headline
- Two CTAs
- Trust mini-strip
```

The right visual is a **pure inline SVG** — a stylized code editor frame with 3 floating tag chips (React, Node.js, AI) — no external dependencies.

**Logo strip** (new section, between hero and services):
A deduplicated scrolling marquee of technology names in small caps: React · Next.js · Node.js · PostgreSQL · AWS · OpenAI · Shopify · Redis · Docker · Stripe

- Light mode: `bg-[#F4F4F5]` with `text-gray-400`
- Dark mode: `dark:bg-[#0F1623]` with `dark:text-gray-600`

**Services section** — Transform from 6 identical cards to a **bento grid**:

- Light mode: cards `bg-white` with `border-gray-100`
- Dark mode: cards `dark:bg-[#0F1623]` with `dark:border-[#1E293B]`

```
[  Web & Mobile Apps  (large, left) ] [ AI & Automation ]
                                       [ E-Commerce      ]
[ ERP & Enterprise (wide, bottom-L) ] [ Digital Marketing]
                                       [ Trading & Finance]
```

Large card (Web & Mobile) gets a background SVG pattern. All cards get gradient border on hover.

**Product spotlight** — Replace the 7-card grid with a tabbed showcase:

- Left: Tab list (BharatERP, TradeZen, Promerchants, etc.)
- Right: Animated panel with product description + 3 key metrics in large type
- Far more impactful than a grid of equal-weight cards
- Light mode: section `bg-[#F4F4F5]`, panel `bg-white`; dark mode: `dark:bg-[#080C14]`, panel `dark:bg-[#0F1623]`

### 4. `app/components/Footer.tsx` — Complete rewrite

New structure (dark navy `#080C14`, matching the design system):

```
Row 1: Brand column | Products | Services | Company | Legal
Row 2: Newsletter signup bar (full width)
Row 3: Bottom bar — copyright · legal links · social icons
```

- Brand column: Vedpragya SVG mark + tagline + "Made in India" badge
- Products column: links to all 7 products
- Services column: 6 service areas
- Company column: About, Portfolio, Blog, Contact, Client Login
- No more "Enterprise Hero" or Node.js-specific copy
- Newsletter signup integrated inline (reuses existing `NewsletterSignup` component)
- Bottom strip: `© 2025 Vedpragya Bharat Pvt. Ltd. · CIN: U47912HR... · GST: ...`
- Social icons row (placeholder links)

### 5. Home section components (targeted improvements)

`**WhyChooseUs.tsx**` — Change from 6 equal cards to an **asymmetric 2-column split**: left column has a large statement with a pull quote; right column has the 6 cards in a 2×3 grid.

- Section: `bg-[#F4F4F5] dark:bg-[#0F1623]`; cards: `bg-white dark:bg-[#080C14]`

`**ProcessTimeline.tsx`** — Already dark navy — intentionally brand-dark in both modes. Add animated connector line.

`**CaseStudyShowcase.tsx`** — Add hover expand overlay effect. Section: `bg-[#F4F4F5] dark:bg-[#080C14]`.

---

## Illustration Strategy

Use existing `/public/illustrations/` SVGs but embed them differently:

- In hero: use `undraw_programming.svg` as the right-side visual element, filtered to match brand colors via CSS `filter: hue-rotate(...)` and opacity
- In the "Why Vedpragya" section: `undraw_cloud_hosting.svg` as a subtle background decoration

No new illustration files needed — CSS transform and filter gives them brand-appropriate coloring.

---

## Explicit Non-Changes

- Service landing pages — untouched
- About, Services, Portfolio, Contact pages — untouched (already redesigned)
- Admin routes — untouched
- API routes — untouched

---

## File Summary


| File                                        | Change                                                                                |
| ------------------------------------------- | ------------------------------------------------------------------------------------- |
| `app/globals.css`                           | Grain texture, mesh gradient, bento card, word-swap animation                         |
| `app/components/EnhancedHeader.tsx`         | Announcement bar + frosted glass polish                                               |
| `app/page.tsx`                              | Split hero with SVG visual, tech logo strip, bento services, tabbed product spotlight |
| `app/components/Footer.tsx`                 | Complete rewrite, Vedpragya brand, multi-column, newsletter                           |
| `app/components/home/WhyChooseUs.tsx`       | Editorial 2-column split layout                                                       |
| `app/components/home/ProcessTimeline.tsx`   | Animated connector line                                                               |
| `app/components/home/CaseStudyShowcase.tsx` | Hover expand effect                                                                   |


