'use client';

/**
 * Integrations & Tech Section
 * Tech logos and integration capabilities
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Lock } from 'lucide-react';

console.log('[AI-Chatbot-Dev] IntegrationsSection component loaded');

export function IntegrationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[AI-Chatbot-Dev] IntegrationsSection mounted');
    return () => console.log('[AI-Chatbot-Dev] IntegrationsSection unmounted');
  }, []);

  const integrations = [
    'OpenAI',
    'LangChain',
    'Zapier',
    'Flowise',
    'WhatsApp Business API',
    'Next.js',
    'NestJS',
    'Node.js',
    'HubSpot',
    'Zoho CRM',
    'PostgreSQL',
    'MongoDB'
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      id="integrations"
      role="region"
      aria-labelledby="integrations-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-4 sm:mb-5 border border-indigo-200 dark:border-indigo-800 text-sm sm:text-base">
            <span className="font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide flex items-center gap-2 justify-center">
              <Code2 className="h-4 w-4" />
              Integrations & Tech
            </span>
          </div>

          <h2
            id="integrations-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            Powered by Best-in-Class Tech
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We integrate with the tools you already use
          </p>
        </motion.div>

        {/* Integration Logos */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 sm:px-8 py-4 sm:py-5 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#FFB100] hover:shadow-xl transition-all duration-300"
              >
                <span className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                  {integration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-[#0A2540] to-[#0A2540]/90 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border-2 border-[#FFB100] max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lock className="h-8 w-8 text-[#FFB100]" />
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
              No Vendor Lock-ins
            </div>
          </div>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
            You own the code, we build the brains. Full source code access with every project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
