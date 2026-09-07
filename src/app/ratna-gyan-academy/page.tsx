import Link from "next/link";
import { ArrowRight, Gem, BookMarked, Library } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { BookCard } from "@/components/site/book-card";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { getBooksBySeries, author } from "@/data/books";

export const metadata: Metadata = {
  title: "Ratna Gyan Academy — A Hindi Gemstone Book Series",
  description:
    "Ratna Gyan Academy is a Hindi reference book series by Shailendra Srivastava that explains gemstones through science, history, trade and tradition. Volumes include माणिक, ओपल, पुखराज, रुद्राक्ष, नीलम, पन्ना, मूंगा and मोती.",
  alternates: { canonical: "/ratna-gyan-academy" },
  openGraph: {
    title: "Ratna Gyan Academy — Shailendra Srivastava",
    description:
      "रत्नों को विज्ञान, इतिहास, व्यापार और परंपरा के दृष्टिकोण से समझने की एक पुस्तक शृंखला।",
    url: "/ratna-gyan-academy",
    type: "website",
    siteName: author.name,
  },
};

const pillars = [
  {
    icon: Gem,
    title: "Science",
    body: "Mineralogy, optical properties, formation and identification — the laboratory side of every stone.",
  },
  {
    icon: Library,
    title: "History",
    body: "How each gemstone travelled through time, dynasties and cultures to reach the present-day bazaar.",
  },
  {
    icon: BookMarked,
    title: "Trade",
    body: "Practical knowledge of grading, valuation, fraud and buying — written from inside the marketplace.",
  },
  {
    icon: Gem,
    title: "Tradition",
    body: "Astrology, ritual and the long cultural life of gemstones in Indian civilisation.",
  },
];

export default function RatnaGyanAcademyPage() {
  const seriesBooks = getBooksBySeries("Ratna Gyan Academy");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Ratna Gyan Academy", url: "/ratna-gyan-academy" },
        ]}
      />

      <PageHero
        eyebrow="Gemstone Book Series"
        title="Ratna Gyan Academy"
        subtitle="रत्नों को विज्ञान, इतिहास, व्यापार और परंपरा के दृष्टिकोण से समझने की एक पुस्तक शृंखला।"
        description="A Hindi reference library on Indian gemstones. Each volume takes a single stone and treats it as a complete subject — its science, its history, its trade and its tradition."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ratna Gyan Academy" },
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

      {/* Four pillars */}
      <Section className="border-b border-border">
        <SectionHeading
          eyebrow="Four perspectives"
          title="One stone, four ways of knowing."
          description="Every Ratna Gyan Academy book is structured around the same four perspectives, so the reader can move confidently from mineralogy to market."
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
            title="The Ratna Gyan Academy series"
            description="Hindi reference volumes on Indian gemstones. Click any title for full details, language and Amazon availability."
          />
          <span className="text-sm text-muted-foreground">
            {seriesBooks.length} volumes
          </span>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {seriesBooks.map((book) => (
            <BookCard key={book.slug} book={book} variant="compact" />
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
              रत्न विज्ञान की ओर एक नज़र।
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Whether you are a jeweller, a student of gemology, or a curious
              buyer, the Ratna Gyan Academy series gives you the language to
              read a stone with confidence.
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
                href="/books?category=Gemstones"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-gold/50 px-7 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
              >
                View gemstone books
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
