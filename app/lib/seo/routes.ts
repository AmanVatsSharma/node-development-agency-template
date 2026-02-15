import { footerNavigation, mainNavigation, servicesMegaMenu } from '@/app/data/navigation';
import { SEO_BLOCKED_ROUTE_PREFIXES } from '@/app/lib/seo/constants';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Routes that should always be indexable even if navigation data changes.
 * Keep this list curated for core landing pages.
 */
const CORE_STATIC_ROUTES = [
  '/',
  '/pages/about',
  '/pages/services',
  '/pages/contact',
  '/pages/portfolio',
  '/pages/resources',
  '/pages/blog',
  '/pages/website-development',
  '/pages/business-website',
  '/pages/website-services',
];

/**
 * Paths that should never be included in sitemap.
 */
const APP_PAGES_DIR = path.join(process.cwd(), 'app', 'pages');

function isBlockedRoutePath(pathname: string): boolean {
  return SEO_BLOCKED_ROUTE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function normalizeRoute(route: string): string | null {
  if (!route || typeof route !== 'string') {
    return null;
  }

  const trimmed = route.trim();
  if (!trimmed) {
    return null;
  }

  // Ignore fragment-only anchors and non-HTTP URL schemes.
  if (
    trimmed.startsWith('#') ||
    trimmed.startsWith('mailto:') ||
    trimmed.startsWith('tel:') ||
    trimmed.startsWith('javascript:')
  ) {
    return null;
  }

  // Normalize sitemap link to actual sitemap.xml endpoint
  if (trimmed === '/sitemap') {
    return '/sitemap.xml';
  }

  // Absolute URLs are not expected in local routing config.
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('//')) {
    return null;
  }

  const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  const withoutQueryOrHash = withLeadingSlash.split(/[?#]/)[0] || '/';
  const collapsedPath = withoutQueryOrHash.replace(/\/{2,}/g, '/');
  const lowerCasedPath = collapsedPath.toLowerCase();
  const withoutTrailingSlash =
    lowerCasedPath.length > 1 ? lowerCasedPath.replace(/\/$/, '') : lowerCasedPath;

  if (withoutTrailingSlash === '/sitemap.xml' || withoutTrailingSlash === '/robots.txt') {
    return null;
  }

  // Drop dynamic placeholders from static sitemap source.
  if (withoutTrailingSlash.includes('[') || withoutTrailingSlash.includes(']')) {
    return null;
  }

  const isBlocked = isBlockedRoutePath(withoutTrailingSlash);

  if (isBlocked) {
    return null;
  }

  return withoutTrailingSlash;
}

function shouldSkipFilesystemSegment(segment: string): boolean {
  return (
    !segment ||
    segment.startsWith('_') ||
    segment.startsWith('.') ||
    segment.startsWith('@') ||
    segment === 'api'
  );
}

function isRouteGroupSegment(segment: string): boolean {
  return segment.startsWith('(') && segment.endsWith(')');
}

function discoverFilesystemPageRoutes(): string[] {
  const discoveredRoutes = new Set<string>();

  const walkDirectory = (directoryPath: string, relativeSegments: string[]) => {
    const entries = fs.readdirSync(directoryPath, { withFileTypes: true });

    const hasPageFile = entries.some(
      (entry) => entry.isFile() && /^page\.(tsx|ts|jsx|js|mdx)$/.test(entry.name),
    );

    if (hasPageFile) {
      const routePath =
        relativeSegments.length > 0 ? `/pages/${relativeSegments.join('/')}` : '/pages';
      discoveredRoutes.add(routePath);
    }

    entries
      .filter((entry) => entry.isDirectory())
      .forEach((entry) => {
        if (shouldSkipFilesystemSegment(entry.name)) {
          return;
        }

        const nextSegments = isRouteGroupSegment(entry.name)
          ? relativeSegments
          : [...relativeSegments, entry.name];

        walkDirectory(path.join(directoryPath, entry.name), nextSegments);
      });
  };

  try {
    walkDirectory(APP_PAGES_DIR, []);
  } catch (error) {
    console.error('[SEO] Failed to discover routes from app/pages filesystem', {
      appPagesDir: APP_PAGES_DIR,
      error: error instanceof Error ? error.message : String(error),
    });
  }

  return Array.from(discoveredRoutes);
}

/**
 * Collect static public routes from:
 * - curated core list
 * - header navigation
 * - services mega menu
 * - footer link groups
 */
export function getStaticSeoRoutes(): string[] {
  const routeSet = new Set<string>();
  const filesystemDiscoveredRoutes = discoverFilesystemPageRoutes();

  const addRoute = (candidate: string) => {
    const normalized = normalizeRoute(candidate);
    if (!normalized) {
      return;
    }
    routeSet.add(normalized);
  };

  CORE_STATIC_ROUTES.forEach(addRoute);
  mainNavigation.forEach((item) => addRoute(item.link));
  servicesMegaMenu.sections.forEach((section) => {
    section.items.forEach((item) => addRoute(item.link));
  });

  Object.values(footerNavigation).forEach((linkGroup) => {
    linkGroup.forEach((item) => addRoute(item.href));
  });
  filesystemDiscoveredRoutes.forEach(addRoute);

  // Debug log for visibility in build/runtime logs.
  console.log('[SEO] getStaticSeoRoutes', {
    routeCountFromFilesystem: filesystemDiscoveredRoutes.length,
    routeCount: routeSet.size,
    sample: Array.from(routeSet).slice(0, 10),
  });

  return Array.from(routeSet).sort();
}
