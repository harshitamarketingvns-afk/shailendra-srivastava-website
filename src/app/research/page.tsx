import Link from "next/link";
import { ArrowRight, Atom, Brain, Cpu, Dna, FlaskConical, Globe2, Microscope, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { author } from "@/data/books";

export const metadata: Metadata = {
  title: "Research & Ideas",
  description: `Research interests of ${author.name}: diamonds and gemology, artificial intelligence, human consciousness, human evolution, origin of religion, science, philosophy, future technology and civilization.`,
  alternates: { canonical: "/research" },
  openGraph: {
    title: `Research & Ideas — ${author.name}`,
    description: `Long-form inquiry into diamonds, AI, consciousness, evolution, religion, philosophy, future technology and civilization.`,
    url: "/research",
    type: "website",
    siteName: author.name,
  },
};

const sections = [
  {
    icon: Atom,
    title: "Diamonds & Gemology",
    body: "The science and commerce of stones. Where mineralogy, optical behaviour, valuation and trade meet — and where a single ruby opens onto a long history of geology, kingship and craft.",
    tags: ["Mineralogy", "Grading", "Valuation", "Trade", "Fraud detection"],
  },
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    body: "Intelligence that is built rather than born. The research follows AI from its cognitive roots to its present-day consequences — for knowledge work, creativity, identity and labour.",
    tags: ["Machine learning", "Cognition", "Tools", "Ethics"],
  },
  {
    icon: Brain,
    title: "Human Consciousness",
    body: "The mind watching the mind. How subjective experience arises, how it recurses on itself, and how it produces both religion and science from the same neural architecture.",
    tags: ["Subjectivity", "Recursion", "Self-model", "Phenomenology"],
  },
  {
    icon: Dna,
    title: "Human Evolution",
    body: "The deep timeline that made a brain capable of asking religious questions. Evolution, language, sociality and the long path from primate cognition to civilisation.",
    tags: ["Cognition", "Language", "Sociality", "Tool use"],
  },
  {
    icon: Sparkles,
    title: "Origin of Religion",
    body: "Where the God-concept comes from. Mortality awareness, dreams, agency detection, ritual and myth — read together as a single long story of how belief became possible.",
    tags: ["Belief", "Ritual", "Myth", "Cognitive science of religion"],
  },
  {
    icon: FlaskConical,
    title: "Science & Philosophy",
    body: "Two ways of asking the same world. The research treats science and philosophy as complementary forms of inquiry — one empirical, one conceptual — and refuses to collapse either into the other.",
    tags: ["Inquiry", "Method", "Metaphysics", "Epistemology"],
  },
  {
    icon: Microscope,
    title: "Future Technology",
    body: "What is coming, and how to think about it. AI, biotechnology, materials, energy — read not as hype but as a continuation of the same civilisational question.",
    tags: ["AI", "Bio", "Materials", "Long-term thinking"],
  },
  {
    icon: Globe2,
    title: "Civilization",
    body: "The largest container of all the above. How cities, states, religions and technologies together make — and unmake — the worlds human beings live inside.",
    tags: ["Cities", "States", "Long duration", "Collapse"],
  },
];

export default function ResearchPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Research & Ideas", url: "/research" },
        ]}
      />

      <PageHero
        eyebrow="Research & Ideas"
        title="The territory of inquiry"
        subtitle="Eight subjects, one mind."
        description="A working map of the subjects Shailendra Srivastava returns to — in his books, his research notes, and forthcoming articles. Each subject will, in time, host its own collection of writing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Research & Ideas" },
        ]}
      />

      {/* Sections grid */}
      <Section className="border-b border-border">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {sections.map(({ icon: Icon, title, body, tags }) => (
            <article
              key={title}
              className="group flex flex-col rounded-lg border border-border bg-card p-7 card-lift hover:card-lift-hover"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-gold/30 bg-gold/5 text-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="font-display text-xl text-foreground md:text-2xl">
                  {title}
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                Articles on this subject — coming soon.
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </article>
          ))}
        </div>
      </Section>

      {/* Coming-soon note */}
      <Section className="bg-secondary/30">
        <div className="mx-auto max-w-3xl rounded-lg border border-gold/25 bg-gradient-to-br from-gold/5 to-transparent p-8 text-center md:p-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            A note on what is coming
          </span>
          <h2 className="mt-4 font-display text-2xl text-foreground md:text-3xl">
            Articles, essays and notes will be published here.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            This section is the future home of long-form writing by Shailendra
            Srivastava — articles, research notes and short essays across the
            eight subjects above. The architecture supports per-topic feeds
            and per-article pages. Sign up for updates via the contact page to
            be notified when the first pieces go live.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gold px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90"
            >
              Notify me
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
