import Link from "next/link";
import { ArrowRight, Brain, Compass, Globe2, Languages, Sparkles, MessageSquareQuote } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { BreadcrumbJsonLd, BookJsonLd } from "@/components/site/json-ld";
import { getFeaturedBook, author } from "@/data/books";

export const metadata: Metadata = {
  title: "The Birth of God — How the Human Mind Created the Idea of God",
  description:
    "THE BIRTH OF GOD studies the historical and cognitive emergence of the God-concept. It does not claim to prove or disprove the existence of God. Instead it asks: How did the idea of God emerge in the human mind?",
  alternates: { canonical: "/the-birth-of-god" },
  openGraph: {
    type: "book",
    title: "THE BIRTH OF GOD — Shailendra Srivastava",
    description:
      "How the Human Mind Created the Idea of God. An inquiry into the historical and cognitive emergence of the God-concept.",
    url: "/the-birth-of-god",
    authors: [author.name],
    siteName: author.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "THE BIRTH OF GOD — Shailendra Srivastava",
    description:
      "How the Human Mind Created the Idea of God. An inquiry into the historical and cognitive emergence of the God-concept.",
  },
};

const topics = [
  { label: "Human Evolution", icon: Brain, body: "How the long arc of evolution shaped a brain capable of asking religious questions." },
  { label: "Mortality Awareness", icon: Sparkles, body: "Awareness of death — and the imaginative work of refusing it — as a seed of the God-concept." },
  { label: "Dreams", icon: MessageSquareQuote, body: "Why dreams may have given early minds their first image of an elsewhere." },
  { label: "Imagination", icon: Sparkles, body: "The cognitive capacity to think of what is not, and how it made the divine thinkable." },
  { label: "Agency Detection", icon: Brain, body: "The mind's tendency to detect intention — even where there is none — and its consequences." },
  { label: "Language", icon: Languages, body: "How naming, narrative and abstraction turned vague intuition into shared belief." },
  { label: "Culture", icon: Globe2, body: "The way culture stabilises and transmits the God-concept across generations." },
  { label: "Religion", icon: Compass, body: "How ritual, myth and community turn private belief into public institution." },
  { label: "Civilization", icon: Globe2, body: "The role of organised religion in the rise of cities, kings and empires." },
  { label: "Consciousness", icon: Brain, body: "The recursive mind watching itself — and mistaking the watcher for the divine." },
  { label: "Science", icon: Sparkles, body: "What happens to the God-concept when science becomes a competing way of knowing." },
  { label: "Philosophy", icon: Compass, body: "How philosophy refines, defends, doubts and re-asks the original question." },
];

export default function BirthOfGodPage() {
  const book = getFeaturedBook();

  return (
    <>
      {book && <BookJsonLd book={book} />}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "The Birth of God", url: "/the-birth-of-god" },
        ]}
      />

      <PageHero
        eyebrow="Flagship Book"
        title={
          <>
            THE BIRTH
            <br />
            OF <span className="gold-text">GOD</span>
          </>
        }
        subtitle="How the Human Mind Created the Idea of God"
        description="An inquiry, not a verdict. The book studies the historical and cognitive emergence of the God-concept — it does not claim to prove or disprove the existence of God."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "The Birth of God" },
        ]}
      >
        <div className="flex flex-wrap gap-4">
          {book?.amazonUrl && book.amazonUrl !== "#" && (
            <a
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90"
            >
              Buy on Amazon
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          <Link
            href="/books/the-birth-of-god"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gold/50 px-7 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
          >
            View book details
          </Link>
        </div>
      </PageHero>

      {/* Central question */}
      <Section className="border-b border-border">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            The Central Question
          </span>
          <h2 className="mt-5 font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
            This book does not begin by asking whether God exists. It asks a
            different question:
          </h2>
          <p className="mt-8 font-display text-2xl italic text-gold md:text-3xl">
            “How did the idea of God emerge in the human mind?”
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            THE BIRTH OF GOD traces how the idea of God may have formed across
            human evolution — through mortality awareness, dreams, imagination,
            agency detection, language, culture, religion, civilization,
            consciousness, science and philosophy. The book is an inquiry into
            the mind that asks, not a verdict on the divine that answers.
          </p>
        </div>
      </Section>

      {/* Topics grid */}
      <Section className="bg-secondary/30 border-b border-border">
        <SectionHeading
          eyebrow="The territory"
          title="What the book studies"
          description="Twelve interlocking subjects that together form the cognitive and historical landscape of the God-concept."
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map(({ label, icon: Icon, body }) => (
            <div
              key={label}
              className="group rounded-lg border border-border bg-card p-6 card-lift hover:card-lift-hover"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/30 bg-gold/5 text-gold transition-colors group-hover:bg-gold/15">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg text-foreground">
                  {label}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Methodology */}
      <Section className="border-b border-border">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Approach"
              title="An inquiry, not a doctrine."
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
              <p>
                THE BIRTH OF GOD is a work of inquiry. It does not argue that
                God exists, and it does not argue that God does not exist. Its
                subject is the idea itself — how it came to be, how it
                changed, and how it continues to live in the human mind.
              </p>
              <p>
                The book draws on what is known from human evolution, the
                cognitive sciences, the history of language and religion, and
                the long conversation of philosophy. It treats all of these as
                pieces of a single question.
              </p>
              <p>
                The reader is invited to follow the question wherever it
                leads — without the pressure of a pre-decided answer.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-gold/25 bg-gradient-to-br from-gold/5 to-transparent p-8 md:p-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              At a glance
            </span>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Title
                </dt>
                <dd className="mt-1 font-display text-lg text-foreground">
                  THE BIRTH OF GOD
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Subtitle
                </dt>
                <dd className="mt-1 text-foreground">
                  How the Human Mind Created the Idea of God
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Author
                </dt>
                <dd className="mt-1 text-foreground">{author.name}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Language
                </dt>
                <dd className="mt-1 text-foreground">English</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Category
                </dt>
                <dd className="mt-1 text-foreground">Science & Philosophy</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-xl border border-gold/20 bg-gradient-to-br from-secondary/60 to-background p-10 text-center md:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gold/5 blur-3xl"
          />
          <h2 className="relative font-display text-3xl text-foreground md:text-4xl">
            Read the question for yourself.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            THE BIRTH OF GOD is available now. Buy it on Amazon, or browse the
            full catalogue of Shailendra Srivastava's books.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {book?.amazonUrl && book.amazonUrl !== "#" && (
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90"
              >
                Buy on Amazon
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            <Link
              href="/books"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gold/50 px-7 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
            >
              See all books
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
