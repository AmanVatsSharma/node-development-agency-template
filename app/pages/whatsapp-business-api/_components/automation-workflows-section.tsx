'use client';

/**
 * @fileoverview Automation Workflows Section
 * @description Interactive showcase of automation capabilities
 * @version 1.0.0
 */

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  ShoppingCart, 
  Calendar, 
  CreditCard,
  Bell,
  Repeat,
  Zap
} from 'lucide-react';

export function AutomationWorkflowsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  console.log('[AutomationWorkflowsSection] Rendering, inView:', inView);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const workflows = [
    {
      id: 0,
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Auto-Reply for FAQs',
      color: '#25D366',
      description: 'Instantly answer common questions 24/7',
      example: {
        user: 'What are your business hours?',
        bot: 'Hi! 👋 We're open Monday-Saturday, 9 AM - 7 PM. Our AI assistant is available 24/7 to help you!'
      },
      stats: '95% questions answered instantly'
    },
    {
      id: 1,
      icon: <Zap className="h-6 w-6" />,
      title: 'Instant Lead Response Bot',
      color: '#FF7A00',
      description: 'Never miss a lead — respond in seconds',
      example: {
        user: 'I want to know about your services',
        bot: 'Thanks for your interest! 🎉 I can help you with that. What industry is your business in? Reply: 1️⃣ E-commerce 2️⃣ Healthcare 3️⃣ Services 4️⃣ Other'
      },
      stats: '3× faster lead response time'
    },
    {
      id: 2,
      icon: <ShoppingCart className="h-6 w-6" />,
      title: 'Order Status & Delivery Updates',
      color: '#128C7E',
      description: 'Keep customers informed automatically',
      example: {
        user: 'Where is my order?',
        bot: 'Your order #5678 is out for delivery! 📦 Expected arrival: Today by 5 PM. Track here: [link]'
      },
      stats: '80% reduction in "where is my order" calls'
    },
    {
      id: 3,
      icon: <Calendar className="h-6 w-6" />,
      title: 'Appointment Booking',
      color: '#075E54',
      description: 'Let customers book appointments via chat',
      example: {
        user: 'I want to book an appointment',
        bot: 'Perfect! 📅 Available slots for tomorrow: 1️⃣ 10:00 AM 2️⃣ 2:00 PM 3️⃣ 4:30 PM. Reply with your choice!'
      },
      stats: '60% more appointments booked'
    },
    {
      id: 4,
      icon: <ShoppingCart className="h-6 w-6" />,
      title: 'Abandoned Cart Recovery',
      color: '#FFB100',
      description: 'Bring back lost sales automatically',
      example: {
        user: '',
        bot: 'Hi! You left 2 items in your cart. 🛒 Complete your order now and get 10% OFF with code SAVE10. [Shop Now]'
      },
      stats: '40% cart recovery rate'
    },
    {
      id: 5,
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Payment Collection',
      color: '#FF7A00',
      description: 'Collect payments via Razorpay links',
      example: {
        user: 'I want to pay',
        bot: 'Great! 💳 Your invoice total is ₹5,000. Pay securely here: [Razorpay Link]. We'll confirm once payment is received!'
      },
      stats: '70% faster payment collection'
    },
    {
      id: 6,
      icon: <Bell className="h-6 w-6" />,
      title: 'Internal Team Notifications',
      color: '#25D366',
      description: 'Alert your team instantly on WhatsApp',
      example: {
        user: '',
        bot: '🔔 New high-value lead from website! Name: John Doe, Budget: ₹50K+, Interested in: Enterprise Plan. [View Details]'
      },
      stats: '5× faster internal response'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      id="automation"
      role="region"
      aria-labelledby="automation-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF7A00]/10 rounded-full text-[#FF7A00] font-bold text-sm border border-[#FF7A00]/20">
                <Repeat className="h-4 w-4" />
                Automation Workflows
              </span>
            </div>
            <h2 
              id="automation-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 md:mb-6"
            >
              Smart WhatsApp Automation
              <br />
              <span className="bg-gradient-to-r from-[#FF7A00] to-[#FFB100] bg-clip-text text-transparent">
                That Feels Human
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Set it once, and let AI handle conversations while you focus on growth
            </p>
          </motion.div>

          {/* Interactive Workflow Showcase */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Workflow Tabs - Left Side */}
            <div className="lg:col-span-5 space-y-3">
              {workflows.map((workflow, index) => (
                <motion.button
                  key={workflow.id}
                  onClick={() => setActiveWorkflow(index)}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`w-full text-left p-4 md:p-5 rounded-xl transition-all ${
                    activeWorkflow === index
                      ? 'bg-white dark:bg-gray-800 shadow-xl border-2'
                      : 'bg-white/50 dark:bg-gray-800/50 border-2 border-transparent'
                  }`}
                  style={{
                    borderColor: activeWorkflow === index ? workflow.color : 'transparent'
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className="h-10 w-10 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                      style={{ backgroundColor: workflow.color }}
                    >
                      {workflow.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm md:text-base">
                        {workflow.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        {workflow.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Workflow Preview - Right Side */}
            <div className="lg:col-span-7">
              <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeWorkflow}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div 
                      className="p-6 text-white"
                      style={{ backgroundColor: workflows[activeWorkflow].color }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center">
                          {workflows[activeWorkflow].icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">
                            {workflows[activeWorkflow].title}
                          </h3>
                          <p className="text-sm opacity-90">
                            Live Example
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Chat Example */}
                    <div className="p-6 space-y-4 bg-[#ECE5DD] min-h-[300px]">
                      {/* User Message (if exists) */}
                      {workflows[activeWorkflow].example.user && (
                        <div className="flex justify-end">
                          <div className="bg-[#DCF8C6] rounded-lg px-4 py-3 max-w-[80%] shadow-sm">
                            <p className="text-sm text-gray-800">
                              {workflows[activeWorkflow].example.user}
                            </p>
                            <p className="text-[10px] text-gray-500 mt-1 text-right">
                              10:30 AM
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Bot Response */}
                      <div className="flex justify-start">
                        <div className="bg-white rounded-lg px-4 py-3 max-w-[85%] shadow-sm">
                          <p className="text-sm text-gray-800 whitespace-pre-line">
                            {workflows[activeWorkflow].example.bot}
                          </p>
                          <p className="text-[10px] text-gray-500 mt-1 text-right">
                            10:30 AM • Automated
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stats Footer */}
                    <div 
                      className="p-4 text-center text-white font-bold"
                      style={{ backgroundColor: workflows[activeWorkflow].color }}
                    >
                      📊 {workflows[activeWorkflow].stats}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUp} className="text-center mt-12 md:mt-16">
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl p-8 md:p-12 text-white">
              <p className="text-2xl md:text-3xl font-bold mb-4">
                ⚡ Want All These Workflows Automated?
              </p>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                We'll set up everything for you in 48 hours
              </p>
              <a 
                href="#lead-form"
                className="inline-block px-8 py-4 bg-white text-[#25D366] rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl active:scale-95"
              >
                Get Started Now
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

console.log('[WhatsApp-API] AutomationWorkflowsSection component loaded');
