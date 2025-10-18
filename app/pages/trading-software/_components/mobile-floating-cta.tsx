'use client';

/**
 * @fileoverview Mobile Floating CTA
 * @description Always-visible call and WhatsApp buttons for mobile
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';
import { fireConversion } from '@/utils/conversions';

export function MobileFloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    console.log('[Mobile-Floating-CTA] Component mounted');
    
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
        setExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCallClick = () => {
    console.log('[Mobile-Floating-CTA] Call button clicked');
    void fireConversion('trading_software_call_click');
  };

  const handleWhatsAppClick = () => {
    console.log('[Mobile-Floating-CTA] WhatsApp button clicked');
    void fireConversion('trading_software_whatsapp_click');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 right-4 z-50 md:hidden"
        >
          {!expanded ? (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setExpanded(true);
                console.log('[Mobile-Floating-CTA] Expanded');
              }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00FF88] to-[#00dd77] shadow-2xl flex items-center justify-center"
            >
              <Phone className="h-7 w-7 text-[#0A1628]" />
            </motion.button>
          ) : (
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border-2 border-white/20"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setExpanded(false);
                  console.log('[Mobile-Floating-CTA] Collapsed');
                }}
                className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center shadow-lg"
              >
                <X className="h-4 w-4 text-white" />
              </button>

              {/* Contact Options */}
              <div className="space-y-3">
                <a
                  href="tel:+919963730111"
                  onClick={handleCallClick}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl active:scale-95 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white/80">Call Now</div>
                    <div className="font-black text-sm text-white">+91 9963730111</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919963730111?text=Hi, I'm interested in trading software for brokers"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl active:scale-95 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white/80">WhatsApp</div>
                    <div className="font-black text-sm text-white">Chat Now</div>
                  </div>
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
