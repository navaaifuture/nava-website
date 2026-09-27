"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NavLogo } from "@/components/brand/nav-logo";
import { NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={shouldReduceMotion ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="pointer-events-auto w-full max-w-5xl rounded-full bg-card/85 backdrop-blur-xl border border-border/80 px-4 md:px-6 py-2.5 flex items-center justify-between shadow-2xl"
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <NavLogo />

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="#vision"
            className="group relative inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs md:text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
          >
            <span>Explore Vision</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden size-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto absolute top-16 inset-x-4 max-w-md mx-auto rounded-2xl bg-card/95 backdrop-blur-2xl border border-border p-4 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border mt-1">
                <Link
                  href="#vision"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 w-full rounded-full bg-primary py-2.5 text-xs font-medium text-primary-foreground hover:bg-primary/90"
                >
                  <span>Explore Vision</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
