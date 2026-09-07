"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile sheet whenever the route changes.
  // Uses React's "store information from previous renders" pattern,
  // which is safe to call inside render and avoids setState-in-effect.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (open) setOpen(false);
  }

  // Lock body scroll when the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Add subtle elevation after the user scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-gold/25 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.8)]"
          : "bg-background/80 backdrop-blur-sm border-border/60",
      )}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/40 text-gold transition-colors group-hover:bg-gold/10">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base md:text-lg tracking-wide text-foreground">
              {siteConfig.name}
            </span>
            <span className="mt-1 text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-muted-foreground">
              Author • Researcher • Diamond & Gemstone Professional
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary"
          className="hidden xl:flex items-center gap-0.5"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-2.5 py-2 text-[13px] font-medium tracking-wide transition-colors whitespace-nowrap",
                "rounded-md hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50",
                isActive(item.href)
                  ? "text-gold"
                  : "text-foreground/80 hover:text-gold",
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-2.5 -bottom-0.5 h-px bg-gold/70" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile / tablet menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile / tablet navigation sheet */}
      <div
        id="mobile-nav"
        className={cn(
          "xl:hidden overflow-hidden border-t border-border/60 bg-background transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav
          aria-label="Mobile"
          className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "py-3 text-base border-b border-border/40 last:border-0 transition-colors",
                isActive(item.href)
                  ? "text-gold"
                  : "text-foreground/85 hover:text-gold",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
