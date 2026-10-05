import { BookOpen, ShoppingBag, ArrowRight } from "lucide-react";
import type { Book } from "@/data/books";

interface BookFreePreviewProps {
  book: Book;
}

export function BookFreePreview({ book }: BookFreePreviewProps) {
  if (book.kdpSelect === true) {
    return null;
  }

  const isHindi = book.language === "Hindi";
  const isBilingual = book.language === "Bilingual";
  const hindiClass = isHindi || isBilingual ? "hindi" : "";

  const hasPreview =
    book.previewEnabled &&
    book.previewContent &&
    Array.isArray(book.previewContent.paragraphs) &&
    book.previewContent.paragraphs.length > 0;

  const ctaText = isHindi
    ? "पूरी किताब Amazon Kindle पर पढ़ें"
    : isBilingual
      ? "पूरी किताब Amazon Kindle पर पढ़ें / Read the full book on Amazon Kindle"
      : "Read the full book on Amazon Kindle";

  const ctaHref =
    book.amazonUrl && book.amazonUrl !== "#" ? book.amazonUrl : null;

  const sectionHeading = isHindi
    ? "मुफ्त पूर्वावलोकन"
    : isBilingual
      ? "Free Preview / मुफ्त पूर्वावलोकन"
      : "Free Preview";

  if (!hasPreview) {
    if (!ctaHref) {
      return null;
    }
    return (
      <section className="border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="rounded-lg border border-gold/30 bg-background/60 p-6 text-center sm:p-8">
            <BookOpen
              className="mx-auto h-8 w-8 text-gold"
              aria-hidden="true"
            />
            <p
              className={`mt-4 text-base leading-relaxed text-foreground/80 ${hindiClass}`}
            >
              {isHindi
                ? "इस पुस्तक का पूर्वावलोकन अभी उपलब्ध नहीं है। पूरी किताब Amazon Kindle पर पढ़ें।"
                : isBilingual
                  ? "इस पुस्तक का पूर्वावलोकन अभी उपलब्ध नहीं है। पूरी किताब Amazon Kindle पर पढ़ें। / Preview not available for this book yet. Read the full book on Amazon Kindle."
                  : "Preview not available for this book yet. Read the full book on Amazon Kindle."}
            </p>
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              {ctaText}
            </a>
          </div>
        </div>
      </section>
    );
  }

  const { sourceLabel, paragraphs, wordCount } = book.previewContent!;

  return (
    <section className="border-t border-border bg-secondary/20">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-gold" aria-hidden="true" />
          <h2
            className={`font-display text-2xl text-foreground md:text-3xl ${hindiClass}`}
          >
            {sectionHeading}
          </h2>
        </div>

        <p
          className={`mb-6 text-xs font-medium uppercase tracking-[0.18em] text-gold ${hindiClass}`}
        >
          {sourceLabel}
          {wordCount ? (
            <span className="ml-2 text-muted-foreground">~{wordCount} शब्द</span>
          ) : null}
        </p>

        <div className={`space-y-5 ${hindiClass}`}>
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-base leading-[1.8] text-foreground/85 sm:text-[1.05rem]"
            >
              {para}
            </p>
          ))}
        </div>

        {ctaHref && (
          <div className="mt-10 rounded-lg border border-gold/40 bg-gold/5 p-6 sm:p-8">
            <p
              className={`text-center text-sm font-medium text-foreground/70 ${hindiClass}`}
            >
              {isHindi
                ? "पूर्वावलोकन यहीं समाप्त। आगे पढ़ने के लिए —"
                : isBilingual
                  ? "पूर्वावलोकन यहीं समाप्त। आगे पढ़ने के लिए — / Preview ends here. To continue reading —"
                  : "Preview ends here. To continue reading —"}
            </p>
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-md bg-gold px-7 text-base font-semibold text-primary-foreground transition-colors hover:bg-gold/90 sm:w-auto sm:mx-auto sm:inline-flex"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              {ctaText}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
