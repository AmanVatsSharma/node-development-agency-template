'use client';

/**
 * Hero Section Component - Next.js Development Landing Page
 * Super-Fast, Scalable & Stunning Websites Built on Next.js
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { ArrowRight, Eye, Zap, Brain, Lock } from 'lucide-react';

console.log('[NextJS-Dev] HeroSection component loaded');

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    console.log('[NextJS-Dev] HeroSection mounted');
    return () => console.log('[NextJS-Dev] HeroSection unmounted');
  }, []);

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
        containerClassName="min-h-[90vh] md:min-h-screen"
        className="w-full"
      >
        <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20 relative z-10">
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            className="max-w-6xl mx-auto text-center"
          >
            {/* Microcopy Badges */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 text-xs sm:text-sm"
            >
              {[
                { icon: <Zap className="h-3 w-3 sm:h-4 sm:w-4" />, text: '100/100 Lighthouse Score' },
                { icon: <Brain className="h-3 w-3 sm:h-4 sm:w-4" />, text: 'SEO-Optimized' },
                { icon: <Lock className="h-3 w-3 sm:h-4 sm:w-4" />, text: 'Enterprise-Grade Code' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 font-semibold text-gray-800 dark:text-gray-200 shadow-sm"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              id="hero-heading"
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-tight"
            >
              <span className="text-gray-900 dark:text-white block mb-2">
                Super-Fast, Scalable &{' '}
                <Highlight className="text-gray-900 dark:text-white bg-gradient-to-r from-blue-300 to-cyan-300 dark:from-blue-500 dark:to-cyan-500">
                  Stunning Websites
                </Highlight>
              </span>
              <span className="block">
                <Highlight className="text-gray-900 dark:text-white bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500">
                  Built on Next.js
                </Highlight>
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2"
            >
              We craft custom web experiences powered by Next.js — optimized for{' '}
              <span className="font-bold text-indigo-600 dark:text-indigo-400">performance, SEO & conversions</span>.
              <br className="hidden sm:block" />
              Trusted by startups, agencies, and enterprises.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8 sm:mb-10 max-w-md sm:max-w-none mx-auto px-2"
            >
              <Button 
                asChild
                size="lg"
                className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 h-auto shadow-xl hover:shadow-2xl transition-all hover:scale-105 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                onClick={() => console.log('[NextJS-Dev] Hero CTA - Get Free Quote clicked')}
              >
                <a href="#lead-form" className="flex items-center justify-center font-bold gap-2">
                  💻 Get a Free Project Quote
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 h-auto bg-white dark:bg-gray-800 backdrop-blur-sm border-2 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold"
                onClick={() => console.log('[NextJS-Dev] Hero CTA - View Work clicked')}
              >
                <a href="#case-studies" className="flex items-center justify-center gap-2">
                  <Eye className="h-5 w-5" />
                  ⚡ View Our Work
                </a>
              </Button>
            </motion.div>

            {/* Hero Visual Placeholder */}
            <motion.div
              variants={fadeInUp}
              className="relative max-w-5xl mx-auto"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 sm:p-8">
                {/* Animated Code Snippet Mockup */}
                <div className="space-y-3 sm:space-y-4 font-mono text-xs sm:text-sm text-left">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">Next.js App Router</span>
                  </div>
                  <div className="bg-white dark:bg-gray-950 rounded-lg p-4 sm:p-6">
                    <div className="text-purple-600 dark:text-purple-400">export default function <span className="text-blue-600 dark:text-blue-400">Page</span>() {'{'}</div>
                    <div className="text-gray-600 dark:text-gray-400 ml-4">return (</div>
                    <div className="text-green-600 dark:text-green-400 ml-8">&lt;div className="<span className="text-orange-500">ultra-fast</span>"&gt;</div>
                    <div className="text-gray-700 dark:text-gray-300 ml-12">⚡ Lightning Speed</div>
                    <div className="text-green-600 dark:text-green-400 ml-8">&lt;/div&gt;</div>
                    <div className="text-gray-600 dark:text-gray-400 ml-4">)</div>
                    <div className="text-purple-600 dark:text-purple-400">{'}'}</div>
                  </div>
                  
                  {/* Speed Indicator */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3 pt-2">
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <Zap className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-bold text-green-700 dark:text-green-300">0.8s Load Time</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <span className="text-sm font-bold text-blue-700 dark:text-blue-300">100/100 Score</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </HeroHighlight>
    </section>
  );
}
