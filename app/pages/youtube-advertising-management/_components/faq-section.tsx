import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of YouTube ads do you create?",
      answer: "We create all types of YouTube ads including TrueView in-stream ads, TrueView discovery ads, Bumper ads, and Display ads. Our team specializes in creating engaging video content that drives conversions and builds brand awareness."
    },
    {
      question: "What's the typical ROAS for YouTube advertising?",
      answer: "Most YouTube clients see 2-3× ROAS improvement within the first month, with full optimization reaching 6.2×+ ROAS within 4-6 months. Our average client achieves 6.2× ROAS, with some reaching 8×+ ROAS depending on their industry and video content quality."
    },
    {
      question: "Do you help with video production?",
      answer: "Yes, we provide video production support including script writing, video editing, and creative direction. Our team works with professional video producers to create high-quality ads that align with your brand and marketing goals."
    },
    {
      question: "How do you target YouTube audiences effectively?",
      answer: "We use advanced YouTube targeting including demographics, interests, keywords, placements, and behavioral data. Our approach includes custom audience creation, lookalike audiences, and remarketing strategies for maximum reach and engagement."
    },
    {
      question: "What kind of reporting do you provide for YouTube ads?",
      answer: "We provide comprehensive YouTube reporting including view rates, click-through rates, conversion tracking, audience insights, and performance analytics. Reports include detailed insights on video performance, audience engagement, and ROI metrics."
    },
    {
      question: "How do you optimize YouTube ad performance?",
      answer: "We optimize YouTube ads through continuous testing of creative elements, targeting parameters, bidding strategies, and ad formats. Our approach includes A/B testing, audience refinement, and performance monitoring for maximum results."
    },
    {
      question: "Can you help with YouTube channel growth?",
      answer: "Absolutely. We provide YouTube channel growth strategies including content planning, SEO optimization, audience development, and engagement tactics. Our approach helps build a loyal subscriber base and increase organic reach."
    },
    {
      question: "What's your experience with different YouTube industries?",
      answer: "We have extensive experience across all YouTube verticals including education, entertainment, fashion, beauty, fitness, technology, and business. Our team understands industry-specific challenges and implements tailored strategies for each vertical."
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
            Frequently Asked Questions About Hire YouTube Ads Expert
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our YouTube advertising services.
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
                    <Minus className="w-6 h-6 text-red-600" />
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
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our YouTube team is here to answer any questions about our advertising services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300">
                Schedule YouTube Call
              </button>
              <button className="px-8 py-3 border border-red-600 text-red-600 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300">
                Download YouTube Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}