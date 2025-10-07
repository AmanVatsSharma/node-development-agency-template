'use client';

/**
 * @fileoverview Add-Ons Section - Optional Premium Features
 * @description Expandable add-on features with pricing
 * @version 1.0.0
 */

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Settings, CreditCard, Package, Database, Zap, Plus } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

console.log('[Shopify-Product-Page] AddOnsSection component loaded');

const addOns = [
  {
    id: 'configurator',
    icon: Settings,
    title: 'Product Configurator',
    description: 'Advanced color/material/size logic with live preview',
    price: '₹8,000',
    features: [
      'Multi-attribute selection',
      'Real-time price updates',
      'Visual product previews',
      'Custom logic rules',
    ],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'subscription',
    icon: CreditCard,
    title: 'Custom Subscription Widget',
    description: 'Recurring purchase options with Shopify subscription APIs',
    price: '₹12,000',
    features: [
      'Subscribe & save options',
      'Flexible billing cycles',
      'Customer portal integration',
      'Discount automation',
    ],
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 'quantity-discounts',
    icon: Package,
    title: 'Quantity Discounts & Bundle Logic',
    description: 'Tiered pricing and bulk purchase incentives',
    price: '₹6,000',
    features: [
      'Volume-based discounts',
      'Bundle pricing rules',
      'Dynamic discount display',
      'Cart-level promotions',
    ],
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'inventory-sync',
    icon: Database,
    title: 'Live Inventory Sync',
    description: 'Real-time stock updates from backend systems',
    price: '₹10,000',
    features: [
      'Multi-location inventory',
      'Automatic stock alerts',
      'API integration setup',
      'Webhook configuration',
    ],
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'checkout-optimization',
    icon: Zap,
    title: 'Checkout Flow Optimization',
    description: 'Streamlined checkout process to reduce cart abandonment',
    price: '₹15,000',
    features: [
      'One-click checkout',
      'Express payment buttons',
      'Trust badges integration',
      'A/B tested flows',
    ],
    color: 'from-[#FFB400] to-orange-500',
  },
];

export function AddOnsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [expandedAddOn, setExpandedAddOn] = useState<string | null>(null);

  const toggleAddOn = (id: string) => {
    console.log(`[Shopify-Product-Page] Add-on ${id} toggled`);
    setExpandedAddOn(expandedAddOn === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      id="add-ons"
      className="py-16 md:py-24 bg-white dark:bg-gray-950"
      role="region"
      aria-labelledby="add-ons-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="add-ons-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gray-900 dark:text-white"
          >
            ⚡ Add-On <span className="text-[#FFB400]">Features</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Supercharge your product page with these optional premium features
          </p>
        </motion.div>

        {/* Add-Ons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {addOns.map((addOn, index) => (
            <motion.div
              key={addOn.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${addOn.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <addOn.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-1">
                      {addOn.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {addOn.description}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-gray-900 dark:text-white">
                    {addOn.price}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleAddOn(addOn.id)}
                    className="flex items-center gap-2"
                  >
                    <Plus className={`h-4 w-4 transition-transform ${expandedAddOn === addOn.id ? 'rotate-45' : ''}`} />
                    Details
                  </Button>
                </div>

                {/* Expandable Features */}
                <AnimatePresence>
                  {expandedAddOn === addOn.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t-2 border-gray-300 dark:border-gray-600">
                        <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                          What's Included:
                        </p>
                        <ul className="space-y-2">
                          {addOn.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                              <div className={`w-5 h-5 bg-gradient-to-br ${addOn.color} rounded flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <span className="text-white text-xs font-bold">✓</span>
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#0A2540] to-[#0A2540]/90 hover:from-[#0A2540]/90 hover:to-[#0A2540] text-white px-10 py-7 h-auto text-lg font-black rounded-2xl shadow-xl"
          >
            <a href="#lead-form">
              💬 Discuss Custom Requirements
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Shopify-Product-Page] AddOnsSection exported');
