import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { SEO_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for SEO Audit Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire seo expert", "seo audit service" (high buyer intent)
 * - Secondary: Service-specific SEO audit keywords
 * - Long-tail: Problem-solving SEO keywords
 * - Semantic: Related SEO and optimization terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire SEO Expert | Free SEO Audit Tool & Professional SEO Services',
  'Run a free SEO scan in 60s. Get prioritized fixes, Core Web Vitals report, backlink snapshot & a strategic SEO audit report.',
  SEO_KEYWORDS,
  '/pages/seo-audit',
  {
    pricing: {
      startingPrice: '6,999',
      currency: '₹',
    },
    ogImage: '/seo-audit-og-image.png',
    cta: 'Book your audit today!',
  }
);
