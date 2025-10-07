'use client';

/**
 * @fileoverview What's Included Section - 5 Key Features
 * @description Comprehensive breakdown of all features included
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Layout, Database, ShoppingBag, Smartphone, BarChart3, 
  Image, Video, Layers, Code, Zap, TrendingUp, Target 
} from 'lucide-react';

console.log('[Shopify-Product-Page] WhatIncludedSection component loaded');

const features = [
  {
    id: 'custom-layout',
    icon: Layout,
    title: '🎨 1. Custom Layout Design',
    subtitle: 'Liquid + Tailwind + JS',
    features: [
      { icon: Image, text: 'Unique product gallery (image zoom, video, 3D view)' },
      { icon: Layers, text: 'Dynamic sections (reviews, FAQs, size chart)' },
      { icon: ShoppingBag, text: 'Floating "Add to Cart" + quick buy bar' },
      { icon: Target, text: 'Sticky product info while scrolling' },
    ],
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
  },
  {
    id: 'dynamic-logic',
    icon: Database,
    title: '⚙️ 2. Dynamic Product Logic & Data Binding',
    subtitle: 'Real-time Interactions',
    features: [
      { icon: Code, text: 'Variant-based pricing updates' },
      { icon: Zap, text: 'Real-time stock indicators ("Only 2 left!")' },
      { icon: Target, text: 'Custom bundle selector & dynamic discounts' },
      { icon: Layout, text: 'Interactive product configurator (color/size combo)' },
    ],
    color: 'from-purple-500 to-pink-600',
    bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
  },
  {
    id: 'smart-upsells',
    icon: ShoppingBag,
    title: '🛒 3. Smart Upsells & AOV Boosters',
    subtitle: 'Increase Average Order Value',
    features: [
      { icon: ShoppingBag, text: '"Buy it with" or "Bundle & Save" widgets' },
      { icon: Target, text: 'AI-recommended related products' },
      { icon: ShoppingBag, text: 'Cart drawer with smart cross-sells' },
      { icon: TrendingUp, text: 'Progress bar: "Spend ₹300 more for free shipping!"' },
    ],
    color: 'from-green-500 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
  },
  {
    id: 'mobile-first',
    icon: Smartphone,
    title: '📱 4. Mobile-First & Speed-Optimized Experience',
    subtitle: 'Fast & Responsive',
    features: [
      { icon: Target, text: 'Optimized for thumb reach & fast taps' },
      { icon: Zap, text: 'Lazy-loaded media for 2× faster performance' },
      { icon: ShoppingBag, text: 'Instant checkout CTA for mobile traffic' },
      { icon: Smartphone, text: 'App-like gestures & interactions' },
    ],
    color: 'from-orange-500 to-red-600',
    bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: '📈 5. Conversion Analytics Integration',
    subtitle: 'Track & Optimize',
    features: [
      { icon: BarChart3, text: 'Heatmaps, scroll tracking, and A/B tests' },
      { icon: Target, text: 'Conversion data linked with GA4 / Meta Pixel' },
      { icon: TrendingUp, text: 'Optional dashboard for live insights' },
      { icon: Zap, text: 'Real-time performance monitoring' },
    ],
    color: 'from-[#FFB400] to-orange-500',
    bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
  },
];

export function WhatIncludedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="whats-included"
      className="py-16 md:py-24 bg-white dark:bg-gray-950"
      role="region"
      aria-labelledby="whats-included-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="whats-included-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gray-900 dark:text-white"
          >
            🧠 What's <span className="text-[#FFB400]">Included</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to transform your product pages into conversion machines
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${feature.bgColor} rounded-3xl p-6 md:p-8 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300`}>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-semibold">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>

                {/* Feature List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {feature.features.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.05) }}
                      className="flex items-start gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

console.log('[Shopify-Product-Page] WhatIncludedSection exported');
