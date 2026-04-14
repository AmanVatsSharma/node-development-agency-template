/**
 * @fileoverview
 * File-based blog system.
 *
 * Source: content/blog/*.md
 *
 * Each blog post is a Markdown file with YAML frontmatter:
 * ---
 * slug: my-post-slug
 * title: "My Post Title"
 * excerpt: "Short summary"
 * category: web-development
 * tags: [tag1, tag2]
 * publishedAt: "2026-04-14"
 * updatedAt: "2026-04-14"
 * readTime: 8
 * author: "Aman Kumar Sharma"
 * featured: false
 * image: "/images/blog/cover.jpg"
 * ---
 * # Body goes here in markdown
 */

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface BlogPostFrontmatter {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  author: string;
  authorTitle?: string;
  featured?: boolean;
  image?: string;
}

/** Blog post summary — same fields as frontmatter, no rendered body. */
export type BlogPostSummary = BlogPostFrontmatter;

export interface BlogPost extends BlogPostFrontmatter {
  contentMarkdown: string;
  contentHtml: string;
}

// ---------------------------------------------------------------------------
// Filesystem helpers
// ---------------------------------------------------------------------------

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const BLOG_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Category to service page URL mapping. Used for service CTA links
 * embedded inside blog posts.
 */
export const CATEGORY_TO_SERVICE_URL: Record<string, { label: string; url: string }> = {
  'web-development': { label: 'Web Development Services', url: '/pages/web-development' },
  'nextjs': { label: 'Next.js Development', url: '/pages/next-js-development' },
  'reactjs': { label: 'React Development', url: '/pages/reactjs-development' },
  'nodejs': { label: 'Node.js Development', url: '/pages/nodejs-development' },
  'ai': { label: 'AI Chatbot Development', url: '/pages/ai-chatbot-development' },
  'ai-chatbot': { label: 'AI Chatbot Development', url: '/pages/ai-chatbot-development' },
  'ai-voice': { label: 'AI Voice Agents', url: '/pages/ai-voice-agents' },
  'shopify': { label: 'Shopify Store Setup', url: '/pages/shopify-store-setup' },
  'ecommerce': { label: 'Shopify Store Setup', url: '/pages/shopify-store-setup' },
  'google-ads': { label: 'Google Ads Management', url: '/pages/google-ads-management' },
  'seo': { label: 'Free SEO Audit', url: '/pages/seo-audit' },
  'healthcare': { label: 'Healthcare Software Development', url: '/pages/healthcare-software-development' },
  'trading': { label: 'Trading Software', url: '/pages/trading-software' },
  'crm': { label: 'Enterprise CRM', url: '/pages/crm' },
  'whatsapp': { label: 'WhatsApp Business API', url: '/pages/whatsapp-business-api' },
  'marketing': { label: 'Google Ads Management', url: '/pages/google-ads-management' },
  'business': { label: 'All Services', url: '/pages/services' },
};

function getCategoryServiceLink(category: string) {
  return (
    CATEGORY_TO_SERVICE_URL[category] || {
      label: 'Our Services',
      url: '/pages/services',
    }
  );
}

export { getCategoryServiceLink };

function isValidSlug(slug: string): boolean {
  return BLOG_SLUG_PATTERN.test(slug);
}

function readBlogDirectorySafely(): string[] {
  try {
    if (!fs.existsSync(BLOG_DIR)) {
      console.warn('[Blog] content/blog directory does not exist', { BLOG_DIR });
      return [];
    }
    return fs
      .readdirSync(BLOG_DIR)
      .filter((filename) => filename.endsWith('.md'));
  } catch (error) {
    console.error('[Blog] Failed to read content/blog directory', {
      error: error instanceof Error ? error.message : String(error),
    });
    return [];
  }
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, '');
}

function parseFrontmatterFromFile(filename: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, filename);
  let rawFileContents: string;
  try {
    rawFileContents = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error('[Blog] Failed to read blog file', {
      filePath,
      error: error instanceof Error ? error.message : String(error),
    });
    return null;
  }

  let parsed;
  try {
    parsed = matter(rawFileContents);
  } catch (error) {
    console.error('[Blog] Failed to parse frontmatter', {
      filePath,
      error: error instanceof Error ? error.message : String(error),
    });
    return null;
  }

  const data = parsed.data as Partial<BlogPostFrontmatter>;
  const fallbackSlug = slugFromFilename(filename);
  const slug = (data.slug || fallbackSlug).toString().trim().toLowerCase();

  if (!isValidSlug(slug)) {
    console.warn('[Blog] Skipping file with invalid slug', { filename, slug });
    return null;
  }

  if (!data.title) {
    console.warn('[Blog] Skipping file with missing title', { filename });
    return null;
  }

  const post: BlogPost = {
    slug,
    title: String(data.title),
    excerpt: data.excerpt ? String(data.excerpt) : '',
    category: data.category ? String(data.category).toLowerCase() : 'general',
    tags: Array.isArray(data.tags) ? data.tags.map((t) => String(t)) : [],
    publishedAt: data.publishedAt ? String(data.publishedAt) : new Date().toISOString(),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    readTime: typeof data.readTime === 'number' ? data.readTime : 6,
    author: data.author ? String(data.author) : 'Aman Kumar Sharma',
    authorTitle: data.authorTitle ? String(data.authorTitle) : 'Founder, Vedpragya',
    featured: Boolean(data.featured),
    image: data.image ? String(data.image) : undefined,
    contentMarkdown: parsed.content,
    contentHtml: '', // filled later by renderMarkdownToHtml
  };

  return post;
}

// ---------------------------------------------------------------------------
// Markdown rendering (async — remark is ESM)
// ---------------------------------------------------------------------------

async function renderMarkdownToHtml(markdown: string): Promise<string> {
  try {
    const processed = await remark()
      .use(remarkGfm)
      .use(remarkHtml, { sanitize: false })
      .process(markdown);
    return String(processed);
  } catch (error) {
    console.error('[Blog] Failed to render markdown to HTML', {
      error: error instanceof Error ? error.message : String(error),
    });
    return `<p>${markdown.slice(0, 500)}…</p>`;
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Return all blog post summaries, sorted newest first. No HTML rendering.
 */
export function getAllBlogPosts(): BlogPostSummary[] {
  const filenames = readBlogDirectorySafely();
  const posts: BlogPost[] = [];

  for (const filename of filenames) {
    const post = parseFrontmatterFromFile(filename);
    if (post) posts.push(post);
  }

  const sortedPosts = posts.sort((a, b) => {
    const aTime = new Date(a.publishedAt).getTime();
    const bTime = new Date(b.publishedAt).getTime();
    return bTime - aTime;
  });

  console.log('[Blog] getAllBlogPosts', { count: sortedPosts.length });

  // Strip markdown/html for summary usage
  return sortedPosts.map((post) => {
    const {
      contentMarkdown: _contentMarkdown,
      contentHtml: _contentHtml,
      ...rest
    } = post;
    void _contentMarkdown;
    void _contentHtml;
    return rest;
  });
}

/**
 * Return slugs for generateStaticParams.
 */
export function getBlogPostSlugs(): string[] {
  return readBlogDirectorySafely()
    .map((filename) => slugFromFilename(filename))
    .filter((slug) => isValidSlug(slug));
}

/**
 * Return a single blog post by slug, with rendered HTML.
 * Returns null if not found.
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const normalizedSlug = slug.trim().toLowerCase();
  if (!isValidSlug(normalizedSlug)) {
    console.warn('[Blog] getBlogPost received invalid slug', { slug });
    return null;
  }

  const filename = `${normalizedSlug}.md`;
  const post = parseFrontmatterFromFile(filename);
  if (!post) return null;

  post.contentHtml = await renderMarkdownToHtml(post.contentMarkdown);
  return post;
}

/**
 * Return up to `limit` related blog posts in the same category,
 * excluding the given slug.
 */
export function getRelatedBlogPosts(
  category: string,
  excludeSlug?: string,
  limit: number = 3,
): BlogPostSummary[] {
  const normalizedCategory = category.toLowerCase();
  const allPosts = getAllBlogPosts();

  const sameCategory = allPosts.filter(
    (post) => post.category === normalizedCategory && post.slug !== excludeSlug,
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  // Pad with general posts if not enough in category
  const others = allPosts.filter(
    (post) => post.category !== normalizedCategory && post.slug !== excludeSlug,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

/**
 * Return all unique categories (for filter UIs / sitemap, etc.)
 */
export function getAllBlogCategories(): string[] {
  const allPosts = getAllBlogPosts();
  const categorySet = new Set<string>();
  allPosts.forEach((post) => categorySet.add(post.category));
  return Array.from(categorySet).sort();
}
