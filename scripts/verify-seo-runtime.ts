/**
 * @fileoverview Runtime SEO verification
 * @description Executes dynamic sitemap/robots route logic and validates outputs.
 *
 * This complements static checks by validating generated runtime values.
 */

import sitemap from '@/app/sitemap';
import robots from '@/app/robots';
import { getStaticSeoRoutes } from '@/app/lib/seo/routes';
import { footerNavigation, mainNavigation, servicesMegaMenu } from '@/app/data/navigation';
import {
  SEO_BLOCKED_ROUTE_PREFIXES,
  SEO_ROBOTS_DISALLOW_PATHS,
  SEO_SITE_URL,
  toAbsoluteSeoUrl,
} from '@/app/lib/seo/constants';

function logInfo(message: string, data?: unknown): void {
  if (data !== undefined) {
    console.log(`[SEO-RUNTIME] ${message}`, data);
    return;
  }
  console.log(`[SEO-RUNTIME] ${message}`);
}

function logError(message: string, data?: unknown): never {
  if (data !== undefined) {
    console.error(`[SEO-RUNTIME] ${message}`, data);
  } else {
    console.error(`[SEO-RUNTIME] ${message}`);
  }
  throw new Error(message);
}

function isValidDateInput(value: unknown): boolean {
  if (!value) {
    return false;
  }

  const parsedDate = value instanceof Date ? value : new Date(String(value));
  return !Number.isNaN(parsedDate.getTime());
}

function normalizeNavigationRoute(route: string): string | null {
  if (!route || typeof route !== 'string') {
    return null;
  }

  const trimmedRoute = route.trim();
  if (!trimmedRoute) {
    return null;
  }

  if (trimmedRoute.startsWith('http://') || trimmedRoute.startsWith('https://')) {
    return null;
  }

  const normalizedWithLeadingSlash = trimmedRoute.startsWith('/')
    ? trimmedRoute
    : `/${trimmedRoute}`;
  const normalizedRoute =
    normalizedWithLeadingSlash.length > 1
      ? normalizedWithLeadingSlash.replace(/\/$/, '')
      : normalizedWithLeadingSlash;

  if (normalizedRoute === '/sitemap') {
    return '/sitemap.xml';
  }

  if (normalizedRoute === '/sitemap.xml' || normalizedRoute === '/robots.txt') {
    return null;
  }

  if (normalizedRoute.includes('[') || normalizedRoute.includes(']')) {
    return null;
  }

  const isBlocked = SEO_BLOCKED_ROUTE_PREFIXES.some((prefix) =>
    normalizedRoute.startsWith(prefix),
  );
  if (isBlocked) {
    return null;
  }

  return normalizedRoute;
}

function getExpectedNavigationRoutesForSitemap(): string[] {
  const routeSet = new Set<string>();

  mainNavigation.forEach((item) => {
    const normalized = normalizeNavigationRoute(item.link);
    if (normalized) {
      routeSet.add(normalized);
    }
  });

  servicesMegaMenu.sections.forEach((section) => {
    section.items.forEach((item) => {
      const normalized = normalizeNavigationRoute(item.link);
      if (normalized) {
        routeSet.add(normalized);
      }
    });
  });

  Object.values(footerNavigation).forEach((linkGroup) => {
    linkGroup.forEach((item) => {
      const normalized = normalizeNavigationRoute(item.href);
      if (normalized) {
        routeSet.add(normalized);
      }
    });
  });

  return Array.from(routeSet).sort();
}

async function verifySitemapOutput(): Promise<void> {
  const entries = await sitemap();
  const entryUrls = new Set(entries.map((entry) => entry.url));
  const entriesByUrl = new Map(entries.map((entry) => [entry.url, entry]));
  const entryUrlsInOrder = entries.map((entry) => entry.url);
  const staticRoutes = getStaticSeoRoutes();
  const now = Date.now();
  const allowedFrequencies = new Set([
    'always',
    'hourly',
    'daily',
    'weekly',
    'monthly',
    'yearly',
    'never',
  ]);

  if (entries.length === 0) {
    logError('Sitemap entries are empty');
  }

  const duplicateUrls = entries
    .map((entry) => entry.url)
    .filter((url, index, allUrls) => allUrls.indexOf(url) !== index);
  if (duplicateUrls.length > 0) {
    logError('Duplicate sitemap URLs detected', {
      duplicateCount: duplicateUrls.length,
      sample: duplicateUrls.slice(0, 10),
    });
  }

  const sortedEntryUrls = [...entryUrlsInOrder].sort((a, b) => a.localeCompare(b));
  const firstUnsortedIndex = entryUrlsInOrder.findIndex(
    (url, index) => url !== sortedEntryUrls[index],
  );
  if (firstUnsortedIndex >= 0) {
    logError('Sitemap output should remain lexicographically sorted by URL', {
      index: firstUnsortedIndex,
      actual: entryUrlsInOrder[firstUnsortedIndex],
      expected: sortedEntryUrls[firstUnsortedIndex],
    });
  }

  const nonCanonicalUrls = entries.filter((entry) => !entry.url.startsWith(`${SEO_SITE_URL}/`));
  if (nonCanonicalUrls.length > 0) {
    logError('Sitemap contains non-canonical URLs', {
      sample: nonCanonicalUrls.slice(0, 10).map((entry) => entry.url),
    });
  }

  const invalidModifierUrls = entries.filter((entry) => /[?#]/.test(entry.url));
  if (invalidModifierUrls.length > 0) {
    logError('Sitemap URLs should not contain query/hash fragments', {
      sample: invalidModifierUrls.slice(0, 10).map((entry) => entry.url),
    });
  }

  const entriesMissingValidLastModified = entries.filter(
    (entry) => !isValidDateInput(entry.lastModified),
  );
  if (entriesMissingValidLastModified.length > 0) {
    logError('Sitemap entries with invalid lastModified detected', {
      sample: entriesMissingValidLastModified.slice(0, 10).map((entry) => entry.url),
    });
  }

  const futureDatedEntries = entries.filter((entry) => {
    const parsedDate = new Date(String(entry.lastModified)).getTime();
    return parsedDate > now + 1000 * 60 * 60 * 24;
  });
  if (futureDatedEntries.length > 0) {
    logError('Sitemap entries should not be significantly future-dated', {
      sample: futureDatedEntries.slice(0, 10).map((entry) => ({
        url: entry.url,
        lastModified: entry.lastModified,
      })),
    });
  }

  const invalidPriorityEntries = entries.filter(
    (entry) =>
      entry.priority !== undefined &&
      (typeof entry.priority !== 'number' || Number.isNaN(entry.priority) || entry.priority < 0 || entry.priority > 1),
  );
  if (invalidPriorityEntries.length > 0) {
    logError('Sitemap entries contain invalid priority values', {
      sample: invalidPriorityEntries.slice(0, 10).map((entry) => ({
        url: entry.url,
        priority: entry.priority,
      })),
    });
  }

  const invalidChangeFrequencyEntries = entries.filter(
    (entry) =>
      entry.changeFrequency !== undefined && !allowedFrequencies.has(entry.changeFrequency),
  );
  if (invalidChangeFrequencyEntries.length > 0) {
    logError('Sitemap entries contain invalid changeFrequency values', {
      sample: invalidChangeFrequencyEntries.slice(0, 10).map((entry) => ({
        url: entry.url,
        changeFrequency: entry.changeFrequency,
      })),
    });
  }

  const homeUrl = toAbsoluteSeoUrl('/');
  if (!entryUrls.has(homeUrl)) {
    logError('Homepage URL missing from sitemap', { homeUrl });
  }

  const homeEntry = entriesByUrl.get(homeUrl);
  if (!homeEntry) {
    logError('Homepage entry missing from sitemap map', { homeUrl });
  }

  if (homeEntry.priority !== 1) {
    logError('Homepage sitemap priority must remain 1.0', {
      url: homeUrl,
      actualPriority: homeEntry.priority,
    });
  }

  if (homeEntry.changeFrequency !== 'weekly') {
    logError('Homepage changeFrequency should remain weekly', {
      url: homeUrl,
      actualChangeFrequency: homeEntry.changeFrequency,
    });
  }

  const servicesUrl = toAbsoluteSeoUrl('/pages/services');
  const servicesEntry = entriesByUrl.get(servicesUrl);
  if (!servicesEntry) {
    logError('Services entry missing from sitemap', { servicesUrl });
  }

  if ((servicesEntry.priority ?? 0) < 0.9) {
    logError('Services sitemap priority is lower than expected baseline', {
      url: servicesUrl,
      actualPriority: servicesEntry.priority,
    });
  }

  const blogListingUrl = toAbsoluteSeoUrl('/pages/blog');
  const blogListingEntry = entriesByUrl.get(blogListingUrl);
  if (!blogListingEntry) {
    logError('Blog listing entry missing from sitemap', { blogListingUrl });
  }

  if (blogListingEntry.changeFrequency !== 'daily') {
    logError('Blog listing changeFrequency should remain daily', {
      url: blogListingUrl,
      actualChangeFrequency: blogListingEntry.changeFrequency,
    });
  }

  const blogDetailEntries = entries.filter((entry) =>
    entry.url.startsWith(`${toAbsoluteSeoUrl('/pages/blog/')}`),
  );
  const invalidBlogDetailEntries = blogDetailEntries.filter(
    (entry) => entry.changeFrequency !== 'weekly',
  );
  if (invalidBlogDetailEntries.length > 0) {
    logError('Blog detail pages should use weekly changeFrequency', {
      sample: invalidBlogDetailEntries.slice(0, 10).map((entry) => ({
        url: entry.url,
        changeFrequency: entry.changeFrequency,
      })),
    });
  }

  const invalidBlogPriorityEntries = blogDetailEntries.filter((entry) => entry.priority !== 0.78);
  if (invalidBlogPriorityEntries.length > 0) {
    logError('Blog detail pages should keep priority at 0.78', {
      sample: invalidBlogPriorityEntries.slice(0, 10).map((entry) => ({
        url: entry.url,
        priority: entry.priority,
      })),
    });
  }

  const requiredRoutes = ['/pages/contact', '/pages/services', '/pages/blog'];
  requiredRoutes.forEach((route) => {
    const routeUrl = toAbsoluteSeoUrl(route);
    if (!entryUrls.has(routeUrl)) {
      logError('Required sitemap route missing', { route, routeUrl });
    }
  });

  const requiredLegalRoutes = ['/pages/legal/privacy-policy', '/pages/legal/terms-of-service'];
  requiredLegalRoutes.forEach((route) => {
    const routeUrl = toAbsoluteSeoUrl(route);
    if (!entryUrls.has(routeUrl)) {
      logError('Required legal sitemap route missing', { route, routeUrl });
    }
  });

  const blockedUrlFound = entries.find((entry) =>
    SEO_BLOCKED_ROUTE_PREFIXES.some((prefix) => entry.url.includes(prefix)),
  );
  if (blockedUrlFound) {
    logError('Blocked route unexpectedly present in sitemap', { url: blockedUrlFound.url });
  }

  const staticRouteCoverageMissing = staticRoutes.filter(
    (route) => !entryUrls.has(toAbsoluteSeoUrl(route)),
  );
  if (staticRouteCoverageMissing.length > 0) {
    logError('Some static SEO routes are missing in sitemap output', {
      missingCount: staticRouteCoverageMissing.length,
      sample: staticRouteCoverageMissing.slice(0, 10),
    });
  }

  const expectedNavigationRoutes = getExpectedNavigationRoutesForSitemap();
  const missingNavigationRoutes = expectedNavigationRoutes.filter(
    (route) => !entryUrls.has(toAbsoluteSeoUrl(route)),
  );
  if (missingNavigationRoutes.length > 0) {
    logError('Navigation routes missing in sitemap output', {
      missingCount: missingNavigationRoutes.length,
      sample: missingNavigationRoutes.slice(0, 10),
    });
  }

  logInfo('Sitemap runtime validation passed', {
    entryCount: entries.length,
    checkedStaticRouteCount: staticRoutes.length,
    checkedNavigationRouteCount: expectedNavigationRoutes.length,
  });
}

function verifyRobotsOutput(): void {
  const robotsOutput = robots();

  if (robotsOutput.host !== SEO_SITE_URL) {
    logError('Robots host mismatch', { expected: SEO_SITE_URL, actual: robotsOutput.host });
  }

  const expectedSitemapUrl = toAbsoluteSeoUrl('/sitemap.xml');
  if (robotsOutput.sitemap !== expectedSitemapUrl) {
    logError('Robots sitemap URL mismatch', {
      expected: expectedSitemapUrl,
      actual: robotsOutput.sitemap,
    });
  }

  const rootRule = robotsOutput.rules.find((rule) => rule.userAgent === '*');
  if (!rootRule) {
    logError('Robots wildcard user-agent rule missing');
  }

  const allowList = Array.isArray(rootRule.allow)
    ? rootRule.allow
    : [rootRule.allow].filter(Boolean);
  if (!allowList.includes('/')) {
    logError('Robots wildcard rule must explicitly allow root path "/"', {
      allowList,
    });
  }

  const disallowList = Array.isArray(rootRule.disallow)
    ? rootRule.disallow
    : [rootRule.disallow].filter(Boolean);
  const duplicateDisallowEntries = disallowList.filter(
    (entry, index) => disallowList.indexOf(entry) !== index,
  );
  if (duplicateDisallowEntries.length > 0) {
    logError('Robots disallow list contains duplicate entries', {
      duplicateDisallowEntries,
    });
  }

  const requiredDisallowEntries = [...SEO_ROBOTS_DISALLOW_PATHS];
  const missingDisallowEntries = requiredDisallowEntries.filter(
    (entry) => !disallowList.includes(entry),
  );
  if (missingDisallowEntries.length > 0) {
    logError('Robots missing required disallow entries', { missingDisallowEntries });
  }

  const unexpectedDisallowEntries = disallowList.filter(
    (entry) => !requiredDisallowEntries.includes(entry),
  );
  if (unexpectedDisallowEntries.length > 0) {
    logError('Robots disallow list has unexpected entries', {
      unexpectedDisallowEntries,
    });
  }

  const disallowOutsideBlockedPrefixes = requiredDisallowEntries.filter(
    (entry) => !SEO_BLOCKED_ROUTE_PREFIXES.includes(entry),
  );
  if (disallowOutsideBlockedPrefixes.length > 0) {
    logError('Robots disallow policy must stay aligned with blocked route prefixes', {
      disallowOutsideBlockedPrefixes,
      blockedPrefixes: SEO_BLOCKED_ROUTE_PREFIXES,
    });
  }

  logInfo('Robots runtime validation passed', {
    host: robotsOutput.host,
    sitemap: robotsOutput.sitemap,
  });
}

async function main(): Promise<void> {
  logInfo('Starting runtime SEO verification');
  await verifySitemapOutput();
  verifyRobotsOutput();
  logInfo('Runtime SEO verification completed successfully');
}

main().catch((error) => {
  console.error('[SEO-RUNTIME] Verification failed', {
    error: error instanceof Error ? error.message : String(error),
  });
  process.exit(1);
});
