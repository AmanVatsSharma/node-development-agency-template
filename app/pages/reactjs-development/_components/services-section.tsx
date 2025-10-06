'use client';

/**
 * Services Section
 * Detailed ReactJS service offerings
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, BarChart3, Rocket, Plug, RefreshCw, Paintbrush } from 'lucide-react';

console.log('[ReactJS-Dev] ServicesSection component loaded');

interface Service {
  icon: React.ElementType;
  category: string;
  description: string;
  gradient: string;
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[ReactJS-Dev] ServicesSection mounted');
    return () => console.log('[ReactJS-Dev] ServicesSection unmounted');
  }, []);

  const services: Service[] = [
    {
      icon: Code2,
      category: 'Custom Web App Development',
      description: 'End-to-end custom web applications tailored to business goals.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      category: 'Dashboard & Admin Panels',
      description: 'Interactive dashboards with charts, tables, and live data.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      category: 'MVP Development for Startups',
      description: 'Rapid prototyping & launch-ready MVPs built on ReactJS.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Plug,
      category: 'API Integration & Backend Setup',
      description: 'REST or GraphQL integration with Node/Nest or any backend.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: RefreshCw,
      category: 'Migration to ReactJS',
      description: 'Upgrade legacy web apps to modern, fast React stacks.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Paintbrush,
      category: 'UI/UX Design + React Implementation',
      description: 'From Figma to pixel-perfect React code.',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
      id="services"
      role="region"
      aria-labelledby="services-heading"
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
              Our Services
            </span>
          </div>

          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            ReactJS Services We Offer
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Comprehensive React development solutions for every business need
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} mb-4 sm:mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>

                  {/* Category */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.category}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
