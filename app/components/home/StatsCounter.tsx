"use client";

/**
 * @fileoverview StatsCounter Component - Animated Statistics Display
 * @description Enterprise-grade animated counter for showcasing company metrics
 * Features:
 * - Smooth number animations using Framer Motion
 * - IntersectionObserver triggers animation on scroll
 * - Responsive grid layout
 * - Customizable stats with icons
 * 
 * @component StatsCounter
 * @example
 * <StatsCounter />
 */

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

// Console log for debugging
console.log('[StatsCounter] Component loaded');

/**
 * Individual stat configuration interface
 */
interface Stat {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: React.ReactNode;
  color: string; // Tailwind color class
}

/**
 * Animated Counter Hook
 * Smoothly animates a number from 0 to target value
 */
function useAnimatedCounter(
  targetValue: number,
  isInView: boolean,
  duration: number = 2000
): number {
  // Duration isn't currently used because this implementation relies on spring physics.
  // Keeping the param for future tuning / backwards compatibility.
  void duration;
  const [displayValue, setDisplayValue] = useState(0);
  // NOTE:
  // We intentionally DO NOT create our own ref here.
  // The previous implementation created a ref that was never attached to the DOM,
  // causing `isInView` to stay false and counters to remain at 0.
  // We now receive the real `isInView` boolean from the StatCard that owns the DOM ref.
  
  // Motion value for smooth animation
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  
  useEffect(() => {
    if (isInView) {
      console.log('[StatsCounter] Animation triggered for value:', targetValue);
      motionValue.set(targetValue);
    }
  }, [isInView, targetValue, motionValue]);
  
  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    
    return () => unsubscribe();
  }, [springValue]);
  
  return displayValue;
}

/**
 * Individual Stat Card Component
 */
interface StatCardProps {
  stat: Stat;
  index: number;
}

function StatCard({ stat, index }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const animatedValue = useAnimatedCounter(stat.value, isInView);
  
  console.log(`[StatCard] Rendering stat: ${stat.label}`);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Card Container with Glassmorphism */}
      <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Gradient Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg`}>
            {stat.icon}
          </div>
          
          {/* Animated Value */}
          <div className="mb-2">
            <span className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
              {stat.prefix || ''}
              {animatedValue.toLocaleString()}
              {stat.suffix || ''}
            </span>
          </div>
          
          {/* Label */}
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
            {stat.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Main StatsCounter Component
 * Displays company statistics with animated counters
 */
export default function StatsCounter() {
  console.log('[StatsCounter] Component rendering');
  const shouldReduceMotion = useReducedMotion();
  
  // Company statistics data
  const stats: Stat[] = [
    {
      id: 'projects',
      value: 500,
      suffix: '+',
      label: 'Projects Delivered',
      color: 'from-blue-500 to-cyan-500',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      id: 'clients',
      value: 200,
      suffix: '+',
      label: 'Happy Clients Worldwide',
      color: 'from-green-500 to-emerald-500',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 'experience',
      value: 10,
      suffix: '+',
      label: 'Years of Excellence',
      color: 'from-purple-500 to-pink-500',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'offices',
      value: 5,
      label: 'Global Offices',
      color: 'from-orange-500 to-red-500',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden content-visibility-auto">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Global Enterprises</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building world-class digital solutions that drive real business results across continents
          </p>
        </motion.div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}