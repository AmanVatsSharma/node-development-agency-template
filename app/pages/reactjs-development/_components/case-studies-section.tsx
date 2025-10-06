'use client';

/**
 * Case Studies Section
 * Real results and success stories with swipeable cards
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ChevronLeft, ChevronRight, TrendingUp, Zap, BarChart, Users } from 'lucide-react';

console.log('[ReactJS-Dev] CaseStudiesSection component loaded');

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('[ReactJS-Dev] CaseStudiesSection mounted');
    return () => console.log('[ReactJS-Dev] CaseStudiesSection unmounted');
  }, []);

  const caseStudies: CaseStudy[] = [
    {
      icon: BarChart,
      title: 'Real-time Fintech SaaS Dashboard',
      description: 'Built a real-time dashboard for a fintech SaaS platform',
      metric: 'Load time reduced by 73%',
      result: 'Handling 10K+ concurrent users',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'React-based CRM System',
      description: 'Developed React-based CRM with advanced features',
      metric: '2,000+ daily active users',
      result: '+85% user satisfaction',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Legacy PHP to React Migration',
      description: 'Migrated legacy PHP app to modern ReactJS stack',
      metric: 'Performance improved 5x',
      result: '+127% user retention',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % caseStudies.length;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + caseStudies.length) % caseStudies.length;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / caseStudies.length;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-[#61DAFB]/5 to-[#00C897]/5 dark:from-gray-950 dark:via-[#61DAFB]/5 dark:to-[#00C897]/5"
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
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-[#61DAFB]/20 to-[#00C897]/20 rounded-full mb-4 sm:mb-5 border border-[#61DAFB] text-sm sm:text-base">
            <span className="font-bold text-[#61DAFB] dark:text-[#61DAFB] uppercase tracking-wide">
              📈 Proven Results
            </span>
          </div>

          <h2
            id="case-studies-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            Our React Projects in Action
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Real projects. Real metrics. Real business impact.
          </p>
        </motion.div>

        {/* Case Studies Carousel - SWIPEABLE on Mobile */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop: Transform carousel, Mobile: Swipeable */}
          <div className="relative">
            {/* Swipeable Container - Mobile First */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-4 lg:overflow-hidden"
              onScroll={(e) => {
                const container = e.currentTarget;
                const cardWidth = container.scrollWidth / caseStudies.length;
                const newIndex = Math.round(container.scrollLeft / cardWidth);
                if (newIndex !== activeIndex) {
                  setActiveIndex(newIndex);
                }
              }}
            >
              {caseStudies.map((study, index) => {
                const Icon = study.icon;
                return (
                  <div
                    key={index}
                    className="min-w-full lg:min-w-0 snap-start"
                    style={{ transform: `translateX(-${activeIndex * 100}%)`, transition: 'transform 0.5s ease' }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="relative bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden"
                    >
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-5 dark:opacity-10`} />
                      
                      <div className="relative z-10 text-center">
                        {/* Icon */}
                        <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${study.gradient} mb-6 shadow-xl`}>
                          <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                          {study.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6">
                          {study.description}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
                          <div className="bg-gradient-to-br from-[#61DAFB]/10 to-[#61DAFB]/20 dark:from-[#61DAFB]/20 dark:to-[#61DAFB]/30 rounded-xl p-4 sm:p-6 border border-[#61DAFB]">
                            <div className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                              Key Metric
                            </div>
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#61DAFB]">
                              {study.metric}
                            </div>
                          </div>
                          <div className="bg-gradient-to-br from-[#00C897]/10 to-[#00C897]/20 dark:from-[#00C897]/20 dark:to-[#00C897]/30 rounded-xl p-4 sm:p-6 border border-[#00C897]">
                            <div className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                              Business Impact
                            </div>
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#00C897]">
                              {study.result}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons - Desktop */}
            <div className="hidden lg:flex justify-center gap-4 mt-6 sm:mt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={prevSlide}
                className="rounded-full w-12 h-12 p-0 border-[#61DAFB] hover:bg-[#61DAFB]/10"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={nextSlide}
                className="rounded-full w-12 h-12 p-0 border-[#61DAFB] hover:bg-[#61DAFB]/10"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    scrollToIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-[#61DAFB] w-8'
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
              className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 h-auto bg-gradient-to-r from-[#61DAFB] to-[#00C897] hover:from-[#50c9ea] hover:to-[#00b786] text-[#1E1E1E] shadow-xl font-bold"
              onClick={() => console.log('[ReactJS-Dev] Case Studies CTA clicked')}
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
