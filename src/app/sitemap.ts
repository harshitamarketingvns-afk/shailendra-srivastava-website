import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { books } from "@/data/books";

/**
 * XML sitemap.
 * Covers all top-level routes and every individual book page.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/books", priority: 0.9, changeFrequency: "weekly" as const },
    {
      path: "/the-birth-of-god",
      priority: 0.95,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/ratna-gyan-academy",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/diamond-jewellery-books",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { path: "/research", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/media", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  ];

  const bookRoutes = books.map((b) => ({
    path: `/books/${b.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...bookRoutes].map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
