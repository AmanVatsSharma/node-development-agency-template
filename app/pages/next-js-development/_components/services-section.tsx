'use client';

/**
 * Core Services Section
 * Detailed service offerings with pricing
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Headphones, ShoppingCart, Code2, Workflow, CheckCircle2 } from 'lucide-react';

console.log('[Next-JS-Dev] ServicesSection component loaded');

interface Service {
  icon: React.ElementType;
  service: string;
  description: string;
  deliverable: string;
  features: string[];
  gradient: string;
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Next-JS-Dev] ServicesSection mounted');
    return () => console.log('[Next-JS-Dev] ServicesSection unmounted');
  }, []);

  const services: Service[] = [
    {
      icon: Globe,
      service: 'Custom Next.js Web Development',
      description: 'Tailored site from idea → launch',
      deliverable: 'SaaS, Corporate, Agency',
      features: ['Custom Design System', 'Responsive UI/UX', 'SEO Optimized', 'Fast Deployment'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Headphones,
      service: 'Next.js + Headless CMS',
      description: 'Strapi, Sanity, Contentful integration',
      deliverable: 'Blog, Marketing Site',
      features: ['Content Management', 'API Integration', 'Dynamic Routes', 'Preview Mode'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: ShoppingCart,
      service: 'Next.js E-Commerce',
      description: 'Shopify Headless / Medusa / Custom Cart',
      deliverable: 'Product Page + Checkout',
      features: ['Payment Gateway', 'Product Catalog', 'Cart & Wishlist', 'Order Tracking'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code2,
      service: 'Next.js + NestJS Full Stack',
      description: 'REST / GraphQL APIs, auth, dashboards',
      deliverable: 'Internal Portals, SaaS',
      features: ['API Development', 'Database Design', 'Authentication', 'Admin Panel'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Workflow,
      service: 'Next.js Migration',
      description: 'Migrate from React / WordPress / HTML',
      deliverable: 'Keep SEO, get speed + modern stack',
      features: ['Data Migration', 'URL Preservation', '3x Performance Boost', 'Zero Downtime'],
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
      id="services"
      role="region"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-4 sm:mb-5 border border-indigo-200 dark:border-indigo-800 text-sm sm:text-base">
            <span className="font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide">
              Our Core Services
            </span>
          </div>

          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            Complete Next.js Solutions
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            From simple websites to complex applications — we deliver production-ready Next.js solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${service.gradient} mb-4 sm:mb-5 shadow-lg`}>
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>

                  {/* Service Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.service}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3">
                    {service.description}
                  </p>

                  {/* Deliverable Badge */}
                  <div className="inline-block px-3 py-1.5 bg-white dark:bg-gray-950 rounded-full mb-4 border border-gray-300 dark:border-gray-700">
                    <span className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      📦 {service.deliverable}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-green-200 dark:border-green-800"
        >
          <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
            🎯 Need something else?
          </p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
            We create custom Next.js solutions tailored to your unique requirements
          </p>
          <a 
            href="#lead-form"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm sm:text-base"
            onClick={() => console.log('[Next-JS-Dev] Services CTA clicked')}
          >
            👉 Get a Custom Proposal
          </a>
        </motion.div>
      </div>
    </section>
  );
}
