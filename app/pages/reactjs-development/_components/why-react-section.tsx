'use client';

/**
 * Why ReactJS Section
 * Educate visitors on React benefits and build authority
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, RefreshCw, TrendingUp, Shield } from 'lucide-react';

console.log('[ReactJS-Dev] WhyReactSection component loaded');

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}

export function WhyReactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[ReactJS-Dev] WhyReactSection mounted');
    return () => console.log('[ReactJS-Dev] WhyReactSection unmounted');
  }, []);

  const benefits: Benefit[] = [
    {
      icon: Zap,
      title: '⚡ Blazing Fast',
      description: 'Virtual DOM ensures top performance and lightning-fast user experiences.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: RefreshCw,
      title: '♻️ Reusable Components',
      description: 'Build once, use everywhere. Faster development with consistent UI.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: '🧠 Scalable Architecture',
      description: 'Perfect for growing products — from MVP to enterprise-grade apps.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: '🧩 Backed by Meta',
      description: 'Stable, constantly updated ecosystem trusted by Facebook, Netflix, and Instagram.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
      id="why-react"
      role="region"
      aria-labelledby="why-react-heading"
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
              💡 The React Advantage
            </span>
          </div>

          <h2
            id="why-react-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            Why Businesses Choose ReactJS
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            For Modern Web Apps That Scale
          </p>
        </motion.div>

        {/* Benefits Grid - MOBILE OPTIMIZED */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-[#61DAFB] dark:hover:border-[#61DAFB] hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-4 sm:mb-5 shadow-lg`}>
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-[#61DAFB]/10 via-[#00C897]/10 to-[#61DAFB]/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-[#61DAFB]/30 max-w-4xl mx-auto"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            "ReactJS is the foundation of products like Facebook, Netflix, and Instagram"
          </p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            — and your next big idea.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
