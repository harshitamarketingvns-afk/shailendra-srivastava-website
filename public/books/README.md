# Book covers

This folder holds the cover images for every book in the catalogue.

## Placeholder

**`placeholder-cover.svg`** — the shared branded placeholder shown until a real
cover is uploaded. Do **not** delete or rename this file; the site references
it automatically when a book's `cover` field is `null`.

## Adding a real cover

1. Save the cover image here using the book's **slug** as the filename.
   Use JPG for photographs / illustrated covers; PNG only if the cover has
   transparency.
2. Recommended dimensions: **600 × 800 px** or larger, **3:4 portrait** aspect
   ratio (the standard book-cover proportion). The site will display the cover
   with `object-contain`, so the image is never cropped or distorted.
3. Update the book's `cover` field in **`src/data/books.ts`**:

```ts
{
  slug: "manik",
  // ...
  cover: "/books/manik.jpg",  // ← was null, now points to the real file
}
```

That's it — the cover will appear everywhere the book is shown: the homepage
previews, the `/books` grid, the Ratna Gyan Academy / Diamond & Jewellery
Knowledge Series pages, the book's detail page, and the "related books" cards.

## Naming convention

| Slug                     | Filename                     |
| ------------------------ | ---------------------------- |
| `the-birth-of-god`       | `the-birth-of-god.jpg`       |
| `manik`                  | `manik.jpg`                  |
| `diamond-basics`         | `diamond-basics.jpg`         |
| `dusri-dharti-alternate-universe` | `dusri-dharti-alternate-universe.jpg` |

Keep filenames lowercase, hyphenated, and matching the `slug` field exactly.

## Notes

- Do **not** invent or generate fake cover designs for published books.
  The placeholder is a neutral, branded stand-in — not a substitute cover.
- If you later want to hotlink cover images hosted on Amazon / Gumroad CDN
  instead of local files, add the CDN domains to `images.remotePatterns` in
  `next.config.ts` and set `cover` to the full remote URL.
