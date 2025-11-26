'use client';

/**
 * Process Section - From Vision to Live Website
 * 5-step development process
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Palette, Code, TestTube, Rocket } from 'lucide-react';

console.log('[Next-JS-Dev] ProcessSection component loaded');

interface ProcessStep {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  deliverables: string[];
  gradient: string;
}

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Next-JS-Dev] ProcessSection mounted');
    return () => console.log('[Next-JS-Dev] ProcessSection unmounted');
  }, []);

  const steps: ProcessStep[] = [
    {
      number: '1️⃣',
      icon: Search,
      title: 'Discovery & Strategy',
      description: 'We analyze your brand, goals & competitors',
      deliverables: ['Brand analysis', 'Competitor research', 'Technical roadmap'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: '2️⃣',
      icon: Palette,
      title: 'Design & Wireframing',
      description: 'Figma prototypes → Tailwind design system',
      deliverables: ['Figma wireframes', 'Design system', 'Component library'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: '3️⃣',
      icon: Code,
      title: 'Development & Integration',
      description: 'Next.js 13+ App Router + API routes',
      deliverables: ['Clean codebase', 'API integration', 'Database setup'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      number: '4️⃣',
      icon: TestTube,
      title: 'Testing & SEO Optimization',
      description: 'Lighthouse, Core Web Vitals, accessibility',
      deliverables: ['Performance report', 'SEO optimization', 'A11y compliance'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      number: '5️⃣',
      icon: Rocket,
      title: 'Deployment & Support',
      description: 'Vercel / AWS deployment + 30-day free support',
      deliverables: ['Production deployment', 'SSL setup', '30-day warranty'],
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-purple-950 dark:to-pink-950"
      id="process"
      role="region"
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full mb-4 sm:mb-5 border border-purple-200 dark:border-purple-800 text-sm sm:text-base">
            <span className="font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wide">
              Our Proven Process
            </span>
          </div>

          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            How Our Hire Next.js Developer Works
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            A transparent, structured approach that delivers exceptional results every time.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-white absolute" />
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border-2 border-gray-200 dark:border-gray-800 font-bold text-sm">
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4">
                        {step.description}
                      </p>
                      
                      {/* Deliverables */}
                      <div>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Key Deliverables:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliverable, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                            >
                              ✓ {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Line (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute left-12 top-full w-0.5 h-8 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-700" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Timeline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 sm:mt-14"
        >
          <div className="inline-block px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800">
            <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
              ⏱️ Typical Timeline: 10-21 Days
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              Rush projects available — contact us for expedited delivery
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
