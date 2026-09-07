import Link from "next/link";
import { Mail, Youtube, Twitter, Linkedin, Instagram, BookOpen } from "lucide-react";
import { siteConfig } from "@/data/site";
import { author } from "@/data/books";

const footerNav = {
  Explore: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Books", href: "/books" },
    { label: "The Birth of God", href: "/the-birth-of-god" },
  ],
  Series: [
    { label: "Ratna Gyan Academy", href: "/ratna-gyan-academy" },
    { label: "Diamond & Jewellery Books", href: "/diamond-jewellery-books" },
    { label: "Research & Ideas", href: "/research" },
    { label: "Media", href: "/media" },
    { label: "Contact", href: "/contact" },
  ],
};

const socials = [
  {
    label: "Amazon Author Central",
    href: author.links.amazonAuthorCentral,
    icon: BookOpen,
  },
  { label: "YouTube", href: author.links.youtube, icon: Youtube },
  { label: "Twitter / X", href: author.links.twitter, icon: Twitter },
  { label: "LinkedIn", href: author.links.linkedin, icon: Linkedin },
  { label: "Instagram", href: author.links.instagram, icon: Instagram },
  { label: "Email", href: `mailto:${author.links.email}`, icon: Mail },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/40 text-gold">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-display text-lg tracking-wide">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Author • Researcher • Diamond & Gemstone Professional. Exploring
              matter, mind, technology, belief and the unanswered questions of
              human existence through books and research.
            </p>
          </div>

          {/* Navigation columns */}
          <nav
            aria-label="Footer"
            className="md:col-span-4 grid grid-cols-2 gap-8"
          >
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Explore
              </h3>
              <ul className="mt-4 space-y-3">
                {footerNav.Explore.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Series
              </h3>
              <ul className="mt-4 space-y-3">
                {footerNav.Series.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Social links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Connect
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                    aria-label={label}
                    title={label}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {author.name}. All rights reserved.
          </p>
          <p>
            Official author website.{" "}
            <span className="text-muted-foreground/70">
              Placeholder links pending verification.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
