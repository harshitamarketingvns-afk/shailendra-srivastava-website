import Link from "next/link";
import { ArrowRight, ShoppingBag, ExternalLink } from "lucide-react";
import type { Book, BookPlatform } from "@/data/books";
import { cn } from "@/lib/utils";
import { BookButtons } from "@/components/site/book-buttons";
import { BookCoverImage } from "@/components/site/book-cover-image";

interface BookCardProps {
  book: Book;
  /** Compact cards hide the long description and show only title/subtitle. */
  variant?: "default" | "compact" | "feature";
  className?: string;
  /** When true, the card is rendered as an <article> with structured-data attributes. */
  withStructuredData?: boolean;
  /** Mark this card's cover as above-the-fold (loads with priority). */
  priority?: boolean;
}

/* ────────────────────────────────────────────────────────────
 * PlatformBadge — small pill showing where the book is sold.
 * ──────────────────────────────────────────────────────────── */
function PlatformBadge({ platform }: { platform: BookPlatform }) {
  if (platform === "both") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
        <ShoppingBag className="h-3 w-3" aria-hidden="true" />
        <ExternalLink className="h-3 w-3" aria-hidden="true" />
        Amazon + Gumroad
      </span>
    );
  }

  if (platform === "gumroad") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
        <ExternalLink className="h-3 w-3 text-gold/70" aria-hidden="true" />
        Gumroad
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
      <ShoppingBag className="h-3 w-3 text-gold/70" aria-hidden="true" />
      Amazon
    </span>
  );
}

/* ────────────────────────────────────────────────────────────
 * SeriesLabel — short label for the series on the cover overlay.
 * ──────────────────────────────────────────────────────────── */
function seriesShortLabel(series: Book["series"]): string | null {
  switch (series) {
    case "Ratna Gyan Academy":
      return "Ratna Gyan Academy";
    case "Diamond & Jewellery Knowledge Series":
      return "D&J Knowledge Series";
    case "The Birth of God Series":
      return "Flagship Title";
    case "Standalone":
      return null;
    default:
      return null;
  }
}

export function BookCard({
  book,
  variant = "default",
  className,
  withStructuredData = true,
  priority = false,
}: BookCardProps) {
  const bookHref = `/books/${book.slug}`;
  const seriesLabel = seriesShortLabel(book.series);
  const isHindi = book.language === "Hindi";

  const articleProps = withStructuredData
    ? {
        itemScope: true,
        itemType: "https://schema.org/Book",
        itemProp: undefined as unknown as string,
      }
    : {};

  return (
    <article
      {...articleProps}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card card-lift hover:card-lift-hover",
        variant === "feature" && "md:flex-row",
        className,
      )}
    >
      {/* Cover */}
      <Link
        href={bookHref}
        className={cn(
          "relative block overflow-hidden",
          variant === "feature" ? "md:w-2/5" : "",
        )}
        aria-label={`View details of ${book.title}`}
      >
        <div
          className={cn(
            "transition-transform duration-500 group-hover:scale-[1.02]",
            variant === "feature" ? "md:h-full" : "",
          )}
        >
          <BookCoverImage
            book={book}
            sizePreset="card-grid"
            priority={priority}
            wrapperClassName={cn(
              "rounded-none",
              variant === "feature" && "md:aspect-auto md:h-full",
            )}
          />
        </div>

        {/* Series label overlay (top-left) */}
        {seriesLabel && (
          <span className="pointer-events-none absolute left-2 top-2 z-10 rounded-full border border-gold/30 bg-background/80 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.15em] text-gold/90 backdrop-blur-sm">
            {seriesLabel}
          </span>
        )}
      </Link>

      {/* Body */}
      <div
        className={cn(
          "flex flex-1 flex-col p-4 sm:p-5 md:p-6",
          variant === "feature" && "md:justify-center",
        )}
      >
        <meta itemProp="author" content={book.author} />
        <meta itemProp="bookFormat" content="https://schema.org/Book" />
        <meta itemProp="inLanguage" content={book.language} />
        <meta itemProp="url" content={bookHref} />

        {/* Metadata row: category + platform */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-gold/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-gold">
            {book.category}
          </span>
          <PlatformBadge platform={book.platform} />
        </div>

        {/* Title */}
        <h3
          className={cn(
            "mt-3 font-display leading-tight text-foreground transition-colors group-hover:text-gold",
            "text-lg sm:text-xl",
            isHindi && "hindi",
          )}
          itemProp="name"
        >
          {book.title}
        </h3>

        {/* Subtitle */}
        <p
          className={cn(
            "mt-1.5 text-sm leading-snug text-muted-foreground",
            isHindi && "hindi",
          )}
          itemProp="description"
        >
          {book.subtitle}
        </p>

        {/* Short description (non-compact only) */}
        {variant !== "compact" && (
          <p
            className={cn(
              "mt-3 text-sm leading-relaxed text-foreground/70 line-clamp-3",
              isHindi && "hindi",
            )}
          >
            {book.description}
          </p>
        )}

        {/* Footer row: language + author */}
        <div className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
          <span>{book.language}</span>
          <span className="text-muted-foreground/30">•</span>
          <span className="truncate">by {book.author}</span>
        </div>

        {/* Buttons */}
        <BookButtons book={book} variant="card" />
      </div>
    </article>
  );
}
