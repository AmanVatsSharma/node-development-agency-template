'use client';

/**
 * FAQ Section Component
 * Addresses common concerns of Indian businesses
 * Collapsible accordion format for better UX
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

console.log('[Business-Website] FAQSection component loaded');

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [openId, setOpenId] = useState<number | null>(1);

  useEffect(() => {
    console.log('[Business-Website] FAQSection mounted');
    return () => console.log('[Business-Website] FAQSection unmounted');
  }, []);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'What is included in the ₹9,999 starter package?',
      answer: 'The starter package includes a complete 8-12 page mobile-responsive website with contact forms, Google Maps integration, basic SEO, WhatsApp integration, 12 months free hosting, and 12 months free support. Perfect for small businesses looking to establish an online presence quickly and affordably.'
    },
    {
      id: 2,
      question: 'How long does it take to build a website?',
      answer: 'Typically 14-21 days from the day you provide all necessary content (text, images, logos). For the Professional package with CRM integration, it may take 21-30 days. Enterprise projects are estimated based on requirements. We pride ourselves on fast delivery without compromising quality.'
    },
    {
      id: 3,
      question: 'Do you provide hosting and domain services?',
      answer: 'All our packages include 12 months free hosting! We set up premium hosting for you and you own the domain directly. This ensures you have complete control. We can recommend reliable Indian hosting providers and help with the entire setup process at no extra cost.'
    },
    {
      id: 4,
      question: 'Can I update the website myself after it\'s built?',
      answer: 'Yes! For the Professional and Enterprise packages, we provide an easy-to-use admin panel where you can update content, images, and blog posts. We also provide training videos and documentation. For the Starter package, we offer affordable annual maintenance plans.'
    },
    {
      id: 5,
      question: 'Do you offer digital marketing services?',
      answer: 'Absolutely! We offer complete digital marketing services including SEO, Google Ads, social media marketing, and content creation starting from ₹4,999/month. We can help you get customers through your new website with proven marketing strategies tailored for Indian markets.'
    },
    {
      id: 6,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods including UPI, bank transfer, credit/debit cards, and Paytm. We typically take 50% advance to start work and 50% before going live. All payments are secure and we provide proper GST invoices.'
    },
    {
      id: 7,
      question: 'Do you provide support after the website is live?',
      answer: 'Yes! All packages include free support (1-6 months depending on package). After that, we offer affordable annual maintenance plans starting from ₹5,000/year covering updates, security, backups, and minor changes. We\'re always just a call away!'
    },
    {
      id: 8,
      question: 'Can you integrate payment gateways like Razorpay or Paytm?',
      answer: 'Yes, we can integrate any payment gateway including Razorpay, Paytm, PhonePe, Instamojo, and others. This is included in our Professional and Enterprise packages. We handle the complete technical setup so you can start accepting online payments immediately.'
    }
  ];

  const toggleFAQ = (id: number) => {
    console.log('[Business-Website] FAQ toggled:', id);
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white dark:bg-gray-900"
      id="faq"
      role="region"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full mb-3 sm:mb-4 border border-blue-200 dark:border-blue-800 text-xs sm:text-sm">
            <span className="font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
              Got Questions?
            </span>
          </div>

          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-gray-900 dark:text-white px-2"
          >
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-2">
            Everything you need to know
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="mb-3 sm:mb-4"
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left gap-3 sm:gap-4"
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white pr-2 sm:pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 transition-transform duration-300 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 md:px-6 lg:px-8 pb-4 sm:pb-5 md:pb-6 text-gray-700 dark:text-gray-300 leading-snug sm:leading-relaxed text-xs sm:text-sm md:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 sm:mt-10 md:mt-12 px-2"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
            Still have questions?
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 justify-center max-w-lg mx-auto">
            <a
              href="tel:+919963730111"
              className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-colors shadow-lg text-sm sm:text-base"
              onClick={() => console.log('[Business-Website] FAQ call CTA clicked')}
            >
              📞 Call: +91 9963730111
            </a>
            <a
              href="https://wa.me/919963730111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-colors shadow-lg text-sm sm:text-base"
              onClick={() => console.log('[Business-Website] FAQ WhatsApp CTA clicked')}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

