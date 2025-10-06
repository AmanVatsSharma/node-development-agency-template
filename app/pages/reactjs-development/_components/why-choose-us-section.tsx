'use client';

/**
 * Why Choose Us Section
 * Trust signals and differentiators
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Code, Users, Rocket, Shield, HeartHandshake } from 'lucide-react';

console.log('[ReactJS-Dev] WhyChooseUsSection component loaded');

interface Reason {
  icon: React.ElementType;
  title: string;
  description: string;
}

export function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[ReactJS-Dev] WhyChooseUsSection mounted');
    return () => console.log('[ReactJS-Dev] WhyChooseUsSection unmounted');
  }, []);

  const reasons: Reason[] = [
    {
      icon: Code,
      title: 'Full-Stack React Expertise',
      description: 'Frontend + Backend integration mastery'
    },
    {
      icon: Rocket,
      title: '100% Custom Architecture',
      description: 'No boilerplates — built for your needs'
    },
    {
      icon: Users,
      title: 'Dedicated Developer',
      description: 'For every project, every sprint'
    },
    {
      icon: CheckCircle2,
      title: 'Sprint-Based Delivery',
      description: 'Transparent, agile methodology'
    },
    {
      icon: Shield,
      title: 'Long-Term Support',
      description: 'Post-launch support & scalability'
    },
    {
      icon: HeartHandshake,
      title: 'Client-First Approach',
      description: 'Your success is our success'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-[#61DAFB]/5 to-[#00C897]/5 dark:from-gray-950 dark:via-[#61DAFB]/5 dark:to-[#00C897]/5"
      id="why-choose-us"
      role="region"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-[#61DAFB]/20 to-[#00C897]/20 rounded-full mb-4 sm:mb-5 border border-[#61DAFB] text-sm sm:text-base">
            <span className="font-bold text-[#61DAFB] dark:text-[#61DAFB] uppercase tracking-wide">
              ✅ Why Us
            </span>
          </div>

          <h2
            id="why-choose-us-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            Why Choose Us
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            We don't just write React code — we engineer digital experiences.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-[#61DAFB] dark:hover:border-[#61DAFB] hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#61DAFB] to-[#00C897] flex items-center justify-center shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-[#61DAFB] to-[#00C897] rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 max-w-4xl mx-auto shadow-2xl"
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1E1E1E] mb-3">
            "We don't just write React code —
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white">
            we engineer digital experiences."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
