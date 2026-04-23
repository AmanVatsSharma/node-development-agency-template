import Link from 'next/link';
import type { ReactElement } from 'react';
import { RelatedBlogPosts } from '@/app/components/RelatedBlogPosts';
import { RelatedServicesStrip } from '@/app/components/RelatedServicesStrip';

/**
 * Node.js Development service landing page.
 *
 * Content-heavy, server-rendered, SEO-first. Targets buyer-intent keywords
 * like "node.js development company india" and "hire node.js developers india."
 */
export default function NodeJSDevelopmentPage(): ReactElement {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-green-900 via-emerald-900 to-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="uppercase tracking-widest text-sm text-emerald-300 mb-4">
              Node.js Development Company · India
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Production-Grade Node.js Backends <span className="text-emerald-400">Built to Scale</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              We build high-performance REST APIs, microservices, real-time applications, and
              enterprise backends with Node.js 20 + TypeScript. Trusted by startups and enterprises
              across India, UAE, and the US.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/pages/contact"
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-semibold transition"
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

      {/* Why Node.js */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Why Node.js for Your Backend in 2025
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Node.js has become the default backend for SaaS, fintech, e-commerce, and real-time
            applications. Here&apos;s why serious engineering teams pick it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'One language, top to bottom',
                body:
                  'JavaScript/TypeScript across frontend and backend. Shared types, shared models, faster delivery.',
              },
              {
                title: 'Massive ecosystem',
                body: '2.1M+ npm packages. Battle-tested libraries for every integration.',
              },
              {
                title: 'Real-time ready',
                body:
                  'Native WebSockets, Socket.io, Redis Pub/Sub — perfect for chat, trading, dashboards, and notifications.',
              },
              {
                title: 'Cloud-native',
                body:
                  'First-class support on AWS Lambda, ECS, Fargate, Google Cloud Run, and Vercel edge functions.',
              },
              {
                title: 'Production at scale',
                body: 'Netflix, PayPal, LinkedIn, Uber, and Walmart run critical loads on Node.js.',
              },
              {
                title: 'Faster dev cycles',
                body:
                  'Lower development cost than Java/C# equivalents for typical SaaS and API workloads.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What We Build with Node.js
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'REST & GraphQL APIs',
                body:
                  'Production-grade APIs with auth, rate limiting, validation, and OpenAPI docs. Built on Fastify or NestJS.',
              },
              {
                title: 'Microservices Architectures',
                body:
                  'Service decomposition, event-driven workflows via Kafka/RabbitMQ, distributed tracing, and Kubernetes deployment.',
              },
              {
                title: 'Real-Time Applications',
                body:
                  'Live chat, trading dashboards, notification systems, and collaborative tools using WebSockets and Redis Pub/Sub.',
              },
              {
                title: 'Multi-Tenant SaaS Backends',
                body:
                  'Role-based access control, billing integration, admin panels, and audit logging for B2B SaaS platforms.',
              },
              {
                title: 'E-commerce Backends',
                body:
                  'Headless Shopify/Medusa backends, custom order management systems, and inventory integrations.',
              },
              {
                title: 'AI & LLM Integration',
                body:
                  'Production LLM apps with streaming, vector search, prompt caching, and multi-provider routing (OpenAI/Anthropic/Google).',
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white dark:bg-gray-950 shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-emerald-600 dark:text-emerald-400">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Node.js Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ['Runtime', 'Node.js 20 LTS'],
              ['Language', 'TypeScript (strict)'],
              ['Frameworks', 'Fastify · NestJS · Express'],
              ['ORM', 'Prisma · Drizzle'],
              ['Database', 'PostgreSQL · Redis · ClickHouse'],
              ['Testing', 'Jest · Vitest · Supertest'],
              ['Observability', 'Pino · Sentry · OpenTelemetry'],
              ['Deploy', 'Docker · AWS · GCP · Vercel'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 text-center"
              >
                <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                  {label}
                </p>
                <p className="text-base font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Transparent Node.js Development Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Fixed-scope quotes, never hourly surprises.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'MVP API',
                price: '₹1,50,000',
                tagline: 'Starts at',
                features: [
                  'REST API with auth',
                  'PostgreSQL + Prisma',
                  'Deployment (Vercel / AWS)',
                  'Basic CI/CD',
                  '3–5 weeks delivery',
                ],
              },
              {
                name: 'SaaS Backend',
                price: '₹5,00,000',
                tagline: 'Starts at',
                features: [
                  'Multi-tenant architecture',
                  'Role-based access control',
                  'Stripe / Razorpay billing',
                  'Admin panel',
                  'Observability stack',
                  '8–14 weeks delivery',
                ],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: '₹15,00,000+',
                tagline: 'Starts at',
                features: [
                  'Microservices architecture',
                  'Distributed tracing',
                  'Kubernetes deployment',
                  'Load testing & SRE',
                  'Production on-call handoff',
                  '4–8 months delivery',
                ],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 ${
                  tier.highlighted
                    ? 'bg-emerald-600 text-white shadow-2xl scale-105'
                    : 'bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800'
                }`}
              >
                <p className={`text-xs uppercase tracking-widest mb-2 ${tier.highlighted ? 'text-emerald-100' : 'text-gray-500 dark:text-gray-400'}`}>
                  {tier.tagline}
                </p>
                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <p className="text-4xl font-bold mb-6">{tier.price}</p>
                <ul className="space-y-2 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span className={tier.highlighted ? 'text-emerald-50' : 'text-gray-600 dark:text-gray-300'}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pages/contact"
                  className={`block text-center px-6 py-3 rounded-full font-semibold transition ${
                    tier.highlighted
                      ? 'bg-white text-emerald-600 hover:bg-gray-100'
                      : 'bg-emerald-500 text-white hover:bg-emerald-600'
                  }`}
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related blog posts — internal linking for topical authority */}
      <RelatedBlogPosts category="nodejs" />

      {/* Related services — internal linking */}
      <RelatedServicesStrip
        heading="Explore related services"
        services={[
          { label: 'SaaS Website Design', href: '/pages/saas-website-design' },
          { label: 'Next.js Development', href: '/pages/next-js-development' },
          { label: 'ReactJS Development', href: '/pages/reactjs-development' },
          { label: 'AI Chatbot Development', href: '/pages/ai-chatbot-development' },
          { label: 'Web Development India', href: '/pages/web-development' },
        ]}
      />

      {/* CTA */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build with Node.js?
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            Book a free 30-minute technical consultation. We&apos;ll review your requirements and
            send you a written proposal with scope, timeline, and price.
          </p>
          <Link
            href="/pages/contact"
            className="inline-block px-8 py-4 bg-white text-emerald-600 hover:bg-gray-100 rounded-full font-semibold transition"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
