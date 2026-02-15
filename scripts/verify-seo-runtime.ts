/**
 * @fileoverview Runtime SEO verification
 * @description Executes dynamic sitemap/robots route logic and validates outputs.
 *
 * This complements static checks by validating generated runtime values.
 */

import sitemap from '@/app/sitemap';
import robots from '@/app/robots';
import { getStaticSeoRoutes } from '@/app/lib/seo/routes';
import { SEO_SITE_URL, toAbsoluteSeoUrl } from '@/app/lib/seo/constants';

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

async function verifySitemapOutput(): Promise<void> {
  const entries = await sitemap();
  const entryUrls = new Set(entries.map((entry) => entry.url));
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

  const requiredRoutes = ['/pages/contact', '/pages/services', '/pages/blog'];
  requiredRoutes.forEach((route) => {
    const routeUrl = toAbsoluteSeoUrl(route);
    if (!entryUrls.has(routeUrl)) {
      logError('Required sitemap route missing', { route, routeUrl });
    }
  });

  const blockedPrefixes = ['/admin', '/api', '/login'];
  const blockedUrlFound = entries.find((entry) =>
    blockedPrefixes.some((prefix) => entry.url.includes(prefix)),
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

  logInfo('Sitemap runtime validation passed', {
    entryCount: entries.length,
    checkedStaticRouteCount: staticRoutes.length,
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

  const disallowList = Array.isArray(rootRule.disallow)
    ? rootRule.disallow
    : [rootRule.disallow].filter(Boolean);
  const requiredDisallowEntries = ['/admin', '/api/admin', '/login'];
  const missingDisallowEntries = requiredDisallowEntries.filter(
    (entry) => !disallowList.includes(entry),
  );
  if (missingDisallowEntries.length > 0) {
    logError('Robots missing required disallow entries', { missingDisallowEntries });
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
