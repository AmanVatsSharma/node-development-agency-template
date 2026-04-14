import Link from 'next/link';
import type { ReactElement } from 'react';

/**
 * Shared city landing page component.
 *
 * Used by city-specific web development service pages (Delhi, Bangalore,
 * Pune, etc.) so we can SEO-target "web development company [city]" keywords
 * without duplicating a huge component tree per city.
 *
 * Each city page renders <CityLandingPage {...config} /> with city-specific
 * H1, body copy, neighbourhoods, and testimonial.
 */

export interface CityLandingPageProps {
  /** Full display name of the city, e.g. "Delhi NCR" */
  cityName: string;
  /** Short name for URL + copy, e.g. "Delhi" */
  citySlug: string;
  /** State or region, e.g. "Delhi NCR", "Karnataka" */
  region: string;
  /** Short intro tagline */
  tagline: string;
  /** Local neighbourhoods / business districts to reference */
  neighborhoods: string[];
  /** Local testimonial — one-liner + author name + role */
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export function CityLandingPage({
  cityName,
  citySlug,
  region,
  tagline,
  neighborhoods,
  testimonial,
}: CityLandingPageProps): ReactElement {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="uppercase tracking-widest text-sm text-blue-300 mb-4">
              {cityName} · {region}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Web Development Company in {cityName}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              {tagline}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/pages/contact"
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition"
              >
                Get a Free Proposal
              </Link>
              <Link
                href="#pricing"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition backdrop-blur border border-white/20"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Custom Websites &amp; Web Apps for {cityName} Businesses
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Vedpragya helps {cityName} businesses ship fast, SEO-optimized, conversion-focused
            websites. From small business brochures to enterprise web applications, our team
            delivers production-grade builds using <strong>Next.js, React, Node.js,</strong> and
            modern cloud infrastructure.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            We work with companies across {cityName} — including {neighborhoods.join(', ')} — on
            custom websites, e-commerce platforms, SaaS applications, and AI-powered tools. Our
            delivery is fully remote, fast, and backed by a Haryana-based agency registered as
            Vedpragya Bharat Private Limited.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Whether you&apos;re a D2C startup, a professional services firm, a SaaS company, or an
            established enterprise, we bring the same engineering discipline and design quality to
            every project.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Web Development Services We Offer in {cityName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Custom Business Websites',
                body: `Fast, mobile-first business websites for ${cityName} companies — built with Next.js and Tailwind CSS.`,
              },
              {
                title: 'E-commerce Development',
                body: 'Shopify, headless Shopify, and WooCommerce stores with Razorpay/Cashfree checkout and GST support.',
              },
              {
                title: 'SaaS & Web Applications',
                body: 'Multi-tenant SaaS platforms with auth, billing, dashboards, and admin panels.',
              },
              {
                title: 'Landing Pages for Ads',
                body: 'High-converting landing pages for Google Ads and Meta Ads campaigns. 95+ Lighthouse scores.',
              },
              {
                title: 'SEO-First Websites',
                body: 'Server-side rendering, schema markup, sitemap, and Core Web Vitals optimization baked in.',
              },
              {
                title: 'AI-Powered Tools',
                body: `AI chatbots, voice agents, and LLM apps integrated into your ${cityName} business website.`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white dark:bg-gray-950 shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Transparent Pricing for {cityName} Businesses
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Fixed-scope quotes. INR pricing. No surprises.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '₹49,000',
                features: [
                  '5-page business site',
                  'Mobile responsive',
                  'Contact form',
                  'Basic SEO',
                  '2 weeks delivery',
                ],
              },
              {
                name: 'Growth',
                price: '₹1,49,000',
                features: [
                  'Up to 12 pages',
                  'Custom Figma design',
                  'CMS integration',
                  'Blog + SEO setup',
                  'Analytics + Google Ads ready',
                  '4–5 weeks delivery',
                ],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: '₹3,49,000+',
                features: [
                  'Custom web app / SaaS',
                  'User accounts + billing',
                  'Admin dashboard',
                  'Integrations',
                  'Performance optimization',
                  '8–14 weeks delivery',
                ],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 ${
                  tier.highlighted
                    ? 'bg-blue-600 text-white shadow-2xl md:scale-105'
                    : 'bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800'
                }`}
              >
                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <p className="text-4xl font-bold mb-6">{tier.price}</p>
                <ul className="space-y-2 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span className={tier.highlighted ? 'text-blue-50' : 'text-gray-600 dark:text-gray-300'}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pages/contact"
                  className={`block text-center px-6 py-3 rounded-full font-semibold transition ${
                    tier.highlighted
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <figure className="bg-white dark:bg-gray-950 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800 text-center">
            <blockquote className="text-2xl italic text-gray-800 dark:text-gray-200 mb-6">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: `Do you offer web development services in ${cityName}?`,
                a: `Yes — we work with ${cityName} businesses across ${neighborhoods.slice(0, 2).join(', ')} and all other areas, fully remote.`,
              },
              {
                q: `How much does a website cost for a ${cityName} business?`,
                a: `Our ${cityName} packages start at ₹49,000 for business websites and scale up to ₹10,00,000+ for custom web applications.`,
              },
              {
                q: `Can you work remotely with clients in ${cityName}?`,
                a: `Yes. We deliver entirely remote with video calls, shared project tools, and fast communication. Most of our ${cityName} clients never need an in-person meeting.`,
              },
              {
                q: `What technology do you use?`,
                a: `Next.js, React, Node.js, TypeScript, PostgreSQL, and modern cloud infrastructure (AWS, Vercel). All production code is TypeScript by default.`,
              },
              {
                q: `How long does a ${cityName} website take to build?`,
                a: `Typical timelines: 2 weeks for simple business websites, 4–5 weeks for custom designs, 8–14 weeks for web applications.`,
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800"
              >
                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-gray-600 dark:text-gray-300">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Website in {cityName}?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book a free 30-minute consultation. We&apos;ll review your requirements and send a
            written proposal with scope, timeline, and price.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/pages/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-semibold transition"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/pages/web-development"
              className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition border border-white/30"
            >
              See All Web Dev Services
            </Link>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            Canonical URL: <span className="font-mono">/pages/web-development-{citySlug}</span>
          </p>
        </div>
      </section>
    </main>
  );
}
