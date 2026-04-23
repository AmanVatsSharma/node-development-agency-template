'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FinalCtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-indigo-600 dark:bg-indigo-700">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-5 leading-tight">
            Your SaaS deserves a website<br />that works as hard as you do.
          </h2>
          <p className="text-indigo-200 text-base sm:text-lg mb-10 max-w-xl mx-auto">
            Join 40+ SaaS teams who ship with Vedpragya. Free consultation, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-8 py-6 text-base rounded-xl shadow-lg"
            >
              <a href="#lead-form">
                Start your project <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-xl"
            >
              <a href="/pages/portfolio">View portfolio</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
