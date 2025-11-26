'use client';

/**
 * Hero Section Component - ReactJS Development Landing Page
 * Build Lightning-Fast, Scalable Web Apps with ReactJS
 * CONVERSION OPTIMIZED for startups, enterprises, and founders
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { ArrowRight, Eye, Zap, Atom } from 'lucide-react';

console.log('[ReactJS-Dev] HeroSection component loaded');

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    console.log('[ReactJS-Dev] HeroSection mounted');
    
    // Animate React atom rotation
    if (inView) {
      const interval = setInterval(() => {
        setRotation(prev => (prev + 1) % 360);
      }, 16);
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
                  { icon: <Atom className="h-3 w-3" />, text: 'React Experts' },
                  { icon: <Zap className="h-3 w-3" />, text: 'Lightning Fast' },
                  { icon: '⚛️', text: 'Meta Backed' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-full border border-[#61DAFB]/30 font-bold text-gray-800 dark:text-gray-200 shadow-lg"
                  >
                    {typeof item.icon === 'string' ? <span>{item.icon}</span> : item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Main Headline - SEO Optimized */}
              <motion.h1 
                id="hero-heading"
                variants={fadeInUp}
                className="text-[28px] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-5 tracking-tight"
              >
                <span className="text-gray-900 dark:text-white block mb-2">
                  Hire ReactJS Developer
                </span>
                <span className="block">
                  <Highlight className="text-gray-900 dark:text-white bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] dark:from-[#61DAFB] dark:via-[#00C897] dark:to-[#61DAFB]">
                    Professional ReactJS Development Services
                  </Highlight>
                </span>
              </motion.h1>

              {/* Sub-headline - MOBILE OPTIMIZED */}
              <motion.p 
                variants={fadeInUp}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
              >
                From Idea to Pixel — We Craft{' '}
                <span className="font-bold text-[#61DAFB]">React Apps</span> That{' '}
                <span className="font-bold text-[#00C897]">Perform, Scale, and Impress</span>.
              </motion.p>

              {/* CTA Buttons - MOBILE OPTIMIZED */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col gap-3 mb-6"
              >
                <Button 
                  asChild
                  size="lg"
                  className="w-full text-base sm:text-lg px-8 py-7 h-auto shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(97,218,251,0.5)] transition-all active:scale-95 bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] hover:from-[#50c9ea] hover:via-[#00b786] hover:to-[#50c9ea] text-[#1E1E1E] rounded-2xl font-black"
                  onClick={() => console.log('[ReactJS-Dev] Hero CTA - Get Free Consultation clicked')}
                >
                  <a href="#lead-form" className="flex items-center justify-center gap-2">
                    👉 Get Free Consultation
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full text-base px-8 py-6 h-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-2 border-[#61DAFB] dark:border-[#61DAFB] hover:bg-[#61DAFB]/10 dark:hover:bg-[#61DAFB]/20 font-bold rounded-2xl shadow-lg active:scale-95 transition-all"
                  onClick={() => console.log('[ReactJS-Dev] Hero CTA - See Our Work clicked')}
                >
                  <a href="#case-studies" className="flex items-center justify-center gap-2">
                    <Eye className="h-5 w-5" />
                    🔧 See Our Work
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* RIGHT: Animated React Preview - MOBILE OPTIMIZED */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2 px-2 sm:px-0"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                {/* React Component Demo - MOBILE OPTIMIZED */}
                <div className="p-3 sm:p-4 md:p-6 bg-[#1E1E1E]">
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-[9px] sm:text-xs text-gray-400 truncate">App.jsx</span>
                  </div>
                  
                  {/* Code Display */}
                  <div className="font-mono text-[9px] sm:text-xs space-y-1 mb-4">
                    <div className="text-purple-400">import React from 'react'</div>
                    <div className="text-blue-400">function <span className="text-yellow-400">App</span>() {'{'}</div>
                    <div className="text-green-400 ml-2">  return &lt;Hero /&gt;</div>
                    <div className="text-blue-400">{'}'}</div>
                  </div>

                  {/* React Atom Animation */}
                  <div className="flex items-center justify-center py-6">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                      {/* React Logo Atom */}
                      <svg
                        viewBox="0 0 841.9 595.3"
                        className="w-full h-full"
                        style={{ transform: `rotate(${rotation}deg)` }}
                      >
                        <g fill="#61DAFB">
                          <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>
                          <circle cx="420.9" cy="296.5" r="45.7"/>
                        </g>
                      </svg>
                    </div>
                  </div>

                  {/* Performance Badge */}
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-[#61DAFB]/20 rounded-lg border border-[#61DAFB]">
                      <Atom className="h-4 w-4 text-[#61DAFB]" />
                      <span className="text-xs font-bold text-[#61DAFB]">React 18</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-[#00C897]/20 rounded-lg border border-[#00C897]">
                      <Zap className="h-4 w-4 text-[#00C897]" />
                      <span className="text-xs font-bold text-[#00C897]">Fast</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#61DAFB]/20 via-[#00C897]/20 to-[#61DAFB]/20 rounded-3xl blur-2xl -z-10" />
            </motion.div>

          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
