"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, ShoppingBag, ExternalLink } from "lucide-react";
import { books, bookCategories } from "@/data/books";
import type { BookCategory, BookPlatform } from "@/data/books";
import { BookCard } from "@/components/site/book-card";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { cn } from "@/lib/utils";

type Filter = "All" | BookCategory;
type PlatformFilter = "All" | BookPlatform;

const filters: Filter[] = [
  "All",
  "Gemstones",
  "Diamonds & Jewellery",
  "Science & Philosophy",
  "Fiction & Speculative Thought",
];

const platformFilters: { label: string; value: PlatformFilter }[] = [
  { label: "All platforms", value: "All" },
  { label: "Amazon / KDP", value: "amazon" },
  { label: "Gumroad", value: "gumroad" },
  { label: "Both", value: "both" },
];

function matchesPlatform(book: { platform: BookPlatform }, filter: PlatformFilter) {
  if (filter === "All") return true;
  if (filter === "both") return book.platform === "both";
  return book.platform === filter || book.platform === "both";
}

export function BooksClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as BookCategory | null;

  const [active, setActive] = useState<Filter>(
    initialCategory && filters.includes(initialCategory) ? initialCategory : "All",
  );
  const [platform, setPlatform] = useState<PlatformFilter>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return books
      .filter((b) => {
        const matchesCategory = active === "All" || b.category === active;
        const matchesP = matchesPlatform(b, platform);
        const q = query.trim().toLowerCase();
        const matchesQuery =
          !q ||
          b.title.toLowerCase().includes(q) ||
          b.subtitle.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q);
        return matchesCategory && matchesP && matchesQuery;
      })
      .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  }, [active, platform, query]);

  return (
    <>
      <PageHero
        eyebrow="The Catalogue"
        title="Books"
        subtitle="From gemstones to consciousness — a library across four worlds."
        description="Every title below is a complete work — a gemstone guide, a scientific inquiry, or a speculative journey. Use the filters to move between categories and platforms."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Books" }]}
      />

      <Section>
        {/* Controls */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <SlidersHorizontal
              className="h-4 w-4 text-muted-foreground"
              aria-hidden="true"
            />
            <span className="sr-only">Filter by category</span>
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] transition-colors",
                  active === f
                    ? "border-gold bg-gold text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-gold/50 hover:text-gold",
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-sm">
            <label htmlFor="book-search" className="sr-only">
              Search books
            </label>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="book-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title or topic…"
              className="h-10 w-full rounded-md border border-border bg-background pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40"
            />
          </div>
        </div>

        {/* Platform filter */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Platform:
          </span>
          {platformFilters.map((p) => (
            <button
              key={p.value}
              type="button"
              onClick={() => setPlatform(p.value)}
              aria-pressed={platform === p.value}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md border px-3 py-1 text-xs font-medium transition-colors",
                platform === p.value
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-border text-muted-foreground hover:border-gold/40 hover:text-gold",
              )}
            >
              {p.value === "gumroad" && (
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              )}
              {p.value === "amazon" && (
                <ShoppingBag className="h-3 w-3" aria-hidden="true" />
              )}
              {p.label}
            </button>
          ))}
        </div>

        {/* Results meta */}
        <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            Showing{" "}
            <span className="text-foreground">{filtered.length}</span> of{" "}
            <span className="text-foreground">{books.length}</span> titles
            {active !== "All" && (
              <>
                {" "}
                in <span className="text-gold">{active}</span>
              </>
            )}
            {platform !== "All" && (
              <>
                {" "}
                · <span className="text-gold">{platform}</span> platform
              </>
            )}
          </span>
          {(active !== "All" || query || platform !== "All") && (
            <button
              type="button"
              onClick={() => {
                setActive("All");
                setPlatform("All");
                setQuery("");
              }}
              className="text-gold transition-colors hover:text-foreground"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="mt-12 rounded-lg border border-dashed border-border p-12 text-center">
            <p className="font-display text-xl text-foreground">
              No books match that query.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different keyword, or reset the filters above.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        )}

        {/* Featured Gumroad series block */}
        <div className="mt-20 border-t border-border pt-12">
          <div className="rounded-xl border border-gold/25 bg-gradient-to-br from-gold/5 to-transparent p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  Gumroad Series
                </span>
                <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
                  Diamond &amp; Jewellery Knowledge Series
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Ten professional volumes on diamond basics, grading,
                  manufacturing, pricing, sales, jewellery design — plus one
                  speculative title. Available exclusively on Gumroad,
                  separately from the Amazon / KDP catalogue.
                </p>
              </div>
              <Link
                href="/diamond-jewellery-books"
                className="inline-flex h-11 flex-shrink-0 items-center justify-center gap-2 rounded-md bg-gold px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90"
              >
                View Gumroad series
              </Link>
            </div>
          </div>
        </div>

        {/* Category shortcuts */}
        <div className="mt-12">
          <h2 className="font-display text-xl text-foreground">
            Browse by category
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {bookCategories.map((cat) => {
              const count = books.filter((b) => b.category === cat).length;
              return (
                <Link
                  key={cat}
                  href={`/books?category=${encodeURIComponent(cat)}`}
                  className="rounded-md border border-border bg-card px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-gold/50 hover:text-gold"
                >
                  {cat}{" "}
                  <span className="text-xs text-muted-foreground">
                    ({count})
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
