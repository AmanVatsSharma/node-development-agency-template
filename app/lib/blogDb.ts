import prisma from '@/app/lib/prisma';
import { dbRowToSummary, normalizeDbRow, normalizeDbRows, type DbBlogRow } from '@/app/lib/blogMerge';
import { withTimeout } from '@/app/lib/withTimeout';
import type { BlogPostSummary } from '@/app/lib/blog';

// A cold Neon compute + Prisma engine boot measured ~4.3s; warm queries ~0.6s.
// 8s leaves headroom for cold starts while still bounding a hung database.
const DB_TIMEOUT_MS = 8000;
const AUTHOR_INCLUDE = { select: { name: true, title: true } } as const;

function logDbFailure(action: string, error: unknown) {
  console.error(`[Blog] Database ${action} failed; serving file-based posts only`, {
    error: error instanceof Error ? error.message : String(error),
  });
}

/** All database posts as public summaries. Never throws; [] on any failure. */
export async function fetchDbBlogSummaries(): Promise<BlogPostSummary[]> {
  try {
    const raw = await withTimeout(
      prisma.blogPost.findMany({ include: { author: AUTHOR_INCLUDE } }),
      DB_TIMEOUT_MS,
      'blogPost.findMany',
    );
    return normalizeDbRows(raw)
      .map(dbRowToSummary)
      .filter((post): post is BlogPostSummary => post !== null);
  } catch (error) {
    logDbFailure('list', error);
    return [];
  }
}

/** One database post by slug (with raw content). Never throws; null on failure. */
export async function fetchDbBlogRow(slug: string): Promise<DbBlogRow | null> {
  try {
    const raw = await withTimeout(
      prisma.blogPost.findUnique({ where: { slug }, include: { author: AUTHOR_INCLUDE } }),
      DB_TIMEOUT_MS,
      'blogPost.findUnique',
    );
    return normalizeDbRow(raw);
  } catch (error) {
    logDbFailure('lookup', error);
    return null;
  }
}
