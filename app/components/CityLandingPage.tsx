import Link from 'next/link';
import type { ReactElement } from 'react';
import { RelatedServicesStrip } from '@/app/components/RelatedServicesStrip';
import { CityLeadForm } from '@/app/components/CityLeadForm';

/**
 * Shared city landing page component.
 *
 * Used by city-specific web development service pages (Delhi, Bangalore,
 * Pune, etc.) so we can SEO-target "web development company [city]" keywords
 * without duplicating a huge component tree per city.
 *
 * IMPORTANT — Avoiding doorway/duplicate-content penalties:
 * Each city page MUST pass substantial unique content via the `localContent`
 * prop so Google doesn't flag these as doorway pages under the Helpful
 * Content Update. Shared shell + unique local copy is fine; identical
 * copy with only the city name swapped is not.
 */

export interface LocalFaq {
  q: string;
  a: string;
}

export interface CityLandingPageProps {
  /** Full display name of the city, e.g. "Delhi NCR" */
  cityName: string;
  /** Short name for URL + copy, e.g. "delhi" */
  citySlug: string;
  /** State or region, e.g. "Delhi NCR", "Karnataka" */
  region: string;
  /** Short intro tagline (unique per city) */
  tagline: string;
  /** Local neighbourhoods / business districts to reference */
  neighborhoods: string[];
  /**
   * Substantial unique content for this specific city. At least 400-500
   * words describing the local business ecosystem, common industries,
   * and why Vedpragya is a good fit for that market.
   *
   * Rendered as paragraphs — use array of strings.
   */
  localMarketContent: string[];
  /** Common local industries we serve in this city */
  localIndustries: { name: string; description: string }[];
  /** City-specific FAQs (3-5, unique to the city) */
  localFaqs: LocalFaq[];
}

export function CityLandingPage({
  cityName,
  citySlug,
  region,
  tagline,
  neighborhoods,
  localMarketContent,
  localIndustries,
  localFaqs,
}: CityLandingPageProps): ReactElement {
  void citySlug;
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
                href="#get-proposal"
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

      {/* Local market — UNIQUE per city (primary content that prevents doorway-page penalty) */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Web Development for {cityName}&apos;s Business Ecosystem
          </h2>
          {localMarketContent.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            >
              {paragraph}
            </p>
          ))}
          <p className="text-base text-gray-500 dark:text-gray-400">
            Serving businesses across {neighborhoods.join(', ')} and nearby{' '}
            {cityName} business districts — delivered fully remote by a
            Haryana-registered agency (Vedpragya Bharat Private Limited).
          </p>
        </div>
      </section>

      {/* Local industries — UNIQUE per city */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Industries We Serve in {cityName}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            {cityName}&apos;s economy has its own mix of industries. Here are the
            sectors we&apos;re most experienced with locally.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localIndustries.map((industry) => (
              <div
                key={industry.name}
                className="p-6 rounded-2xl bg-white dark:bg-gray-950 shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Web Development Services We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Custom Business Websites',
                body: 'Fast, mobile-first business websites built with Next.js and Tailwind CSS.',
              },
              {
                title: 'E-commerce Development',
                body: 'Shopify, headless Shopify, and WooCommerce stores with Razorpay / Cashfree checkout and GST support.',
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
                body: 'AI chatbots, voice agents, and LLM applications integrated into your business website.',
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
      <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Transparent Pricing
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
                    : 'bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800'
                }`}
              >
                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <p className="text-4xl font-bold mb-6">{tier.price}</p>
                <ul className="space-y-2 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span
                        className={
                          tier.highlighted
                            ? 'text-blue-50'
                            : 'text-gray-600 dark:text-gray-300'
                        }
                      >
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

      {/* FAQ — city-specific */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions ({cityName})
          </h2>
          <div className="space-y-6">
            {localFaqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800"
              >
                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 dark:text-gray-300">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Lead Capture Form */}
      <section id="get-proposal" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: value prop */}
            <div>
              <p className="uppercase tracking-widest text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3">
                Free Consultation
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Get a Written Proposal for Your {cityName} Project
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Share your requirements and we&apos;ll send a fixed-price quote with
                scope, timeline, and team composition — usually within 2 business hours.
              </p>
              <ul className="space-y-3">
                {[
                  'Fixed-scope quotes. No hourly surprises.',
                  'INR pricing. GST invoice included.',
                  'Dedicated project manager from day one.',
                  '100% remote — video calls during IST hours.',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: form */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
              <CityLeadForm cityName={cityName} citySlug={citySlug} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book a free 30-minute consultation. We&apos;ll review your
            requirements and send a written proposal with scope, timeline, and
            price.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#get-proposal"
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
        </div>
      </section>

      {/* Related services — internal linking */}
      <RelatedServicesStrip
        heading="Explore our services"
        services={[
          { label: 'SaaS Website Design', href: '/pages/saas-website-design' },
          { label: 'Next.js Development', href: '/pages/next-js-development' },
          { label: 'ReactJS Development', href: '/pages/reactjs-development' },
          { label: 'Node.js Development', href: '/pages/nodejs-development' },
          { label: 'AI Chatbot Development', href: '/pages/ai-chatbot-development' },
          { label: 'Google Ads Management', href: '/pages/google-ads-management' },
        ]}
      />
    </main>
  );
}
