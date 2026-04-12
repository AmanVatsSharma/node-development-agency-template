import type { Metadata } from 'next';
import prisma from '@/app/lib/prisma';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { ArticleStructuredData, BreadcrumbStructuredData } from '@/app/components/SEO/StructuredData';
import { companyProfile } from '@/app/data/companyProfile';
import { SEO_SITE_URL, toAbsoluteSeoUrl } from '@/app/lib/seo/constants';

interface BlogSlugLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
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
        title: `${post.title} | Vedpragya Blog`,
        description: post.excerpt,
        path: `/pages/blog/${normalizedSlug}`,
        keywords: [
          ...(post.tags || []),
          post.category,
          'vedpragya blog',
          'software development insights',
          'digital growth insights',
        ].filter(Boolean) as string[],
        imagePath: post.imageUrl || '/logo.png',
        ogType: 'article',
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
    title: `${readableTitle} | Vedpragya Blog`,
    description: `Read ${readableTitle} on the Vedpragya blog for practical software engineering and growth insights.`,
    path: `/pages/blog/${normalizedSlug}`,
    keywords: [readableTitle, 'vedpragya blog', 'software development insights', 'growth insights'],
  });
}

export default async function BlogSlugLayout({ children, params }: BlogSlugLayoutProps) {
  const { slug: rawSlug } = await params;
  const normalizedSlug = normalizeBlogSlugForMetadata(rawSlug);

  let articleData: {
    headline: string;
    image: string;
    datePublished: string;
    dateModified: string;
    description: string;
    url: string;
  } | null = null;

  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug: normalizedSlug },
      select: {
        title: true,
        excerpt: true,
        imageUrl: true,
        publishedAt: true,
        updatedAt: true,
      },
    });

    if (post) {
      articleData = {
        headline: post.title,
        image: post.imageUrl ? toAbsoluteSeoUrl(post.imageUrl) : `${SEO_SITE_URL}/logo.png`,
        datePublished: post.publishedAt.toISOString(),
        dateModified: post.updatedAt.toISOString(),
        description: post.excerpt || '',
        url: toAbsoluteSeoUrl(`/pages/blog/${normalizedSlug}`),
      };
    }
  } catch {
    // Non-fatal: article schema is a bonus, not a requirement
  }

  const readableTitle = humanizeSlug(normalizedSlug);

  return (
    <>
      <BreadcrumbStructuredData items={[
        { name: 'Home', url: SEO_SITE_URL },
        { name: 'Blog', url: `${SEO_SITE_URL}/pages/blog` },
        { name: articleData?.headline || readableTitle, url: toAbsoluteSeoUrl(`/pages/blog/${normalizedSlug}`) },
      ]} />
      {articleData && (
        <ArticleStructuredData
          headline={articleData.headline}
          image={articleData.image}
          datePublished={articleData.datePublished}
          dateModified={articleData.dateModified}
          description={articleData.description}
          url={articleData.url}
          author={{ name: companyProfile.founder?.name || companyProfile.brandName, url: SEO_SITE_URL }}
          publisher={{ name: companyProfile.legalName, logo: `${SEO_SITE_URL}/logo.png` }}
        />
      )}
      {children}
    </>
  );
}
