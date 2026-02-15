'use client';

/**
 * @fileoverview Lead Form Section - Trading Software
 * @description Primary conversion point with Google Ads tracking
 */

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';
import { Phone, MessageCircle, ArrowRight, CheckCircle, Mail } from 'lucide-react';
import { fireConversion } from '@/utils/conversions';
import { companyProfile } from '@/app/data/companyProfile';

const CONTACT_EMAIL = companyProfile.contactEmail;

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  tradingVolume: string;
  message: string;
}

export function LeadFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    tradingVolume: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log('[Lead-Form] Component rendered, formData:', formData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log('[Lead-Form] Form submission started');
    
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Company: ${formData.company}, Trading Volume: ${formData.tradingVolume}, Requirements: ${formData.message}`,
          source: 'trading-software',
          leadSource: 'Website - Trading Software Landing',
          raw: {
            company: formData.company,
            tradingVolume: formData.tradingVolume,
            requirements: formData.message,
            path: typeof window !== 'undefined' ? window.location.pathname : undefined,
          },
        }),
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Lead API failed');
      
      setSubmitted(true);
      console.log('[Trading-Software] Lead submitted successfully');
      
      // Fire conversion tracking
      console.log('[Trading-Software] Firing conversion: trading_software_lead_submit');
      await fireConversion('trading_software_lead_submit');
      
    } catch (err) {
      console.error('[Lead-Form] Submit error:', err);
      alert('Something went wrong. Please try again or call us directly at +91 9963730111');
    } finally {
      setLoading(false);
    }
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        tradingVolume: '',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const TRADING_VOLUMES = [
    '< ₹10 Cr/month',
    '₹10-50 Cr/month',
    '₹50-100 Cr/month',
    '₹100-500 Cr/month',
    '₹500-1000 Cr/month',
    '> ₹1000 Cr/month'
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-[#0d1b2e] via-[#0A1628] to-[#0d1b2e] relative overflow-hidden"
      id="lead-form"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,255,136,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,215,0,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24"
            >
              <div className="inline-block px-5 py-2 bg-gradient-to-r from-[#00FF88]/20 to-[#FFD700]/20 rounded-full mb-5 border border-[#00FF88]/30">
                <span className="font-bold text-[#00FF88] uppercase tracking-wide text-sm">
                  Get Started Today
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-5 text-white">
                Request Your Free Demo & Custom Quote
              </h2>

              <p className="text-lg text-gray-300 mb-6">
                Schedule a <span className="font-bold text-[#00FF88]">FREE personalized demo</span> and get a custom pricing proposal tailored to your brokerage.
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                {[
                  { icon: CheckCircle, text: 'Live demo within 24 hours', color: 'text-[#00FF88]' },
                  { icon: CheckCircle, text: 'Custom pricing proposal', color: 'text-blue-400' },
                  { icon: CheckCircle, text: 'No obligation consultation', color: 'text-purple-400' },
                  { icon: CheckCircle, text: 'Technical Q&A session', color: 'text-yellow-400' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2.5">
                      <Icon className={`h-6 w-6 ${item.color} flex-shrink-0`} />
                      <span className="text-gray-300 font-semibold">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Direct Contact Options */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border-2 border-white/10 shadow-xl">
                <p className="text-xs font-black text-gray-400 mb-4 uppercase">
                  Or Contact Us Directly
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+919963730111"
                    onClick={() => { 
                      console.log('[Trading-Software] Call button clicked'); 
                      void fireConversion('trading_software_call_click'); 
                    }}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border-2 border-green-500/30 hover:border-green-500/60 active:scale-95 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400">Call Now</div>
                      <div className="font-black text-base text-white">+91 9963730111</div>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/919963730111?text=Hi, I'm interested in trading software for brokers"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => { 
                      console.log('[Trading-Software] WhatsApp button clicked'); 
                      void fireConversion('trading_software_whatsapp_click'); 
                    }}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border-2 border-green-500/30 hover:border-green-500/60 active:scale-95 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400">WhatsApp</div>
                      <div className="font-black text-base text-white">Chat Now</div>
                    </div>
                  </a>

                  <a 
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border-2 border-blue-500/30 hover:border-blue-500/60 active:scale-95 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400">Email</div>
                      <div className="font-black text-sm text-white">{CONTACT_EMAIL}</div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE - FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-[#00FF88]">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="name" className="text-white font-black mb-2 block">
                        Full Name <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="h-14 text-base border-2 rounded-xl bg-white/10 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white font-black mb-2 block">
                        Email Address <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="h-14 text-base border-2 rounded-xl bg-white/10 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-white font-black mb-2 block">
                        Phone Number <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 9963730111"
                        className="h-14 text-base border-2 rounded-xl bg-white/10 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-white font-black mb-2 block">
                        Brokerage / Company Name <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Your brokerage name"
                        className="h-14 text-base border-2 rounded-xl bg-white/10 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="tradingVolume" className="text-white font-semibold mb-2 block">
                        Current Monthly Trading Volume <span className="text-red-400">*</span>
                      </Label>
                      <select
                        id="tradingVolume"
                        name="tradingVolume"
                        value={formData.tradingVolume}
                        onChange={handleChange as any}
                        required
                        className="w-full h-14 rounded-xl border-2 border-white/20 bg-white/10 text-white px-4 py-2 text-base focus:border-[#00FF88] outline-none"
                      >
                        <option value="" className="bg-[#0A1628]">Select volume range</option>
                        {TRADING_VOLUMES.map(vol => (
                          <option key={vol} value={vol} className="bg-[#0A1628]">{vol}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white font-semibold mb-2 block">
                        Requirements / Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements, number of clients, features needed, etc."
                        rows={4}
                        className="border-2 rounded-xl bg-white/10 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg h-16 bg-gradient-to-r from-[#00FF88] to-[#00dd77] hover:from-[#00dd77] hover:to-[#00FF88] text-[#0A1628] shadow-2xl font-black rounded-xl border-2 border-[#00FF88]"
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : (
                        <>
                          📊 Request Demo & Pricing
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    <div className="flex items-center justify-center gap-3 text-xs text-gray-400 font-bold">
                      <span>✅ No Spam</span>
                      <span>🔒 100% Secure</span>
                      <span>⚡ 24-Hr Response</span>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00FF88] to-[#00dd77] mx-auto mb-6 flex items-center justify-center">
                      <CheckCircle className="h-12 w-12 text-[#0A1628]" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">
                      ✅ Thank You, {formData.name}!
                    </h3>
                    <p className="text-lg text-gray-300 mb-6">
                      Your demo request has been received. Our team will contact you within 24 hours.
                    </p>
                    <p className="text-sm text-gray-400">
                      Check your email ({formData.email}) for confirmation and next steps.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
