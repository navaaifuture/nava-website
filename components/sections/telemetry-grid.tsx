"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Zap, Radio, Globe, ShieldCheck } from "lucide-react";
import { TELEMETRY_STATS } from "@/lib/data";

const iconMap = [Zap, Radio, Globe, ShieldCheck];

export function TelemetryGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="telemetry" className="relative w-full py-20 md:py-28 bg-background border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label: 4px Solid Square Indicator */}
        <div className="flex items-center gap-2 mb-4">
          <span className="size-1 rounded-xs bg-primary flex-shrink-0" />
          <span className="text-xs font-mono font-medium tracking-widest text-muted-foreground uppercase">
            FUTURE KERALA ECOSYSTEM
          </span>
        </div>

        {/* Display Headline: Weight 300, lg:text-5xl */}
        <div className="mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-foreground max-w-3xl">
            Real-Time Ecological &{" "}
            <span className="font-light italic text-primary">Urban Telemetry</span>
          </h2>
        </div>

        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: 4 Telemetry Metrics Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TELEMETRY_STATS.map((stat, idx) => {
              const Icon = iconMap[idx % iconMap.length];

              return (
                <motion.div
                  key={stat.label}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-border bg-card/70 p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary/40 hover:bg-card"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-9 rounded-xl border border-border bg-secondary flex items-center justify-center text-primary">
                        <Icon className="size-4" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground uppercase">
                        <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                        Live
                      </span>
                    </div>

                    <div className="text-3xl sm:text-4xl font-light text-foreground font-mono tracking-tight mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono uppercase text-primary tracking-wider font-medium mb-3">
                      {stat.unit}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {stat.caption}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: 80px Curved Porthole Image Card (md:rounded-cards) */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative size-full overflow-hidden rounded-2xl md:rounded-cards border border-border bg-card shadow-2xl"
            >
              <Image
                src="/images/kerala_ai_greencity.jpg"
                alt="Kerala Eco-Polis sunrise aerial view showing green roofs and smart transit"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="size-1.5 rounded-full bg-primary" />
                  <span className="text-xs font-mono tracking-widest text-primary uppercase font-medium">
                    KERALA ECO-POLIS · ARCHITECTURE
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-light text-foreground leading-tight max-w-md">
                  Biophilic towers, automated electric canal shuttles, and zero-carbon urban habitats.
                </h4>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
