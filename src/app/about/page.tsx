import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { author } from "@/data/books";

export const metadata: Metadata = {
  title: "About the Author",
  description: `Biography of ${author.name}, Indian author, entrepreneur, researcher and diamond & gemstone professional. His writing spans diamonds, gemology, AI, consciousness, civilization and speculative fiction.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About ${author.name}`,
    description: `Indian author, entrepreneur, researcher and diamond & gemstone professional.`,
    url: "/about",
    type: "profile",
  },
};

const timeline = [
  {
    phase: "Foundation",
    title: "A life among diamonds",
    body: "Shailendra Srivastava's professional world begins in the diamond and jewellery trade — the grading counter, the loupe, the lab report, the bazaar. He brings decades of first-hand understanding of how a stone is measured, valued and worn.",
  },
  {
    phase: "Practice",
    title: "Diamond & gemstone professional",
    body: "As an entrepreneur and gemstone professional, his daily work sits at the intersection of science, commerce and tradition. That vantage point — between the laboratory and the marketplace — informs every gemological book he writes.",
  },
  {
    phase: "Inquiry",
    title: "Researcher and author",
    body: "Beyond gemology, his research reaches into artificial intelligence, human evolution, consciousness, civilization, philosophy and speculative thought. His flagship book, THE BIRTH OF GOD, asks how the idea of God emerged in the human mind.",
  },
];

const interestGroups: { label: string; items: string[] }[] = [
  {
    label: "Gems & Jewellery",
    items: ["Diamonds", "Gemstones", "Gemology", "Jewellery"],
  },
  {
    label: "Mind & Matter",
    items: ["Artificial Intelligence", "Science", "Human Evolution", "Consciousness"],
  },
  {
    label: "Belief & Civilization",
    items: ["Civilization", "Philosophy", "Speculative Thought"],
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />
      <PageHero
        eyebrow="About the Author"
        title={author.name}
        subtitle={author.tagline}
        description={`${author.nationality} author, entrepreneur, researcher and diamond & gemstone professional. His writing moves between the precise world of gemology and the speculative edges of mind, belief and civilization.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Biography */}
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Biography"
              title="Between the loupe and the long view of human thought."
            />

            <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/80">
              <p>
                Shailendra Srivastava is an Indian author, entrepreneur,
                researcher and diamond & gemstone professional. His career has
                been shaped by two seemingly distant worlds — the exacting
                science of gemstones, and the wide horizon of human ideas. He
                writes to bridge them.
              </p>
              <p>
                On one side of his work is the laboratory and the bazaar:
                diamonds, gemology, jewellery craft, grading, valuation and
                trade. On the other is the long shelf of inquiry — artificial
                intelligence, human evolution, consciousness, civilization,
                philosophy and speculative thought. The same mind that learns
                to read a stone learns, in his books, to read an idea.
              </p>
              <p>
                His gemological writing is collected under the{" "}
                <Link
                  href="/ratna-gyan-academy"
                  className="text-gold underline-offset-4 hover:underline"
                >
                  Ratna Gyan Academy
                </Link>{" "}
                series — a Hindi reference library dedicated to the science,
                history, trade and tradition of Indian gemstones. Each volume
                takes a single stone and treats it as a complete subject,
                from mineralogy to market.
              </p>
              <p>
                His flagship English title,{" "}
                <Link
                  href="/the-birth-of-god"
                  className="text-gold underline-offset-4 hover:underline"
                >
                  THE BIRTH OF GOD
                </Link>
                , studies how the idea of God may have emerged in the human
                mind — through evolution, mortality awareness, dreams,
                imagination, agency detection, language, culture, religion,
                civilization, consciousness, science and philosophy. It is an
                inquiry, not a verdict.
              </p>
              <p>
                Through this dual practice — measuring stones and asking
                questions — Shailendra Srivastava's work builds a quiet,
                persistent thesis: that knowledge, whether of a ruby or of a
                belief, is always a study of how matter and meaning meet.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/books"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gold px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90"
              >
                Explore the books
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-gold/50 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Side panel */}
          <aside className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-lg text-foreground">
                  At a glance
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Nationality</dt>
                    <dd className="text-right text-foreground">Indian</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Roles</dt>
                    <dd className="text-right text-foreground">
                      Author • Entrepreneur • Researcher
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Flagship book</dt>
                    <dd className="text-right text-foreground">
                      The Birth of God
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Series</dt>
                    <dd className="text-right text-foreground">
                      Ratna Gyan Academy
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-lg border border-gold/30 bg-gradient-to-br from-gold/5 to-transparent p-6">
                <Quote className="h-6 w-6 text-gold" aria-hidden="true" />
                <p className="mt-3 font-display text-lg italic leading-relaxed text-foreground">
                  “The same mind that learns to read a stone learns, in his
                  books, to read an idea.”
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  — Editor's note
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="border-t border-border bg-secondary/30">
        <SectionHeading
          eyebrow="The arc so far"
          title="A practice with two horizons"
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {timeline.map((t) => (
            <div
              key={t.phase}
              className="flex h-full flex-col rounded-lg border border-border bg-card p-6"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                {t.phase}
              </span>
              <h3 className="mt-3 font-display text-xl text-foreground">
                {t.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Interests */}
      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Writing interests"
          title="Subjects he returns to"
          description="A map of the territory his books and research continue to explore."
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {interestGroups.map((g) => (
            <div
              key={g.label}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="font-display text-lg text-gold">{g.label}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
