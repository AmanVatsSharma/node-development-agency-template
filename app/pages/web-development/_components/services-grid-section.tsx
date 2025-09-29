'use client'
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/app/components/ui/button";
import { Spotlight } from "@/app/components/ui/spotlight";
import { cn } from "@/app/lib/cn";
import {
  Code,
  Search,
  Megaphone,
  BarChart3,
  Palette,
  Workflow,
  Users,
  ArrowRight,
} from "lucide-react";

// Services data tailored to the user's requested offerings
const services = [
  {
    icon: Code,
    title: "Web Development",
    blurb: "Next.js websites, custom apps, blazing performance.",
    accent: "from-blue-600 to-indigo-600",
    href: "/pages/services#web-development",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    blurb: "Technical SEO, Core Web Vitals, content strategy.",
    accent: "from-emerald-600 to-teal-600",
    href: "/pages/services#seo",
  },
  {
    icon: Megaphone,
    title: "Marketing Campaigns",
    blurb: "Google, Meta, LinkedIn Ads with conversion tracking.",
    accent: "from-purple-600 to-pink-600",
    href: "/pages/services#marketing",
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    blurb: "GA4, Tag Manager, dashboards, performance KPIs.",
    accent: "from-indigo-600 to-sky-600",
    href: "/pages/services#analytics",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    blurb: "Identity systems, design systems, UI kits.",
    accent: "from-amber-600 to-orange-600",
    href: "/pages/services#branding",
  },
  {
    icon: Workflow,
    title: "Automation & Integrations",
    blurb: "APIs, CRM, webhooks, workflows that scale.",
    accent: "from-cyan-600 to-blue-600",
    href: "/pages/services#automation",
  },
  {
    icon: Users,
    title: "Consulting & Strategy",
    blurb: "Roadmaps, audits, GTM and growth strategy.",
    accent: "from-rose-600 to-red-600",
    href: "/pages/services#consulting",
  },
];

export function ServicesGridSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    console.log('[Web-Development] ServicesGridSection mounted');
    return () => console.log('[Web-Development] ServicesGridSection unmounted');
  }, []);

  return (
    <section id="services" className="py-20 relative overflow-hidden" role="region" aria-labelledby="wd-services-grid-heading">
      {/* Decorative background grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12" ref={ref}>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4"
          >
            Full-Service Digital Agency
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-3xl md:text-5xl font-bold mb-4"
            id="wd-services-grid-heading"
          >
            Services Engineered for Conversion
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Show more, say less. Icon-led service cards compress information while keeping premium clarity and fast scanning on mobile.
          </motion.p>
        </div>

        {/* Services grid with staggered animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {(services || []).map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Spotlight className="p-0.5 rounded-2xl">
                <div className="rounded-[calc(1rem-2px)] border border-border/40 bg-background/80 backdrop-blur-sm p-6 h-full">
                  <div className={cn("w-12 h-12 rounded-xl text-white flex items-center justify-center mb-4 bg-gradient-to-r", s.accent)}>
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{s.blurb}</p>
                  <Button variant="ghost" className="px-0 text-primary hover:text-primary/80" asChild>
                    <a href={s.href} aria-label={`Learn more about ${s.title}`}>
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Spotlight>
            </motion.div>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="mt-14 text-center">
          <Button size="lg" className="rounded-full group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
            <span>Get a Free Quote</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ServicesGridSection;


