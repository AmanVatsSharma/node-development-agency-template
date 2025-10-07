'use client';

/**
 * @fileoverview Visual Showcase Section - EnterpriseHero CRM
 * @description Carousel with dashboard screens and feature benefits
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  BarChart3, 
  TrendingUp, 
  FileText, 
  Link2
} from 'lucide-react';

console.log('[CRM] ShowcaseSection component loaded');

export function ShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Analytics Dashboard',
      subtitle: 'Real-time insights at your fingertips',
      benefit: 'Make data-driven decisions with live metrics, charts, and KPI tracking',
      icon: <BarChart3 className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-500',
      image: '📊 Dashboard Preview' // Placeholder - replace with actual image
    },
    {
      title: 'Lead Pipeline',
      subtitle: 'Visual sales funnel management',
      benefit: 'Track deals from lead to close with drag-and-drop kanban boards',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-500',
      image: '🎯 Pipeline View' // Placeholder
    },
    {
      title: 'Invoice Management',
      subtitle: 'Professional billing made easy',
      benefit: 'Create, send, and track invoices with automated payment reminders',
      icon: <FileText className="h-6 w-6" />,
      color: 'from-orange-500 to-amber-500',
      image: '📄 Invoice List' // Placeholder
    },
    {
      title: 'BharatERP Integration',
      subtitle: 'Seamlessly connected ecosystem',
      benefit: 'Sync data across CRM, Accounts, Inventory, and HRM in real-time',
      icon: <Link2 className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-500',
      image: '🔗 Integration Hub' // Placeholder
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    console.log('[CRM] ShowcaseSection - Next slide:', currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    console.log('[CRM] ShowcaseSection - Previous slide:', currentSlide - 1);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      id="showcase"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
              See It In <span className="bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#00C897] bg-clip-text text-transparent">Action</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore the powerful features that make EnterpriseHero CRM the choice of modern businesses.
            </p>
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* Main Slide Container */}
            <div className="relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-2xl">
              
              {/* Slide Content */}
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  
                  {/* Left: Info */}
                  <div>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${slides[currentSlide].color} rounded-full text-white mb-6 shadow-lg`}>
                      {slides[currentSlide].icon}
                      <span className="font-bold text-sm">Feature Highlight</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                      {slides[currentSlide].title}
                    </h3>

                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                      {slides[currentSlide].subtitle}
                    </p>

                    <div className="p-6 bg-gradient-to-r from-[#FFD700]/10 to-[#002F9E]/10 rounded-2xl border border-[#FFD700]/30">
                      <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                        💡 {slides[currentSlide].benefit}
                      </p>
                    </div>
                  </div>

                  {/* Right: Visual Preview */}
                  <div className="relative">
                    <div className={`aspect-video rounded-2xl bg-gradient-to-br ${slides[currentSlide].color} flex items-center justify-center text-white text-4xl font-black shadow-2xl`}>
                      {slides[currentSlide].image}
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${slides[currentSlide].color} opacity-20 blur-2xl -z-10`} />
                  </div>

                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-gray-900 dark:text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-gray-900 dark:text-white" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all ${
                    index === currentSlide
                      ? 'w-12 h-3 bg-gradient-to-r from-[#002F9E] to-[#FFD700]'
                      : 'w-3 h-3 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400'
                  } rounded-full`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
