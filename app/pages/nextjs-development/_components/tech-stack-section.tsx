'use client';

/**
 * Technology Stack Section
 * Showcase the modern tech stack we use
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

console.log('[NextJS-Dev] TechStackSection component loaded');

interface TechCategory {
  category: string;
  technologies: string[];
  gradient: string;
}

export function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[NextJS-Dev] TechStackSection mounted');
    return () => console.log('[NextJS-Dev] TechStackSection unmounted');
  }, []);

  const stack: TechCategory[] = [
    {
      category: 'Frontend',
      technologies: ['Next.js 13+', 'React 18', 'Tailwind CSS', 'Framer Motion'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend',
      technologies: ['NestJS', 'Node.js', 'TypeORM', 'Prisma'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Database',
      technologies: ['PostgreSQL', 'MongoDB'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      category: 'CMS / Headless',
      technologies: ['Sanity', 'Strapi', 'Contentful', 'Shopify'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      category: 'Deployment',
      technologies: ['Vercel', 'AWS EC2 / S3', 'Cloudflare'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      category: 'Analytics & SEO',
      technologies: ['Google Tag Manager', 'Schema Markup', 'GA4'],
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
      id="tech-stack"
      role="region"
      aria-labelledby="tech-stack-heading"
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
              Modern & Powerful
            </span>
          </div>

          <h2
            id="tech-stack-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            Our Technology Stack
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            We use cutting-edge technologies trusted by industry leaders worldwide.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {stack.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Category Header */}
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${category.gradient} rounded-xl mb-4 sm:mb-5`}>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-white dark:bg-gray-950 rounded-lg text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 sm:mt-14"
        >
          <div className="inline-block px-6 sm:px-8 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <span className="font-bold">Need a different stack?</span> We adapt to your requirements — bring your own tech preferences!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
