'use client';

/**
 * Hero Section Component - PREMIUM VERSION 3.0
 * High-impact hero with professional 3D-style website preview illustration
 * 
 * FEATURES:
 * - Premium 3D website dashboard mockup with live metrics
 * - Floating metric cards with animated data
 * - Professional glassmorphism design
 * - No emojis - pure professional aesthetic
 * - Real-time analytics visualization
 * - Mobile-first responsive design
 * 
 * CONVERSION OPTIMIZATION:
 * - Professional design builds instant trust
 * - Live metrics demonstrate capability
 * - Premium feel attracts quality clients
 * - Clear value proposition with data
 * 
 * @version 3.0.0 - Premium Professional Redesign
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Star, 
  TrendingUp,
  Users,
  DollarSign,
  BarChart3,
  Zap,
  Globe,
  ShoppingCart,
  Eye,
  Clock,
  Award
} from 'lucide-react';

console.log('[Business-Website] HeroSection component loaded - PREMIUM VERSION 3.0');

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  // Animation states for premium metrics
  const [revenue, setRevenue] = useState(0);
  const [visitors, setVisitors] = useState(0);
  const [conversion, setConversion] = useState(0);
  const [loadSpeed, setLoadSpeed] = useState(0);

  useEffect(() => {
    console.log('[Business-Website] HeroSection mounted - PREMIUM');
    
    // Animate premium metrics when in view
    if (inView) {
      console.log('[Business-Website] Starting premium metric animations');
      
      // Revenue increase: 0 -> 325%
      let rev = 0;
      const revInterval = setInterval(() => {
        rev += 8;
        setRevenue(Math.min(325, rev));
        if (rev >= 325) {
          clearInterval(revInterval);
          console.log('[Business-Website] Revenue animation complete');
        }
      }, 30);
      
      // Visitors: 0 -> 15000
      setTimeout(() => {
        let vis = 0;
        const visInterval = setInterval(() => {
          vis += 500;
          setVisitors(Math.min(15000, vis));
          if (vis >= 15000) {
            clearInterval(visInterval);
            console.log('[Business-Website] Visitors animation complete');
          }
        }, 50);
      }, 200);
      
      // Conversion rate: 0 -> 8.5%
      setTimeout(() => {
        let conv = 0;
        const convInterval = setInterval(() => {
          conv += 0.2;
          setConversion(Math.min(8.5, conv));
          if (conv >= 8.5) {
            clearInterval(convInterval);
            console.log('[Business-Website] Conversion animation complete');
          }
        }, 80);
      }, 400);
      
      // Load speed: 0 -> 0.7s
      setTimeout(() => {
        let speed = 0;
        const speedInterval = setInterval(() => {
          speed += 0.05;
          setLoadSpeed(Math.min(0.7, speed));
          if (speed >= 0.7) {
            clearInterval(speedInterval);
            console.log('[Business-Website] Load speed animation complete');
          }
        }, 60);
      }, 600);
    }
    
    return () => console.log('[Business-Website] HeroSection unmounted');
  }, [inView]);

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
      className="relative"
      id="home"
      role="region"
      aria-labelledby="hero-heading"
    >
      <HeroHighlight 
        containerClassName="min-h-[85vh] md:min-h-screen"
        className="w-full"
      >
        <div className="container mx-auto px-3 sm:px-4 pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 relative z-10">
        
        {/* HERO GRID: Text Left, Premium Dashboard Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
        
        {/* ============================================
            LEFT SIDE: Hero Text Content
            ============================================ */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          {/* Trust Badge */}
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-4 sm:mb-5 border border-green-200 dark:border-green-800 shadow-sm text-xs sm:text-sm"
          >
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              4.9/5 by 500+ Indian Businesses
            </span>
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-yellow-500" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            id="hero-heading"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-6 tracking-tight leading-tight"
          >
            <span className="text-gray-900 dark:text-white block mb-2">
              Get More Customers{' '}
              <Highlight className="text-gray-900 dark:text-white">
                Online
              </Highlight>
            </span>
            <span className="block mb-2">
              <Highlight className="text-gray-900 dark:text-white bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500">
                Professional Websites That Convert
              </Highlight>
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl text-green-600 dark:text-green-400 block mt-2 sm:mt-3">
              Starting{' '}
              <Highlight className="text-green-600 dark:text-green-400 bg-gradient-to-r from-green-200 to-emerald-200 dark:from-green-700 dark:to-emerald-700">
                ₹13,999
              </Highlight>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto lg:mx-0 mb-4 sm:mb-6 leading-snug sm:leading-relaxed px-2 lg:px-0"
          >
            Professional, Fast Website for{' '}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Mumbai, Delhi, Bangalore
            </span>
            {' '}& All India 🇮🇳
          </motion.p>

          {/* Key Benefits */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-5 sm:mb-8 text-xs sm:text-sm max-w-lg sm:max-w-none mx-auto lg:mx-0"
          >
            {[
              '✅ 14-21 Days',
              '✅ Mobile-First',
              '✅ SEO Ready',
              '✅ No Hidden Cost'
            ].map((benefit, index) => (
              <div 
                key={index}
                className="px-2 sm:px-3 py-1.5 sm:py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 font-medium text-gray-800 dark:text-gray-200 shadow-sm text-center"
              >
                {benefit}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col gap-2.5 sm:gap-3 justify-center lg:justify-start items-stretch sm:items-start mb-5 sm:mb-8 max-w-md sm:max-w-none mx-auto lg:mx-0 px-2 lg:px-0"
          >
            <Button 
              asChild
              size="lg"
              className="text-sm sm:text-base md:text-lg px-6 sm:px-10 py-5 sm:py-7 h-auto shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              onClick={() => console.log('[Business-Website] Hero CTA - Get My Website Quote clicked')}
            >
              <a href="#lead-form" className="flex items-center justify-center font-bold">
                💰 Get My Website Quote (Free)
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6 h-auto bg-white dark:bg-gray-800 backdrop-blur-sm w-full sm:w-auto border-2 hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={() => console.log('[Business-Website] Hero CTA - Talk to Expert clicked')}
            >
              <a href="tel:+919963730111" className="flex items-center justify-center gap-2 font-semibold">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>📞 Talk to Expert Now</span>
              </a>
            </Button>
          </motion.div>

          {/* URGENCY INDICATOR */}
          <motion.div
            variants={fadeInUp}
            className="mb-5 sm:mb-8 flex justify-center lg:justify-start"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-red-700 dark:text-red-300">
                ⚡ Only 3 Slots Left This Month - Book Now!
              </span>
            </div>
          </motion.div>

          {/* City Targeting Pills */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 max-w-xl mx-auto lg:mx-0 text-xs px-2 lg:px-0"
          >
            <span className="text-gray-600 dark:text-gray-400 font-medium w-full sm:w-auto mb-1 sm:mb-0">
              We serve:
            </span>
            {INDIAN_CITIES.slice(0, 5).map((city, index) => (
              <div 
                key={index}
                className="inline-flex items-center gap-0.5 sm:gap-1 px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium"
              >
                <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                <span>{city}</span>
              </div>
            ))}
            <div className="inline-flex items-center gap-0.5 px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium">
              +More
            </div>
          </motion.div>
        </motion.div>
        
        {/* ============================================
            RIGHT SIDE: PREMIUM 3D DASHBOARD MOCKUP
            Professional, no emojis, data-driven visualization
            ============================================ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
          animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 lg:order-2"
        >
          {/* Main Dashboard Container */}
          <div className="relative bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden">
            
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                    Your Business Dashboard
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Live Performance Metrics
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-green-700 dark:text-green-400">Live</span>
              </div>
            </div>
            
            {/* Key Metrics Grid - Animated Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              
              {/* Revenue Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-4 border border-green-200 dark:border-green-800 shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-green-500 rounded-lg">
                      <DollarSign className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Revenue</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                    +{revenue}%
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    <span className="text-xs text-green-600 dark:text-green-400 font-bold">Growth</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Visitors Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-4 border border-blue-200 dark:border-blue-800 shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-blue-500 rounded-lg">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Visitors</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                    {visitors.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <Eye className="h-3 w-3 text-blue-600" />
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-bold">Monthly</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Conversion Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-4 border border-purple-200 dark:border-purple-800 shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-purple-500 rounded-lg">
                      <ShoppingCart className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Conversion</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                    {conversion.toFixed(1)}%
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <BarChart3 className="h-3 w-3 text-purple-600" />
                    <span className="text-xs text-purple-600 dark:text-purple-400 font-bold">Rate</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Speed Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-2xl p-4 border border-orange-200 dark:border-orange-800 shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-orange-500 rounded-lg">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Speed</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                    {loadSpeed.toFixed(1)}s
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3 text-orange-600" />
                    <span className="text-xs text-orange-600 dark:text-orange-400 font-bold">Load Time</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Mini Chart Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800/50 rounded-2xl p-4 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                  Traffic Growth
                </span>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded-full">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-xs font-bold text-green-600 dark:text-green-400">+285%</span>
                </div>
              </div>
              
              {/* Simple Area Chart */}
              <div className="flex items-end justify-between gap-1 h-20 sm:h-24">
                {[35, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((height, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ height: 0 }}
                    animate={inView ? { height: `${height}%` } : {}}
                    transition={{ duration: 0.8, delay: 1 + idx * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-lg relative group"
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="px-2 py-1 bg-gray-900 text-white text-[10px] rounded whitespace-nowrap">
                        {height}% Traffic
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex items-center justify-between mt-3 text-[10px] text-gray-500 dark:text-gray-400">
                <span>Jan</span>
                <span>Oct</span>
              </div>
            </motion.div>
            
            {/* Bottom Status Bar */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                  Premium Analytics
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
            
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.4) 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }} />
            </div>
          </div>
          
          {/* Premium Glow Effect */}
          <div className="absolute -inset-6 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl -z-10 opacity-60" />
          
          {/* Floating Accent Elements */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-2xl"
          />
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-2xl"
          />
        </motion.div>
        
        </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
