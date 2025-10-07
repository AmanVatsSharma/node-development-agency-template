'use client';

/**
 * @fileoverview Why Vedpragya Section - Key Differentiators
 * @description Showcase unique value propositions
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, TrendingUp, Code, Zap, Users } from 'lucide-react';

console.log('[Shopify-Product-Page] WhyVedpragyaSection component loaded');

const differentiators = [
  {
    icon: CheckCircle2,
    title: 'Proven Shopify Optimization Systems',
    description: 'We've optimized 40+ Shopify stores with an average conversion rate increase of 28%.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: TrendingUp,
    title: 'Performance-Based Design Philosophy',
    description: 'Every element is designed with conversion in mind. No fluff, just features that drive sales.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Code,
    title: 'Scalable Architecture for Future Apps',
    description: 'Clean, maintainable code that grows with your business. Easy to extend and integrate.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Zap,
    title: '100% Custom Liquid + JS (No Bloat)',
    description: 'Hand-coded solutions without heavy frameworks. Lightning-fast load times guaranteed.',
    color: 'from-[#FFB400] to-orange-500',
  },
  {
    icon: Users,
    title: 'Fast Delivery + Dedicated Project Manager',
    description: 'Single point of contact. Clear communication. On-time delivery. No surprises.',
    color: 'from-orange-500 to-red-600',
  },
];

export function WhyVedpragyaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="why-vedpragya"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
      role="region"
      aria-labelledby="why-vedpragya-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="why-vedpragya-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gray-900 dark:text-white"
          >
            🧠 Why Choose <span className="text-[#FFB400]">Vedpragya Bharat</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We don't guess. We test, measure, and optimize till it converts.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#0A2540] to-[#0A2540]/90 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#FFB400]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#FFB400]/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="text-6xl mb-4">💬</div>
              <blockquote className="text-2xl md:text-3xl font-black text-white mb-4 leading-relaxed">
                "We don't guess. We test, measure, and optimize till it converts."
              </blockquote>
              <p className="text-lg text-gray-300">
                — <span className="font-bold text-[#FFB400]">Vedpragya Bharat</span>, Shopify Plus Experts
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Shopify-Product-Page] WhyVedpragyaSection exported');
