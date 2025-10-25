import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What does landing page optimization include?",
      answer: "Our landing page optimization includes comprehensive analysis, design improvements, mobile optimization, speed optimization, A/B testing, conversion rate optimization, and ongoing performance monitoring with detailed reporting."
    },
    {
      question: "How long does the optimization process take?",
      answer: "The optimization process typically takes 2-4 weeks for basic optimization, 4-6 weeks for professional optimization, and 6-8 weeks for enterprise optimization. This includes analysis, design, development, testing, and launch."
    },
    {
      question: "What's the typical conversion rate improvement?",
      answer: "Most clients see 2-3× conversion rate improvement within the first month, with full optimization reaching 3.5×+ conversion rate within 2-3 months. Our average client achieves 3.5× conversion rate, with some reaching 5×+ conversion rate."
    },
    {
      question: "Do you provide A/B testing?",
      answer: "Yes, we provide comprehensive A/B testing including test setup, hypothesis development, test execution, data analysis, and implementation of winning variations. This is included in our professional and enterprise plans."
    },
    {
      question: "What kind of reporting do you provide?",
      answer: "We provide comprehensive landing page reporting including conversion tracking, user behavior analysis, performance metrics, A/B test results, and ROI measurement. Reports include detailed insights and actionable recommendations."
    },
    {
      question: "Can you optimize existing landing pages?",
      answer: "Yes, we can optimize existing landing pages including design improvements, conversion optimization, mobile optimization, and performance enhancements. We also create new landing pages from scratch if needed."
    },
    {
      question: "Do you offer ongoing optimization support?",
      answer: "Yes, we offer ongoing optimization support including monthly performance reviews, continuous testing, and strategic adjustments. This is available as an add-on service or included in our enterprise plans."
    },
    {
      question: "What's your experience with different industries?",
      answer: "We have extensive experience across all industries including e-commerce, B2B, healthcare, finance, technology, and professional services. Our team understands industry-specific challenges and provides tailored optimization strategies."
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
            Landing Page Optimization FAQ
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our landing page optimization services.
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
                    <Minus className="w-6 h-6 text-yellow-600" />
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
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our landing page team is here to answer any questions about our optimization services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-xl font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300">
                Schedule Landing Page Call
              </button>
              <button className="px-8 py-3 border border-yellow-600 text-yellow-600 rounded-xl font-semibold hover:bg-yellow-50 transition-all duration-300">
                Download Landing Page Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}