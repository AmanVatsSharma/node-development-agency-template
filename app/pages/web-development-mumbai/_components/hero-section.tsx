'use client';

/**
 * Hero Section Component - MUMBAI-FOCUSED WITH 3D WEBSITE SHOWCASE
 * High-impact hero with Mumbai skyline, 3D website showcase, and strong CTAs
 * 
 * FEATURES:
 * - Mumbai skyline background illustration
 * - 3D interactive website showcase
 * - Strong value proposition for Mumbai market
 * - Clear call-to-action buttons
 * - Urgency indicators
 * - Mobile-first responsive design
 * 
 * CONVERSION OPTIMIZATION:
 * - Mumbai-specific messaging
 * - 3D visual appeal
 * - Multiple CTAs
 * - Trust signals
 * - Mobile optimization
 * 
 * @version 1.0.0 - Mumbai-Focused Hero with 3D Showcase
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { ArrowRight, MapPin, Phone, Star, Code, Globe, Zap } from 'lucide-react';

console.log('[Mumbai-Web-Development] HeroSection component loaded - Mumbai-focused with 3D showcase');

// 3D Website Showcase Component
const WebsiteShowcase = () => {
  const [isHovered, setIsHovered] = useState(false);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <div ref={showcaseRef} className="relative w-full max-w-4xl mx-auto">
      <motion.div
        style={{ y, rotateY }}
        className="relative perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 3D Website Mockup */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl border border-slate-700/50 transform-style-3d">
          {/* Browser Header */}
          <div className="bg-slate-800/90 backdrop-blur-sm p-3 flex gap-2 items-center border-b border-slate-700/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 bg-slate-700/50 backdrop-blur-sm text-sm rounded-md h-8 flex items-center justify-center px-4 text-slate-300">
              mumbaiwebdev.com
            </div>
          </div>

          {/* Website Content */}
          <div className="w-full aspect-[16/10] bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
            {/* Mumbai Skyline Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 opacity-20"></div>
            
            {/* Website Layout Mockup */}
            <div className="absolute inset-4 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200/50 flex flex-col p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="h-8 w-32 bg-slate-800 rounded-lg"></div>
                <div className="flex gap-4">
                  <div className="h-6 w-16 bg-slate-300 rounded"></div>
                  <div className="h-6 w-16 bg-slate-300 rounded"></div>
                  <div className="h-6 w-16 bg-slate-300 rounded"></div>
                </div>
              </div>

              {/* Hero Area */}
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="h-12 w-80 bg-slate-800 rounded-lg mx-auto"></div>
                  <div className="h-6 w-64 bg-slate-600 rounded mx-auto"></div>
                  <div className="h-10 w-32 bg-blue-600 rounded-lg mx-auto"></div>
                </div>
              </div>

              {/* Content Blocks */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="h-20 bg-slate-200 rounded-lg"></div>
                <div className="h-20 bg-slate-200 rounded-lg"></div>
                <div className="h-20 bg-slate-200 rounded-lg"></div>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <motion.div
              animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-8 right-8 p-3 bg-white shadow-lg border border-slate-200 rounded-xl z-10"
            >
              <Code className="h-6 w-6 text-blue-600" />
            </motion.div>

            <motion.div
              animate={isHovered ? { scale: 1.1, rotate: -5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute bottom-8 left-8 p-3 bg-white shadow-lg border border-slate-200 rounded-xl z-10"
            >
              <Globe className="h-6 w-6 text-green-600" />
            </motion.div>

            <motion.div
              animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="absolute top-1/2 right-12 p-3 bg-white shadow-lg border border-slate-200 rounded-xl z-10"
            >
              <Zap className="h-6 w-6 text-yellow-600" />
            </motion.div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl -z-10"></div>
      </motion.div>
    </div>
  );
};

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    console.log('[Mumbai-Web-Development] HeroSection mounted - Mumbai-focused with 3D showcase');
    return () => console.log('[Mumbai-Web-Development] HeroSection unmounted');
  }, []);

  const MUMBAI_AREAS = ['Bandra', 'Andheri', 'Powai', 'Thane', 'Navi Mumbai', 'Malad', 'Goregaon'];

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
      className="relative min-h-screen flex items-center overflow-hidden"
      id="home"
      role="region"
      aria-labelledby="hero-heading"
    >
      {/* Mumbai Skyline Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-pink-900/20"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[100px] animate-blob"></div>
        <div className="absolute -right-20 top-1/3 h-[300px] w-[300px] rounded-full bg-purple-600/20 blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/4 -bottom-20 h-[350px] w-[350px] rounded-full bg-pink-600/20 blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <HeroHighlight 
        containerClassName="min-h-screen w-full"
        className="w-full"
      >
        <div className="container mx-auto px-3 sm:px-4 pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 relative z-10">
          
          {/* HERO: Mumbai-Focused Content with 3D Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={{ show: { transition: { staggerChildren: 0.15 } } }}
              className="text-center lg:text-left"
            >
              {/* Trust Badge */}
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-4 sm:mb-5 border border-green-200 dark:border-green-800 shadow-sm text-xs sm:text-sm"
              >
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  4.9/5 by 200+ Mumbai Businesses
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
                  Mumbai's{' '}
                  <Highlight className="text-gray-900 dark:text-white">
                    #1 Web Development
                  </Highlight>
                </span>
                <span className="block mb-2">
                  <Highlight className="text-gray-900 dark:text-white bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500">
                    Company
                  </Highlight>
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl text-green-600 dark:text-green-400 block mt-2 sm:mt-3">
                  Starting{' '}
                  <Highlight className="text-green-600 dark:text-green-400 bg-gradient-to-r from-green-200 to-emerald-200 dark:from-green-700 dark:to-emerald-700">
                    ₹15,999
                  </Highlight>
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p 
                variants={fadeInUp}
                className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto lg:mx-0 leading-snug sm:leading-relaxed mb-4 sm:mb-6 px-2"
              >
                Professional, Fast Websites for{' '}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  Mumbai Businesses
                </span>
                {' '}🇮🇳 - 14-21 Days Delivery
              </motion.p>

              {/* Key Benefits */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-5 sm:mb-8 text-xs sm:text-sm max-w-lg sm:max-w-none mx-auto lg:mx-0"
              >
                {[
                  '✅ 14-21 Days',
                  '✅ Mobile-First',
                  '✅ SEO Ready',
                  '✅ Mumbai Support'
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
                className="flex flex-col gap-2.5 sm:gap-3 justify-center lg:justify-start items-stretch sm:items-center lg:items-start mb-5 sm:mb-8 max-w-md sm:max-w-none mx-auto lg:mx-0 px-2"
              >
                <Button 
                  asChild
                  size="lg"
                  className="text-sm sm:text-base md:text-lg px-6 sm:px-10 py-5 sm:py-7 h-auto shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  onClick={() => console.log('[Mumbai-Web-Development] Hero CTA - Get Free Quote clicked')}
                >
                  <a href="#lead-form" className="flex items-center justify-center font-bold">
                    💰 Get Free Website Quote
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6 h-auto bg-white dark:bg-gray-800 backdrop-blur-sm w-full sm:w-auto border-2 hover:bg-gray-50 dark:hover:bg-gray-700"
                  onClick={() => console.log('[Mumbai-Web-Development] Hero CTA - Call Expert clicked')}
                >
                  <a href="tel:+919963730111" className="flex items-center justify-center gap-2 font-semibold">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>📞 Call Mumbai Expert</span>
                  </a>
                </Button>
              </motion.div>

              {/* URGENCY INDICATOR */}
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
                    ⚡ Only 2 Slots Left This Month - Book Now!
                  </span>
                </div>
              </motion.div>

              {/* Mumbai Areas Served */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 max-w-xl mx-auto lg:mx-0 text-xs px-2"
              >
                <span className="text-gray-600 dark:text-gray-400 font-medium w-full sm:w-auto mb-1 sm:mb-0">
                  We serve:
                </span>
                {MUMBAI_AREAS.slice(0, 4).map((area, index) => (
                  <div 
                    key={index}
                    className="inline-flex items-center gap-0.5 sm:gap-1 px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium"
                  >
                    <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    <span>{area}</span>
                  </div>
                ))}
                <div className="inline-flex items-center gap-0.5 px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium">
                  +More
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: 3D Website Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <WebsiteShowcase />
            </motion.div>
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}