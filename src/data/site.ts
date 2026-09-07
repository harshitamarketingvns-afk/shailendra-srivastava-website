/**
 * Central site configuration.
 * Update this file when deploying to production (domain, social handles, etc.).
 */
export const siteConfig = {
  name: "Shailendra Srivastava",
  shortName: "SS",
  domain: "https://shailendrasrivastava.com",
  locale: "en_IN",
  tagline: "Author • Researcher • Diamond & Gemstone Professional",
  description:
    "Official website of Shailendra Srivastava, author and diamond & gemstone professional. Explore books on diamonds, gemstones, science, consciousness, philosophy and The Birth of God.",
  keywords: [
    "Shailendra Srivastava",
    "author Shailendra Srivastava",
    "Indian author",
    "diamond professional",
    "gemstone books",
    "Ratna Gyan Academy",
    "The Birth of God",
    "gemology India",
    "diamond jewellery author",
    "consciousness books",
    "philosophy books India",
  ],
  // Placeholder social handles — replace with verified accounts at deploy time.
  social: {
    amazon: "https://www.amazon.com/author/shailendrasrivastava",
    youtube: "https://www.youtube.com/@shailendrasrivastava",
    twitter: "https://twitter.com/shailendraauthor",
    linkedin: "https://www.linkedin.com/in/shailendrasrivastava",
    instagram: "https://www.instagram.com/shailendraauthor",
    email: "contact@shailendrasrivastava.com",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Books", href: "/books" },
    { label: "Ratna Gyan Academy", href: "/ratna-gyan-academy" },
    { label: "Diamond & Jewellery Books", href: "/diamond-jewellery-books" },
    { label: "Research & Ideas", href: "/research" },
    { label: "Media", href: "/media" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
