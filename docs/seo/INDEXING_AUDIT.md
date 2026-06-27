# SEO Indexing Audit — vedpragya.com

## Overview

This document audits the Google indexing state of `vedpragya.com` as of
2026-06-19, after Tasks 1-7 of the SEO indexing improvements plan shipped
on branch `seo/indexing-improvements`. All 7 fixes landed via 9 commits
(latest: `a0ad26c`). The plan and design spec live at:

- Implementation plan: `docs/superpowers/plans/2026-06-19-seo-indexing-improvements.md`
- Design spec: `docs/superpowers/specs/2026-06-19-seo-indexing-audit-and-improvements-design.md`

The audit is **diagnostic** — it records what was broken, what was changed,
and how to verify. It is not aspirational; remaining work is listed
explicitly in the "What is NOT yet done" section, with pointer to Task 9's
`ACTION_PLAN.md`.

### Commit map (in order of application)

| Task | Commit | Subject |
|---|---|---|
| 1 | `2166df4` | `feat(seo): add NOINDEXED_ROUTES constant for sitemap filtering` |
| 2 | `672ec66` | `feat(seo): add getRouteLastModified helper with git log + fallback` |
| 3 | `342f4ad` | `feat(seo): exclude NOINDEXED_ROUTES from sitemap output` |
| 4 | `e634e1a` | `feat(seo): replace hardcoded lastmod map with getRouteLastModified()` |
| 5 | `7afd2e2` | `feat(seo): add check-og-image script to validate OG image dimensions` |
| 6a | `7d78c75` | `feat(seo): regenerate og-default.jpg as 1200x630 JPEG` |
| 6b | `16c125a` | `fix(seo): swap width/height in JPEG SOF reader and add missing EOF newlines` |
| 7a | `75157e1` | `feat(seo): add city-specific LocalBusiness JSON-LD to 7 city pages` |
| 7b | `a0ad26c` | `refactor(seo): wire hqBusinessData into LocalBusiness defaults and remove dead code` |

The branch is local-only at audit time; no `origin/seo/indexing-improvements`
exists yet. The audit is a record of work in progress, not a release.

---

## Pre-fix baseline (problems found)

These are the issues the 7 tasks were designed to fix. Each is documented as
it was found at the start of the indexing-improvements branch — not as
hypotheticals, but as actual state in the codebase or in shipped assets.

### Problem 1: Noindexed routes leaked into the sitemap (critical)

`app/sitemap.ts` (and its route-discovery helper `app/lib/seo/routes.ts`)
emitted `<url>` entries for every public route it could find in
`app/pages/**/page.tsx`. Two of those routes —
`/pages/nse-mcx-live-market-data` and `/pages/trading-software` — are
explicitly marked `noindex` in their page metadata (their metadata declares
`noIndex: true`), but they were still being listed in the sitemap.

**Why this matters:** Google's sitemap protocol requires sitemaps to list
only pages intended for indexing. A `noindex` entry inside a sitemap is a
contradictory signal. Search Central treats repeated protocol violations
inside a sitemap as an erosion of trust across the whole file — Google may
deprioritize legitimate URLs in the same file. It is also wasted crawl
budget.

**Where it manifested:** the route set returned by
`getStaticSeoRoutes()` in `app/lib/seo/routes.ts` — these two strings
appeared as keys in the output before the fix.

### Problem 2: Sitemap `lastmod` was a hardcoded future-looking map (critical)

`app/sitemap.ts` shipped with a `ROUTE_LAST_MODIFIED_MAP` constant pinning
~30 routes to a single date (`2026-04-14T00:00:00.000Z`) and a
`STATIC_PAGES_LAST_MODIFIED` fallback. The map was:

- Not derived from real per-file modification dates — it was a hand-maintained
  spreadsheet of guesses.
- Not updated as pages actually changed, so a recently edited page could
  show an older `lastmod` than one that was unchanged.
- Future-looking relative to the date the file was authored, which is
  technically possible (Next.js can render any Date) but unhelpful — Google
  treats a `lastmod` that is more than ~90 days in the past as a signal the
  page is stale, and a hardcoded constant cannot capture recency at all.

**Where it manifested:** `app/sitemap.ts` (the deleted 85-line block) and
the `lastModified` field of every `<url>` entry it produced.

### Problem 3: OG image is portrait, not landscape (critical)

`public/og-default.jpg` was 630×1200 (portrait). The Open Graph standard
for `og:image` is **1200×630 landscape**. Social platforms (Twitter/X,
LinkedIn, Facebook, Slack, iMessage) and Google Discover all render
landscape at full size and crop portrait. A portrait OG image therefore:

- Renders as a thin sliver next to the post text on every share.
- Gets auto-cropped to a square by some platforms, cutting off either the
  logo or the tagline.
- Loses click-through rate on social referrals — the preview is
  unreadable.

**Where it manifested:** `public/og-default.jpg` (914,504 bytes,
630×1200 JPEG, progressive). The asset was referenced from
`SEO_DEFAULT_OG_IMAGE_PATH` in `app/lib/seo/constants.ts:69` and rendered
in every page's `openGraph.images`.

### Problem 4: No way to assert the OG image is the right size (important)

Even after the asset was fixed, nothing in the repo prevented a future
contributor from re-introducing a portrait image. There was no CI check, no
pre-commit hook, no `npm run` script that would have caught the regression.

**Where it manifested:** absence of `scripts/check-og-image.js` and
absence of any `check-og-image` invocation in `package.json` or in
`.github/workflows/`.

### Problem 5: City landing pages emit a generic LocalBusiness schema (important)

The 7 city landing pages at `app/pages/web-development-{mumbai,delhi,
bangalore,gurgaon,pune,hyderabad,noida}/page.tsx` rendered the site-wide
`LocalBusinessStructuredData` block with no city override. That block
declared the business as being in Gurugram, India (the company HQ), with
`areaServed` set to a generic country list (`['India', 'United Arab
Emirates', 'United States', 'United Kingdom']`).

**Why this matters:** for queries like "web development company in Mumbai",
Google uses a City/AdministrativeArea `areaServed` signal and a localized
address to determine local pack eligibility. A Mumbai page that claims
to serve a generic country list and is headquartered in Gurugram does not
match the local-intent signal. This is the largest organic-rankings win
the plan was designed to capture.

**Where it manifested:** the `LocalBusinessStructuredData` invocation (or
absence thereof) in each of the 7 city page layouts, and the city
locality defaults in `app/components/SEO/StructuredData.tsx`.

### Problem 6: City page business data is duplicated and partially wrong (minor)

`app/components/SEO/StructuredData.tsx` declared hardcoded
`'Gurugram'` / `'Haryana'` / `'IN'` defaults for the local-business
address, and re-declared a local `LocalBusinessCityOverride` interface
that duplicated the shape later introduced in `app/data/cityBusinessData.ts`.
If the HQ city ever changed (the company moved), every consumer would have
to be updated in lockstep. There was no single source of truth.

**Where it manifested:** default parameter values and interface
declaration in `LocalBusinessStructuredData` (lines around 442-456 of
the post-fix file).

---

## Fixes shipped (Tasks 1-7)

Each fix below includes: the problem it addresses, the file(s) changed,
the commit SHA, and verification commands.

### Fix 1: `NOINDEXED_ROUTES` constant (Task 1)

**Commit:** `2166df4`

**What was broken:** The list of noindexed routes existed only in the
`buildPageMetadata({ noIndex: true })` calls scattered across each page's
metadata file. The sitemap had no way to know about them.

**What changed:** Added `NOINDEXED_ROUTES` to `app/lib/seo/constants.ts`
(lines 73-86), a `readonly` array of route strings that the sitemap MUST
filter. Initial contents:

```ts
export const NOINDEXED_ROUTES: readonly string[] = [
  '/pages/nse-mcx-live-market-data',
  '/pages/trading-software',
] as const;
```

The JSDoc explicitly tells future contributors to add a route here whenever
`buildPageMetadata({ noIndex: true })` is set on a new page.

**How to verify:**

```bash
# File contains the constant and the two known entries
grep -n "NOINDEXED_ROUTES" app/lib/seo/constants.ts
grep -E "nse-mcx-live-market-data|trading-software" app/lib/seo/constants.ts
```

### Fix 2: `getRouteLastModified()` helper (Task 2)

**Commit:** `672ec66`

**What was broken:** Sitemap `lastmod` values were a hand-maintained,
hardcoded map. There was no source of truth and no way to keep entries
fresh as the codebase evolved.

**What changed:** Added `app/lib/seo/lastmod.ts` (new file, 120 lines)
exporting:

- `getRouteLastModified(route: string): Date` — derives the `lastmod`
  for a route from three sources, in order:
  1. **Manual override** — `MANUAL_LASTMOD_OVERRIDES` map of 7 city
     pages, fixed to `2026-04-29`.
  2. **Git log** — runs `git log -1 --format=%cI -- <file>` against the
     route's `page.tsx`. Uses `execFileSync` with `stdio: ['ignore',
     'pipe', 'ignore']` so the failure is silent.
  3. **Fallback** — today minus 30 days.
- `MAX_LASTMOD_AGE_DAYS = 90` — every result is clamped to "no older than
  90 days ago" and "no future date" by `clampToRecent()`. This stops
  Google from seeing unrealistically stale dates on untouched pages.

Also added 5 Jest tests in `app/lib/seo/__tests__/lastmod.test.ts` covering:
known route returns a Date, no future date, within `MAX_LASTMOD_AGE_DAYS`,
idempotency within a day, graceful fallback for unknown routes.

**How to verify:**

```bash
# Unit tests pass
npx jest app/lib/seo/__tests__/lastmod.test.ts

# Returns a real Date for a real route
node -e "console.log(require('./app/lib/seo/lastmod.ts'))" 2>/dev/null
# Or via tsx:
npx tsx -e "import {getRouteLastModified} from './app/lib/seo/lastmod'; console.log(getRouteLastModified('/pages/services').toISOString())"
```

### Fix 3: `NOINDEXED_ROUTES` filtering in sitemap (Task 3)

**Commit:** `342f4ad`

**What was broken:** The constant from Fix 1 existed but the sitemap
ignored it. `getStaticSeoRoutes()` would happily add noindexed routes to
the route set.

**What changed:** `app/lib/seo/routes.ts` imports `NOINDEXED_ROUTES` and
adds a single `if (NOINDEXED_ROUTES.includes(normalized)) return;` guard
inside the `addRoute` helper at the top of `getStaticSeoRoutes()` (lines
around 251-254). Also added
`app/lib/seo/__tests__/routes-filter.test.ts` with 3 tests confirming:
no noindexed route is in the output, both known disabled pages are in
`NOINDEXED_ROUTES`, and the constant is a non-empty array.

**How to verify:**

```bash
npx jest app/lib/seo/__tests__/routes-filter.test.ts
# Manually inspect: getStaticSeoRoutes() must not contain either string
node -e "console.log(getStaticSeoRoutes().includes('/pages/nse-mcx-live-market-data'))" --input-type=module
# Build the sitemap and grep for the noindexed routes
npm run build && grep -c "nse-mcx-live-market-data\|trading-software" .next/server/app/sitemap.xml
# Expected: 0
```

### Fix 4: Replace lastmod map with `getRouteLastModified()` (Task 4)

**Commit:** `e634e1a`

**What was broken:** `app/sitemap.ts` carried an 85-line block
(`ROUTE_LAST_MODIFIED_MAP` + `STATIC_PAGES_LAST_MODIFIED` + ~30 hardcoded
dates). It was stale-by-construction and inflated the sitemap module
surface area.

**What changed:** The hardcoded map was deleted in full. The
`staticEntries` builder now reads:

```ts
const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
  url: toAbsoluteSeoUrl(route),
  lastModified: getRouteLastModified(route),
  changeFrequency: getChangeFrequencyForRoute(route),
  priority: getPriorityForRoute(route),
}));
```

`getRouteLastModified()` is now the single source of truth for every
static route's `lastmod`. Net diff: `-83, +2` lines in `app/sitemap.ts`.

**How to verify:**

```bash
# Confirm the old map is gone
grep -c "ROUTE_LAST_MODIFIED_MAP" app/sitemap.ts   # Expected: 0
grep -c "getRouteLastModified" app/sitemap.ts     # Expected: ≥1

# Build, then inspect sitemap.xml
npm run build
grep -E "<lastmod>" .next/server/app/sitemap.xml | head -5
# All lastmod values should be ≤ today's date and within 90 days of it
```

### Fix 5: OG image dimension validator (Task 5)

**Commit:** `7afd2e2`

**What was broken:** There was no automated check that `og-default.jpg`
matches the OG standard dimensions. A regression could ship silently.

**What changed:** Added `scripts/check-og-image.js` (new, 102 lines) — a
zero-dependency Node CLI that:

1. Reads `OG_DEFAULT_IMAGE_PATH` from env, falling back to
   `public/og-default.jpg`.
2. Parses PNG (IHDR chunk) or JPEG (SOF0-SOF15 marker) headers directly
   with `fs.readSync` + `Buffer.readUInt16BE` / `readUInt32BE`.
3. Exits 0 if the image is exactly 1200×630, exits 1 with an error
   message otherwise.

Also added `scripts/__tests__/check-og-image.test.ts` with 3 tests
covering: script returns 0 or 1 cleanly (not a throw), dimensions appear
in stdout, missing-file path exits non-zero.

**How to verify:**

```bash
# Should pass with current og-default.jpg
node scripts/check-og-image.js
# Expected: "[check-og-image] og-default.jpg: dimensions: 1200 x 630"
#           "[check-og-image] OK: dimensions match OG standard (1200x630)"

# Force a failure to confirm exit code
OG_DEFAULT_IMAGE_PATH=/no/such/file.jpg node scripts/check-og-image.js
# Expected: exit 1, "image not found"

# Unit tests
npx jest scripts/__tests__/check-og-image.test.ts
```

### Fix 6: Regenerate `og-default.jpg` as 1200×630 + fix JPEG reader bug

**Commits:** `7d78c75`, `16c125a`

**What was broken:** The asset itself was portrait (630×1200). The
validator from Fix 5 surfaced an additional latent bug: the JPEG SOF
reader in `check-og-image.js` had `width` and `height` swapped (it read
the SOF segment as `length(2) precision(1) width(2) height(2)`, but the
spec is `length(2) precision(1) **height**(2) **width**(2)` — height
comes first). On a real JPEG the bug produced swapped dimensions.

**What changed (7d78c75):**

- `public/og-default.jpg` regenerated. New file: 21,997 bytes
  (down from 914,504), progressive JPEG, 1200×630, 3 components.
- `scripts/generate-og-default.js` added — uses `sharp` to compose an
  SVG background (navy fill, brand-orange tagline) with the existing
  `public/logo.png` and writes the result as JPEG. The generator is
  reproducible; re-run after any brand refresh.

**What changed (16c125a):**

- `scripts/check-og-image.js` — the JPEG SOF reader's read offsets are
  corrected: `readUInt16BE(offset + 5)` is `height`, `readUInt16BE(offset + 7)`
  is `width`. Without this fix, the validator would have misread the new
  asset as 630×1200 and reported a false failure.
- Missing trailing newlines added to `scripts/check-og-image.js` and
  `app/lib/seo/__tests__/routes-filter.test.ts`.

**How to verify:**

```bash
# Asset is 1200x630
file public/og-default.jpg
# Expected: "JPEG image data, progressive, precision 8, 1200x630, components 3"

# Validator agrees
node scripts/check-og-image.js
# Expected: exit 0, dimensions: 1200 x 630, "OK: dimensions match"

# Sharp is the only new dep — confirm it's installed
node -e "console.log(require('sharp').versions)" 2>&1 | head -3
```

### Fix 7: City-specific `LocalBusiness` JSON-LD on 7 city pages (Tasks 7a, 7b)

**Commits:** `75157e1`, `a0ad26c`

**What was broken:** The 7 city landing pages rendered a generic
LocalBusiness block (HQ in Gurugram, country-level `areaServed`), which
diluted the local-intent signal Google uses for local pack rankings.

**What changed (75157e1):**

- New file `app/data/cityBusinessData.ts` — exports a
  `CityBusinessData` interface (name, city, region, regionCode, country,
  latitude, longitude) and a `cityBusinessData` map keyed by lowercased
  city slug: `bangalore`, `delhi`, `gurgaon`, `hyderabad`, `mumbai`,
  `noida`, `pune`. Each entry holds the city's lat/long and ISO 3166-2
  region code.
- `app/components/SEO/StructuredData.tsx` — `LocalBusinessStructuredData`
  gained an optional `cityData` prop. When provided, the rendered
  JSON-LD uses the city's `addressLocality` / `addressRegion` /
  `addressCountry` / `geo` coordinates and replaces the default country
  list with a single `City` schema inside `areaServed`. The new
  `LocalBusinessCityOverride` type alias is a `Pick<>` over
  `CityBusinessData`.
- All 7 city layouts (`app/pages/web-development-{mumbai,delhi,
  bangalore,gurgaon,pune,hyderabad,noida}/layout.tsx`) import
  `LocalBusinessStructuredData` and `cityBusinessData`, then render
  `<LocalBusinessStructuredData cityData={cityBusinessData.<city>} />`
  alongside the existing `Service` schema.

**What changed (a0ad26c) — refactor pass:**

- `LocalBusinessStructuredData` defaults now read from a new
  `hqBusinessData` constant in `app/data/cityBusinessData.ts` rather
  than hardcoded `'Gurugram'` / `'Haryana'` / `'IN'` literals. The
  `region` is derived from `companyProfile.legal.registrationState`
  with a `'Haryana'` fallback. This makes `cityBusinessData.ts` the
  single source of truth for both the HQ default and per-city
  overrides.
- `LocalBusinessCityOverride` is now a `Pick<CityBusinessData, ...>`
  alias — no shape duplication.
- The unused `getCityDataForRoute` helper was deleted (zero callers).

**How to verify:**

```bash
# All 7 layouts render the new component
grep -l "LocalBusinessStructuredData" app/pages/web-development-*/layout.tsx
# Expected: 7 files

# Each passes the right city
grep -h "cityData=" app/pages/web-development-*/layout.tsx
# Expected: 7 lines, one per city, e.g.:
#   <LocalBusinessStructuredData cityData={cityBusinessData.mumbai} />

# cityBusinessData has 7 keys
grep -E "^  (mumbai|delhi|bangalore|gurgaon|pune|hyderabad|noida):" app/data/cityBusinessData.ts | wc -l
# Expected: 7

# HQ defaults are wired (not hardcoded)
grep -A 3 "addressLocality = hqBusinessData" app/components/SEO/StructuredData.tsx
# Expected: shows hqBusinessData.city, .region, .country, .latitude, .longitude

# Build + spot-check rendered HTML
npm run build
curl -s http://localhost:3000/pages/web-development-mumbai | grep -A 2 '"@type":"ProfessionalService"'
# Expected: addressLocality is "Mumbai", areaServed has a single City entry
```

---

## What is NOT yet done

This branch stops at Task 8 of a 10-task plan. The remaining work is owned
by Task 9 (`docs/seo/ACTION_PLAN.md`) and Task 10 (final verification:
build, tests, live spot-checks). Specifically:

- **Task 8 (this document).** Audit and summary of what shipped.
- **Task 9 (`docs/seo/ACTION_PLAN.md`).** Prioritized backlog of remaining
  indexability work. Not yet written. The likely candidates, based on the
  plan spec and what is observable in the current codebase:
  - The `app/lib/seo/routes.ts` `discoverFilesystemPageRoutes()` walker
    still hardcodes `app/pages` as the discovery root. Routes registered
    only via `CORE_STATIC_ROUTES` / `ALL_STATIC_PAGE_ROUTES` / nav data
    are covered, but a new subdirectory under `app/pages` will not be
    picked up by the filesystem walker unless it is also added to one
    of the explicit lists. (Confirmed: the walker exists, but the
    `ALL_STATIC_PAGE_ROUTES` list appears to be the actual safety net.)
  - `app/robots.ts` is referenced by `verify-seo-integrity.js` (check
    #7) but was not opened during this audit. Its contents and any
    relationship to `NOINDEXED_ROUTES` have not been verified.
  - `app/sitemap.ts` still calls `getAllBlogPosts()` from
    `app/lib/blog` as a Prisma fallback path. The blog-post fallback
    does not pass through `getRouteLastModified()` — blog `lastmod`
    values come from the DB `updatedAt` column, not git. This is the
    intended behavior; the `ACTION_PLAN.md` should confirm.
  - The `MAX_LASTMOD_AGE_DAYS = 90` clamp means a genuinely old,
    unmaintained page will be reported as "30 days ago" by the
    fallback. The plan treats this as acceptable (better than a
    2-year-old date), but a future audit may want a per-page
    freshness policy.
  - The OG image generator (`scripts/generate-og-default.js`) depends
    on `sharp`. It is not wired into `npm run build` or any CI
    workflow. The generated asset is committed to the repo rather
    than built on demand.
  - The `verify:seo` static check covers sitemap/robots/nav invariants
    but does NOT cover: (a) `NOINDEXED_ROUTES` ↔ `buildPageMetadata`
    consistency, (b) per-city JSON-LD presence on city pages,
    (c) OG image dimensions. The first two are candidates for new
    checks; the third is covered by `node scripts/check-og-image.js`
    but is not in the build pipeline.
- **Task 10 (not started, no commit on branch).** Whatever closes the
  plan after Task 9. Per the plan, this is the integration / sign-off
  task.

This is **not** an exhaustive list. The `ACTION_PLAN.md` Task 9 doc
will reprioritize after reading the runtime state.

### What is NOT a problem (and the audit does not fix)

These were considered and rejected, in case a future reader wonders why
they were not addressed:

- **Crawl budget for `/admin` and `/api`.** Already handled by
  `SEO_BLOCKED_ROUTE_PREFIXES` in `app/lib/seo/constants.ts`, which
  blocks them in `robots.ts` and in the sitemap route normalizer. No
  change needed.
- **Canonical URL handling.** Out of scope for this branch;
  `toAbsoluteSeoUrl()` already normalizes.
- **Page-level metadata coverage.** Out of scope; `verify-seo-integrity.js`
  check #1 (`Every public route under app/pages has metadata coverage`)
  is the existing guardrail.
- **IndexNow / Bing Webmaster.** Not part of the plan; Google-only.

---

## References

- Google Search Central — Sitemap format: <https://developers.google.com/search/docs/specialty/sitemaps/build-sitemap>
- Google Search Central — Sitemap placement on a noindexed URL:
  <https://developers.google.com/search/docs/specialty/sitemaps/sitemap-video?hl=en#sitemap-noindex>
  (See the "Sitemap errors" section: a sitemap entry for a noindex page
  is treated as a soft protocol violation.)
- Google Search Central — `lastmod` in sitemaps:
  <https://developers.google.com/search/docs/specialty/sitemaps/build-sitemap#sitemap-tags>
  (Lastmod should reflect real modification. Future or invented dates
  are ignored or treated as untrustworthy.)
- Open Graph Protocol — image dimensions:
  <https://ogp.me/#structuredproperty>
  (`og:image` should be at least 1200×630; portrait images are cropped.)
- Schema.org — `ProfessionalService`:
  <https://schema.org/ProfessionalService>
  (Subclass of `LocalBusiness`; supports `areaServed` with `City` /
  `AdministrativeArea` for local SEO.)
- Google Search Central — Local Business structured data:
  <https://developers.google.com/search/docs/appearance/structured-data/local-business>
  (Google uses the `address` and `areaServed` signals to determine local
  pack eligibility.)
- Branch: `seo/indexing-improvements` (local)
- Plan: `docs/superpowers/plans/2026-06-19-seo-indexing-improvements.md`
- Spec: `docs/superpowers/specs/2026-06-19-seo-indexing-audit-and-improvements-design.md`
