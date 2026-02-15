import type { Metadata } from 'next';
import prisma from '@/app/lib/prisma';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

interface BlogSlugLayoutProps {
  children: React.ReactNode;
}

interface BlogSlugMetadataParams {
  params: Promise<{ slug: string }>;
}

function normalizeBlogSlugForMetadata(rawSlug: string): string {
  const normalizedSlug = rawSlug
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  if (!normalizedSlug) {
    console.warn('[SEO] Invalid blog slug received for metadata canonicalization. Using fallback slug.', {
      rawSlug,
      fallbackSlug: 'blog-post',
    });
    return 'blog-post';
  }

  if (normalizedSlug !== rawSlug) {
    console.warn('[SEO] Blog slug normalized for metadata canonicalization.', {
      rawSlug,
      normalizedSlug,
    });
  }

  return normalizedSlug;
}

function humanizeSlug(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

/**
 * Dynamic metadata per blog post.
 * Uses DB post metadata when available and falls back gracefully when not.
 */
export async function generateMetadata({ params }: BlogSlugMetadataParams): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const normalizedSlug = normalizeBlogSlugForMetadata(rawSlug);

  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug: normalizedSlug },
      select: {
        title: true,
        excerpt: true,
        category: true,
        tags: true,
        imageUrl: true,
      },
    });

    if (post) {
      console.log('[SEO] Blog slug metadata generated from database', {
        requestedSlug: rawSlug,
        canonicalSlug: normalizedSlug,
      });

      return buildPageMetadata({
        title: `${post.title} | Enterprise Hero Blog`,
        description: post.excerpt,
        path: `/pages/blog/${normalizedSlug}`,
        keywords: [
          ...(post.tags || []),
          post.category,
          'enterprise hero blog',
          'digital growth insights',
        ].filter(Boolean) as string[],
        imagePath: post.imageUrl || '/logo.png',
      });
    }
  } catch (error) {
    console.error('[SEO] Failed to load blog post for metadata. Using fallback metadata.', {
      requestedSlug: rawSlug,
      canonicalSlug: normalizedSlug,
      error: error instanceof Error ? error.message : String(error),
    });
  }

  const readableTitle = humanizeSlug(normalizedSlug);
  return buildPageMetadata({
    title: `${readableTitle} | Enterprise Hero Blog`,
    description: `Read ${readableTitle} on the Enterprise Hero blog for practical engineering and growth insights.`,
    path: `/pages/blog/${normalizedSlug}`,
    keywords: [readableTitle, 'enterprise hero blog', 'software and growth insights'],
  });
}

export default function BlogSlugLayout({ children }: BlogSlugLayoutProps) {
  return children;
}
