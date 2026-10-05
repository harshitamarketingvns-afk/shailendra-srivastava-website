import { Sparkles } from "lucide-react";
import type { Book } from "@/data/books";

interface BookWhatYouWillLearnProps {
  book: Book;
}

export function BookWhatYouWillLearn({ book }: BookWhatYouWillLearnProps) {
  if (!book.whatYouWillLearn || book.whatYouWillLearn.length === 0) {
    return null;
  }

  const isHindi = book.language === "Hindi";
  const isBilingual = book.language === "Bilingual";
  const hindiClass = isHindi || isBilingual ? "hindi" : "";

  const heading = isHindi
    ? "पुस्तक में क्या मिलेगा"
    : isBilingual
      ? "What You Will Learn / पुस्तक में क्या मिलेगा"
      : "What You Will Learn";

  return (
    <section className="border-t border-border bg-secondary/20">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-gold" aria-hidden="true" />
          <h2
            className={`font-display text-2xl text-foreground md:text-3xl ${hindiClass}`}
          >
            {heading}
          </h2>
        </div>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {book.whatYouWillLearn.map((point, i) => (
            <li
              key={i}
              className={`flex items-start gap-3 rounded-md border border-border/60 bg-background/40 px-4 py-3 text-sm leading-relaxed text-foreground/85 sm:text-base ${hindiClass}`}
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
