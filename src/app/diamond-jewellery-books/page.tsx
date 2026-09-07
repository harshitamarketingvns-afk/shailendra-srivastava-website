import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Gem, BookMarked, ShoppingCart, Layers } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { BookCard } from "@/components/site/book-card";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import {
  getBooksBySeries,
  getBooksByPlatform,
  author,
} from "@/data/books";

export const metadata: Metadata = {
  title:
    "Diamond & Jewellery Knowledge Series — Gumroad Books by Shailendra Srivastava",
  description:
    "A professional Gumroad book series by Shailendra Srivastava covering diamond basics, grading, cutting & polishing, planning & marking, manufacturing, pricing, natural vs lab-grown, sales, jewellery design and an alternate-universe title. Practical education for the diamond and jewellery trade.",
  alternates: { canonical: "/diamond-jewellery-books" },
  openGraph: {
    title:
      "Diamond & Jewellery Knowledge Series — Shailendra Srivastava (Gumroad)",
    description:
      "Ten practical volumes on diamonds, grading, manufacturing, pricing, sales and jewellery design — available on Gumroad.",
    url: "/diamond-jewellery-books",
    type: "website",
    siteName: author.name,
  },
};

const pillars = [
  {
    icon: Gem,
    title: "Foundations",
    body: "Diamond Basics and Diamond Grading — the vocabulary, the 4Cs and the lab-report language every professional must own.",
  },
  {
    icon: Layers,
    title: "Manufacturing",
    body: "Cutting & Polishing, Planning & Marking, and the full Manufacturing Process — from rough to polished, step by step.",
  },
  {
    icon: ShoppingCart,
    title: "Trade & Sales",
    body: "Pricing Guide, Natural vs Lab-Grown, and Sales & Customer Handling — the commercial and human side of the counter.",
  },
  {
    icon: BookMarked,
    title: "Design & Imagination",
    body: "Jewellery Design Basics and the speculative title दूसरी धरती — alternate-universe fiction — close the series.",
  },
];

export default function DiamondJewelleryBooksPage() {
  const seriesBooks = getBooksBySeries("Diamond & Jewellery Knowledge Series");
  const gumroadBooks = getBooksByPlatform("gumroad");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Diamond & Jewellery Books", url: "/diamond-jewellery-books" },
        ]}
      />

      <PageHero
        eyebrow="Gumroad Book Series"
        title="Diamond & Jewellery Knowledge Series"
        subtitle="Professional education for the diamond and jewellery trade — available on Gumroad."
        description="A ten-volume practical library covering diamond basics, grading, cutting, planning, manufacturing, pricing, the natural vs lab-grown debate, sales, jewellery design — and one speculative detour into an alternate universe."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Diamond & Jewellery Books" },
        ]}
      >
        <div className="flex flex-wrap gap-4">
          <Link
            href="#series"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90"
          >
            View the series
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/books"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gold/50 px-7 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
          >
            All books
          </Link>
        </div>
      </PageHero>

      {/* Platform note */}
      <Section className="border-b border-border">
        <div className="rounded-lg border border-gold/25 bg-gradient-to-br from-gold/5 to-transparent p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md border border-gold/30 bg-gold/5 text-gold">
                <ShoppingCart className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-xl text-foreground md:text-2xl">
                  Available on Gumroad
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Every title in this series is sold on Gumroad. Amazon / KDP
                  titles — the Ratna Gyan Academy gemstone series, the
                  flagship{" "}
                  <span className="text-foreground">THE BIRTH OF GOD</span>,
                  and other standalone books — remain available through the
                  main{" "}
                  <Link
                    href="/books"
                    className="text-gold underline-offset-4 hover:underline"
                  >
                    Books
                  </Link>{" "}
                  page. Purchase buttons below are placeholders until real
                  Gumroad links are provided.
                </p>
              </div>
            </div>
            <a
              href={author.links.gumroadProfile}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex h-11 flex-shrink-0 items-center justify-center gap-2 rounded-md border border-gold/50 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
            >
              <ShoppingCart className="h-4 w-4" aria-hidden="true" />
              Visit Gumroad profile
            </a>
          </div>
        </div>
      </Section>

      {/* Four pillars */}
      <Section className="border-b border-border">
        <SectionHeading
          eyebrow="Four arcs"
          title="One series, four reading arcs."
          description="The ten volumes move from foundations through manufacturing to trade, and finally to design and imagination."
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-lg border border-border bg-card p-6 card-lift hover:card-lift-hover"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/30 bg-gold/5 text-gold">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Series grid */}
      <Section id="series" className="bg-secondary/30 border-b border-border">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="The volumes"
            title="The Diamond & Jewellery Knowledge Series"
            description="Ten practical volumes on diamonds, grading, manufacturing, pricing, sales and jewellery design. Click any title for full details and the Gumroad purchase link."
          />
          <span className="text-sm text-muted-foreground">
            {seriesBooks.length} volumes · {gumroadBooks.length} Gumroad titles in catalogue
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {seriesBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-xl border border-gold/20 bg-gradient-to-br from-secondary/60 to-background p-10 md:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              Build your diamond knowledge, one volume at a time.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Whether you are a student of gemology, a jeweller, a sales
              professional or a curious buyer, the Diamond &amp; Jewellery
              Knowledge Series gives you the practical vocabulary of the
              trade.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gold px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90"
              >
                Enquire about the series
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/books?category=Diamonds+%26+Jewellery"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-gold/50 px-7 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
              >
                View diamond books
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
