'use client';

/**
 * Mobile Floating CTA
 * Always-visible contact buttons for mobile users
 */

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { fireConversion } from '@/utils/conversions';

console.log('[Next-JS-Dev] MobileFloatingCTA component loaded');

export function MobileFloatingCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex gap-3 sm:hidden">
      {/* Call Button */}
      <a
        href="tel:+919963730111"
        className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
        onClick={() => { console.log('[Next-JS-Dev] Mobile call clicked'); void fireConversion('nextjs_development_call_click'); }}
      >
        <Phone className="h-5 w-5" />
        <span className="text-sm">Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919963730111"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
        onClick={() => { console.log('[Next-JS-Dev] Mobile WhatsApp clicked'); void fireConversion('nextjs_development_whatsapp_click'); }}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm">WhatsApp</span>
      </a>
    </div>
  );
}
