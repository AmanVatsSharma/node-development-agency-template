'use client';

/**
 * Tech Stack Section - Technology Showcase
 * Display the modern, enterprise-grade tech stack
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

console.log('[Shopify-Headless] TechStackSection component loaded');

export function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const technologies = [
    { name: 'Next.js 14', color: 'text-black dark:text-white', icon: '▲' },
    { name: 'Hydrogen 3', color: 'text-green-500', icon: '💧' },
    { name: 'React 19', color: 'text-cyan-400', icon: '⚛️' },
    { name: 'GraphQL', color: 'text-pink-500', icon: '◆' },
    { name: 'TypeScript', color: 'text-blue-500', icon: 'TS' },
    { name: 'Tailwind', color: 'text-cyan-400', icon: '🎨' },
    { name: 'Vercel', color: 'text-black dark:text-white', icon: '▲' },
    { name: 'Shopify API', color: 'text-green-500', icon: 'S' },
    { name: 'Cloudflare Edge', color: 'text-orange-500', icon: '☁️' },
    { name: 'Redis Cache', color: 'text-red-500', icon: '⚡' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] relative overflow-hidden"
      id="tech-stack"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00E0B8] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
              🧰 Tech <span className="bg-gradient-to-r from-[#00E0B8] to-cyan-400 bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              Enterprise-grade, battle-tested technologies for maximum performance
            </p>
            
            {/* Tech Stack Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
              <span className="font-mono">Next.js 14 / Hydrogen 3 • React 19 • GraphQL • TypeScript • Tailwind • Vercel • Shopify Storefront API • Cloudflare Edge • Redis Cache</span>
            </div>
          </motion.div>

          {/* Technology Pills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.05) }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <div className="flex flex-col items-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:border-[#00E0B8] rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer">
                  <div className={`text-3xl ${tech.color}`}>
                    {tech.icon}
                  </div>
                  <span className="text-sm font-bold text-white whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Performance First',
                description: 'SSR, ISR, SSG with edge caching for sub-second page loads',
                icon: '⚡'
              },
              {
                title: 'Type Safety',
                description: 'Full TypeScript coverage for reliable, maintainable code',
                icon: '🛡️'
              },
              {
                title: 'Scalable',
                description: 'Micro-frontend architecture ready for enterprise growth',
                icon: '📈'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00E0B8] transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
