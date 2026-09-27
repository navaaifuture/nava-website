"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Leaf, Users, Sparkles } from "lucide-react";
import { BRAND_DATA } from "@/lib/data";

export function Vision() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="vision" className="relative w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label: Machined 4px Solid Square in Emerald */}
        <div className="flex items-center gap-2 mb-4">
          <span className="size-1 rounded-xs bg-primary flex-shrink-0" />
          <span className="text-xs font-mono font-medium tracking-widest text-muted-foreground uppercase">
            CORE IDEA & VISION
          </span>
        </div>

        {/* Display Headline: Weight 300, lg:text-5xl, Line Height tight */}
        <div className="mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-foreground max-w-4xl">
            {BRAND_DATA.coreIdea} —{" "}
            <span className="text-muted-foreground font-light">
              {BRAND_DATA.vision}
            </span>
          </h2>
        </div>

        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Architectural Narrative & Focus Pills */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-6 font-normal">
              {BRAND_DATA.overview}
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
              {BRAND_DATA.statement}
            </p>

            {/* Triad Focus Cards (People · Planet · Progress) */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="rounded-2xl border border-border bg-card/60 p-4">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Users className="size-4" />
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-foreground">
                    People
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-snug">
                  World-class education & happier communities.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card/60 p-4">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Leaf className="size-4" />
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-foreground">
                    Planet
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-snug">
                  Preserving backwaters, forests & clean soil.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card/60 p-4">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Sparkles className="size-4" />
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-foreground">
                    Progress
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-snug">
                  Next-gen AI infrastructure & global leadership.
                </p>
              </div>
            </div>

            {/* Ghost Outlined Pill Button */}
            <div>
              <Link
                href="#pillars"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-card active:scale-[0.98]"
              >
                <span>Discover the 5 Strategic Pillars</span>
                <ArrowRight className="size-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Signature 80px Rounded Corner Image Porthole (md:rounded-cards) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:rounded-cards border border-border bg-card shadow-2xl"
            >
              <Image
                src="/images/kerala_agro_ai.jpg"
                alt="AI drone and telemetry biosensing network monitoring tea hills in Kerala"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Floating Environmental Telemetry Badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs rounded-2xl bg-card/90 backdrop-blur-xl border border-border p-3.5 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="size-2 rounded-full bg-primary animate-ping" />
                  <span className="text-xs font-mono tracking-wider text-primary uppercase font-medium">
                    LIVE FIELD TELEMETRY
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground gap-3">
                  <span>Munnar Zone-04</span>
                  <span className="text-foreground">Temp: 22.1°C</span>
                  <span className="text-primary font-medium">Soil H2O: 65%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
