# SEO Module Documentation

This module centralizes technical SEO behavior for the website.

## Goals

- Keep metadata consistent across all indexable pages.
- Ensure canonical URLs always use the production domain.
- Auto-generate indexing files (`/sitemap.xml`, `/robots.txt`) without manual edits.
- Reduce SEO drift by using shared helpers instead of page-by-page hardcoded values.

---

## Module structure

- `constants.ts`
  - Canonical site URL resolver
  - Canonical URL normalization to origin-only form (drops path/query/hash)
  - Brand/company SEO constants
  - Shared blocked-route policy constants reused by sitemap + robots checks
  - Absolute URL resolver utility
- `metadata.ts`
  - Reusable `buildPageMetadata()` helper for all pages/layouts
- `routes.ts`
  - Static route discovery from app/pages filesystem + navigation + core routes for sitemap generation

---

## Flowchart: Metadata + Indexing pipeline

```mermaid
flowchart TD
  A[Page/Layout metadata file] --> B[buildPageMetadata]
  B --> C[Canonical URL + OG + Twitter + Robots]
  C --> D[Rendered HTML head tags]

  E[Navigation config + core routes] --> F[getStaticSeoRoutes]
  G[Blog DB entries + fallback posts] --> H[sitemap.ts]
  F --> H
  H --> I[/sitemap.xml]

  J[robots.ts] --> K[/robots.txt]
  I --> K

  K --> L[Googlebot crawling + indexing]
```

---

## How to add SEO for a new page

1. Add page route in navigation (recommended), especially for service pages.
2. Add metadata in that route’s `layout.tsx` or server `page.tsx`:
   - Use `buildPageMetadata({ title, description, path, keywords })`.
3. If the page is dynamic, implement `generateMetadata()`.
4. If needed, add page-specific JSON-LD in the route layout.
5. Verify route appears in `/sitemap.xml` and is allowed in `/robots.txt`.

---

## How auto-indexing works now

### Sitemap
- Source 1: static routes from `routes.ts` (`filesystem + core + navigation + footer`).
- Source 2: dynamic blog slugs from DB (`BlogPost`) with fallback to static blog data.
- Routes are normalized, deduplicated, and admin/api/login paths are excluded.

### Robots
- Allows public crawling.
- Disallows:
  - `/admin`
  - `/api`
  - `/login`
- Publishes canonical sitemap endpoint.

---

## Maintenance checklist

- [ ] Any new public page has metadata using `buildPageMetadata`.
- [ ] Any new service page is linked in navigation/footer (for sitemap discovery).
- [ ] Canonical path matches the real route.
- [ ] JSON-LD has real organization/domain values (no placeholders).
- [ ] `/sitemap.xml` includes expected new URLs.
- [ ] `/robots.txt` still blocks private routes.

---

## Verification command

Run the SEO integrity checker before merging major page/SEO changes:

```bash
npm run verify:seo
npm run verify:seo:runtime
```

It validates:
- metadata coverage for public routes
- metadata helper usage (`buildPageMetadata` or approved metadata re-export pattern)
- metadata `path` value alignment with actual route file path
- explicit description requirement for every `buildPageMetadata` call (route-level uniqueness guardrail)
- metadata OG image asset validity (default + explicit `imagePath` references)
- absence of placeholder domain tokens in active metadata-bearing files
- absence of legacy/placeholder domains in public route source (`app/pages/**/*.ts|tsx|js|jsx`)
- dynamic sitemap/robots route existence
- footer sitemap link policy (`/sitemap.xml` only; no `/sitemap`)
- package script registration (`verify:seo`, `verify:seo:runtime`)
- build pipeline enforcement (`npm run verify:seo` and `npm run verify:seo:runtime`) with scoped WASM fallback semantics
- CI workflow enforcement (runs SEO checks on push + pull_request)
- shared policy constant usage (`SEO_BLOCKED_ROUTE_PREFIXES`, `SEO_ROBOTS_DISALLOW_PATHS`)
- routes module invariants for `normalizeRoute` (exclude absolute URLs, dynamic placeholders, `/sitemap.xml`, `/robots.txt`, blocked prefixes)
- company profile SEO identity validity (`brandName`, `legalName`, `websiteUrl`, `contactEmail`, optional social URLs)
- root layout metadata canonical configuration (`metadataBase`, canonical `/`, OG image constant)
- core SEO file placeholder audit (`app/layout.tsx`, structured data component, SEO constants)
- sitemap/robots implementation invariants (helper usage, dedupe/sort, fallback behavior)
- sitemap implementation policy baselines in source (`getPriorityForRoute`, `getChangeFrequencyForRoute`, blog detail priority)
- robots source invariants include wildcard `userAgent: "*"` with explicit root `allow: "/"` + shared disallow constants
- SEO module documentation consistency (flowchart + key command/policy references)
- private route no-index policy checks (`app/admin/layout.tsx`, `app/login/page.tsx`)
- root layout structured data wiring (`OrganizationStructuredData` / `WebsiteStructuredData`) tied to `companyProfile`
- structured data component defaults in `StructuredData.tsx` (`SEO_DEFAULT_DESCRIPTION`, `companyProfile` identity fields)
- removal of legacy static SEO generators
- runtime sitemap and robots output behavior
  - canonical SEO constant validation (`SEO_SITE_URL`, `toAbsoluteSeoUrl`)
  - absolute canonical sitemap URLs only
  - no trailing slash URLs except canonical homepage
  - no duplicate/query/hash sitemap URLs
  - valid `lastModified` / `priority` / `changeFrequency` fields
  - critical route policy baselines (home/services/contact/blog priorities/frequencies)
  - navigation-driven route coverage in generated sitemap
  - deterministic URL sorting + full legal route presence
  - legal route changeFrequency baseline stays `monthly`
  - robots wildcard allow root + strict disallow policy consistency

CI also runs the same check via:
- `.github/workflows/seo-integrity.yml`

