import Link from "next/link";
import { ArrowRight, ShoppingBag, ExternalLink } from "lucide-react";
import type { Book } from "@/data/books";
import { cn } from "@/lib/utils";

/**
 * Shared purchase CTA row.
 * Renders the correct combination of Amazon / Gumroad buttons based on the
 * book's `platform` field:
 *   - "amazon"  → Amazon only
 *   - "gumroad" → Gumroad only
 *   - "both"    → Amazon + Gumroad
 *
 * Buttons are disabled (rendered as muted "Coming soon" pills) while their
 * URL is the "#" placeholder.
 */

type Variant = "card" | "page";

interface BookButtonsProps {
  book: Book;
  variant?: Variant;
  className?: string;
}

function isPlaceholder(url: string): boolean {
  return !url || url.trim() === "" || url.trim() === "#";
}

export function BookButtons({
  book,
  variant = "card",
  className,
}: BookButtonsProps) {
  const showAmazon = book.platform === "amazon" || book.platform === "both";
  const showGumroad = book.platform === "gumroad" || book.platform === "both";

  // Card buttons are taller on mobile (44px touch target) and shrink on sm+.
  const buttonBase =
    variant === "page"
      ? "inline-flex h-12 items-center justify-center gap-2 rounded-md px-7 text-sm font-semibold transition-colors"
      : "inline-flex h-11 sm:h-9 items-center justify-center gap-1.5 rounded-md px-4 sm:px-3.5 text-xs sm:text-xs font-semibold tracking-wide transition-colors";

  const primaryStyle =
    "bg-gold text-primary-foreground hover:bg-gold/90 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground";
  const secondaryStyle =
    "border border-gold/50 text-foreground hover:bg-gold/10 disabled:cursor-not-allowed disabled:border-border disabled:text-muted-foreground disabled:hover:bg-transparent";

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 sm:gap-3",
        variant === "card" && "mt-5 pt-1",
        variant === "page" && "gap-3",
        className,
      )}
    >
      <Link
        href={`/books/${book.slug}`}
        className={cn(
          buttonBase,
          "border border-border text-gold hover:text-foreground hover:border-gold/50",
        )}
      >
        View book
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>

      {showAmazon &&
        (isPlaceholder(book.amazonUrl) ? (
          <span
            className={cn(buttonBase, secondaryStyle, "opacity-70")}
            aria-disabled="true"
            title="Amazon link coming soon"
          >
            <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
            Amazon — soon
          </span>
        ) : (
          <a
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={cn(buttonBase, primaryStyle)}
          >
            <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
            Buy on Amazon
          </a>
        ))}

      {showGumroad &&
        (isPlaceholder(book.gumroadUrl) ? (
          <span
            className={cn(buttonBase, secondaryStyle, "opacity-70")}
            aria-disabled="true"
            title="Gumroad link coming soon"
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            Gumroad — soon
          </span>
        ) : (
          <a
            href={book.gumroadUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={cn(buttonBase, primaryStyle)}
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            Buy on Gumroad
          </a>
        ))}
    </div>
  );
}
