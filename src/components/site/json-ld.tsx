import { author } from "@/data/books";
import { siteConfig } from "@/data/site";

/**
 * Renders Schema.org JSON-LD for the author (Person).
 * Used in the root layout so every page inherits author identity.
 */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    alternateName: author.displayName,
    jobTitle: "Author",
    description: `${author.name} is an ${author.nationality} ${author.roles.join(", ")}. ${author.tagline}.`,
    nationality: "IN",
    url: siteConfig.domain,
    image: `${siteConfig.domain}/author-portrait.jpg`,
    sameAs: [
      author.links.amazonAuthorCentral,
      author.links.youtube,
      author.links.twitter,
      author.links.linkedin,
      author.links.instagram,
    ],
    knowsAbout: author.interests,
    email: `mailto:${author.links.email}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface BookJsonLdProps {
  book: {
    title: string;
    subtitle: string;
    author: string;
    description: string;
    language: string;
    category: string;
    platform: "amazon" | "gumroad" | "both";
    amazonUrl: string;
    gumroadUrl: string;
    slug: string;
  };
}

/**
 * Renders Schema.org JSON-LD for an individual book.
 * Emits an Offer for every storefront that has a real (non-placeholder) URL.
 */
export function BookJsonLd({ book }: BookJsonLdProps) {
  const offers: unknown[] = [];

  const hasAmazon =
    (book.platform === "amazon" || book.platform === "both") &&
    book.amazonUrl &&
    book.amazonUrl !== "#";
  const hasGumroad =
    (book.platform === "gumroad" || book.platform === "both") &&
    book.gumroadUrl &&
    book.gumroadUrl !== "#";

  if (hasAmazon) {
    offers.push({
      "@type": "Offer",
      url: book.amazonUrl,
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@type": "Organization", name: "Amazon" },
    });
  }
  if (hasGumroad) {
    offers.push({
      "@type": "Offer",
      url: book.gumroadUrl,
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@type": "Organization", name: "Gumroad" },
    });
  }

  const data = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    alternativeHeadline: book.subtitle,
    author: {
      "@type": "Person",
      name: book.author,
      url: siteConfig.domain,
    },
    description: book.description,
    inLanguage:
      book.language === "Hindi"
        ? "hi-IN"
        : book.language === "Bilingual"
          ? "hi-IN"
          : "en-IN",
    bookFormat: "https://schema.org/Paperback",
    genre: book.category,
    url: `${siteConfig.domain}/books/${book.slug}`,
    offers: offers.length > 0 ? offers : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Renders Schema.org JSON-LD for a breadcrumb trail.
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Renders Schema.org JSON-LD for a WebSite entry on the homepage.
 */
export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
    inLanguage: "en-IN",
    author: {
      "@type": "Person",
      name: author.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.domain}/books?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
