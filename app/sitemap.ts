import type { MetadataRoute } from 'next';
import prisma from '@/app/lib/prisma';
import { blogPosts as fallbackBlogPosts } from '@/app/data/blogPosts';
import { getStaticSeoRoutes } from '@/app/lib/seo/routes';
import { toAbsoluteSeoUrl } from '@/app/lib/seo/constants';

type DynamicBlogEntry = {
  slug: string;
  updatedAt: Date;
};

const BLOG_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function normalizeAndFilterBlogEntries(
  entries: DynamicBlogEntry[],
  source: 'database' | 'fallback',
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

const HIGH_PRIORITY_SERVICE_ROUTES = new Set([
  '/pages/web-development',
  '/pages/web-development-mumbai',
  '/pages/website-development',
  '/pages/website-services',
  '/pages/business-website',
  '/pages/google-ads-management',
  '/pages/seo-audit',
  '/pages/next-js-development',
  '/pages/reactjs-development',
  '/pages/ai-chatbot-development',
  '/pages/ai-voice-agents',
  '/pages/whatsapp-business-api',
  '/pages/healthcare-software-development',
  '/pages/trading-software',
  '/pages/crm',
  '/pages/shopify-store-setup',
]);

function getPriorityForRoute(path: string): number {
  if (path === '/') return 1.0;
  if (path === '/pages/services') return 0.95;
  if (path === '/pages/contact') return 0.94;
  if (path === '/pages/about') return 0.92;
  if (HIGH_PRIORITY_SERVICE_ROUTES.has(path)) return 0.90;
  if (path.startsWith('/pages/google-ads')) return 0.88;
  if (path.startsWith('/pages/shopify')) return 0.86;
  if (path.startsWith('/pages/legal/')) return 0.30;
  if (path === '/pages/crm/demo') return 0.65;
  if (path.startsWith('/pages/')) return 0.80;
  return 0.70;
}

function getChangeFrequencyForRoute(path: string): MetadataRoute.Sitemap[number]['changeFrequency'] {
  if (path === '/') return 'weekly';
  if (path === '/pages/blog') return 'daily';
  if (path.startsWith('/pages/blog/')) return 'weekly';
  return 'monthly';
}

async function getBlogEntries(): Promise<DynamicBlogEntry[]> {
  try {
    const posts = await prisma.blogPost.findMany({
      select: {
        slug: true,
        updatedAt: true,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });

    if (posts.length > 0) {
      const normalizedDatabaseEntries = normalizeAndFilterBlogEntries(posts, 'database');

      if (normalizedDatabaseEntries.length > 0) {
        console.log('[SEO] Sitemap blog entries loaded from database', {
          count: normalizedDatabaseEntries.length,
          originalCount: posts.length,
        });
        return normalizedDatabaseEntries;
      }

      console.warn(
        '[SEO] Database blog entries were invalid for sitemap. Falling back to static data.',
        {
          count: posts.length,
        },
      );
    }
  } catch (error) {
    console.error('[SEO] Failed to load blog posts from database for sitemap. Falling back to static data.', {
      error: error instanceof Error ? error.message : String(error),
    });
  }

  const fallbackEntries = fallbackBlogPosts.map((post) => ({
    slug: post.slug,
    updatedAt: new Date(post.publishedAt),
  }));
  const normalizedFallbackEntries = normalizeAndFilterBlogEntries(fallbackEntries, 'fallback');

  console.log('[SEO] Sitemap blog entries loaded from static fallback', {
    count: normalizedFallbackEntries.length,
    originalCount: fallbackEntries.length,
  });

  return normalizedFallbackEntries;
}

/**
 * Dynamic XML sitemap route.
 * Auto-includes:
 * - curated + navigation-driven static public routes
 * - dynamic blog post routes
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = getStaticSeoRoutes();

  // Use a stable reference date for static pages rather than `new Date()`
  // so the sitemap is deterministic and does not trigger unnecessary re-crawling.
  const STATIC_PAGES_LAST_MODIFIED = new Date('2026-03-01T00:00:00.000Z');

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: toAbsoluteSeoUrl(route),
    lastModified: STATIC_PAGES_LAST_MODIFIED,
    changeFrequency: getChangeFrequencyForRoute(route),
    priority: getPriorityForRoute(route),
  }));


  const blogEntries = await getBlogEntries();
  const dynamicBlogEntries: MetadataRoute.Sitemap = blogEntries.map((entry) => ({
    url: toAbsoluteSeoUrl(`/pages/blog/${entry.slug}`),
    lastModified: entry.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.78,
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

  const finalEntries = Array.from(dedupedByUrl.values()).sort((a, b) => a.url.localeCompare(b.url));

  console.log('[SEO] Sitemap generated', {
    staticCount: staticEntries.length,
    dynamicBlogCount: dynamicBlogEntries.length,
    totalCount: finalEntries.length,
  });

  return finalEntries;
}
