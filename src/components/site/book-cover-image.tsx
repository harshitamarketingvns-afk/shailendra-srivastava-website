import Image from "next/image";
import type { Book } from "@/data/books";
import { getBookCover, isPlaceholderCover } from "@/data/books";
import { cn } from "@/lib/utils";

interface BookCoverImageProps {
  book: Book;
  /**
   * Controls the `sizes` attribute passed to next/image, which tells the
   * browser how wide the image will be displayed at each breakpoint.
   * Choose based on the layout the image appears in.
   */
  sizePreset?: "card-grid" | "hero" | "featured";
  className?: string;
  /** Extra class on the wrapper <div> (not the <Image>). */
  wrapperClassName?: string;
  priority?: boolean;
}

const SIZE_PRESETS: Record<NonNullable<BookCoverImageProps["sizePreset"]>, string> =
  {
    // Book cards inside a 2 / 3 / 4 column grid.
    "card-grid": "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
    // Single full-width hero on the book detail page.
    hero: "(max-width: 1024px) 80vw, 40vw",
    // Featured book on the homepage (sits in a 2-col grid on desktop).
    featured: "(max-width: 1024px) 90vw, 40vw",
  };

/**
 * Renders a book cover using next/image.
 *
 * Behavior:
 * - **Real cover** (`book.cover` set): rendered with `object-contain` inside a
 *   wrapper pinned to a 2:3 aspect ratio (the standard KDP paperback
 *   proportion). The cover is **never cropped, recolored or distorted** — if
 *   the cover's intrinsic ratio differs slightly, `object-contain` letterboxes
 *   symmetrically rather than cropping. When the wrapper is placed inside a
 *   fixed-height parent (e.g. the `feature` card layout), set
 *   `wrapperClassName="h-full"` to fill it.
 * - **Placeholder** (`book.cover` null): rendered inside a fixed `aspect-[3/4]`
 *   frame with `object-contain`, plus a subtle "Cover coming soon" ribbon.
 *
 * Uses `next/image` for responsive optimization and lazy loading by default.
 * Pass `priority` for above-the-fold covers (hero, featured).
 */
export function BookCoverImage({
  book,
  sizePreset = "card-grid",
  className,
  wrapperClassName,
  priority = false,
}: BookCoverImageProps) {
  const src = getBookCover(book);
  const isPlaceholder = isPlaceholderCover(book);

  // ── Placeholder: 3/4 frame with "Cover coming soon" ribbon ──
  // The branded SVG placeholder is built on a 3/4 (600×800) canvas, so we
  // pin the wrapper to 3/4 to match.
  if (isPlaceholder) {
    return (
      <div
        className={cn(
          "relative aspect-[3/4] w-full overflow-hidden bg-secondary/40",
          wrapperClassName,
        )}
      >
        <Image
          src={src}
          alt={`Cover of ${book.title} by ${book.author}`}
          fill
          sizes={SIZE_PRESETS[sizePreset]}
          className={cn("object-contain", className)}
          priority={priority}
          // SVG must bypass the optimizer — vector files aren't supported.
          unoptimized={src.endsWith(".svg")}
        />

        {/* "Cover coming soon" ribbon — only on placeholder covers */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-background/90 to-transparent pb-2 pt-6"
          aria-hidden="true"
        >
          <span className="rounded-full border border-gold/30 bg-background/80 px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.2em] text-gold/80 backdrop-blur-sm">
            Cover coming soon
          </span>
        </div>
      </div>
    );
  }

  // ── Real cover: 2/3 frame, object-contain (no crop) ─────────
  // 2:3 is the standard KDP paperback cover proportion (e.g. 1024×1536).
  // object-contain guarantees the cover is shown in full; if a cover has a
  // slightly different ratio it will letterbox rather than crop.
  return (
    <div
      className={cn(
        "relative aspect-[2/3] w-full overflow-hidden bg-secondary/40",
        wrapperClassName,
      )}
    >
      <Image
        src={src}
        alt={`Cover of ${book.title} by ${book.author}`}
        fill
        sizes={SIZE_PRESETS[sizePreset]}
        className={cn("object-contain", className)}
        priority={priority}
      />
    </div>
  );
}
