import { writeFileSync } from 'fs';
import { blogPosts } from '../app/data/blogPosts';

// Base URL of the website
const SITE_URL = 'https://enterprisehero.com';

// Define your static pages here
// NOTE: Admin pages and login are intentionally excluded from sitemap for SEO
const staticPages = [
  // Homepage - Highest Priority
  {
    url: '/',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 1.0
  },
  
  // Main Navigation Pages
  {
    url: '/pages/about',
    lastMod: new Date().toISOString(),
    changeFreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/pages/services',
    lastMod: new Date().toISOString(),
    changeFreq: 'monthly',
    priority: 0.9
  },
  {
    url: '/pages/portfolio',
    lastMod: new Date().toISOString(), 
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/blog',
    lastMod: new Date().toISOString(),
    changeFreq: 'daily',
    priority: 0.9
  },
  {
    url: '/pages/resources',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/pages/contact',
    lastMod: new Date().toISOString(),
    changeFreq: 'monthly',
    priority: 0.7
  },

  // Google Ads Services (High Priority - Main Services)
  {
    url: '/pages/google-ads-management',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/google-ads-ecosystem',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/b2b-lead-generation-ads',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/ecommerce-google-ads-optimization',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/enterprise-google-ads-management',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/google-ads-audit-strategy',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/local-business-google-ads',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/performance-max-campaigns',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/youtube-advertising-management',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },

  // SEO Services
  {
    url: '/pages/seo-audit',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/landing-page-optimization',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },

  // Web Development Services (High Priority)
  {
    url: '/pages/web-development',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/web-development-mumbai',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/website-development',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/website-services',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/business-website',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/next-js-development',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/reactjs-development',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },

  // Shopify Services
  {
    url: '/pages/shopify-headless-migration',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/shopify-product-page-customization',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/shopify-store-setup',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },

  // Specialized Services
  {
    url: '/pages/ai-chatbot-development',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/ai-voice-agents',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/crm',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/healthcare-software-development',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/nse-mcx-live-market-data',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/trading-software',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/pages/whatsapp-business-api',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 0.9
  },

  // Legal Pages (Lower Priority)
  {
    url: '/pages/legal/terms-of-service',
    lastMod: new Date().toISOString(),
    changeFreq: 'yearly',
    priority: 0.5
  },
  {
    url: '/pages/legal/privacy-policy',
    lastMod: new Date().toISOString(),
    changeFreq: 'yearly',
    priority: 0.5
  },
  {
    url: '/pages/legal/cancellations-refunds',
    lastMod: new Date().toISOString(),
    changeFreq: 'yearly',
    priority: 0.5
  },
  {
    url: '/pages/legal/shipping-policy',
    lastMod: new Date().toISOString(),
    changeFreq: 'yearly',
    priority: 0.5
  },
  {
    url: '/pages/legal/company-info',
    lastMod: new Date().toISOString(),
    changeFreq: 'yearly',
    priority: 0.5
  },
  
  // Admin pages are NOT included for SEO purposes
  // /pages/admin/* - excluded
  // /login - excluded
];

// Function to generate a sitemap entry
const generateSitemapEntry = (
  url: string, 
  lastMod: string, 
  changeFreq: string, 
  priority: number
) => {
  return `
    <url>
      <loc>${SITE_URL}${url}</loc>
      <lastmod>${lastMod}</lastmod>
      <changefreq>${changeFreq}</changefreq>
      <priority>${priority}</priority>
    </url>
  `;
};

/**
 * Generates an XML sitemap for the website
 * @param {string} outputPath - The path where the sitemap.xml file will be written
 */
export const generateSitemap = (outputPath: string = './public/sitemap.xml') => {
  // Generate entries for static pages
  const staticPageEntries = staticPages.map(page => 
    generateSitemapEntry(page.url, page.lastMod, page.changeFreq, page.priority)
  );
  
  // Generate entries for dynamic blog posts
  const blogPostEntries = blogPosts.map(post => 
    generateSitemapEntry(
      `/pages/blog/${post.slug}`, 
      new Date(post.publishedAt).toISOString(), 
      'monthly', 
      0.7
    )
  );
  
  // Combine all entries
  const allEntries = [...staticPageEntries, ...blogPostEntries];
  
  // Create the sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allEntries.join('')}
</urlset>`;
  
  // Write the sitemap to a file
  try {
    writeFileSync(outputPath, sitemap);
    console.log(`Sitemap generated at ${outputPath}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

/**
 * Function to generate robots.txt file
 * @param {string} outputPath - The path where the robots.txt file will be written
 */
export const generateRobotsTxt = (outputPath: string = './public/robots.txt') => {
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml
`;

  try {
    writeFileSync(outputPath, robotsTxt);
    console.log(`robots.txt generated at ${outputPath}`);
  } catch (error) {
    console.error('Error generating robots.txt:', error);
  }
};

// Example usage:
// If you want to generate the sitemap and robots.txt during build:
// 
// import { generateSitemap, generateRobotsTxt } from '../utils/sitemap';
//
// generateSitemap();
// generateRobotsTxt(); 