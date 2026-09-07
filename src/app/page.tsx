import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles, ExternalLink } from "lucide-react";
import { author } from "@/data/books";
import { getFeaturedBook, getBooksBySeries, books, isPlaceholderCover } from "@/data/books";
import { BookCard } from "@/components/site/book-card";
import { BookCoverImage } from "@/components/site/book-cover-image";
import { Section, SectionHeading } from "@/components/site/section";
import { WebsiteJsonLd } from "@/components/site/json-ld";

const categoryLabels: Record<string, string> = {
  Gemstones: "Gemstones",
  "Diamonds & Jewellery": "Diamonds & Jewellery",
  "Science & Philosophy": "Science & Philosophy",
  "Fiction & Speculative Thought": "Fiction & Speculative Thought",
};

const categoryBlurbs: Record<string, string> = {
  Gemstones:
    "The Ratna Gyan Academy series — a Hindi reference library covering the science, history, trade and tradition of Indian gemstones.",
  "Diamonds & Jewellery":
    "Practical and reflective writing on diamonds, grading, jewellery craft and the business of brilliance.",
  "Science & Philosophy":
    "Long-form inquiry into mind, consciousness, evolution and the origins of belief — including the flagship book THE BIRTH OF GOD.",
  "Fiction & Speculative Thought":
    "Speculative and narrative works that use fiction as a laboratory for ideas about time, memory and human possibility.",
};

export default function HomePage() {
  const featured = getFeaturedBook();
  const ratnaGyanBooks = getBooksBySeries("Ratna Gyan Academy").slice(0, 4);
  const diamondJewelleryBooks = getBooksBySeries(
    "Diamond & Jewellery Knowledge Series",
  ).slice(0, 4);
  const otherNotable = books
    .filter(
      (b) =>
        !b.featured &&
        b.series !== "Ratna Gyan Academy" &&
        b.series !== "Diamond & Jewellery Knowledge Series",
    )
    .slice(0, 3);

  return (
    <>
      <WebsiteJsonLd />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden border-b border-border"
      >
        {/* Decorative gold haze */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 60% at 50% 0%, rgba(201,169,110,0.10), transparent 70%), radial-gradient(40% 40% at 85% 30%, rgba(201,169,110,0.06), transparent 70%)",
          }}
        />
        {/* Subtle paper-grain noise */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-gold">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Official Author Website
            </span>

            <h1
              id="hero-heading"
              className="mt-6 font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
            >
              SHAILENDRA
              <br />
              <span className="gold-text">SRIVASTAVA</span>
            </h1>

            <p className="mt-6 font-display text-base uppercase tracking-[0.35em] text-gold md:text-lg">
              Author • Researcher
              <span className="mx-3 text-muted-foreground/50">•</span>
              Diamond & Gemstone Professional
            </p>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              From diamonds that can be measured and graded to ideas that have
              shaped civilizations, Shailendra Srivastava explores matter,
              mind, technology, belief and the unanswered questions of human
              existence.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/books"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 text-sm font-semibold text-primary-foreground transition-all hover:bg-gold/90 hover:shadow-[0_8px_30px_-10px_rgba(201,169,110,0.7)]"
              >
                Explore My Books
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/the-birth-of-god"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gold/50 px-7 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                The Birth of God
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED BOOK ────────────────────────────────────── */}
      {featured && (
        <section
          aria-labelledby="featured-heading"
          className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-secondary/30"
        >
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Cover */}
              <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
                <div className="overflow-hidden rounded-lg border border-gold/30 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
                  <BookCoverImage
                    book={featured}
                    sizePreset="featured"
                    priority
                    wrapperClassName="rounded-none"
                  />
                </div>
                {isPlaceholderCover(featured) && (
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Cover image coming soon — branded placeholder shown.
                  </p>
                )}
              </div>

              {/* Copy */}
              <div className="flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                  <span className="h-px w-6 bg-gold/60" />
                  Featured Book
                </span>
                <h2
                  id="featured-heading"
                  className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl"
                >
                  THE BIRTH OF GOD
                </h2>
                <p className="mt-3 font-display text-xl italic text-gold">
                  How the Human Mind Created the Idea of God
                </p>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  This book does not begin by asking whether God exists. It
                  asks a different question:{" "}
                  <span className="text-foreground">
                    How did the idea of God emerge in the human mind?
                  </span>
                </p>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  An inquiry into the historical and cognitive emergence of
                  the God-concept — through evolution, mortality awareness,
                  dreams, imagination, agency detection, language, culture,
                  religion, civilization, consciousness, science and
                  philosophy.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/the-birth-of-god"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gold px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90"
                  >
                    View Book
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <a
                    href={featured.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-gold/50 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
                  >
                    Buy on Amazon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── BOOK CATEGORIES ──────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Book Categories"
          title="A library across four worlds"
          description="Shailendra Srivastava's writing moves between the precise science of gemstones and the speculative edges of mind, belief and civilization."
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.keys(categoryLabels).map((cat) => {
            const count = books.filter((b) => b.category === cat).length;
            return (
              <Link
                key={cat}
                href={`/books?category=${encodeURIComponent(cat)}`}
                className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 card-lift hover:card-lift-hover"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                  {count} {count === 1 ? "title" : "titles"}
                </span>
                <h3 className="mt-3 font-display text-xl text-foreground transition-colors group-hover:text-gold">
                  {categoryLabels[cat]}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {categoryBlurbs[cat]}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                  Explore category
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ── RATNA GYAN ACADEMY PREVIEW ───────────────────────── */}
      <Section className="bg-secondary/30 border-y border-border">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Ratna Gyan Academy"
            title="रत्नों को समझने की पुस्तक शृंखला"
            description="A Hindi reference series on gemstones — covering science, history, trade and tradition. Each book is a self-contained guide to a single stone. Available on Amazon / KDP."
          />
          <Link
            href="/ratna-gyan-academy"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-gold/50 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
          >
            View series
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {ratnaGyanBooks.map((book, i) => (
            <BookCard
              key={book.slug}
              book={book}
              variant="compact"
              priority={i === 0}
            />
          ))}
        </div>
      </Section>

      {/* ── DIAMOND & JEWELLERY KNOWLEDGE SERIES PREVIEW ─────── */}
      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Diamond & Jewellery Knowledge Series · Gumroad"
            title={
              <>
                <span className="inline-flex items-center gap-2">
                  Professional education for the trade
                  <ExternalLink className="h-4 w-4 text-gold" aria-hidden="true" />
                </span>
              </>
            }
            description="A ten-volume Gumroad series on diamond basics, grading, cutting, planning, manufacturing, pricing, the natural vs lab-grown debate, sales and jewellery design — plus one alternate-universe title."
          />
          <Link
            href="/diamond-jewellery-books"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gold px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90"
          >
            View Gumroad series
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {diamondJewelleryBooks.map((book) => (
            <BookCard key={book.slug} book={book} variant="compact" />
          ))}
        </div>
      </Section>

      {/* ── OTHER NOTABLE BOOKS ──────────────────────────────── */}
      {otherNotable.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="Also by Shailendra Srivastava"
            title="More from the catalogue"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherNotable.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/books"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-gold/50 px-7 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
            >
              View all books
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Section>
      )}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <Section className="border-t border-border">
        <div className="relative overflow-hidden rounded-xl border border-gold/20 bg-gradient-to-br from-secondary/60 to-background p-10 md:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              An invitation to explore.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Whether you are a jeweller seeking gemological knowledge or a
              reader curious about the origins of belief, there is a book here
              for you. Browse the catalogue, follow the research, or get in
              touch.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gold px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/research"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-gold/50 px-7 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
              >
                Research & Ideas
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
