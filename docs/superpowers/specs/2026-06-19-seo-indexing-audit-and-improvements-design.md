# SEO Indexing Audit & Improvements — Design Spec

**Date:** 2026-06-19
**Status:** Draft (awaiting user review)
**Author:** Brainstorming session with user
**Site:** vedpragya.com
**Repo:** node-development-agency-template (Next.js 15 App Router)

---

## 1. Problem Statement

Vedpragya.com has 49 published landing pages + 23 blog posts. Despite comprehensive
on-page SEO infrastructure (per-page metadata, dynamic sitemap, JSON-LD, robots.txt),
there is strong evidence that a meaningful subset of pages is **not being indexed by
Google**, and that several technical issues are causing crawl-budget waste and
ranking signal dilution.

**Primary user goal (per brainstorming):** Get more of the existing pages indexed.
**Secondary goals:** Improve overall SEO health, set up monitoring, drive organic traffic.

---

## 2. Audit Findings (Evidence)

### 2.1 Sitemap contains noindexed routes — CRITICAL

- `app/pages/nse-mcx-live-market-data/metadata.ts` exports `noIndex: true` and the
  page redirects to `/` at runtime.
- `app/pages/trading-software/metadata.ts` exports `noIndex: true` and the page
  redirects to `/` at runtime.
- **Both routes are still present in `https://vedpragya.com/sitemap.xml`** at
  priority 0.8 and `lastmod` 2026-04-14.

This violates Google's [sitemaps.org protocol](https://www.sitemaps.org/) and
[Search Central guidance on sitemaps](https://developers.google.com/search/docs/sitemaps/build-sitemap):
a sitemap should only list pages you want indexed. Google may ignore `lastmod`
hints across the entire sitemap, and deprioritize crawl trust for the site.

### 2.2 Sitemap `lastmod` dates are in the future — CRITICAL

- 32+ entries in the sitemap have `lastmod` between 2026-04-14 and 2026-05-09
  (today is 2026-06-19).
- The `ROUTE_LAST_MODIFIED_MAP` in [app/sitemap.ts](app/sitemap.ts) hardcodes
  future dates from a "Day-1 SEO pass" and an "April 2026 SEO pass."

Google's [lastmod documentation](https://developers.google.com/search/docs/sitemaps/build-sitemap#lastmod):
> "Don't put future dates in the `<lastmod>` tag. ... If your sitemap contains future
> dates, Google may ignore the lastmod value in your sitemap."

### 2.3 OG image is portrait (2560×3072), not landscape (1200×630) — HIGH

- [public/og-default.jpg](public/og-default.jpg) reports dimensions 2560×3072
  per IHDR chunk (despite `file` reporting 1376×768 — likely stripped metadata
  or scaled EXIF thumbnail).
- `app/lib/seo/metadata.ts` line 209 declares `width: 1200, height: 630` in the
  generated OG image meta, but the actual image is portrait.

Open Graph standard is **1200×630 landscape** (1.91:1 ratio). Portrait images
get cropped awkwardly in Facebook, LinkedIn, Slack, and Google Discover,
causing lower CTR from social referrals.

### 2.4 Disabled pages still on disk — MEDIUM

- `app/pages/nse-mcx-live-market-data/_disabled-page.tsx` and
  `app/pages/trading-software/_disabled-page.tsx` exist on disk.
- The active `page.tsx` for both routes just calls `redirect('/')` from
  `next/navigation`.
- Google may still crawl and discover the noindex meta, but the redirect is
  server-side (307/308) so this is safe. **No action required** for crawl
  safety — but should be noted in the docs.

### 2.5 No canonical link detected on rendered pages — MEDIUM (NEEDS VERIFICATION)

- WebFetch reports no canonical link in HTML head for
  `https://vedpragya.com`, `/pages/web-development`, and
  `/pages/web-development-delhi`.
- `buildPageMetadata()` does set `alternates.canonical` (see
  [app/lib/seo/metadata.ts:194-196](app/lib/seo/metadata.ts#L194-L196)).
- **Possible causes:**
  1. WebFetch (markdown converter) is stripping `<link rel="canonical">`
  2. The Next.js App Router isn't rendering the canonical for some reason
  3. Page-level metadata is being overridden by a parent layout

**Action:** Verify directly with `curl -s https://vedpragya.com | grep canonical`
before assuming a real bug. If confirmed missing, trace through the
Next.js metadata resolution order.

### 2.6 City landing pages lack `LocalBusiness` JSON-LD — MEDIUM

- `/pages/web-development-mumbai`, `/pages/web-development-delhi`, and 4 other
  city pages have no `LocalBusiness` schema markup.
- For local SEO (Google Maps, "near me" queries, local pack), `LocalBusiness`
  schema is a strong signal.

### 2.7 No `WebSite` + `SearchAction` JSON-LD on homepage — LOW

- A site-wide `WebSite` schema with a `potentialAction` of type `SearchAction`
  enables the Google sitelinks search box.
- Currently absent from `app/layout.tsx` and `app/page.tsx`.

### 2.8 Blog post `lastmod` dates inconsistent — LOW

- Some blog posts in the sitemap have `lastmod` 2024-10 to 2024-11, others
  2026-04-14. This is the DB-driven blog slug handler — the inconsistency
  likely reflects when content was last edited, which is technically correct,
  but creates a visual signal in the sitemap that content is "stale."

### 2.9 Title tag cannibalization risk on /web-development vs /website-development — LOW

- Both target similar keyword clusters ("web development company India").
- They currently have distinct titles but likely share substantial body content
  (they're under the same `/web-development/_components/` directory).
- **Out of scope for this spec** — flag for a future content audit.

### 2.10 No backlink acquisition strategy — INFO

- Off-page SEO (backlinks) is a major ranking factor that can't be fixed
  in code. This spec will surface it in the action plan but not implement it.

---

## 3. Design

### 3.1 Goals

1. **Get more pages indexed** by removing technical blockers that waste crawl budget.
2. **Improve ranking signals** by fixing the OG image, adding missing schema, and
   ensuring canonicals render correctly.
3. **Establish ongoing monitoring** so regressions are caught early.

### 3.2 Non-Goals

- Full content rewrites of any page body
- Multilingual / hreflang implementation
- Migration to a new framework or SEO plugin
- Backlink acquisition (off-page SEO, agency-level work)
- Title tag / keyword cannibalization resolution (separate spec)

### 3.3 Architecture Overview

The SEO infrastructure is already well-built. The design is **additive fixes
to existing files** — no new architecture, no new dependencies.

```
app/sitemap.ts
  └─ Filter out noindexed routes (use SEO_BLOCKED_ROUTE_PREFIXES + per-page noIndex map)
  └─ Drop hardcoded future dates; use real lastmod or omit

app/lib/seo/constants.ts
  └─ Export NOINDEXED_ROUTES for sitemap filtering

app/lib/seo/metadata.ts
  └─ No changes (already correct)

app/components/SEO/StructuredData.tsx
  └─ Add <WebSiteSearchAction /> component

app/layout.tsx
  └─ Render <WebSiteSearchAction /> once at root

app/components/SEO/LocalBusiness.tsx  (NEW)
  └─ Renders LocalBusiness JSON-LD for city landing pages

app/pages/web-development-{mumbai,delhi,bangalore,gurgaon,pune,hyderabad,noida}/page.tsx
  └─ Add <LocalBusiness /> component to each

public/og-default.jpg
  └─ Replace with 1200x630 landscape image

docs/seo/INDEXING_AUDIT.md  (NEW)
  └─ Tracks indexed vs not-indexed pages, with reasons

docs/seo/ACTION_PLAN.md  (NEW)
  └─ Prioritized backlog of remaining work (link building, content, etc.)
```

### 3.4 Key Design Decisions

**Decision 1: Sitemap filtering approach**
- **Choice:** Add a `NOINDEXED_ROUTES` constant in `app/lib/seo/constants.ts`
  and filter sitemap entries in `app/sitemap.ts`.
- **Rationale:** Single source of truth. The same constant can be reused by
  `robots.ts` and any future noindex-aware consumer.
- **Alternative considered:** Read `noIndex` from each page's `metadata.ts`
  dynamically. Rejected because (a) it requires reading every page file at
  build time, (b) the set of noindexed routes is small and stable.

**Decision 2: How to handle future `lastmod` dates**
- **Choice:** Replace the `ROUTE_LAST_MODIFIED_MAP` in `app/sitemap.ts` with
  no hardcoded future dates. The implementation will:
  1. Derive a sensible `lastmod` from `git log -1 --format=%cI` for each
     route's page directory (whichever date is more recent between that
     and a hardcoded `SEO_PASS_DATE` constant for the SEO pass).
  2. If `git log` is unavailable (e.g., in CI without the git tree), fall
     back to a single `STATIC_PAGES_LAST_MODIFIED` constant set to today
     minus 30 days (a safe "recently updated" signal).
- **Rationale:** Matches Google's guidance exactly. Avoids the
  "is this sitemap trustworthy?" question. Using `git log` keeps the dates
  honest without requiring manual updates.
- **Alternative considered:** Manual `ROUTE_LAST_MODIFIED_MAP` with real
  dates. Rejected because (a) it gets stale immediately, (b) it's already
  been wrong once, (c) `git log` is the source of truth that updates
  automatically.

**Decision 3: OG image replacement**
- **Choice:** Generate a new 1200×630 landscape OG image using the existing
  brand assets (logo, brand colors from `app/data/companyProfile.ts`).
- **Rationale:** Matches the Open Graph standard, fixes social share rendering.
- **Alternative considered:** Use the existing image and add a CSS crop hint.
  Rejected because social platforms ignore CSS and crop based on declared
  dimensions in the meta tag.

**Decision 4: LocalBusiness schema scope**
- **Choice:** Add `LocalBusiness` JSON-LD only to the 7 city landing pages
  (Mumbai, Delhi, Bangalore, Gurgaon, Pune, Hyderabad, Noida).
- **Rationale:** Those are the only pages with explicit geographic targeting.
  Adding it to non-geographic pages would be schema spam.
- **Alternative considered:** Add `LocalBusiness` to the homepage and /contact
  too. Rejected because the brand operates pan-India, not from a single
  location.

**Decision 5: WebSite + SearchAction scope**
- **Choice:** Add the JSON-LD once at the root layout, not per page.
- **Rationale:** It describes the site as a whole, not any individual page.
  Rendering it once on every page is correct and cheaper.

### 3.5 Components (new)

**`LocalBusiness` JSON-LD component** (in `app/components/SEO/LocalBusiness.tsx`)
- Props: `city`, `region`, `country` ("IN"), `areaServed`, `latitude`,
  `longitude` (optional), `addressLine`, `postalCode`.
- Renders a single `<script type="application/ld+json">` block.
- Pulls brand name, legal name, contact email from `app/data/companyProfile.ts`.

**`WebSiteSearchAction` JSON-LD component** (in `app/components/SEO/StructuredData.tsx`)
- No props (always reflects current site).
- Renders `WebSite` + `SearchAction` with the `/search?q={search_term_string}`
  template. (If a `/search` route doesn't exist, this can be wired up later
  or removed — the sitelinks search box may simply not appear.)

### 3.6 Data Flow

```
Build time:
  app/sitemap.ts
    → getStaticSeoRoutes() [app/lib/seo/routes.ts]
      → filters using NOINDEXED_ROUTES [app/lib/seo/constants.ts]
    → getPriorityForRoute(path) [app/sitemap.ts]
    → getChangeFrequencyForRoute(path) [app/sitemap.ts]
    → ROUTE_LAST_MODIFIED_MAP lookup → real dates only
  → output: /sitemap.xml (no noindexed entries, no future dates)

Request time:
  any public page
    → app/layout.tsx renders <WebSiteSearchAction />
    → app/components/SEO/StructuredData.tsx renders JSON-LD
    → canonical, OG, Twitter tags all come from buildPageMetadata()
```

### 3.7 Error Handling

- If a `noindex` page is referenced via a stale external link, Google will see
  `<meta name="robots" content="noindex, nofollow">` and skip it. No
  additional handling needed.
- If the OG image fails to load on a social share, the platform falls back to
  the page's text excerpt. No additional handling needed.
- If `LocalBusiness` schema has a missing required field (e.g., no address),
  Google will silently ignore the rich result attempt. Component should
  log a warning if required props are missing.

### 3.8 Testing Strategy

**Pre-deployment (automated):**
1. `npm run build` — must succeed.
2. `npm run verify:seo` — static SEO check (existing tool).
3. `npm run verify:seo:runtime` — runtime SEO check (existing tool).
4. New test: sitemap must not contain any path in `NOINDEXED_ROUTES`.
5. New test: every public page's rendered HTML must contain
   `<link rel="canonical" href="https://vedpragya.com/...">`.

**Post-deployment (manual, in GSC):**
1. Submit updated sitemap in GSC → Sitemaps page.
2. Use URL Inspection on 5 priority pages → Request Indexing.
3. Wait 3-5 days, check Coverage report.
4. Wait 14-21 days, check Performance report for ranking changes.

**Visual confirmation:**
- Open https://vedpragya.com/pages/web-development-delhi in browser
- DevTools → Elements → `<head>` → confirm:
  - `<link rel="canonical" href="https://vedpragya.com/pages/web-development-delhi">`
  - `<meta property="og:image" content="...og-default.jpg" width="1200" height="630">`
  - `<script type="application/ld+json">` with `@type: LocalBusiness`

### 3.9 Backwards Compatibility

- All changes are additive. Existing pages, layouts, and metadata continue
  to work unchanged.
- The only behavioral change at runtime is: visiting the noindexed routes
  no longer lists them in the sitemap (they were never visible to users).
- No API contract changes.

### 3.10 Files to Modify

| File | Change |
|---|---|
| `app/sitemap.ts` | Filter out noindexed routes; remove future `lastmod` |
| `app/lib/seo/constants.ts` | Export `NOINDEXED_ROUTES` |
| `app/components/SEO/StructuredData.tsx` | Add `WebSiteSearchAction` component |
| `app/layout.tsx` | Render `WebSiteSearchAction` once |
| `app/components/SEO/LocalBusiness.tsx` | NEW — LocalBusiness JSON-LD |
| `app/pages/web-development-mumbai/page.tsx` | Add `LocalBusiness` schema |
| `app/pages/web-development-delhi/page.tsx` | Add `LocalBusiness` schema |
| `app/pages/web-development-bangalore/page.tsx` | Add `LocalBusiness` schema |
| `app/pages/web-development-gurgaon/page.tsx` | Add `LocalBusiness` schema |
| `app/pages/web-development-pune/page.tsx` | Add `LocalBusiness` schema |
| `app/pages/web-development-hyderabad/page.tsx` | Add `LocalBusiness` schema |
| `app/pages/web-development-noida/page.tsx` | Add `LocalBusiness` schema |
| `public/og-default.jpg` | Replace with 1200×630 image |
| `docs/seo/INDEXING_AUDIT.md` | NEW — indexability tracking |
| `docs/seo/ACTION_PLAN.md` | NEW — prioritized backlog |

### 3.11 Out of Scope (Deferred)

- Title tag / keyword cannibalization audit
- Full content rewrites
- Multilingual / hreflang
- Backlink acquisition
- Migration to a 3rd-party SEO plugin (next-seo, etc.)
- A/B testing of titles/descriptions
- Performance optimization (Core Web Vitals) — separate concern
- Blog post update date normalization

---

## 4. Open Questions

None at design time. All decisions made with clear rationale in §3.4.

---

## 5. Acceptance Criteria

This design is considered complete when:

1. ✅ `app/sitemap.ts` does not list any path in `NOINDEXED_ROUTES`.
2. ✅ All `lastmod` dates in the sitemap are in the past.
3. ✅ `public/og-default.jpg` is 1200×630 landscape.
4. ✅ `https://vedpragya.com` (and every page) renders `WebSite` + `SearchAction`
   JSON-LD.
5. ✅ All 7 city landing pages render `LocalBusiness` JSON-LD with
   city-specific address data.
6. ✅ `npm run build`, `npm run verify:seo`, and `npm run verify:seo:runtime`
   all pass.
7. ✅ `docs/seo/INDEXING_AUDIT.md` and `docs/seo/ACTION_PLAN.md` are committed.

---

## 6. References

- Google Search Central — Sitemaps: https://developers.google.com/search/docs/sitemaps/build-sitemap
- Google Search Central — LocalBusiness schema: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google Search Central — Sitelinks searchbox: https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox
- Open Graph standard: https://ogp.me/
- Schema.org LocalBusiness: https://schema.org/LocalBusiness
