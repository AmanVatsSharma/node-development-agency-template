'use client';

/**
 * FAQ Section
 * Address common questions and objections
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';

console.log('[ReactJS-Dev] FAQSection component loaded');

interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[ReactJS-Dev] FAQSection mounted');
    return () => console.log('[ReactJS-Dev] FAQSection unmounted');
  }, []);

  const faqs: FAQ[] = [
    {
      question: 'Why choose ReactJS over other frameworks?',
      answer: 'ReactJS offers the perfect balance of performance, flexibility, and ecosystem maturity. With its component-based architecture, virtual DOM, and backing by Meta (Facebook), React is ideal for building scalable, maintainable web applications. It\'s used by industry leaders like Netflix, Instagram, and Airbnb.'
    },
    {
      question: 'How long does it take to build a React web app?',
      answer: 'Timeline depends on complexity. A simple MVP can be ready in 3-4 weeks, a full-featured app in 8-12 weeks, and enterprise solutions in 3-6 months. We follow agile methodology with weekly sprints, so you see progress every 7 days.'
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Yes! All our packages include a bug warranty period (14-30 days depending on package). We also offer ongoing maintenance, feature updates, and dedicated support packages for long-term partnerships.'
    },
    {
      question: 'Can you integrate React with my existing backend?',
      answer: 'Absolutely! React works seamlessly with any backend — Node.js, Python, PHP, Java, .NET, or any REST/GraphQL API. We specialize in full-stack integrations and can work with your existing infrastructure or build a custom backend.'
    },
    {
      question: 'What\'s the difference between React and Next.js?',
      answer: 'React is a library for building user interfaces, while Next.js is a React framework that adds server-side rendering, routing, and performance optimizations. We use React for SPAs and Next.js when SEO and performance are critical. We\'ll recommend the best approach for your project.'
    },
    {
      question: 'Do you handle UI/UX design as well?',
      answer: 'Yes! We offer complete UI/UX design services. Our team can design from scratch or convert your Figma/Adobe XD designs into pixel-perfect React code. We focus on modern, intuitive interfaces that users love.'
    },
    {
      question: 'What about mobile apps? Can React work for that?',
      answer: 'Yes! We also build React Native apps for iOS and Android. With React Native, you get 90% code sharing between web and mobile, reducing development time and cost significantly.'
    },
    {
      question: 'How do you ensure code quality?',
      answer: 'We follow industry best practices: TypeScript for type safety, ESLint for code standards, React Testing Library for testing, code reviews, and comprehensive documentation. All code is written to be maintainable and scalable.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
      id="faq"
      role="region"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-[#61DAFB]/20 to-[#00C897]/20 rounded-full mb-4 sm:mb-5 border border-[#61DAFB] text-sm sm:text-base">
            <span className="font-bold text-[#61DAFB] dark:text-[#61DAFB] uppercase tracking-wide">
              ❓ Got Questions?
            </span>
          </div>

          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Everything you need to know about our React development services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#61DAFB] dark:hover:border-[#61DAFB] transition-all px-6 py-2"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-bold text-gray-900 dark:text-white hover:text-[#61DAFB] dark:hover:text-[#61DAFB] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
