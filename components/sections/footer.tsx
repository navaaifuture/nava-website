import Link from "next/link";
import { NavLogo } from "@/components/brand/nav-logo";
import { BRAND_DATA, NAV_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative w-full bg-background border-t border-border pt-16 pb-12 text-muted-foreground text-sm font-normal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border/60">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <NavLogo showTagline={true} className="mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-6">
                Envisioning a future where heritage and technology grow together — empowering people,
                protecting the planet, and creating opportunities for generations to come.
              </p>
            </div>

            <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              <span>{BRAND_DATA.coordinates} · {BRAND_DATA.location}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-medium tracking-widest text-foreground uppercase mb-4">
              Exploration
            </h4>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Vision & Pillars */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-medium tracking-widest text-foreground uppercase mb-4">
              Focus Triad
            </h4>
            <div className="flex flex-col gap-3 text-xs font-mono">
              <div className="rounded-xl border border-border/60 bg-card/40 p-2.5">
                <span className="text-primary font-medium">PEOPLE</span>
                <p className="text-muted-foreground mt-0.5 font-sans">World-class education & healthcare</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-card/40 p-2.5">
                <span className="text-primary font-medium">PLANET</span>
                <p className="text-muted-foreground mt-0.5 font-sans">Clean backwaters & green energy</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-card/40 p-2.5">
                <span className="text-primary font-medium">PROGRESS</span>
                <p className="text-muted-foreground mt-0.5 font-sans">AI infrastructure & global jobs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© {new Date().getFullYear()} NAVA AI. All rights reserved.</p>
          <p className="text-muted-foreground">
            Same Land. Brighter Future.
          </p>
        </div>
      </div>
    </footer>
  );
}
