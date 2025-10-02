'use client';

/**
 * Hero Section Component
 * High-impact hero with Indian city targeting and immediate lead capture CTA
 * Features: Animated background, trust badges, dual CTAs
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, MapPin, Phone, Star } from 'lucide-react';

console.log('[Business-Website] HeroSection component loaded');

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    console.log('[Business-Website] HeroSection mounted');
    return () => console.log('[Business-Website] HeroSection unmounted');
  }, []);

  const INDIAN_CITIES = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata'];

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950"
      id="home"
      role="region"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-gray-100/[0.02]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Trust Badge */}
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-6 border border-green-200 dark:border-green-800 shadow-sm"
          >
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              Rated 4.9/5 by 500+ Indian Businesses
            </span>
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            id="hero-heading"
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight"
          >
            <span className="text-gray-900 dark:text-white">
              Website for Your Business
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
              Starting at Just ₹13,999
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            Professional, Fast, and Affordable Website Development for Businesses in{' '}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              {INDIAN_CITIES.join(', ')}
            </span>
            {' '}and across India 🇮🇳
          </motion.p>

          {/* Key Benefits */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 text-sm md:text-base"
          >
            {[
              '✅ Ready in 14-21 Days',
              '✅ Mobile-First Design',
              '✅ SEO Optimized',
              '✅ No Hidden Costs'
            ].map((benefit, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 font-medium text-gray-800 dark:text-gray-200 shadow-sm"
              >
                {benefit}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              asChild
              size="lg"
              className="text-base px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-shadow"
              onClick={() => console.log('[Business-Website] Hero CTA - Get Free Quote clicked')}
            >
              <a href="#lead-form">
                Get Free Quote & Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 h-auto bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
              onClick={() => console.log('[Business-Website] Hero CTA - Call Now clicked')}
            >
              <a href="tel:+919876543210" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call: +91 98765 43210
              </a>
            </Button>
          </motion.div>

          {/* City Targeting Pills */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              We serve businesses in:
            </span>
            {INDIAN_CITIES.map((city, index) => (
              <div 
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
              >
                <MapPin className="h-3 w-3" />
                {city}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
    </section>
  );
}

