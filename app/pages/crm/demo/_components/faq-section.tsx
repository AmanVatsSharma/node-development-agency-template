'use client';

/**
 * @fileoverview FAQ Section - EnterpriseHero CRM Demo
 * @description Common questions about the CRM demo
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

console.log('[CRM-Demo] FAQSection component loaded');

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is this self-hosted or cloud?',
      answer: 'EnterpriseHero CRM offers both options. The Self-Hosted Edition deploys on your own servers (AWS, Azure, DigitalOcean, or on-premise), giving you complete control. The Enterprise Edition includes managed private cloud hosting on our secure infrastructure. You choose based on your compliance and control requirements.'
    },
    {
      question: 'Can we use our own branding?',
      answer: 'Absolutely! EnterpriseHero CRM is 100% white-label ready. You can customize the logo, color scheme, domain name, and even module names. Make it truly yours — your customers will never know it\'s powered by our platform unless you want them to.'
    },
    {
      question: 'How secure is data integration with BharatERP?',
      answer: 'Data integration between CRM and BharatERP modules uses encrypted API calls with token-based authentication. All data transmission is SSL encrypted. Since everything runs on your infrastructure (self-hosted) or our secure private cloud, there\'s no third-party data sharing. We follow OWASP security guidelines and conduct regular security audits.'
    },
    {
      question: 'What support comes with it?',
      answer: 'Self-Hosted Edition includes email support (48-hour response time) and comprehensive documentation. Enterprise Edition includes priority 24/7 support via phone, email, and WhatsApp, plus a dedicated account manager. Both editions include free updates, security patches, and access to our knowledge base. Premium training packages are available separately.'
    },
    {
      question: 'Can we customize workflows and fields?',
      answer: 'Yes! Every module, form, field, and workflow in EnterpriseHero CRM is fully customizable. You can add custom fields, create automation rules, design custom reports, and even build entirely new modules. Our team will help you configure everything during implementation, and you\'ll have admin access to make changes anytime.'
    },
    {
      question: 'What happens after the demo period?',
      answer: 'Your demo instance is active for 14 days. During this time, you can explore all features, import sample data, and test workflows. After the demo, if you purchase a plan, we\'ll migrate your demo setup to your production environment. If you need more time to evaluate, we can extend the demo period — just let us know!'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    console.log('[CRM-Demo] FAQ toggled:', index);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      id="faq"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#002F9E]/20 rounded-full border border-[#FFD700]/40 mb-6">
              <HelpCircle className="h-4 w-4 text-[#002F9E] dark:text-[#FFD700]" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Common Questions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#00C897] bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="text-lg font-bold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-6 w-6 text-[#FFD700]" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2">
                        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
