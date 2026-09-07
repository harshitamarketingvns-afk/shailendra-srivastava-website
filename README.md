# Shailendra Srivastava — Author Website

Official author website for **Shailendra Srivastava** — *Author • Researcher • Diamond & Gemstone Professional*.

A premium, editorial Next.js website presenting the author's identity, books, the **Ratna Gyan Academy** gemstone series, the flagship book **THE BIRTH OF GOD**, research interests and media — with advanced technical SEO out of the box.

---

## Tech stack

| Layer        | Choice                                   |
| ------------ | ---------------------------------------- |
| Framework    | **Next.js 16** (App Router)              |
| Language     | **TypeScript 5**                         |
| Styling      | **Tailwind CSS 4** + design tokens       |
| UI primitives| shadcn/ui (New York) + Lucide icons      |
| Fonts        | Playfair Display (serif) + Inter (sans)  |
| Architecture | Static-first, server components          |
| Deployment   | Vercel-ready                             |

---

## Pages & routes

| Route                       | Purpose                                              |
| --------------------------- | ---------------------------------------------------- |
| `/`                         | Home — hero, featured book, categories, series previews |
| `/about`                    | Author biography                                     |
| `/books`                    | Filterable catalogue of all books (category + platform + search) |
| `/books/[slug]`             | Individual book landing page (one per book)          |
| `/the-birth-of-god`         | Flagship book landing page (Amazon)                  |
| `/ratna-gyan-academy`       | Ratna Gyan Academy gemstone series landing (Amazon/KDP) |
| `/diamond-jewellery-books`  | Diamond & Jewellery Knowledge Series landing (Gumroad) |
| `/research`                 | Research & Ideas (8 subjects)                        |
| `/media`                    | Book trailers, YouTube, interviews, podcasts, press |
| `/contact`                  | Professional contact form with inquiry types         |
| `/sitemap.xml`              | Auto-generated XML sitemap                          |
| `/robots.txt`               | Auto-generated robots configuration                  |
| `/manifest.webmanifest`     | PWA manifest                                         |

---

## Folder structure

```
src/
├── app/
│   ├── about/                  # About page
│   ├── api/
│   │   └── contact/route.ts    # Contact form API handler
│   ├── books/
│   │   ├── [slug]/page.tsx     # Dynamic book detail page
│   │   ├── books-client.tsx    # Client-side filtering for /books
│   │   └── page.tsx            # Books listing page
│   ├── diamond-jewellery-books/page.tsx  # Gumroad series landing
│   ├── contact/
│   │   ├── contact-form.tsx    # Client form component
│   │   └── page.tsx
│   ├── media/page.tsx
│   ├── ratna-gyan-academy/page.tsx
│   ├── research/page.tsx
│   ├── the-birth-of-god/page.tsx
│   ├── globals.css            # Theme tokens (dark charcoal + gold)
│   ├── layout.tsx             # Root layout, fonts, SEO metadata, JSON-LD
│   ├── not-found.tsx
│   ├── page.tsx               # Home page
│   ├── robots.ts              # /robots.txt
│   └── sitemap.ts             # /sitemap.xml
├── components/
│   ├── site/
│   │   ├── book-card.tsx       # Reusable BookCard component
│   │   ├── json-ld.tsx         # Schema.org JSON-LD helpers
│   │   ├── page-hero.tsx      # Inner-page hero
│   │   ├── section.tsx         # Section + SectionHeading primitives
│   │   ├── site-footer.tsx
│   │   └── site-header.tsx     # Responsive navbar with mobile menu
│   └── ui/                    # shadcn/ui primitives
├── data/
│   ├── books.ts               # ★ Book catalogue & author record ★
│   └── site.ts                # Site-wide config (domain, socials, nav)
└── lib/
    └── utils.ts
public/
├── books/                     # Drop book covers here as <slug>.jpg
├── icon.svg                    # SVG favicon / monogram
├── manifest.webmanifest
└── og-image.jpg               # Add a 1200×630 social share image
```

---

## How to add a new book

Open **`src/data/books.ts`** and append a new entry to the `books` array:

```ts
{
  slug: "new-book-slug",
  title: "Book Title",
  subtitle: "Subtitle or descriptor",
  author: author.name,
  cover: "/books/new-book-slug.jpg", // or null for placeholder cover
  description: "Short card description.",
  longDescription: "Longer detail-page description (optional).",
  language: "English", // or "Hindi" | "Bilingual"
  series: "Standalone", // "Ratna Gyan Academy" | "Diamond & Jewellery Knowledge Series" | "The Birth of God Series" | "Standalone"
  category: "Science & Philosophy", // one of BookCategory
  platform: "amazon", // "amazon" | "gumroad" | "both" — controls which CTA buttons render
  amazonUrl: "https://www.amazon.in/dp/XXXXXXX", // use "#" until confirmed
  gumroadUrl: "#", // use "#" until confirmed — required even if platform is "amazon"
  order: 10, // lower sorts first
}
```

The `platform` field controls which purchase buttons render on the card and the
book detail page:

| `platform`  | Buttons shown                |
| ----------- | ---------------------------- |
| `"amazon"`  | Amazon only                  |
| `"gumroad"` | Gumroad only                 |
| `"both"`    | Amazon + Gumroad side-by-side |

While a URL is the placeholder `"#"`, its button renders as a muted
"Coming soon" pill instead of a clickable link.

That single entry will automatically:

- appear on `/books` (with category, platform and search filtering),
- get its own page at `/books/new-book-slug`,
- be included in the sitemap,
- emit Schema.org `Book` JSON-LD (with one Offer per real storefront URL),
- show up in the relevant category filter on the homepage,
- be picked up by the Ratna Gyan Academy grid (if `series` matches),
- be picked up by the Diamond & Jewellery Knowledge Series grid (if `series` matches).

To add a cover image, drop a JPG at `public/books/<slug>.jpg` and set `cover` to that path. While `cover` is `null`, a tasteful editorial placeholder is rendered using the title and subtitle.

---

## Configuring site-wide settings

`src/data/site.ts` holds the domain, default SEO description, keywords, navigation, and social links. Update this file **before deploying to production**:

```ts
export const siteConfig = {
  domain: "https://shailendrasrivastava.com", // ← your real domain
  social: {
    amazonAuthorCentral: "https://www.amazon.com/author/…",
    youtube: "https://www.youtube.com/@…",
    twitter: "https://twitter.com/…",
    linkedin: "https://www.linkedin.com/in/…",
    instagram: "https://www.instagram.com/…",
    email: "contact@shailendrasrivastava.com",
  },
  // …
};
```

The author record (name, tagline, interests, links) lives at the top of `src/data/books.ts` and is consumed by the SEO metadata, the Person JSON-LD and the About page.

---

## SEO features

This site ships with advanced technical SEO out of the box:

- ✅ **Schema.org Person JSON-LD** (rendered site-wide in the root layout)
- ✅ **Schema.org Book JSON-LD** (on each book page and the flagship page)
- ✅ **Schema.org WebSite JSON-LD** (with SearchAction) on the homepage
- ✅ **Schema.org BreadcrumbList JSON-LD** on every inner page
- ✅ **Open Graph** metadata (type, image, locale, url, siteName)
- ✅ **Twitter Card** metadata
- ✅ **Canonical URLs** per route
- ✅ **`/sitemap.xml`** auto-generated, includes every book page
- ✅ **`/robots.txt`** auto-generated, points to sitemap
- ✅ **Semantic HTML5** — `header`, `nav`, `main`, `section`, `article`, `footer`
- ✅ **Proper H1/H2 hierarchy** on every page
- ✅ **Image alt text** on every cover (placeholder or real)
- ✅ **`metadataBase`** so all OG URLs are absolute
- ✅ **Theme-color** + **manifest** for mobile/PWA

### Production SEO checklist

Before going live, also:

1. Replace `https://shailendrasrivastava.com` in `src/data/site.ts` with the real domain.
2. Add a real **1200×630** `public/og-image.jpg` for social sharing.
3. Add real book covers under `public/books/<slug>.jpg`.
4. Verify the Amazon URLs in `src/data/books.ts`.
5. Confirm the social handles in `src/data/site.ts`.
6. Submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

---

## Performance

- Static-first: all pages are server components by default; only the books filter, mobile nav and contact form are client components.
- Fonts loaded via `next/font` with `display: swap` — no layout shift.
- No third-party trackers or analytics by default — add them when ready.
- Image optimisation: when real covers are added, switch the `<img>` in `book-card.tsx` and `[slug]/page.tsx` to `next/image` and whitelist Amazon image domains if you hotlink cover images.

---

## Accessibility

- WCAG-friendly contrast (off-white on near-black, gold accents ≥ 4.5:1).
- Keyboard-accessible navigation (visible focus rings, skip-to-content link).
- ARIA labels on icon-only buttons and social links.
- `sr-only` helper for visually hidden but screen-reader text.
- Reduced motion respected via Tailwind's transition classes.

---

## Local development

```bash
bun install
bun run dev
```

The site runs on `http://localhost:3000`.

```bash
bun run lint   # ESLint
bun run build  # production build (output: standalone)
```

---

## Deploying to Vercel

This project is Vercel-optimised. Recommended steps:

1. **Push to GitHub / GitLab / Bitbucket.**

2. **Import the repository** at <https://vercel.com/new>.

3. Vercel auto-detects Next.js — accept the default build settings:
   - Build command: `next build`
   - Output directory: `.next`
   - Install command: `bun install` (or `npm install` / `pnpm install`)

4. (Optional) Set environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_SITE_URL` — your production domain (used in JSON-LD and OG URLs if you wire it in).
   - `CONTACT_EMAIL_TO` — the address contact form submissions should be delivered to (wire this up in `src/app/api/contact/route.ts` with your email provider).

5. **Add your custom domain** under *Project → Settings → Domains* and update `siteConfig.domain` in `src/data/site.ts` to match.

6. Trigger a redeploy. Vercel will:

   - Build the static + server components,
   - Generate `/sitemap.xml` and `/robots.txt` dynamically,
   - Serve the site from its global edge network,
   - Provide Core Web Vitals insights in the dashboard.

### Wiring the contact form to a real email service

The `POST /api/contact` handler in `src/app/api/contact/route.ts` currently validates and logs the payload. To deliver real email:

- **Resend** — `import { Resend } from 'resend'` and call `resend.emails.send({ … })`.
- **SendGrid / Postmark / AWS SES** — equivalent SDK calls.
- **Formspree** — replace the fetch URL with your Formspree endpoint.

Store the API key in a Vercel environment variable (e.g. `RESEND_API_KEY`) — never commit it.

---

## Brand assets

- **Logo / monogram**: `public/icon.svg` (an `S` mark inside a gold double frame).
- **Favicon**: served via `metadata.icons` in `src/app/layout.tsx`. Add a real `apple-touch-icon.png` (180×180) before launch.
- **OG image**: drop a `public/og-image.jpg` (1200×630) — referenced from `metadata.openGraph.images`.

---

## Notes on placeholders

- **Social handles** (`siteConfig.social.*`) and the `author.links` block are placeholders. Replace them with verified accounts before launch.
- **Amazon URLs** are set to `"#"` for every book until confirmed. Setting a real URL enables the Amazon CTA on the book page.
- **Book covers** are intentionally omitted. The site renders a tasteful editorial placeholder using the book title and subtitle until real cover JPGs are dropped into `public/books/`.
- The website **does not invent** any book titles, awards, sales figures, reviews, credentials or media coverage. Add only verified information.

---

© Shailendra Srivastava. All rights reserved.
