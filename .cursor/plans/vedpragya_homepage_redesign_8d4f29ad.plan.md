---
name: Vedpragya Homepage Redesign
overview: Complete redesign of Vedpragya's homepage, navbar, and core pages (About, Services, Portfolio, Contact). Moving from a neon "Enterprise Node.js" aesthetic to a sophisticated, authoritative, conversion-focused brand identity as a full-service software & IT company.
todos:
  - id: brand-identity
    content: Update companyProfile.ts brandName to Vedpragya
    status: completed
  - id: design-tokens
    content: Add new CSS design tokens (navy/gold palette) and Sora + DM Sans fonts in globals.css and layout.tsx
    status: completed
  - id: navbar-redesign
    content: Redesign EnhancedHeader.tsx with Vedpragya logo, refined nav styling, updated mega menu
    status: completed
  - id: homepage-hero
    content: Rewrite homepage hero section in page.tsx with new messaging and visual design
    status: completed
  - id: homepage-sections
    content: Rewrite services, products, and CTA inline sections in page.tsx
    status: completed
  - id: home-components
    content: Restyle all 8 home section components (StatsCounter, WhyChooseUs, TechStack, Industry, CaseStudy, Testimonial, Process, GlobalPresence)
    status: completed
  - id: about-page
    content: Redesign app/pages/about/page.tsx with Vedpragya story, founder, mission
    status: completed
  - id: services-page
    content: Redesign app/pages/services/page.tsx as comprehensive service index
    status: completed
  - id: portfolio-page
    content: Redesign app/pages/portfolio/page.tsx with products + client work
    status: completed
  - id: contact-page
    content: Redesign app/pages/contact/page.tsx with clean form + Start a Project framing
    status: completed
isProject: false
---

# Vedpragya Full Website Redesign

## Design Philosophy

**Tone:** Authoritative, direct, trustworthy — like a senior engineering firm, not a dev shop.
**NOT:** Salesy, neon/matrix-looking, or generic "AI agency" templates.
**Key message:** "Vedpragya builds software that transforms businesses" — clear, confident, evidenced.

## New Design System

**Color palette** (replacing neon green/cyan matrix aesthetic):

- Brand deep: `#0C1B33` (authoritative navy)
- Brand: `#1A3A6C` (navy blue)
- Accent: `#D4870A` (amber gold — warmth, distinctiveness)
- Electric: `#2563EB` (for tech CTAs)
- Background light: `#FAFAFA` / dark: `#080C14`
- Text: `#111827` / muted: `#6B7280`

**Typography:**

- Display: **Sora** (Google Font — strong, distinctive, modern)
- Body: **DM Sans** (clean, readable)
- Both added via `app/layout.tsx` `next/font/google`

**Aesthetic direction:** Deep navy hero with gold accents, generous white space, editorial-style section layouts, subtle depth (not glassmorphism soup), asymmetric grid moments.

---

## Brand Identity Update

`**[app/data/companyProfile.ts](app/data/companyProfile.ts)`**

- Change `brandName: "Enterprise Hero"` → `"Vedpragya"`
- All navbar logos, titles, footers will cascade from this change

---

## Phase 1 — Foundation (Design Tokens + Fonts)

`**[app/globals.css](app/globals.css)`**

- Add CSS custom properties for new color palette as `@theme` block (Tailwind v4 style)
- Add new animation classes replacing neon glow effects
- Remove or override `.animate-pulse-glow` (neon), add `.vp-fade-up`, `.vp-stagger` etc.
- New glassmorphism reframed as clean card shadows, not hazy neon glow

`**[app/layout.tsx](app/layout.tsx)`**

- Add `Sora` + `DM_Sans` from `next/font/google`
- Apply font variables to `<body>`

---

## Phase 2 — Navbar Redesign

`**[app/components/EnhancedHeader.tsx](app/components/EnhancedHeader.tsx)**`

- Logo: "Vedpragya" with a small geometric monogram mark (SVG inline)
- CTA button: "Start a Project" (not "Contact Us")
- Nav item styling: refined, subtle underline hover instead of background pill
- Mega menu: redesigned with clean grid, no emoji icons (replace with lucide-react icons)
- Mobile: clean slide-down menu, refined

`**[app/data/navigation.ts](app/data/navigation.ts)**`

- Update `servicesMegaMenu.featured` section content to be Vedpragya-branded

---

## Phase 3 — Homepage Full Rewrite

`**[app/page.tsx](app/page.tsx)**`

Complete structural overhaul. New section order:

1. **Hero** — Dark navy full-bleed. Headline: *"Software That Moves Businesses Forward"*. Subtext: *"From web apps to AI systems, ERP to e-commerce — we engineer technology that drives real outcomes."* Two CTAs: "See Our Work" + "Start a Project". Animated word-swap or subtle particle background (NOT 3D interactive thing — replace with elegant mesh gradient or animated SVG). Remove `HeroAnimationWrapper` dependency for main CTA area.
2. **Marquee trust strip** — Scrolling row: "500+ Projects · 200+ Clients · 5 Offices · 8+ Years · India · UAE · USA"
3. **Services pillars** (6 cards, 2-column stagger on desktop) — Web & Mobile Apps, AI & Automation, E-Commerce Platforms, ERP & Enterprise Software, Digital Marketing, Trading & Finance Tech. Each with icon, one-line description, and link.
4. **Products showcase** — "Products we've shipped" — Promerchants, TradeZen, BharatERP, MailZen, Waterakt, SwiftShift, CodeYog. Horizontal scroll cards or featured grid. This is a strong differentiator.
5. **Numbers / Stats** — `StatsCounter` component (restyled)
6. **Why Vedpragya** — `WhyChooseUs` (restyled, new content: "Built to last. Engineered to scale.")
7. **Case Studies** — `CaseStudyShowcase` (restyled)
8. **Process** — `ProcessTimeline` (restyled: dark section, numbered steps)
9. **Testimonials** — `TestimonialCarousel` (restyled)
10. **CTA close** — Deep navy band. *"Ready to build something that lasts?"* + "Start Your Project" button.

Remove: `GlobalPresence`, `TechStackShowcase`, `IndustryShowcase` from homepage (move detail to inner pages to keep homepage focused). OR condense them heavily.

**Home components to restyle** (no full rewrites needed, mainly CSS/content):

- `StatsCounter.tsx` — Update stat labels + styling to match new palette
- `WhyChooseUs.tsx` — Update copy + colors
- `TechStackShowcase.tsx` — Update to new design (already read in full)
- `IndustryShowcase.tsx` — Update styling
- `CaseStudyShowcase.tsx` — Update styling
- `TestimonialCarousel.tsx` — Update colors
- `ProcessTimeline.tsx` — Update to dark section style
- `GlobalPresence.tsx` — Update styling

---

## Phase 4 — Core Pages

`**[app/pages/about/page.tsx](app/pages/about/page.tsx)`**

- Vedpragya story, founder section (Aman Kumar Sharma), mission, team values
- Timeline of company milestones

`**[app/pages/services/page.tsx](app/pages/services/page.tsx)`**

- Full service index — all 6 service categories with descriptions + links to service landings

`**[app/pages/portfolio/page.tsx](app/pages/portfolio/page.tsx)`**

- Products + client work showcase

`**[app/pages/contact/page.tsx](app/pages/contact/page.tsx)**`

- Clean contact form + office info + "Start a Project" framing

---

## File Change Summary


| File                                  | Change Type                    |
| ------------------------------------- | ------------------------------ |
| `app/data/companyProfile.ts`          | Update brandName               |
| `app/globals.css`                     | New design tokens + animations |
| `app/layout.tsx`                      | New fonts                      |
| `app/components/EnhancedHeader.tsx`   | Redesign navbar                |
| `app/data/navigation.ts`              | Update mega menu content       |
| `app/page.tsx`                        | Full rewrite                   |
| `app/components/home/*.tsx` (8 files) | Restyle + content update       |
| `app/pages/about/page.tsx`            | Redesign                       |
| `app/pages/services/page.tsx`         | Redesign                       |
| `app/pages/portfolio/page.tsx`        | Redesign                       |
| `app/pages/contact/page.tsx`          | Redesign                       |


