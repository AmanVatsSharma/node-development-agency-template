import { footerNavigation, mainNavigation, servicesMegaMenu } from '@/app/data/navigation';

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
const BLOCKED_ROUTE_PREFIXES = ['/admin', '/api', '/login'];

function normalizeRoute(route: string): string | null {
  if (!route || typeof route !== 'string') {
    return null;
  }

  const trimmed = route.trim();
  if (!trimmed) {
    return null;
  }

  // Normalize sitemap link to actual sitemap.xml endpoint
  if (trimmed === '/sitemap') {
    return '/sitemap.xml';
  }

  // Absolute URLs are not expected in local routing config.
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return null;
  }

  const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  const withoutTrailingSlash =
    withLeadingSlash.length > 1 ? withLeadingSlash.replace(/\/$/, '') : withLeadingSlash;

  if (withoutTrailingSlash === '/sitemap.xml' || withoutTrailingSlash === '/robots.txt') {
    return null;
  }

  // Drop dynamic placeholders from static sitemap source.
  if (withoutTrailingSlash.includes('[') || withoutTrailingSlash.includes(']')) {
    return null;
  }

  const isBlocked = BLOCKED_ROUTE_PREFIXES.some((prefix) =>
    withoutTrailingSlash.startsWith(prefix),
  );

  if (isBlocked) {
    return null;
  }

  return withoutTrailingSlash;
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

  // Debug log for visibility in build/runtime logs.
  console.log('[SEO] getStaticSeoRoutes', {
    routeCount: routeSet.size,
    sample: Array.from(routeSet).slice(0, 10),
  });

  return Array.from(routeSet).sort();
}
