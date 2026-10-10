/**
 * @fileoverview
 * File-based blog system.
 *
 * Source: content/blog/*.md merged with the BlogPost table (database wins on slug).
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
import { cache } from 'react';
import { fetchDbBlogRow, fetchDbBlogSummaries } from '@/app/lib/blogDb';
import { dbRowToSummary, looksLikeHtml, mergeBlogSummaries } from '@/app/lib/blogMerge';

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
  /**
   * When true, the post is excluded from all listings, the sitemap, and
   * `generateStaticParams`. The slug still returns 404 if visited directly.
   * Used to temporarily unpublish content without deleting the file.
   */
  draft?: boolean;
  /**
   * When true, the post is excluded from listings and the sitemap but its
   * page still renders. Use this for posts you want reachable by direct URL
   * but hidden from navigation. (Currently treated the same as `draft` for
   * the public surface — only direct file access differs.)
   */
  unlisted?: boolean;
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
  'crm': { label: 'Enterprise CRM', url: '/pages/crm' },
  'whatsapp': { label: 'WhatsApp Business API', url: '/pages/whatsapp-business-api' },
  'marketing': { label: 'Google Ads Management', url: '/pages/google-ads-management' },
  'saas': { label: 'SaaS Website Design', url: '/pages/saas-website-design' },
  'saas-website-design': { label: 'SaaS Website Design', url: '/pages/saas-website-design' },
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
    draft: Boolean(data.draft),
    unlisted: Boolean(data.unlisted),
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
//
// Posts come from two sources that are merged by slug:
//   1. content/blog/*.md  (git-versioned files)
//   2. the BlogPost table (written by the admin blog editor)
// When both define a slug the database copy wins. If the database is
// unreachable the site serves the file-based posts only.
// ---------------------------------------------------------------------------

/**
 * File-based summaries only (no database), newest first.
 * Excludes posts marked `draft: true` or `unlisted: true` in frontmatter.
 */
function getAllFileBlogPosts(): BlogPostSummary[] {
  const filenames = readBlogDirectorySafely();
  const posts: BlogPost[] = [];

  for (const filename of filenames) {
    const post = parseFrontmatterFromFile(filename);
    if (post) posts.push(post);
  }

  const visiblePosts = posts.filter((p) => !p.draft && !p.unlisted);

  const sortedPosts = visiblePosts.sort((a, b) => {
    const aTime = new Date(a.publishedAt).getTime();
    const bTime = new Date(b.publishedAt).getTime();
    return bTime - aTime;
  });

  console.log('[Blog] getAllFileBlogPosts', {
    total: posts.length,
    visible: sortedPosts.length,
    hidden: posts.length - sortedPosts.length,
  });

  // Strip markdown/html for summary usage
  return sortedPosts.map((post) => {
    const {
      contentMarkdown: _contentMarkdown,
      contentHtml: _contentHtml,
      draft: _draft,
      unlisted: _unlisted,
      ...rest
    } = post;
    void _contentMarkdown;
    void _contentHtml;
    void _draft;
    void _unlisted;
    return rest;
  });
}

/**
 * All public post summaries (files + database), newest first.
 * Memoized per request with React's cache(): every route in this app renders
 * dynamically (the root layout reads headers), so without this the list,
 * related posts and sitemap would each hit the database separately.
 */
export const getAllBlogPosts = cache(async (): Promise<BlogPostSummary[]> => {
  const filePosts = getAllFileBlogPosts();
  const dbPosts = await fetchDbBlogSummaries();
  const merged = mergeBlogSummaries(filePosts, dbPosts);
  console.log('[Blog] getAllBlogPosts (merged)', {
    files: filePosts.length,
    database: dbPosts.length,
    merged: merged.length,
  });
  return merged;
});

/** Slugs for generateStaticParams and the sitemap (files + database). */
export async function getBlogPostSlugs(): Promise<string[]> {
  return (await getAllBlogPosts()).map((post) => post.slug);
}

/**
 * Return a single blog post by slug, with rendered HTML.
 * Database copy wins over the file copy. Returns null if not found; draft and
 * unlisted file posts return null too.
 * Memoized per request with React's cache(): metadata, structured data and the
 * page all ask for the same post and should share one database lookup.
 */
export const getBlogPost = cache(async (slug: string): Promise<BlogPost | null> => {
  const normalizedSlug = slug.trim().toLowerCase();
  if (!isValidSlug(normalizedSlug)) {
    console.warn('[Blog] getBlogPost received invalid slug', { slug });
    return null;
  }

  const dbRow = await fetchDbBlogRow(normalizedSlug);
  const dbSummary = dbRow ? dbRowToSummary(dbRow) : null;
  if (dbRow && dbSummary) {
    return {
      ...dbSummary,
      contentMarkdown: dbRow.content,
      contentHtml: looksLikeHtml(dbRow.content)
        ? dbRow.content
        : await renderMarkdownToHtml(dbRow.content),
    };
  }

  const filename = `${normalizedSlug}.md`;
  const post = parseFrontmatterFromFile(filename);
  if (!post) return null;
  if (post.draft || post.unlisted) {
    console.log('[Blog] getBlogPost — post is hidden', {
      slug: normalizedSlug,
      draft: post.draft,
      unlisted: post.unlisted,
    });
    return null;
  }

  post.contentHtml = await renderMarkdownToHtml(post.contentMarkdown);
  return post;
});

/**
 * Return up to `limit` related blog posts in the same category,
 * excluding the given slug.
 */
export async function getRelatedBlogPosts(
  category: string,
  excludeSlug?: string,
  limit: number = 3,
): Promise<BlogPostSummary[]> {
  const normalizedCategory = category.toLowerCase();
  const allPosts = await getAllBlogPosts();

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

/** All unique categories (for filter UIs). */
export async function getAllBlogCategories(): Promise<string[]> {
  const allPosts = await getAllBlogPosts();
  const categorySet = new Set<string>();
  allPosts.forEach((post) => categorySet.add(post.category));
  return Array.from(categorySet).sort();
}
