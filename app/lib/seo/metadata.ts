import type { Metadata } from 'next';
import {
  SEO_BRAND_NAME,
  SEO_DEFAULT_DESCRIPTION,
  SEO_DEFAULT_OG_IMAGE_PATH,
  SEO_LEGAL_NAME,
  SEO_SITE_URL,
  toAbsoluteSeoUrl,
} from '@/app/lib/seo/constants';

export interface BuildPageMetadataOptions {
  title: string;
  description?: string;
  path: string;
  keywords?: string[];
  imagePath?: string;
  noIndex?: boolean;
  locale?: string;
}

function normalizeMetadataPath(rawPath: string): string {
  const trimmedPath = rawPath.trim();
  if (!trimmedPath) {
    console.warn('[SEO] Empty metadata path received. Falling back to root canonical path.');
    return '/';
  }

  if (
    trimmedPath.startsWith('#') ||
    trimmedPath.startsWith('mailto:') ||
    trimmedPath.startsWith('tel:') ||
    trimmedPath.startsWith('javascript:')
  ) {
    console.warn('[SEO] Non-indexable metadata path received. Falling back to root canonical path.', {
      path: rawPath,
    });
    return '/';
  }

  const hasHttpPrefix = trimmedPath.startsWith('http://') || trimmedPath.startsWith('https://');
  const candidatePath = hasHttpPrefix
    ? (() => {
        try {
          const parsedUrl = new URL(trimmedPath);
          if (parsedUrl.origin !== SEO_SITE_URL) {
            console.warn('[SEO] Cross-origin metadata path rejected. Falling back to root canonical path.', {
              path: rawPath,
              origin: parsedUrl.origin,
              expectedOrigin: SEO_SITE_URL,
            });
            return '/';
          }
          return parsedUrl.pathname || '/';
        } catch {
          return trimmedPath;
        }
      })()
    : trimmedPath;

  const withLeadingSlash = candidatePath.startsWith('/') ? candidatePath : `/${candidatePath}`;
  const withoutQueryOrHash = withLeadingSlash.split(/[?#]/)[0] || '/';
  const collapsedPath = withoutQueryOrHash.replace(/\/{2,}/g, '/');
  const lowerCasedPath = collapsedPath.toLowerCase();
  const withoutTrailingSlash =
    lowerCasedPath.length > 1 ? lowerCasedPath.replace(/\/$/, '') : lowerCasedPath;

  return withoutTrailingSlash;
}

function normalizeMetadataDescription(description?: string): string {
  if (description === undefined) {
    return SEO_DEFAULT_DESCRIPTION;
  }

  const trimmedDescription = description.trim();
  if (trimmedDescription) {
    return trimmedDescription;
  }

  console.warn('[SEO] Empty metadata description received. Falling back to SEO_DEFAULT_DESCRIPTION.');
  return SEO_DEFAULT_DESCRIPTION;
}

function normalizeMetadataImagePath(imagePath?: string): string {
  const candidateImagePath = (imagePath ?? SEO_DEFAULT_OG_IMAGE_PATH).trim();
  if (!candidateImagePath) {
    console.warn('[SEO] Empty metadata imagePath received. Falling back to SEO_DEFAULT_OG_IMAGE_PATH.');
    return SEO_DEFAULT_OG_IMAGE_PATH;
  }

  if (/^\/\/[^/]/.test(candidateImagePath)) {
    console.warn('[SEO] Protocol-relative metadata imagePath rejected. Falling back to SEO_DEFAULT_OG_IMAGE_PATH.', {
      imagePath,
    });
    return SEO_DEFAULT_OG_IMAGE_PATH;
  }

  const hasExplicitScheme = /^[a-z][a-z0-9+.-]*:/i.test(candidateImagePath);
  if (hasExplicitScheme && !/^https?:/i.test(candidateImagePath)) {
    console.warn('[SEO] Non-http metadata imagePath rejected. Falling back to SEO_DEFAULT_OG_IMAGE_PATH.', {
      imagePath,
    });
    return SEO_DEFAULT_OG_IMAGE_PATH;
  }

  return candidateImagePath;
}

function normalizeMetadataKeywords(keywords?: string[]): string[] | undefined {
  if (!keywords || keywords.length === 0) {
    return undefined;
  }

  const normalizedKeywords = keywords
    .map((keyword) => keyword.trim())
    .filter(Boolean);
  if (normalizedKeywords.length === 0) {
    return undefined;
  }

  const dedupedKeywords: string[] = [];
  const seenKeywordKeys = new Set<string>();

  normalizedKeywords.forEach((keyword) => {
    const normalizedKeywordKey = keyword.toLowerCase();
    if (seenKeywordKeys.has(normalizedKeywordKey)) {
      return;
    }
    seenKeywordKeys.add(normalizedKeywordKey);
    dedupedKeywords.push(keyword);
  });

  return dedupedKeywords.length > 0 ? dedupedKeywords : undefined;
}

/**
 * Build consistent page metadata for all public routes.
 * This helper ensures every page has:
 * - canonical URL
 * - Open Graph metadata
 * - Twitter card metadata
 * - robots directives
 * - unified organization branding
 */
export function buildPageMetadata(options: BuildPageMetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    keywords,
    imagePath,
    noIndex = false,
    locale = 'en_IN',
  } = options;

  const canonicalPath = normalizeMetadataPath(path);
  const normalizedDescription = normalizeMetadataDescription(description);
  const normalizedImagePath = normalizeMetadataImagePath(imagePath);
  const canonicalUrl = toAbsoluteSeoUrl(canonicalPath);
  const openGraphImageUrl = toAbsoluteSeoUrl(normalizedImagePath);
  const normalizedKeywords = normalizeMetadataKeywords(keywords);

  // Diagnostic log for easier SEO troubleshooting in server logs.
  console.log('[SEO] buildPageMetadata', {
    title,
    canonicalPath,
    canonicalUrl,
    openGraphImageUrl,
    noIndex,
    keywordsCount: normalizedKeywords?.length || 0,
  });

  return {
    metadataBase: new URL(SEO_SITE_URL),
    title,
    description: normalizedDescription,
    keywords: normalizedKeywords,
    authors: [{ name: SEO_LEGAL_NAME }],
    creator: SEO_LEGAL_NAME,
    publisher: SEO_LEGAL_NAME,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description: normalizedDescription,
      url: canonicalUrl,
      siteName: SEO_BRAND_NAME,
      locale,
      type: 'website',
      images: [
        {
          url: openGraphImageUrl,
          width: 1200,
          height: 630,
          alt: `${SEO_BRAND_NAME} - ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: normalizedDescription,
      images: [openGraphImageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            'max-video-preview': 0,
            'max-image-preview': 'none',
            'max-snippet': 0,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}
