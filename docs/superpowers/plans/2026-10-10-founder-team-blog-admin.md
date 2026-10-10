# Founder, Team, Blog Sync and Admin Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the public blog read admin-written posts, add a founder page and a public team page, correct the founder title to "Founder & Operations Head", add six reviewed-before-publish SEO posts, and harden the admin API.

**Architecture:** Pure, unit-tested helper modules (`blogMerge`, `teamArrange`, `secretMask`, `blogAudit`, `withTimeout`) hold all logic; thin async wrappers do the database I/O with a timeout and a safe fallback to file/static data. Pages are server components that call those wrappers.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript (strict), Prisma 6 on Neon Postgres, Jest 29 via `next/jest`, `gray-matter` + `remark`, Tailwind v4.

**Spec:** `docs/superpowers/specs/2026-10-10-founder-team-blog-admin-design.md`

---

## Execution rules (read first)

- **No git commits and no deploys until Task 14.** The project instructions forbid committing or pushing without explicit approval. Every task ends with a `git status` checkpoint instead of a commit.
- **The Neon database is shared by Dev, Preview and Production.** Any script that writes to it changes production data immediately. Data scripts therefore support `--dry-run` and are run dry first.
- A dev server may already be running on port 3100 (`npm run dev -- -p 3100`, background task `bj1w131dt`). If not, start it. Windows paths with spaces: always quote.
- Run Prisma/tsx scripts with the env loaded: `npx dotenv-cli -e .env.local -- <command>` (Prisma does not read `.env.local`; `prisma/.env` still contains the **old dead AWS URL** and must never be relied on).
- Never print secret values. Check lengths/shape only.
- Run tests with `npx jest <path>`. Test only pure modules: `blog.ts` imports ESM-only `remark*` packages that Jest does not transform, so `blog.ts` is verified over HTTP against the dev server instead.

## File structure

**Create**
| File | Responsibility |
|---|---|
| `jest.config.mjs` | Make `npm test` work (SWC transform, `@/` alias) |
| `app/lib/withTimeout.ts` | Reject slow promises so a suspended DB never blocks rendering |
| `app/lib/blogMerge.ts` | Pure: DB row normalisation, row→summary, HTML detection, file+DB merge |
| `app/lib/blogDb.ts` | Prisma reads of `BlogPost` with timeout + safe fallback |
| `app/lib/secretMask.ts` | Pure: mask/unmask Zoho & Google secrets for the integrations API |
| `app/data/founder.ts` | Single source for founder copy used by pages, seed and fix script |
| `app/lib/teamArrange.ts` | Pure: team row normalisation, founder-first arrangement, initials |
| `app/lib/team.ts` | Prisma read of `TeamMember` with timeout + founder fallback |
| `app/components/team/TeamAvatar.tsx` | Photo or monogram avatar |
| `app/components/SEO/PersonStructuredData.tsx` | `Person` JSON-LD builder + component |
| `app/pages/founder/layout.tsx`, `app/pages/founder/page.tsx` | Founder page |
| `app/pages/team/layout.tsx`, `app/pages/team/page.tsx` | Public team page |
| `app/lib/blogAudit.ts`, `scripts/audit-blog.ts` | Pure blog audit rules + CLI runner |
| `prisma/fix-placeholder-data.ts` | One-off, idempotent: remove fabricated rows, upsert founder |
| `content/blog/<6 new>.md` | New posts (shipped as `draft: true`) |
| `app/lib/__tests__/*.test.ts` | Tests for each pure module |

**Modify**
`app/lib/blog.ts`, `app/components/RelatedBlogPosts.tsx`, `app/page.tsx`, `app/pages/blog/page.tsx`, `app/pages/blog/[slug]/page.tsx`, `app/pages/blog/[slug]/layout.tsx`, `app/sitemap.ts`, `app/api/admin/integrations/route.ts`, 11 admin API routes (shared Prisma client), `app/data/companyProfile.ts`, `app/layout.tsx`, `app/pages/about/page.tsx`, `app/pages/legal/company-info/page.tsx`, `app/data/navigation.ts`, `app/lib/seo/routes.ts`, `prisma/seed-production.ts`, `prisma/seed-data/authors.ts`, `prisma/verify-seed.ts`, `CLAUDE.md`.

---

### Task 0: Make Jest work and record baselines

**Files:** Create `jest.config.mjs`

- [ ] **Step 1: Confirm the current failure**

Run: `npx jest app/lib/seo/__tests__/lastmod.test.ts`
Expected: FAIL with `SyntaxError: Cannot use import statement outside a module`.

- [ ] **Step 2: Create `jest.config.mjs`**

```js
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' });

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
};

export default createJestConfig(config);
```

- [ ] **Step 3: Verify the previously failing test now runs**

Run: `npx jest app/lib/seo/__tests__/lastmod.test.ts`
Expected: PASS (suite runs; if an assertion inside fails for a pre-existing reason, note it in Step 4 and continue).

- [ ] **Step 4: Record the full baseline (do not fix unrelated failures)**

Run: `npx jest 2>&1 | tail -40`
Write the list of pre-existing failing suites into your working notes. Only regressions beyond this list matter later.

- [ ] **Step 5: Record the typecheck baseline**

Run: `npx tsc --noEmit 2>&1 | tail -30; echo "tsc exit: $?"`
Note the number and files of pre-existing errors.

- [ ] **Step 6: Checkpoint**

Run: `git status --short`
Expected: `?? jest.config.mjs` plus the already-untracked `.agents/`, `skills-lock.json`, `docs/superpowers/`; ` M prisma/schema.prisma`.

---

### Task 1: `withTimeout` and `blogMerge` (pure, test-first)

**Files:** Create `app/lib/withTimeout.ts`, `app/lib/blogMerge.ts`, `app/lib/__tests__/withTimeout.test.ts`, `app/lib/__tests__/blogMerge.test.ts`

- [ ] **Step 1: Write the failing `withTimeout` test** — `app/lib/__tests__/withTimeout.test.ts`

```ts
import { withTimeout } from '../withTimeout';

describe('withTimeout', () => {
  it('resolves when the promise settles in time', async () => {
    await expect(withTimeout(Promise.resolve(42), 100)).resolves.toBe(42);
  });

  it('rejects with a labelled error when the promise is too slow', async () => {
    const slow = new Promise<number>((resolve) => setTimeout(() => resolve(1), 200));
    await expect(withTimeout(slow, 20, 'slow call')).rejects.toThrow('slow call timed out after 20ms');
  });

  it('propagates the original rejection', async () => {
    await expect(withTimeout(Promise.reject(new Error('boom')), 100)).rejects.toThrow('boom');
  });
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npx jest app/lib/__tests__/withTimeout.test.ts`
Expected: FAIL — `Cannot find module '../withTimeout'`.

- [ ] **Step 3: Implement** — `app/lib/withTimeout.ts`

```ts
/**
 * Rejects if `promise` does not settle within `ms` milliseconds.
 * Used so a slow or suspended database never blocks page rendering.
 */
export function withTimeout<T>(promise: Promise<T>, ms: number, label = 'operation'): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}
```

- [ ] **Step 4: Run to verify it passes**

Run: `npx jest app/lib/__tests__/withTimeout.test.ts`
Expected: PASS, 3 tests.

- [ ] **Step 5: Write the failing `blogMerge` test** — `app/lib/__tests__/blogMerge.test.ts`

```ts
import {
  dbRowToSummary,
  looksLikeHtml,
  mergeBlogSummaries,
  normalizeDbRow,
  normalizeDbRows,
  type DbBlogRow,
} from '../blogMerge';
import type { BlogPostSummary } from '../blog';

const baseRow: DbBlogRow = {
  slug: 'Hello-World',
  title: 'Hello',
  excerpt: 'An excerpt',
  content: '<p>Hi</p>',
  publishedAt: new Date('2026-03-01T00:00:00Z'),
  updatedAt: new Date('2026-03-02T00:00:00Z'),
  readTime: 5,
  category: 'AI',
  tags: ['a', 'b'],
  imageUrl: '   ',
  featured: true,
  author: { name: 'Aman Kumar Sharma', title: 'Founder' },
};

function summary(slug: string, publishedAt: string, title = slug): BlogPostSummary {
  return {
    slug,
    title,
    excerpt: '',
    category: 'general',
    tags: [],
    publishedAt,
    readTime: 5,
    author: 'Aman Kumar Sharma',
  };
}

describe('looksLikeHtml', () => {
  it('detects block-level html at the start', () => {
    expect(looksLikeHtml('<p>Hi</p>')).toBe(true);
    expect(looksLikeHtml('  \n<h2>Title</h2>')).toBe(true);
    expect(looksLikeHtml('<ul><li>x</li></ul>')).toBe(true);
  });

  it('treats markdown and inline html as markdown', () => {
    expect(looksLikeHtml('## Heading\n\ntext')).toBe(false);
    expect(looksLikeHtml('Intro with <b>bold</b> text')).toBe(false);
    expect(looksLikeHtml('')).toBe(false);
  });
});

describe('normalizeDbRow / normalizeDbRows', () => {
  it('rejects non-objects and rows missing required strings', () => {
    expect(normalizeDbRow(null)).toBeNull();
    expect(normalizeDbRow({})).toBeNull();
    expect(normalizeDbRow({ slug: 's', title: 't' })).toBeNull();
  });

  it('returns [] for the Vercel-build mock Prisma client result ({})', () => {
    expect(normalizeDbRows({})).toEqual([]);
    expect(normalizeDbRows(undefined)).toEqual([]);
  });

  it('keeps valid rows and drops invalid ones', () => {
    const rows = normalizeDbRows([
      { slug: 'a', title: 'A', content: 'x', publishedAt: '2026-01-01', author: { name: 'N', title: 'T' } },
      { nope: true },
    ]);
    expect(rows).toHaveLength(1);
    expect(rows[0].slug).toBe('a');
    expect(rows[0].author).toEqual({ name: 'N', title: 'T' });
    expect(rows[0].readTime).toBe(6);
  });
});

describe('dbRowToSummary', () => {
  it('normalises slug and category, blanks empty image, maps author', () => {
    const result = dbRowToSummary(baseRow);
    expect(result).not.toBeNull();
    expect(result?.slug).toBe('hello-world');
    expect(result?.category).toBe('ai');
    expect(result?.image).toBeUndefined();
    expect(result?.author).toBe('Aman Kumar Sharma');
    expect(result?.authorTitle).toBe('Founder');
    expect(result?.publishedAt).toBe('2026-03-01T00:00:00.000Z');
    expect(result?.updatedAt).toBe('2026-03-02T00:00:00.000Z');
    expect(result?.featured).toBe(true);
  });

  it('keeps a real image url', () => {
    expect(dbRowToSummary({ ...baseRow, imageUrl: ' /images/blog/x.jpg ' })?.image).toBe('/images/blog/x.jpg');
  });

  it('returns null for an invalid slug', () => {
    expect(dbRowToSummary({ ...baseRow, slug: 'Bad Slug!' })).toBeNull();
  });

  it('returns null for an invalid publishedAt', () => {
    expect(dbRowToSummary({ ...baseRow, publishedAt: 'not a date' })).toBeNull();
  });

  it('falls back to the default author when the relation is missing', () => {
    const result = dbRowToSummary({ ...baseRow, author: null });
    expect(result?.author).toBe('Aman Kumar Sharma');
    expect(result?.authorTitle).toBe('Founder, Vedpragya');
  });
});

describe('mergeBlogSummaries', () => {
  it('unions file and database posts and sorts newest first', () => {
    const merged = mergeBlogSummaries(
      [summary('file-old', '2026-01-01'), summary('file-new', '2026-05-01')],
      [summary('db-mid', '2026-03-01')],
    );
    expect(merged.map((p) => p.slug)).toEqual(['file-new', 'db-mid', 'file-old']);
  });

  it('lets the database copy win when slugs collide', () => {
    const merged = mergeBlogSummaries(
      [summary('same', '2026-01-01', 'File title')],
      [summary('same', '2026-02-01', 'DB title')],
    );
    expect(merged).toHaveLength(1);
    expect(merged[0].title).toBe('DB title');
  });

  it('returns file posts unchanged when the database is empty', () => {
    const files = [summary('a', '2026-01-01'), summary('b', '2026-02-01')];
    expect(mergeBlogSummaries(files, []).map((p) => p.slug)).toEqual(['b', 'a']);
  });
});
```

- [ ] **Step 6: Run to verify it fails**

Run: `npx jest app/lib/__tests__/blogMerge.test.ts`
Expected: FAIL — `Cannot find module '../blogMerge'`.

- [ ] **Step 7: Implement** — `app/lib/blogMerge.ts`

```ts
import type { BlogPostSummary } from '@/app/lib/blog';

/**
 * Shape of a BlogPost database row (with its author relation) as consumed by
 * the public blog. Everything here is pure so it can be unit-tested without
 * Prisma or the filesystem.
 */
export interface DbBlogRow {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: Date | string;
  updatedAt: Date | string;
  readTime: number;
  category: string;
  tags: string[];
  imageUrl: string;
  featured: boolean;
  author: { name: string; title: string } | null;
}

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DEFAULT_AUTHOR = 'Aman Kumar Sharma';
const DEFAULT_AUTHOR_TITLE = 'Founder, Vedpragya';

/** True when the content starts with block-level HTML (seeded/imported posts). */
export function looksLikeHtml(content: string): boolean {
  return /^\s*<(?:h[1-6]|p|ul|ol|div|section|article|blockquote|table|figure)\b/i.test(content);
}

/**
 * Coerce an unknown Prisma result into a DbBlogRow, or null when it does not
 * look like one. Guards against the mock Prisma client used during Vercel
 * builds, which resolves to `{}` instead of an array/row.
 */
export function normalizeDbRow(raw: unknown): DbBlogRow | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as Record<string, unknown>;
  if (typeof r.slug !== 'string' || typeof r.title !== 'string' || typeof r.content !== 'string') {
    return null;
  }
  const author = r.author && typeof r.author === 'object' ? (r.author as Record<string, unknown>) : null;
  return {
    slug: r.slug,
    title: r.title,
    excerpt: typeof r.excerpt === 'string' ? r.excerpt : '',
    content: r.content,
    publishedAt: r.publishedAt as Date | string,
    updatedAt: (r.updatedAt ?? r.publishedAt) as Date | string,
    readTime: typeof r.readTime === 'number' ? r.readTime : 6,
    category: typeof r.category === 'string' ? r.category : 'general',
    tags: Array.isArray(r.tags) ? r.tags.map(String) : [],
    imageUrl: typeof r.imageUrl === 'string' ? r.imageUrl : '',
    featured: Boolean(r.featured),
    author:
      author && typeof author.name === 'string'
        ? { name: author.name, title: typeof author.title === 'string' ? author.title : '' }
        : null,
  };
}

export function normalizeDbRows(raw: unknown): DbBlogRow[] {
  if (!Array.isArray(raw)) return [];
  return raw.map(normalizeDbRow).filter((row): row is DbBlogRow => row !== null);
}

/** Map a database row to the public blog summary shape; null if unusable. */
export function dbRowToSummary(row: DbBlogRow): BlogPostSummary | null {
  const slug = row.slug.trim().toLowerCase();
  const published = new Date(row.publishedAt);
  if (!SLUG_PATTERN.test(slug) || Number.isNaN(published.getTime())) return null;

  const updated = new Date(row.updatedAt);
  const image = row.imageUrl.trim();

  return {
    slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category.trim().toLowerCase() || 'general',
    tags: row.tags,
    publishedAt: published.toISOString(),
    updatedAt: Number.isNaN(updated.getTime()) ? undefined : updated.toISOString(),
    readTime: row.readTime > 0 ? row.readTime : 6,
    author: row.author?.name || DEFAULT_AUTHOR,
    authorTitle: row.author?.title || DEFAULT_AUTHOR_TITLE,
    featured: row.featured,
    image: image || undefined,
  };
}

/** Union of file and database posts by slug (database wins), newest first. */
export function mergeBlogSummaries(
  filePosts: BlogPostSummary[],
  dbPosts: BlogPostSummary[],
): BlogPostSummary[] {
  const bySlug = new Map<string, BlogPostSummary>();
  for (const post of filePosts) bySlug.set(post.slug, post);
  for (const post of dbPosts) bySlug.set(post.slug, post);
  return Array.from(bySlug.values()).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
```

- [ ] **Step 8: Run to verify it passes**

Run: `npx jest app/lib/__tests__/blogMerge.test.ts app/lib/__tests__/withTimeout.test.ts`
Expected: PASS, all tests green.

- [ ] **Step 9: Checkpoint** — `git status --short` shows the 4 new files under `app/lib/`.

---

### Task 2: Database-aware blog API and its callers

**Files:** Create `app/lib/blogDb.ts`. Modify `app/lib/blog.ts`, `app/components/RelatedBlogPosts.tsx`, `app/page.tsx`, `app/pages/blog/page.tsx`, `app/pages/blog/[slug]/page.tsx`, `app/pages/blog/[slug]/layout.tsx`.

- [ ] **Step 1: Create `app/lib/blogDb.ts`**

```ts
import prisma from '@/app/lib/prisma';
import { dbRowToSummary, normalizeDbRow, normalizeDbRows, type DbBlogRow } from '@/app/lib/blogMerge';
import { withTimeout } from '@/app/lib/withTimeout';
import type { BlogPostSummary } from '@/app/lib/blog';

const DB_TIMEOUT_MS = 4000;
const AUTHOR_INCLUDE = { select: { name: true, title: true } } as const;

function logDbFailure(action: string, error: unknown) {
  console.error(`[Blog] Database ${action} failed; serving file-based posts only`, {
    error: error instanceof Error ? error.message : String(error),
  });
}

/** All database posts as public summaries. Never throws; [] on any failure. */
export async function fetchDbBlogSummaries(): Promise<BlogPostSummary[]> {
  try {
    const raw = await withTimeout(
      prisma.blogPost.findMany({ include: { author: AUTHOR_INCLUDE } }),
      DB_TIMEOUT_MS,
      'blogPost.findMany',
    );
    return normalizeDbRows(raw)
      .map(dbRowToSummary)
      .filter((post): post is BlogPostSummary => post !== null);
  } catch (error) {
    logDbFailure('list', error);
    return [];
  }
}

/** One database post by slug (with raw content). Never throws; null on failure. */
export async function fetchDbBlogRow(slug: string): Promise<DbBlogRow | null> {
  try {
    const raw = await withTimeout(
      prisma.blogPost.findUnique({ where: { slug }, include: { author: AUTHOR_INCLUDE } }),
      DB_TIMEOUT_MS,
      'blogPost.findUnique',
    );
    return normalizeDbRow(raw);
  } catch (error) {
    logDbFailure('lookup', error);
    return null;
  }
}
```

- [ ] **Step 2: Edit imports in `app/lib/blog.ts`**

Edit — old:
```ts
import remarkHtml from 'remark-html';
```
new:
```ts
import remarkHtml from 'remark-html';
import { fetchDbBlogRow, fetchDbBlogSummaries } from '@/app/lib/blogDb';
import { dbRowToSummary, looksLikeHtml, mergeBlogSummaries } from '@/app/lib/blogMerge';
```

- [ ] **Step 3: Replace the whole "Public API" section of `app/lib/blog.ts`**

The section starts at the banner whose middle line is `// Public API` (the `// ----` line above it is line 218) and runs to end of file. Truncate and append:

```bash
cd "C:/Users/ASUS TUF A15/Desktop/DevOPS/Projects/node-development-agency-template"
LN=$(grep -n '^// Public API$' app/lib/blog.ts | cut -d: -f1)   # expect a single number
START=$((LN-2))
head -n $((START-1)) app/lib/blog.ts > C:/tmp/blog.head.ts
```
Then write `C:/tmp/blog.tail.ts` with the content below, and `cat C:/tmp/blog.head.ts C:/tmp/blog.tail.ts > app/lib/blog.ts`. (The import line from Step 2 must already be applied, so apply Step 2 first.)

Tail content:

```ts
// ---------------------------------------------------------------------------
// Public API
//
// Posts come from two sources that are merged by slug:
//   1. content/blog/*.md  (git-versioned files)
//   2. the BlogPost table (written by the admin blog editor)
// When both define a slug the database copy wins. If the database is
// unreachable the site serves the file-based posts only.
// ---------------------------------------------------------------------------

/**
 * File-based summaries only (no database), newest first.
 * Excludes posts marked `draft: true` or `unlisted: true` in frontmatter.
 */
function getAllFileBlogPosts(): BlogPostSummary[] {
  const filenames = readBlogDirectorySafely();
  const posts: BlogPost[] = [];

  for (const filename of filenames) {
    const post = parseFrontmatterFromFile(filename);
    if (post) posts.push(post);
  }

  const visiblePosts = posts.filter((p) => !p.draft && !p.unlisted);

  const sortedPosts = visiblePosts.sort((a, b) => {
    const aTime = new Date(a.publishedAt).getTime();
    const bTime = new Date(b.publishedAt).getTime();
    return bTime - aTime;
  });

  console.log('[Blog] getAllFileBlogPosts', {
    total: posts.length,
    visible: sortedPosts.length,
    hidden: posts.length - sortedPosts.length,
  });

  // Strip markdown/html for summary usage
  return sortedPosts.map((post) => {
    const {
      contentMarkdown: _contentMarkdown,
      contentHtml: _contentHtml,
      draft: _draft,
      unlisted: _unlisted,
      ...rest
    } = post;
    void _contentMarkdown;
    void _contentHtml;
    void _draft;
    void _unlisted;
    return rest;
  });
}

/** All public post summaries (files + database), newest first. */
export async function getAllBlogPosts(): Promise<BlogPostSummary[]> {
  const filePosts = getAllFileBlogPosts();
  const dbPosts = await fetchDbBlogSummaries();
  const merged = mergeBlogSummaries(filePosts, dbPosts);
  console.log('[Blog] getAllBlogPosts (merged)', {
    files: filePosts.length,
    database: dbPosts.length,
    merged: merged.length,
  });
  return merged;
}

/** Slugs for generateStaticParams and the sitemap (files + database). */
export async function getBlogPostSlugs(): Promise<string[]> {
  return (await getAllBlogPosts()).map((post) => post.slug);
}

/**
 * Return a single blog post by slug, with rendered HTML.
 * Database copy wins over the file copy. Returns null if not found; draft and
 * unlisted file posts return null too.
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const normalizedSlug = slug.trim().toLowerCase();
  if (!isValidSlug(normalizedSlug)) {
    console.warn('[Blog] getBlogPost received invalid slug', { slug });
    return null;
  }

  const dbRow = await fetchDbBlogRow(normalizedSlug);
  const dbSummary = dbRow ? dbRowToSummary(dbRow) : null;
  if (dbRow && dbSummary) {
    return {
      ...dbSummary,
      contentMarkdown: dbRow.content,
      contentHtml: looksLikeHtml(dbRow.content)
        ? dbRow.content
        : await renderMarkdownToHtml(dbRow.content),
    };
  }

  const filename = `${normalizedSlug}.md`;
  const post = parseFrontmatterFromFile(filename);
  if (!post) return null;
  if (post.draft || post.unlisted) {
    console.log('[Blog] getBlogPost — post is hidden', {
      slug: normalizedSlug,
      draft: post.draft,
      unlisted: post.unlisted,
    });
    return null;
  }

  post.contentHtml = await renderMarkdownToHtml(post.contentMarkdown);
  return post;
}

/**
 * Return up to `limit` related blog posts in the same category,
 * excluding the given slug.
 */
export async function getRelatedBlogPosts(
  category: string,
  excludeSlug?: string,
  limit: number = 3,
): Promise<BlogPostSummary[]> {
  const normalizedCategory = category.toLowerCase();
  const allPosts = await getAllBlogPosts();

  const sameCategory = allPosts.filter(
    (post) => post.category === normalizedCategory && post.slug !== excludeSlug,
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  // Pad with general posts if not enough in category
  const others = allPosts.filter(
    (post) => post.category !== normalizedCategory && post.slug !== excludeSlug,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

/** All unique categories (for filter UIs). */
export async function getAllBlogCategories(): Promise<string[]> {
  const allPosts = await getAllBlogPosts();
  const categorySet = new Set<string>();
  allPosts.forEach((post) => categorySet.add(post.category));
  return Array.from(categorySet).sort();
}
```

Also update the file-header comment: change ` * Source: content/blog/*.md` to ` * Source: content/blog/*.md merged with the BlogPost table (database wins on slug).`

- [ ] **Step 4: Update `RelatedBlogPosts.tsx`** (async server component)

Edit — old:
```tsx
export function RelatedBlogPosts({
```
new:
```tsx
export async function RelatedBlogPosts({
```
Edit — old: `  const posts = getRelatedBlogPosts(category, undefined, limit);`
new: `  const posts = await getRelatedBlogPosts(category, undefined, limit);`

(Importers `app/pages/nodejs-development/page.tsx`, `app/pages/web-development/page.tsx`, `app/pages/blog/[slug]/page.tsx` are all server components — verified: none contain `'use client'`.)

- [ ] **Step 5: Update `app/page.tsx`**

Edit — old:
```tsx
  const featuredPosts = getAllBlogPosts()
    .filter((p) => p.featured)
    .slice(0, 3);
```
new:
```tsx
  const featuredPosts = (await getAllBlogPosts())
    .filter((p) => p.featured)
    .slice(0, 3);
```

- [ ] **Step 6: Update `app/pages/blog/page.tsx`**

Edit — old:
```tsx
export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getAllBlogCategories();
```
new:
```tsx
export const revalidate = 600;

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const categories = await getAllBlogCategories();
```
Also edit the doc comment line ` * File-based: reads all posts from content/blog/*.md at build/request time.` → ` * Reads content/blog/*.md plus admin-written BlogPost rows (database wins on slug); revalidated every 10 minutes.`

- [ ] **Step 7: Update `app/pages/blog/[slug]/page.tsx`**

Edit — old:
```tsx
export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();
```
new:
```tsx
export const revalidate = 600;

export async function generateStaticParams() {
  const slugs = await getBlogPostSlugs();
```
Edit — old: `  const relatedPosts = getRelatedBlogPosts(post.category, post.slug, 3);`
new: `  const relatedPosts = await getRelatedBlogPosts(post.category, post.slug, 3);`

- [ ] **Step 8: Simplify `app/pages/blog/[slug]/layout.tsx`** (stop double-querying the DB; `getBlogPost` is now DB-aware)

Edit — old:
```ts
    const dbPost = await prisma.blogPost.findUnique({ where: { slug: normalizedSlug } });
    const post = dbPost ?? await getBlogPost(normalizedSlug);
    if (post) {
      const title = (dbPost as { title?: string } | null)?.title ?? (post as { title?: string }).title ?? normalizedSlug;
      const excerpt = (dbPost as { excerpt?: string } | null)?.excerpt ?? (post as { excerpt?: string }).excerpt ?? '';
      const image = (dbPost as { image?: string | null } | null)?.image ?? (post as { image?: string }).image ?? '/og-default.jpg';
      const tags = (post as { tags?: string[] }).tags ?? [];
      const category = (post as { category?: string }).category ?? '';
      console.log('[SEO] Blog slug metadata generated', {
        source: dbPost ? 'database' : 'filesystem',
```
new:
```ts
    const post = await getBlogPost(normalizedSlug);
    if (post) {
      const title = post.title;
      const excerpt = post.excerpt;
      const image = post.image ?? '/og-default.jpg';
      const tags = post.tags;
      const category = post.category;
      console.log('[SEO] Blog slug metadata generated', {
        source: 'merged',
```
Then run `grep -n "prisma" "app/pages/blog/[slug]/layout.tsx"`. If the only match is the import line, delete `import prisma from '@/app/lib/prisma';`. Also change the doc comment above `generateMetadata` ("Reads from the filesystem-backed blog system … No DB dependency.") to "Reads from the merged blog source (markdown files + admin-written database posts)."

- [ ] **Step 9: Typecheck the touched surface**

Run: `npx tsc --noEmit 2>&1 | grep -E "blog|Blog|app/page.tsx|sitemap" | head -20`
Expected: no output. (`sitemap.ts` is fixed in Task 3; an error mentioning `getAllBlogPosts` there is expected until then.)

- [ ] **Step 10: Verify over HTTP against the dev server**

```bash
# list page shows every file post (26) — database currently holds the 7 mock rows (same slugs), so still 26
curl -s http://localhost:3100/pages/blog | grep -o 'href="/pages/blog/[a-z0-9-]*"' | sort -u | wc -l
# a file post renders
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:3100/pages/blog/nodejs-development-company-india
```
Expected: `26` (or more if drafts are absent) and `200`.

- [ ] **Step 11: End-to-end check that an admin-written post reaches the public site**

Uses the admin API (cookie from login; never print the password). The post exists in the shared database only for seconds and is deleted immediately.

```bash
cd "C:/Users/ASUS TUF A15/Desktop/DevOPS/Projects/node-development-agency-template"
export PW="$(grep -E '^ADMIN_PASSWORD=' .env.local | head -1 | cut -d= -f2- | sed -E 's/^"//; s/"$//')"
JAR=C:/tmp/admin.jar
node -e 'process.stdout.write(JSON.stringify({password:process.env.PW}))' | curl -s -c $JAR -X POST -H 'Content-Type: application/json' --data-binary @- http://localhost:3100/api/auth/login
AUTHOR=$(curl -s -b $JAR http://localhost:3100/api/admin/blog/authors | node -e 'const a=JSON.parse(require("fs").readFileSync(0,"utf8")).authors;console.log(a[0].id)')
curl -s -b $JAR -X POST -H 'Content-Type: application/json' http://localhost:3100/api/admin/blog -d "{\"slug\":\"zz-sync-test\",\"title\":\"ZZ sync test (safe to delete)\",\"excerpt\":\"temp\",\"content\":\"## Hello\\n\\nMarkdown body\",\"publishedAt\":\"2026-10-10\",\"readTime\":1,\"category\":\"general\",\"tags\":[],\"imageUrl\":\"\",\"featured\":false,\"authorId\":\"$AUTHOR\"}" | head -c 200; echo
curl -s -o C:/tmp/zz.html -w 'post page: %{http_code}\n' http://localhost:3100/pages/blog/zz-sync-test; grep -c '<h2>Hello</h2>' C:/tmp/zz.html
```
Expected: `post page: 200` and `1` (markdown from the admin editor was rendered). Then delete it. Check the DELETE signature first (`sed -n '105,125p' app/api/admin/blog/route.ts`) and call it accordingly, e.g.:
```bash
ID=$(curl -s -b $JAR http://localhost:3100/api/admin/blog | node -e 'const p=JSON.parse(require("fs").readFileSync(0,"utf8")).posts.find(x=>x.slug==="zz-sync-test");console.log(p.id)')
curl -s -b $JAR -X DELETE "http://localhost:3100/api/admin/blog?id=$ID"; echo
curl -s -o /dev/null -w 'after delete: %{http_code}\n' http://localhost:3100/pages/blog/zz-sync-test
rm -f C:/tmp/zz.html
```
Expected: `after delete: 404`. Keep `$JAR` for later tasks; delete it at the end of Task 13.

- [ ] **Step 12: Checkpoint** — `git status --short` shows `blogDb.ts` new and the 6 modified files.

---

### Task 3: Sitemap lists every post

**Files:** Modify `app/sitemap.ts`

- [ ] **Step 1: Capture the "before" count**

Run: `curl -s http://localhost:3100/sitemap.xml | grep -o '<loc>[^<]*/pages/blog/[a-z0-9-]*</loc>' | wc -l`
Expected: `7` (only the seeded database rows — the regression we are fixing).

- [ ] **Step 2: Remove the Prisma import**

Edit — old: `import prisma from '@/app/lib/prisma';\n` (the whole line) → new: empty.

- [ ] **Step 3: Replace `getBlogEntries`**

Edit — old (the entire existing function, from `async function getBlogEntries` to its closing brace):
```ts
async function getBlogEntries(): Promise<DynamicBlogEntry[]> {
  const fallbackBlogPosts = getAllBlogPosts();
  const staticFallback: DynamicBlogEntry[] = fallbackBlogPosts.map((post) => ({
    slug: post.slug,
    updatedAt: new Date(post.publishedAt),
  }));

  let dbEntries: DynamicBlogEntry[] | null = null;

  try {
    const rows = await prisma.blogPost.findMany({
      select: { slug: true, updatedAt: true },
      orderBy: { updatedAt: 'desc' },
    });
    const normalized = normalizeAndFilterBlogEntries(rows, 'database');

    if (normalized.length === 0) {
      console.warn('[SEO] Database blog entries were invalid for sitemap. Falling back to static data.');
      const fallbackNormalized = normalizeAndFilterBlogEntries(staticFallback, 'fallback');
      console.log('[SEO] Sitemap blog entries loaded from static fallback', { count: fallbackNormalized.length });
      return fallbackNormalized;
    }

    dbEntries = normalized;
    console.log('[SEO] Sitemap blog entries loaded from database', { count: dbEntries.length });
    return dbEntries;
  } catch (error) {
    console.error('[SEO] Failed to load blog posts from database for sitemap. Falling back to static data.', {
      error: error instanceof Error ? error.message : String(error),
    });
    const fallbackNormalized = normalizeAndFilterBlogEntries(staticFallback, 'fallback');
    console.log('[SEO] Sitemap blog entries loaded from static fallback', { count: fallbackNormalized.length });
    return fallbackNormalized;
  }
}
```
new:
```ts
async function getBlogEntries(): Promise<DynamicBlogEntry[]> {
  // getAllBlogPosts() already merges markdown files with database posts and
  // never throws, so every published post is listed regardless of source.
  const posts = await getAllBlogPosts();
  const entries: DynamicBlogEntry[] = posts.map((post) => ({
    slug: post.slug,
    updatedAt: new Date(post.updatedAt ?? post.publishedAt),
  }));
  const normalized = normalizeAndFilterBlogEntries(entries, 'filesystem');
  console.log('[SEO] Sitemap blog entries loaded', { count: normalized.length });
  return normalized;
}
```

- [ ] **Step 4: Verify**

Run: `curl -s http://localhost:3100/sitemap.xml | grep -o '<loc>[^<]*/pages/blog/[a-z0-9-]*</loc>' | wc -l`
Expected: `26`.
Run: `npx tsc --noEmit 2>&1 | grep -E "sitemap|blog" | head`
Expected: no output.

- [ ] **Step 5: Checkpoint** — `git status --short` shows `app/sitemap.ts` modified.

---

### Task 4: Mask integration secrets

**Files:** Create `app/lib/secretMask.ts`, `app/lib/__tests__/secretMask.test.ts`. Modify `app/api/admin/integrations/route.ts`.

- [ ] **Step 1: Confirm nothing else consumes the plaintext secrets**

Run: `grep -rn "api/admin/integrations'" app --include=*.ts --include=*.tsx | grep -v "route.ts"`
Expected: only `app/admin/integrations/page.tsx`. (It only tests secret truthiness and posts the whole object back on Save — which is why Step 5 must ignore masked values.)

- [ ] **Step 2: Write the failing test** — `app/lib/__tests__/secretMask.test.ts`

```ts
import {
  isMaskedSecret,
  maskIntegrationSettings,
  maskSecret,
  stripMaskedSecrets,
} from '../secretMask';

describe('maskSecret', () => {
  it('returns null for empty values', () => {
    expect(maskSecret(null)).toBeNull();
    expect(maskSecret(undefined)).toBeNull();
    expect(maskSecret('')).toBeNull();
  });

  it('shows only the last 4 characters of long secrets', () => {
    const masked = maskSecret('abcdefghijklmnop');
    expect(masked).toBe('••••••••mnop');
    expect(masked).not.toContain('abcdefgh');
  });

  it('shows nothing of short secrets', () => {
    expect(maskSecret('short')).toBe('••••••••');
  });
});

describe('isMaskedSecret', () => {
  it('recognises masked values only', () => {
    expect(isMaskedSecret('••••••••mnop')).toBe(true);
    expect(isMaskedSecret('••••••••')).toBe(true);
    expect(isMaskedSecret('real-secret')).toBe(false);
    expect(isMaskedSecret(null)).toBe(false);
    expect(isMaskedSecret('')).toBe(false);
  });
});

describe('maskIntegrationSettings', () => {
  it('masks every secret key and leaves other keys alone', () => {
    const result = maskIntegrationSettings({
      id: 'x',
      zohoClientId: 'public-client-id',
      zohoClientSecret: 'client-secret-123456',
      zohoRefreshToken: 'refresh-token-abcdef',
      zohoAccessToken: null,
      googleApiKey: 'AIza-key-0000',
    });
    expect(result?.zohoClientId).toBe('public-client-id');
    expect(result?.zohoClientSecret).toBe('••••••••3456');
    expect(result?.zohoRefreshToken).toBe('••••••••cdef');
    expect(result?.zohoAccessToken).toBeNull();
    expect(result?.googleApiKey).toBe('••••••••0000');
  });

  it('passes null through', () => {
    expect(maskIntegrationSettings(null)).toBeNull();
  });
});

describe('stripMaskedSecrets', () => {
  it('drops masked secret keys so a Save cannot overwrite the stored value', () => {
    const result = stripMaskedSecrets({
      zohoClientId: 'id',
      zohoClientSecret: '••••••••3456',
      zohoRefreshToken: 'brand-new-token',
    });
    expect(result).toEqual({ zohoClientId: 'id', zohoRefreshToken: 'brand-new-token' });
  });

  it('keeps an explicit empty string (user cleared the field)', () => {
    expect(stripMaskedSecrets({ zohoClientSecret: '' })).toEqual({ zohoClientSecret: '' });
  });
});
```

- [ ] **Step 3: Run to verify it fails**

Run: `npx jest app/lib/__tests__/secretMask.test.ts`
Expected: FAIL — `Cannot find module '../secretMask'`.

- [ ] **Step 4: Implement** — `app/lib/secretMask.ts`

```ts
/**
 * Masking for IntegrationSettings secrets. The admin UI saves by posting the
 * whole settings object back, so the API must (a) never return secrets in the
 * clear and (b) ignore masked placeholders on write, otherwise a plain "Save"
 * would overwrite the real secret with dots.
 */
const MASK = '••••••••';

export const SECRET_KEYS = [
  'zohoClientSecret',
  'zohoRefreshToken',
  'zohoAccessToken',
  'googleApiKey',
] as const;

export function maskSecret(value: string | null | undefined): string | null {
  if (!value) return null;
  const tail = value.length > 8 ? value.slice(-4) : '';
  return `${MASK}${tail}`;
}

export function isMaskedSecret(value: unknown): boolean {
  return typeof value === 'string' && value.startsWith(MASK);
}

export function maskIntegrationSettings<T extends Record<string, unknown>>(
  settings: T | null,
): T | null {
  if (!settings) return settings;
  const copy: Record<string, unknown> = { ...settings };
  for (const key of SECRET_KEYS) {
    if (key in copy) copy[key] = maskSecret(copy[key] as string | null | undefined);
  }
  return copy as T;
}

export function stripMaskedSecrets(input: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = { ...input };
  for (const key of SECRET_KEYS) {
    if (isMaskedSecret(out[key])) delete out[key];
  }
  return out;
}
```

- [ ] **Step 5: Run to verify it passes**

Run: `npx jest app/lib/__tests__/secretMask.test.ts`
Expected: PASS.

- [ ] **Step 6: Wire into `app/api/admin/integrations/route.ts`**

Edit — old: `import { upsertIntegrationSettingsFromEnv } from '@/app/lib/zohoService';`
new:
```ts
import { upsertIntegrationSettingsFromEnv } from '@/app/lib/zohoService';
import { maskIntegrationSettings, stripMaskedSecrets } from '@/app/lib/secretMask';
```
Edit — old (GET): `    return NextResponse.json({ settings });\n  } catch (error: any) {\n    return NextResponse.json(\n      { error: String(error?.message || error) },\n      { status: 500 }\n    );\n  }\n}\n\nexport async function POST` — simpler, make two targeted edits:

1. In `GET`, old: `    return NextResponse.json({ settings });` (the first occurrence, inside GET) → new: `    return NextResponse.json({ settings: maskIntegrationSettings(settings) });`
2. In `POST`, old: `    for (const k of keys) if (k in body) allowed[k] = body[k];` → new:
```ts
    for (const k of keys) if (k in body) allowed[k] = body[k];
    // The UI posts back masked secrets unchanged; never persist those.
    const writable = stripMaskedSecrets(allowed);
```
3. In `POST`, old: `settings = await prisma.integrationSettings.update({ where: { id: exists.id }, data: allowed });` → new: `settings = await prisma.integrationSettings.update({ where: { id: exists.id }, data: writable });`
4. In `POST`, old: `settings = await prisma.integrationSettings.create({ data: allowed });` → new: `settings = await prisma.integrationSettings.create({ data: writable });`
5. In `POST`, the final `return NextResponse.json({ settings });` → new: `return NextResponse.json({ settings: maskIntegrationSettings(settings) });`

(Edit the two `return NextResponse.json({ settings });` lines one at a time, using surrounding context to make each `old_string` unique.)

- [ ] **Step 7: Verify over HTTP (lengths/shape only, never the values)**

```bash
JAR=C:/tmp/admin.jar
curl -s -b $JAR http://localhost:3100/api/admin/integrations | node -e '
const s=JSON.parse(require("fs").readFileSync(0,"utf8")).settings;
for (const k of ["zohoClientSecret","zohoRefreshToken","zohoAccessToken","googleApiKey"]) {
  const v=s[k]; console.log(k.padEnd(18), v===null?"null":(String(v).startsWith("••••••••")?"masked":"PLAINTEXT!"));
}'
```
Expected: no line says `PLAINTEXT!`.

Round-trip safety (a Save with the masked object must not change stored secrets):
```bash
BEFORE=$(npx dotenv-cli -e .env.local -- node -e 'const {PrismaClient}=require("@prisma/client");const p=new PrismaClient();p.integrationSettings.findFirst().then(s=>{console.log(require("crypto").createHash("sha256").update(JSON.stringify([s.zohoClientSecret,s.zohoRefreshToken])).digest("hex"));return p.$disconnect()})')
curl -s -b $JAR http://localhost:3100/api/admin/integrations | node -e 'process.stdout.write(JSON.stringify(JSON.parse(require("fs").readFileSync(0,"utf8")).settings))' | curl -s -b $JAR -X POST -H 'Content-Type: application/json' --data-binary @- http://localhost:3100/api/admin/integrations > /dev/null
AFTER=$(npx dotenv-cli -e .env.local -- node -e 'const {PrismaClient}=require("@prisma/client");const p=new PrismaClient();p.integrationSettings.findFirst().then(s=>{console.log(require("crypto").createHash("sha256").update(JSON.stringify([s.zohoClientSecret,s.zohoRefreshToken])).digest("hex"));return p.$disconnect()})')
[ "$BEFORE" = "$AFTER" ] && echo "secrets unchanged by masked Save: OK" || echo "SECRETS CHANGED — STOP"
```
Expected: `secrets unchanged by masked Save: OK`. (The POST body is the masked `settings` object itself — exactly what the admin UI sends on Save — so this really exercises `stripMaskedSecrets`. As a sanity check that the test can fail, temporarily remove the `stripMaskedSecrets` call, re-run, and confirm it prints `SECRETS CHANGED`; then restore it.)

- [ ] **Step 8: Checkpoint** — `git status --short`: 2 new files in `app/lib/` (+ test), `integrations/route.ts` modified.

---

### Task 5: One shared Prisma client in the admin routes

**Files:** Modify the 11 files below.

`app/api/admin/blog/authors/route.ts`, `app/api/admin/blog/route.ts`, `app/api/admin/contacts/route.ts`, `app/api/admin/dashboard/stats/route.ts`, `app/api/admin/health/route.ts`, `app/api/admin/leads/retry-zoho/route.ts`, `app/api/admin/leads/route.ts`, `app/api/admin/newsletter/route.ts`, `app/api/admin/portfolio/route.ts`, `app/api/admin/resources/route.ts`, `app/api/admin/services/route.ts`, `app/api/admin/team/route.ts`

(That is 12 paths; the earlier "11" count excluded the integrations route, already shared.)

- [ ] **Step 1: Apply the mechanical replacement**

```bash
cd "C:/Users/ASUS TUF A15/Desktop/DevOPS/Projects/node-development-agency-template"
node -e '
const fs = require("fs");
const files = [
  "app/api/admin/blog/authors/route.ts","app/api/admin/blog/route.ts","app/api/admin/contacts/route.ts",
  "app/api/admin/dashboard/stats/route.ts","app/api/admin/health/route.ts","app/api/admin/leads/retry-zoho/route.ts",
  "app/api/admin/leads/route.ts","app/api/admin/newsletter/route.ts","app/api/admin/portfolio/route.ts",
  "app/api/admin/resources/route.ts","app/api/admin/services/route.ts","app/api/admin/team/route.ts",
];
for (const f of files) {
  let s = fs.readFileSync(f, "utf8");
  const before = s;
  s = s.replace("import { PrismaClient } from \x27@prisma/client\x27;", "import prisma from \x27@/app/lib/prisma\x27;");
  s = s.replace(/^const prisma = new PrismaClient\(\);\r?\n/m, "");
  if (s === before) { console.log("UNCHANGED:", f); continue; }
  fs.writeFileSync(f, s);
  console.log("updated:", f);
}'
```
Expected: 12 lines starting `updated:`; no `UNCHANGED:`.

- [ ] **Step 2: Verify no stray clients remain**

Run: `grep -rn "new PrismaClient()" app | grep -v "app/lib/prisma.ts"`
Expected: no output.
Run: `grep -rn "PrismaClient" app/api/admin | head`
Expected: no output (if a file used `PrismaClient` as a *type*, tsc in Step 3 will flag it — fix by importing the type from `@prisma/client`).

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit 2>&1 | grep "app/api/admin" | head`
Expected: no output.

- [ ] **Step 4: Re-run the admin API smoke (same checks as the earlier manual run)**

```bash
JAR=C:/tmp/admin.jar
for ep in dashboard/stats health blog blog/authors contacts integrations leads logs newsletter portfolio resources services team; do
  printf '%-18s %s\n' "$ep" "$(curl -s -b $JAR -o /dev/null -w '%{http_code}' --max-time 120 http://localhost:3100/api/admin/$ep)"
done
```
Expected: all `200`.

- [ ] **Step 5: Checkpoint** — `git status --short` shows 12 modified route files.

---

### Task 6: Founder data module and the "Founder & Operations Head" title

**Files:** Create `app/data/founder.ts`. Modify `app/data/companyProfile.ts`, `app/layout.tsx`, `app/pages/about/page.tsx`, `app/pages/legal/company-info/page.tsx`.

- [ ] **Step 1: Change the canonical title** — `app/data/companyProfile.ts`

Edit — old: `    title: "Founder & CEO",` → new: `    title: "Founder & Operations Head",`

- [ ] **Step 2: Create `app/data/founder.ts`**

Copy is taken verbatim from the existing about page (the owner's own words). The responsibilities list is **draft copy to be reviewed by the owner**.

```ts
/**
 * @fileoverview Founder copy — single source for the founder page, team page,
 * about page card, and database seed/fix scripts.
 *
 * Identity (name/title) comes from companyProfile so there is one place to
 * change it. Bio text is copied from the existing About page.
 */
import { companyProfile } from './companyProfile';

const founder = companyProfile.founder;
if (!founder) {
  throw new Error('companyProfile.founder must be defined');
}

export const FOUNDER_NAME = founder.name;
export const FOUNDER_TITLE = founder.title ?? 'Founder';
export const FOUNDER_INITIALS = 'AK';
export const FOUNDER_FOUNDED_YEAR = 2025;

export const FOUNDER_QUOTE =
  'I started Vedpragya because great engineering is rare — and businesses deserve software that actually holds up.';

export const FOUNDER_SHORT_BIO =
  'Full-stack engineer and entrepreneur. Built enterprise-grade systems across fintech, logistics, healthcare, and e-commerce. Founded Vedpragya to bring serious engineering to businesses of all sizes.';

export const FOUNDER_LONG_BIO: readonly string[] = [
  FOUNDER_SHORT_BIO,
  'Before starting Vedpragya, Aman led engineering at multiple startups and delivered mission-critical systems for clients across India, the UAE, and North America. He believes the best engineering firms also ship their own products — and Vedpragya does exactly that with BharatERP, TradeZen, and five more live platforms.',
];

/** DRAFT COPY — owner to review. Describes the remit implied by "Operations Head". */
export const FOUNDER_RESPONSIBILITIES: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: 'Delivery & project governance',
    body: 'Keeps every engagement scoped, scheduled, and on track from kickoff to launch.',
  },
  {
    title: 'Client communication',
    body: 'Acts as the point of accountability for clients — clear updates, honest timelines, fast escalation.',
  },
  {
    title: 'Process & quality standards',
    body: 'Owns how Vedpragya plans, reviews, tests, and ships work so quality stays consistent.',
  },
  {
    title: 'Team operations',
    body: 'Coordinates people, tooling, and hiring so engineers can focus on building.',
  },
];

/** Row used for the TeamMember table (seed + fix script + page fallback). */
export const FOUNDER_TEAM_MEMBER = {
  id: 'team-founder',
  name: FOUNDER_NAME,
  position: FOUNDER_TITLE,
  bio: FOUNDER_SHORT_BIO,
  avatar: '',
  order: 0,
  active: true,
};
```

- [ ] **Step 3: Update remaining "Founder & CEO" strings that refer to Aman**

(The testimonial files and `TestimonialCarousel.tsx` refer to *clients* — leave them alone.)

1. `app/layout.tsx` — old: `authors: [{ name: "Aman Kumar Sharma — Founder & CEO, Vedpragya Bharat Private Limited" }],` → new: `authors: [{ name: "Aman Kumar Sharma — Founder & Operations Head, Vedpragya Bharat Private Limited" }],`
2. `app/pages/legal/company-info/page.tsx` — old: `Founder & CEO</h3>` → new: `Founder & Operations Head</h3>`
3. `app/pages/about/page.tsx`:
   - Edit — old: `import { MovingBorder } from "@/app/components/ui/moving-border";` → new:
     ```tsx
     import { MovingBorder } from "@/app/components/ui/moving-border";
     import { companyProfile } from "@/app/data/companyProfile";
     ```
   - Edit — old: `                  <p className="text-sm text-[#2563EB] font-semibold mt-0.5">Founder &amp; CEO</p>` → new:
     ```tsx
                       <p className="text-sm text-[#2563EB] font-semibold mt-0.5">{companyProfile.founder?.title}</p>
                       <Link
                         href="/pages/founder"
                         className="inline-block mt-2 text-sm font-semibold text-[#2563EB] hover:underline"
                       >
                         Read full profile →
                       </Link>
     ```
   (`Link` is already imported in that file.)

- [ ] **Step 4: Verify**

Run: `grep -rnE "Founder (&|&amp;|and) CEO" app | grep -vE "testimonial|Testimonial|case-studies"`
Expected: no output.
Run: `npx tsc --noEmit 2>&1 | grep -E "founder|companyProfile|about/page|company-info|app/layout" | head`
Expected: no output.
Run: `curl -s http://localhost:3100/pages/about | grep -o 'Founder &amp; Operations Head' | head -1`
Expected: `Founder &amp; Operations Head`.

- [ ] **Step 5: Checkpoint** — `git status --short`: `app/data/founder.ts` new; 4 modified files.

---

### Task 7: Remove fabricated database rows and align the seed

**Files:** Create `prisma/fix-placeholder-data.ts`. Modify `prisma/seed-data/authors.ts`, `prisma/seed-production.ts`, `prisma/verify-seed.ts`.

> The database is shared with production: this task changes live data. Run `--dry-run` first and read it.

- [ ] **Step 1: Create `prisma/fix-placeholder-data.ts`**

```ts
/**
 * One-off, idempotent data fix.
 *
 *  - deletes the fabricated placeholder team members created by an earlier seed
 *  - deletes the 7 mock BlogPost rows that duplicate real content/blog/*.md slugs
 *    (they were overriding real titles/descriptions in page metadata)
 *  - deletes the 5 fabricated authors once they own no posts
 *  - upserts the real founder as Author and TeamMember
 *
 * Usage:
 *   npx dotenv-cli -e .env.local -- npx tsx prisma/fix-placeholder-data.ts --dry-run
 *   npx dotenv-cli -e .env.local -- npx tsx prisma/fix-placeholder-data.ts
 */
import { PrismaClient } from '@prisma/client';
import { companyProfile } from '../app/data/companyProfile';
import {
  FOUNDER_NAME,
  FOUNDER_SHORT_BIO,
  FOUNDER_TEAM_MEMBER,
  FOUNDER_TITLE,
} from '../app/data/founder';

const prisma = new PrismaClient();
const dryRun = process.argv.includes('--dry-run');

const PLACEHOLDER_TEAM_IDS = ['team-ceo-1', 'team-lead-2', 'team-dev-3'];

const FABRICATED_AUTHOR_EMAILS = [
  'rajesh.kumar@vedpragyabharat.com',
  'priya.sharma@vedpragyabharat.com',
  'amit.patel@vedpragyabharat.com',
  'sneha.reddy@vedpragyabharat.com',
  'vikram.singh@vedpragyabharat.com',
];

const MOCK_BLOG_SLUGS = [
  'ai-chatbot-roi-calculator',
  'gpt4-vs-claude-vs-gemini-chatbots',
  'whatsapp-ai-chatbot-india',
  'ai-voice-agents-business',
  'ai-chatbot-mistakes-avoid',
  'shopify-headless-complete-guide',
  'shopify-conversion-optimization',
];

async function main() {
  console.log(dryRun ? '--- DRY RUN: nothing will be changed ---' : '--- APPLYING CHANGES ---');

  const mockPostWhere = {
    slug: { in: MOCK_BLOG_SLUGS },
    author: { email: { in: FABRICATED_AUTHOR_EMAILS } },
  };
  const teamWhere = { id: { in: PLACEHOLDER_TEAM_IDS } };

  const teamToDelete = await prisma.teamMember.findMany({ where: teamWhere, select: { id: true, name: true } });
  const postsToDelete = await prisma.blogPost.findMany({ where: mockPostWhere, select: { slug: true } });
  console.log('Placeholder team members:', teamToDelete.map((t) => t.name));
  console.log('Mock blog rows:', postsToDelete.map((p) => p.slug));

  if (!dryRun) {
    const team = await prisma.teamMember.deleteMany({ where: teamWhere });
    const posts = await prisma.blogPost.deleteMany({ where: mockPostWhere });
    const authors = await prisma.author.deleteMany({
      where: { email: { in: FABRICATED_AUTHOR_EMAILS }, blogPosts: { none: {} } },
    });
    console.log(`Deleted: ${team.count} team members, ${posts.count} blog rows, ${authors.count} authors`);

    const author = await prisma.author.upsert({
      where: { email: companyProfile.contactEmail },
      update: { name: FOUNDER_NAME, title: FOUNDER_TITLE, bio: FOUNDER_SHORT_BIO },
      create: {
        email: companyProfile.contactEmail,
        name: FOUNDER_NAME,
        title: FOUNDER_TITLE,
        bio: FOUNDER_SHORT_BIO,
        avatar: '',
      },
    });
    const member = await prisma.teamMember.upsert({
      where: { id: FOUNDER_TEAM_MEMBER.id },
      update: FOUNDER_TEAM_MEMBER,
      create: FOUNDER_TEAM_MEMBER,
    });
    console.log(`Upserted founder author (${author.id}) and team member (${member.id})`);
  }

  const [teamCount, postCount, authorCount] = await Promise.all([
    prisma.teamMember.count(),
    prisma.blogPost.count(),
    prisma.author.count(),
  ]);
  console.log({ teamCount, postCount, authorCount });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
```

- [ ] **Step 2: Dry run and read the output**

Run: `npx dotenv-cli -e .env.local -- npx tsx prisma/fix-placeholder-data.ts --dry-run`
Expected: lists `Rajesh Kumar`, `Priya Sharma`, `Amit Patel` and the 7 mock slugs; counts `{ teamCount: 3, postCount: 7, authorCount: 5 }`. **If the lists differ, stop and investigate.**

- [ ] **Step 3: Apply**

Run: `npx dotenv-cli -e .env.local -- npx tsx prisma/fix-placeholder-data.ts`
Expected: `Deleted: 3 team members, 7 blog rows, 5 authors`, `Upserted founder author (...) and team member (team-founder)`, counts `{ teamCount: 1, postCount: 0, authorCount: 1 }`.

- [ ] **Step 4: Align `prisma/seed-data/authors.ts`** — replace the whole file:

```ts
/**
 * @fileoverview Authors Data for Blog Posts
 * @description The real author(s) offered in the admin blog editor.
 * Only people who actually exist belong here — add teammates via /admin/team.
 */
import { companyProfile } from '../../app/data/companyProfile';
import {
  FOUNDER_NAME,
  FOUNDER_SHORT_BIO,
  FOUNDER_TITLE,
} from '../../app/data/founder';

export const authorsData = [
  {
    // Author.email is the unique upsert key; the shared company mailbox is used
    // because no personal address is published.
    email: companyProfile.contactEmail,
    name: FOUNDER_NAME,
    title: FOUNDER_TITLE,
    bio: FOUNDER_SHORT_BIO,
    avatar: '',
    website: null,
    linkedIn: null,
    twitter: null,
    github: null,
  },
];

console.log('[Seed Data] Authors data loaded:', authorsData.length, 'authors');
```

- [ ] **Step 5: Align `prisma/seed-production.ts`** with a node script (markers verified against the current file):

```bash
node -e '
const fs = require("fs");
const f = "prisma/seed-production.ts";
let s = fs.readFileSync(f, "utf8");

// 1. imports: drop the mock blog datasets, add the founder row
s = s.replace("import { blogPostsData } from \x27./seed-data/blog-posts\x27;\n", "");
s = s.replace("import { blogPostsPart2Data } from \x27./seed-data/blog-posts-part2\x27;\n",
  "import { FOUNDER_TEAM_MEMBER } from \x27../app/data/founder\x27;\n");

// 2. startup banner line
s = s.replace(/^  console\.log\(`   - Blog Posts: \$\{blogPostsData\.length \+ blogPostsPart2Data\.length\}`\);\r?\n/m, "");

// 3. remove STEP 3 (blog posts) entirely
const start = s.indexOf("    // ========================================\n    // 3. SEED BLOG POSTS");
const endMarker = "logInfo(`Total blog posts processed: ${postsCreated}/${allBlogPosts.length}`);\n";
const end = s.indexOf(endMarker);
if (start < 0 || end < 0) throw new Error("STEP 3 markers not found");
s = s.slice(0, start)
  + "    // Blog posts are NOT seeded: the public blog reads content/blog/*.md plus\n"
  + "    // posts written in the admin editor (see app/lib/blog.ts).\n"
  + s.slice(end + endMarker.length);

// 4. team: founder only
const tStart = s.indexOf("    const teamMembers = [");
const tEndMarker = "    for (const member of teamMembers) {";
const tEnd = s.indexOf(tEndMarker);
if (tStart < 0 || tEnd < 0) throw new Error("team markers not found");
s = s.slice(0, tStart)
  + "    // Only real people are seeded; add teammates through /admin/team.\n"
  + "    const teamMembers = [FOUNDER_TEAM_MEMBER];\n\n"
  + s.slice(tEnd);

fs.writeFileSync(f, s);
console.log("seed-production.ts updated");'
```
Expected: `seed-production.ts updated`. Then `grep -nE "blogPostsData|blogPostsPart2Data|Rajesh|Priya|Amit" prisma/seed-production.ts` → expected: no output. Run `npx tsc --noEmit 2>&1 | grep "prisma/" | head` → expected: no output. (Leave `prisma/seed-data/blog-posts*.ts` files in place; they are now unused.)

- [ ] **Step 6: Update `prisma/verify-seed.ts` expectations**

Edit — old: `(Expected: 5)` (Authors line) → new: `(Expected: 1)`; old: `(Expected: 7+)` → new: `(Expected: 0 — blogs live in content/blog)`; old: `(Expected: 3)` (Team Members line) → new: `(Expected: 1+)`. (Each `old_string` includes enough of its line to be unique.)

- [ ] **Step 7: Verify the live admin APIs reflect the fix**

```bash
JAR=C:/tmp/admin.jar
curl -s -b $JAR http://localhost:3100/api/admin/team | node -e 'const m=JSON.parse(require("fs").readFileSync(0,"utf8")).members;console.log(m.map(x=>x.name+" — "+x.position))'
curl -s -b $JAR http://localhost:3100/api/admin/blog/authors | node -e 'console.log(JSON.parse(require("fs").readFileSync(0,"utf8")).authors.map(a=>a.name))'
curl -s http://localhost:3100/sitemap.xml | grep -o '<loc>[^<]*/pages/blog/[a-z0-9-]*</loc>' | wc -l
```
Expected: `[ 'Aman Kumar Sharma — Founder & Operations Head' ]`, `[ 'Aman Kumar Sharma' ]`, and `26`.

- [ ] **Step 8: Checkpoint** — `git status --short`: new `prisma/fix-placeholder-data.ts`; modified `prisma/seed-data/authors.ts`, `prisma/seed-production.ts`, `prisma/verify-seed.ts`.

---

### Task 8: Team data layer, avatar and Person JSON-LD

**Files:** Create `app/lib/teamArrange.ts`, `app/lib/team.ts`, `app/components/team/TeamAvatar.tsx`, `app/components/SEO/PersonStructuredData.tsx`, `app/lib/__tests__/teamArrange.test.ts`, `app/lib/__tests__/personJsonLd.test.ts`

- [ ] **Step 1: Write the failing team test** — `app/lib/__tests__/teamArrange.test.ts`

```ts
import {
  arrangeTeam,
  founderFallbackMember,
  initialsOf,
  normalizeTeamRows,
  type TeamCardMember,
} from '../teamArrange';

function member(overrides: Partial<TeamCardMember>): TeamCardMember {
  return {
    id: 'id',
    name: 'Someone',
    position: 'Engineer',
    bio: 'bio',
    avatar: '',
    linkedIn: null,
    twitter: null,
    github: null,
    website: null,
    order: 1,
    isFounder: false,
    ...overrides,
  };
}

describe('initialsOf', () => {
  it('uses first letters of the first and last word', () => {
    expect(initialsOf('Priya Sharma')).toBe('PS');
    expect(initialsOf('  Madonna ')).toBe('M');
    expect(initialsOf('Anna Maria Lopez')).toBe('AL');
    expect(initialsOf('')).toBe('?');
  });
});

describe('normalizeTeamRows', () => {
  it('returns [] for non-arrays such as the build-time mock result', () => {
    expect(normalizeTeamRows({})).toEqual([]);
    expect(normalizeTeamRows(null)).toEqual([]);
  });

  it('drops rows without a name or position and flags the founder by name', () => {
    const rows = normalizeTeamRows([
      { id: 'a', name: 'Aman Kumar Sharma', position: 'Founder', bio: 'b', avatar: '', order: 0 },
      { id: 'b', name: 'No Position' },
      { id: 'c', name: 'Riya Verma', position: 'Designer', bio: 'b', avatar: '/x.jpg', order: 2, linkedIn: 'https://l' },
    ]);
    expect(rows.map((r) => r.name)).toEqual(['Aman Kumar Sharma', 'Riya Verma']);
    expect(rows[0].isFounder).toBe(true);
    expect(rows[1].isFounder).toBe(false);
    expect(rows[1].linkedIn).toBe('https://l');
    expect(rows[1].github).toBeNull();
  });
});

describe('arrangeTeam', () => {
  it('puts the founder first and sorts the rest by order then name', () => {
    const { founder, others } = arrangeTeam([
      member({ id: '1', name: 'Zed', order: 2 }),
      member({ id: '2', name: 'Amy', order: 2 }),
      member({ id: '3', name: 'Founder', isFounder: true, order: 0 }),
      member({ id: '4', name: 'Bob', order: 1 }),
    ]);
    expect(founder.name).toBe('Founder');
    expect(others.map((o) => o.name)).toEqual(['Bob', 'Amy', 'Zed']);
  });

  it('falls back to the static founder when none is present', () => {
    const { founder, others } = arrangeTeam([]);
    expect(founder.isFounder).toBe(true);
    expect(founder.name).toBe(founderFallbackMember().name);
    expect(others).toEqual([]);
  });
});
```

- [ ] **Step 2: Run to verify it fails** — `npx jest app/lib/__tests__/teamArrange.test.ts` → FAIL, `Cannot find module '../teamArrange'`.

- [ ] **Step 3: Implement** — `app/lib/teamArrange.ts`

```ts
import { FOUNDER_NAME, FOUNDER_TEAM_MEMBER } from '@/app/data/founder';

export interface TeamCardMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar: string;
  linkedIn: string | null;
  twitter: string | null;
  github: string | null;
  website: string | null;
  order: number;
  isFounder: boolean;
}

export function isFounderName(name: string): boolean {
  return name.trim().toLowerCase() === FOUNDER_NAME.trim().toLowerCase();
}

/** First letter of the first and last word, upper-cased. */
export function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function founderFallbackMember(): TeamCardMember {
  return {
    id: FOUNDER_TEAM_MEMBER.id,
    name: FOUNDER_TEAM_MEMBER.name,
    position: FOUNDER_TEAM_MEMBER.position,
    bio: FOUNDER_TEAM_MEMBER.bio,
    avatar: FOUNDER_TEAM_MEMBER.avatar,
    linkedIn: null,
    twitter: null,
    github: null,
    website: null,
    order: FOUNDER_TEAM_MEMBER.order,
    isFounder: true,
  };
}

function stringOrNull(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value : null;
}

/** Coerce unknown Prisma output (or the build-time mock `{}`) into card members. */
export function normalizeTeamRows(raw: unknown): TeamCardMember[] {
  if (!Array.isArray(raw)) return [];
  const members: TeamCardMember[] = [];
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue;
    const r = item as Record<string, unknown>;
    if (typeof r.name !== 'string' || typeof r.position !== 'string') continue;
    members.push({
      id: typeof r.id === 'string' ? r.id : r.name,
      name: r.name,
      position: r.position,
      bio: typeof r.bio === 'string' ? r.bio : '',
      avatar: typeof r.avatar === 'string' ? r.avatar : '',
      linkedIn: stringOrNull(r.linkedIn),
      twitter: stringOrNull(r.twitter),
      github: stringOrNull(r.github),
      website: stringOrNull(r.website),
      order: typeof r.order === 'number' ? r.order : 0,
      isFounder: isFounderName(r.name),
    });
  }
  return members;
}

/** Founder first (static fallback if absent), everyone else by order then name. */
export function arrangeTeam(members: TeamCardMember[]): {
  founder: TeamCardMember;
  others: TeamCardMember[];
} {
  const founder = members.find((m) => m.isFounder) ?? founderFallbackMember();
  const others = members
    .filter((m) => !m.isFounder)
    .sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
  return { founder, others };
}
```

- [ ] **Step 4: Run to verify it passes** — `npx jest app/lib/__tests__/teamArrange.test.ts` → PASS.

- [ ] **Step 5: Create `app/lib/team.ts`**

```ts
import prisma from '@/app/lib/prisma';
import { arrangeTeam, normalizeTeamRows } from '@/app/lib/teamArrange';
import { withTimeout } from '@/app/lib/withTimeout';

const DB_TIMEOUT_MS = 4000;

/**
 * Active team members from the database, founder first. Never throws: if the
 * database is unreachable the page still renders the founder from static data.
 */
export async function getTeam() {
  try {
    const raw = await withTimeout(
      prisma.teamMember.findMany({
        where: { active: true },
        orderBy: [{ order: 'asc' }, { name: 'asc' }],
      }),
      DB_TIMEOUT_MS,
      'teamMember.findMany',
    );
    return arrangeTeam(normalizeTeamRows(raw));
  } catch (error) {
    console.error('[Team] Database read failed; showing founder only', {
      error: error instanceof Error ? error.message : String(error),
    });
    return arrangeTeam([]);
  }
}
```

- [ ] **Step 6: Create `app/components/team/TeamAvatar.tsx`**

```tsx
interface TeamAvatarProps {
  name: string;
  avatar: string;
  initials: string;
  /** Tailwind size classes, e.g. "w-24 h-24". */
  sizeClass?: string;
}

/** Photo when one exists, otherwise a monogram. Server-renderable. */
export function TeamAvatar({ name, avatar, initials, sizeClass = 'w-24 h-24' }: TeamAvatarProps) {
  if (avatar) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={avatar}
        alt={name}
        className={`${sizeClass} rounded-2xl object-cover shadow-[0_16px_48px_rgba(37,99,235,0.30)]`}
      />
    );
  }
  return (
    <div
      className={`${sizeClass} rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center shadow-[0_16px_48px_rgba(37,99,235,0.30)]`}
      role="img"
      aria-label={name}
    >
      <span
        className="text-3xl font-bold text-white tracking-tight"
        style={{ fontFamily: 'var(--font-sora), sans-serif' }}
      >
        {initials}
      </span>
    </div>
  );
}
```

- [ ] **Step 7: Write the failing Person JSON-LD test** — `app/lib/__tests__/personJsonLd.test.ts`

```ts
import { buildPersonJsonLd } from '../../components/SEO/PersonStructuredData';

describe('buildPersonJsonLd', () => {
  const base = {
    name: 'Aman Kumar Sharma',
    jobTitle: 'Founder & Operations Head',
    description: 'desc',
    url: 'https://vedpragya.com/pages/founder',
    worksFor: { name: 'Vedpragya Bharat Private Limited', url: 'https://vedpragya.com' },
  };

  it('builds a schema.org Person with an employer', () => {
    const data = buildPersonJsonLd(base);
    expect(data['@context']).toBe('https://schema.org');
    expect(data['@type']).toBe('Person');
    expect(data.name).toBe('Aman Kumar Sharma');
    expect(data.worksFor).toEqual({
      '@type': 'Organization',
      name: 'Vedpragya Bharat Private Limited',
      url: 'https://vedpragya.com',
    });
  });

  it('omits sameAs when there are no verified profile URLs', () => {
    expect('sameAs' in buildPersonJsonLd(base)).toBe(false);
    expect('sameAs' in buildPersonJsonLd({ ...base, sameAs: [] })).toBe(false);
  });

  it('includes sameAs when URLs are provided', () => {
    expect(buildPersonJsonLd({ ...base, sameAs: ['https://linkedin.com/in/x'] }).sameAs).toEqual([
      'https://linkedin.com/in/x',
    ]);
  });
});
```

- [ ] **Step 8: Run to verify it fails** — `npx jest app/lib/__tests__/personJsonLd.test.ts` → FAIL (module not found).

- [ ] **Step 9: Implement** — `app/components/SEO/PersonStructuredData.tsx`

```tsx
export interface PersonJsonLdInput {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  worksFor: { name: string; url: string };
  /** Only verified profile URLs. Leave empty/undefined rather than guess. */
  sameAs?: string[];
}

export function buildPersonJsonLd(input: PersonJsonLdInput): Record<string, unknown> & {
  sameAs?: string[];
} {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: input.name,
    jobTitle: input.jobTitle,
    description: input.description,
    url: input.url,
    worksFor: { '@type': 'Organization', name: input.worksFor.name, url: input.worksFor.url },
    ...(input.sameAs && input.sameAs.length > 0 ? { sameAs: input.sameAs } : {}),
  };
}

export function PersonStructuredData(props: PersonJsonLdInput) {
  // Escape "<" so the JSON can never terminate the script tag.
  const json = JSON.stringify(buildPersonJsonLd(props)).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
```

- [ ] **Step 10: Run all new tests** — `npx jest app/lib/__tests__` → PASS (withTimeout, blogMerge, secretMask, teamArrange, personJsonLd).

- [ ] **Step 11: Checkpoint** — `git status --short`: new files under `app/lib/`, `app/components/team/`, `app/components/SEO/`.

---

### Task 9: Founder page — `/pages/founder`

**Files:** Create `app/pages/founder/layout.tsx`, `app/pages/founder/page.tsx`

- [ ] **Step 1: Create the layout** — `app/pages/founder/layout.tsx`

```tsx
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData } from '@/app/components/SEO/StructuredData';
import { PersonStructuredData } from '@/app/components/SEO/PersonStructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';
import { companyProfile } from '@/app/data/companyProfile';
import { FOUNDER_NAME, FOUNDER_SHORT_BIO, FOUNDER_TITLE } from '@/app/data/founder';

export const metadata: Metadata = buildPageMetadata({
  title: `${FOUNDER_NAME} — ${FOUNDER_TITLE} | Vedpragya`,
  description: `Meet ${FOUNDER_NAME}, ${FOUNDER_TITLE.toLowerCase()} of ${companyProfile.legalName} — a full-stack engineer and entrepreneur building reliable software for businesses in India and abroad.`,
  path: '/pages/founder',
  keywords: [
    'aman kumar sharma',
    'vedpragya founder',
    'vedpragya bharat private limited',
    'founder software company india',
    'operations head software agency',
  ],
});

export default function FounderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'About', url: `${SEO_SITE_URL}/pages/about` },
          { name: FOUNDER_NAME, url: `${SEO_SITE_URL}/pages/founder` },
        ]}
      />
      <PersonStructuredData
        name={FOUNDER_NAME}
        jobTitle={FOUNDER_TITLE}
        description={FOUNDER_SHORT_BIO}
        url={`${SEO_SITE_URL}/pages/founder`}
        worksFor={{ name: companyProfile.legalName, url: SEO_SITE_URL }}
      />
      {children}
    </>
  );
}
```

- [ ] **Step 2: Create the page** — `app/pages/founder/page.tsx`

```tsx
import Link from 'next/link';
import { companyProfile } from '@/app/data/companyProfile';
import {
  FOUNDER_FOUNDED_YEAR,
  FOUNDER_INITIALS,
  FOUNDER_LONG_BIO,
  FOUNDER_NAME,
  FOUNDER_QUOTE,
  FOUNDER_RESPONSIBILITIES,
  FOUNDER_TITLE,
} from '@/app/data/founder';
import { TeamAvatar } from '@/app/components/team/TeamAvatar';

const sora = { fontFamily: 'var(--font-sora), sans-serif' } as const;

export default function FounderPage() {
  const facts: Array<{ label: string; value: string }> = [
    { label: 'Company', value: companyProfile.legalName },
    { label: 'Founded', value: String(FOUNDER_FOUNDED_YEAR) },
    { label: 'Registered in', value: companyProfile.legal.registrationState ?? 'India' },
    { label: 'Website', value: companyProfile.websiteUrl.replace(/^https?:\/\//, '') },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="pt-28 pb-16 bg-[#F4F4F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 items-center">
            <TeamAvatar
              name={FOUNDER_NAME}
              avatar=""
              initials={FOUNDER_INITIALS}
              sizeClass="w-36 h-36"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#2563EB] mb-2">
                Meet the founder
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0C1B33] tracking-tight" style={sora}>
                {FOUNDER_NAME}
              </h1>
              <p className="mt-2 text-lg font-semibold text-[#2563EB]">{FOUNDER_TITLE}</p>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">{FOUNDER_LONG_BIO[0]}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/pages/contact"
                  className="inline-flex items-center rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1D4ED8] transition-colors"
                >
                  Talk to our team
                </Link>
                <Link
                  href="/pages/team"
                  className="inline-flex items-center rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-[#0C1B33] hover:bg-white transition-colors"
                >
                  Meet the team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="mb-8 border-l-4 border-[#2563EB] pl-6">
            <p className="text-2xl font-bold text-[#0C1B33] leading-snug tracking-tight" style={sora}>
              &ldquo;{FOUNDER_QUOTE}&rdquo;
            </p>
          </blockquote>
          <h2 className="text-2xl font-bold text-[#0C1B33] mb-4" style={sora}>
            Background
          </h2>
          {FOUNDER_LONG_BIO.map((paragraph) => (
            <p key={paragraph} className="text-gray-600 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Remit */}
      <section className="py-16 bg-[#F4F4F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0C1B33] mb-8" style={sora}>
            What {FOUNDER_NAME.split(' ')[0]} leads at Vedpragya
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {FOUNDER_RESPONSIBILITIES.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-gray-100 p-6">
                <h3 className="font-bold text-[#0C1B33] mb-2" style={sora}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company facts */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0C1B33] mb-8" style={sora}>
            The company
          </h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-gray-100 p-5">
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{fact.label}</dt>
                <dd className="mt-1 font-semibold text-[#0C1B33]">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-gray-500">
            Full registration details are on our{' '}
            <Link href="/pages/legal/company-info" className="text-[#2563EB] hover:underline">
              company information page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0C1B33]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={sora}>
            Have a project in mind?
          </h2>
          <p className="text-gray-300 mb-8">
            Tell us what you are building. We respond within 24 hours.
          </p>
          <Link
            href="/pages/contact"
            className="inline-flex items-center rounded-xl bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1D4ED8] transition-colors"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 3: Verify** (the dev server hot-reloads)

```bash
curl -s -o C:/tmp/founder.html -w 'founder page: %{http_code}\n' http://localhost:3100/pages/founder
grep -c 'Founder &amp; Operations Head' C:/tmp/founder.html
grep -o '"@type":"Person"' C:/tmp/founder.html | head -1
grep -o '<title>[^<]*</title>' C:/tmp/founder.html
rm -f C:/tmp/founder.html
```
Expected: `founder page: 200`, count ≥ 1, `"@type":"Person"`, a title containing `Aman Kumar Sharma — Founder & Operations Head`.

- [ ] **Step 4: Visual check** — open `http://localhost:3100/pages/founder` with the Playwright browser tools at 1280px and 390px widths and take screenshots; confirm the hero stacks cleanly on mobile and the fixed header does not overlap the hero (the hero has `pt-28`).

- [ ] **Step 5: Checkpoint** — `git status --short`: `app/pages/founder/` new.

---

### Task 10: Team page, navigation and sitemap routes

**Files:** Create `app/pages/team/layout.tsx`, `app/pages/team/page.tsx`. Modify `app/data/navigation.ts`, `app/lib/seo/routes.ts`.

- [ ] **Step 1: Create the layout** — `app/pages/team/layout.tsx`

```tsx
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Our Team | Vedpragya',
  description:
    'Meet the people behind Vedpragya Bharat Private Limited — the founder and the engineers, designers and operators who build and ship your software.',
  path: '/pages/team',
  keywords: [
    'vedpragya team',
    'software development team india',
    'vedpragya founder',
    'meet the team',
  ],
});

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'About', url: `${SEO_SITE_URL}/pages/about` },
          { name: 'Team', url: `${SEO_SITE_URL}/pages/team` },
        ]}
      />
      {children}
    </>
  );
}
```

- [ ] **Step 2: Create the page** — `app/pages/team/page.tsx`

```tsx
import Link from 'next/link';
import { getTeam } from '@/app/lib/team';
import { initialsOf, type TeamCardMember } from '@/app/lib/teamArrange';
import { FOUNDER_INITIALS } from '@/app/data/founder';
import { TeamAvatar } from '@/app/components/team/TeamAvatar';

export const revalidate = 3600;

const sora = { fontFamily: 'var(--font-sora), sans-serif' } as const;

function MemberLinks({ member }: { member: TeamCardMember }) {
  const links: Array<{ label: string; href: string | null }> = [
    { label: 'LinkedIn', href: member.linkedIn },
    { label: 'GitHub', href: member.github },
    { label: 'X', href: member.twitter },
    { label: 'Website', href: member.website },
  ];
  const present = links.filter((l): l is { label: string; href: string } => Boolean(l.href));
  if (present.length === 0) return null;
  return (
    <ul className="mt-4 flex flex-wrap gap-3 text-sm">
      {present.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2563EB] hover:underline"
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default async function TeamPage() {
  const { founder, others } = await getTeam();

  return (
    <div className="w-full bg-white">
      <section className="pt-28 pb-12 bg-[#F4F4F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#2563EB] mb-2">Our team</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0C1B33] tracking-tight" style={sora}>
            The people behind Vedpragya
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The founder, engineers and operators who plan, build and ship your software.
          </p>
        </div>
      </section>

      {/* Founder (featured) */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center rounded-3xl border border-gray-100 bg-[#F4F4F5] p-8 md:p-10">
            <TeamAvatar
              name={founder.name}
              avatar={founder.avatar}
              initials={FOUNDER_INITIALS}
              sizeClass="w-32 h-32"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">Founder</p>
              <h2 className="mt-1 text-2xl font-bold text-[#0C1B33]" style={sora}>
                {founder.name}
              </h2>
              <p className="text-[#2563EB] font-semibold">{founder.position}</p>
              <p className="mt-3 text-gray-600 leading-relaxed">{founder.bio}</p>
              <MemberLinks member={founder} />
              <Link
                href="/pages/founder"
                className="mt-4 inline-block text-sm font-semibold text-[#2563EB] hover:underline"
              >
                Read full profile →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Everyone else */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {others.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((member) => (
                <article key={member.id} className="rounded-2xl border border-gray-100 p-6">
                  <TeamAvatar
                    name={member.name}
                    avatar={member.avatar}
                    initials={initialsOf(member.name)}
                    sizeClass="w-20 h-20"
                  />
                  <h3 className="mt-4 text-lg font-bold text-[#0C1B33]" style={sora}>
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#2563EB]">{member.position}</p>
                  {member.bio && <p className="mt-3 text-sm text-gray-600 leading-relaxed">{member.bio}</p>}
                  <MemberLinks member={member} />
                </article>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              More teammates will be introduced here soon.
            </p>
          )}
        </div>
      </section>

      <section className="py-14 bg-[#0C1B33]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3" style={sora}>
            Work with us
          </h2>
          <p className="text-gray-300 mb-6">Tell us about your project — we respond within 24 hours.</p>
          <Link
            href="/pages/contact"
            className="inline-flex items-center rounded-xl bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1D4ED8] transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 3: Footer links** — `app/data/navigation.ts`

Edit — old: `    { href: "/pages/about", label: "About Us" },\n    { href: "/pages/portfolio", label: "Portfolio" },` (the footer `quickLinks` entries) → new:
```ts
    { href: "/pages/about", label: "About Us" },
    { href: "/pages/founder", label: "Our Founder" },
    { href: "/pages/team", label: "Our Team" },
    { href: "/pages/portfolio", label: "Portfolio" },
```
(If `{ href: "/pages/about", label: "About Us" }` also appears in another group, include the `Portfolio` line to make `old_string` unique.)

- [ ] **Step 4: Sitemap routes** — `app/lib/seo/routes.ts`, in `CORE_STATIC_ROUTES`

Edit — old:
```ts
  '/pages/about',
  '/pages/services',
```
new:
```ts
  '/pages/about',
  '/pages/founder',
  '/pages/team',
  '/pages/services',
```

- [ ] **Step 5: Verify**

```bash
for p in team founder about; do printf '%-8s %s\n' "$p" "$(curl -s -o /dev/null -w '%{http_code}' http://localhost:3100/pages/$p)"; done
curl -s http://localhost:3100/pages/team | grep -o 'Aman Kumar Sharma' | head -1
curl -s http://localhost:3100/pages/team | grep -c 'More teammates will be introduced'
curl -s http://localhost:3100/sitemap.xml | grep -oE '<loc>[^<]*/pages/(team|founder)</loc>'
```
Expected: three `200`s, the founder name, `1`, and both sitemap URLs.

- [ ] **Step 6: Database-down fallback check** (proves the page never goes blank)

```bash
# Point Prisma at an unreachable port for a one-off server on :3101, request /pages/team, then stop it.
DATABASE_URL="postgresql://u:p@127.0.0.1:1/x?connect_timeout=2" DATABASE_URL_UNPOOLED="postgresql://u:p@127.0.0.1:1/x" npx next dev --turbopack -p 3101 > C:/tmp/dev3101.log 2>&1 &
sleep 12; curl -s -o C:/tmp/team-down.html -w 'team page with DB down: %{http_code}\n' --max-time 60 http://localhost:3101/pages/team; grep -c 'Aman Kumar Sharma' C:/tmp/team-down.html
```
Expected: `200` and a count ≥ 1. Then stop that server (`taskkill //F //PID <pid>` for the listener on 3101; find it with `netstat -ano | grep :3101`) and `rm -f C:/tmp/team-down.html C:/tmp/dev3101.log`. (Next loads `.env.local` but real process env vars take precedence.)

- [ ] **Step 7: Visual check** — screenshots of `/pages/team` at 1280px and 390px via the Playwright tools.

- [ ] **Step 8: Run the whole suite and compare with the Task 0 baseline** — `npx jest 2>&1 | tail -30`. If `app/lib/seo/__tests__/routes-filter.test.ts` now fails because of the two new core routes, read the assertion and update the test's expected values only if it hard-codes a route count/list.

- [ ] **Step 9: Checkpoint** — `git status --short`: `app/pages/team/` new; `navigation.ts`, `routes.ts` modified.

---

### Task 11: Blog audit tool and fixes to existing posts

**Files:** Create `app/lib/blogAudit.ts`, `app/lib/__tests__/blogAudit.test.ts`, `scripts/audit-blog.ts`. Modify existing `content/blog/*.md` (errors only).

- [ ] **Step 1: Write the failing test** — `app/lib/__tests__/blogAudit.test.ts`

```ts
import { auditPost, countWords, extractInternalLinks, type AuditContext } from '../blogAudit';

const ctx: AuditContext = {
  knownRoutes: new Set(['/', '/pages/contact', '/pages/crm']),
  knownBlogSlugs: new Set(['other-post']),
  publicFileExists: (p) => p === '/images/exists.jpg',
};

const goodData = {
  title: 'A reasonable title for a post',
  excerpt: 'x'.repeat(120),
  category: 'seo',
  publishedAt: '2026-01-01',
  readTime: 5,
  author: 'Aman Kumar Sharma',
  tags: ['a'],
};
const longBody = ('word '.repeat(1000)).trim();

function codes(findings: ReturnType<typeof auditPost>) {
  return findings.map((f) => f.code).sort();
}

describe('countWords', () => {
  it('ignores code fences and link urls', () => {
    expect(countWords('hello [world](https://x.y/z) ```code here``` end')).toBe(3);
  });
});

describe('extractInternalLinks', () => {
  it('returns internal paths without query/hash or trailing slash', () => {
    expect(
      extractInternalLinks('[a](/pages/crm) [b](/pages/contact/#x) [c](https://ext.com) [d](/pages/blog/other-post?x=1)'),
    ).toEqual(['/pages/crm', '/pages/contact', '/pages/blog/other-post']);
  });
});

describe('auditPost', () => {
  it('passes a healthy post', () => {
    expect(auditPost({ slug: 's', data: goodData, body: longBody }, ctx)).toEqual([]);
  });

  it('flags missing required frontmatter', () => {
    const { title: _t, ...rest } = goodData;
    void _t;
    expect(codes(auditPost({ slug: 's', data: rest, body: longBody }, ctx))).toContain('missing-field');
  });

  it('flags a broken image reference but accepts an existing one', () => {
    expect(codes(auditPost({ slug: 's', data: { ...goodData, image: '/images/nope.jpg' }, body: longBody }, ctx))).toContain('broken-image');
    expect(auditPost({ slug: 's', data: { ...goodData, image: '/images/exists.jpg' }, body: longBody }, ctx)).toEqual([]);
  });

  it('flags thin content', () => {
    expect(codes(auditPost({ slug: 's', data: goodData, body: 'too short' }, ctx))).toContain('thin-content');
  });

  it('flags broken internal links and unknown blog slugs', () => {
    const body = `${longBody}\n[x](/pages/missing) [y](/pages/blog/nope) [ok](/pages/crm) [ok2](/pages/blog/other-post)`;
    const found = auditPost({ slug: 's', data: goodData, body }, ctx).filter((f) => f.code === 'broken-internal-link');
    expect(found).toHaveLength(2);
  });

  it('flags a duplicate H1, bad excerpt length, long title, no tags, updated-before-published', () => {
    const data = {
      ...goodData,
      title: 't'.repeat(80),
      excerpt: 'short',
      tags: [],
      updatedAt: '2025-01-01',
    };
    const result = codes(auditPost({ slug: 's', data, body: `# Heading\n${longBody}` }, ctx));
    expect(result).toEqual(
      expect.arrayContaining(['duplicate-h1', 'excerpt-length', 'title-length', 'no-tags', 'updated-before-published']),
    );
  });
});
```

- [ ] **Step 2: Run to verify it fails** — `npx jest app/lib/__tests__/blogAudit.test.ts` → FAIL (module not found).

- [ ] **Step 3: Implement** — `app/lib/blogAudit.ts`

```ts
export type AuditSeverity = 'error' | 'warn';

export interface AuditFinding {
  slug: string;
  severity: AuditSeverity;
  code: string;
  message: string;
}

export interface AuditInput {
  slug: string;
  data: Record<string, unknown>;
  body: string;
}

export interface AuditContext {
  knownRoutes: ReadonlySet<string>;
  knownBlogSlugs: ReadonlySet<string>;
  /** True when `public/<path>` exists. Receives a path like "/images/x.jpg". */
  publicFileExists: (publicPath: string) => boolean;
}

const REQUIRED_FIELDS = ['title', 'excerpt', 'category', 'publishedAt', 'readTime', 'author'] as const;
const MIN_WORDS = 900;

export function countWords(markdown: string): number {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[^\p{L}\p{N}₹'’\s]/gu, ' ');
  return text.split(/\s+/).filter(Boolean).length;
}

export function extractInternalLinks(markdown: string): string[] {
  const links: string[] = [];
  const pattern = /\]\((\/[^)\s]*)\)/g;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(markdown)) !== null) {
    const path = match[1].split('#')[0].split('?')[0].replace(/\/+$/, '');
    links.push(path === '' ? '/' : path);
  }
  return links;
}

export function auditPost(input: AuditInput, ctx: AuditContext): AuditFinding[] {
  const { slug, data, body } = input;
  const findings: AuditFinding[] = [];
  const add = (severity: AuditSeverity, code: string, message: string) =>
    findings.push({ slug, severity, code, message });

  for (const field of REQUIRED_FIELDS) {
    const value = data[field];
    if (value === undefined || value === null || value === '') {
      add('error', 'missing-field', `Missing frontmatter field: ${field}`);
    }
  }

  const title = typeof data.title === 'string' ? data.title : '';
  if (title.length > 70) add('warn', 'title-length', `Title is ${title.length} chars (aim for ≤ 70)`);

  const excerpt = typeof data.excerpt === 'string' ? data.excerpt : '';
  if (excerpt && (excerpt.length < 70 || excerpt.length > 170)) {
    add('warn', 'excerpt-length', `Excerpt is ${excerpt.length} chars (aim for 70–170)`);
  }

  if (!Array.isArray(data.tags) || data.tags.length === 0) add('warn', 'no-tags', 'Post has no tags');

  const image = typeof data.image === 'string' ? data.image : '';
  if (image && image.startsWith('/') && !ctx.publicFileExists(image)) {
    add('error', 'broken-image', `image points to a missing file: ${image}`);
  }

  if (data.updatedAt && data.publishedAt) {
    const updated = new Date(String(data.updatedAt)).getTime();
    const published = new Date(String(data.publishedAt)).getTime();
    if (!Number.isNaN(updated) && !Number.isNaN(published) && updated < published) {
      add('warn', 'updated-before-published', 'updatedAt is earlier than publishedAt');
    }
  }

  const words = countWords(body);
  if (words < MIN_WORDS) add('warn', 'thin-content', `Only ${words} words (aim for ≥ ${MIN_WORDS})`);

  if (/^# /m.test(body)) {
    add('warn', 'duplicate-h1', 'Body contains an H1; the page template already renders the title as H1');
  }

  for (const link of new Set(extractInternalLinks(body))) {
    const blogMatch = link.match(/^\/pages\/blog\/([a-z0-9-]+)$/);
    const known = blogMatch ? ctx.knownBlogSlugs.has(blogMatch[1]) : ctx.knownRoutes.has(link);
    if (!known) add('error', 'broken-internal-link', `Internal link does not resolve: ${link}`);
  }

  return findings;
}
```

- [ ] **Step 4: Run to verify it passes** — `npx jest app/lib/__tests__/blogAudit.test.ts` → PASS.

- [ ] **Step 5: Create the runner** — `scripts/audit-blog.ts`

```ts
/**
 * Audit every post in content/blog against the rules in app/lib/blogAudit.ts.
 * Usage: npx tsx scripts/audit-blog.ts          (exit 1 if any error-level finding)
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { auditPost, type AuditFinding } from '../app/lib/blogAudit';
import { getStaticSeoRoutes } from '../app/lib/seo/routes';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
const parsed = files.map((file) => {
  const { data, content } = matter(fs.readFileSync(path.join(BLOG_DIR, file), 'utf8'));
  const slug = String(data.slug || file.replace(/\.md$/, '')).toLowerCase();
  return { slug, data: data as Record<string, unknown>, body: content };
});

const ctx = {
  knownRoutes: new Set<string>(['/', '/pages/blog', ...getStaticSeoRoutes()]),
  knownBlogSlugs: new Set(parsed.map((p) => p.slug)),
  publicFileExists: (publicPath: string) => fs.existsSync(path.join(PUBLIC_DIR, publicPath)),
};

const findings: AuditFinding[] = parsed.flatMap((post) => auditPost(post, ctx));

const errors = findings.filter((f) => f.severity === 'error');
const warns = findings.filter((f) => f.severity === 'warn');
for (const f of [...errors, ...warns]) {
  console.log(`${f.severity.toUpperCase().padEnd(5)} ${f.slug.padEnd(48)} ${f.code.padEnd(24)} ${f.message}`);
}
console.log(`\n${parsed.length} posts audited — ${errors.length} errors, ${warns.length} warnings`);
process.exit(errors.length > 0 ? 1 : 0);
```

- [ ] **Step 6: Run the audit and save the report**

Run: `npx tsx scripts/audit-blog.ts | tee C:/tmp/blog-audit-before.txt | tail -60`
Expected: runs to completion. Known errors at the time of planning: 3 `broken-image` findings (`how-to-hire-web-development-company-india`, `nextjs-development-company-india`, `saas-website-design-india`). Record the totals.

- [ ] **Step 7: Fix error-level findings only**

- For each `broken-image` finding, delete the `image:` line from that file's frontmatter (the page template renders a placeholder and the OG image is auto-generated, so the field is optional).
- For each `broken-internal-link`, open the post, replace the link with the closest valid target from the audit's known-routes list (e.g. a service page) or remove the link; never invent a URL.
- **Do not rewrite copy for warnings** (thin content, excerpt/title length, duplicate H1). Those are reported to the owner in Step 8.

Run: `npx tsx scripts/audit-blog.ts | tail -5`
Expected: `0 errors`.

- [ ] **Step 8: Prepare the owner-facing warning report**

Run: `npx tsx scripts/audit-blog.ts | grep '^WARN' | awk '{print $3}' | sort | uniq -c | sort -rn`
Keep the per-code counts and the worst offenders for the final summary to the user. Do not change those posts without approval.

- [ ] **Step 9: Checkpoint** — `git status --short`: new `blogAudit.ts`, test, script; edited `content/blog/*.md` files limited to those with errors.

---

### Task 12: Six new SEO posts (shipped as drafts)

**Files:** Create six files in `content/blog/`.

**Content rules (apply to every post):**
- Frontmatter exactly in the site's format; `publishedAt: "2026-10-10"`, `updatedAt` same, `author: "Aman Kumar Sharma"`, `authorTitle: "Founder, Vedpragya"`, `featured: false`, **`draft: true`** (the page 404s and the post stays out of listings/sitemap until the owner approves and the line is removed). No `image:` field.
- 1,400–1,900 words. Structure: answer-first intro (2–3 sentences), 5–7 `##` sections (never `#`), at least one GFM table, a `## FAQ` section with 4–5 questions, and a closing paragraph linking to a relevant service page and `/pages/contact`.
- At least 3 internal links drawn only from real routes (verified by the audit): `/pages/web-development`, `/pages/next-js-development`, `/pages/ai-chatbot-development`, `/pages/whatsapp-business-api`, `/pages/crm`, `/pages/seo-audit`, `/pages/google-ads-management`, `/pages/healthcare-software-development`, `/pages/shopify-store-setup`, `/pages/services`, `/pages/contact`, plus existing posts under `/pages/blog/<slug>`.
- **No invented statistics, client names, case studies, awards, or Vedpragya price quotes.** Market price figures must be labelled indicative ranges that depend on scope and must be reviewed by the owner. For anything that changes over time (Meta/Google policies and prices), tell the reader to confirm on the provider's official page and say the post reflects the position at the publish date.
- Plain, concrete language; India-specific context (₹, GST, Razorpay/UPI where relevant); no filler.

| # | File / slug | `title` | `category` | `tags` | Required sections (H2s) |
|---|---|---|---|---|---|
| 1 | `custom-erp-software-development-india.md` | Custom ERP Software Development in India: Cost, Timeline & When You Actually Need One | `business` | erp, custom software, india, manufacturing | What an ERP actually covers; Off-the-shelf vs custom (table); Signs you have outgrown spreadsheets/Tally; Cost drivers (indicative ranges); Typical timeline by phase; Risks and how to avoid them; FAQ |
| 2 | `mobile-app-development-cost-india.md` | Mobile App Development Cost in India (2026): Native vs Flutter vs React Native | `web-development` | mobile app, flutter, react native, cost | Cost drivers; Native vs cross-platform (table); Indicative cost ranges by complexity; Hidden costs (store fees, backend, maintenance); How to cut cost without cutting quality; Build vs MVP first; FAQ |
| 3 | `local-seo-checklist-india-google-business-profile.md` | Local SEO Checklist for Indian Businesses: Google Business Profile That Ranks | `seo` | local seo, google business profile, india | How local ranking works; Google Business Profile setup checklist; NAP consistency and citations; Reviews process; On-page local signals; Measuring results; FAQ — link to the free SEO audit page |
| 4 | `zoho-crm-implementation-india-guide.md` | Zoho CRM Implementation in India: Steps, Cost and Common Mistakes | `crm` | zoho crm, crm implementation, india | Is Zoho the right fit; Implementation steps; Data migration; Integrations (WhatsApp, forms, accounting); Indicative cost components; Common mistakes; FAQ |
| 5 | `whatsapp-business-api-pricing-india.md` | WhatsApp Business API Pricing in India: What Meta Charges vs What Providers Add | `whatsapp` | whatsapp business api, pricing, india | How conversation-based vs per-message pricing is structured (tell reader to verify on Meta's current pricing page); What providers add (platform fee, setup); Templates and approval; Cost scenarios (illustrative, clearly labelled); How to choose a provider; FAQ |
| 6 | `google-ads-for-clinics-hospitals-india.md` | Google Ads for Clinics and Hospitals in India: Compliance, Keywords and Budget | `google-ads` | google ads, healthcare, clinics, india | Why healthcare ads are different (policy-restricted; tell readers to read Google's current healthcare advertising policy and applicable Indian rules); Keyword themes; Landing page requirements; Budget approach (indicative); Conversion tracking (calls/forms); Common disapprovals; FAQ — link to `/pages/healthcare-software-development` only where genuinely relevant |

Frontmatter template (replace values per row; `excerpt` 90–160 chars):

```yaml
---
slug: custom-erp-software-development-india
title: "Custom ERP Software Development in India: Cost, Timeline & When You Actually Need One"
excerpt: "..."
category: business
tags: ["erp", "custom software", "india", "manufacturing"]
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
readTime: 9
author: "Aman Kumar Sharma"
authorTitle: "Founder, Vedpragya"
featured: false
draft: true
---
```
`readTime` = ceil(words / 200).

- [ ] **Step 1: Write post 1**, then run `npx tsx scripts/audit-blog.ts | grep custom-erp` → expect no `ERROR` lines for it (warnings reviewed, not ignored: fix thin-content/length warnings on *new* posts since they are ours).
- [ ] **Step 2–6: Write posts 2–6**, running the same audit grep after each.
- [ ] **Step 7: Confirm drafts stay hidden**

```bash
curl -s -o /dev/null -w 'draft page: %{http_code}\n' http://localhost:3100/pages/blog/custom-erp-software-development-india
curl -s http://localhost:3100/sitemap.xml | grep -c 'custom-erp-software-development-india'
curl -s http://localhost:3100/pages/blog | grep -c 'custom-erp-software-development-india'
```
Expected: `404`, `0`, `0`.

- [ ] **Step 8: Preview a draft locally without publishing it** — temporarily remove `draft: true` from one post, view it at `/pages/blog/<slug>` (check headings, table rendering, links), then restore `draft: true`. Repeat only if the owner asks to preview others.

- [ ] **Step 9: Checkpoint** — `git status --short`: 6 new files in `content/blog/`.

---

### Task 13: Full verification

- [ ] **Step 1: Unit tests** — `npx jest 2>&1 | tail -30`. Expected: every new suite passes; any failures match the Task 0 baseline exactly.
- [ ] **Step 2: Typecheck** — `npx tsc --noEmit 2>&1 | tail -20`. Expected: no *new* errors versus the Task 0 baseline.
- [ ] **Step 3: Lint** — `npm run lint 2>&1 | tail -30`. Expected: no new errors in touched files.
- [ ] **Step 4: Production build** — `npm run build 2>&1 | tail -60` (runs `verify:seo`, `verify:seo:runtime`, `prisma generate`, optional WASM, `next build`). Expected: success. If `verify:seo*` fails because of the new routes, read its message and fix the cause (e.g. a missing metadata field), not the checker.
- [ ] **Step 5: Admin regression** — repeat the earlier admin checks against the dev server: login; all 12 admin pages return 200 with no error markers; all 13 admin GET APIs return 200; `/api/admin/integrations` shows only masked secrets.

```bash
JAR=C:/tmp/admin.jar
for p in "" ai-agent blog contacts conversations integrations leads newsletter portfolio resources services team; do
  printf '%-22s %s\n' "/admin/$p" "$(curl -s -b $JAR -o /dev/null -L -w '%{http_code}' --max-time 180 http://localhost:3100/admin/$p)"
done
```
Expected: all `200`.
- [ ] **Step 6: Clean up** — `rm -f C:/tmp/admin.jar C:/tmp/blog.head.ts C:/tmp/blog.tail.ts C:/tmp/blog-audit-before.txt` (the cookie jar holds the admin password as its cookie value). Stop the dev server (background task `bj1w131dt`) unless the owner wants to keep it.
- [ ] **Step 7: Update `CLAUDE.md`** (project) — in the Architecture section add two short bullets:
  - "**Blog** (`app/lib/blog.ts`): public posts = `content/blog/*.md` merged with admin-written `BlogPost` rows (database wins on slug). Drafts use `draft: true` in frontmatter. Audit with `npx tsx scripts/audit-blog.ts`."
  - "**Founder/Team**: founder copy lives in `app/data/founder.ts` (identity from `companyProfile.ts`); `/pages/founder` and `/pages/team` render it; the team grid reads active `TeamMember` rows."
  And under Commands add: "`npx tsx scripts/audit-blog.ts` — blog audit" and "Prisma/tsx scripts do not read `.env.local`; prefix with `npx dotenv-cli -e .env.local --`".
- [ ] **Step 8: Final `git status --short` and `git diff --stat`** for the hand-off summary.

---

### Task 14: Release (explicitly gated — do not start without the owner's approval)

> Stop here and ask the owner: (a) how to ship — commit to `master` and push (only works if Vercel's Git integration is connected; the CLI earlier suggested it may not be) or `vercel deploy --prod` from the working tree; (b) whether to commit the untracked `.agents/` and `skills-lock.json` (recommended: **no**, delete them); (c) that the labelled production test lead creates a record in the real Zoho CRM (if Zoho is connected) and logs a Google Ads conversion — already approved in principle, confirm at go-time.

- [ ] **Step 1: Pre-flight** — `git status --short` contains no `.env*` files and no secrets; `prisma/.env` (tracked, holds the dead AWS URL) is flagged to the owner: recommend `git rm --cached prisma/.env` and rotating anything that shared its password. Do not change it without approval.
- [ ] **Step 2: Deploy** by the approved method. Capture the deployment URL and wait for READY (`vercel inspect <url>` / `vercel logs`).
- [ ] **Step 3: Production smoke (read-only)**

```bash
SITE=https://vedpragya.com   # confirm the real production domain first via `vercel project ls` / `vercel domains ls`
for p in "" pages/about pages/founder pages/team pages/blog pages/blog/nodejs-development-company-india pages/contact; do
  printf '%-52s %s\n' "/$p" "$(curl -s -o /dev/null -w '%{http_code}' --max-time 60 $SITE/$p)"
done
echo "blog urls in sitemap: $(curl -s $SITE/sitemap.xml | grep -o '<loc>[^<]*/pages/blog/[a-z0-9-]*</loc>' | wc -l)  (expect 26)"
curl -s $SITE/sitemap.xml | grep -oE '<loc>[^<]*/pages/(team|founder)</loc>'
curl -s -o /dev/null -w 'draft post (expect 404): %{http_code}\n' $SITE/pages/blog/custom-erp-software-development-india
curl -s -o /dev/null -w 'admin unauthenticated (expect 307): %{http_code}\n' $SITE/admin
```
- [ ] **Step 4: Production admin check** — log in to the production admin with the *production* `ADMIN_PASSWORD` (pull it to a temp file with `vercel env pull C:/tmp/prod.env --environment=production --yes`, read only that variable, delete the file) and run the Task 13 Step 5 loops against `$SITE`. Expected: all 200; `/api/admin/health` shows `database.ok: true`.
- [ ] **Step 5: Production lead test (one labelled lead)** — using the Playwright browser tools, open `$SITE`, fill the hero lead form with: name `ZZ TEST LEAD — delete me`, email `zz-test-lead@example.com`, phone `9000000000`, message `Automated production verification — safe to delete`, submit, and confirm the success state. Then:

```bash
curl -s -b $PROD_JAR $SITE/api/admin/leads | node -e '
const l=JSON.parse(require("fs").readFileSync(0,"utf8")).leads.filter(x=>/ZZ TEST LEAD/.test(x.name));
console.log(l.length+" test lead(s) found", l.map(x=>({id:x.id,zohoStatus:x.zohoStatus,source:x.source})))'
```
Expected: 1 lead; `zohoStatus` is `pushed` if Zoho is connected, otherwise `failed` (the lead is still stored — that is the guarantee being verified). Also open `$SITE/admin/leads` in the browser and screenshot the row.
- [ ] **Step 6: Remove the test lead** — `curl -s -b $PROD_JAR -X DELETE "$SITE/api/admin/leads?id=<id>"`, confirm it is gone, then tell the owner to delete the matching Zoho record (if one was created) and to ignore the one test Google Ads conversion.
- [ ] **Step 7: Clean up** temp files (`C:/tmp/prod.env`, cookie jars) and report results, including anything that failed.

---

## Self-review (completed)

**Spec coverage**
- §1 Identity → Tasks 6, 7. §2 Founder page → Task 9. §3 Team page → Tasks 8, 10. §4 Blogs: sitemap → Task 3; sync → Tasks 1–2; fix existing → Task 11; new posts → Task 12. §5 Admin hygiene → Tasks 4, 5. §6 Verification/release → Tasks 13, 14.
- Added beyond the spec because investigation required it: Jest config (Task 0), deletion of 7 mock blog rows + 5 fabricated authors (Task 7), blog metadata layout simplification (Task 2 Step 8), build-time mock-Prisma guard (Task 1), `revalidate` on blog pages (Task 2).

**Placeholder scan:** no TBD/TODO steps. Task 12 specifies each post's frontmatter, structure, constraints and link allow-list instead of pre-writing ~9,000 words of prose; the audit script enforces the mechanical rules.

**Type/name consistency:** `DbBlogRow`, `dbRowToSummary`, `normalizeDbRow(s)`, `mergeBlogSummaries`, `looksLikeHtml` (Task 1) are used unchanged in `blogDb.ts`/`blog.ts` (Task 2). `TeamCardMember`, `arrangeTeam`, `normalizeTeamRows`, `founderFallbackMember`, `initialsOf` (Task 8) match their uses in `team.ts` and the team page (Task 10). `FOUNDER_*` exports (Task 6) match every import in Tasks 7–10. `getAllBlogPosts`/`getBlogPostSlugs`/`getRelatedBlogPosts`/`getAllBlogCategories` are async everywhere they are called (Task 2 Steps 4–7, Task 3).

## Known risks and notes for the owner

- The about page makes claims that look inconsistent with a company registered in 2025 (e.g. "500+ projects", "200+ clients", "5 offices on 3 continents") and with the CIN date. These are the owner's existing copy and are **not** repeated on the new pages, but they should be verified (Google and users penalise unsupported claims; `companyProfile.ts` itself says to keep only substantiable claims).
- Zoho is not connected (stored refresh token is a placeholder). Leads are saved to the database first, so they appear in `/admin/leads` with Zoho status `failed` until real credentials are added in `/admin/integrations`.
- The admin session cookie value is the raw admin password, and the code falls back to the password `changeme` if `ADMIN_PASSWORD` is unset. Vercel currently has it set for all environments; consider signed sessions later.
- The Neon database is in `us-east-1`; expect higher latency from India than a Singapore region.
- Existing 26 posts remain file-edited; only new posts are written in the admin editor (a markdown→database importer was deliberately left out as YAGNI).
