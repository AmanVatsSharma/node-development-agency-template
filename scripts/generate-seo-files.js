// This script generates sitemap.xml and robots.txt files for SEO
// It should be run during the build process

const fs = require('fs');
const path = require('path');

// Base URL of the website
const SITE_URL = 'https://enterprisehero.com';

// Import blog posts data 
// Note: In a real app, you might need to fetch this data from an API or database
const blogPosts = [
  {
    slug: 'microservices-with-nodejs',
    publishedAt: '2023-06-15',
  },
  {
    slug: 'threejs-animation-techniques',
    publishedAt: '2023-05-22',
  },
  {
    slug: 'react-state-management',
    publishedAt: '2023-04-10',
  },
];

// Define your static pages here
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
];

// Function to generate a sitemap entry
const generateSitemapEntry = (url, lastMod, changeFreq, priority) => {
  return `
    <url>
      <loc>${SITE_URL}${url}</loc>
      <lastmod>${lastMod}</lastmod>
      <changefreq>${changeFreq}</changefreq>
      <priority>${priority}</priority>
    </url>
  `;
};

// Generate sitemap.xml
const generateSitemap = () => {
  const publicDir = path.join(process.cwd(), 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

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
    fs.writeFileSync(sitemapPath, sitemap);
    console.log(`✅ Sitemap generated at ${sitemapPath}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const publicDir = path.join(process.cwd(), 'public');
  const robotsPath = path.join(publicDir, 'robots.txt');

  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml
`;

  try {
    fs.writeFileSync(robotsPath, robotsTxt);
    console.log(`✅ robots.txt generated at ${robotsPath}`);
  } catch (error) {
    console.error('❌ Error generating robots.txt:', error);
  }
};

// Run the generators
console.log('🔍 Generating SEO files...');
generateSitemap();
generateRobotsTxt();
console.log('✨ SEO files generation complete!'); 