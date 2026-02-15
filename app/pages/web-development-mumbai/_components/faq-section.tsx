'use client';

/**
 * FAQ Section Component - FREQUENTLY ASKED QUESTIONS
 * Premium FAQ section with professional design and animations
 * 
 * @version 2.0.0 - Production Ready FAQ
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { companyProfile } from '@/app/data/companyProfile';
import { Plus, Minus, HelpCircle, Clock, Shield, Users, Award } from 'lucide-react';

console.log('[Mumbai-Web-Development] FAQSection component loaded');
const CONTACT_EMAIL = companyProfile.contactEmail;

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
      answer: 'Our average delivery time is 14-21 days for most projects. Simple websites can be completed in 7-10 days, while complex e-commerce or custom applications may take 4-6 weeks. We provide detailed timelines during the consultation phase and keep you updated throughout the development process.',
      category: 'Timeline'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes! We offer 1-6 months of free support depending on your package. After that, we provide comprehensive maintenance plans starting from ₹2,999/month for updates, backups, security monitoring, and technical support. Our Mumbai-based team is always available to help.',
      category: 'Support'
    },
    {
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Absolutely! All our websites come with basic SEO setup including meta tags, sitemaps, and Google Analytics. We also offer advanced SEO services, Google Ads management, social media marketing, and content creation to help your Mumbai business grow online and attract more customers.',
      category: 'Marketing'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, MongoDB, PostgreSQL, and cloud platforms like AWS and Vercel. We choose the best tech stack based on your specific requirements, ensuring your website is fast, secure, and scalable for future growth.',
      category: 'Technology'
    },
    {
      question: 'Do you work with businesses outside Mumbai?',
      answer: 'Yes! While we\'re based in Mumbai and understand the local market well, we work with businesses across India. We offer remote consultations, project management, and support for clients nationwide. Our team is experienced in serving diverse markets and can adapt to different business requirements.',
      category: 'Service Area'
    },
    {
      question: 'What if I need changes after the website is live?',
      answer: 'We include minor changes and updates in our support period. For major updates or new features, we provide transparent pricing and quick turnaround times. Our goal is to help your business grow, so we\'re always here to assist with improvements and enhancements.',
      category: 'Updates'
    },
    {
      question: 'Do you provide mobile app development?',
      answer: 'Yes! We develop both responsive web applications that work like native apps and separate iOS and Android applications. We can create Progressive Web Apps (PWAs) that provide app-like experiences, or develop dedicated mobile apps for your business needs.',
      category: 'Mobile'
    },
    {
      question: 'What makes you different from other web development companies?',
      answer: 'We\'re Mumbai-based with deep local market understanding, offer transparent pricing with no hidden costs, provide 24/7 support, and have a 100% client satisfaction rate. Our focus is on delivering measurable results, not just websites. We understand Mumbai\'s business culture and can provide personalized solutions.',
      category: 'Why Choose Us'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const categoryColors = {
    'Timeline': 'from-blue-500 to-cyan-500',
    'Support': 'from-green-500 to-emerald-500',
    'Marketing': 'from-purple-500 to-pink-500',
    'Technology': 'from-orange-500 to-red-500',
    'Service Area': 'from-indigo-500 to-purple-500',
    'Updates': 'from-yellow-500 to-orange-500',
    'Mobile': 'from-teal-500 to-cyan-500',
    'Why Choose Us': 'from-slate-500 to-slate-600'
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20"
      id="faq"
      role="region"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about our web development services.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white dark:bg-slate-800 rounded-2xl mb-4 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${categoryColors[faq.category as keyof typeof categoryColors]} flex items-center justify-center flex-shrink-0`}>
                    <HelpCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 pr-4">
                      {faq.question}
                    </h3>
                    <div className="mt-1">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[faq.category as keyof typeof categoryColors]} text-white`}>
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-6 w-6 text-blue-600 dark:text-blue-400 transition-transform duration-200" />
                  ) : (
                    <Plus className="h-6 w-6 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-slate-200 dark:border-slate-700">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="mt-12 text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 sm:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our Mumbai team is here to help. Contact us directly for personalized answers to your specific questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919963730111"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Mumbai Expert
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}