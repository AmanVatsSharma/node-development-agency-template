'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/app/components/ui/button";
import { Spotlight } from "@/app/components/ui/spotlight";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-background to-background"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm text-center font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full mb-4">
              Get In Touch
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Let's Build Something <span className="text-gradient">Amazing</span> Together
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Ready to transform your digital presence? Reach out to us and let's discuss how we can help you achieve your goals.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Spotlight className="rounded-2xl bg-background border border-border/50 p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <Button
                    type="submit"
                    variant="default" 
                    className="w-full py-6 rounded-lg flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                  >
                    Send Message
                    <Send size={16} />
                  </Button>
                </div>
              </form>
            </Spotlight>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-between"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out to us through any of the following channels. We're here to answer your questions and discuss your project needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 text-purple-500 p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-muted-foreground">contact@vedpragya.com</p>
                    <p className="text-muted-foreground">support@vedpragya.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/10 text-blue-500 p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-muted-foreground">+91 9963730111</p>
                    <p className="text-muted-foreground">Mon-Sat, 9am-8pm IST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-500/10 text-green-500 p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">Global Headquarters</h4>
                    <p className="text-muted-foreground">
                      Vedpragya Bharat Pvt Ltd<br />
                      DLF Cyber City, Gurugram<br />
                      Haryana, India 122002
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map or Additional Content */}
            <div className="mt-auto">
              <div className="rounded-lg overflow-hidden border border-border/50 h-[200px] bg-zinc-100 dark:bg-zinc-800 relative">
                {/* Simple stylized map representation */}
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-30 dark:opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center">
                      <p className="font-semibold text-foreground">Global Presence</p>
                      <div className="flex gap-2 justify-center mt-2">
                         <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                         <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                         <span className="w-2 h-2 rounded-full bg-green-500"></span>
                         <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                         <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">India • Dubai • USA • Canada • China</p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 