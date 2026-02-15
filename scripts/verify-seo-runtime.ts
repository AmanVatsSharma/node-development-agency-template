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

async function verifySitemapOutput(): Promise<void> {
  const entries = await sitemap();
  const entryUrls = new Set(entries.map((entry) => entry.url));
  const staticRoutes = getStaticSeoRoutes();

  if (entries.length === 0) {
    logError('Sitemap entries are empty');
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
