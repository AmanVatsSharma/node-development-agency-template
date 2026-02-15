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

function verifyCanonicalSeoConstants(): void {
  let parsedSiteUrl: URL;

  try {
    parsedSiteUrl = new URL(SEO_SITE_URL);
  } catch (error) {
    logError('SEO_SITE_URL is not a valid absolute URL', {
      SEO_SITE_URL,
      error: error instanceof Error ? error.message : String(error),
    });
  }

  const hostname = parsedSiteUrl.hostname.toLowerCase();
  const isLocalHostname =
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname === '::1' ||
    hostname.endsWith('.localhost');
  const isHttps = parsedSiteUrl.protocol === 'https:';
  const isAllowedHttpLocal = parsedSiteUrl.protocol === 'http:' && isLocalHostname;

  if (!isHttps && !isAllowedHttpLocal) {
    logError('SEO_SITE_URL must use HTTPS (HTTP allowed only for localhost)', {
      SEO_SITE_URL,
      protocol: parsedSiteUrl.protocol,
      hostname: parsedSiteUrl.hostname,
    });
  }

  if (parsedSiteUrl.pathname !== '/' || parsedSiteUrl.search || parsedSiteUrl.hash) {
    logError('SEO_SITE_URL should contain only origin (no path/query/hash)', {
      SEO_SITE_URL,
      pathname: parsedSiteUrl.pathname,
      search: parsedSiteUrl.search,
      hash: parsedSiteUrl.hash,
    });
  }

  const resolvedRootUrl = toAbsoluteSeoUrl('/');
  const expectedRootUrl = `${SEO_SITE_URL}/`;
  if (resolvedRootUrl !== expectedRootUrl) {
    logError('toAbsoluteSeoUrl("/") must resolve to canonical root URL', {
      expectedRootUrl,
      resolvedRootUrl,
    });
  }

  const resolvedSitemapUrl = toAbsoluteSeoUrl('/sitemap.xml');
  const expectedSitemapUrl = `${SEO_SITE_URL}/sitemap.xml`;
  if (resolvedSitemapUrl !== expectedSitemapUrl) {
    logError('toAbsoluteSeoUrl("/sitemap.xml") must resolve to canonical sitemap URL', {
      expectedSitemapUrl,
      resolvedSitemapUrl,
    });
  }

  logInfo('Canonical SEO constant validation passed', {
    SEO_SITE_URL,
    resolvedRootUrl,
    resolvedSitemapUrl,
  });
}

function isValidDateInput(value: unknown): boolean {
  if (!value) {
    return false;
  }

  const parsedDate = value instanceof Date ? value : new Date(String(value));
  return !Number.isNaN(parsedDate.getTime());
}

function expectedPriorityForPath(pathname: string): number {
  if (pathname === '/') return 1.0;
  if (pathname === '/pages/services') return 0.95;
  if (pathname === '/pages/contact') return 0.92;
  if (pathname.startsWith('/pages/google-ads')) return 0.88;
  if (pathname.startsWith('/pages/shopify')) return 0.86;
  if (pathname.startsWith('/pages/blog/')) return 0.78;
  if (pathname.startsWith('/pages/')) return 0.8;
  return 0.7;
}

function expectedChangeFrequencyForPath(
  pathname: string,
): NonNullable<Awaited<ReturnType<typeof sitemap>>[number]['changeFrequency']> {
  if (pathname === '/') return 'weekly';
  if (pathname === '/pages/blog') return 'daily';
  if (pathname.startsWith('/pages/blog/')) return 'weekly';
  return 'monthly';
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

  const trailingSlashUrls = entries.filter(
    (entry) => entry.url !== `${SEO_SITE_URL}/` && entry.url.endsWith('/'),
  );
  if (trailingSlashUrls.length > 0) {
    logError('Sitemap URLs should not include trailing slash (except homepage)', {
      sample: trailingSlashUrls.slice(0, 10).map((entry) => entry.url),
    });
  }

  const invalidModifierUrls = entries.filter((entry) => /[?#]/.test(entry.url));
  if (invalidModifierUrls.length > 0) {
    logError('Sitemap URLs should not contain query/hash fragments', {
      sample: invalidModifierUrls.slice(0, 10).map((entry) => entry.url),
    });
  }

  const nonLowercasePathUrls = entries.filter((entry) => {
    try {
      const parsedUrl = new URL(entry.url);
      return parsedUrl.pathname !== parsedUrl.pathname.toLowerCase();
    } catch {
      return true;
    }
  });
  if (nonLowercasePathUrls.length > 0) {
    logError('Sitemap URLs should use lowercase pathnames only', {
      sample: nonLowercasePathUrls.slice(0, 10).map((entry) => entry.url),
    });
  }

  const duplicateSlashPathUrls = entries.filter((entry) => {
    try {
      const parsedUrl = new URL(entry.url);
      return /\/{2,}/.test(parsedUrl.pathname);
    } catch {
      return true;
    }
  });
  if (duplicateSlashPathUrls.length > 0) {
    logError('Sitemap URLs should not contain duplicate slashes in pathnames', {
      sample: duplicateSlashPathUrls.slice(0, 10).map((entry) => entry.url),
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

  const entriesMissingPriority = entries.filter((entry) => entry.priority === undefined);
  if (entriesMissingPriority.length > 0) {
    logError('All sitemap entries should define priority for deterministic SEO policy control', {
      sample: entriesMissingPriority.slice(0, 10).map((entry) => entry.url),
    });
  }

  const entriesWithUnexpectedPriorityPolicy = entries
    .map((entry) => {
      const pathname = new URL(entry.url).pathname;
      return {
        url: entry.url,
        pathname,
        expectedPriority: expectedPriorityForPath(pathname),
        actualPriority: entry.priority,
      };
    })
    .filter(({ expectedPriority, actualPriority }) => actualPriority !== expectedPriority);
  if (entriesWithUnexpectedPriorityPolicy.length > 0) {
    logError('Sitemap priority policy drift detected', {
      sample: entriesWithUnexpectedPriorityPolicy.slice(0, 10),
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

  const entriesMissingChangeFrequency = entries.filter((entry) => entry.changeFrequency === undefined);
  if (entriesMissingChangeFrequency.length > 0) {
    logError('All sitemap entries should define changeFrequency for crawl-budget policy control', {
      sample: entriesMissingChangeFrequency.slice(0, 10).map((entry) => entry.url),
    });
  }

  const entriesWithUnexpectedFrequencyPolicy = entries
    .map((entry) => {
      const pathname = new URL(entry.url).pathname;
      return {
        url: entry.url,
        pathname,
        expectedChangeFrequency: expectedChangeFrequencyForPath(pathname),
        actualChangeFrequency: entry.changeFrequency,
      };
    })
    .filter(
      ({ expectedChangeFrequency, actualChangeFrequency }) =>
        actualChangeFrequency !== expectedChangeFrequency,
    );
  if (entriesWithUnexpectedFrequencyPolicy.length > 0) {
    logError('Sitemap changeFrequency policy drift detected', {
      sample: entriesWithUnexpectedFrequencyPolicy.slice(0, 10),
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
  if (blogDetailEntries.length === 0) {
    logError('Sitemap should contain at least one blog detail route', {
      blogListingUrl,
    });
  }

  const nonCanonicalBlogDetailEntries = blogDetailEntries.filter((entry) => {
    const slugCandidate = entry.url.replace(`${toAbsoluteSeoUrl('/pages/blog/')}`, '');
    return !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slugCandidate);
  });
  if (nonCanonicalBlogDetailEntries.length > 0) {
    logError('Blog detail sitemap URLs should use lowercase kebab-case slugs', {
      sample: nonCanonicalBlogDetailEntries.slice(0, 10).map((entry) => entry.url),
    });
  }

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

  const requiredLegalRoutes = [
    '/pages/legal/privacy-policy',
    '/pages/legal/terms-of-service',
    '/pages/legal/shipping-policy',
    '/pages/legal/cancellations-refunds',
    '/pages/legal/company-info',
  ];
  requiredLegalRoutes.forEach((route) => {
    const routeUrl = toAbsoluteSeoUrl(route);
    if (!entryUrls.has(routeUrl)) {
      logError('Required legal sitemap route missing', { route, routeUrl });
    }
  });

  const legalRoutesWithUnexpectedFrequency = requiredLegalRoutes
    .map((route) => ({
      route,
      routeUrl: toAbsoluteSeoUrl(route),
      entry: entriesByUrl.get(toAbsoluteSeoUrl(route)),
    }))
    .filter(({ entry }) => entry && entry.changeFrequency !== 'monthly')
    .map(({ route, routeUrl, entry }) => ({
      route,
      routeUrl,
      actualChangeFrequency: entry?.changeFrequency,
    }));
  if (legalRoutesWithUnexpectedFrequency.length > 0) {
    logError('Legal sitemap routes should retain monthly changeFrequency baseline', {
      legalRoutesWithUnexpectedFrequency,
    });
  }

  const contactUrl = toAbsoluteSeoUrl('/pages/contact');
  const contactEntry = entriesByUrl.get(contactUrl);
  if (!contactEntry) {
    logError('Contact entry missing from sitemap', { contactUrl });
  }

  if ((contactEntry.priority ?? 0) < 0.9) {
    logError('Contact sitemap priority is lower than expected baseline', {
      contactUrl,
      actualPriority: contactEntry.priority,
    });
  }

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

  const duplicateAllowEntries = allowList.filter(
    (entry, index) => allowList.indexOf(entry) !== index,
  );
  if (duplicateAllowEntries.length > 0) {
    logError('Robots allow list contains duplicate entries', {
      duplicateAllowEntries,
    });
  }

  const unexpectedAllowEntries = allowList.filter((entry) => entry !== '/');
  if (unexpectedAllowEntries.length > 0) {
    logError('Robots wildcard allow list should only contain root path "/"', {
      unexpectedAllowEntries,
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

  const disallowOrderMismatch = disallowList.some(
    (entry, index) => requiredDisallowEntries[index] !== entry,
  );
  if (
    disallowOrderMismatch ||
    disallowList.length !== requiredDisallowEntries.length
  ) {
    logError('Robots disallow list order should match SEO_ROBOTS_DISALLOW_PATHS for deterministic output', {
      expected: requiredDisallowEntries,
      actual: disallowList,
    });
  }

  logInfo('Robots runtime validation passed', {
    host: robotsOutput.host,
    sitemap: robotsOutput.sitemap,
  });
}

async function main(): Promise<void> {
  logInfo('Starting runtime SEO verification');
  verifyCanonicalSeoConstants();
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
