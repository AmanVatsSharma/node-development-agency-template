import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do you optimize Google Shopping campaigns for e-commerce?",
      answer: "We optimize Google Shopping campaigns through comprehensive product feed optimization, advanced bidding strategies, audience targeting, and conversion tracking. Our approach includes feed quality improvements, negative keyword management, and mobile-first optimization to maximize visibility and conversions."
    },
    {
      question: "What's the typical ROAS improvement for e-commerce businesses?",
      answer: "Most e-commerce clients see 2-3× ROAS improvement within the first month, with full optimization reaching 6.8×+ ROAS within 3-6 months. Our average client achieves 6.8× ROAS, with some reaching 10×+ ROAS depending on their industry and product mix."
    },
    {
      question: "Do you work with all e-commerce platforms?",
      answer: "Yes, we work with all major e-commerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom platforms. We can integrate with any platform that supports Google Shopping feeds and conversion tracking."
    },
    {
      question: "How do you handle seasonal e-commerce campaigns?",
      answer: "We create seasonal campaign strategies with dynamic bidding adjustments, inventory-based optimizations, and holiday-specific audiences. This includes Black Friday, Diwali, Christmas, and other peak shopping periods with pre-planned budget allocation and performance monitoring."
    },
    {
      question: "What kind of reporting do you provide for e-commerce?",
      answer: "We provide comprehensive e-commerce reporting including product performance analysis, conversion tracking by device and audience, revenue attribution, shopping campaign insights, and custom dashboards. Reports include ROAS, conversion rates, cost-per-acquisition, and product-level performance metrics."
    },
    {
      question: "How do you optimize for mobile e-commerce?",
      answer: "We implement mobile-first strategies including mobile-optimized landing pages, mobile-specific ad formats, touch-friendly product displays, and mobile conversion tracking. Our approach ensures optimal performance across all devices with mobile-specific bidding and audience targeting."
    },
    {
      question: "Can you help with product feed management?",
      answer: "Absolutely. We provide complete product feed management including feed optimization, automated updates, quality monitoring, and troubleshooting. This includes product data enhancement, image optimization, and feed performance analysis to maximize Google Shopping visibility."
    },
    {
      question: "What's your experience with different e-commerce industries?",
      answer: "We have extensive experience across all e-commerce verticals including fashion, electronics, home & garden, beauty, sports, and B2B e-commerce. Our team understands industry-specific challenges and implements tailored strategies for each vertical."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            E-commerce Google Ads FAQ
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our e-commerce Google Ads optimization services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-orange-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our e-commerce team is here to answer any questions about our Google Ads optimization services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300">
                Schedule E-commerce Call
              </button>
              <button className="px-8 py-3 border border-orange-600 text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300">
                Download E-commerce Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}