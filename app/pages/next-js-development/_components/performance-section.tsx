'use client';

/**
 * Performance Promise Section
 * Performance guarantees and metrics
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, TrendingUp, Brain, Shield, RotateCcw, CheckCircle2 } from 'lucide-react';

console.log('[Next-JS-Dev] PerformanceSection component loaded');

interface PerformanceMetric {
  icon: React.ElementType;
  metric: string;
  description: string;
  gradient: string;
}

export function PerformanceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Next-JS-Dev] PerformanceSection mounted');
    return () => console.log('[Next-JS-Dev] PerformanceSection unmounted');
  }, []);

  const metrics: PerformanceMetric[] = [
    {
      icon: Zap,
      metric: 'PageSpeed 95+',
      description: 'Desktop / 85+ Mobile',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      metric: 'Core Web Vitals ✅',
      description: 'LCP < 1.8s | CLS < 0.05 | INP < 200ms',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      metric: 'SEO Schema',
      description: 'Open Graph + Meta Preload',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      metric: '99.9% Uptime',
      description: 'Hosting',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: CheckCircle2,
      metric: 'Responsive',
      description: 'Accessibility AA Standard',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-950 dark:via-green-950 dark:to-emerald-950"
      id="performance"
      role="region"
      aria-labelledby="performance-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-4 sm:mb-5 border border-green-200 dark:border-green-800 text-sm sm:text-base">
            <span className="font-bold text-green-700 dark:text-green-300 uppercase tracking-wide">
              Our Guarantee
            </span>
          </div>

          <h2
            id="performance-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            Performance Promise
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            We don't just build websites — we deliver{' '}
            <span className="font-bold text-green-600 dark:text-green-400">
              lightning-fast, SEO-optimized experiences
            </span>
            {' '}that convert.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-10 sm:mb-14 max-w-6xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${metric.gradient} mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                    </div>

                    {/* Metric */}
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {metric.metric}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {metric.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Free Speed Audit CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-2 border-green-200 dark:border-green-800 shadow-xl max-w-4xl mx-auto"
        >
          <div className="mb-4 sm:mb-6">
            <Zap className="h-12 w-12 sm:h-16 sm:w-16 text-green-600 dark:text-green-400 mx-auto mb-3" />
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Get a Free Speed Audit
            </h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
              See how your current website performs and get actionable recommendations
            </p>
          </div>

          <a 
            href="#lead-form"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm sm:text-base"
            onClick={() => console.log('[Next-JS-Dev] Speed Audit CTA clicked')}
          >
            🚀 Get Your Free Speed Audit
          </a>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
            {[
              'Complete performance analysis',
              'SEO recommendations',
              'Conversion optimization tips'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
