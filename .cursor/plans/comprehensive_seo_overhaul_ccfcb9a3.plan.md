---
name: Comprehensive SEO Overhaul
overview: Audit identified 5 critical gaps and 12+ improvement opportunities. The plan fixes technical issues, enriches structured data for rich snippets, improves metadata quality across all 40+ service pages, and adds HTTP headers/performance hints — all targeting maximum Google ranking uplift.
todos:
  - id: social-links
    content: Add verified social media links to companyProfile.social (LinkedIn, Instagram, Facebook, YouTube, X)
    status: completed
  - id: fix-duplicate-meta
    content: Remove duplicate metadata exports from about/services/portfolio page.tsx (keep only in layout.tsx)
    status: completed
  - id: fix-locale
    content: "Fix OG locale inconsistency: change buildPageMetadata default from en_IN to en_US"
    status: completed
  - id: consolidate-nextconfig
    content: Merge next.config.ts into next.config.js, delete next.config.ts, add HTTP security/SEO headers
    status: completed
  - id: faq-schema-new-layouts
    content: Create new layout.tsx files for website-development, website-services, shopify-store-setup with buildPageMetadata + BreadcrumbStructuredData + FAQStructuredData
    status: completed
  - id: faq-schema-existing
    content: Add FAQStructuredData to 13+ existing service page layout.tsx files with 3-5 real FAQ questions each
    status: completed
  - id: service-schema
    content: Add Service type JSON-LD to top 4 landing pages (web-development, google-ads-management, seo-audit, web-development-mumbai)
    status: completed
  - id: expand-keywords
    content: Expand keywords to 10-15 long-tail terms on thin service pages (reactjs-development, b2b-lead-generation, youtube-advertising, etc.)
    status: completed
  - id: sitemap-improvements
    content: "Improve sitemap: raise service page priorities, lower legal page priorities, use stable lastModified date"
    status: completed
  - id: gsc-verification
    content: Add Google Search Console verification meta tag to root app/layout.tsx metadata
    status: completed
  - id: preconnect-hints
    content: Add preconnect/dns-prefetch link hints in root layout for Google Fonts, GTM, and Google Ads
    status: completed
isProject: false
---

# Comprehensive SEO Overhaul — Vedpragya

## Current State Summary

The SEO foundation is solid (sitemap, robots.txt, `buildPageMetadata` helper, JSON-LD on root layout) but has several high-impact gaps preventing top rankings.

### Critical Gaps Found

- `companyProfile.social` is **empty** — so `sameAs` in all Organization/ProfessionalService JSON-LD is empty, killing Google Knowledge Panel authority
- **FAQ schema** (`FAQStructuredData` component exists but is unused on most service pages) — missed rich snippet opportunity for 20+ service pages
- **Duplicate metadata** on `about`, `services`, `portfolio` (metadata on both `layout.tsx` AND `page.tsx`) causing OG/title mismatch
- `buildPageMetadata` defaults to `**locale: 'en_IN'`** but root layout uses `**en_US`** — inconsistency
- **No HTTP security/SEO headers** in next.config (X-Frame-Options, Content-Security-Policy, X-Robots-Tag)
- **3 service pages missing breadcrumb JSON-LD** (`website-development`, `website-services`, `shopify-store-setup` have no `layout.tsx`)
- **Thin keywords** on several service layout files (e.g. `reactjs-development` has only 4 keywords)
- **Two `next.config` files** coexist (`next.config.ts` + `next.config.js`) — only one is used, risking dropped config

---

## Phase 1 — Critical Technical Fixes

### 1. Add social media links to `companyProfile`

- File: `[app/data/companyProfile.ts](app/data/companyProfile.ts)`
- Fill in verified social URLs for `linkedin`, `instagram`, `facebook`, `youtube`, `x`
- This directly populates `sameAs` in Organization + ProfessionalService JSON-LD on **every page**

### 2. Fix duplicate metadata on 3 routes

Remove the minimal `metadata` export from these `page.tsx` files (keep it only in `layout.tsx`):

- `[app/pages/about/page.tsx](app/pages/about/page.tsx)`
- `[app/pages/services/page.tsx](app/pages/services/page.tsx)`
- `[app/pages/portfolio/page.tsx](app/pages/portfolio/page.tsx)`

### 3. Fix OG locale inconsistency

- File: `[app/lib/seo/metadata.ts](app/lib/seo/metadata.ts)`
- Change default `locale` from `'en_IN'` to `'en_US'` (matches root layout)

### 4. Consolidate next.config files

- Merge `[next.config.ts](next.config.ts)` (has `eslint`/`typescript` flags) into `[next.config.js](next.config.js)`
- Delete `next.config.ts` after merge
- Add HTTP SEO/security headers to `next.config.js`:

```js
  headers: async () => [{
    source: '/(.*)',
    headers: [
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ]
  }]
  

```

---

## Phase 2 — Structured Data for Rich Snippets (Highest CTR Impact)

### 5. Add FAQ schema to all major service pages

Use the existing `FAQStructuredData` component from `[app/components/SEO/StructuredData.tsx](app/components/SEO/StructuredData.tsx)` (already built, just not used on most pages).

Add to the `layout.tsx` of these **16 service pages**:

- `reactjs-development`, `b2b-lead-generation-ads`, `youtube-advertising-management`
- `ecommerce-google-ads-optimization`, `enterprise-google-ads-management`
- `landing-page-optimization`, `performance-max-campaigns`, `google-ads-ecosystem`
- `local-business-google-ads`, `google-ads-audit-strategy`, `business-website`
- `website-development` (new layout.tsx), `website-services` (new layout.tsx)
- `shopify-store-setup` (new layout.tsx), `reactjs-development`, `crm`

Each FAQ gets 3-5 real questions per service (e.g. "How much does ReactJS development cost?", "How long does it take?", "What industries do you serve?")

### 6. Add breadcrumb JSON-LD to 3 pages missing layout.tsx

Create new `layout.tsx` files for:

- `[app/pages/website-development/layout.tsx](app/pages/website-development/layout.tsx)`
- `[app/pages/website-services/layout.tsx](app/pages/website-services/layout.tsx)`
- `[app/pages/shopify-store-setup/layout.tsx](app/pages/shopify-store-setup/layout.tsx)`

Each will use `buildPageMetadata` (moving metadata from `page.tsx`) + `BreadcrumbStructuredData` + `FAQStructuredData`.

### 7. Add `ServiceSchema` to high-value service layouts

Add a `Service` type JSON-LD block to top landing pages:

- `web-development`, `web-development-mumbai`, `google-ads-management`, `seo-audit`
- Includes: `serviceType`, `provider`, `areaServed`, `offers`

---

## Phase 3 — Metadata Quality Improvements

### 8. Expand keywords on thin service pages

Pages with only 3-4 keywords get expanded to 10-15 targeted long-tail keywords:

- `[app/pages/reactjs-development/layout.tsx](app/pages/reactjs-development/layout.tsx)`
- `[app/pages/b2b-lead-generation-ads/layout.tsx](app/pages/b2b-lead-generation-ads/layout.tsx)`
- `[app/pages/youtube-advertising-management/layout.tsx](app/pages/youtube-advertising-management/layout.tsx)`
- `[app/pages/ecommerce-google-ads-optimization/layout.tsx](app/pages/ecommerce-google-ads-optimization/layout.tsx)`
- `[app/pages/enterprise-google-ads-management/layout.tsx](app/pages/enterprise-google-ads-management/layout.tsx)`
- 8+ more service pages

### 9. Improve sitemap priorities for service pages

- File: `[app/sitemap.ts](app/sitemap.ts)`
- Raise core service landing page priorities to `0.9`
- Reduce legal pages to `0.3`
- Set `lastModified` to a stable known date (not `new Date()` which changes every request)

### 10. Add Google Search Console verification meta tag

- File: `[app/layout.tsx](app/layout.tsx)`
- Add `verification: { google: 'YOUR_VERIFICATION_CODE' }` to root metadata
- This is needed for submitting sitemap and monitoring index status in Google Search Console

---

## Phase 4 — Performance (Core Web Vitals = Ranking Factor)

### 11. Add `<link rel="preconnect">` hints in root layout

- File: `[app/layout.tsx](app/layout.tsx)`
- Add preconnect to `https://fonts.googleapis.com`, `https://www.googletagmanager.com`, `https://googleads.g.doubleclick.net`

### 12. Add `dns-prefetch` for third-party scripts

---

## Files Changed (Summary)

- `[app/data/companyProfile.ts](app/data/companyProfile.ts)` — add social links
- `[app/lib/seo/metadata.ts](app/lib/seo/metadata.ts)` — fix locale default
- `[app/layout.tsx](app/layout.tsx)` — remove duplicate metadata export, add preconnect, add GSC verification
- `[next.config.js](next.config.js)` — add security headers, merge TS config
- `next.config.ts` — delete
- `[app/pages/about/page.tsx](app/pages/about/page.tsx)`, `services/page.tsx`, `portfolio/page.tsx` — remove duplicate metadata
- 3 new `layout.tsx` files: `website-development`, `website-services`, `shopify-store-setup`
- 16+ existing `layout.tsx` files updated: FAQ schema + expanded keywords
- `[app/sitemap.ts](app/sitemap.ts)` — better priorities + stable lastModified

