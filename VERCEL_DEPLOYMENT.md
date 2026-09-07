# Vercel Deployment — Shailendra Srivastava Author Website

This package is prepared for a static Next.js export on Vercel.

## What was changed for deployment

- Switched Next.js from `output: "standalone"` to `output: "export"`.
- Removed server API routes that required a Node runtime.
- Converted the contact form to a static `mailto:` workflow.
- Set `images.unoptimized: true` so local book covers work in static export.
- Removed Z.ai/Caddy-specific deployment files and temporary workspace folders.
- Reduced package dependencies to the libraries actually used by the website.
- Preserved the author design, book catalogue, book covers, metadata, sitemap and robots routes.

## Deploy on Vercel

### Recommended: GitHub import
1. Create a new GitHub repository.
2. Upload the contents of this project folder to the repository root.
3. Sign in to Vercel and choose **Add New > Project**.
4. Import the GitHub repository.
5. Framework preset: **Next.js**.
6. Build command: `npm run build`.
7. Leave Output Directory on the Vercel default for Next.js.
8. Deploy.

Vercel will install dependencies and run the static Next.js build.

## Before connecting a custom domain

The site metadata currently uses `https://shailendrasrivastava.com` as the canonical production domain. Once that domain is owned and connected to Vercel, this is correct. If a different domain is chosen, update:

- `src/data/site.ts`
- `src/data/books.ts` author website field if needed

## Purchase/social links

Some Amazon, Gumroad and social URLs are placeholders inherited from the current site data. Replace them only with verified live URLs before relying on those buttons publicly.
