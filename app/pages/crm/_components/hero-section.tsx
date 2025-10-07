'use client';

/**
 * @fileoverview Hero Section - EnterpriseHero CRM
 * @description Premium hero with 3D dashboard mockup and powerful messaging
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - 3D dashboard hero mockup with Bharat blue gradient
 * - Gold accent lighting effects
 * - Animated metrics and live indicators
 * - Mobile-first responsive design
 * - Conversion-optimized CTAs
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { 
  ArrowRight, 
  Play, 
  Database, 
  Shield, 
  Zap, 
  TrendingUp,
  Users,
  BarChart3,
  Lock
} from 'lucide-react';

console.log('[CRM] HeroSection component loaded');

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [metrics, setMetrics] = useState({ users: 0, uptime: 95 });

  useEffect(() => {
    console.log('[CRM] HeroSection mounted');
    
    // Animate metrics
    if (inView) {
      let usersCount = 0;
      let uptimeCount = 95;
      const interval = setInterval(() => {
        usersCount += 50;
        uptimeCount += 0.1;
        setMetrics({ 
          users: Math.min(usersCount, 5000), 
          uptime: Math.min(uptimeCount, 99.9) 
        });
        if (usersCount >= 5000 && uptimeCount >= 99.9) clearInterval(interval);
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
        {/* Background Gradient - Bharat Blue with Gold Accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#002F9E] via-[#0041E2] to-[#00C897] opacity-5 dark:opacity-10" />
        
        <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
            
            {/* LEFT: Copy + CTA */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Trust Badges - MOBILE OPTIMIZED */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6 text-[10px] sm:text-xs"
              >
                {[
                  { icon: <Database className="h-3 w-3" />, text: '100% Owned' },
                  { icon: <Shield className="h-3 w-3" />, text: 'Enterprise Secure' },
                  { icon: <Zap className="h-3 w-3" />, text: 'ERP Ready' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#FFD700]/10 to-[#002F9E]/10 backdrop-blur-md rounded-full border border-[#FFD700]/40 font-bold text-gray-800 dark:text-gray-200 shadow-lg"
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
                <span className="text-gray-900 dark:text-white block mb-3">
                  🔥 Your Business.
                </span>
                <span className="text-gray-900 dark:text-white block mb-3">
                  Your Data.
                </span>
                <span className="block">
                  <Highlight className="text-gray-900 dark:text-white bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#00C897]">
                    Your CRM.
                  </Highlight>
                </span>
              </motion.h1>

              {/* Sub-headline - MOBILE OPTIMIZED */}
              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed font-medium"
              >
                A <span className="font-black text-[#002F9E] dark:text-[#FFD700]">self-hosted, enterprise-grade CRM</span> — customizable on your own domain, powered by{' '}
                <span className="font-black text-[#00C897] dark:text-[#00C897]">BharatERP Stack</span> and crafted by{' '}
                <span className="font-bold">EnterpriseHero</span> (Vedpragya Bharat).
              </motion.p>

              {/* Value Props */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 mb-8 text-sm sm:text-base"
              >
                {[
                  { icon: <Lock className="h-4 w-4" />, text: 'Your Server, Your Rules' },
                  { icon: <Users className="h-4 w-4" />, text: 'Unlimited Users' },
                  { icon: <BarChart3 className="h-4 w-4" />, text: 'Full Customization' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#002F9E] to-[#FFD700] flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <span className="font-semibold">{item.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons - MOBILE OPTIMIZED */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mb-6"
              >
                <Button 
                  asChild
                  size="lg"
                  className="w-full sm:w-auto text-base sm:text-lg px-8 py-7 h-auto shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,215,0,0.6)] transition-all active:scale-95 bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#002F9E] hover:from-[#0041E2] hover:via-[#FFD700] hover:to-[#0041E2] rounded-2xl font-black text-white"
                  onClick={() => console.log('[CRM] Hero CTA - Request Live Demo clicked')}
                >
                  <a href="/crm/demo" className="flex items-center justify-center gap-2">
                    Request Live Demo
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6 h-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-[#FFD700] dark:border-[#FFD700] hover:bg-[#FFD700]/10 dark:hover:bg-[#FFD700]/20 font-bold rounded-2xl shadow-lg active:scale-95 transition-all"
                  onClick={() => console.log('[CRM] Hero CTA - Explore Features clicked')}
                >
                  <a href="#features" className="flex items-center justify-center gap-2">
                    <Play className="h-5 w-5" />
                    Explore Features
                  </a>
                </Button>
              </motion.div>

              {/* Trust Badge */}
              <motion.div 
                variants={fadeInUp}
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center lg:text-left"
              >
                ✨ <span className="font-bold">Trusted by 12+ enterprises</span> across India | 99.9% Uptime
              </motion.div>
            </motion.div>

            {/* RIGHT: 3D Dashboard Mockup - MOBILE OPTIMIZED */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
              animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              className="relative order-1 lg:order-2 px-2 sm:px-0"
            >
              <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transform perspective-1000 rotate-y-2">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-[#002F9E] via-[#0041E2] to-[#002F9E] p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center shadow-lg">
                        <Database className="h-5 w-5 sm:h-6 sm:w-6 text-[#002F9E]" />
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-bold text-white">EnterpriseHero CRM</div>
                        <div className="flex items-center gap-1 text-xs text-green-400">
                          <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"
                          />
                          Live System Active
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-400" />
                      <Lock className="h-5 w-5 text-[#FFD700]" />
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-4 sm:p-6 space-y-4 bg-white dark:bg-gray-950">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <motion.div 
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                      className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-4 border-2 border-blue-200 dark:border-blue-700"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">Active Users</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-blue-600">{metrics.users.toLocaleString()}</div>
                      <div className="text-xs text-blue-600 font-semibold mt-1">+125% this month</div>
                    </motion.div>

                    <motion.div 
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-4 border-2 border-green-200 dark:border-green-700"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                        <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">Uptime</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-green-600">{metrics.uptime.toFixed(1)}%</div>
                      <div className="text-xs text-green-600 font-semibold mt-1">Reliability</div>
                    </motion.div>
                  </div>

                  {/* Mini Chart Visualization */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Sales Pipeline</span>
                      <BarChart3 className="h-4 w-4 text-[#FFD700]" />
                    </div>
                    <div className="flex items-end gap-2 h-20">
                      {[60, 80, 45, 90, 70, 95, 85].map((height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={inView ? { height: `${height}%` } : {}}
                          transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                          className="flex-1 bg-gradient-to-t from-[#002F9E] to-[#00C897] rounded-lg"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2">
                    {['Leads', 'Sales', 'Reports', 'Analytics'].map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-[#FFD700]/20 to-[#002F9E]/20 rounded-full text-xs font-bold text-gray-700 dark:text-gray-300 border border-[#FFD700]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow Effect - Gold Accent Lighting */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#002F9E]/30 via-[#FFD700]/30 to-[#00C897]/30 rounded-3xl blur-3xl -z-10 animate-pulse" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/20 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00C897]/20 rounded-full blur-3xl -z-10" />
            </motion.div>

          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
