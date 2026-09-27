import Image from "next/image";
import Link from "next/link";

interface NavLogoProps {
  className?: string;
  showTagline?: boolean;
}

export function NavLogo({ className = "", showTagline = false }: NavLogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}
      aria-label="NAVA AI Home"
    >
      <div className="relative size-8 md:size-9 flex-shrink-0 overflow-hidden">
        <Image
          src="/logo-mark.png"
          alt="NAVA AI Logomark"
          width={36}
          height={36}
          priority
          className="size-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className="font-sans text-base md:text-lg font-semibold tracking-wider text-foreground">
            NAVA
          </span>
          <span className="rounded-full bg-primary/15 border border-primary/30 px-1.5 py-0.5 text-xs font-mono font-medium tracking-wide text-primary">
            AI
          </span>
        </div>
        {showTagline && (
          <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase mt-0.5">
            Kerala · Global
          </span>
        )}
      </div>
    </Link>
  );
}
