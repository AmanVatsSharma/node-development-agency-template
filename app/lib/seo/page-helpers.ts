/**
 * @fileoverview Page Helper Utilities for SEO
 * @description Helper functions for page names and display names
 * @version 1.0.0
 */

/**
 * Converts page name to display name
 */
export function getPageDisplayName(pageName: string): string {
  return pageName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Gets breadcrumb items for a page
 */
export function getBreadcrumbItems(pageName: string): Array<{ name: string; url: string }> {
  const displayName = getPageDisplayName(pageName);
  
  // Check if it's a sub-service (has parent)
  const parentPages: Record<string, string> = {
    'b2b-lead-generation-ads': 'google-ads-management',
    'enterprise-google-ads-management': 'google-ads-management',
    'ecommerce-google-ads-optimization': 'google-ads-management',
    'local-business-google-ads': 'google-ads-management',
    'performance-max-campaigns': 'google-ads-management',
    'google-ads-audit-strategy': 'google-ads-management',
    'next-js-development': 'web-development',
    'reactjs-development': 'web-development',
    'business-website': 'web-development',
    'shopify-product-page-customization': 'shopify-headless-migration',
  };
  
  const parent = parentPages[pageName];
  
  if (parent) {
    return [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: getPageDisplayName(parent), url: `/pages/${parent}` },
      { name: displayName, url: `/pages/${pageName}` },
    ];
  }
  
  return [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/pages/services' },
    { name: displayName, url: `/pages/${pageName}` },
  ];
}

/**
 * Gets related services title for a page
 */
export function getRelatedServicesTitle(pageName: string): string {
  const titles: Record<string, string> = {
    'google-ads-management': 'Related Google Ads & Marketing Services',
    'b2b-lead-generation-ads': 'Related B2B Marketing Services',
    'enterprise-google-ads-management': 'Related Enterprise Marketing Services',
    'ecommerce-google-ads-optimization': 'Related Ecommerce Marketing Services',
    'web-development': 'Related Web Development Services',
    'next-js-development': 'Related Next.js & React Services',
    'reactjs-development': 'Related React & Frontend Services',
    'shopify-headless-migration': 'Related Shopify & Ecommerce Services',
    'ai-chatbot-development': 'Related AI & Automation Services',
    'crm': 'Related CRM & Business Software Services',
  };
  
  return titles[pageName] || 'Related Services';
}
