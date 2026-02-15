import type { Metadata } from 'next';
import prisma from '@/app/lib/prisma';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

interface BlogSlugLayoutProps {
  children: React.ReactNode;
}

interface BlogSlugMetadataParams {
  params: Promise<{ slug: string }>;
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
  const { slug } = await params;

  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug },
      select: {
        title: true,
        excerpt: true,
        category: true,
        tags: true,
        imageUrl: true,
      },
    });

    if (post) {
      console.log('[SEO] Blog slug metadata generated from database', { slug });

      return buildPageMetadata({
        title: `${post.title} | Enterprise Hero Blog`,
        description: post.excerpt,
        path: `/pages/blog/${slug}`,
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
      slug,
      error: error instanceof Error ? error.message : String(error),
    });
  }

  const readableTitle = humanizeSlug(slug);
  return buildPageMetadata({
    title: `${readableTitle} | Enterprise Hero Blog`,
    description: `Read ${readableTitle} on the Enterprise Hero blog for practical engineering and growth insights.`,
    path: `/pages/blog/${slug}`,
    keywords: [readableTitle, 'enterprise hero blog', 'software and growth insights'],
  });
}

export default function BlogSlugLayout({ children }: BlogSlugLayoutProps) {
  return children;
}
