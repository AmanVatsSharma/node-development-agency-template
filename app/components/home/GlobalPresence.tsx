"use client";

/**
 * @fileoverview GlobalPresence Component - Global Office Locations
 * @description Premium display of global office locations with interactive map
 * Features:
 * - World map with office markers
 * - Office details on hover
 * - 24/7 coverage visualization
 * - Responsive design
 * 
 * @component GlobalPresence
 * @example
 * <GlobalPresence />
 */

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

// Console log for debugging
console.log('[GlobalPresence] Component loaded');

/**
 * Office Location interface
 */
interface Office {
  id: string;
  city: string;
  country: string;
  region: string;
  timezone: string;
  employees: string;
  services: string[];
  coordinates: { x: string; y: string }; // Percentage positions on map
}

/**
 * Main GlobalPresence Component
 */
export default function GlobalPresence() {
  const [hoveredOffice, setHoveredOffice] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  
  console.log('[GlobalPresence] Component rendering', { hoveredOffice, shouldReduceMotion });
  
  // Office locations data
  const offices: Office[] = [
    {
      id: 'india',
      city: 'Mumbai',
      country: 'India',
      region: 'Asia Pacific',
      timezone: 'IST (UTC+5:30)',
      employees: '150+',
      services: ['Development', 'Design', 'Support'],
      coordinates: { x: '70%', y: '45%' }
    },
    {
      id: 'dubai',
      city: 'Dubai',
      country: 'UAE',
      region: 'Middle East',
      timezone: 'GST (UTC+4)',
      employees: '50+',
      services: ['Sales', 'Consulting'],
      coordinates: { x: '62%', y: '42%' }
    },
    {
      id: 'california',
      city: 'San Francisco',
      country: 'USA',
      region: 'North America',
      timezone: 'PST (UTC-8)',
      employees: '75+',
      services: ['Innovation Lab', 'R&D'],
      coordinates: { x: '12%', y: '38%' }
    },
    {
      id: 'toronto',
      city: 'Toronto',
      country: 'Canada',
      region: 'North America',
      timezone: 'EST (UTC-5)',
      employees: '40+',
      services: ['Development', 'Support'],
      coordinates: { x: '22%', y: '32%' }
    },
    {
      id: 'shenzhen',
      city: 'Shenzhen',
      country: 'China',
      region: 'Asia Pacific',
      timezone: 'CST (UTC+8)',
      employees: '60+',
      services: ['Manufacturing', 'IoT'],
      coordinates: { x: '78%', y: '40%' }
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden content-visibility-auto">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        {/* Hidden on mobile to reduce GPU cost (blur + animation is expensive). */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse hidden md:block"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse hidden md:block" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Presence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            5 offices across 4 continents providing 24/7 support and local expertise
          </p>
        </motion.div>
        
        {/* World Map Container */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          whileInView={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.8 }}
          className="relative max-w-6xl mx-auto mb-16"
        >
          {/* Simplified World Map Background */}
          <div className="relative w-full aspect-[2/1] bg-gradient-to-b from-blue-950/50 to-blue-900/30 rounded-2xl border border-cyan-500/30 overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
            
            {/* Continents Silhouette (Simplified SVG or Gradients) */}
            <div className="absolute inset-0 opacity-10">
              {/* You can add actual SVG map here or use image */}
              <div className="absolute top-[20%] left-[15%] w-[20%] h-[40%] bg-cyan-500/40 rounded-full blur-xl"></div>
              <div className="absolute top-[25%] left-[45%] w-[25%] h-[50%] bg-cyan-500/40 rounded-full blur-xl"></div>
              <div className="absolute top-[35%] left-[70%] w-[22%] h-[45%] bg-cyan-500/40 rounded-full blur-xl"></div>
            </div>
            
            {/* Office Markers */}
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                className="absolute"
                style={{
                  left: office.coordinates.x,
                  top: office.coordinates.y,
                  transform: 'translate(-50%, -50%)'
                }}
                onMouseEnter={() => setHoveredOffice(office.id)}
                onMouseLeave={() => setHoveredOffice(null)}
                onClick={() => {
                  // Mobile-friendly: tap to toggle.
                  setHoveredOffice((prev) => (prev === office.id ? null : office.id));
                  console.log('[GlobalPresence] Office marker clicked:', office.id);
                }}
              >
                {/* Marker Pin */}
                <div className="relative">
                  {/* Pulsing Circle */}
                  <div className="absolute inset-0 hidden sm:block motion-safe:animate-ping">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full opacity-75"></div>
                  </div>
                  
                  {/* Marker */}
                  <div className="relative w-6 h-6 bg-cyan-500 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 active:scale-125 transition-transform"></div>
                  
                  {/* Info Card on Hover */}
                  {hoveredOffice === office.id && (
                    <motion.div
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                      className="absolute top-8 left-1/2 transform -translate-x-1/2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 border border-cyan-500/30 z-50"
                    >
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                        {office.city}, {office.country}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {office.timezone}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-gray-700 dark:text-gray-300">
                          <span>Team Size:</span>
                          <span className="font-semibold">{office.employees}</span>
                        </div>
                        <div>
                          <span className="text-gray-700 dark:text-gray-300">Services:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {office.services.map((service, idx) => (
                              <span key={idx} className="px-2 py-0.5 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded text-xs">
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Triangle pointer */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-l border-t border-cyan-500/30 rotate-45"></div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
            
            {/* Connecting Lines (optional) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              {offices.map((office, idx) => {
                if (idx === offices.length - 1) return null;
                const next = offices[idx + 1];
                return (
                  <line
                    key={`line-${office.id}`}
                    x1={office.coordinates.x}
                    y1={office.coordinates.y}
                    x2={next.coordinates.x}
                    y2={next.coordinates.y}
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                  />
                );
              })}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
        
        {/* Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {offices.map((office, index) => (
            <motion.div
              key={office.id}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl">
                  🏢
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{office.city}</h3>
                <p className="text-sm text-gray-400 mb-2">{office.country}</p>
                <p className="text-xs text-cyan-400">{office.employees} Team Members</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* 24/7 Badge */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm px-8 py-4 rounded-full border border-cyan-400/30">
            <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xl font-bold text-white">24/7 Global Support Coverage</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}