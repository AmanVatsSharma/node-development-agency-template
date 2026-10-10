import type { BlogPostSummary } from '@/app/lib/blog';

/**
 * Shape of a BlogPost database row (with its author relation) as consumed by
 * the public blog. Everything here is pure so it can be unit-tested without
 * Prisma or the filesystem.
 */
export interface DbBlogRow {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: Date | string;
  updatedAt: Date | string;
  readTime: number;
  category: string;
  tags: string[];
  imageUrl: string;
  featured: boolean;
  author: { name: string; title: string } | null;
}

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DEFAULT_AUTHOR = 'Aman Kumar Sharma';
const DEFAULT_AUTHOR_TITLE = 'Founder, Vedpragya';

/** True when the content starts with block-level HTML (seeded/imported posts). */
export function looksLikeHtml(content: string): boolean {
  return /^\s*<(?:h[1-6]|p|ul|ol|div|section|article|blockquote|table|figure)\b/i.test(content);
}

/**
 * Coerce an unknown Prisma result into a DbBlogRow, or null when it does not
 * look like one. Guards against the mock Prisma client used during Vercel
 * builds, which resolves to `{}` instead of an array/row.
 */
export function normalizeDbRow(raw: unknown): DbBlogRow | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as Record<string, unknown>;
  if (typeof r.slug !== 'string' || typeof r.title !== 'string' || typeof r.content !== 'string') {
    return null;
  }
  const author = r.author && typeof r.author === 'object' ? (r.author as Record<string, unknown>) : null;
  return {
    slug: r.slug,
    title: r.title,
    excerpt: typeof r.excerpt === 'string' ? r.excerpt : '',
    content: r.content,
    publishedAt: r.publishedAt as Date | string,
    updatedAt: (r.updatedAt ?? r.publishedAt) as Date | string,
    readTime: typeof r.readTime === 'number' ? r.readTime : 6,
    category: typeof r.category === 'string' ? r.category : 'general',
    tags: Array.isArray(r.tags) ? r.tags.map(String) : [],
    imageUrl: typeof r.imageUrl === 'string' ? r.imageUrl : '',
    featured: Boolean(r.featured),
    author:
      author && typeof author.name === 'string'
        ? { name: author.name, title: typeof author.title === 'string' ? author.title : '' }
        : null,
  };
}

export function normalizeDbRows(raw: unknown): DbBlogRow[] {
  if (!Array.isArray(raw)) return [];
  return raw.map(normalizeDbRow).filter((row): row is DbBlogRow => row !== null);
}

/** Map a database row to the public blog summary shape; null if unusable. */
export function dbRowToSummary(row: DbBlogRow): BlogPostSummary | null {
  const slug = row.slug.trim().toLowerCase();
  const published = new Date(row.publishedAt);
  if (!SLUG_PATTERN.test(slug) || Number.isNaN(published.getTime())) return null;

  const updated = new Date(row.updatedAt);
  const image = row.imageUrl.trim();

  return {
    slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category.trim().toLowerCase() || 'general',
    tags: row.tags,
    publishedAt: published.toISOString(),
    updatedAt: Number.isNaN(updated.getTime()) ? undefined : updated.toISOString(),
    readTime: row.readTime > 0 ? row.readTime : 6,
    author: row.author?.name || DEFAULT_AUTHOR,
    authorTitle: row.author?.title || DEFAULT_AUTHOR_TITLE,
    featured: row.featured,
    image: image || undefined,
  };
}

/** Union of file and database posts by slug (database wins), newest first. */
export function mergeBlogSummaries(
  filePosts: BlogPostSummary[],
  dbPosts: BlogPostSummary[],
): BlogPostSummary[] {
  const bySlug = new Map<string, BlogPostSummary>();
  for (const post of filePosts) bySlug.set(post.slug, post);
  for (const post of dbPosts) bySlug.set(post.slug, post);
  return Array.from(bySlug.values()).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
