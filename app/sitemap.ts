import type { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/app/lib/blog';
import { getStaticSeoRoutes } from '@/app/lib/seo/routes';
import { toAbsoluteSeoUrl } from '@/app/lib/seo/constants';
import { getRouteLastModified } from '@/app/lib/seo/lastmod';
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
    lastModified: getRouteLastModified(route),
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
