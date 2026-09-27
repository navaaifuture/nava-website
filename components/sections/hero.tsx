"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Activity, MapPin } from "lucide-react";
import { HERO_CASE_STUDY } from "@/lib/data";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-end bg-background">
      {/* Full-Bleed High-Resolution Vision Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/kerala_ai_greencity.jpg"
          alt="Future Kerala Eco-Polis with sustainable AI infrastructure and autonomous transit"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-100 transition-transform duration-1000"
        />
        {/* Flat Tonal Scrim for Precise Architectural Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/30 to-transparent" />
      </div>

      {/* Floating Case Study Overlay Card (Top/Mid-Right per DESIGN.md) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-36 flex justify-end">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full sm:w-auto max-w-sm rounded-md bg-card/90 backdrop-blur-xl border border-border p-4 shadow-2xl"
        >
          <div className="flex items-center justify-between gap-4 mb-2 pb-2 border-b border-border/60">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-primary uppercase font-medium">
                {HERO_CASE_STUDY.badge}
              </span>
            </div>
            <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
              <MapPin className="size-3 text-primary" />
              Kochi · Alappuzha
            </span>
          </div>

          <h3 className="text-sm font-medium text-foreground leading-snug mb-1">
            {HERO_CASE_STUDY.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            {HERO_CASE_STUDY.description}
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5 text-primary">
              <Activity className="size-3.5" />
              {HERO_CASE_STUDY.metrics}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom-Left Content Container (Directly matching DESIGN.md) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 pt-12">
        <div className="max-w-3xl">
          {/* Section Indicator: 4px solid square + uppercase label */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="size-1 rounded-xs bg-primary flex-shrink-0" />
            <span className="text-xs font-mono font-medium tracking-widest text-muted-foreground uppercase">
              NAVA AI · KERALA
            </span>
          </motion.div>

          {/* Display Headline: Weight 300, 52px (lg:text-5xl), Line Height tight */}
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-5xl font-light leading-tight tracking-tight text-foreground mb-4"
          >
            Intelligence for a{" "}
            <span className="font-light italic text-primary">Better Tomorrow</span>
          </motion.h1>

          {/* Subtext: Concise, max 20 words per DESIGN.md */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[58ch] mb-8 font-normal"
          >
            Building a smarter, greener and more human future for Kerala through ethical Artificial
            Intelligence, sustainable infrastructure and heritage preservation.
          </motion.p>

          {/* Action Triggers: Full Pill Button Pair */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            {/* Filled Primary Pill Button */}
            <Link
              href="#pillars"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
            >
              <span>Explore Strategic Pillars</span>
              <ArrowUpRight className="size-4" />
            </Link>

            {/* Ghost Outlined Pill Button */}
            <Link
              href="#vision"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-all duration-200 hover:bg-card hover:border-muted-foreground/30 active:scale-[0.98]"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
