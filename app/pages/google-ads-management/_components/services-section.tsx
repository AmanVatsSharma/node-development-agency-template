'use client';

/**
 * Services Section Component
 * What We Deliver - Campaign Types & Deliverables
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Smartphone, ShoppingCart, Video, MapPin, FileText, Target, TrendingUp, Code, Eye, BarChart3, Calendar } from 'lucide-react';

console.log('[Google-Ads] ServicesSection component loaded');

interface CampaignType {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

interface Deliverable {
  icon: React.ReactNode;
  text: string;
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Google-Ads] ServicesSection mounted');
    return () => console.log('[Google-Ads] ServicesSection unmounted');
  }, []);

  const campaignTypes: CampaignType[] = [
    {
      icon: <Search className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'Search Campaigns for Leads & Sales',
      description: 'Target high-intent customers actively searching for your products/services',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Smartphone className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'Performance Max & Display Remarketing',
      description: 'Re-engage visitors across Google\'s entire network with smart automation',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'E-commerce Shopping Campaigns',
      description: 'Drive direct sales with product-focused Shopping & Merchant Center ads',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: <Video className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'YouTube Video Ads for Brand Awareness',
      description: 'Build brand recognition and reach millions with engaging video campaigns',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: <MapPin className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: 'Local Service & Call-Only Ads',
      description: 'Generate phone calls and local leads for service-based businesses',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const deliverables: Deliverable[] = [
    { icon: <FileText className="h-5 w-5" />, text: 'Ad Copywriting + Creative Assets' },
    { icon: <Target className="h-5 w-5" />, text: 'Keyword Research & Competitor Analysis' },
    { icon: <TrendingUp className="h-5 w-5" />, text: 'Conversion Tracking & Pixel Setup' },
    { icon: <Code className="h-5 w-5" />, text: 'Landing Page Conversion Review' },
    { icon: <Calendar className="h-5 w-5" />, text: 'Weekly Reporting & Scaling Plan' }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900"
      id="services"
      role="region"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header - MOBILE OPTIMIZED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full mb-4 sm:mb-5 border border-blue-200 dark:border-blue-800 text-sm sm:text-base">
            <span className="font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
              What We Deliver
            </span>
          </div>

          <h2
            id="services-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            Campaign Types We Master
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full-spectrum Google Ads management tailored to your business goals
          </p>
        </motion.div>

        {/* Campaign Types - MOBILE OPTIMIZED */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {campaignTypes.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:shadow-2xl active:scale-95"
              >
                {/* Icon */}
                <div className={`inline-flex p-3 sm:p-4 bg-gradient-to-br ${campaign.gradient} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {campaign.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white mb-2">
                  {campaign.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {campaign.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Deliverables Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-3xl p-6 sm:p-8 border-2 border-blue-200 dark:border-blue-800 shadow-xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-center mb-6 text-gray-900 dark:text-white">
              Includes Every Critical Element
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="p-2 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/40 dark:to-blue-900/40 rounded-lg flex-shrink-0">
                    <div className="text-green-600 dark:text-green-400">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
