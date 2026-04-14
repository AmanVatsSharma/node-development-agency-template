import Link from 'next/link';
import { getAllBlogPosts, getAllBlogCategories } from '@/app/lib/blog';

/**
 * Blog listing page.
 *
 * File-based: reads all posts from content/blog/*.md at build/request time.
 * Server-rendered — every post title, excerpt, and link is in the HTML
 * that Googlebot sees on the first crawl.
 */
export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getAllBlogCategories();

  const featuredPosts = posts.filter((p) => p.featured).slice(0, 3);
  const regularPosts = posts.filter((p) => !featuredPosts.includes(p));

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-blue-300 mb-3">Vedpragya Blog</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Insights on Web Development, AI, Shopify &amp; Google Ads for Indian Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Practical, data-backed guides from the team building software for businesses across India, UAE, and the US.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      {categories.length > 0 && (
        <section className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-16 z-10">
          <div className="container mx-auto px-4 py-4">
            <nav
              aria-label="Blog categories"
              className="flex flex-wrap gap-2 justify-center"
            >
              <Link
                href="/pages/blog"
                className="px-4 py-1.5 text-sm font-medium rounded-full bg-blue-600 text-white"
              >
                All Posts
              </Link>
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-1.5 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 capitalize"
                >
                  {category.replace(/-/g, ' ')}
                </span>
              ))}
            </nav>
          </div>
        </section>
      )}

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white dark:bg-gray-950 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="h-48 bg-blue-100 dark:bg-gray-800 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold opacity-30">
                      {post.title.substring(0, 2)}
                    </div>
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-yellow-400 text-yellow-900 text-xs font-semibold uppercase">
                      Featured
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-2">
                      {post.category.replace(/-/g, ' ')} • {post.readTime} min read
                    </p>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Link href={`/pages/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
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
      )}

      {/* All Posts */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            All Articles
          </h2>
          {regularPosts.length === 0 && featuredPosts.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400 text-center py-8">
              No blog posts published yet. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-800"
                >
                  <div className="h-40 bg-blue-100 dark:bg-gray-800 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-70" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-30">
                      {post.title.substring(0, 2)}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-2">
                      {post.category.replace(/-/g, ' ')} • {post.readTime} min read
                    </p>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Link href={`/pages/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
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
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Get a free consultation with the Vedpragya team and see how we can help.
          </p>
          <Link
            href="/pages/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-medium transition"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
