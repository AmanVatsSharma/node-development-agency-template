'use client';

/**
 * OPTION 3: 3-Device Showcase Component
 * 
 * PURPOSE:
 * Premium 3D-style illustration showing responsive website design
 * across Desktop, Tablet, and Mobile devices simultaneously
 * 
 * FEATURES:
 * - Floating device mockups (Desktop, Tablet, Phone)
 * - Animated glow effects and shadows
 * - Premium glassmorphism design
 * - Floating UI elements (SEO icons, speed indicators, forms)
 * - Synchronized content display across all devices
 * 
 * CONVERSION PSYCHOLOGY:
 * - Demonstrates responsive design capability
 * - Shows professional, modern approach
 * - Creates "premium product" perception
 * - Reduces concerns about mobile compatibility
 * 
 * PLACEMENT:
 * Integrated at the top of Recent Projects section to showcase
 * responsive design before showing actual project examples
 * 
 * @version 1.0.0
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Smartphone, 
  Monitor, 
  Tablet, 
  Zap, 
  Search, 
  ShoppingCart,
  MessageCircle,
  Star,
  Award,
  TrendingUp
} from 'lucide-react';

console.log('[Business-Website] DeviceShowcase component loaded');

export function DeviceShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    console.log('[Business-Website] DeviceShowcase mounted');
    return () => console.log('[Business-Website] DeviceShowcase unmounted');
  }, []);

  // Floating UI elements data
  const floatingElements = [
    { icon: Zap, label: 'Fast Loading', color: 'from-yellow-400 to-orange-500', position: { top: '10%', left: '5%' }, delay: 0.2 },
    { icon: Search, label: 'SEO Ready', color: 'from-blue-400 to-cyan-500', position: { top: '15%', right: '8%' }, delay: 0.4 },
    { icon: ShoppingCart, label: 'E-commerce', color: 'from-green-400 to-emerald-500', position: { bottom: '15%', left: '3%' }, delay: 0.6 },
    { icon: MessageCircle, label: 'Live Chat', color: 'from-purple-400 to-pink-500', position: { bottom: '20%', right: '5%' }, delay: 0.8 },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:to-gray-900 rounded-3xl" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-3 sm:mb-4 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm">
            <span className="font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide">
              📱 Responsive Design
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 text-gray-900 dark:text-white">
            Perfect on Every Device
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your website automatically adapts to Desktop, Tablet & Mobile — no extra cost!
          </p>
        </motion.div>

        {/* Main Device Showcase */}
        <div className="relative max-w-6xl mx-auto min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center">
          
          {/* Desktop Device - Center Back */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute z-10"
            style={{ top: '10%' }}
          >
            <div className="relative">
              {/* Monitor Frame */}
              <div className="w-64 sm:w-80 md:w-96 lg:w-[28rem] bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-3 shadow-2xl">
                {/* Screen */}
                <div className="w-full aspect-video bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
                  {/* Website Content Mockup */}
                  <div className="p-4 space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                      <div className="h-3 w-20 bg-indigo-500 rounded" />
                      <div className="flex gap-2">
                        <div className="h-3 w-12 bg-gray-300 dark:bg-gray-600 rounded" />
                        <div className="h-3 w-12 bg-gray-300 dark:bg-gray-600 rounded" />
                      </div>
                    </div>
                    {/* Hero Section */}
                    <div className="space-y-2">
                      <div className="h-2 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
                      <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
                    </div>
                    {/* Content Grid */}
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-12 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded" />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Camera Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 dark:bg-gray-600 rounded-b-lg" />
              </div>
              {/* Monitor Stand */}
              <div className="w-24 sm:w-32 h-2 bg-gray-800 dark:bg-gray-700 mx-auto" />
              <div className="w-16 sm:w-20 h-3 bg-gray-900 dark:bg-gray-800 mx-auto rounded-b-lg" />
              
              {/* Desktop Label */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                <Monitor className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs font-bold text-gray-900 dark:text-white">Desktop</span>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Tablet Device - Left Front */}
          <motion.div
            initial={{ opacity: 0, x: -80, y: 50 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute z-20 left-0 sm:left-10 md:left-20"
            style={{ top: '30%' }}
          >
            <div className="relative">
              {/* Tablet Frame */}
              <div className="w-32 sm:w-40 md:w-48 lg:w-56 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-xl p-2 shadow-2xl">
                {/* Screen */}
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
                  {/* Website Content Mockup */}
                  <div className="p-3 space-y-2">
                    <div className="h-2 w-16 bg-indigo-500 rounded" />
                    <div className="h-1.5 w-20 bg-gray-300 dark:bg-gray-600 rounded" />
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {[1, 2].map((i) => (
                        <div key={i} className="h-16 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tablet Label */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                <Tablet className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span className="text-xs font-bold text-gray-900 dark:text-white">Tablet</span>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Mobile Device - Right Front */}
          <motion.div
            initial={{ opacity: 0, x: 80, y: 50 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute z-30 right-0 sm:right-10 md:right-20"
            style={{ top: '35%' }}
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-20 sm:w-24 md:w-28 lg:w-32 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-2 shadow-2xl">
                {/* Screen */}
                <div className="w-full aspect-[9/16] bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-600">
                  {/* Website Content Mockup */}
                  <div className="p-2 space-y-1.5">
                    <div className="h-1.5 w-12 bg-indigo-500 rounded" />
                    <div className="h-1 w-14 bg-gray-300 dark:bg-gray-600 rounded" />
                    <div className="space-y-1 mt-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded" />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-700 dark:bg-gray-600 rounded-full" />
              </div>
              
              {/* Mobile Label */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 whitespace-nowrap">
                <Smartphone className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                <span className="text-xs font-bold text-gray-900 dark:text-white">Mobile</span>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Floating UI Elements */}
          {floatingElements.map((element, index) => {
            const Icon = element.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: element.delay }}
                className="absolute hidden md:block"
                style={element.position}
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: element.delay
                  }}
                  className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${element.color} rounded-full shadow-xl`}
                >
                  <Icon className="h-4 w-4 text-white" />
                  <span className="text-xs font-bold text-white whitespace-nowrap">{element.label}</span>
                </motion.div>
              </motion.div>
            );
          })}
          
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mt-10 sm:mt-12"
        >
          <div className="text-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
            </div>
            <div className="text-lg sm:text-2xl font-black text-gray-900 dark:text-white">0.8s</div>
            <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 font-medium">Load Time</div>
          </div>
          
          <div className="text-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
            </div>
            <div className="text-lg sm:text-2xl font-black text-gray-900 dark:text-white">95+</div>
            <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 font-medium">Mobile Score</div>
          </div>
          
          <div className="text-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
            </div>
            <div className="text-lg sm:text-2xl font-black text-gray-900 dark:text-white">100%</div>
            <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 font-medium">Responsive</div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
