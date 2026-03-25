---
name: SEO Overhaul
overview: Fix all technical SEO bugs, eliminate "Enterprise Hero" brand bleed, wire up missing structured data, and add high-impact schema types to dramatically improve crawlability, rich-result eligibility, and page-level authority.
todos:
  - id: fix-brand-bleed
    content: Fix SEO_DEFAULT_DESCRIPTION in constants.ts — replace 'Enterprise Hero' with Vedpragya branding
    status: completed
  - id: fix-blog-brand
    content: Fix blog post metadata in [slug]/layout.tsx — replace 'Enterprise Hero Blog' with 'Vedpragya Blog' in titles, descriptions, keywords
    status: completed
  - id: fix-web-dev-layout
    content: Create app/pages/web-development/layout.tsx that re-exports metadata from metadata.ts to activate orphaned metadata
    status: completed
  - id: fix-ga-id
    content: Replace hardcoded G-XXXXXXXXXX GA measurement ID with environment variable in layout.tsx
    status: completed
  - id: fix-org-logo
    content: Pass logo URL to OrganizationStructuredData in layout.tsx for Knowledge Panel eligibility
    status: completed
  - id: wire-article-jsonld
    content: Import and inject ArticleStructuredData into blog post page.tsx for Article rich-result eligibility
    status: completed
  - id: add-breadcrumb-schema
    content: Add BreadcrumbStructuredData component in StructuredData.tsx and wire it into key service/landing pages
    status: completed
  - id: add-local-business-schema
    content: Add ProfessionalService/LocalBusiness JSON-LD schema to layout.tsx using companyProfile data
    status: completed
  - id: add-social-profiles
    content: Add real social profile URLs to companyProfile.ts social field to populate sameAs in Organization JSON-LD
    status: completed
  - id: create-og-image
    content: Create a proper 1200×630 OG social-share card image and update SEO_DEFAULT_OG_IMAGE_PATH
    status: in_progress
isProject: false
---

# SEO Overhaul Plan

## Current Critical Issues

- **Brand bleed** — `SEO_DEFAULT_DESCRIPTION` in `[app/lib/seo/constants.ts](app/lib/seo/constants.ts)` still says *"Enterprise Hero"*. This leaks into every page that doesn't supply its own description, and into `WebsiteStructuredData`.
- **Blog titles say "| Enterprise Hero Blog"** — `[app/pages/blog/[slug]/layout.tsx](app/pages/blog/[slug]/layout.tsx)` (lines 75 & 97-98) uses the old brand in every post title, description and keywords.
- `**/pages/web-development` has orphaned metadata** — `[app/pages/web-development/metadata.ts](app/pages/web-development/metadata.ts)` defines correct metadata but is never imported; there is no `layout.tsx` for that segment, so the page gets only the root defaults.
- **Organization JSON-LD has no logo** — `StructuredData.tsx` defaults `logo` to `undefined`; Google relies on this for Knowledge Panel.
- `**ArticleStructuredData` component exists but is never used** on blog post pages — missing Article rich-result opportunity.
- **Google Analytics placeholder `G-XXXXXXXXXX`** is live in production HTML and sends zero data.
- **No social profiles** — `social: {}` in `companyProfile.ts` → empty `sameAs` in Organization schema.
- `**/logo.png` used as 1200×630 OG image** — a logo is not a proper social-share card; wrong dimensions will be cropped by every platform.

---

## Fix 1 — Brand Name Consistency

**File:** `[app/lib/seo/constants.ts](app/lib/seo/constants.ts)` line 68

Change:

```
'Enterprise-grade web development, AI automation, and growth-focused digital services by Enterprise Hero.'
```

To a Vedpragya-branded description that matches the root `layout.tsx` copy:

```
'Enterprise-grade software development, AI systems, ERP, and digital services by Vedpragya — India.'
```

---

## Fix 2 — Blog Post Metadata Brand

**File:** `[app/pages/blog/[slug]/layout.tsx](app/pages/blog/[slug]/layout.tsx)` lines 75, 81–84, 97–101

- Replace `| Enterprise Hero Blog` → `| Vedpragya Blog` in both the DB and fallback title templates.
- Replace `'enterprise hero blog'` keyword → `'vedpragya blog'`.
- Replace fallback description mentioning "Enterprise Hero blog" → Vedpragya.

---

## Fix 3 — Wire `/pages/web-development` Metadata

**File to create:** `app/pages/web-development/layout.tsx`

The existing `[app/pages/web-development/metadata.ts](app/pages/web-development/metadata.ts)` just needs a thin layout wrapper that re-exports it:

```typescript
export { metadata } from './metadata';
export default function WebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

---

## Fix 4 — Organization JSON-LD Logo

**File:** `[app/layout.tsx](app/layout.tsx)` line 110–118

Pass the logo URL to `OrganizationStructuredData`:

```tsx
<OrganizationStructuredData
  ...
  logo={`${SEO_SITE_URL}/logo.png`}
/>
```

---

## Fix 5 — Wire Article JSON-LD to Blog Posts

**File:** `[app/pages/blog/[slug]/page.tsx](app/pages/blog/[slug]/page.tsx)`

Import `ArticleStructuredData` from `StructuredData.tsx` and inject it in the blog post page using the post's `title`, `imageUrl`, `publishedAt`, `updatedAt`, and author from `companyProfile`. This gives every blog post Article rich-result eligibility.

---

## Fix 6 — Add BreadcrumbList Schema to Inner Pages

**File:** `[app/components/SEO/StructuredData.tsx](app/components/SEO/StructuredData.tsx)`

Add a new `BreadcrumbStructuredData` component. Wire it into key service/landing pages (web-development, shopify, SEO audit, etc.) for breadcrumb rich results in SERPs.

---

## Fix 7 — Add LocalBusiness / ProfessionalService Schema

**File:** `[app/layout.tsx](app/layout.tsx)` or a new `LocalBusinessStructuredData` component

Vedpragya is a registered Indian company with CIN/GST. A `ProfessionalService` (subtype of `LocalBusiness`) schema alongside `Organization` dramatically helps local and branded searches. Key fields: `@type: ProfessionalService`, `address` (Haryana, India), `areaServed`, `priceRange`, `foundingDate`.

---

## Fix 8 — Google Analytics Real ID

**File:** `[app/layout.tsx](app/layout.tsx)` line 127

Replace hardcoded `"G-XXXXXXXXXX"` with an environment variable reference:

```tsx
<GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
```

Then set `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR_REAL_ID` in `.env.local` / hosting env vars.

---

## Fix 9 — Social Profiles in companyProfile

**File:** `[app/data/companyProfile.ts](app/data/companyProfile.ts)` line 66

Add real social profile URLs to `social: {}` so `sameAs` in Organization JSON-LD is populated — this directly boosts Knowledge Panel and brand trust signals.

---

## Fix 10 — Dedicated 1200×630 OG Image

**File:** `public/og-default.jpg` (new asset)

Create a proper 1200×630 branded social-share card image (company name, tagline, brand colors) and update `SEO_DEFAULT_OG_IMAGE_PATH` in `constants.ts` from `/logo.png` to `/og-default.jpg`. Also update the `width`/`height` declarations in `layout.tsx` to match.

---

## Priority Order

```
Fix 1 (brand bleed)       ← affects every page silently
Fix 2 (blog brand)        ← affects every blog post title/description
Fix 3 (web-dev metadata)  ← page currently has no unique metadata at all
Fix 8 (GA real ID)        ← you're flying blind on analytics
Fix 4 (org logo)          ← Knowledge Panel
Fix 5 (Article JSON-LD)   ← blog rich results
Fix 6 (BreadcrumbList)    ← SERP display
Fix 7 (LocalBusiness)     ← local/branded discovery
Fix 9 (social profiles)   ← sameAs / brand authority
Fix 10 (OG image)         ← social sharing click-through rate
```

