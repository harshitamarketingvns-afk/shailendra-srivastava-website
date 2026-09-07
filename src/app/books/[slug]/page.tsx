import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Globe, Library, BookOpen, ShoppingBag } from "lucide-react";
import { books, getBookBySlug, author, isPlaceholderCover } from "@/data/books";
import { BookCard } from "@/components/site/book-card";
import { BookButtons } from "@/components/site/book-buttons";
import { BookCoverImage } from "@/components/site/book-cover-image";
import { Section } from "@/components/site/section";
import { BreadcrumbJsonLd, BookJsonLd } from "@/components/site/json-ld";

interface BookPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) {
    return {
      title: "Book not found",
    };
  }
  const title = `${book.title} — ${book.subtitle}`;
  const description = book.description;
  return {
    title: book.title,
    description,
    alternates: { canonical: `/books/${book.slug}` },
    openGraph: {
      type: "book",
      title,
      description,
      url: `/books/${book.slug}`,
      authors: [author.name],
      siteName: author.name,
      images: book.cover ? [{ url: book.cover, alt: book.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  const related = books
    .filter(
      (b) => b.slug !== book.slug && (b.category === book.category || b.series === book.series),
    )
    .slice(0, 3);

  const isHindi = book.language === "Hindi";

  return (
    <>
      <BookJsonLd book={book} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Books", url: "/books" },
          { name: book.title, url: `/books/${book.slug}` },
        ]}
      />

      {/* ── Book header ───────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/40 to-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl"
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-gold">
                  Home
                </Link>
              </li>
              <li className="text-muted-foreground/40">/</li>
              <li>
                <Link href="/books" className="hover:text-gold">
                  Books
                </Link>
              </li>
              <li className="text-muted-foreground/40">/</li>
              <li className="text-gold">{book.title}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Cover */}
            <div className="mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-lg border border-gold/30 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)]">
                <BookCoverImage
                  book={book}
                  sizePreset="hero"
                  priority
                  wrapperClassName="rounded-none"
                />
              </div>
              {isPlaceholderCover(book) && (
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Cover image coming soon. This is a branded placeholder —
                  not the final cover design.
                </p>
              )}
            </div>

            {/* Copy */}
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-gold/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                  {book.category}
                </span>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {book.series}
                </span>
              </div>

              <h1
                className={`mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl ${
                  isHindi ? "hindi" : ""
                }`}
              >
                {book.title}
              </h1>
              <p
                className={`mt-3 font-display text-lg italic text-gold md:text-xl ${
                  isHindi ? "hindi" : ""
                }`}
              >
                {book.subtitle}
              </p>

              <p
                className={`mt-6 max-w-xl text-base leading-relaxed text-foreground/80 ${
                  isHindi ? "hindi" : ""
                }`}
              >
                {book.longDescription ?? book.description}
              </p>

              {/* Metadata strip */}
              <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-border py-5 text-sm">
                <div className="flex items-center gap-3">
                  <Globe
                    className="h-4 w-4 text-gold"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Language
                    </dt>
                    <dd className="text-foreground">{book.language}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Library
                    className="h-4 w-4 text-gold"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Series
                    </dt>
                    <dd className="text-foreground">{book.series}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen
                    className="h-4 w-4 text-gold"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Author
                    </dt>
                    <dd className="text-foreground">{book.author}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShoppingBag
                    className="h-4 w-4 text-gold"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Availability
                    </dt>
                    <dd className="text-foreground">
                      {book.platform === "gumroad"
                        ? book.gumroadUrl === "#"
                          ? "Gumroad — coming soon"
                          : "On Gumroad"
                        : book.platform === "both"
                          ? "Amazon & Gumroad"
                          : book.amazonUrl === "#"
                            ? "Amazon — coming soon"
                            : "On Amazon"}
                    </dd>
                  </div>
                </div>
              </dl>

              {/* CTAs */}
              <BookButtons book={book} variant="page" className="mt-8" />
              <div className="mt-4 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/books"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gold/50 px-7 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  All books
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related books */}
      {related.length > 0 && (
        <Section>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl text-foreground md:text-3xl">
              More in this category
            </h2>
            <Link
              href="/books"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-foreground"
            >
              View all
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((b) => (
              <BookCard key={b.slug} book={b} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
