import { companyProfile } from '@/app/data/companyProfile';

/**
 * Returns the canonical production site URL for SEO metadata.
 *
 * Resolution order:
 * 1) NEXT_PUBLIC_SITE_URL
 * 2) NEXT_PUBLIC_APP_URL
 * 3) companyProfile.websiteUrl
 *
 * The value is normalized to:
 * - always include protocol
 * - no trailing slash
 */
export function getCanonicalSiteUrl(): string {
  const envCandidate =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    companyProfile.websiteUrl;

  try {
    const parsedUrl = new URL(envCandidate);
    if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
      throw new Error(`Unsupported URL protocol: ${parsedUrl.protocol}`);
    }

    if (parsedUrl.pathname !== '/' || parsedUrl.search || parsedUrl.hash) {
      console.warn('[SEO] Site URL candidate includes path/query/hash. Canonical URL will use origin only.', {
        candidate: envCandidate,
        pathname: parsedUrl.pathname,
        search: parsedUrl.search,
        hash: parsedUrl.hash,
      });
    }

    return `${parsedUrl.protocol}//${parsedUrl.host}`;
  } catch (error) {
    console.error('[SEO] Invalid site URL candidate detected. Falling back to company profile URL.', {
      candidate: envCandidate,
      error: error instanceof Error ? error.message : String(error),
    });

    try {
      const fallbackUrl = new URL(companyProfile.websiteUrl);
      if (fallbackUrl.protocol !== 'http:' && fallbackUrl.protocol !== 'https:') {
        throw new Error(`Unsupported fallback URL protocol: ${fallbackUrl.protocol}`);
      }

      return `${fallbackUrl.protocol}//${fallbackUrl.host}`;
    } catch (fallbackError) {
      console.error('[SEO] Company profile website URL is also invalid. Falling back to hardcoded canonical URL.', {
        fallbackCandidate: companyProfile.websiteUrl,
        error: fallbackError instanceof Error ? fallbackError.message : String(fallbackError),
      });
      return 'https://enterprisehero.com';
    }
  }
}

/**
 * Canonical site-wide SEO identity.
 * Keep these as a single source of truth for all metadata definitions.
 */
export const SEO_SITE_URL = getCanonicalSiteUrl();
export const SEO_BRAND_NAME = companyProfile.brandName;
export const SEO_LEGAL_NAME = companyProfile.legalName;
export const SEO_DEFAULT_DESCRIPTION =
  'Enterprise-grade web development, AI automation, and growth-focused digital services by Enterprise Hero.';
export const SEO_DEFAULT_OG_IMAGE_PATH = '/logo.png';
export const SEO_BLOCKED_ROUTE_PREFIXES = ['/admin', '/api', '/login'] as const;
export const SEO_ROBOTS_DISALLOW_PATHS = ['/admin', '/api', '/login'] as const;

/**
 * Convert any path/URL into an absolute URL on canonical site domain.
 * - Absolute URLs are returned as-is.
 * - Relative paths are joined with SEO_SITE_URL.
 * - Invalid values fall back to site root.
 */
export function toAbsoluteSeoUrl(pathOrUrl: string): string {
  if (!pathOrUrl) {
    return SEO_SITE_URL;
  }

  try {
    // Accept full URLs (http/https) directly
    const absoluteCandidate = new URL(pathOrUrl);
    if (absoluteCandidate.protocol === 'http:' || absoluteCandidate.protocol === 'https:') {
      return absoluteCandidate.toString();
    }
  } catch {
    // Ignore parse error. Will be handled as relative path below.
  }

  try {
    const normalizedPath = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
    return new URL(normalizedPath, SEO_SITE_URL).toString();
  } catch (error) {
    console.error('[SEO] Failed to convert value to absolute URL. Falling back to site root.', {
      value: pathOrUrl,
      error: error instanceof Error ? error.message : String(error),
    });
    return SEO_SITE_URL;
  }
}
