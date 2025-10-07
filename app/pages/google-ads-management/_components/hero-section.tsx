'use client';

/**
 * Hero Section Component - Google Ads Management Landing Page
 * "Turn Clicks into Customers with Google Ads That Actually Work"
 * CONVERSION OPTIMIZED for high-ticket Google Ads clients
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { ArrowRight, TrendingUp, TrendingDown, Eye, Target, Zap } from 'lucide-react';

console.log('[Google-Ads] HeroSection component loaded');

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [cpc, setCpc] = useState(150);
  const [roi, setRoi] = useState(100);

  useEffect(() => {
    console.log('[Google-Ads] HeroSection mounted');
    
    // Animate metrics: CPC decreasing, ROI increasing
    if (inView) {
      // CPC decreases from 150 to 45
      let currentCpc = 150;
      const cpcInterval = setInterval(() => {
        currentCpc = Math.max(45, currentCpc - 3);
        setCpc(currentCpc);
        if (currentCpc <= 45) clearInterval(cpcInterval);
      }, 30);

      // ROI increases from 100 to 480
      let currentRoi = 100;
      const roiInterval = setInterval(() => {
        currentRoi = Math.min(480, currentRoi + 10);
        setRoi(currentRoi);
        if (currentRoi >= 480) clearInterval(roiInterval);
      }, 30);

      return () => {
        clearInterval(cpcInterval);
        clearInterval(roiInterval);
      };
    }
  }, [inView]);

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
        containerClassName="min-h-screen"
        className="w-full"
      >
        <div className="container mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
            
            {/* LEFT: Copy + CTA */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Micro Trust Bar - MOBILE OPTIMIZED */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6 text-[10px] sm:text-xs"
              >
                {[
                  { icon: <Target className="h-3 w-3" />, text: 'Certified Experts' },
                  { icon: <TrendingUp className="h-3 w-3" />, text: '10× ROAS' },
                  { icon: <Zap className="h-3 w-3" />, text: '48hr Optimization' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-full border border-blue-200 dark:border-blue-700 font-bold text-blue-700 dark:text-blue-300 shadow-lg"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Main Headline - MOBILE OPTIMIZED */}
              <motion.h1 
                id="hero-heading"
                variants={fadeInUp}
                className="text-[28px] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-5 tracking-tight"
              >
                <span className="text-gray-900 dark:text-white block mb-2">
                  Turn Clicks into Customers
                </span>
                <span className="block">
                  <Highlight className="text-gray-900 dark:text-white bg-gradient-to-r from-blue-400 via-blue-500 to-yellow-400 dark:from-blue-500 dark:via-blue-600 dark:to-yellow-500">
                    with Google Ads
                  </Highlight>
                </span>
              </motion.h1>

              {/* Sub-headline - MOBILE OPTIMIZED */}
              <motion.p 
                variants={fadeInUp}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-3 leading-relaxed"
              >
                <span className="font-bold text-blue-600 dark:text-blue-400">Drive qualified leads & sales</span> with{' '}
                <span className="font-bold text-yellow-600 dark:text-yellow-400">performance-focused Google Ads</span> management.
              </motion.p>

              <motion.p 
                variants={fadeInUp}
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
              >
                We create, optimize, and scale Google Ads campaigns that bring <span className="font-bold text-green-600 dark:text-green-400">real ROI</span> — not just clicks.
              </motion.p>

              {/* CTA Buttons - MOBILE OPTIMIZED */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col gap-3 mb-6"
              >
                <Button 
                  asChild
                  size="lg"
                  className="w-full text-base sm:text-lg px-8 py-7 h-auto shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(26,115,232,0.5)] transition-all active:scale-95 bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 hover:from-blue-700 hover:via-blue-800 hover:to-yellow-600 rounded-2xl font-black"
                  onClick={() => console.log('[Google-Ads] Hero CTA - Request Free Ad Audit clicked')}
                >
                  <a href="#lead-form" className="flex items-center justify-center gap-2">
                    📊 Request Free Ad Audit Now
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full text-base px-8 py-6 h-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-2 border-blue-300 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 font-bold rounded-2xl shadow-lg active:scale-95 transition-all"
                  onClick={() => console.log('[Google-Ads] Hero CTA - See Our Results clicked')}
                >
                  <a href="#case-studies" className="flex items-center justify-center gap-2">
                    <Eye className="h-5 w-5" />
                    See Our Results
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* RIGHT: Animated Google Ads Dashboard Preview - MOBILE OPTIMIZED */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2 px-2 sm:px-0"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                {/* Google Ads Dashboard Mockup - MOBILE OPTIMIZED */}
                <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-gray-900">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-black text-xs sm:text-sm">G</span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">Google Ads Dashboard</span>
                    </div>
                    <div className="text-[10px] sm:text-xs text-green-600 dark:text-green-400 font-bold bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full">
                      Live
                    </div>
                  </div>

                  {/* Metrics Cards */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* CPC Metric - Decreasing */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 border-2 border-gray-200 dark:border-gray-700 shadow-md">
                      <div className="flex items-center gap-1 mb-1">
                        <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                        <span className="text-[10px] sm:text-xs font-bold text-gray-600 dark:text-gray-400">CPC</span>
                      </div>
                      <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
                        ₹{cpc}
                      </div>
                      <div className="text-[10px] sm:text-xs text-green-600 dark:text-green-400 font-bold">
                        ↓ 70% lower
                      </div>
                    </div>

                    {/* ROI Metric - Increasing */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-3 sm:p-4 border-2 border-blue-500 shadow-md">
                      <div className="flex items-center gap-1 mb-1">
                        <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
                        <span className="text-[10px] sm:text-xs font-bold text-blue-100">ROI</span>
                      </div>
                      <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                        {roi}%
                      </div>
                      <div className="text-[10px] sm:text-xs text-yellow-400 font-bold">
                        ↑ 380% growth
                      </div>
                    </div>
                  </div>

                  {/* Performance Chart Visualization */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 border-2 border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">Campaign Performance</span>
                      <span className="text-[10px] sm:text-xs text-blue-600 dark:text-blue-400 font-bold">Last 30 Days</span>
                    </div>
                    
                    {/* Simple Bar Chart */}
                    <div className="flex items-end justify-between gap-1 h-20 sm:h-24">
                      {[40, 55, 45, 70, 65, 85, 95].map((height, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ height: 0 }}
                          animate={inView ? { height: `${height}%` } : {}}
                          transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
                          className="flex-1 bg-gradient-to-t from-blue-600 to-yellow-500 rounded-t-md"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Status Badges */}
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-2 border-blue-200 dark:border-blue-700 shadow-md">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300">Optimized</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-2 border-yellow-200 dark:border-yellow-700 shadow-md">
                      <Target className="h-3 w-3 text-yellow-600" />
                      <span className="text-[10px] font-bold text-yellow-700 dark:text-yellow-300">Targeted</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-yellow-500/20 rounded-3xl blur-2xl -z-10" />
            </motion.div>

          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
