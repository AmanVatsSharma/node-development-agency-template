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
    description = SEO_DEFAULT_DESCRIPTION,
    path,
    keywords,
    imagePath = SEO_DEFAULT_OG_IMAGE_PATH,
    noIndex = false,
    locale = 'en_IN',
  } = options;

  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = toAbsoluteSeoUrl(canonicalPath);
  const openGraphImageUrl = toAbsoluteSeoUrl(imagePath);

  // Diagnostic log for easier SEO troubleshooting in server logs.
  console.log('[SEO] buildPageMetadata', {
    title,
    canonicalPath,
    canonicalUrl,
    openGraphImageUrl,
    noIndex,
  });

  return {
    metadataBase: new URL(SEO_SITE_URL),
    title,
    description,
    keywords,
    authors: [{ name: SEO_LEGAL_NAME }],
    creator: SEO_LEGAL_NAME,
    publisher: SEO_LEGAL_NAME,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
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
      description,
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
