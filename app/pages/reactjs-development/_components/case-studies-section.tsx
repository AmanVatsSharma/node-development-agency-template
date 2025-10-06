'use client';

/**
 * Case Studies Section - PREMIUM SWIPEABLE VERSION
 * App-like swipeable cards with stunning animations
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { TrendingUp, Zap, BarChart, Users, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

console.log('[ReactJS-Dev] CaseStudiesSection component loaded');

interface CaseStudy {
  icon: React.ElementType;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    trend: string;
  }[];
  gradient: string;
  image?: string;
}

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    console.log('[ReactJS-Dev] CaseStudiesSection mounted');
    return () => console.log('[ReactJS-Dev] CaseStudiesSection unmounted');
  }, []);

  const caseStudies: CaseStudy[] = [
    {
      icon: BarChart,
      title: 'Real-Time Fintech Dashboard',
      company: 'FinanceFlow',
      industry: 'Fintech SaaS',
      challenge: 'Legacy dashboard couldn\'t handle real-time data updates with 10K+ concurrent users',
      solution: 'Built lightning-fast React dashboard with WebSocket integration and optimized re-renders',
      metrics: [
        { label: 'Load Time Reduced', value: '73%', trend: '2.8s → 0.8s' },
        { label: 'Concurrent Users', value: '10K+', trend: 'No lag' },
        { label: 'Customer Retention', value: '+45%', trend: '3 months' }
      ],
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      image: '/illustrations/reactjs/fintech-dashboard.png'
    },
    {
      icon: Users,
      title: 'Enterprise CRM System',
      company: 'SalesHub Pro',
      industry: 'B2B SaaS',
      challenge: 'Complex CRM needed for managing 2000+ daily active users with advanced filtering',
      solution: 'Developed modular React CRM with Redux state management and optimized data tables',
      metrics: [
        { label: 'Daily Active Users', value: '2,000+', trend: 'Stable' },
        { label: 'User Satisfaction', value: '+85%', trend: 'NPS 72' },
        { label: 'Feature Adoption', value: '94%', trend: 'First month' }
      ],
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      image: '/illustrations/reactjs/crm-interface.png'
    },
    {
      icon: TrendingUp,
      title: 'Legacy App Modernization',
      company: 'RetailMax',
      industry: 'E-commerce',
      challenge: 'Outdated PHP monolith causing poor UX and high bounce rates',
      solution: 'Migrated to modern React stack with API-driven architecture and SSR',
      metrics: [
        { label: 'Performance Boost', value: '5x', trend: 'Core Web Vitals' },
        { label: 'User Retention', value: '+127%', trend: '6 months' },
        { label: 'Conversion Rate', value: '+68%', trend: 'Checkout flow' }
      ],
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      image: '/illustrations/reactjs/ecommerce-app.png'
    }
  ];

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % caseStudies.length;
      }
      return (prev - 1 + caseStudies.length) % caseStudies.length;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold) {
      paginate(1); // Swipe left
    } else if (diff < -threshold) {
      paginate(-1); // Swipe right
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  };

  const currentStudy = caseStudies[activeIndex];
  const Icon = currentStudy.icon;

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-32 lg:py-40 bg-[#F8FAFF] dark:bg-[#0A0A0A] overflow-hidden"
      id="case-studies"
      role="region"
      aria-labelledby="case-studies-heading"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#61DAFB]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#00C897]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#61DAFB]/10 to-[#00C897]/10 backdrop-blur-xl rounded-full mb-6 sm:mb-8 border border-[#61DAFB]/30 shadow-lg"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#61DAFB]" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#61DAFB] to-[#00C897] bg-clip-text text-transparent uppercase tracking-wider">
              Success Stories
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="case-studies-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              React Projects
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] bg-clip-text text-transparent">
              In Action
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Real projects. Real metrics. Real business impact.
          </motion.p>

          {/* Swipe instruction for mobile */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 text-sm text-gray-500 dark:text-gray-500 lg:hidden"
          >
            👆 Swipe to explore case studies
          </motion.p>
        </motion.div>

        {/* Premium Swipeable Card */}
        <div className="max-w-6xl mx-auto mb-12">
          <div 
            className="relative h-[600px] sm:h-[650px] md:h-[700px]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <div className="relative h-full bg-white dark:bg-gray-900 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-12 border-2 border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden">
                  
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentStudy.gradient} opacity-5 dark:opacity-10`} />
                  
                  {/* Glow Effect */}
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#61DAFB]/20 to-[#00C897]/20 rounded-full blur-3xl" />

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6 sm:mb-8">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${currentStudy.gradient} flex items-center justify-center shadow-xl`}
                        >
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </motion.div>

                        <div>
                          {/* Industry Badge */}
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#61DAFB]/10 to-[#00C897]/10 rounded-full mb-2 border border-[#61DAFB]/30">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#61DAFB] to-[#00C897] animate-pulse" />
                            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                              {currentStudy.industry}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-1">
                            {currentStudy.title}
                          </h3>
                          <p className="text-sm sm:text-base text-[#61DAFB] font-bold">
                            {currentStudy.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 rounded-2xl p-5 border border-red-200 dark:border-red-800/30">
                        <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-2">
                          Challenge
                        </p>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                          {currentStudy.challenge}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-2xl p-5 border border-green-200 dark:border-green-800/30">
                        <p className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-2">
                          Solution
                        </p>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                          {currentStudy.solution}
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="mt-auto">
                      <p className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">
                        Key Results
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {currentStudy.metrics.map((metric, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-gray-200 dark:border-gray-700 text-center"
                          >
                            <div className={`text-3xl sm:text-4xl font-black mb-2 bg-gradient-to-r ${currentStudy.gradient} bg-clip-text text-transparent`}>
                              {metric.value}
                            </div>
                            <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white mb-1">
                              {metric.label}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-500">
                              {metric.trend}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-[#61DAFB] dark:hover:border-[#61DAFB] transition-all shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`transition-all ${
                    index === activeIndex
                      ? 'w-8 h-3 bg-gradient-to-r from-[#61DAFB] to-[#00C897] rounded-full'
                      : 'w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-[#61DAFB] dark:hover:border-[#61DAFB] transition-all shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="#lead-form"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#61DAFB] to-[#00C897] text-white text-base sm:text-lg font-black rounded-2xl shadow-2xl hover:shadow-[#61DAFB]/50 transition-all"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
