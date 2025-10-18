'use client';

/**
 * Hero Section Component - ENHANCED WITH OPTION 1: Website Transformation Visualization
 * High-impact hero with Indian city targeting and immediate lead capture CTA
 * Features: 
 * - Animated website transformation (Old vs New)
 * - Interactive hover effects with HeroHighlight
 * - Real-time metric animations (speed, leads, SEO)
 * - Mobile-first responsive design
 * 
 * CONVERSION OPTIMIZATION:
 * - Visual before/after creates emotional impact
 * - Animated metrics demonstrate value proposition
 * - Clear CTAs with urgency indicators
 * 
 * @version 2.0.0 - Added Website Transformation Visualization
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { ArrowRight, MapPin, Phone, Star, Zap, X, Check } from 'lucide-react';

console.log('[Business-Website] HeroSection component loaded - WITH Website Transformation');

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  // Animation states for Website Transformation metrics
  const [oldSpeed, setOldSpeed] = useState(0);
  const [newSpeed, setNewSpeed] = useState(0);
  const [leadsIncrease, setLeadsIncrease] = useState(0);

  useEffect(() => {
    console.log('[Business-Website] HeroSection mounted');
    
    // Animate metrics when hero comes into view
    if (inView) {
      console.log('[Business-Website] Starting Website Transformation animation');
      
      // Old website speed: 0 -> 4.2s (slow)
      let old = 0;
      const oldInterval = setInterval(() => {
        old += 0.1;
        setOldSpeed(Math.min(4.2, old));
        if (old >= 4.2) {
          clearInterval(oldInterval);
          console.log('[Business-Website] Old speed animation complete');
        }
      }, 50);
      
      // New website speed: 0 -> 0.8s (fast) - starts after a delay
      setTimeout(() => {
        let newS = 0;
        const newInterval = setInterval(() => {
          newS += 0.05;
          setNewSpeed(Math.min(0.8, newS));
          if (newS >= 0.8) {
            clearInterval(newInterval);
            console.log('[Business-Website] New speed animation complete');
          }
        }, 50);
      }, 500);
      
      // Leads increase: 0 -> 65%
      setTimeout(() => {
        let leads = 0;
        const leadsInterval = setInterval(() => {
          leads += 2;
          setLeadsIncrease(Math.min(65, leads));
          if (leads >= 65) {
            clearInterval(leadsInterval);
            console.log('[Business-Website] Leads increase animation complete');
          }
        }, 30);
      }, 1000);
    }
    
    return () => console.log('[Business-Website] HeroSection unmounted');
  }, [inView]);

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
        
        {/* HERO GRID: Text Left, Transformation Visual Right on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
        
        {/* ============================================
            LEFT SIDE: Hero Text Content
            ============================================ */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="text-center lg:text-left order-2 lg:order-1"
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

          {/* Main Headline - CONVERSION OPTIMIZED: Benefit-focused with Highlight effect */}
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

          {/* Subheadline - Compact for Mobile */}
          <motion.p 
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto lg:mx-0 mb-4 sm:mb-6 leading-snug sm:leading-relaxed px-2 lg:px-0"
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
            className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-5 sm:mb-8 text-xs sm:text-sm max-w-lg sm:max-w-none mx-auto lg:mx-0"
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

          {/* CTA Buttons - CONVERSION OPTIMIZED: Action-specific copy */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col gap-2.5 sm:gap-3 justify-center lg:justify-start items-stretch sm:items-start mb-5 sm:mb-8 max-w-md sm:max-w-none mx-auto lg:mx-0 px-2 lg:px-0"
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

          {/* URGENCY INDICATOR - Creates FOMO */}
          <motion.div
            variants={fadeInUp}
            className="mb-5 sm:mb-8 flex justify-center lg:justify-start"
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

          {/* City Targeting Pills - Compact */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 max-w-xl mx-auto lg:mx-0 text-xs px-2 lg:px-0"
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
        
        {/* ============================================
            RIGHT SIDE: Website Transformation Visualization - OPTION 1
            Interactive before/after comparison showing old vs new website
            ============================================ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative order-1 lg:order-2"
        >
          {/* Main Container with Glass Effect */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
            
            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                💫 Website Transformation
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                See the dramatic difference
              </p>
            </div>
            
            {/* Before/After Split Comparison */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              
              {/* OLD WEBSITE - Left Side (Outdated, Slow) */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Old Website</span>
                </div>
                
                {/* Old Website Visual Mockup */}
                <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl p-3 border-2 border-gray-400 dark:border-gray-600">
                  {/* Sad face emoji */}
                  <div className="text-4xl text-center mb-2">😞</div>
                  {/* Loading bars (slow) */}
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-400 dark:bg-gray-600 rounded w-3/4 animate-pulse" />
                    <div className="h-2 bg-gray-400 dark:bg-gray-600 rounded w-1/2 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="h-2 bg-gray-400 dark:bg-gray-600 rounded w-2/3 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
                
                {/* Old Website Problems */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-red-600 dark:text-red-400">
                    <X className="h-3 w-3" />
                    <span className="font-semibold">{oldSpeed.toFixed(1)}s Load</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-red-600 dark:text-red-400">
                    <X className="h-3 w-3" />
                    <span className="font-semibold">Not Mobile</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-red-600 dark:text-red-400">
                    <X className="h-3 w-3" />
                    <span className="font-semibold">Poor SEO</span>
                  </div>
                </div>
              </div>
              
              {/* NEW WEBSITE - Right Side (Modern, Fast) */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">New Website</span>
                </div>
                
                {/* New Website Visual Mockup */}
                <div className="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-3 border-2 border-indigo-300 dark:border-indigo-600 shadow-lg">
                  {/* Rocket emoji */}
                  <div className="text-4xl text-center mb-2">🚀</div>
                  {/* Loading bars (fast) */}
                  <div className="space-y-2">
                    <div className="h-2 bg-white/90 rounded w-3/4" />
                    <div className="h-2 bg-white/80 rounded w-1/2" />
                    <div className="h-2 bg-white/90 rounded w-2/3" />
                  </div>
                </div>
                
                {/* New Website Benefits */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-green-600 dark:text-green-400">
                    <Check className="h-3 w-3" />
                    <span className="font-semibold">{newSpeed.toFixed(1)}s Load</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-green-600 dark:text-green-400">
                    <Check className="h-3 w-3" />
                    <span className="font-semibold">Mobile-First</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-green-600 dark:text-green-400">
                    <Check className="h-3 w-3" />
                    <span className="font-semibold">SEO Ready</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Transformation Arrow with Animation */}
            <div className="flex items-center justify-center mb-6">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg"
              >
                <Zap className="h-4 w-4 text-white" />
                <span className="text-white font-black text-xs sm:text-sm">UPGRADE</span>
                <ArrowRight className="h-4 w-4 text-white" />
              </motion.div>
            </div>
            
            {/* Impact Metrics - Shows Transformation Results */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {/* Speed Improvement */}
              <div className="text-center p-2 sm:p-3 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <Zap className="h-4 w-4 text-green-600 dark:text-green-400 mx-auto mb-1" />
                <div className="text-lg sm:text-2xl font-black text-green-600 dark:text-green-400">2.5×</div>
                <div className="text-[9px] sm:text-xs text-gray-600 dark:text-gray-400 font-medium">Faster</div>
              </div>
              
              {/* Leads Increase */}
              <div className="text-center p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📈
                </motion.div>
                <div className="text-lg sm:text-2xl font-black text-blue-600 dark:text-blue-400">{leadsIncrease}%</div>
                <div className="text-[9px] sm:text-xs text-gray-600 dark:text-gray-400 font-medium">More Leads</div>
              </div>
              
              {/* SEO Score */}
              <div className="text-center p-2 sm:p-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <Star className="h-4 w-4 text-purple-600 dark:text-purple-400 mx-auto mb-1 fill-purple-600 dark:fill-purple-400" />
                <div className="text-lg sm:text-2xl font-black text-purple-600 dark:text-purple-400">90+</div>
                <div className="text-[9px] sm:text-xs text-gray-600 dark:text-gray-400 font-medium">SEO Score</div>
              </div>
            </div>
          </div>
          
          {/* Outer Glow Effect for Premium Feel */}
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl -z-10 opacity-50" />
        </motion.div>
        
        </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
