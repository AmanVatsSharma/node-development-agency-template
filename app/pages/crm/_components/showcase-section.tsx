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
      visual: (
        <div className="w-full h-full p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center mb-2">
             <div className="h-4 w-32 bg-white/30 rounded"></div>
             <div className="h-8 w-8 bg-white/30 rounded-full"></div>
          </div>
          <div className="grid grid-cols-3 gap-4">
             <div className="h-24 bg-white/20 rounded-xl backdrop-blur-sm p-3">
                <div className="h-3 w-12 bg-white/40 rounded mb-2"></div>
                <div className="h-6 w-16 bg-white/60 rounded"></div>
             </div>
             <div className="h-24 bg-white/20 rounded-xl backdrop-blur-sm p-3">
                <div className="h-3 w-12 bg-white/40 rounded mb-2"></div>
                <div className="h-6 w-16 bg-white/60 rounded"></div>
             </div>
             <div className="h-24 bg-white/20 rounded-xl backdrop-blur-sm p-3">
                <div className="h-3 w-12 bg-white/40 rounded mb-2"></div>
                <div className="h-6 w-16 bg-white/60 rounded"></div>
             </div>
          </div>
          <div className="flex-1 bg-white/20 rounded-xl backdrop-blur-sm p-4 flex items-end justify-between gap-2">
             {[40, 70, 50, 90, 60, 80, 50].map((h, i) => (
               <div key={i} className="w-full bg-white/50 rounded-t" style={{ height: `${h}%` }}></div>
             ))}
          </div>
        </div>
      )
    },
    {
      title: 'Lead Pipeline',
      subtitle: 'Visual sales funnel management',
      benefit: 'Track deals from lead to close with drag-and-drop kanban boards',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-500',
      visual: (
        <div className="w-full h-full p-6 flex gap-4 overflow-hidden">
           {[1, 2, 3].map((col) => (
             <div key={col} className="w-1/3 bg-white/10 rounded-xl flex flex-col gap-3 p-3 backdrop-blur-md">
                <div className="h-4 w-20 bg-white/30 rounded mb-2"></div>
                <div className="h-20 bg-white/90 rounded-lg shadow-lg p-2">
                   <div className="h-3 w-16 bg-gray-200 rounded mb-2"></div>
                   <div className="h-2 w-full bg-gray-100 rounded"></div>
                </div>
                <div className="h-20 bg-white/90 rounded-lg shadow-lg p-2 opacity-80"></div>
             </div>
           ))}
        </div>
      )
    },
    {
      title: 'Invoice Management',
      subtitle: 'Professional billing made easy',
      benefit: 'Create, send, and track invoices with automated payment reminders',
      icon: <FileText className="h-6 w-6" />,
      color: 'from-orange-500 to-amber-500',
      visual: (
        <div className="w-full h-full p-8 flex items-center justify-center">
           <div className="w-3/4 aspect-[3/4] bg-white shadow-2xl rounded-lg p-6 flex flex-col gap-3 transform rotate-[-5deg]">
              <div className="flex justify-between items-center border-b pb-4 border-gray-100">
                 <div className="h-8 w-8 bg-orange-500 rounded-full"></div>
                 <div className="text-right">
                    <div className="h-3 w-20 bg-gray-200 rounded mb-1"></div>
                    <div className="h-3 w-12 bg-gray-200 rounded ml-auto"></div>
                 </div>
              </div>
              <div className="space-y-2 mt-4">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="flex justify-between">
                      <div className="h-3 w-32 bg-gray-100 rounded"></div>
                      <div className="h-3 w-10 bg-gray-200 rounded"></div>
                   </div>
                 ))}
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                 <div className="h-4 w-16 bg-gray-200 rounded"></div>
                 <div className="h-6 w-24 bg-green-500 rounded-full"></div>
              </div>
           </div>
        </div>
      )
    },
    {
      title: 'BharatERP Integration',
      subtitle: 'Seamlessly connected ecosystem',
      benefit: 'Sync data across CRM, Accounts, Inventory, and HRM in real-time',
      icon: <Link2 className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-500',
      visual: (
        <div className="w-full h-full relative flex items-center justify-center">
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-dashed border-white/30 rounded-full animate-spin-slow"></div>
           </div>
           <div className="h-20 w-20 bg-white rounded-2xl shadow-xl flex items-center justify-center z-10">
              <div className="h-10 w-10 bg-purple-600 rounded-lg"></div>
           </div>
           {[0, 90, 180, 270].map((deg, i) => (
             <div key={i} className="absolute h-12 w-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center" 
                  style={{ transform: `rotate(${deg}deg) translate(100px) rotate(-${deg}deg)` }}>
                <div className="h-6 w-6 bg-white/80 rounded-full"></div>
             </div>
           ))}
        </div>
      )
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
                    <div className={`aspect-video rounded-2xl bg-gradient-to-br ${slides[currentSlide].color} shadow-2xl overflow-hidden`}>
                      {slides[currentSlide].visual}
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
