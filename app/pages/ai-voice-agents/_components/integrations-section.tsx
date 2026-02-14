'use client';

/**
 * Integrations Section
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2 } from 'lucide-react';

export function IntegrationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const integrations = [
    'Twilio',
    'Exotel',
    'HubSpot',
    'Zoho',
    'OpenAI',
    'WhatsApp',
    'Google Sheet',
    'Salesforce'
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
      id="integrations"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-5 border border-green-200 dark:border-green-800">
            <span className="font-bold text-green-700 dark:text-green-300 uppercase tracking-wide text-sm">
              Integrations
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 text-gray-900 dark:text-white">
            Advanced AI Voice Agents Development Tools & Integrations
          </h2>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Plug into your existing phone number or CRM — zero code required
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-[#FF7A00] dark:hover:border-[#FF7A00] transition-all shadow-lg hover:shadow-2xl flex items-center justify-center"
              >
                <div className="text-center">
                  <Code2 className="h-8 w-8 mx-auto mb-2 text-[#FF7A00]" />
                  <p className="font-bold text-gray-900 dark:text-white">
                    {integration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800">
            <p className="font-bold text-gray-900 dark:text-white text-lg">
              🔌 Don't see your tool? We can integrate with any API or platform.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
