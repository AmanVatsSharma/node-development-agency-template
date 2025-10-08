'use client';

/**
 * @fileoverview Demo Hero Section - EnterpriseHero CRM
 * @description Introduction hero for demo request page
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Zap, Clock } from 'lucide-react';

console.log('[CRM-Demo] DemoHeroSection component loaded');

export function DemoHeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section 
      ref={sectionRef}
      className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden"
      id="demo-hero"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#002F9E]/5 via-transparent to-[#00C897]/5" />
      
      {/* Animated Background Orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-[#FFD700]/20 to-[#002F9E]/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#002F9E]/20 rounded-full border border-[#FFD700]/40 mb-8">
              <Sparkles className="h-4 w-4 text-[#002F9E] dark:text-[#FFD700]" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Personalized Demo Experience</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
              Experience{' '}
              <span className="bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#00C897] bg-clip-text text-transparent">
                EnterpriseHero CRM
              </span>
              <br />
              Personalized for You
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our demos are <span className="font-bold text-[#002F9E] dark:text-[#FFD700]">not generic</span> — we configure a mini-instance aligned to your workflows, industry, and specific requirements.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {[
                { icon: <Zap className="h-6 w-6" />, text: '24-Hour Setup', color: 'from-blue-500 to-cyan-500' },
                { icon: <Clock className="h-6 w-6" />, text: 'No Credit Card', color: 'from-green-500 to-emerald-500' },
                { icon: <Sparkles className="h-6 w-6" />, text: 'Custom Configured', color: 'from-purple-500 to-pink-500' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 px-6 py-4 bg-gradient-to-r ${item.color} rounded-2xl text-white shadow-xl`}
                >
                  {item.icon}
                  <span className="font-bold text-base sm:text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
