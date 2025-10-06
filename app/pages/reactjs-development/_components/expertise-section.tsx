'use client';

/**
 * Expertise Section - PREMIUM BENTO GRID VERSION
 * Interactive mastery showcase with hover effects
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Blocks, Zap, Cpu, Server, Palette, TestTube2, Shield, Sparkles } from 'lucide-react';

console.log('[ReactJS-Dev] ExpertiseSection component loaded');

interface ExpertiseItem {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  size: 'small' | 'medium' | 'large';
}

export function ExpertiseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    console.log('[ReactJS-Dev] ExpertiseSection mounted');
    return () => console.log('[ReactJS-Dev] ExpertiseSection unmounted');
  }, []);

  const expertise: ExpertiseItem[] = [
    {
      icon: Code2,
      title: 'Component Architecture',
      description: 'Custom reusable components with atomic design principles',
      gradient: 'from-blue-500 to-cyan-500',
      size: 'medium'
    },
    {
      icon: Blocks,
      title: 'State Management',
      description: 'Redux Toolkit, Zustand, Recoil - we master them all',
      gradient: 'from-purple-500 to-pink-500',
      size: 'small'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lazy loading, code splitting, memoization',
      gradient: 'from-yellow-500 to-orange-500',
      size: 'small'
    },
    {
      icon: Server,
      title: 'API Integration',
      description: 'React Query, Axios, REST, GraphQL - seamless data flow',
      gradient: 'from-green-500 to-emerald-500',
      size: 'large'
    },
    {
      icon: Cpu,
      title: 'Next.js Mastery',
      description: 'SSR, SSG, ISR - full-stack React applications',
      gradient: 'from-indigo-500 to-purple-500',
      size: 'small'
    },
    {
      icon: Shield,
      title: 'TypeScript',
      description: 'Type-safe code for enterprise-grade applications',
      gradient: 'from-blue-600 to-indigo-600',
      size: 'small'
    },
    {
      icon: Palette,
      title: 'UI Libraries',
      description: 'TailwindCSS, Material UI, Chakra, shadcn/ui',
      gradient: 'from-pink-500 to-rose-500',
      size: 'medium'
    },
    {
      icon: TestTube2,
      title: 'Testing & QA',
      description: 'Jest, React Testing Library, Cypress',
      gradient: 'from-teal-500 to-cyan-500',
      size: 'small'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-32 lg:py-40 bg-white dark:bg-[#0A0A0A] overflow-hidden"
      id="expertise"
      role="region"
      aria-labelledby="expertise-heading"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#61DAFB 1px, transparent 1px), linear-gradient(90deg, #61DAFB 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#00C897]/10 to-[#61DAFB]/10 backdrop-blur-xl rounded-full mb-6 sm:mb-8 border border-[#00C897]/30 shadow-lg"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C897]" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#00C897] to-[#61DAFB] bg-clip-text text-transparent uppercase tracking-wider">
              Our Expertise
            </span>
          </motion.div>

          <motion.h2
            id="expertise-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Masters of the
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] bg-clip-text text-transparent">
              React Ecosystem
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Deep expertise in every corner of React development
          </motion.p>
        </motion.div>

        {/* Premium Bento Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-fr">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredIndex === index;
              
              // Dynamic grid spans for bento layout
              const getGridClass = () => {
                if (item.size === 'large') return 'sm:col-span-2 lg:col-span-2';
                if (item.size === 'medium') return 'sm:col-span-2 lg:col-span-2';
                return 'sm:col-span-1';
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className={`group ${getGridClass()}`}
                >
                  <div className="relative h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-[#61DAFB]/10 hover:-translate-y-1">
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Animated Glow */}
                    <motion.div
                      className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500`}
                      animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${item.gradient} mb-4 sm:mb-5 shadow-xl`}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:bg-gradient-to-r group-hover:from-[#61DAFB] group-hover:to-[#00C897] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Decorative Element */}
                      <motion.div
                        className="absolute -bottom-2 -right-2 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500"
                        animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      >
                        <Icon className="w-16 h-16 sm:w-20 sm:h-20 text-gray-900 dark:text-white" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              { value: '50+', label: 'React Projects' },
              { value: '8+', label: 'Years Experience' },
              { value: '100%', label: 'Type Safe' },
              { value: '95+', label: 'Performance Score' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-[#61DAFB]/5 to-[#00C897]/5 backdrop-blur-xl rounded-2xl border border-[#61DAFB]/20"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#61DAFB] to-[#00C897] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
