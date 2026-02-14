/**
 * @fileoverview Script to update all pages with SEO optimizations
 * @description Adds breadcrumbs, related services, and optimizes H1 tags
 * @version 1.0.0
 * 
 * Usage: This is a reference script. Run updates manually for safety.
 */

/**
 * List of all service pages that need SEO updates
 */
export const SERVICE_PAGES_TO_UPDATE = [
  'enterprise-google-ads-management',
  'ecommerce-google-ads-optimization',
  'local-business-google-ads',
  'performance-max-campaigns',
  'google-ads-audit-strategy',
  'youtube-advertising-management',
  'reactjs-development',
  'business-website',
  'website-development',
  'web-development-mumbai',
  'shopify-headless-migration',
  'shopify-product-page-customization',
  'shopify-store-setup',
  'seo-audit',
  'landing-page-optimization',
  'ai-chatbot-development',
  'whatsapp-business-api',
  'ai-voice-agents',
  'crm',
  'healthcare-software-development',
  'trading-software',
  'nse-mcx-live-market-data',
];

/**
 * Template for adding imports
 */
export const SEO_IMPORTS = `import { Breadcrumbs } from '@/app/components/SEO/Breadcrumbs';
import { RelatedServices } from '@/app/components/SEO/RelatedServices';
import { getBreadcrumbItems, getRelatedServicesTitle } from '@/app/lib/seo/page-helpers';`;

/**
 * Template for adding breadcrumbs
 */
export const BREADCRUMB_TEMPLATE = `      {/* Breadcrumb Navigation - SEO Optimized */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs items={getBreadcrumbItems('PAGE_NAME')} />
      </div>

`;

/**
 * Template for adding related services
 */
export const RELATED_SERVICES_TEMPLATE = `      {/* Related Services - Internal Linking for SEO */}
      <SectionErrorBoundary name="RelatedServices">
        <RelatedServices 
          currentPage="PAGE_NAME"
          title={getRelatedServicesTitle('PAGE_NAME')}
        />
      </SectionErrorBoundary>

`;

/**
 * Instructions for manual updates
 */
export const UPDATE_INSTRUCTIONS = `
MANUAL UPDATE INSTRUCTIONS:

For each page in SERVICE_PAGES_TO_UPDATE:

1. Add imports at the top:
   ${SEO_IMPORTS}

2. Add breadcrumbs right after <main> or return statement:
   ${BREADCRUMB_TEMPLATE.replace('PAGE_NAME', 'your-page-name')}

3. Add related services before final CTA:
   ${RELATED_SERVICES_TEMPLATE.replace('PAGE_NAME', 'your-page-name')}

4. Optimize H1 in hero section:
   - Find hero-section.tsx in _components folder
   - Update H1 to include primary keyword
   - Format: "Hire [Primary Keyword] | [Service Name]"
   - Use getKeywordsForPage() to get keywords

Example H1 optimization:
  Before: "Build the Future with Next.js"
  After: "Hire Next.js Developer | Professional Next.js Development Services"
`;

console.log(UPDATE_INSTRUCTIONS);
