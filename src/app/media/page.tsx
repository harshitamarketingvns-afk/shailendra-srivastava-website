import Link from "next/link";
import { ArrowRight, Clapperboard, PlayCircle, Radio, Newspaper, Mic, Youtube, Film, Clapperboard as Shorts } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { author } from "@/data/books";

export const metadata: Metadata = {
  title: "Media — Videos, Interviews & Press",
  description: `Media hub for ${author.name}: book trailers, YouTube videos, interviews, shorts, podcasts and press coverage. Placeholder links will be replaced as media becomes available.`,
  alternates: { canonical: "/media" },
  openGraph: {
    title: `Media — ${author.name}`,
    description: `Book trailers, videos, interviews, shorts, podcasts and press.`,
    url: "/media",
    type: "website",
    siteName: author.name,
  },
};

const mediaSections = [
  {
    icon: Film,
    title: "Book Trailers",
    body: "Short cinematic trailers for new and forthcoming titles, including THE BIRTH OF GOD and the Ratna Gyan Academy series.",
    cta: "Watch trailers",
  },
  {
    icon: Youtube,
    title: "YouTube",
    body: "Long-form videos on diamonds, gemstones, gemology, AI, consciousness and the long questions of belief and civilization.",
    cta: "Visit channel",
  },
  {
    icon: PlayCircle,
    title: "Interviews",
    body: "Conversations with the author on the origins of belief, the science of gemstones and the future of mind.",
    cta: "Watch interviews",
  },
  {
    icon: Clapperboard,
    title: "Videos",
    body: "Standalone explainer videos and lectures on subjects from the research section.",
    cta: "Browse videos",
  },
  {
    icon: Shorts,
    title: "Shorts",
    body: "Bite-sized vertical videos — single ideas, single questions, single stones.",
    cta: "Watch shorts",
  },
  {
    icon: Mic,
    title: "Podcasts",
    body: "Audio conversations across Shailendra Srivastava's fields of interest — gemology, consciousness, AI, philosophy.",
    cta: "Listen",
  },
  {
    icon: Radio,
    title: "Press",
    body: "Press coverage, features and mentions. To request an interview, please use the contact page.",
    cta: "Read press",
  },
  {
    icon: Newspaper,
    title: "Articles & Notes",
    body: "Long-form written pieces by and about the author, mirroring the Research & Ideas section.",
    cta: "Read articles",
  },
];

export default function MediaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Media", url: "/media" },
        ]}
      />

      <PageHero
        eyebrow="Media"
        title="Watch, listen and read."
        subtitle="Book trailers, videos, interviews, shorts, podcasts and press."
        description="A single home for everything Shailendra Srivastava publishes in audio and video — alongside press coverage and written features. Placeholder cards will be replaced with real embeds as content goes live."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media" },
        ]}
      >
        <div className="flex flex-wrap gap-4">
          <a
            href={author.links.youtube}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90"
          >
            <Youtube className="h-4 w-4" aria-hidden="true" />
            Visit YouTube channel
          </a>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gold/50 px-7 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
          >
            Request an interview
          </Link>
        </div>
      </PageHero>

      {/* Media grid */}
      <Section className="border-b border-border">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mediaSections.map(({ icon: Icon, title, body, cta }) => (
            <article
              key={title}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 card-lift hover:card-lift-hover"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-md border border-gold/30 bg-gold/5 text-gold">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-display text-xl text-foreground">
                {title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                {cta}
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </article>
          ))}
        </div>
      </Section>

      {/* Featured channel CTA */}
      <Section className="bg-secondary/30">
        <div className="relative overflow-hidden rounded-xl border border-gold/20 bg-gradient-to-br from-secondary/60 to-background p-10 md:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              The full library is on its way.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Media content for THE BIRTH OF GOD and the Ratna Gyan Academy
              series will be added here as it is published. Subscribe to the
              YouTube channel and follow the contact page for updates.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={author.links.youtube}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gold px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
                Subscribe on YouTube
              </a>
              <Link
                href="/books"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-gold/50 px-7 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
              >
                See the books
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
