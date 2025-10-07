'use client';

/**
 * What You Get Section - 5 Service Modules
 * Comprehensive breakdown of deliverables
 * 
 * MODULES:
 * 1. Headless Architecture Planning
 * 2. Custom Frontend Development
 * 3. Enterprise-Grade Features
 * 4. Integrations
 * 5. SEO + Performance Optimization
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Palette, Settings, Link2, TrendingUp, Check } from 'lucide-react';

console.log('[Shopify-Headless] WhatYouGetSection component loaded');

export function WhatYouGetSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Service modules data
  const modules = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: '🧠 Headless Architecture Planning',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20',
      features: [
        'Shopify Storefront API integration',
        'Data modeling & caching strategy',
        'Performance-first Next.js layout',
        'GraphQL queries + ISR setup'
      ]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: '🎨 Custom Frontend Development',
      subtitle: '(Next.js / Hydrogen)',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
      features: [
        'Fully custom React storefront',
        'Dynamic routing + SSR / ISR / SSG',
        'Product, collection, cart, checkout pages',
        'Advanced state management (Zustand / Redux)'
      ]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: '⚙️ Enterprise-Grade Features',
      color: 'from-[#00E0B8] to-cyan-500',
      bgColor: 'from-[#00E0B8]/10 to-cyan-500/10 dark:from-[#00E0B8]/20 dark:to-cyan-500/20',
      features: [
        'Serverless functions for checkout flows',
        'Real-time product data sync',
        'Custom analytics dashboard',
        'Headless CMS integration (Sanity, Strapi, Contentful)'
      ]
    },
    {
      icon: <Link2 className="h-8 w-8" />,
      title: '🔗 Integrations',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      features: [
        'Shopify Admin API / Storefront API',
        'Stripe / Razorpay / PayPal',
        'Klaviyo, Mailchimp, Meta Pixel, GA4',
        'WhatsApp API + Zapier automation'
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: '📈 SEO + Performance Optimization',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      features: [
        'Next.js Meta / OpenGraph tags',
        'Structured data (JSON-LD)',
        'Lighthouse 95+ guarantee',
        'CDN / Edge caching (Vercel / Cloudflare)'
      ]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-[#1e293b] dark:to-[#0F172A] relative overflow-hidden"
      id="what-you-get"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E0B8] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              🧩 What You <span className="bg-gradient-to-r from-[#00E0B8] to-cyan-400 bg-clip-text text-transparent">Get</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Complete end-to-end solution for your headless commerce transformation
            </p>
          </motion.div>

          {/* Service Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className={`h-full bg-gradient-to-br ${module.bgColor} backdrop-blur-xl border-2 border-gray-200 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all`}>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {module.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {module.title}
                  </h3>
                  {module.subtitle && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{module.subtitle}</p>
                  )}

                  {/* Divider */}
                  <div className={`w-16 h-1 bg-gradient-to-r ${module.color} rounded-full mb-6`} />

                  {/* Features List */}
                  <ul className="space-y-3">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-700 dark:text-gray-300">
                        <Check className="h-5 w-5 text-[#00E0B8] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-col items-center gap-4 p-6 bg-gradient-to-r from-[#0F172A] to-[#1e293b] rounded-2xl border-2 border-[#00E0B8]/30 shadow-2xl">
              <p className="text-lg font-bold text-white">
                Every package includes <span className="text-[#00E0B8]">full documentation</span>, <span className="text-[#00E0B8]">team training</span>, and <span className="text-[#00E0B8]">30 days support</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
