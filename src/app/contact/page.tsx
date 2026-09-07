import { Mail, MapPin, Youtube, Twitter, Linkedin, Instagram, BookOpen } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/section";
import { ContactForm } from "./contact-form";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { author } from "@/data/books";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${author.name} for book enquiries, media and interviews, business, research collaboration, or general questions.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${author.name}`,
    description: `Book enquiries, media, business, research collaboration and general enquiries.`,
    url: "/contact",
    type: "website",
    siteName: author.name,
  },
};

const inquiryTypes = [
  "Book Enquiry",
  "Media / Interview",
  "Business",
  "Research Collaboration",
  "General Enquiry",
];

const socials = [
  {
    label: "Amazon Author Central",
    href: author.links.amazonAuthorCentral,
    icon: BookOpen,
    handle: "@shailendrasrivastava",
  },
  {
    label: "YouTube",
    href: author.links.youtube,
    icon: Youtube,
    handle: "@shailendrasrivastava",
  },
  {
    label: "Twitter / X",
    href: author.links.twitter,
    icon: Twitter,
    handle: "@shailendraauthor",
  },
  {
    label: "LinkedIn",
    href: author.links.linkedin,
    icon: Linkedin,
    handle: "in/shailendrasrivastava",
  },
  {
    label: "Instagram",
    href: author.links.instagram,
    icon: Instagram,
    handle: "@shailendraauthor",
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      <PageHero
        eyebrow="Get in touch"
        title="Contact"
        subtitle="Book enquiries, media, business, research collaboration and general enquiries are all welcome."
        description="Use the form below to write directly. Please choose the inquiry type that best matches your message — it helps the right reply reach you faster."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Send a message"
              title="Write to the author"
              description="Fields marked with an asterisk are required. You should expect a reply within a few business days."
            />
            <div className="mt-8">
              <ContactForm />
            </div>

            {/* Inquiry type reference */}
            <div className="mt-10 rounded-lg border border-border bg-card p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Inquiry types
              </h3>
              <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {inquiryTypes.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Side panel */}
          <aside className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-lg text-foreground">
                  Direct details
                </h3>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail
                      className="mt-0.5 h-4 w-4 text-gold"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Email
                      </p>
                      <a
                        href={`mailto:${author.links.email}`}
                        className="text-foreground transition-colors hover:text-gold"
                      >
                        {author.links.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 h-4 w-4 text-gold"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Based in
                      </p>
                      <p className="text-foreground">India</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-lg text-foreground">
                  Find the author online
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Placeholder links — replace with verified accounts before
                  launch.
                </p>
                <ul className="mt-4 space-y-3">
                  {socials.map(({ label, href, icon: Icon, handle }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="group flex items-center gap-3 rounded-md border border-border bg-background/40 px-3 py-2.5 transition-colors hover:border-gold/50 hover:bg-gold/5"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/30 text-gold">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="flex flex-col leading-tight">
                          <span className="text-sm font-medium text-foreground">
                            {label}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {handle}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-gold/25 bg-gradient-to-br from-gold/5 to-transparent p-6">
                <h3 className="font-display text-base text-foreground">
                  For media &amp; press
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  If you are a journalist, podcaster or editor and need a
                  faster turnaround, please select &ldquo;Media / Interview&rdquo;
                  in the form and include your outlet and deadline.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
