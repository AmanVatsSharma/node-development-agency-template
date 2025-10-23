'use client';

/**
 * FAQ Section Component - FREQUENTLY ASKED QUESTIONS
 * Addresses common concerns about web development services
 * 
 * @version 1.0.0 - FAQ Section
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

console.log('[Mumbai-Web-Development] FAQSection component loaded');

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    console.log('[Mumbai-Web-Development] FAQSection mounted');
    return () => console.log('[Mumbai-Web-Development] FAQSection unmounted');
  }, []);

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Our average delivery time is 14-21 days for most projects. Complex e-commerce or custom applications may take 4-6 weeks. We provide detailed timelines during the consultation phase.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes! We offer 1-6 months of free support depending on your package. After that, we provide maintenance plans starting from ₹2,999/month for updates, backups, and technical support.'
    },
    {
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Absolutely! All our websites come with basic SEO setup. We also offer advanced SEO services, Google Ads management, and social media marketing to help your Mumbai business grow online.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern technologies like React, Next.js, Node.js, MongoDB, PostgreSQL, and cloud platforms like AWS and Vercel. We choose the best tech stack based on your specific requirements.'
    },
    {
      question: 'Do you work with businesses outside Mumbai?',
      answer: 'Yes! While we\'re based in Mumbai and understand the local market well, we work with businesses across India. We offer remote consultations and project management for clients nationwide.'
    },
    {
      question: 'What if I need changes after the website is live?',
      answer: 'We include minor changes in our support period. For major updates or new features, we provide transparent pricing and quick turnaround times. We\'re always here to help your business grow.'
    },
    {
      question: 'Do you provide mobile app development?',
      answer: 'Yes! We develop both web applications and mobile apps. We can create responsive web apps that work like native apps or develop separate iOS and Android applications for your business.'
    },
    {
      question: 'What makes you different from other web development companies?',
      answer: 'We\'re Mumbai-based with deep local market understanding, offer transparent pricing with no hidden costs, provide 24/7 support, and have a 100% client satisfaction rate. Our focus is on delivering results, not just websites.'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900/50"
      id="faq"
      role="region"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about our web development services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg mb-4 shadow-md"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}