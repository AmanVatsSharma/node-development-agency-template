import { writeFileSync } from 'fs';
import { blogPosts } from '../app/data/blogPosts';

// Base URL of the website
const SITE_URL = 'https://enterprisehero.com';

// Define your static pages here
// NOTE: Admin pages and login are intentionally excluded from sitemap for SEO
const staticPages = [
  {
    url: '/',
    lastMod: new Date().toISOString(),
    changeFreq: 'weekly',
    priority: 1.0
  },
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
    priority: 0.8
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