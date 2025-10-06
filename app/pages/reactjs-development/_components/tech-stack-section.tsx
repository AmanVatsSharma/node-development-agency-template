'use client';

/**
 * Tech Stack Section
 * Showcase the modern React tech stack we use
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

console.log('[ReactJS-Dev] TechStackSection component loaded');

export function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[ReactJS-Dev] TechStackSection mounted');
    return () => console.log('[ReactJS-Dev] TechStackSection unmounted');
  }, []);

  const techStack = [
    'React',
    'TypeScript',
    'Redux Toolkit',
    'TailwindCSS',
    'Next.js',
    'Vite',
    'Node.js',
    'GraphQL',
    'Firebase',
    'AWS'
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
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-[#61DAFB]/20 to-[#00C897]/20 rounded-full mb-4 sm:mb-5 border border-[#00C897] text-sm sm:text-base">
            <span className="font-bold text-[#00C897] dark:text-[#00C897] uppercase tracking-wide">
              Modern & Powerful
            </span>
          </div>

          <h2
            id="tech-stack-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            Tech Stack We Use
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Cutting-edge technologies trusted by industry leaders worldwide
          </p>
        </motion.div>

        {/* Tech Stack Logos Grid */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-gray-200 dark:border-gray-800 shadow-2xl"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group flex items-center justify-center p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#61DAFB] dark:hover:border-[#61DAFB] hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#61DAFB] transition-colors">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-10 sm:mt-14"
          >
            <div className="inline-block px-6 sm:px-8 py-4 bg-gradient-to-r from-[#61DAFB]/10 to-[#00C897]/10 rounded-2xl border border-[#61DAFB]">
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <span className="font-bold">Our tech stack ensures your web app is not just built —</span> it's future-ready.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
