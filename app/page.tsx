import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Vision } from "@/components/sections/vision";
import { PillarsAccordion } from "@/components/sections/pillars-accordion";
import { TelemetryGrid } from "@/components/sections/telemetry-grid";
import { ManifestoCta } from "@/components/sections/manifesto-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* Floating Pill Navigation */}
      <Navbar />

      <main className="flex-1 w-full flex flex-col">
        {/* Full-Bleed Hero Overlay with Display Headline & Case Study Badge */}
        <Hero />

        {/* Vision & Core Idea ("Same Land. Brighter Future.") with 80px Curved Image Porthole */}
        <Vision />

        {/* Strategic Focus Pillars Interactive Accordion with Circular +/- Toggles */}
        <PillarsAccordion />

        {/* Real-Time Telemetry & Future Kerala Ecosystem Grid */}
        <TelemetryGrid />

        {/* Manifesto & Call To Action */}
        <ManifestoCta />
      </main>

      {/* Architectural Onyx Footer */}
      <Footer />
    </div>
  );
}
