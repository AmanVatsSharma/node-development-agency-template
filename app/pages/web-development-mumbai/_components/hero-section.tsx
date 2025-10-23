'use client';

/**
 * Hero Section Component - MUMBAI WEB DEVELOPMENT HERO
 * Premium, mobile-first hero section with 3D website showcase
 * 
 * FEATURES:
 * - 3D interactive website mockup
 * - Premium techy color scheme
 * - Mobile-first responsive design
 * - Professional animations
 * - Real data and statistics
 * 
 * @version 2.0.0 - Production Ready Hero
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { MapPin, Phone, Star, Code, Globe, Zap, Award, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';

console.log('[Mumbai-Web-Development] HeroSection component loaded');

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    console.log('[Mumbai-Web-Development] HeroSection mounted');
    return () => console.log('[Mumbai-Web-Development] HeroSection unmounted');
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"
      id="hero"
      role="banner"
    >
      {/* Premium Background with Tech Patterns */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"></div>
        
        {/* Tech grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20">
          
          {/* Left Column - Content */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={slideInLeft}
            className="text-center lg:text-left space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium"
            >
              <Award className="h-4 w-4 text-yellow-400 mr-2" />
              Mumbai's #1 Web Development Company
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]"
            >
              <HeroHighlight className="text-white">
                Mumbai's #1 Web Development Company
              </HeroHighlight>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-2xl"
            >
              Professional websites that drive results for Mumbai businesses. 
              <Highlight className="text-cyan-400 font-semibold">Starting from ₹15,999</Highlight>
            </motion.p>

            {/* Key Stats */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { icon: Users, value: "200+", label: "Mumbai Clients" },
                { icon: Star, value: "4.9/5", label: "Rating" },
                { icon: Clock, value: "14-21", label: "Days Delivery" },
                { icon: CheckCircle, value: "100%", label: "Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                >
                  <stat.icon className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {[
                { icon: Code, text: "Custom Web Development" },
                { icon: Globe, text: "Mobile-First Design" },
                { icon: Zap, text: "Lightning Fast Performance" },
                { icon: MapPin, text: "Mumbai-Based Team" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center text-slate-300">
                  <benefit.icon className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{benefit.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                onClick={() => console.log('[Mumbai-Web-Development] Hero CTA - Get Quote clicked')}
              >
                <a href="#lead-form" className="flex items-center justify-center">
                  Get Free Website Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                onClick={() => console.log('[Mumbai-Web-Development] Hero CTA - Call Expert clicked')}
              >
                <a href="tel:+919963730111" className="flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Mumbai Expert
                </a>
              </Button>
            </motion.div>

            {/* Urgency Indicator */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.7 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium"
            >
              <Zap className="h-4 w-4 mr-2 animate-pulse" />
              Only 2 slots left this month - Book now!
            </motion.div>

            {/* Mumbai Areas Served */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
              className="text-center lg:text-left"
            >
              <p className="text-sm text-slate-400 mb-3">Serving all Mumbai areas:</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {['Bandra', 'Andheri', 'Powai', 'Thane', 'Malad', 'Goregaon', 'Juhu', 'Worli'].map((area, index) => (
                  <span key={index} className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-slate-300 text-xs hover:bg-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300">
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Website Showcase */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={slideInRight}
            className="relative flex justify-center lg:justify-end"
          >
            <WebsiteShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// 3D Website Showcase Component
function WebsiteShowcase() {
  return (
    <div className="relative w-full max-w-md lg:max-w-lg">
      {/* 3D Container */}
      <div className="relative transform perspective-1000">
        {/* Website Mockup */}
        <motion.div
          initial={{ rotateY: -15, rotateX: 5, scale: 0.9 }}
          animate={{ rotateY: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full h-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Browser Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-100 border-b border-slate-200">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 mx-4">
              <div className="h-6 bg-white border border-slate-200 rounded px-3 flex items-center">
                <span className="text-xs text-slate-600">mumbaiwebdev.com</span>
              </div>
            </div>
          </div>

          {/* Website Content */}
          <div className="p-6 h-full bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="space-y-4">
              {/* Header */}
              <div className="h-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg w-3/4"></div>
              <div className="h-3 bg-slate-300 rounded w-1/2"></div>
              <div className="h-3 bg-slate-300 rounded w-2/3"></div>
              
              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg"></div>
                <div className="h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg"></div>
              </div>
              
              {/* CTA Button */}
              <div className="h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mt-4"></div>
              
              {/* Stats */}
              <div className="flex space-x-4 mt-4">
                <div className="h-8 bg-slate-200 rounded w-16"></div>
                <div className="h-8 bg-slate-200 rounded w-20"></div>
                <div className="h-8 bg-slate-200 rounded w-14"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"
        ></motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg"
        ></motion.div>
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full shadow-lg"
        ></motion.div>
      </div>
    </div>
  );
}