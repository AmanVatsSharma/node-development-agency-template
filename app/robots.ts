import type { MetadataRoute } from 'next';
import { SEO_SITE_URL, toAbsoluteSeoUrl } from '@/app/lib/seo/constants';

/**
 * Dynamic robots.txt route.
 * Keeps indexing open for all public pages and blocks private/admin surfaces.
 */
export default function robots(): MetadataRoute.Robots {
  console.log('[SEO] robots.txt generated', { siteUrl: SEO_SITE_URL });

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/admin', '/login'],
      },
    ],
    sitemap: toAbsoluteSeoUrl('/sitemap.xml'),
    host: SEO_SITE_URL,
  };
}
