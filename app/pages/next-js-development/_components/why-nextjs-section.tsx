'use client';

/**
 * Why Choose Next.js Section
 * Educational content establishing authority and benefits
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Zap, Search, Layers, Sparkles, ArrowRight } from 'lucide-react';

console.log('[Next-JS-Dev] WhyNextJsSection component loaded');

interface FeatureCard {
  icon: React.ElementType;
  title: string;
  description: string;
  benefit: string;
  gradient: string;
}

export function WhyNextJsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Next-JS-Dev] WhyNextJsSection mounted');
    return () => console.log('[Next-JS-Dev] WhyNextJsSection unmounted');
  }, []);

  const features: FeatureCard[] = [
    {
      icon: Zap,
      title: '⚡ Hybrid Rendering (SSR + SSG + ISR)',
      description: 'Perfect balance of SEO and speed',
      benefit: 'Get the best of both worlds: static site performance with dynamic capabilities',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Search,
      title: '🔍 SEO Supercharged',
      description: 'Server-rendered pages = Instant indexing by Google',
      benefit: 'Rank higher with pre-rendered, crawlable content that search engines love',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Layers,
      title: '🧱 Scalable Architecture',
      description: 'Component-driven + API-first = Enterprise-ready foundation',
      benefit: 'Build once, scale forever. Add features without refactoring',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Sparkles,
      title: '🔐 Secure by Design',
      description: 'Built-in XSS protection, edge deployment, environment isolation',
      benefit: 'Enterprise-grade security out of the box, no configuration needed',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950"
      id="why-nextjs"
      role="region"
      aria-labelledby="why-nextjs-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full mb-4 sm:mb-5 border border-blue-200 dark:border-blue-800 text-sm sm:text-base">
            <span className="font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
              Technology That Converts
            </span>
          </div>

          <h2
            id="why-nextjs-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            Why Next.js Changes Everything for Modern Web Development
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Next.js isn't just another framework—it's the{' '}
            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              future of web development
            </span>
            . Trusted by Nike, Netflix, Twitch, and Fortune 500 companies worldwide.
          </p>
        </motion.div>

        {/* Feature Cards - MOBILE: 2-COLUMN GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 mb-10 sm:mb-14">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-br ${feature.gradient} mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-lg lg:text-xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description - MOBILE: Hidden, SM+: Show */}
                  <p className="hidden sm:block text-sm lg:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefit - MOBILE: Compact */}
                  <div className="pt-2 sm:pt-3 lg:pt-4 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-[10px] sm:text-xs lg:text-sm text-indigo-600 dark:text-indigo-400 font-bold leading-tight">
                      💡 {feature.benefit}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-indigo-200 dark:border-indigo-800"
        >
          <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to leverage Next.js for your project?
          </p>
          <Button
            asChild
            size="lg"
            className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 h-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl hover:shadow-2xl font-bold transition-all hover:scale-105"
            onClick={() => console.log('[Next-JS-Dev] Why NextJS CTA clicked')}
          >
            <a href="#lead-form" className="flex items-center gap-2">
              👉 Schedule a Free 15-min Consultation
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
