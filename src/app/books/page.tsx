import { Suspense } from "react";
import type { Metadata } from "next";
import { BooksClient } from "./books-client";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { author } from "@/data/books";

export const metadata: Metadata = {
  title: "Books",
  description: `Browse the complete catalogue of ${author.name}: the Ratna Gyan Academy gemstone series, THE BIRTH OF GOD, and other standalone titles on diamonds, gemology, consciousness and speculative fiction.`,
  alternates: { canonical: "/books" },
  openGraph: {
    title: `Books by ${author.name}`,
    description: `The complete catalogue — gemstone reference, science, philosophy and speculative fiction.`,
    url: "/books",
    type: "website",
  },
};

export default function BooksPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Books", url: "/books" },
        ]}
      />
      <Suspense
        fallback={
          <div className="mx-auto max-w-7xl px-4 py-24 text-center text-muted-foreground">
            Loading books…
          </div>
        }
      >
        <BooksClient />
      </Suspense>
    </>
  );
}
