'use client';

/**
 * Hero Section Component - CLEAN TEXT-ONLY VERSION
 * High-impact hero with strong copy and clear CTAs
 * 
 * FEATURES:
 * - Clean, focused text content
 * - Strong value proposition
 * - Clear call-to-action buttons
 * - Urgency indicators
 * - City targeting
 * - Mobile-first responsive design
 * 
 * CONVERSION OPTIMIZATION:
 * - No visual distractions
 * - Focus on copy and CTAs
 * - Clear messaging
 * - Simple, effective layout
 * 
 * @version 4.0.0 - Simplified Text-Only Hero
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { ArrowRight, MapPin, Phone, Star } from 'lucide-react';

console.log('[Business-Website] HeroSection component loaded - TEXT-ONLY VERSION');

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    console.log('[Business-Website] HeroSection mounted - Text-only, no illustrations');
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
      className="relative"
      id="home"
      role="region"
      aria-labelledby="hero-heading"
    >
      <HeroHighlight 
        containerClassName="min-h-[85vh] md:min-h-screen"
        className="w-full"
      >
        <div className="container mx-auto px-3 sm:px-4 pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 relative z-10">
        
        {/* HERO: Centered Text Content Only */}
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

          {/* Main Headline */}
          <motion.h1 
            id="hero-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-6 tracking-tight leading-tight"
          >
            <span className="text-gray-900 dark:text-white block mb-2">
              Get More Customers{' '}
              <Highlight className="text-gray-900 dark:text-white">
                Online
              </Highlight>
            </span>
            <span className="block mb-2">
              <Highlight className="text-gray-900 dark:text-white bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500">
                Professional Websites That Convert
              </Highlight>
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl text-green-600 dark:text-green-400 block mt-2 sm:mt-3">
              Starting{' '}
              <Highlight className="text-green-600 dark:text-green-400 bg-gradient-to-r from-green-200 to-emerald-200 dark:from-green-700 dark:to-emerald-700">
                ₹13,999
              </Highlight>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-4 sm:mb-6 leading-snug sm:leading-relaxed px-2"
          >
            Professional, Fast Website for{' '}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Mumbai, Delhi, Bangalore
            </span>
            {' '}& All India 🇮🇳
          </motion.p>

          {/* Key Benefits */}
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

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col gap-2.5 sm:gap-3 justify-center items-stretch sm:items-center mb-5 sm:mb-8 max-w-md sm:max-w-none mx-auto px-2"
          >
            <Button 
              asChild
              size="lg"
              className="text-sm sm:text-base md:text-lg px-6 sm:px-10 py-5 sm:py-7 h-auto shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              onClick={() => console.log('[Business-Website] Hero CTA - Get My Website Quote clicked')}
            >
              <a href="#lead-form" className="flex items-center justify-center font-bold">
                💰 Get My Website Quote (Free)
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6 h-auto bg-white dark:bg-gray-800 backdrop-blur-sm w-full sm:w-auto border-2 hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={() => console.log('[Business-Website] Hero CTA - Talk to Expert clicked')}
            >
              <a href="tel:+919963730111" className="flex items-center justify-center gap-2 font-semibold">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>📞 Talk to Expert Now</span>
              </a>
            </Button>
          </motion.div>

          {/* URGENCY INDICATOR */}
          <motion.div
            variants={fadeInUp}
            className="mb-5 sm:mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-red-700 dark:text-red-300">
                ⚡ Only 3 Slots Left This Month - Book Now!
              </span>
            </div>
          </motion.div>

          {/* City Targeting Pills */}
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
      </HeroHighlight>
    </section>
  );
}
