'use client';

/**
 * @fileoverview Tech Stack Section - Technologies We Use
 * @description Showcase of tools and platforms
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Palette, Zap, BarChart } from 'lucide-react';

console.log('[Shopify-Product-Page] TechStackSection component loaded');

const techCategories = [
  {
    category: 'Platform & Framework',
    icon: Code2,
    color: 'from-blue-500 to-indigo-600',
    techs: ['Shopify Plus', 'Liquid', 'JavaScript (Vanilla/Alpine)', 'TypeScript'],
  },
  {
    category: 'Design & Styling',
    icon: Palette,
    color: 'from-purple-500 to-pink-600',
    techs: ['Tailwind CSS', 'Custom CSS', 'Responsive Design', 'Mobile-First'],
  },
  {
    category: 'Performance & Speed',
    icon: Zap,
    color: 'from-green-500 to-emerald-600',
    techs: ['Lazy Loading', 'Code Splitting', 'Image Optimization', 'CDN Integration'],
  },
  {
    category: 'Analytics & Tracking',
    icon: BarChart,
    color: 'from-[#FFB400] to-orange-500',
    techs: ['Meta Pixel', 'Klaviyo', 'Google Analytics 4', 'Hotjar'],
  },
];

export function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
      role="region"
      aria-labelledby="tech-stack-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="tech-stack-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gray-900 dark:text-white"
          >
            🧩 Tech <span className="text-[#FFB400]">Stack</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Powered by cutting-edge technologies for maximum performance
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.techs.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (techIndex * 0.05) }}
                      className={`bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-xl font-bold text-sm shadow-md hover:scale-105 transition-transform`}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Tech Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#0A2540] to-[#0A2540]/90 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-black text-white text-center mb-8">
              🏆 Core Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Shopify Plus', emoji: '🛍️' },
                { name: 'Liquid', emoji: '💧' },
                { name: 'JavaScript', emoji: '⚡' },
                { name: 'Tailwind CSS', emoji: '🎨' },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all"
                >
                  <div className="text-5xl mb-3">{tech.emoji}</div>
                  <div className="text-sm font-bold text-white">{tech.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Shopify-Product-Page] TechStackSection exported');
