'use client';

/**
 * Lead Form Section - AI Voice Agents
 */

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';
import { Phone, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { fireConversion } from '@/utils/conversions';

interface FormData {
  name: string;
  businessName: string;
  phone: string;
  industry: string;
  callVolume: string;
  goal: string;
}

export function LeadFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    businessName: '',
    phone: '',
    industry: '',
    callVolume: '',
    goal: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: `Industry: ${formData.industry}, Call Volume: ${formData.callVolume}, Goal: ${formData.goal}`,
          source: 'ai-voice-agents',
          leadSource: 'Website - AI Voice Agents Landing',
          raw: {
            businessName: formData.businessName,
            industry: formData.industry,
            callVolume: formData.callVolume,
            goal: formData.goal,
            path: typeof window !== 'undefined' ? window.location.pathname : undefined,
          },
        }),
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Lead API failed');
      setSubmitted(true);
      console.log('[AI Voice Agents] Lead submit conversion fired');
      void fireConversion('ai_voice_agents_lead_submit');
    } catch (err) {
      console.error('Lead submit error:', err);
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        businessName: '',
        phone: '',
        industry: '',
        callVolume: '',
        goal: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const INDUSTRIES = [
    'Call Center / BPO',
    'Healthcare / Clinic',
    'Real Estate',
    'Finance / Loans',
    'Education',
    'Service Business',
    'Other'
  ];

  const CALL_VOLUMES = [
    '< 100 calls/month',
    '100-500 calls/month',
    '500-2000 calls/month',
    '2000-10000 calls/month',
    '> 10000 calls/month'
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950"
      id="lead-form"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24"
            >
              <div className="inline-block px-5 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-5 border border-green-200 dark:border-green-800">
                <span className="font-bold text-green-700 dark:text-green-300 uppercase tracking-wide text-sm">
                  Free Demo Call
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-5 text-gray-900 dark:text-white">
                Get Your AI Voice Agent Demo
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Schedule a <span className="font-bold text-[#FF7A00]">FREE demo call</span> and see AI Voice Agents in action!
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                {[
                  { icon: CheckCircle, text: 'Demo within 24 hours', color: 'text-green-600' },
                  { icon: CheckCircle, text: 'Custom use case analysis', color: 'text-blue-600' },
                  { icon: CheckCircle, text: 'ROI calculation', color: 'text-purple-600' },
                  { icon: CheckCircle, text: '100% confidential', color: 'text-indigo-600' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2.5">
                      <Icon className={`h-6 w-6 ${item.color} flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300 font-bold">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Quick Contact */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border-2 border-gray-200 dark:border-gray-800 shadow-xl">
                <p className="text-xs font-black text-gray-600 dark:text-gray-400 mb-3 uppercase">
                  Or Contact Directly
                </p>
                <div className="space-y-2.5">
                  <a 
                    href="tel:+919963730111"
                    onClick={() => { console.log('[AI Voice Agents] Call button clicked'); void fireConversion('ai_voice_agents_call_click'); }}
                    className="flex items-center gap-3 p-3.5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800 hover:border-green-400 active:scale-95 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-600 dark:text-gray-400">Call Now</div>
                      <div className="font-black text-sm text-gray-900 dark:text-white">+91 9963730111</div>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/919963730111"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => { console.log('[AI Voice Agents] WhatsApp button clicked'); void fireConversion('ai_voice_agents_whatsapp_click'); }}
                    className="flex items-center gap-3 p-3.5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800 hover:border-green-400 active:scale-95 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-600 dark:text-gray-400">WhatsApp</div>
                      <div className="font-black text-sm text-gray-900 dark:text-white">Chat Now</div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border-4 border-[#FF7A00]">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="name" className="text-gray-900 dark:text-white font-black mb-2 block">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="h-14 text-base border-2 rounded-xl"
                      />
                    </div>

                    <div>
                      <Label htmlFor="businessName" className="text-gray-900 dark:text-white font-black mb-2 block">
                        Business Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                        placeholder="Your company name"
                        className="h-14 text-base border-2 rounded-xl"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-900 dark:text-white font-black mb-2 block">
                        Phone <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 9963730111"
                        className="h-14 text-base border-2 rounded-xl"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="industry" className="text-gray-900 dark:text-white font-semibold mb-2 block">
                          Industry <span className="text-red-500">*</span>
                        </Label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange as any}
                          required
                          className="w-full h-12 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
                        >
                          <option value="">Select industry</option>
                          {INDUSTRIES.map(ind => (
                            <option key={ind} value={ind}>{ind}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="callVolume" className="text-gray-900 dark:text-white font-semibold mb-2 block">
                          Call Volume <span className="text-red-500">*</span>
                        </Label>
                        <select
                          id="callVolume"
                          name="callVolume"
                          value={formData.callVolume}
                          onChange={handleChange as any}
                          required
                          className="w-full h-12 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
                        >
                          <option value="">Select volume</option>
                          {CALL_VOLUMES.map(vol => (
                            <option key={vol} value={vol}>{vol}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="goal" className="text-gray-900 dark:text-white font-semibold mb-2 block">
                        Your Goal
                      </Label>
                      <Textarea
                        id="goal"
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        placeholder="What do you want to achieve with AI Voice Agents?"
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg h-16 bg-gradient-to-r from-[#0B1E39] to-[#FF7A00] hover:from-[#FF7A00] hover:to-[#ff9933] shadow-2xl font-black rounded-xl"
                      disabled={loading}
                    >
                      {loading ? 'Processing...' : (
                        <>
                          ☎️ Request Free Demo Call Now
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    <div className="flex items-center justify-center gap-3 text-xs text-gray-600 dark:text-gray-400 font-bold">
                      <span>✅ No Spam</span>
                      <span>🔒 Secure</span>
                      <span>⚡ 24-Hr Response</span>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-6 flex items-center justify-center">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      ✅ Thank You, {formData.name}!
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                      Your AI Voice Agent Demo is being scheduled within 24 hrs.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Check your phone for a call from +91 9963730111
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
