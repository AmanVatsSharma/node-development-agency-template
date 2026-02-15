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
  - Brand/company SEO constants
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
  - `/api/admin`
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
- absence of placeholder domain tokens in active metadata-bearing files
- dynamic sitemap/robots route existence
- removal of legacy static SEO generators
- runtime sitemap and robots output behavior

CI also runs the same check via:
- `.github/workflows/seo-integrity.yml`

