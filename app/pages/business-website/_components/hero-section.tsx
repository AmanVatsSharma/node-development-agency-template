'use client';

/**
 * Hero Section Component
 * High-impact hero with Indian city targeting and immediate lead capture CTA
 * Features: Animated background, trust badges, dual CTAs
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, MapPin, Phone, Star } from 'lucide-react';

console.log('[Business-Website] HeroSection component loaded');

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    console.log('[Business-Website] HeroSection mounted');
    return () => console.log('[Business-Website] HeroSection unmounted');
  }, []);

  const INDIAN_CITIES = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata'];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950"
      id="home"
      role="region"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-gray-100/[0.02]" />

      <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Trust Badge */}
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-4 sm:mb-5 border border-green-200 dark:border-green-800 shadow-sm text-xs sm:text-sm"
          >
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              4.9/5 by 500+ Indian Businesses
            </span>
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-yellow-500" />
          </motion.div>

          {/* Main Headline - Optimized for Mobile */}
          <motion.h1 
            id="hero-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-4 md:mb-6 tracking-tight leading-tight"
          >
            <span className="text-gray-900 dark:text-white block mb-1">
              Website for Your Business
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 block">
              Just ₹13,999
            </span>
          </motion.h1>

          {/* Subheadline - Compact for Mobile */}
          <motion.p 
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-4 sm:mb-6 leading-snug sm:leading-relaxed px-2"
          >
            Professional, Fast Website for{' '}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Mumbai, Delhi, Bangalore
            </span>
            {' '}& All India 🇮🇳
          </motion.p>

          {/* Key Benefits - Compact Grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 mb-5 sm:mb-8 text-xs sm:text-sm max-w-lg sm:max-w-none mx-auto"
          >
            {[
              '✅ 14-21 Days',
              '✅ Mobile-First',
              '✅ SEO Ready',
              '✅ No Hidden Cost'
            ].map((benefit, index) => (
              <div 
                key={index}
                className="px-2 sm:px-3 py-1.5 sm:py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 font-medium text-gray-800 dark:text-gray-200 shadow-sm text-center"
              >
                {benefit}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons - Stack on Mobile */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col gap-2.5 sm:gap-3 justify-center items-stretch sm:items-center mb-5 sm:mb-8 max-w-md sm:max-w-none mx-auto px-2"
          >
            <Button 
              asChild
              size="lg"
              className="text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6 h-auto shadow-xl hover:shadow-2xl transition-shadow w-full sm:w-auto"
              onClick={() => console.log('[Business-Website] Hero CTA - Get Free Quote clicked')}
            >
              <a href="#lead-form" className="flex items-center justify-center">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6 h-auto bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm w-full sm:w-auto"
              onClick={() => console.log('[Business-Website] Hero CTA - Call Now clicked')}
            >
              <a href="tel:+919963730111" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Call: +91 99637 30111</span>
              </a>
            </Button>
          </motion.div>

          {/* City Targeting Pills - Compact */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-xl mx-auto text-xs px-2"
          >
            <span className="text-gray-600 dark:text-gray-400 font-medium w-full sm:w-auto mb-1 sm:mb-0">
              We serve:
            </span>
            {INDIAN_CITIES.slice(0, 5).map((city, index) => (
              <div 
                key={index}
                className="inline-flex items-center gap-0.5 sm:gap-1 px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium"
              >
                <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                <span>{city}</span>
              </div>
            ))}
            <div className="inline-flex items-center gap-0.5 px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium">
              +More
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements - Hidden on Mobile */}
      <div className="hidden md:block absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="hidden md:block absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
    </section>
  );
}

