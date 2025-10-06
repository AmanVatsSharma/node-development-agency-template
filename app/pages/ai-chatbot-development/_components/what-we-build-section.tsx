'use client';

/**
 * What We Build Section
 * Use Cases and Tech Stack
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingBag, Building2, MessageCircle, Phone, Landmark, Code2 } from 'lucide-react';

console.log('[AI-Chatbot-Dev] WhatWeBuildSection component loaded');

interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export function WhatWeBuildSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[AI-Chatbot-Dev] WhatWeBuildSection mounted');
    return () => console.log('[AI-Chatbot-Dev] WhatWeBuildSection unmounted');
  }, []);

  const useCases: UseCase[] = [
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: 'E-commerce',
      description: 'Product recommendation & order tracking',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'SaaS & Startups',
      description: 'Lead capture & demo booking',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Customer Support',
      description: 'Multi-language intelligent responses',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Service Businesses',
      description: 'WhatsApp inquiry & CRM integration',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Landmark className="h-8 w-8" />,
      title: 'Finance / Real Estate',
      description: 'Secure AI forms & lead verification',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Custom Solutions',
      description: 'Tailored AI bots for unique needs',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const techStack = [
    'OpenAI GPT Models',
    'Claude / Gemini APIs',
    'LangChain + Flowise',
    'WhatsApp Business API',
    'Web / CRM Integrations',
    'Node.js / Next.js',
    'NestJS / Python',
    'Vector Databases'
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900"
      id="what-we-build"
      role="region"
      aria-labelledby="what-we-build-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-[#FFB100]/20 to-[#0A2540]/20 rounded-full mb-4 sm:mb-5 border border-[#FFB100] text-sm sm:text-base">
            <span className="font-bold text-[#0A2540] dark:text-[#FFB100] uppercase tracking-wide">
              Custom AI Solutions
            </span>
          </div>

          <h2
            id="what-we-build-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            What We Build
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Custom AI Chatbots for Every Use Case
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {useCase.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0A2540] to-[#0A2540]/90 rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto border-2 border-[#FFB100]"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
              🛠️ Our Tech Stack
            </h3>
            <p className="text-base sm:text-lg text-gray-200">
              Powered by cutting-edge AI and automation technologies
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-sm sm:text-base font-bold text-white">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-8 text-center">
            <p className="text-sm sm:text-base text-[#FFB100] font-bold">
              🔒 No vendor lock-ins — you own the code, we build the brains.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
