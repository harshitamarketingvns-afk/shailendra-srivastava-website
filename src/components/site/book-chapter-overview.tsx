import { ListTree } from "lucide-react";
import type { Book } from "@/data/books";

interface BookChapterOverviewProps {
  book: Book;
}

export function BookChapterOverview({ book }: BookChapterOverviewProps) {
  const hasParts = book.parts && book.parts.length > 0;
  const hasChapters = book.chapters && book.chapters.length > 0;

  if (!hasParts && !hasChapters) {
    return null;
  }

  const isHindi = book.language === "Hindi";
  const isBilingual = book.language === "Bilingual";
  const hindiClass = isHindi || isBilingual ? "hindi" : "";

  const heading = isHindi
    ? "अध्याय सूची"
    : isBilingual
      ? "Chapter Overview / अध्याय सूची"
      : "Chapter Overview";

  const partsWithStart = hasParts
    ? book.parts!.map((part, partIdx) => ({
        ...part,
        startIndex: book.parts!
          .slice(0, partIdx)
          .reduce((sum, p) => sum + p.chapters.length, 0),
      }))
    : [];

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <ListTree className="h-5 w-5 text-gold" aria-hidden="true" />
          <h2
            className={`font-display text-2xl text-foreground md:text-3xl ${hindiClass}`}
          >
            {heading}
          </h2>
        </div>

        {hasParts && (
          <div className="space-y-10">
            {partsWithStart.map((part, partIdx) => (
              <div key={partIdx}>
                <div className="mb-4 border-l-2 border-gold/50 pl-4">
                  <h3
                    className={`font-display text-lg font-semibold text-gold md:text-xl ${hindiClass}`}
                  >
                    {part.title}
                  </h3>
                  {part.subtitle && (
                    <p
                      className={`mt-1 text-sm text-muted-foreground ${hindiClass}`}
                    >
                      {part.subtitle}
                    </p>
                  )}
                </div>
                <ol className="space-y-3">
                  {part.chapters.map((chapter, chIdx) => (
                    <li
                      key={chIdx}
                      className="flex gap-4 rounded-md border border-border/60 bg-background/40 px-4 py-3 sm:px-5 sm:py-4"
                    >
                      <span
                        className="font-display text-base font-semibold text-gold/80 tabular-nums sm:text-lg"
                        aria-hidden="true"
                      >
                        {String(part.startIndex + chIdx + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <h4
                          className={`text-sm font-semibold text-foreground sm:text-base ${hindiClass}`}
                        >
                          {chapter.title}
                        </h4>
                        {chapter.summary && (
                          <p
                            className={`mt-1 text-xs leading-relaxed text-foreground/60 sm:text-sm ${hindiClass}`}
                          >
                            {chapter.summary}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        )}

        {!hasParts && hasChapters && (
          <ol className="space-y-4">
            {book.chapters!.map((chapter, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-md border border-border/60 bg-background/40 px-4 py-4 sm:px-5 sm:py-5"
              >
                <span
                  className="font-display text-lg font-semibold text-gold/80 tabular-nums"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3
                    className={`text-base font-semibold text-foreground sm:text-lg ${hindiClass}`}
                  >
                    {chapter.title}
                  </h3>
                  {chapter.summary && (
                    <p
                      className={`mt-1.5 text-sm leading-relaxed text-foreground/70 ${hindiClass}`}
                    >
                      {chapter.summary}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
