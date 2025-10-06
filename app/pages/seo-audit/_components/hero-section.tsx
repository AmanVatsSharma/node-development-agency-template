'use client';

/**
 * Hero Section for SEO Audit Landing Page
 * Features instant audit widget and compelling value proposition
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { InstantAuditWidget } from './instant-audit-widget';
import { Shield, Clock, TrendingUp } from 'lucide-react';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

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
      className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      id="home"
      role="region"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          {/* Left Column - Copy */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            className="lg:py-8"
          >
            {/* Badge */}
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-6 border border-green-200 dark:border-green-800"
            >
              <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                Free Instant SEO Scan
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              id="hero-heading"
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            >
              <span className="text-gray-900 dark:text-white">
                Free SEO Audit — Get a{' '}
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                60-Second Health Check
              </span>
              <span className="text-gray-900 dark:text-white">
                {' '}for Your Website
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Enter your URL to get an <strong>instant SEO score + free 7-point fixes</strong>. 
              Book a deep technical audit and get a prioritized action plan to boost your rankings.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              {[
                { icon: Clock, text: 'Results in 60s', color: 'text-blue-600 dark:text-blue-400' },
                { icon: Shield, text: 'No credit card', color: 'text-green-600 dark:text-green-400' },
                { icon: TrendingUp, text: '100% actionable', color: 'text-purple-600 dark:text-purple-400' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm ${item.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Microcopy */}
            <motion.p 
              variants={fadeInUp}
              className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
            >
              <Shield className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Privacy first:</strong> Instant scan uses public data only. We never store passwords or access private areas.
              </span>
            </motion.p>
          </motion.div>

          {/* Right Column - Audit Widget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <InstantAuditWidget />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
