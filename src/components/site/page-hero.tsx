import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
  className?: string;
}

/**
 * Inner-page hero used across About / Books / Ratna Gyan / etc.
 * Renders a refined top section with optional breadcrumb trail,
 * eyebrow tag, large display heading and supporting copy.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  breadcrumbs,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/40 to-background",
        className,
      )}
    >
      {/* Decorative gold lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-gold/5 blur-3xl"
      />

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              {breadcrumbs.map((bc, i) => (
                <li key={`${bc.label}-${i}`} className="flex items-center gap-2">
                  {bc.href ? (
                    <Link
                      href={bc.href}
                      className="transition-colors hover:text-gold"
                    >
                      {bc.label}
                    </Link>
                  ) : (
                    <span className="text-gold">{bc.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <span className="text-muted-foreground/40">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            <span className="h-px w-6 bg-gold/60" />
            {eyebrow}
          </span>
        )}

        <h1 className="mt-4 font-display text-4xl leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 font-display text-lg italic text-gold md:text-xl">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
