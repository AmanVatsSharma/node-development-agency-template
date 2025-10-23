'use client';

/**
 * Services Section Component - MUMBAI-FOCUSED WEB DEVELOPMENT
 * Comprehensive services grid showcasing web development expertise
 * 
 * FEATURES:
 * - Complete web development services
 * - Mumbai market focus
 * - Interactive service cards
 * - Mobile-responsive grid
 * 
 * CONVERSION OPTIMIZATION:
 * - Clear service offerings
 * - Visual appeal
 * - Easy navigation
 * - Mobile optimization
 * 
 * @version 1.0.0 - Mumbai-Focused Services
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Search, 
  ShoppingCart, 
  Database, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

console.log('[Mumbai-Web-Development] ServicesSection component loaded');

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    console.log('[Mumbai-Web-Development] ServicesSection mounted');
    return () => console.log('[Mumbai-Web-Development] ServicesSection unmounted');
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Tailored websites built with modern technologies like React, Next.js, and Node.js',
      features: ['Responsive Design', 'Custom Functionality', 'Modern Tech Stack', 'Scalable Architecture'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Websites optimized for mobile devices with touch-friendly interfaces',
      features: ['Mobile Responsive', 'Touch Optimized', 'Fast Loading', 'Cross-Platform'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconColor: 'text-green-600'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Search engine optimized websites to help Mumbai businesses rank higher',
      features: ['Google Ranking', 'Local SEO', 'Meta Optimization', 'Speed Optimization'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      iconColor: 'text-purple-600'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Online stores and payment gateways for Mumbai businesses to sell online',
      features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Multi-currency'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      iconColor: 'text-orange-600'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust server-side solutions and database management systems',
      features: ['API Development', 'Database Design', 'Server Management', 'Security'],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      iconColor: 'text-indigo-600'
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Website security, updates, and ongoing maintenance services',
      features: ['SSL Certificates', 'Regular Updates', 'Backup Systems', '24/7 Monitoring'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      iconColor: 'text-red-600'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Fast-loading websites with optimized performance for better user experience',
      features: ['Speed Optimization', 'Image Compression', 'Caching', 'CDN Setup'],
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Websites with multiple language support for diverse Mumbai audience',
      features: ['Hindi/English', 'Regional Languages', 'RTL Support', 'Cultural Adaptation'],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      iconColor: 'text-teal-600'
    }
  ];

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
      className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900"
      id="services"
      role="region"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Complete Web Development Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From concept to launch, we provide end-to-end web development solutions for Mumbai businesses
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* Service Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${service.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`h-6 w-6 ${service.iconColor}`} />
              </div>

              {/* Service Title */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              We specialize in creating unique web solutions tailored to Mumbai's diverse business landscape. 
              Let's discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                onClick={() => console.log('[Mumbai-Web-Development] Services CTA - Get Custom Quote clicked')}
              >
                Get Custom Quote
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
              <a
                href="tel:+919963730111"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300"
                onClick={() => console.log('[Mumbai-Web-Development] Services CTA - Call Expert clicked')}
              >
                Call Mumbai Expert
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}