import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(201,169,110,0.10), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <p className="font-display text-7xl gold-text md:text-9xl">404</p>
        <h1 className="mt-6 font-display text-2xl text-foreground md:text-3xl">
          This page could not be found.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          The page you are looking for may have moved, been renamed, or never
          existed. Try returning to the homepage, or browse the catalogue of
          books.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gold px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link
            href="/books"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-gold/50 px-7 text-sm font-semibold text-foreground transition-colors hover:bg-gold/10"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Browse books
          </Link>
        </div>
      </div>
    </section>
  );
}
