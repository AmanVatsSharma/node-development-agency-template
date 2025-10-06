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

console.log('[NextJS-Dev] HeroSection component loaded');

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log('[NextJS-Dev] HeroSection mounted');
    
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
        containerClassName="min-h-[90vh] md:min-h-screen"
        className="w-full"
      >
        <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            
            {/* LEFT: Copy + CTA */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Micro Trust Bar */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-5 sm:mb-6 text-xs"
              >
                {[
                  { icon: <Zap className="h-3 w-3" />, text: '40+ Websites Delivered' },
                  { icon: <Globe className="h-3 w-3" />, text: 'Avg Speed 95+' },
                  { icon: <Users className="h-3 w-3" />, text: '5 Countries' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 font-semibold text-gray-800 dark:text-gray-200 shadow-sm"
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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-5 tracking-tight leading-tight"
              >
                <span className="text-gray-900 dark:text-white block mb-2">
                  Build the Future of the Web
                </span>
                <span className="block">
                  <Highlight className="text-gray-900 dark:text-white bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500">
                    with Next.js
                  </Highlight>
                </span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed"
              >
                We design and develop{' '}
                <span className="font-bold text-indigo-600 dark:text-indigo-400">blazing-fast, SEO-ready, and scalable</span>{' '}
                websites using Next.js, Tailwind CSS & Node.js — built to{' '}
                <span className="font-bold text-green-600 dark:text-green-400">grow your business</span>, not just look good.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center mb-6 sm:mb-8"
              >
                <Button 
                  asChild
                  size="lg"
                  className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 h-auto shadow-xl hover:shadow-2xl transition-all hover:scale-105 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                  onClick={() => console.log('[NextJS-Dev] Hero CTA - Get Free Quote clicked')}
                >
                  <a href="#lead-form" className="flex items-center justify-center font-bold gap-2">
                    🔹 Get a Free Project Quote
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 h-auto bg-white dark:bg-gray-800 backdrop-blur-sm border-2 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold"
                  onClick={() => console.log('[NextJS-Dev] Hero CTA - See Our Work clicked')}
                >
                  <a href="#case-studies" className="flex items-center justify-center gap-2">
                    <Eye className="h-5 w-5" />
                    👀 See Our Work
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* RIGHT: Animated Site Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                {/* Code to Result Split Screen */}
                <div className="grid grid-cols-2 divide-x divide-gray-300 dark:divide-gray-700">
                  {/* Left: Code */}
                  <div className="p-4 sm:p-6 bg-gray-900">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-[10px] sm:text-xs text-gray-400">app/page.tsx</span>
                    </div>
                    <div className="font-mono text-[10px] sm:text-xs space-y-1">
                      <div className="text-purple-400">export default</div>
                      <div className="text-blue-400">function <span className="text-yellow-400">Page</span>() {'{'}</div>
                      <div className="text-gray-400 ml-2">return (</div>
                      <div className="text-green-400 ml-4">&lt;Hero /&gt;</div>
                      <div className="text-gray-400 ml-2">)</div>
                      <div className="text-blue-400">{'}'}</div>
                    </div>
                  </div>
                  
                  {/* Right: Result */}
                  <div className="p-4 sm:p-6 bg-white dark:bg-gray-950 flex flex-col items-center justify-center">
                    <div className="text-center">
                      <Zap className="h-8 w-8 sm:h-12 sm:w-12 text-green-500 mx-auto mb-2" />
                      <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Next.js</div>
                      <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Lightning Fast</div>
                    </div>
                  </div>
                </div>

                {/* Loading Bar Animation → 100/100 Score */}
                <div className="bg-gray-100 dark:bg-gray-800 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">Lighthouse Score</span>
                    <span className="text-lg sm:text-2xl font-bold text-green-600 dark:text-green-400">{score}/100</span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${score}%` }}
                      transition={{ duration: 2, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 rounded-full"
                    />
                  </div>
                  
                  {/* Next.js + Lighthouse Badge */}
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="w-4 h-4 rounded bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold text-[8px]">N</div>
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Next.js</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                      <Zap className="h-4 w-4 text-green-500" />
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">100/100</span>
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
