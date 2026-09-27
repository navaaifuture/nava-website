# Architectural Design Specification: NAVA AI Website

- **Project**: NAVA AI Official Website
- **Date**: 2026-09-27
- **Status**: Approved for Implementation
- **Architecture**: Next.js App Router (React 19), Tailwind CSS v4, Motion (`motion/react`), Lucide React
- **Directives**: Strict compliance with `@[user_global]` (`lib/data.ts` single source of truth, route resilience files, dynamic metadata generators, theme token invariance)

---

## 1. Executive Summary & Brand Identity

NAVA AI is building a smarter, greener, and more human future for Kerala through Artificial Intelligence, sustainable development, and ecological stewardship. Rooted in Kerala and built for the world, NAVA AI envisions a future where cultural heritage and frontier technology grow together — empowering people, protecting the planet, and creating opportunities for generations to come.

- **Vision Statement**: *A Greener, Smarter Kerala for Generations*
- **Tagline**: *Intelligence for a Better Tomorrow*
- **Core Manifesto**: *Same Land. Brighter Future.*
- **Focus Triad**: *People · Planet · Progress*
- **Six Ecosystem Domains**:
  1. AI-Powered Infrastructure
  2. Sustainable Cities
  3. World-Class Education
  4. Global Opportunities
  5. Cleaner Environments
  6. Happier Communities

---

## 2. Visual Identity & Aesthetic System

### 2.1 Color Calibration & Semantics (Obsidian + Emerald Bio-Tech + Platinum)
Directly extracted from the sculpted NAVA emblem (`components/brand/logo-mark.svg` / `public/logo-mark.png`):
- **Deep Obsidian Canvas**: `#050806`, `#080c09`, `#0d1410` (organic dark slate/black background)
- **Living Emerald Accents**: `#10b981`, `#059669`, `#00f59b`, `#34d399` (radiant green reflecting the living leaf and internal glow of the "N" emblem)
- **Platinum / Titanium Silver**: `#e2e8f0`, `#cbd5e1`, `#94a3b8` (reflecting the silver diagonal ribbon)
- **High-Legibility Neutral Text**: `#f8fafc` (primary headlines), `#94a3b8` (secondary copy), `#6ee7b7` (badges / highlights)
- **Glassmorphic Surface Containers**: `rgba(9, 15, 11, 0.75)` with `backdrop-blur-xl` and 1px borders of `rgba(16, 185, 129, 0.15)`

### 2.2 Motion Tokens & Spring Dynamics
- **Animation Framework**: `motion/react` (Motion / Framer Motion for React 19)
- **Spring Curves**:
  - `spring.gentle`: `{ stiffness: 260, damping: 28 }` (tab transitions, card reveals)
  - `spring.snappy`: `{ stiffness: 380, damping: 30 }` (buttons, badges, micro-interactions)
  - `spring.modal`: `{ stiffness: 320, damping: 26 }` (dialog scale & enter/exit)
- **Ambient Micro-interactions**:
  - Logo emblem emerald aura breath (soft 4s pulsing glow)
  - Segmented pill indicator layout transition via `layoutId="activePillarIndicator"`
  - Hover physics on ecosystem cards (`-translate-y-1` + dynamic border aura)
- **Accessibility**: Full `prefers-reduced-motion` compliance using `useReducedMotion()` guard.

---

## 3. Data Architecture (`lib/data.ts`)

In accordance with `@[user_global]`, all copy, navigation links, vision statements, metrics, pillars, and initiatives are centralized in `lib/data.ts` as strongly typed constants (`as const`).

Key data structures:
- `siteConfig`: Brand title, description, tagline, core idea, social channels, and metadata.
- `navigationItems`: Header and footer navigation links.
- `focusPillars`: The People, Planet, Progress triad with mission statements, deep-dive highlights, and measurable KPIs.
- `ecosystemDomains`: The 6 focus areas with icons, summaries, bullet initiatives, and district reach across Kerala.
- `heritageConvergence`: Case studies illustrating the synthesis of Kerala heritage (Ayurvedic botany, water ecology, Malayalam NLP, vernacular architecture) with AI.
- `impactMetrics`: Core statewide targets (14 districts connected, 100% green compute, 50k+ students, zero-carbon AI clusters).
- `faqItems`: Informative questions & answers about NAVA AI's community initiatives, diaspora involvement, and data ethics.

---

## 4. Component Architecture & UI Hierarchy

```
components/
├── shared/
│   ├── site-header.tsx         # Sticky glassmorphic navbar with logo, drawer & pledge trigger
│   └── site-footer.tsx         # Institutional footer with sitemap, acknowledgments & metadata
├── marketing/
│   ├── hero-section.tsx        # Hero with animated emblem, ambient aura, headline & CTAs
│   ├── focus-triad.tsx         # Interactive People · Planet · Progress tabbed switcher
│   ├── ecosystem-bento.tsx     # 6-domain interactive bento grid
│   ├── heritage-tech.tsx       # "Same Land. Brighter Future" narrative comparison
│   ├── impact-metrics.tsx      # Milestone telemetry counters
│   ├── pledge-modal.tsx        # Interactive manifesto pledge & community participation modal
│   └── faq-section.tsx         # Accordion FAQ addressing common community queries
└── ui/
    └── button.tsx              # Accessible button primitive styled with theme tokens
```

---

## 5. Route-Level Resilience & Dynamic Metadata (`@[user_global]`)

### 5.1 Route Segments & Error Boundaries
- `app/layout.tsx`: Root HTML shell with dark theme, Geist font optimization, and metadata base.
- `app/page.tsx`: Marketing landing assembly.
- `app/loading.tsx`: Layout-matching skeleton screen preventing layout shifts (CLS < 0.05).
- `app/error.tsx`: `"use client"` route-level error boundary with error telemetry and `reset()` recovery trigger.
- `app/global-error.tsx`: Emergency fallback rendering full `<html>` and `<body>` tags for catastrophic exceptions.
- `app/not-found.tsx`: Polished 404 recovery page in dark obsidian styling.

### 5.2 Dynamic Metadata Generators
- `app/icon.tsx`: Dynamic ImageResponse SVG/PNG generator for browser favicon.
- `app/apple-icon.tsx`: Dynamic Apple Touch icon.
- `app/opengraph-image.tsx`: Dynamic 1200x630 social share card featuring the NAVA mark, emerald styling, and tagline.
- `app/twitter-image.tsx`: Dynamic Twitter summary card.
- `app/manifest.ts`: Typed Web App Manifest.
- `app/sitemap.ts`: Dynamic XML sitemap generator.
- `app/robots.ts`: Crawler indexation rules.
- `public/llms.txt`: Structured AI-readable documentation of NAVA AI's mission.

---

## 6. Implementation Verification Plan

1. **Build & Type Check**: `npm run build` must pass cleanly with 0 TypeScript or lint errors.
2. **Design Audit**: Verify obsidian/emerald/silver color consistency matching `logo-mark.png`.
3. **Motion Audit**: Check smooth spring physics on desktop and mobile, ensuring no layout jank or unhandled reduced-motion states.
4. **Data Isolation Audit**: Confirm zero hardcoded copy in JSX components — all strings sourced from `lib/data.ts`.
5. **Interactive Audit**: Verify modal opens, tabs switch cleanly with `layoutId`, and mobile drawer works seamlessly.
