import type { MetadataRoute } from 'next';
import { SEO_ROBOTS_DISALLOW_PATHS, SEO_SITE_URL, toAbsoluteSeoUrl } from '@/app/lib/seo/constants';

function normalizeDisallowPath(pathValue: string): string | null {
  const trimmedPath = pathValue.trim();
  if (!trimmedPath) {
    return null;
  }

  const withLeadingSlash = trimmedPath.startsWith('/') ? trimmedPath : `/${trimmedPath}`;
  const withoutQueryOrHash = withLeadingSlash.split(/[?#]/)[0] || '/';
  const collapsedPath = withoutQueryOrHash.replace(/\/{2,}/g, '/');
  const lowerCasedPath = collapsedPath.toLowerCase();
  const withoutTrailingSlash =
    lowerCasedPath.length > 1 ? lowerCasedPath.replace(/\/$/, '') : lowerCasedPath;

  if (!withoutTrailingSlash.startsWith('/') || /\s/.test(withoutTrailingSlash)) {
    return null;
  }

  return withoutTrailingSlash;
}

function getRobotsDisallowPaths(): string[] {
  const normalizedPaths: string[] = [];
  const seenPaths = new Set<string>();
  const skippedPaths: string[] = [];

  SEO_ROBOTS_DISALLOW_PATHS.forEach((pathValue) => {
    const normalizedPath = normalizeDisallowPath(pathValue);
    if (!normalizedPath) {
      skippedPaths.push(pathValue);
      return;
    }

    if (seenPaths.has(normalizedPath)) {
      console.warn('[SEO] Duplicate robots disallow path skipped during normalization.', {
        pathValue,
        normalizedPath,
      });
      return;
    }

    seenPaths.add(normalizedPath);
    normalizedPaths.push(normalizedPath);
  });

  if (skippedPaths.length > 0) {
    console.warn('[SEO] Invalid robots disallow paths skipped during normalization.', {
      skippedPaths,
    });
  }

  if (normalizedPaths.length === 0) {
    console.warn('[SEO] Robots disallow normalization yielded empty list. Falling back to shared constants.');
    return [...SEO_ROBOTS_DISALLOW_PATHS];
  }

  return normalizedPaths;
}

/**
 * Dynamic robots.txt route.
 * Keeps indexing open for all public pages and blocks private/admin surfaces.
 */
export default function robots(): MetadataRoute.Robots {
  const disallowPaths = getRobotsDisallowPaths();

  console.log('[SEO] robots.txt generated', { siteUrl: SEO_SITE_URL });

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowPaths,
      },
    ],
    sitemap: toAbsoluteSeoUrl('/sitemap.xml'),
    host: SEO_SITE_URL,
  };
}
