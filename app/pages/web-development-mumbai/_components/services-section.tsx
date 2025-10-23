'use client';

/**
 * Services Section Component - MUMBAI WEB DEVELOPMENT SERVICES
 * Premium services showcase with professional icons and animations
 * 
 * @version 2.0.0 - Production Ready Services
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
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
  CheckCircle,
  Monitor,
  Smartphone as Mobile,
  BarChart3,
  Cloud,
  Lock,
  Settings
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
      title: "Custom Web Development",
      description: "Tailored web applications built with modern technologies for Mumbai businesses",
      features: ["React & Next.js", "Node.js Backend", "API Integration", "Custom Features"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Mobile,
      title: "Mobile-First Design",
      description: "Responsive websites optimized for all devices with Mumbai mobile users in mind",
      features: ["Mobile Optimization", "Touch-Friendly UI", "Fast Loading", "Cross-Platform"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Search engine optimized websites to help Mumbai businesses rank higher",
      features: ["Local SEO", "Google My Business", "Meta Optimization", "Speed Optimization"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Complete online stores for Mumbai businesses to sell products and services",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Multi-Vendor"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions to power your Mumbai business operations",
      features: ["Database Design", "API Development", "Server Management", "Data Security"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-500/20"
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Ongoing security updates and maintenance to keep your website safe",
      features: ["SSL Certificates", "Regular Updates", "Backup Systems", "24/7 Monitoring"],
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-500/10 to-pink-500/10",
      borderColor: "border-red-500/20"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast websites that provide excellent user experience",
      features: ["Speed Optimization", "CDN Integration", "Image Optimization", "Caching"],
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Websites that speak to Mumbai's diverse multilingual audience",
      features: ["Hindi & English", "Regional Languages", "RTL Support", "Cultural Adaptation"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-500/10 to-cyan-500/10",
      borderColor: "border-teal-500/20"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-slate-900"
      id="services"
      role="region"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Comprehensive Web Development Services
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            From custom web applications to e-commerce solutions, we provide everything Mumbai businesses need to succeed online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`group p-6 bg-gradient-to-br ${service.bgColor} backdrop-blur-sm border ${service.borderColor} rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <button className="flex items-center text-sm font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                Learn More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Modern Technology Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: Code, color: "text-blue-500" },
              { name: "Next.js", icon: Monitor, color: "text-black dark:text-white" },
              { name: "Node.js", icon: Database, color: "text-green-500" },
              { name: "TypeScript", icon: Code, color: "text-blue-600" },
              { name: "MongoDB", icon: Database, color: "text-green-600" },
              { name: "AWS", icon: Cloud, color: "text-orange-500" }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-2 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <tech.icon className={`h-6 w-6 ${tech.color}`} />
                </div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{tech.name}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Every Mumbai business is unique. Let us create a custom web solution tailored to your specific needs and goals.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => console.log('[Mumbai-Web-Development] Services CTA - Custom Solution clicked')}
          >
            <a href="#lead-form" className="flex items-center">
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}