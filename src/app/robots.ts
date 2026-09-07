import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

/**
 * Robots configuration.
 * Allows the entire site; points crawlers at the XML sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteConfig.domain}/sitemap.xml`,
    host: siteConfig.domain,
  };

