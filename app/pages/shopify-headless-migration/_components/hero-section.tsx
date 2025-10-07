'use client';

/**
 * Hero Section Component - Shopify Headless Migration Landing Page
 * "Go Headless. Go Limitless."
 * 
 * FEATURES:
 * - Neural-line animation connecting React + Shopify logos
 * - Speed meter visualization (Traditional vs Headless)
 * - Mobile-first responsive design
 * - Premium futuristic aesthetic
 * - Multiple CTAs (Request Demo, Get Quote)
 * 
 * BRAND COLORS:
 * - Deep Navy: #0F172A
 * - Futuristic Mint: #00E0B8
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Zap, TrendingUp, Globe, Award } from 'lucide-react';

console.log('[Shopify-Headless] HeroSection component loaded');

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();
  
  // Speed meter animation states
  const [traditionalSpeed, setTraditionalSpeed] = useState(0);
  const [headlessSpeed, setHeadlessSpeed] = useState(0);

  useEffect(() => {
    console.log('[Shopify-Headless] HeroSection mounted');
    console.log('[Shopify-Headless] In view:', inView);
    
    // Animate speed meters when in view
    if (inView) {
      console.log('[Shopify-Headless] Starting speed meter animation');
      
      // Traditional Shopify: 40/100
      let traditional = 0;
      const traditionalInterval = setInterval(() => {
        traditional += 1;
        setTraditionalSpeed(traditional);
        if (traditional >= 40) clearInterval(traditionalInterval);
      }, 30);
      
      // Headless Next.js: 98/100
      setTimeout(() => {
        let headless = 0;
        const headlessInterval = setInterval(() => {
          headless += 2;
          setHeadlessSpeed(headless);
          if (headless >= 98) clearInterval(headlessInterval);
        }, 20);
      }, 500);
    }
  }, [inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Handle CTA clicks with tracking
  const handleCTAClick = (ctaType: string) => {
    console.log(`[Shopify-Headless] Hero CTA clicked: ${ctaType}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        cta_location: 'hero',
        cta_type: ctaType,
        page_path: '/pages/shopify-headless-migration'
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A]"
      id="home"
      role="region"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00E0B8] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT: Copy + CTA */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              {/* Trust Badges */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6"
              >
                {[
                  { icon: <Zap className="h-3 w-3" />, text: '2-4× Faster', color: 'from-yellow-400 to-orange-500' },
                  { icon: <Award className="h-3 w-3" />, text: '95+ Score', color: 'from-green-400 to-emerald-500' },
                  { icon: <Globe className="h-3 w-3" />, text: 'Global Reach', color: 'from-blue-400 to-cyan-500' }
                ].map((badge, index) => (
                  <div 
                    key={index}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r ${badge.color} rounded-full font-bold text-white text-xs shadow-lg hover:scale-105 transition-transform`}
                  >
                    {badge.icon}
                    <span>{badge.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                id="hero-heading"
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
              >
                <span className="text-white block mb-2">
                  Go Headless.
                </span>
                <span className="block bg-gradient-to-r from-[#00E0B8] via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Go Limitless.
                </span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Rebuild your Shopify store on <span className="font-bold text-[#00E0B8]">Next.js / Hydrogen</span> and unlock unmatched speed, SEO, and control.
              </motion.p>

              <motion.p 
                variants={fadeInUp}
                className="text-sm md:text-base text-gray-400 mb-8 italic max-w-2xl mx-auto lg:mx-0"
              >
                Your storefront deserves to perform like your brand — fast, intelligent, and beautifully scalable.
              </motion.p>

              {/* Subtext with icon */}
              <motion.div 
                variants={fadeInUp}
                className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                <Zap className="h-5 w-5 text-[#00E0B8] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300 text-left">
                  Next-gen Shopify performance with the power of <span className="font-semibold text-white">React, GraphQL, and edge caching.</span>
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button 
                  size="lg"
                  className="w-full sm:w-auto text-base sm:text-lg px-8 py-7 h-auto font-black rounded-xl bg-gradient-to-r from-[#00E0B8] to-cyan-500 hover:from-[#00d4ad] hover:to-cyan-600 text-[#0F172A] shadow-[0_0_40px_rgba(0,224,184,0.3)] hover:shadow-[0_0_60px_rgba(0,224,184,0.5)] transition-all active:scale-95"
                  onClick={() => {
                    handleCTAClick('request_demo');
                    window.location.hash = '#contact';
                  }}
                >
                  <span className="flex items-center gap-2">
                    👉 Request a Demo
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6 h-auto border-2 border-white/20 hover:border-[#00E0B8] bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl transition-all active:scale-95"
                  onClick={() => {
                    handleCTAClick('get_quote');
                    window.location.hash = '#pricing';
                  }}
                >
                  <span className="flex items-center gap-2">
                    💰 Get Quote
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* RIGHT: Speed Meter Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl">
                
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Performance Comparison
                  </h3>
                  <p className="text-sm text-gray-400">
                    See the dramatic difference
                  </p>
                </div>

                {/* Speed Meters */}
                <div className="space-y-8">
                  
                  {/* Traditional Shopify */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <span className="text-sm font-semibold text-gray-300">Traditional Shopify</span>
                      </div>
                      <span className="text-2xl font-black text-red-400">{traditionalSpeed}</span>
                    </div>
                    <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${traditionalSpeed}%` }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse" />
                      </motion.div>
                    </div>
                    <p className="text-xs text-gray-400">Slow Liquid rendering, limited control</p>
                  </div>

                  {/* VS Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/20" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-gradient-to-r from-[#0F172A] to-[#1e293b] px-4 text-sm font-bold text-[#00E0B8]">
                        VS
                      </span>
                    </div>
                  </div>

                  {/* Headless Next.js */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#00E0B8] shadow-[0_0_10px_rgba(0,224,184,0.5)]" />
                        <span className="text-sm font-semibold text-white">Headless Next.js</span>
                      </div>
                      <span className="text-2xl font-black text-[#00E0B8]">{headlessSpeed}</span>
                    </div>
                    <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${headlessSpeed}%` }}
                        transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[#00E0B8] to-cyan-400 rounded-full relative shadow-[0_0_20px_rgba(0,224,184,0.5)]"
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse" />
                      </motion.div>
                    </div>
                    <p className="text-xs text-[#00E0B8] font-semibold">Blazing-fast React SSR + caching</p>
                  </div>
                </div>

                {/* Neural Connection Animation */}
                <div className="mt-8 flex items-center justify-center gap-6">
                  {/* Shopify Logo */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center font-black text-white text-xl shadow-lg"
                  >
                    S
                  </motion.div>

                  {/* Neural Line */}
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-green-400 via-[#00E0B8] to-blue-400 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-white"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{ width: '20%' }}
                    />
                  </div>

                  {/* React/Next.js Logo */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-12 h-12 bg-gradient-to-br from-[#00E0B8] to-blue-400 rounded-xl flex items-center justify-center font-black text-[#0F172A] text-xl shadow-lg"
                  >
                    ⚛
                  </motion.div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-400">
                    Powered by <span className="text-[#00E0B8] font-semibold">GraphQL • ISR • Edge Caching</span>
                  </p>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00E0B8]/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10 opacity-50" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
