"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Plus, Minus, CheckCircle2 } from "lucide-react";
import { FOCUS_PILLARS } from "@/lib/data";

export function PillarsAccordion() {
  // Default open the first pillar
  const [openId, setOpenId] = useState<string | null>("01");
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="pillars" className="relative w-full py-20 md:py-28 bg-background border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label: 4px solid square in emerald */}
        <div className="flex items-center gap-2 mb-4">
          <span className="size-1 rounded-xs bg-primary flex-shrink-0" />
          <span className="text-xs font-mono font-medium tracking-widest text-muted-foreground uppercase">
            STRATEGIC FOCUS PILLARS
          </span>
        </div>

        {/* Display Headline: Weight 300, lg:text-5xl */}
        <div className="mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-foreground max-w-3xl">
            Where Heritage & Technology{" "}
            <span className="italic font-light text-primary">Grow Together</span>
          </h2>
        </div>

        {/* Accordion Stack with Hairline Dividers matching DESIGN.md */}
        <div className="divide-y divide-border/60 border-y border-border/60">
          {FOCUS_PILLARS.map((pillar) => {
            const isOpen = openId === pillar.id;

            return (
              <div key={pillar.id} className="py-6 md:py-8 transition-colors">
                {/* Trigger Row */}
                <button
                  type="button"
                  onClick={() => toggleItem(pillar.id)}
                  className="w-full flex items-center justify-between text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl py-2 px-1"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-mono text-sm md:text-base text-primary/70 font-semibold tracking-wider">
                      {pillar.id}
                    </span>
                    <div>
                      <h3 className="text-lg md:text-2xl font-normal text-foreground group-hover:text-primary transition-colors duration-200">
                        {pillar.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1 hidden sm:block">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Circular 40px Icon Button (+ / −) matching DESIGN.md */}
                  <div className="size-10 rounded-full border border-border bg-card/80 flex items-center justify-center text-foreground group-hover:border-primary group-hover:text-primary transition-colors flex-shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="size-4 transition-transform duration-200" />
                    ) : (
                      <Plus className="size-4 transition-transform duration-200 group-hover:rotate-90" />
                    )}
                  </div>
                </button>

                {/* Animated Expandable Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`content-${pillar.id}`}
                      initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-2 pl-0 sm:pl-12 md:pl-16 pr-0 md:pr-12">
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mb-6">
                          {pillar.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                          {pillar.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 border border-border px-3.5 py-1.5 text-xs text-foreground font-mono"
                            >
                              <CheckCircle2 className="size-3 text-primary" />
                              {highlight}
                            </span>
                          ))}
                        </div>

                        <div className="inline-block rounded-xl bg-primary/10 border border-primary/20 px-3.5 py-1.5 text-xs font-mono text-primary font-medium mt-2">
                          Impact Target: {pillar.metrics}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
