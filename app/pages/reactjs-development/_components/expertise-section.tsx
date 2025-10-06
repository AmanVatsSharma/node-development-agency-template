'use client';

/**
 * Expertise Section
 * Showcase React ecosystem mastery
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

console.log('[ReactJS-Dev] ExpertiseSection component loaded');

export function ExpertiseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[ReactJS-Dev] ExpertiseSection mounted');
    return () => console.log('[ReactJS-Dev] ExpertiseSection unmounted');
  }, []);

  const expertise = [
    'Custom React Component Development',
    'Redux, Zustand, or Recoil State Management',
    'React Query, Axios API Integrations',
    'React Router, Lazy Loading, Code Splitting',
    'Next.js for SSR (if required)',
    'TypeScript with React for enterprise-grade apps',
    'Responsive UI/UX with TailwindCSS or Material UI',
    'React Testing Library & Jest for Quality Assurance'
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-[#61DAFB]/5 to-[#00C897]/5 dark:from-gray-950 dark:via-[#61DAFB]/5 dark:to-[#00C897]/5"
      id="expertise"
      role="region"
      aria-labelledby="expertise-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-[#00C897]/20 to-[#61DAFB]/20 rounded-full mb-4 sm:mb-5 border border-[#00C897] text-sm sm:text-base">
            <span className="font-bold text-[#00C897] dark:text-[#00C897] uppercase tracking-wide">
              🎯 Our Expertise
            </span>
          </div>

          <h2
            id="expertise-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            We've Mastered Every Layer
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Of the React Ecosystem
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-gray-200 dark:border-gray-800 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-[#61DAFB] dark:hover:border-[#61DAFB] hover:shadow-lg transition-all"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#00C897] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
