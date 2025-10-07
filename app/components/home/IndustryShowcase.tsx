"use client";

/**
 * @fileoverview IndustryShowcase Component - Industries We Serve
 * @description Premium showcase of industries and sectors served
 * Features:
 * - Interactive industry cards with icons
 * - Hover effects with use case examples
 * - Responsive grid layout
 * - Smooth animations
 * 
 * @component IndustryShowcase
 * @example
 * <IndustryShowcase />
 */

import { motion } from 'framer-motion';
import { useState } from 'react';

// Console log for debugging
console.log('[IndustryShowcase] Component loaded');

/**
 * Industry interface
 */
interface Industry {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  useCases: string[];
}

/**
 * Industry Card Component
 */
interface IndustryCardProps {
  industry: Industry;
  index: number;
}

function IndustryCard({ industry, index }: IndustryCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  console.log(`[IndustryCard] Rendering industry: ${industry.name}`);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-2xl h-full overflow-hidden">
        {/* Gradient Border on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
        
        {/* Inner Content */}
        <div className="relative bg-white dark:bg-gray-800 rounded-xl h-full p-6 m-0.5">
          {/* Icon */}
          <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {industry.icon}
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
            {industry.name}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {industry.description}
          </p>
          
          {/* Use Cases - Show on Hover */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Use Cases:
              </p>
              <ul className="space-y-1">
                {industry.useCases.map((useCase, idx) => (
                  <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                    <span className="text-cyan-500 mr-2">•</span>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Learn More Link */}
          <div className="mt-6">
            <span className="text-cyan-600 dark:text-cyan-400 font-medium text-sm group-hover:underline cursor-pointer inline-flex items-center">
              Explore Solutions
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Main IndustryShowcase Component
 */
export default function IndustryShowcase() {
  console.log('[IndustryShowcase] Component rendering');
  
  // Industries data
  const industries: Industry[] = [
    {
      id: 'ecommerce',
      name: 'E-Commerce & Retail',
      description: 'Scalable online stores, marketplaces, and retail platforms with advanced features.',
      gradient: 'from-blue-500 to-cyan-500',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      useCases: [
        'Custom Shopify Solutions',
        'Multi-vendor Marketplaces',
        'Inventory Management Systems',
        'Payment Gateway Integration'
      ]
    },
    {
      id: 'fintech',
      name: 'FinTech & Banking',
      description: 'Secure financial platforms, payment processing, and banking solutions.',
      gradient: 'from-green-500 to-emerald-600',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      useCases: [
        'Digital Wallets',
        'Trading Platforms',
        'Loan Management Systems',
        'Payment Processing Apps'
      ]
    },
    {
      id: 'healthcare',
      name: 'Healthcare & MedTech',
      description: 'HIPAA-compliant healthcare applications and patient management systems.',
      gradient: 'from-red-500 to-pink-600',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      useCases: [
        'Telemedicine Platforms',
        'Electronic Health Records',
        'Appointment Scheduling',
        'Medical Device Integration'
      ]
    },
    {
      id: 'logistics',
      name: 'Logistics & Supply Chain',
      description: 'Smart logistics solutions, fleet management, and supply chain optimization.',
      gradient: 'from-orange-500 to-red-600',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      ),
      useCases: [
        'Fleet Tracking Systems',
        'Warehouse Management',
        'Route Optimization',
        'Delivery Management'
      ]
    },
    {
      id: 'education',
      name: 'Education & E-Learning',
      description: 'Interactive learning platforms, LMS, and educational technology solutions.',
      gradient: 'from-purple-500 to-indigo-600',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      useCases: [
        'Learning Management Systems',
        'Virtual Classrooms',
        'Student Portals',
        'Assessment Platforms'
      ]
    },
    {
      id: 'realestate',
      name: 'Real Estate & PropTech',
      description: 'Property management, listing platforms, and real estate CRM solutions.',
      gradient: 'from-teal-500 to-green-600',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      useCases: [
        'Property Listing Portals',
        'Virtual Tours',
        'Tenant Management',
        'Real Estate CRM'
      ]
    },
  ];
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Transform</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From startups to Fortune 500 companies, we deliver tailored solutions across diverse industries
          </p>
        </motion.div>
        
        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
        
        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Don't see your industry? We adapt our expertise to any sector.{' '}
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold cursor-pointer hover:underline">
              Let's discuss your needs →
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}