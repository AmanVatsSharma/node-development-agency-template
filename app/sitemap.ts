import type { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/app/lib/blog';
import { getStaticSeoRoutes } from '@/app/lib/seo/routes';
import { toAbsoluteSeoUrl } from '@/app/lib/seo/constants';
import prisma from '@/app/lib/prisma';

type DynamicBlogEntry = {
  slug: string;
  updatedAt: Date;
};

const BLOG_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// ---------------------------------------------------------------------------
// Priority configuration
// ---------------------------------------------------------------------------


function getPriorityForRoute(path: string): number {
  if (path === '/') return 1.0;
  if (path === '/pages/services') return 0.95;
  if (path === '/pages/contact') return 0.92;
  if (path.startsWith('/pages/google-ads')) return 0.88;
  if (path.startsWith('/pages/shopify')) return 0.86;
  if (path.startsWith('/pages/blog/')) return 0.78;
  if (path.startsWith('/pages/')) return 0.80;
  return 0.70;
}

// ---------------------------------------------------------------------------
// Change-frequency configuration
// ---------------------------------------------------------------------------

function getChangeFrequencyForRoute(path: string): MetadataRoute.Sitemap[number]['changeFrequency'] {
  if (path === '/') return 'weekly';
  if (path === '/pages/blog') return 'daily';
  if (path.startsWith('/pages/blog/')) return 'weekly';
  return 'monthly';
}

// ---------------------------------------------------------------------------
// Per-route lastModified overrides
// ---------------------------------------------------------------------------

/**
 * Explicit lastModified dates for pages that have a known meaningful update.
 * Pages not in this map use STATIC_PAGES_LAST_MODIFIED as their fallback.
 *
 * Update a route's date here whenever its content is significantly changed so
 * Googlebot knows to re-crawl it promptly.
 */
const ROUTE_LAST_MODIFIED_MAP: Record<string, Date> = {
  // Homepage — updated with every major release
  '/': new Date('2026-04-14T00:00:00.000Z'),

  // Pages updated in the April 2026 SEO pass (added FAQ + Breadcrumb schemas)
  '/pages/ai-chatbot-development': new Date('2026-04-14T00:00:00.000Z'),
  '/pages/ai-voice-agents': new Date('2026-04-14T00:00:00.000Z'),
  '/pages/next-js-development': new Date('2026-04-14T00:00:00.000Z'),
  '/pages/healthcare-software-development': new Date('2026-04-14T00:00:00.000Z'),
  '/pages/trading-software': new Date('2026-04-14T00:00:00.000Z'),
  '/pages/whatsapp-business-api': new Date('2026-04-14T00:00:00.000Z'),
  '/pages/nse-mcx-live-market-data': new Date('2026-04-14T00:00:00.000Z'),
  '/pages/shopify-headless-migration': new Date('2026-04-14T00:00:00.000Z'),
  '/pages/shopify-product-page-customization': new Date('2026-04-14T00:00:00.000Z'),

  // City landing pages — updated April 2026 with inline lead capture form
  '/pages/web-development-delhi': new Date('2026-04-29T00:00:00.000Z'),
  '/pages/web-development-bangalore': new Date('2026-04-29T00:00:00.000Z'),
  '/pages/web-development-gurgaon': new Date('2026-04-29T00:00:00.000Z'),
  '/pages/web-development-pune': new Date('2026-04-29T00:00:00.000Z'),
  '/pages/web-development-hyderabad': new Date('2026-04-29T00:00:00.000Z'),
  '/pages/web-development-noida': new Date('2026-04-29T00:00:00.000Z'),
  '/pages/nodejs-development': new Date('2026-04-14T00:00:00.000Z'),

  // Legal pages — stable; use a fixed baseline date to avoid false freshness signals
  '/pages/legal/privacy-policy': new Date('2025-01-01T00:00:00.000Z'),
  '/pages/legal/terms-of-service': new Date('2025-01-01T00:00:00.000Z'),
  '/pages/legal/cancellations-refunds': new Date('2025-01-01T00:00:00.000Z'),
  '/pages/legal/shipping-policy': new Date('2025-01-01T00:00:00.000Z'),
  '/pages/legal/company-info': new Date('2025-01-01T00:00:00.000Z'),
};

/**
 * Fallback lastModified date for all static pages that don't have an explicit
 * override. Use a stable date to keep the sitemap deterministic.
 */
const STATIC_PAGES_LAST_MODIFIED = new Date('2026-04-14T00:00:00.000Z');

function getLastModifiedForRoute(path: string): Date {
  return ROUTE_LAST_MODIFIED_MAP[path] ?? STATIC_PAGES_LAST_MODIFIED;
}

// ---------------------------------------------------------------------------
// Blog entry helpers
// ---------------------------------------------------------------------------

function normalizeAndFilterBlogEntries(
  entries: DynamicBlogEntry[],
  source: 'database' | 'fallback' | 'filesystem',
): DynamicBlogEntry[] {
  const sanitizedEntries: DynamicBlogEntry[] = [];
  let skippedInvalidSlugCount = 0;
  let skippedInvalidDateCount = 0;

  entries.forEach((entry) => {
    const normalizedSlug = entry.slug.trim().toLowerCase();
    const normalizedUpdatedAt = new Date(entry.updatedAt);

    if (!BLOG_SLUG_PATTERN.test(normalizedSlug)) {
      skippedInvalidSlugCount += 1;
      console.warn('[SEO] Skipping blog sitemap entry due to invalid slug format', {
        source,
        originalSlug: entry.slug,
        normalizedSlug,
      });
      return;
    }

    if (Number.isNaN(normalizedUpdatedAt.getTime())) {
      skippedInvalidDateCount += 1;
      console.warn('[SEO] Skipping blog sitemap entry due to invalid updatedAt date', {
        source,
        slug: normalizedSlug,
        updatedAt: String(entry.updatedAt),
      });
      return;
    }

    sanitizedEntries.push({
      slug: normalizedSlug,
      updatedAt: normalizedUpdatedAt,
    });
  });

  if (skippedInvalidSlugCount > 0 || skippedInvalidDateCount > 0) {
    console.warn('[SEO] Filtered invalid blog sitemap entries', {
      source,
      inputCount: entries.length,
      outputCount: sanitizedEntries.length,
      skippedInvalidSlugCount,
      skippedInvalidDateCount,
    });
  }

  return sanitizedEntries;
}

function getSitemapEntryTimestamp(entry: MetadataRoute.Sitemap[number]): number {
  const timestampValue = entry.lastModified instanceof Date
    ? entry.lastModified.getTime()
    : new Date(String(entry.lastModified)).getTime();

  return Number.isNaN(timestampValue) ? 0 : timestampValue;
}

function mergeDuplicateSitemapEntry(
  existingEntry: MetadataRoute.Sitemap[number],
  candidateEntry: MetadataRoute.Sitemap[number],
): MetadataRoute.Sitemap[number] {
  const existingTimestamp = getSitemapEntryTimestamp(existingEntry);
  const candidateTimestamp = getSitemapEntryTimestamp(candidateEntry);

  if (candidateTimestamp > existingTimestamp) {
    return candidateEntry;
  }

  if (candidateTimestamp < existingTimestamp) {
    return existingEntry;
  }

  const existingPriority = existingEntry.priority ?? 0;
  const candidatePriority = candidateEntry.priority ?? 0;

  if (candidatePriority > existingPriority) {
    return candidateEntry;
  }

  if (candidatePriority < existingPriority) {
    return existingEntry;
  }

  return existingEntry;
}

const BLOG_DETAIL_PRIORITY = 0.78;

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

// ---------------------------------------------------------------------------
// Main sitemap export
// ---------------------------------------------------------------------------

/**
 * Dynamic XML sitemap route.
 * Auto-includes:
 * - curated + navigation-driven static public routes (with per-route lastModified)
 * - dynamic blog post routes (with recency-based priority)
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = getStaticSeoRoutes();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: toAbsoluteSeoUrl(route),
    lastModified: getLastModifiedForRoute(route),
    changeFrequency: getChangeFrequencyForRoute(route),
    priority: getPriorityForRoute(route),
  }));

  const blogEntries = await getBlogEntries();
  // Blog detail entries: priority: 0.78 is the policy baseline for all posts
  const dynamicBlogEntries: MetadataRoute.Sitemap = blogEntries.map((entry) => ({
    url: toAbsoluteSeoUrl(`/pages/blog/${entry.slug}`),
    lastModified: entry.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: BLOG_DETAIL_PRIORITY,
  }));

  const dedupedByUrl = new Map<string, MetadataRoute.Sitemap[number]>();
  const duplicateUrlConflictSet = new Set<string>();
  [...staticEntries, ...dynamicBlogEntries].forEach((entry) => {
    const existingEntry = dedupedByUrl.get(entry.url);

    if (!existingEntry) {
      dedupedByUrl.set(entry.url, entry);
      return;
    }

    duplicateUrlConflictSet.add(entry.url);
    dedupedByUrl.set(entry.url, mergeDuplicateSitemapEntry(existingEntry, entry));
  });

  if (duplicateUrlConflictSet.size > 0) {
    console.warn('[SEO] Sitemap duplicate URL entries detected and merged', {
      duplicateCount: duplicateUrlConflictSet.size,
      sample: Array.from(duplicateUrlConflictSet).slice(0, 10),
    });
  }

  const finalEntries = Array.from(dedupedByUrl.values()).sort((a, b) =>
    a.url.localeCompare(b.url),
  );

  console.log('[SEO] Sitemap generated', {
    staticCount: staticEntries.length,
    dynamicBlogCount: dynamicBlogEntries.length,
    totalCount: finalEntries.length,
    highPriorityCount: finalEntries.filter((e) => (e.priority ?? 0) >= 0.90).length,
  });

  return finalEntries;
}
