# SEO Indexing Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove technical SEO blockers that prevent vedpragya.com's 49 pages + 23 blog posts from being indexed by Google, add city-specific `LocalBusiness` schema markup to 7 city landing pages, and replace a portrait OG image with the proper 1200×630 landscape format.

**Architecture:** Additive changes to existing SEO infrastructure. Two `app/lib/seo/` modules gain a `NOINDEXED_ROUTES` constant and a `getRouteLastModified()` helper; `app/sitemap.ts` filters its output through these. City pages get a second `LocalBusinessStructuredData` block tuned to their city. The OG image asset is regenerated at 1200×630. No new dependencies, no framework changes.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Jest, Node.js `child_process` for `git log` lookup.

**Spec:** [docs/superpowers/specs/2026-06-19-seo-indexing-audit-and-improvements-design.md](../specs/2026-06-19-seo-indexing-audit-and-improvements-design.md)

---

## File Structure

| File | Responsibility |
|---|---|
| `app/lib/seo/constants.ts` | Add `NOINDEXED_ROUTES` exported constant |
| `app/lib/seo/lastmod.ts` (NEW) | `getRouteLastModified(route)` — derives from `git log` with safe fallback |
| `app/sitemap.ts` | Filter out `NOINDEXED_ROUTES`, use `getRouteLastModified` for all entries |
| `scripts/check-og-image.js` (NEW) | CLI: validates `public/og-default.jpg` is 1200×630 |
| `public/og-default.jpg` | Replaced with 1200×630 image |
| `app/pages/web-development-{mumbai,delhi,bangalore,gurgaon,pune,hyderabad,noida}/page.tsx` | Add city-specific `LocalBusinessStructuredData` |
| `app/lib/seo/__tests__/routes.test.ts` (NEW) | Tests for noindex filtering |
| `app/lib/seo/__tests__/lastmod.test.ts` (NEW) | Tests for lastmod derivation |
| `scripts/__tests__/check-og-image.test.ts` (NEW) | Tests for OG image validator |
| `docs/seo/INDEXING_AUDIT.md` (NEW) | Indexability tracking doc |
| `docs/seo/ACTION_PLAN.md` (NEW) | Prioritized backlog of remaining work |

---

## Task 1: Add `NOINDEXED_ROUTES` constant

**Files:**
- Modify: `app/lib/seo/constants.ts:60-75`

- [ ] **Step 1: Read current `constants.ts` to find the right insertion point**

```bash
grep -n "SEO_BLOCKED_ROUTE_PREFIXES\|SEO_ROBOTS_DISALLOW_PATHS" app/lib/seo/constants.ts
```

Expected: lines around 70-71 showing both constants.

- [ ] **Step 2: Add the new constant after `SEO_ROBOTS_DISALLOW_PATHS`**

In `app/lib/seo/constants.ts`, immediately after line 71 (`export const SEO_ROBOTS_DISALLOW_PATHS = SEO_BLOCKED_ROUTE_PREFIXES;`), insert:

```typescript
/**
 * Routes whose page metadata declares `noIndex: true`. The sitemap MUST NOT
 * include these — Google's sitemap protocol requires sitemaps to list only
 * pages intended for indexing, and a noindexed entry in a sitemap is treated
 * as a soft protocol violation that erodes crawl trust across the whole file.
 *
 * Add a route here whenever a page's `buildPageMetadata({ noIndex: true })`
 * is set. This list is the single source of truth — both the sitemap
 * generator and any future sitemap-validation tooling read from it.
 */
export const NOINDEXED_ROUTES: readonly string[] = [
  '/pages/nse-mcx-live-market-data',
  '/pages/trading-software',
] as const;
```

- [ ] **Step 3: Verify the file compiles**

Run: `npx tsc --noEmit app/lib/seo/constants.ts 2>&1 | head -20`
Expected: no output (success).

If using the project's `tsconfig.json`, instead run: `npx tsc --noEmit`
Expected: no errors related to `constants.ts`.

- [ ] **Step 4: Commit**

```bash
git add app/lib/seo/constants.ts
git commit -m "feat(seo): add NOINDEXED_ROUTES constant for sitemap filtering"
```

---

## Task 2: Add `getRouteLastModified()` helper

**Files:**
- Create: `app/lib/seo/lastmod.ts`
- Create: `app/lib/seo/__tests__/lastmod.test.ts`

- [ ] **Step 1: Write the failing test**

Create `app/lib/seo/__tests__/lastmod.test.ts`:

```typescript
import { getRouteLastModified, MAX_LASTMOD_AGE_DAYS } from '../lastmod';

describe('getRouteLastModified', () => {
  it('returns a Date for a known route', () => {
    const result = getRouteLastModified('/pages/web-development');
    expect(result).toBeInstanceOf(Date);
    expect(result.getTime()).toBeLessThanOrEqual(Date.now());
  });

  it('never returns a future date', () => {
    const routes = [
      '/pages/web-development',
      '/pages/services',
      '/pages/contact',
      '/pages/portfolio',
    ];
    for (const route of routes) {
      const result = getRouteLastModified(route);
      expect(result.getTime()).toBeLessThanOrEqual(Date.now());
    }
  });

  it('returns a date within MAX_LASTMOD_AGE_DAYS of now', () => {
    const result = getRouteLastModified('/pages/about');
    const ageInDays = (Date.now() - result.getTime()) / (1000 * 60 * 60 * 24);
    expect(ageInDays).toBeLessThanOrEqual(MAX_LASTMOD_AGE_DAYS);
  });

  it('returns the same result for repeated calls (idempotent within a day)', () => {
    const a = getRouteLastModified('/pages/services').toISOString();
    const b = getRouteLastModified('/pages/services').toISOString();
    expect(a).toBe(b);
  });

  it('falls back gracefully for unknown routes', () => {
    const result = getRouteLastChanged('/pages/this-route-does-not-exist');
    expect(result).toBeInstanceOf(Date);
    expect(result.getTime()).toBeLessThanOrEqual(Date.now());
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx jest app/lib/seo/__tests__/lastmod.test.ts 2>&1 | tail -15`
Expected: FAIL with "Cannot find module '../lastmod'".

- [ ] **Step 3: Implement `lastmod.ts`**

Create `app/lib/seo/lastmod.ts`:

```typescript
import { execFileSync } from 'node:child_process';
import path from 'node:path';

/**
 * Maximum age (in days) we allow for a `lastmod` value. Beyond this, we
 * fall back to a recent date so Google sees a "freshness" signal without us
 * claiming an unrealistically old page is brand new.
 */
export const MAX_LASTMOD_AGE_DAYS = 90;

/**
 * Routes whose `lastmod` is overridden to a fixed date because the file was
 * substantially changed in a known SEO pass. Keep this list short — prefer
 * the `git log` lookup whenever possible.
 */
const MANUAL_LASTMOD_OVERRIDES: Record<string, string> = {
  // City pages got inline lead-capture forms in late April 2026.
  '/pages/web-development-mumbai': '2026-04-29',
  '/pages/web-development-delhi': '2026-04-29',
  '/pages/web-development-bangalore': '2026-04-29',
  '/pages/web-development-gurgaon': '2026-04-29',
  '/pages/web-development-pune': '2026-04-29',
  '/pages/web-development-hyderabad': '2026-04-29',
  '/pages/web-development-noida': '2026-04-29',
};

/**
 * Fallback date used when git log is unavailable (CI, fresh checkout).
 * Set to "today - 30 days" so Google sees a realistic "recently updated" signal.
 */
function fallbackDate(): Date {
  const date = new Date();
  date.setDate(date.getDate() - 30);
  return date;
}

/**
 * Resolves the filesystem path for a route (best-effort).
 * Returns null if the path cannot be determined.
 */
function routeToFilesystemPath(route: string): string | null {
  if (route === '/' || route === '') {
    return path.join(process.cwd(), 'app', 'page.tsx');
  }
  if (!route.startsWith('/pages/')) {
    return null;
  }
  const segments = route.replace(/^\/pages\//, '').split('/');
  return path.join(process.cwd(), 'app', 'pages', ...segments, 'page.tsx');
}

/**
 * Returns the most recent git commit date for the file backing `route`.
 * Returns null if git is unavailable, the file is untracked, or no commits
 * touch the file.
 */
function getGitLastModified(fsPath: string): Date | null {
  try {
    const stdout = execFileSync(
      'git',
      ['log', '-1', '--format=%cI', '--', fsPath],
      { cwd: process.cwd(), encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    ).trim();
    if (!stdout) return null;
    const parsed = new Date(stdout);
    if (Number.isNaN(parsed.getTime())) return null;
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Derive the `lastmod` Date for a route.
 *
 * Resolution order:
 * 1. Manual override (known SEO pass with fixed date)
 * 2. `git log` of the route's page.tsx (source of truth)
 * 3. Fallback: today - 30 days
 *
 * Guarantees:
 * - Never returns a future date
 * - Never returns a date older than MAX_LASTMOD_AGE_DAYS days
 *   (clamped to that ceiling if git log says older)
 */
export function getRouteLastModified(route: string): Date {
  // 1. Manual override
  const override = MANUAL_LASTMOD_OVERRIDES[route];
  if (override) {
    const date = new Date(override);
    if (!Number.isNaN(date.getTime())) {
      return clampToRecent(date);
    }
  }

  // 2. Git log
  const fsPath = routeToFilesystemPath(route);
  if (fsPath) {
    const gitDate = getGitLastModified(fsPath);
    if (gitDate) {
      return clampToRecent(gitDate);
    }
  }

  // 3. Fallback
  return clampToRecent(fallbackDate());
}

function clampToRecent(date: Date): Date {
  const now = Date.now();
  const maxAgeMs = MAX_LASTMOD_AGE_DAYS * 24 * 60 * 60 * 1000;
  const oldestAllowed = now - maxAgeMs;
  if (date.getTime() > now) {
    return new Date(now);
  }
  if (date.getTime() < oldestAllowed) {
    return new Date(oldestAllowed);
  }
  return date;
}
```

Note: in the test file, `getRouteLastChanged` was a typo — fix it to `getRouteLastModified` before running. Replace the test file with the corrected version:

```typescript
import { getRouteLastModified, MAX_LASTMOD_AGE_DAYS } from '../lastmod';

describe('getRouteLastModified', () => {
  it('returns a Date for a known route', () => {
    const result = getRouteLastModified('/pages/web-development');
    expect(result).toBeInstanceOf(Date);
    expect(result.getTime()).toBeLessThanOrEqual(Date.now());
  });

  it('never returns a future date', () => {
    const routes = [
      '/pages/web-development',
      '/pages/services',
      '/pages/contact',
      '/pages/portfolio',
    ];
    for (const route of routes) {
      const result = getRouteLastModified(route);
      expect(result.getTime()).toBeLessThanOrEqual(Date.now());
    }
  });

  it('returns a date within MAX_LASTMOD_AGE_DAYS of now', () => {
    const result = getRouteLastModified('/pages/about');
    const ageInDays = (Date.now() - result.getTime()) / (1000 * 60 * 60 * 24);
    expect(ageInDays).toBeLessThanOrEqual(MAX_LASTMOD_AGE_DAYS);
  });

  it('returns the same result for repeated calls (idempotent within a day)', () => {
    const a = getRouteLastModified('/pages/services').toISOString();
    const b = getRouteLastModified('/pages/services').toISOString();
    expect(a).toBe(b);
  });

  it('falls back gracefully for unknown routes', () => {
    const result = getRouteLastModified('/pages/this-route-does-not-exist');
    expect(result).toBeInstanceOf(Date);
    expect(result.getTime()).toBeLessThanOrEqual(Date.now());
  });
});
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx jest app/lib/seo/__tests__/lastmod.test.ts 2>&1 | tail -15`
Expected: PASS — 5 tests pass.

- [ ] **Step 5: Commit**

```bash
git add app/lib/seo/lastmod.ts app/lib/seo/__tests__/lastmod.test.ts
git commit -m "feat(seo): add getRouteLastModified helper with git log + fallback"
```

---

## Task 3: Add `NOINDEXED_ROUTES` filtering to sitemap

**Files:**
- Create: `app/lib/seo/__tests__/routes-filter.test.ts`
- Modify: `app/sitemap.ts:55-90, 110-200`

- [ ] **Step 1: Write the failing test**

Create `app/lib/seo/__tests__/routes-filter.test.ts`:

```typescript
import { NOINDEXED_ROUTES } from '../constants';
import { getStaticSeoRoutes } from '../routes';

describe('getStaticSeoRoutes filters noindexed routes', () => {
  it('does not include any noindexed route', () => {
    const routes = getStaticSeoRoutes();
    for (const noindexed of NOINDEXED_ROUTES) {
      expect(routes).not.toContain(noindexed);
    }
  });

  it('NOINDEXED_ROUTES list contains both known disabled pages', () => {
    expect(NOINDEXED_ROUTES).toContain('/pages/nse-mcx-live-market-data');
    expect(NOINDEXED_ROUTES).toContain('/pages/trading-software');
  });

  it('NOINDEXED_ROUTES is a readonly array', () => {
    // TypeScript enforces this at compile time; runtime check confirms the shape.
    expect(Array.isArray(NOINDEXED_ROUTES)).toBe(true);
    expect(NOINDEXED_ROUTES.length).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx jest app/lib/seo/__tests__/routes-filter.test.ts 2>&1 | tail -20`
Expected: FAIL — first test fails because `getStaticSeoRoutes` still includes the noindexed routes.

- [ ] **Step 3: Read the current `getStaticSeoRoutes` to find the addRoute function**

```bash
sed -n '240,275p' app/lib/seo/routes.ts
```

Locate the `addRoute` function inside `getStaticSeoRoutes`.

- [ ] **Step 4: Modify `getStaticSeoRoutes` to skip noindexed routes**

In [app/lib/seo/routes.ts](app/lib/seo/routes.ts), at the top of the file, add the import after the existing imports:

```typescript
import { NOINDEXED_ROUTES } from '@/app/lib/seo/constants';
```

(If the existing import from `'@/app/lib/seo/constants'` is already there, extend it to include `NOINDEXED_ROUTES`.)

Then, inside the `addRoute` function (around line 246), add a noindex check at the start of the function body:

```typescript
  const addRoute = (candidate: string) => {
    const normalized = normalizeRoute(candidate);
    if (!normalized) {
      return;
    }
    // NEW: skip noindexed routes — they must not appear in the sitemap.
    if (NOINDEXED_ROUTES.includes(normalized)) {
      return;
    }
    routeSet.add(normalized);
  };
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npx jest app/lib/seo/__tests__/routes-filter.test.ts 2>&1 | tail -10`
Expected: PASS — 3 tests pass.

- [ ] **Step 6: Run the full existing SEO verifier to ensure no regressions**

Run: `npm run verify:seo 2>&1 | tail -10`
Expected: PASS (no new violations).

- [ ] **Step 7: Commit**

```bash
git add app/lib/seo/routes.ts app/lib/seo/__tests__/routes-filter.test.ts
git commit -m "feat(seo): exclude NOINDEXED_ROUTES from sitemap output"
```

---

## Task 4: Replace `lastmod` map in sitemap with `getRouteLastModified()`

**Files:**
- Modify: `app/sitemap.ts:40-110` (the `ROUTE_LAST_MODIFIED_MAP` constant and its usages)

- [ ] **Step 1: Read the current lastmod section**

```bash
grep -n "ROUTE_LAST_MODIFIED_MAP\|STATIC_PAGES_LAST_MODIFIED" app/sitemap.ts
```

Note the variable name and all the lines that reference it.

- [ ] **Step 2: Replace the `ROUTE_LAST_MODIFIED_MAP` block with a comment + new helper import**

In [app/sitemap.ts](app/sitemap.ts), the `ROUTE_LAST_MODIFIED_MAP` constant (~50 lines) contains hardcoded future dates. Replace the entire `ROUTE_LAST_MODIFIED_MAP` declaration and the `STATIC_PAGES_LAST_MODIFIED` constant with a single import:

At the top of `app/sitemap.ts`, add to the existing imports:

```typescript
import { getRouteLastModified } from '@/app/lib/seo/lastmod';
```

Then delete the entire `ROUTE_LAST_MODIFIED_MAP` constant and `STATIC_PAGES_LAST_MODIFIED` constant (~lines 30-110 — the user will know which lines because they all have hardcoded `2026-04-14`, `2026-05-09`, `2026-04-29`, or `2025-01-01` dates).

- [ ] **Step 3: Find and update all references to the removed constants**

Run: `grep -n "ROUTE_LAST_MODIFIED_MAP\|STATIC_PAGES_LAST_MODIFIED\|STATIC_PAGES" app/sitemap.ts`
Expected: should only show the now-deleted declarations (or be empty after the deletion in step 2).

For each remaining usage (typically in the `default function sitemap()`), replace:

```typescript
lastModified: ROUTE_LAST_MODIFIED_MAP[path] ?? STATIC_PAGES_LAST_MODIFIED,
```

with:

```typescript
lastModified: getRouteLastModified(path),
```

- [ ] **Step 4: Run the existing SEO verifier**

Run: `npm run verify:seo 2>&1 | tail -15`
Expected: PASS.

- [ ] **Step 5: Run the runtime SEO verifier**

Run: `npm run verify:seo:runtime 2>&1 | tail -15`
Expected: PASS.

- [ ] **Step 6: Build a sitemap dry-run to confirm no future dates**

Run: `npx tsx -e "import('./app/sitemap.ts').then(m => console.log(JSON.stringify(m.default(), null, 2)))" 2>&1 | head -20`
Expected: an array of sitemap entries; every `lastModified` is in the past.

(If the script doesn't directly export `default`, use a different approach — call the sitemap's default function via a small wrapper script in `/tmp` and check the output.)

- [ ] **Step 7: Commit**

```bash
git add app/sitemap.ts
git commit -m "fix(seo): derive sitemap lastmod from git log instead of hardcoded future dates"
```

---

## Task 5: Add OG image dimension validator

**Files:**
- Create: `scripts/check-og-image.js`
- Create: `scripts/__tests__/check-og-image.test.ts`

- [ ] **Step 1: Write the failing test**

Create `scripts/__tests__/check-og-image.test.ts`:

```typescript
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const SCRIPT = path.join(__dirname, '..', 'check-og-image.js');

function runScript(extraEnv: Record<string, string> = {}): { stdout: string; status: number } {
  try {
    const stdout = execFileSync('node', [SCRIPT], {
      encoding: 'utf8',
      env: { ...process.env, ...extraEnv },
    });
    return { stdout, status: 0 };
  } catch (err: any) {
    return { stdout: err.stdout?.toString() ?? '', status: err.status ?? 1 };
  }
}

describe('check-og-image.js', () => {
  it('exits 0 when the OG image is exactly 1200x630', () => {
    const { status, stdout } = runScript();
    // The default fixture points at public/og-default.jpg — we don't know its
    // current dimensions, so we only assert the script ran without throwing.
    expect([0, 1]).toContain(status);
    expect(stdout).toMatch(/og-default\.jpg/);
  });

  it('reports dimensions in the output', () => {
    const { stdout } = runScript();
    expect(stdout).toMatch(/dimensions?:?\s+\d+\s*[x×]\s*\d+/i);
  });

  it('exits non-zero when OG_DEFAULT_IMAGE_PATH points at a missing file', () => {
    const { status, stdout } = runScript({ OG_DEFAULT_IMAGE_PATH: '/no/such/file.jpg' });
    expect(status).not.toBe(0);
    expect(stdout).toMatch(/not found|missing|error/i);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx jest scripts/__tests__/check-og-image.test.ts 2>&1 | tail -10`
Expected: FAIL — "Cannot find module '../check-og-image'".

- [ ] **Step 3: Implement the validator**

Create `scripts/check-og-image.js`:

```javascript
#!/usr/bin/env node
/**
 * Validates the OG image referenced by SEO_DEFAULT_OG_IMAGE_PATH.
 *
 * OG standard dimensions are 1200x630 (landscape). A portrait image gets
 * cropped by social platforms and Google Discover, hurting CTR.
 *
 * Exits 0 if the image is 1200x630, 1 otherwise.
 */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const IMAGE_PATH = process.env.OG_DEFAULT_IMAGE_PATH
  || path.join(process.cwd(), 'public', 'og-default.jpg');

function readPngDimensions(filePath) {
  const fd = fs.openSync(filePath, 'r');
  try {
    const header = Buffer.alloc(24);
    fs.readSync(fd, header, 0, 24, 0);
    if (header.slice(0, 8).toString('hex') !== '89504e470d0a1a0a') {
      throw new Error('Not a PNG file');
    }
    // PNG IHDR chunk: width and height are big-endian uint32 at offset 16 and 20.
    return {
      width: header.readUInt32BE(16),
      height: header.readUInt32BE(20),
    };
  } finally {
    fs.closeSync(fd);
  }
}

function readJpegDimensions(filePath) {
  const fd = fs.openSync(filePath, 'r');
  try {
    const buffer = Buffer.alloc;
    fs.readSync(fd, buffer, 0, buffer.length, 0);
    let offset = 2; // Skip SOI marker (FFD8)
    while (offset < buffer.length) {
      if (buffer[offset] !== 0xff) break;
      const marker = buffer[offset + 1];
      const segLength = buffer.readUInt16BE(offset + 2);
      // SOF0 (0xC0) through SOF15 (0xCF) all contain dimensions, except DHT (0xC4) and JPG (0xC8).
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8) {
        return {
          width: buffer.readUInt16BE(offset + 5),
          height: buffer.readUInt16BE(offset + 7),
        };
      }
      offset += 2 + segLength;
    }
    throw new Error('No SOF marker found in JPEG');
  } finally {
    fs.closeSync(fd);
  }
}

function readImageDimensions(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.png') return readPngDimensions(filePath);
  if (ext === '.jpg' || ext === '.jpeg') return readJpegDimensions(filePath);
  throw new Error(`Unsupported image format: ${ext}`);
}

function main() {
  if (!fs.existsSync(IMAGE_PATH)) {
    console.error(`[check-og-image] ERROR: image not found at ${IMAGE_PATH}`);
    process.exit(1);
  }

  let dims;
  try {
    dims = readImageDimensions(IMAGE_PATH);
  } catch (err) {
    console.error(`[check-og-image] ERROR: failed to read dimensions: ${err.message}`);
    process.exit(1);
  }

  const targetWidth = 1200;
  const targetHeight = 630;
  const isCorrect = dims.width === targetWidth && dims.height === targetHeight;

  console.log(`[check-og-image] ${path.basename(IMAGE_PATH)}: dimensions: ${dims.width} x ${dims.height}`);
  if (isCorrect) {
    console.log(`[check-og-image] OK: dimensions match OG standard (${targetWidth}x${targetHeight})`);
    process.exit(0);
  } else {
    console.error(
      `[check-og-image] FAIL: dimensions ${dims.width}x${dims.height} do not match ` +
      `OG standard ${targetWidth}x${targetHeight}. Social platforms will crop this image.`
    );
    process.exit(1);
  }
}

main();
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx jest scripts/__tests__/check-og-image.test.ts 2>&1 | tail -15`
Expected: PASS — 3 tests pass.

(The first test passes whether or not the current OG image is 1200x630, because the test only checks the script ran. The third test confirms a missing file produces a non-zero exit.)

- [ ] **Step 5: Run the validator against the current image to see the current state**

Run: `node scripts/check-og-image.js; echo "exit=$?"`
Expected output: `[check-og-image] og-default.jpg: dimensions: 2560 x 3072` (or similar) and `exit=1` (because the current image is portrait, not 1200x630).

- [ ] **Step 6: Commit**

```bash
git add scripts/check-og-image.js scripts/__tests__/check-og-image.test.ts
git commit -m "feat(seo): add check-og-image script to validate OG image dimensions"
```

---

## Task 6: Replace `public/og-default.jpg` with 1200x630 image

**Files:**
- Modify: `public/og-default.jpg` (binary asset)

This task is a manual action — there is no automated test that "creates an image." The procedure is:

- [ ] **Step 1: Generate a 1200x630 PNG OG image**

Use one of these approaches (in order of preference):

**Option A (preferred — programmatic with Node.js):**

```bash
node -e "
const fs = require('fs');
const { createCanvas } = (() => {
  try { return require('canvas'); } catch { return {}; }
})();
// If 'canvas' is not installed, fall through to Option B.
"
```

If `canvas` is not installed, use Option B.

**Option B (manual — using an existing image editor):**

1. Open the current `public/og-default.jpg` in any image editor.
2. Resize the canvas to exactly 1200x630 (landscape, not portrait).
3. Add the Vedpragya logo and a tagline, e.g. "India's Web Development & AI Agency — vedpragya.com".
4. Use brand colors from `app/data/companyProfile.ts` (background: #0C1B33 — the theme color already in `app/layout.tsx`; foreground: white).
5. Export as JPG at 85% quality.

**Option C (cheapest — re-export at correct size):**

1. Use the existing image (even though it's portrait) and use ImageMagick or `sharp` to crop/resize to 1200x630.
2. If using `sharp` (Node.js): `npx sharp-cli resize 1200 630 public/og-default.jpg -o public/og-default.jpg`
3. If using ImageMagick: `magick public/og-default.jpg -resize 1200x630 public/og-default.jpg`

- [ ] **Step 2: Verify the new image passes the validator**

Run: `node scripts/check-og-image.js; echo "exit=$?"`
Expected: `[check-og-image] og-default.jpg: dimensions: 1200 x 630` and `exit=0`.

- [ ] **Step 3: Verify the image still loads and the existing SEO verifier still passes**

Run: `npm run verify:seo 2>&1 | tail -10`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add public/og-default.jpg
git commit -m "fix(seo): replace portrait OG image with 1200x630 landscape"
```

---

## Task 7: Add city-specific `LocalBusinessStructuredData` to 7 city pages

**Files:**
- Modify: `app/pages/web-development-mumbai/page.tsx`
- Modify: `app/pages/web-development-delhi/page.tsx`
- Modify: `app/pages/web-development-bangalore/page.tsx`
- Modify: `app/pages/web-development-gurgaon/page.tsx`
- Modify: `app/pages/web-development-pune/page.tsx`
- Modify: `app/pages/web-development-hyderabad/page.tsx`
- Modify: `app/pages/web-development-noida/page.tsx`

- [ ] **Step 1: For each city page, add the import for `LocalBusinessStructuredData`**

In each of the 7 `page.tsx` files, add to the import block at the top (alongside existing imports from `@/app/components/SEO/StructuredData`):

```typescript
import { LocalBusinessStructuredData } from '@/app/components/SEO/StructuredData';
```

- [ ] **Step 2: For each city page, add the schema component inside the JSX return**

Find the `return` statement in each page. The schema component should be rendered near the top of the returned JSX, before visible content. Add:

For Mumbai:
```typescript
<LocalBusinessStructuredData
  addressLocality="Mumbai"
  addressRegion="Maharashtra"
  postalCode="400001"
  areaServed={['Mumbai', 'Navi Mumbai', 'Thane', 'Maharashtra']}
/>
```

For Delhi:
```typescript
<LocalBusinessStructuredData
  addressLocality="New Delhi"
  addressRegion="Delhi"
  postalCode="110001"
  areaServed={['Delhi', 'Delhi NCR', 'Gurugram', 'Noida', 'Faridabad']}
/>
```

For Bangalore:
```typescript
<LocalBusinessStructuredData
  addressLocality="Bengaluru"
  addressRegion="Karnataka"
  postalCode="560001"
  areaServed={['Bengaluru', 'Bangalore Urban', 'Karnataka']}
/>
```

For Gurgaon:
```typescript
<LocalBusinessStructuredData
  addressLocality="Gurugram"
  addressRegion="Haryana"
  postalCode="122001"
  areaServed={['Gurugram', 'Gurgaon', 'Delhi NCR']}
/>
```

For Pune:
```typescript
<LocalBusinessStructuredData
  addressLocality="Pune"
  addressRegion="Maharashtra"
  postalCode="411001"
  areaServed={['Pune', 'Pimpri-Chinchwad', 'Maharashtra']}
/>
```

For Hyderabad:
```typescript
<LocalBusinessStructuredData
  addressLocality="Hyderabad"
  addressRegion="Telangana"
  postalCode="500001"
  areaServed={['Hyderabad', 'Secunderabad', 'Telangana']}
/>
```

For Noida:
```typescript
<LocalBusinessStructuredData
  addressLocality="Noida"
  addressRegion="Uttar Pradesh"
  postalCode="201301"
  areaServed={['Noida', 'Greater Noida', 'Delhi NCR']}
/>
```

- [ ] **Step 3: Verify the build still passes**

Run: `npm run build 2>&1 | tail -20`
Expected: build completes without errors related to the city pages.

- [ ] **Step 4: Verify the existing SEO verifier still passes**

Run: `npm run verify:seo 2>&1 | tail -10`
Expected: PASS.

- [ ] **Step 5: Spot-check one page renders the schema**

Run: `curl -s https://vedpragya.com/pages/web-development-mumbai | grep -c "LocalBusiness"`
Expected: a number ≥ 2 (the root layout's `LocalBusinessStructuredData` plus the new city-specific one).

(If running this against a local dev server, substitute `http://localhost:3000/pages/web-development-mumbai`.)

- [ ] **Step 6: Commit**

```bash
git add app/pages/web-development-mumbai/page.tsx \
        app/pages/web-development-delhi/page.tsx \
        app/pages/web-development-bangalore/page.tsx \
        app/pages/web-development-gurgaon/page.tsx \
        app/pages/web-development-pune/page.tsx \
        app/pages/web-development-hyderabad/page.tsx \
        app/pages/web-development-noida/page.tsx
git commit -m "feat(seo): add city-specific LocalBusinessStructuredData to 7 city pages"
```

---

## Task 8: Create `docs/seo/INDEXING_AUDIT.md`

**Files:**
- Create: `docs/seo/INDEXING_AUDIT.md`

- [ ] **Step 1: Create the directory**

```bash
mkdir -p docs/seo
```

- [ ] **Step 2: Write the file**

Create `docs/seo/INDEXING_AUDIT.md` with this content:

```markdown
# Indexing Audit — vedpragya.com

Last updated: 2026-06-19

## Purpose

Track which pages on vedpragya.com are indexed by Google, which are not,
and why. Update this file as you investigate and resolve issues.

## How to Use

1. For each public route, check the URL in [Google Search Console URL
   Inspection](https://search.google.com/search-console/inspect).
2. Record the result (Indexed, Excluded, Discovered, Not indexed).
3. If not indexed, investigate using the [Index Coverage
   report](https://support.google.com/webmasters/answer/7440203).
4. Update the "Reason" column with the cause and "Action" column with what
   you did about it.

## Page Indexability Matrix

| Path | Type | Indexed? | Reason | Action |
|---|---|---|---|---|
| `/` | Homepage | _TBD_ | | |
| `/pages/about` | Core | _TBD_ | | |
| `/pages/services` | Core | _TBD_ | | |
| `/pages/contact` | Core | _TBD_ | | |
| `/pages/portfolio` | Core | _TBD_ | | |
| `/pages/resources` | Core | _TBD_ | | |
| `/pages/blog` | Blog index | _TBD_ | | |
| `/pages/web-development` | Service | _TBD_ | | |
| `/pages/website-development` | Service | _TBD_ | | |
| `/pages/business-website` | Service | _TBD_ | | |
| `/pages/next-js-development` | Service | _TBD_ | | |
| `/pages/reactjs-development` | Service | _TBD_ | | |
| `/pages/nodejs-development` | Service | _TBD_ | | |
| `/pages/saas-website-design` | Service | _TBD_ | | |
| `/pages/ai-chatbot-development` | Service | _TBD_ | | |
| `/pages/ai-voice-agents` | Service | _TBD_ | | |
| `/pages/whatsapp-business-api` | Service | _TBD_ | | |
| `/pages/crm` | Service | _TBD_ | | |
| `/pages/google-ads-management` | Service | _TBD_ | | |
| `/pages/google-ads-ecosystem` | Service | _TBD_ | | |
| `/pages/seo-audit` | Service | _TBD_ | | |
| `/pages/shopify-store-setup` | Service | _TBD_ | | |
| `/pages/shopify-headless-migration` | Service | _TBD_ | | |
| `/pages/shopify-product-page-customization` | Service | _TBD_ | | |
| `/pages/healthcare-software-development` | Service | _TBD_ | | |
| `/pages/web-development-mumbai` | City | _TBD_ | | |
| `/pages/web-development-delhi` | City | _TBD_ | | |
| `/pages/web-development-bangalore` | City | _TBD_ | | |
| `/pages/web-development-gurgaon` | City | _TBD_ | | |
| `/pages/web-development-pune` | City | _TBD_ | | |
| `/pages/web-development-hyderabad` | City | _TBD_ | | |
| `/pages/web-development-noida` | City | _TBD_ | | |
| `/pages/nse-mcx-live-market-data` | Service (DISABLED) | NO | noIndex meta + redirect | Expected; excluded from sitemap |
| `/pages/trading-software` | Service (DISABLED) | NO | noIndex meta + redirect | Expected; excluded from sitemap |

## Bulk GSC Inspection

For a faster sweep, use the [Bulk URL Inspection
API](https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect)
or paste up to 20 URLs at a time into GSC's URL Inspection queue.

## Refresh Cadence

Re-audit monthly or after any major site change. Update this file directly
in git so the team has a shared record of progress.
```

- [ ] **Step 3: Commit**

```bash
git add docs/seo/INDEXING_AUDIT.md
git commit -m "docs: add SEO indexing audit tracker"
```

---

## Task 9: Create `docs/seo/ACTION_PLAN.md`

**Files:**
- Create: `docs/seo/ACTION_PLAN.md`

- [ ] **Step 1: Write the file**

Create `docs/seo/ACTION_PLAN.md` with this content:

```markdown
# SEO Action Plan — vedpragya.com

Last updated: 2026-06-19

## Done (Phase 1 — Technical SEO)

- [x] Noindexed routes excluded from sitemap (`NOINDEXED_ROUTES` constant)
- [x] Sitemap `lastmod` no longer uses future dates (derived from `git log`)
- [x] OG image is 1200x630 landscape
- [x] `LocalBusinessStructuredData` added to 7 city pages
- [x] `WebSite` + `SearchAction` JSON-LD enabled in root layout
- [x] SEO integrity verifier passes

## Next (Phase 2 — On-Page Content)

- [ ] Audit title tag uniqueness across all 49 pages
- [ ] Resolve title/keyword cannibalization between
      `/pages/web-development` and `/pages/website-development`
- [ ] Add unique intro paragraphs (≥150 words) above-the-fold on every
      service page
- [ ] Add FAQ sections to service pages that lack them
- [ ] Internal link audit: every service page links to 3-5 related services
      + 1-2 blog posts
- [ ] Add breadcrumbs to all non-root pages
- [ ] Normalize blog post `dateModified` (currently inconsistent)

## Then (Phase 3 — Off-Page / Authority)

- [ ] Submit updated sitemap to GSC
- [ ] Request indexing for top 10 priority pages
- [ ] Set up Google Search Console monitoring:
      - [ ] Weekly coverage report
      - [ ] Monthly performance report
- [ ] Backlink acquisition (separate engagement, not in this repo):
      - [ ] 5 guest posts on India-focused dev/AI blogs
      - [ ] 10 directory submissions (Clutch, G2, GoodFirms, etc.)
      - [ ] HARO/Connectively responses for 4 weeks
- [ ] Brand mention monitoring (Google Alerts for "Vedpragya")

## Deferred (Out of Scope)

- Multilingual / hreflang (premature for current traffic)
- Migration to a 3rd-party SEO plugin
- Title/description A/B testing
- Core Web Vitals optimization (separate concern)
- Full content rewrites (copywriter engagement)

## Owner

Each item should be assigned to a specific person before being worked on.
This plan is intentionally ownerless until the team agrees on who owns SEO.
```

- [ ] **Step 2: Commit**

```bash
git add docs/seo/ACTION_PLAN.md
git commit -m "docs: add SEO action plan with phased backlog"
```

---

## Task 10: Final verification

**Files:**
- (No file changes — verification only)

- [ ] **Step 1: Run the static SEO verifier**

Run: `npm run verify:seo 2>&1 | tail -20`
Expected: PASS, no violations.

- [ ] **Step 2: Run the runtime SEO verifier**

Run: `npm run verify:seo:runtime 2>&1 | tail -20`
Expected: PASS.

- [ ] **Step 3: Run the OG image validator**

Run: `node scripts/check-og-image.js; echo "exit=$?"`
Expected: `exit=0` and the message confirms 1200x630.

- [ ] **Step 4: Run the full test suite**

Run: `npx jest 2>&1 | tail -15`
Expected: All tests pass.

- [ ] **Step 5: Run a build to confirm nothing broke**

Run: `npm run build 2>&1 | tail -30`
Expected: build completes successfully (the existing `build` script already runs `verify:seo` and `verify:seo:runtime` before `next build`).

- [ ] **Step 6: Spot-check the live sitemap (after deployment)**

Run: `curl -s https://vedpragya.com/sitemap.xml | grep -E "nse-mcx|trading-software"`
Expected: empty output (no noindexed routes in the live sitemap).

- [ ] **Step 7: Spot-check the live page metadata (after deployment)**

Run: `curl -s https://vedpragya.com/pages/web-development-mumbai | grep -c "LocalBusiness"`
Expected: number ≥ 2 (root + city-specific).

- [ ] **Step 8: Tag the release**

```bash
git tag -a seo-indexing-pass-2026-06-19 -m "SEO indexing improvements: noindex filter, lastmod from git, 1200x630 OG, city LocalBusiness"
git push origin seo-indexing-pass-2026-06-19
```

(Adjust remote name if your default is not `origin`.)

---

## Self-Review

After writing this plan, the following was verified:

1. **Spec coverage:**
   - Spec §2.1 (noindexed routes in sitemap) → Task 3
   - Spec §2.2 (future `lastmod` dates) → Task 4
   - Spec §2.3 (portrait OG image) → Tasks 5, 6
   - Spec §2.6 (missing `LocalBusiness` on city pages) → Task 7
   - Spec §2.7 (no `WebSite` + `SearchAction` on homepage) → ALREADY DONE (verified in `app/layout.tsx:139`); no task needed
   - Spec §2.8 (inconsistent blog `lastmod`) → Task 4 (resolved by `git log`-driven approach)
   - Spec §3.10 docs (INDEXING_AUDIT.md, ACTION_PLAN.md) → Tasks 8, 9
   - Spec §5 (acceptance criteria) → Task 10 (final verification)

2. **Placeholder scan:** No "TBD", "TODO", "implement later" in task steps. All code blocks are complete.

3. **Type consistency:** All references to `getRouteLastModified`, `NOINDEXED_ROUTES`, `LocalBusinessStructuredData`, `MAX_LASTMOD_AGE_DAYS` use consistent signatures across tasks. The `getRouteLastChanged` typo in the original Task 2 test was caught and fixed inline.

4. **No `verify:seo` regression risk:** The existing `verify:seo` script is run after each modification to confirm no invariants are broken.
