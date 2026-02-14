'use client'
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/app/components/ui/button";
import { Spotlight } from "@/app/components/ui/spotlight";
import { Check, ArrowRight } from "lucide-react";

type Tier = {
  name: string;
  price: string;
  period: string;
  highlight?: boolean;
  features: string[];
  cta: string;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$1,499",
    period: "one-time",
    features: [
      "Custom landing page (Next.js)",
      "Basic SEO setup",
      "Analytics (GA4) setup",
      "1 round of revisions",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$3,999",
    period: "project",
    highlight: true,
    features: [
      "Multi-page site + blog",
      "Advanced SEO + schema",
      "Conversion tracking + dashboards",
      "Ad-campaign landing pages",
      "3 rounds of revisions",
    ],
    cta: "Book Strategy Call",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    features: [
      "Custom apps & integrations",
      "SLA, security & compliance",
      "Marketing ops + automation",
      "Performance SLOs & audits",
      "Dedicated PM & roadmap",
    ],
    cta: "Request Proposal",
  },
];

export function PricingSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    console.log('[Web-Development] PricingSection mounted');
    return () => console.log('[Web-Development] PricingSection unmounted');
  }, []);

  return (
    <section id="pricing" className="py-20 relative overflow-hidden" role="region" aria-labelledby="wd-pricing-heading">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12" ref={ref}>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 text-sm font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full mb-4"
          >
            Pricing
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-3xl md:text-5xl font-bold mb-4"
            id="wd-pricing-heading"
          >
            Hire Website Developer Pricing & Packages
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Start small or scale fast—each tier is designed to maximize ROI and conversions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <Spotlight className="p-0.5 rounded-2xl">
                <div
                  className={
                    "rounded-[calc(1rem-2px)] border border-border/40 bg-background/80 backdrop-blur-sm p-6 h-full flex flex-col" +
                    (tier.highlight ? " shadow-lg ring-1 ring-indigo-500/30" : "")
                  }
                >
                  <div className="mb-2 text-sm font-medium opacity-70">{tier.name}</div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <div className="text-3xl font-bold">{tier.price}</div>
                    <div className="text-sm text-muted-foreground">/{tier.period}</div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                          <Check className="h-3.5 w-3.5 text-green-600" />
                        </span>
                        <span className="text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Button size="lg" className={tier.highlight ? "w-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" : "w-full rounded-full"}>
                      <span>{tier.cta}</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Spotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;


