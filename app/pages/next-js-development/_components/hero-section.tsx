'use client';

/**
 * Hero Section Component - Next.js Development Landing Page
 * Build the Future of the Web with Next.js
 * CONVERSION OPTIMIZED for mid to high-ticket clients
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { ArrowRight, Eye, Zap, Globe, Users } from 'lucide-react';

console.log('[Next-JS-Dev] HeroSection component loaded');

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log('[Next-JS-Dev] HeroSection mounted');
    
    // Animate score from 0 to 100
    if (inView) {
      let current = 0;
      const interval = setInterval(() => {
        current += 2;
        setScore(current);
        if (current >= 100) clearInterval(interval);
      }, 20);
      return () => clearInterval(interval);
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
                  { icon: <Zap className="h-3 w-3" />, text: '40+ Sites' },
                  { icon: <Globe className="h-3 w-3" />, text: '95+ Speed' },
                  { icon: <Users className="h-3 w-3" />, text: '5 Countries' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-700 font-bold text-gray-800 dark:text-gray-200 shadow-lg"
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
                  Build the Future
                </span>
                <span className="block">
                  <Highlight className="text-gray-900 dark:text-white bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500">
                    with Next.js
                  </Highlight>
                </span>
              </motion.h1>

              {/* Sub-headline - MOBILE OPTIMIZED */}
              <motion.p 
                variants={fadeInUp}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
              >
                <span className="font-bold text-indigo-600 dark:text-indigo-400">Blazing-fast, SEO-ready</span> websites with{' '}
                <span className="font-bold text-green-600 dark:text-green-400">Next.js + Tailwind</span> — built to grow your business.
              </motion.p>

              {/* CTA Buttons - MOBILE OPTIMIZED */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col gap-3 mb-6"
              >
                <Button 
                  asChild
                  size="lg"
                  className="w-full text-base sm:text-lg px-8 py-7 h-auto shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.5)] transition-all active:scale-95 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 rounded-2xl font-black"
                  onClick={() => console.log('[Next-JS-Dev] Hero CTA - Get Free Quote clicked')}
                >
                  <a href="#lead-form" className="flex items-center justify-center gap-2">
                    🔹 Get Free Quote
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full text-base px-8 py-6 h-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 font-bold rounded-2xl shadow-lg active:scale-95 transition-all"
                  onClick={() => console.log('[Next-JS-Dev] Hero CTA - See Our Work clicked')}
                >
                  <a href="#case-studies" className="flex items-center justify-center gap-2">
                    <Eye className="h-5 w-5" />
                    See Our Work
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* RIGHT: Animated Site Preview - MOBILE OPTIMIZED */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2 px-2 sm:px-0"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                {/* Code to Result Split Screen - MOBILE OPTIMIZED */}
                <div className="grid grid-cols-2 divide-x divide-gray-300 dark:divide-gray-700">
                  {/* Left: Code */}
                  <div className="p-3 sm:p-4 md:p-6 bg-gray-900">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-[9px] sm:text-xs text-gray-400 truncate">page.tsx</span>
                    </div>
                    <div className="font-mono text-[9px] sm:text-xs space-y-0.5">
                      <div className="text-purple-400">export</div>
                      <div className="text-blue-400">function <span className="text-yellow-400">Page</span>()</div>
                      <div className="text-gray-400">{' {'}</div>
                      <div className="text-green-400 ml-2">&lt;Hero/&gt;</div>
                      <div className="text-gray-400">{'}'}</div>
                    </div>
                  </div>
                  
                  {/* Right: Result */}
                  <div className="p-3 sm:p-4 md:p-6 bg-white dark:bg-gray-950 flex flex-col items-center justify-center">
                    <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-green-500 mb-1.5" />
                    <div className="text-[10px] sm:text-xs font-black text-gray-900 dark:text-white">Next.js</div>
                    <div className="text-[8px] sm:text-[10px] text-gray-600 dark:text-gray-400">⚡ Fast</div>
                  </div>
                </div>

                {/* Loading Bar Animation - MOBILE OPTIMIZED */}
                <div className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Lighthouse</span>
                    <span className="text-xl sm:text-2xl font-black text-green-600 dark:text-green-400">{score}/100</span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5 sm:h-3 overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${score}%` }}
                      transition={{ duration: 2, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 rounded-full shadow-lg"
                    />
                  </div>
                  
                  {/* Badges - MOBILE OPTIMIZED */}
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-700 shadow-md">
                      <div className="w-3 h-3 rounded bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold text-[7px]">N</div>
                      <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300">Next.js</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-green-50 dark:bg-green-900/30 rounded-lg border-2 border-green-200 dark:border-green-700 shadow-md">
                      <Zap className="h-3 w-3 text-green-600" />
                      <span className="text-[10px] font-bold text-green-700 dark:text-green-300">100</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />
            </motion.div>

          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
