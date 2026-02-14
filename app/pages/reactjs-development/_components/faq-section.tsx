'use client';

/**
 * FAQ Section - PREMIUM ACCORDION VERSION
 * Beautiful animated accordion with search
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Sparkles, Search, Plus, Minus } from 'lucide-react';

console.log('[ReactJS-Dev] FAQSection component loaded');

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log('[ReactJS-Dev] FAQSection mounted');
    return () => console.log('[ReactJS-Dev] FAQSection unmounted');
  }, []);

  const faqs: FAQ[] = [
    {
      question: 'Why choose ReactJS over other frameworks?',
      answer: 'ReactJS offers the perfect balance of performance, flexibility, and ecosystem maturity. With its component-based architecture, virtual DOM for optimal performance, and backing by Meta (Facebook), React is ideal for building scalable, maintainable web applications. It\'s battle-tested by industry leaders like Netflix, Instagram, and Airbnb, ensuring reliability and long-term support.',
      category: 'General'
    },
    {
      question: 'How long does it take to build a React web app?',
      answer: 'Timeline varies based on complexity: Simple MVP: 3-4 weeks, Full-featured app: 8-12 weeks, Enterprise solution: 3-6 months. We follow agile methodology with weekly sprints, so you see tangible progress every 7 days. This allows for flexibility and ensures you\'re always in the loop.',
      category: 'Timeline'
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Absolutely! All our packages include bug warranty periods (14-90 days depending on package). We also offer ongoing maintenance packages, feature updates, and dedicated support for long-term partnerships. Your success is our success, and we\'re here for the long haul.',
      category: 'Support'
    },
    {
      question: 'Can you integrate React with my existing backend?',
      answer: 'Yes! React works seamlessly with any backend technology — Node.js, Python, PHP, Java, .NET, Ruby, or any REST/GraphQL API. We specialize in full-stack integrations and can work with your existing infrastructure or build a custom backend from scratch using modern technologies.',
      category: 'Technical'
    },
    {
      question: 'What\'s the difference between React and Next.js?',
      answer: 'React is a library for building user interfaces, while Next.js is a React framework that adds powerful features like server-side rendering (SSR), static site generation (SSG), and built-in routing. We use React for single-page applications and Next.js when SEO, performance, and scalability are critical. We\'ll recommend the best approach for your specific needs.',
      category: 'Technical'
    },
    {
      question: 'Do you handle UI/UX design as well?',
      answer: 'Yes! We offer complete end-to-end services including UI/UX design. Our design team can create beautiful, intuitive interfaces from scratch or convert your existing Figma/Adobe XD designs into pixel-perfect React code. We focus on modern, user-friendly designs that your users will love.',
      category: 'Design'
    },
    {
      question: 'What about mobile apps? Can React work for that?',
      answer: 'Definitely! We also build React Native apps for iOS and Android. With React Native, you get 90% code sharing between web and mobile, which significantly reduces development time and cost. It\'s a great option if you need both web and mobile apps.',
      category: 'Technical'
    },
    {
      question: 'How do you ensure code quality?',
      answer: 'We follow industry best practices: TypeScript for type safety, ESLint for code standards, React Testing Library & Jest for testing, comprehensive code reviews, Git version control, and detailed documentation. All code is written to be maintainable, scalable, and follows SOLID principles.',
      category: 'Quality'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-32 lg:py-40 bg-white dark:bg-[#0A0A0A] overflow-hidden"
      id="faq"
      role="region"
      aria-labelledby="faq-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30m-20 0a20 20 0 1 0 40 0a20 20 0 1 0 -40 0' stroke='%2361DAFB' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#61DAFB]/10 to-[#00C897]/10 backdrop-blur-xl rounded-full mb-6 sm:mb-8 border border-[#61DAFB]/30 shadow-lg"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#61DAFB]" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#61DAFB] to-[#00C897] bg-clip-text text-transparent uppercase tracking-wider">
              Got Questions?
            </span>
          </motion.div>

          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Frequently Asked Questions About
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] bg-clip-text text-transparent">
              Hire React.js Developer
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Everything you need to know about our React development services
          </motion.p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-14 sm:h-16 pl-14 pr-6 text-base sm:text-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border-2 border-gray-300/50 dark:border-gray-700/50 rounded-2xl focus:border-[#61DAFB] dark:focus:border-[#61DAFB] focus:ring-4 focus:ring-[#61DAFB]/20 transition-all"
            />
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-[#61DAFB]/50 dark:hover:border-[#61DAFB]/50 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-[#61DAFB] group-hover:to-[#00C897] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          {faq.question}
                        </h3>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-4 pr-8">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Toggle Icon */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#61DAFB]/10 to-[#00C897]/10 flex items-center justify-center border-2 border-[#61DAFB]/30"
                      >
                        {isOpen ? (
                          <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-[#61DAFB]" />
                        ) : (
                          <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#61DAFB]" />
                        )}
                      </motion.div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg text-gray-500 dark:text-gray-500">
                No questions found. Try a different search term.
              </p>
            </motion.div>
          )}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 sm:p-10 bg-gradient-to-br from-[#61DAFB]/5 via-[#00C897]/5 to-[#61DAFB]/5 backdrop-blur-xl rounded-3xl border border-[#61DAFB]/20 max-w-2xl">
            <p className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
              Still have questions?
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">
              We're here to help! Get in touch with our React experts.
            </p>
            <motion.a
              href="#lead-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#61DAFB] to-[#00C897] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              Ask Your Question
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
