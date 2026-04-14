import Link from 'next/link';
import { getRelatedBlogPosts } from '@/app/lib/blog';

interface RelatedBlogPostsProps {
  /**
   * Blog category slug to match posts against. Must match the `category`
   * field in a post's frontmatter. Examples: 'web-development', 'ai',
   * 'shopify', 'google-ads'.
   */
  category: string;
  /**
   * Optional heading. Defaults to "Related Insights from our Blog".
   */
  heading?: string;
  /**
   * Max number of posts to show. Defaults to 3.
   */
  limit?: number;
}

/**
 * Server component that renders up to `limit` related blog posts for a
 * given category. Used on service pages to create crawlable internal links
 * between commercial content and informational content — important for
 * topical authority and SEO.
 */
export function RelatedBlogPosts({
  category,
  heading = 'Related Insights from Our Blog',
  limit = 3,
}: RelatedBlogPostsProps) {
  const posts = getRelatedBlogPosts(category, undefined, limit);

  if (posts.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white dark:bg-gray-950 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="h-40 bg-blue-100 dark:bg-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-30">
                  {post.title.substring(0, 2)}
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-2">
                  {post.category.replace(/-/g, ' ')} • {post.readTime} min read
                </p>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                  <Link href={`/pages/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/pages/blog/${post.slug}`}
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
