/**
 * @fileoverview Batch Update Script for SEO
 * @description Helper script to update remaining pages with SEO optimizations
 * @version 1.0.0
 * 
 * This script provides the exact code patterns needed to update each page.
 * Copy and paste these patterns into each page file.
 */

export const REMAINING_PAGES = [
  'local-business-google-ads',
  'performance-max-campaigns',
  'google-ads-audit-strategy',
  'youtube-advertising-management',
  'business-website',
  'website-development',
  'web-development-mumbai',
  'website-services',
  'shopify-product-page-customization',
  'shopify-store-setup',
  'landing-page-optimization',
  'whatsapp-business-api',
  'ai-voice-agents',
  'healthcare-software-development',
  'trading-software',
  'nse-mcx-live-market-data',
  'google-ads-ecosystem',
];

export const IMPORTS_TO_ADD = `import { Breadcrumbs } from '@/app/components/SEO/Breadcrumbs';
import { RelatedServices } from '@/app/components/SEO/RelatedServices';
import { getBreadcrumbItems, getRelatedServicesTitle } from '@/app/lib/seo/page-helpers';`;

export const BREADCRUMB_CODE = (pageName: string) => `      {/* Breadcrumb Navigation - SEO Optimized */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs items={getBreadcrumbItems('${pageName}')} />
      </div>

`;

export const RELATED_SERVICES_CODE = (pageName: string) => `      {/* Related Services - Internal Linking for SEO */}
      <SectionErrorBoundary name="RelatedServices">
        <RelatedServices 
          currentPage="${pageName}"
          title={getRelatedServicesTitle('${pageName}')}
        />
      </SectionErrorBoundary>

`;

console.log('Batch Update Script Ready');
console.log('Use these patterns to update remaining pages');
