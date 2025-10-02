'use client';

/**
 * Services Section Component
 * Comprehensive service offerings with detailed descriptions
 * Highlights all services from basic websites to complete digital solutions
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {  
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Code, 
  Palette, 
  Zap,
  BarChart2,
  MessageCircle
} from 'lucide-react';

console.log('[Business-Website] ServicesSection component loaded');

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  priceFrom: string;
  color: string;
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Business-Website] ServicesSection mounted');
    return () => console.log('[Business-Website] ServicesSection unmounted');
  }, []);

  const services: Service[] = [
    {
      icon: Globe,
      title: 'Business Website Development',
      description: 'Professional, mobile-responsive websites that establish your online presence and build credibility.',
      features: ['5-10 Pages', 'Mobile Responsive', 'Contact Forms', 'Google Maps Integration'],
      priceFrom: '₹13,999',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Dynamic SEO Website',
      description: 'Advanced websites with SEO optimization, analytics, and CRM integration for growing businesses.',
      features: ['SEO Optimized', 'Google Analytics', 'CRM Integration', 'Blog System', 'Social Media Integration'],
      priceFrom: '₹45,999',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete online stores on Shopify, WooCommerce, or custom platforms with payment gateway integration.',
      features: ['Product Management', 'Payment Gateway', 'Inventory System', 'Order Tracking'],
      priceFrom: '₹90,000',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke web applications built with Next.js, React, or your preferred technology stack.',
      features: ['Next.js/React', 'Custom Features', 'API Development', 'Database Design'],
      priceFrom: 'Custom',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Websites optimized for mobile devices - crucial for the Indian market where mobile traffic dominates.',
      features: ['Touch Optimized', 'Fast Loading', 'Progressive Web App', 'Offline Support'],
      priceFrom: 'Included',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart2,
      title: 'Digital Marketing',
      description: 'Complete digital marketing services - SEO, social media, Google Ads, and content marketing.',
      features: ['SEO Strategy', 'Social Media Management', 'Google Ads', 'Content Creation'],
      priceFrom: '₹15,000/mo',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design & Branding',
      description: 'Professional brand identity, logo design, and user experience optimization.',
      features: ['Logo Design', 'Brand Guidelines', 'UI/UX Design', 'Graphics & Assets'],
      priceFrom: '₹25,000',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'Support & Maintenance',
      description: 'Ongoing website maintenance, updates, security patches, and 24/7 support.',
      features: ['24/7 Support', 'Regular Updates', 'Security Monitoring', 'Backup & Recovery'],
      priceFrom: '₹5,000/mo',
      color: 'from-cyan-500 to-blue-500'
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-950"
      id="services"
      role="region"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-3 sm:mb-4 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm">
            <span className="font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide">
              Complete Solutions
            </span>
          </div>
          
          <h2 
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-gray-900 dark:text-white px-2"
          >
            Everything Your Business Needs
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-snug sm:leading-relaxed px-2">
            From business website to e-commerce with digital marketing - all at affordable prices.
          </p>
        </motion.div>

        {/* Services Grid - 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-800 p-3 sm:p-4 md:p-6 hover:shadow-2xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300"
                onClick={() => console.log(`[Business-Website] Service clicked: ${service.title}`)}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 rounded-xl sm:rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon - Smaller on mobile */}
                  <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.color} mb-2 sm:mb-3 shadow-lg`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                  </div>

                  {/* Title - Compact */}
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description - Hidden on small mobile */}
                  <p className="hidden sm:block text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 text-xs md:text-sm leading-snug sm:leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List - Compact */}
                  <ul className="space-y-1 sm:space-y-1.5 mb-2 sm:mb-3 md:mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-1 sm:gap-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-green-500 mt-0.5 text-xs">✓</span>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price - Compact */}
                  <div className="pt-2 sm:pt-3 md:pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-0.5 sm:gap-0">
                      <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        From
                      </span>
                      <span className="text-base sm:text-lg md:text-xl font-bold text-indigo-600 dark:text-indigo-400">
                        {service.priceFrom}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 sm:mt-12 md:mt-16 px-2"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 md:mb-6 leading-snug">
            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              Don't worry about digital marketing!
            </span>
            {' '}We manage everything. Just call! 📞
          </p>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full border border-green-200 dark:border-green-800 text-xs sm:text-sm">
            <span className="font-semibold text-gray-800 dark:text-gray-200 text-center">
              💡 Complete digital transformation packages available
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

