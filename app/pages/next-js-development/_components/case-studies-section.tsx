'use client';

/**
 * Case Studies Section
 * Real results and success stories
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ChevronLeft, ChevronRight, TrendingUp, Zap, BarChart } from 'lucide-react';

console.log('[Next-JS-Dev] CaseStudiesSection component loaded');

interface CaseStudy {
  icon: React.ElementType;
  title: string;
  description: string;
  metric: string;
  result: string;
  gradient: string;
}

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    console.log('[Next-JS-Dev] CaseStudiesSection mounted');
    return () => console.log('[Next-JS-Dev] CaseStudiesSection unmounted');
  }, []);

  const caseStudies: CaseStudy[] = [
    {
      icon: BarChart,
      title: 'Case 1: EduSpark (SaaS Platform)',
      description: 'Migrated from React → Next.js + NestJS',
      metric: 'Load time: 2.8s → 0.8s',
      result: '+43% organic traffic',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Case 2: InLocal Store (E-commerce)',
      description: 'Headless Shopify + Next.js ISR',
      metric: 'Indexed 2× faster',
      result: '+37% conversion rate',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Case 3: TechNova Agency',
      description: 'Corporate site rebuild with Next.js',
      metric: 'Site speed 95/100',
      result: '+122% leads within 3 months',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950"
      id="case-studies"
      role="region"
      aria-labelledby="case-studies-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-4 sm:mb-5 border border-indigo-200 dark:border-indigo-800 text-sm sm:text-base">
            <span className="font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide">
              Proven Results
            </span>
          </div>

          <h2
            id="case-studies-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            Case Studies & Results
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Real projects. Real metrics. Real business impact.
          </p>
        </motion.div>

        {/* Case Studies Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Cards */}
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {caseStudies.map((study, index) => {
                  const Icon = study.icon;
                  return (
                    <div
                      key={index}
                      className="min-w-full px-2 sm:px-4"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border-2 border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden"
                      >
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-5 dark:opacity-10`} />
                        
                        <div className="relative z-10 text-center">
                          {/* Icon */}
                          <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${study.gradient} mb-6 shadow-xl`}>
                            <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {study.title}
                          </h3>

                          {/* Description */}
                          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">
                            {study.description}
                          </p>

                          {/* Metrics */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 sm:p-6 border border-blue-200 dark:border-blue-800">
                              <div className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                                Key Metric
                              </div>
                              <div className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                                {study.metric}
                              </div>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 sm:p-6 border border-green-200 dark:border-green-800">
                              <div className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                                Business Impact
                              </div>
                              <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">
                                {study.result}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6 sm:mt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={prevSlide}
                className="rounded-full w-12 h-12 p-0"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={nextSlide}
                className="rounded-full w-12 h-12 p-0"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-indigo-600 dark:bg-indigo-400 w-8'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-10 sm:mt-14"
          >
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 h-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl font-bold"
              onClick={() => console.log('[Next-JS-Dev] Case Studies CTA clicked')}
            >
              <a href="#lead-form" className="flex items-center gap-2">
                📂 Explore Full Case Studies →
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
