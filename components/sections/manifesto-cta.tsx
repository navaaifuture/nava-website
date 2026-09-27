"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Compass } from "lucide-react";
import { MANIFESTO_POINTS } from "@/lib/data";

export function ManifestoCta() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="ecopolis" className="relative w-full py-20 md:py-28 bg-background border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label: 4px Solid Square in Emerald */}
        <div className="flex items-center gap-2 mb-4">
          <span className="size-1 rounded-xs bg-primary flex-shrink-0" />
          <span className="text-xs font-mono font-medium tracking-widest text-muted-foreground uppercase">
            THE NAVA COMMITMENT
          </span>
        </div>

        {/* Display Headline: Weight 300, lg:text-5xl */}
        <div className="mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-foreground max-w-4xl">
            Rooted in Kerala.{" "}
            <span className="italic font-light text-primary">Built for the World.</span>
          </h2>
        </div>

        {/* 3 Core Commitments Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {MANIFESTO_POINTS.map((point, index) => (
            <motion.div
              key={point.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-border bg-card/60 p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-primary font-semibold tracking-wider block mb-3">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unified Callout Specification Card */}
        <div className="rounded-2xl border border-border bg-card/80 p-8 sm:p-12 text-center flex flex-col items-center max-w-4xl mx-auto shadow-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-3.5 py-1 text-xs font-mono text-primary mb-6">
            <Compass className="size-3.5" />
            <span>Co-Creating Future Kerala</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground tracking-tight leading-tight max-w-2xl mb-4">
            Join the coalition of thinkers, technologists, and guardians of Kerala’s land.
          </h3>

          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Whether you are a researcher, innovator, policy maker, or citizen — NAVA AI invites you to shape an intelligent, greener tomorrow.
          </p>

          {/* Matched Pair of Pill Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="mailto:contact@nava.ai"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
            >
              <span>Partner with NAVA AI</span>
              <ArrowUpRight className="size-4" />
            </Link>

            <Link
              href="#vision"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-secondary hover:border-muted-foreground/30 active:scale-[0.98]"
            >
              Read Full Charter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
