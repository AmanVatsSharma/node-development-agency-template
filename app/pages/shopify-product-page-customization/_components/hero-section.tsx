'use client';

/**
 * @fileoverview Hero Section Component - Shopify Product Page Customization
 * @description Turn Your Product Page into a Sales Engine
 * @version 1.0.0
 * 
 * CONVERSION OPTIMIZED:
 * - Before/After split screen visual
 * - Animated "Add to Cart" button glow effect
 * - Strong value proposition
 * - Trust badges with metrics
 * - Mobile-first responsive design
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { ArrowRight, Play, ShoppingCart, Zap, TrendingUp, Users, Star } from 'lucide-react';

console.log('[Shopify-Product-Page] HeroSection component loaded');

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [isCartGlowing, setIsCartGlowing] = useState(false);

  useEffect(() => {
    console.log('[Shopify-Product-Page] HeroSection mounted');
    
    // Animated cart button glow effect
    const glowInterval = setInterval(() => {
      setIsCartGlowing(prev => !prev);
    }, 2000);

    return () => clearInterval(glowInterval);
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
        containerClassName="min-h-screen"
        className="w-full"
      >
        <div className="container mx-auto px-4 pt-28 pb-12 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            
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
                  { icon: <Star className="h-3 w-3" />, text: '40+ Stores', color: 'from-yellow-400 to-orange-400' },
                  { icon: <TrendingUp className="h-3 w-3" />, text: '+28% Conv.', color: 'from-green-400 to-emerald-400' },
                  { icon: <Users className="h-3 w-3" />, text: 'Shopify Plus', color: 'from-blue-400 to-indigo-400' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r ${item.color} text-white backdrop-blur-md rounded-full font-bold shadow-lg`}
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
                className="text-[32px] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-5 tracking-tight"
              >
                <span className="text-gray-900 dark:text-white block mb-2">
                  Turn Your Product Page
                </span>
                <span className="block">
                  <Highlight className="text-gray-900 dark:text-white bg-gradient-to-r from-[#0A2540] via-[#FFB400] to-[#0A2540] dark:from-[#FFB400] dark:via-[#0A2540] dark:to-[#FFB400]">
                    into a Sales Engine
                  </Highlight>
                </span>
              </motion.h1>

              {/* Sub-headline - MOBILE OPTIMIZED */}
              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-medium"
              >
                Your product page is not just a page — <span className="font-black text-[#0A2540] dark:text-[#FFB400]">it is your salesperson</span>.<br />
                We transform boring Shopify pages into{' '}
                <span className="font-black text-green-600 dark:text-green-400">interactive, high-converting experiences</span>.
              </motion.p>

              {/* CTA Buttons - MOBILE OPTIMIZED */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Button 
                  asChild
                  size="lg"
                  className="w-full sm:w-auto text-lg px-10 py-8 h-auto shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,180,0,0.6)] transition-all active:scale-95 bg-gradient-to-r from-[#FFB400] via-[#FFB400] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFB400] text-[#0A2540] rounded-2xl font-black"
                  onClick={() => console.log('[Shopify-Product-Page] Hero CTA - Get Free Demo clicked')}
                >
                  <a href="#lead-form" className="flex items-center justify-center gap-2">
                    👉 Get Free Demo
                    <ArrowRight className="h-6 w-6" />
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-8 h-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-[#0A2540] dark:border-[#FFB400] hover:bg-[#0A2540]/10 dark:hover:bg-[#FFB400]/10 font-bold rounded-2xl shadow-lg active:scale-95 transition-all"
                  onClick={() => console.log('[Shopify-Product-Page] Hero CTA - View Live Examples clicked')}
                >
                  <a href="#case-studies" className="flex items-center justify-center gap-2">
                    <Play className="h-5 w-5" />
                    View Live Examples
                  </a>
                </Button>
              </motion.div>

              {/* Subtext */}
              <motion.p 
                variants={fadeInUp}
                className="text-sm text-gray-600 dark:text-gray-400 italic"
              >
                Built using custom <span className="font-bold text-[#0A2540] dark:text-[#FFB400]">Liquid + JS + Shopify APIs</span>. Tailored to your products, buyers, and brand.
              </motion.p>
            </motion.div>

            {/* RIGHT: Before/After Product Page Split Screen - MOBILE OPTIMIZED */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2 px-2 sm:px-0"
            >
              <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                
                {/* Split Screen Container */}
                <div className="grid grid-cols-2 divide-x-2 divide-gray-300 dark:divide-gray-700 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                  
                  {/* LEFT: BEFORE (Plain) */}
                  <div className="p-4 sm:p-6 bg-gray-100 dark:bg-gray-900">
                    <div className="text-center mb-3">
                      <div className="inline-block bg-red-100 dark:bg-red-900/30 px-3 py-1 rounded-full">
                        <span className="text-xs font-black text-red-600 dark:text-red-400">❌ BEFORE</span>
                      </div>
                    </div>
                    
                    {/* Plain Product Image */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 mb-3 aspect-square flex items-center justify-center">
                      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-4xl">📦</span>
                      </div>
                    </div>
                    
                    {/* Plain Details */}
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                      <div className="mt-3">
                        <div className="bg-gray-400 dark:bg-gray-600 text-white text-xs py-2 px-3 rounded text-center font-medium">
                          Add to Cart
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-[9px] text-gray-500 dark:text-gray-400 text-center mt-3 font-semibold">
                      Generic layout<br />Low engagement
                    </p>
                  </div>
                  
                  {/* RIGHT: AFTER (Interactive) */}
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
                    <div className="text-center mb-3">
                      <div className="inline-block bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                        <span className="text-xs font-black text-green-600 dark:text-green-400">✨ AFTER</span>
                      </div>
                    </div>
                    
                    {/* Interactive Product Image */}
                    <div className="relative bg-white dark:bg-gray-800 rounded-lg p-2 mb-3 aspect-square">
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <span className="text-4xl">🎨</span>
                        {/* Zoom indicator */}
                        <div className="absolute top-1 right-1 bg-white/90 dark:bg-gray-900/90 rounded-full p-1">
                          <Zap className="h-3 w-3 text-[#FFB400]" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Interactive Details */}
                    <div className="space-y-2">
                      {/* Dynamic Pricing */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-[#0A2540] dark:text-[#FFB400]">₹999</span>
                        <span className="text-[9px] font-bold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                          Only 2 left!
                        </span>
                      </div>
                      
                      {/* Variant Selector */}
                      <div className="flex gap-1">
                        {['S', 'M', 'L'].map((size) => (
                          <div key={size} className="w-8 h-8 border-2 border-[#FFB400] rounded flex items-center justify-center text-[10px] font-bold bg-white dark:bg-gray-800">
                            {size}
                          </div>
                        ))}
                      </div>
                      
                      {/* Glowing Add to Cart */}
                      <motion.div
                        animate={{
                          boxShadow: isCartGlowing 
                            ? '0 0 20px rgba(255, 180, 0, 0.8)' 
                            : '0 0 0px rgba(255, 180, 0, 0)',
                        }}
                        transition={{ duration: 1 }}
                        className="mt-3"
                      >
                        <div className="bg-gradient-to-r from-[#FFB400] to-[#FFA500] text-[#0A2540] text-xs py-2 px-3 rounded-lg text-center font-black flex items-center justify-center gap-1 shadow-lg">
                          <ShoppingCart className="h-3 w-3" />
                          Add to Cart
                        </div>
                      </motion.div>
                    </div>
                    
                    <p className="text-[9px] text-green-600 dark:text-green-400 text-center mt-3 font-black">
                      Interactive UX<br />+28% conversions
                    </p>
                  </div>
                </div>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#0A2540]/20 via-[#FFB400]/30 to-[#0A2540]/20 rounded-3xl blur-3xl -z-10" />
            </motion.div>

          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}

console.log('[Shopify-Product-Page] HeroSection exported');
