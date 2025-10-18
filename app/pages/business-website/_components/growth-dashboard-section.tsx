'use client';

/**
 * OPTION 2: Indian Business Growth Dashboard Section
 * 
 * PURPOSE:
 * Shows real-time business growth metrics to demonstrate ROI and impact
 * Positioned after Trust Signals to reinforce credibility with data
 * 
 * FEATURES:
 * - Animated customer inquiry counter (0 → 150+)
 * - Interactive India map with city pins (Mumbai, Delhi, Bangalore, etc.)
 * - Revenue growth chart (upward trending)
 * - Device mockups showing responsive website
 * - Trust indicators (4.9★ rating, 500+ businesses)
 * 
 * CONVERSION PSYCHOLOGY:
 * - Numbers create believability
 * - Geographic spread shows nationwide trust
 * - Growth visualizations inspire confidence
 * - Multi-device display demonstrates modern approach
 * 
 * @version 1.0.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  MapPin, 
  Phone, 
  Star,
  Smartphone,
  Monitor,
  DollarSign,
  ArrowUpRight
} from 'lucide-react';

console.log('[Business-Website] GrowthDashboardSection component loaded');

export function GrowthDashboardSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Animated counters
  const [inquiries, setInquiries] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [rating, setRating] = useState(0);
  
  // Indian cities for map pins
  const indianCities = [
    { name: 'Mumbai', x: '25%', y: '60%', delay: 0.1 },
    { name: 'Delhi', x: '35%', y: '25%', delay: 0.2 },
    { name: 'Bangalore', x: '30%', y: '75%', delay: 0.3 },
    { name: 'Hyderabad', x: '40%', y: '70%', delay: 0.4 },
    { name: 'Chennai', x: '38%', y: '80%', delay: 0.5 },
    { name: 'Pune', x: '28%', y: '63%', delay: 0.6 },
    { name: 'Kolkata', x: '60%', y: '40%', delay: 0.7 },
    { name: 'Ahmedabad', x: '20%', y: '45%', delay: 0.8 },
  ];
  
  // Revenue chart data (monthly growth)
  const revenueData = [40, 55, 48, 70, 65, 85, 95, 110];

  useEffect(() => {
    console.log('[Business-Website] GrowthDashboardSection mounted');
    
    if (inView) {
      console.log('[Business-Website] Starting growth metrics animation');
      
      // Customer inquiries: 0 → 150+
      let inq = 0;
      const inqInterval = setInterval(() => {
        inq += 5;
        setInquiries(Math.min(150, inq));
        if (inq >= 150) clearInterval(inqInterval);
      }, 30);
      
      // Revenue increase: 0 → 280%
      let rev = 0;
      const revInterval = setInterval(() => {
        rev += 10;
        setRevenue(Math.min(280, rev));
        if (rev >= 280) clearInterval(revInterval);
      }, 50);
      
      // New customers: 0 → 2500+
      let cust = 0;
      const custInterval = setInterval(() => {
        cust += 100;
        setCustomers(Math.min(2500, cust));
        if (cust >= 2500) clearInterval(custInterval);
      }, 50);
      
      // Rating: 0 → 4.9
      let rat = 0;
      const ratInterval = setInterval(() => {
        rat += 0.1;
        setRating(Math.min(4.9, rat));
        if (rat >= 4.9) clearInterval(ratInterval);
      }, 100);
    }
    
    return () => console.log('[Business-Website] GrowthDashboardSection unmounted');
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:to-gray-900"
      id="growth-dashboard"
      role="region"
      aria-labelledby="growth-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-3 sm:mb-4 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm">
            <span className="font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide">
              📊 Growth Dashboard
            </span>
          </div>
          
          <h2
            id="growth-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-gray-900 dark:text-white"
          >
            Real Business Growth Across India
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See how our websites drive measurable results for Indian businesses nationwide
          </p>
        </motion.div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          
          {/* ===============================================
              LEFT SIDE: India Map with City Pins
              =============================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-xl h-full">
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                Serving 500+ Businesses Nationwide
              </h3>
              
              {/* India Map Simplified Illustration */}
              <div className="relative w-full aspect-square max-w-md mx-auto mb-6">
                {/* Map Background Shape (simplified India outline) */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl border-2 border-indigo-200 dark:border-indigo-800" style={{
                  clipPath: 'polygon(35% 5%, 50% 8%, 65% 15%, 75% 25%, 80% 40%, 78% 55%, 72% 70%, 65% 85%, 50% 95%, 35% 90%, 25% 80%, 20% 65%, 18% 50%, 22% 35%, 28% 20%)'
                }} />
                
                {/* Animated City Pins */}
                {indianCities.map((city, index) => (
                  <motion.div
                    key={city.name}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: city.delay }}
                    className="absolute"
                    style={{ left: city.x, top: city.y }}
                  >
                    <div className="relative group cursor-pointer">
                      {/* Pin Icon */}
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: city.delay }}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900"
                      >
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </motion.div>
                      
                      {/* Pulse Effect */}
                      <span className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-20" />
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-[10px] sm:text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {city.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Connecting Lines Animation */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.path
                    d="M 30,60 Q 35,40 50,30"
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Bottom Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl">
                  <div className="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">{inquiries}+</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 font-medium">Daily Inquiries</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                  <div className="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400">{rating.toFixed(1)}★</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 font-medium">Avg Rating</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-xl">
                  <div className="text-xl sm:text-2xl font-black text-pink-600 dark:text-pink-400">{customers}+</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 font-medium">Customers</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* ===============================================
              RIGHT SIDE: Growth Metrics & Device Mockups
              =============================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            
            {/* Revenue Growth Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                  Revenue Growth
                </h3>
                <div className="px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">+{revenue}%</span>
                </div>
              </div>
              
              {/* Simple Bar Chart */}
              <div className="flex items-end justify-between gap-2 h-32 sm:h-40 mb-4">
                {revenueData.map((height, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ height: 0 }}
                    animate={inView ? { height: `${height}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + idx * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-green-600 to-emerald-500 rounded-t-lg relative group"
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-bold text-gray-900 dark:text-white">{height}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center text-xs text-gray-500 dark:text-gray-400">
                Last 8 Months Performance
              </div>
            </div>
            
            {/* Device Mockups */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Responsive on All Devices
              </h3>
              
              <div className="flex items-end justify-center gap-4">
                {/* Mobile Device */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="relative"
                >
                  <div className="w-16 sm:w-20 h-28 sm:h-36 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg border-4 border-gray-800 dark:border-gray-300 shadow-xl flex flex-col">
                    <div className="flex-1 bg-white dark:bg-gray-700 m-1 rounded-sm" />
                  </div>
                  <Smartphone className="absolute -top-6 left-1/2 transform -translate-x-1/2 h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </motion.div>
                
                {/* Desktop Device */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="relative"
                >
                  <div className="w-32 sm:w-40 h-20 sm:h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg border-4 border-gray-800 dark:border-gray-300 shadow-xl">
                    <div className="w-full h-full bg-white dark:bg-gray-700 m-1 rounded-sm" />
                  </div>
                  <div className="w-24 sm:w-32 h-1 bg-gray-800 dark:bg-gray-300 mx-auto" />
                  <div className="w-8 sm:w-10 h-2 bg-gray-800 dark:bg-gray-300 mx-auto rounded-b-lg" />
                  <Monitor className="absolute -top-6 left-1/2 transform -translate-x-1/2 h-5 w-5 text-purple-600 dark:text-purple-400" />
                </motion.div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">Mobile-First Design Guaranteed</span>
                </div>
              </div>
            </div>
            
          </motion.div>
          
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-10 sm:mt-12"
        >
          <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Ready to see these results for your business?
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Get Your Growth Plan
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
