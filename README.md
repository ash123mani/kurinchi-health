# Kurinchi Health Products

A modern, bilingual (Tamil + English), SEO-focused website for Kurinchi Health
Products — traditional cold pressed oils, natural sweeteners, Himalayan rock
salt, handmade soap and herbal hair oil.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home with hero, categories, featured products, process and FAQ |
| `/products` | Full product listing with category filters |
| `/products/[slug]` | Product detail page with gallery, benefits and order CTA |
| `/about` | Brand story, values and production process |
| `/contact` | Contact details, WhatsApp enquiry form and map |

SEO files are generated automatically:

- `/sitemap.xml` — all pages and product images
- `/robots.txt`
- `/manifest.webmanifest`

## Update business details

All brand, contact, address, FSSAI and social values live in:

```
src/lib/site.ts
```

Update these before going live:

- `url` — your final domain (or set `NEXT_PUBLIC_SITE_URL`)
- `phoneDisplay` / `phone` / `whatsapp` — currently the number from the product label
- `email` — currently a placeholder (`hello@kurinchihealthproducts.com`)
- `marketBy` — currently `Ratchakar Oil Mill`
- `social` — add Instagram / Facebook / YouTube URLs

Product names, descriptions, benefits, sizes and images live in:

```
src/lib/products.ts
```

## Images

Source WhatsApp images are preserved in `raw/`. Optimised, renamed copies live in
`public/products/` and are used by the site.

> The palm jaggery (`palm-jaggery-1.jpeg`) and palm candy
> (`palm-candy-1.jpeg`) photos were the least clear in the source set. Replace
> them with dedicated product photos when available — keep the same filenames or
> update `src/lib/products.ts`.

The Open Graph image is `public/og-image.jpg` (1200×630). Replace it with a real
product or shop photo when you have one.

## Deploy to Vercel

1. Push the `oil-products` folder to a Git repository.
2. Import the project in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain.
4. Add the domain in Vercel and update DNS.
5. Add the site to Google Search Console and submit `/sitemap.xml`.

## SEO checklist after launch

- [ ] Set the real domain in `NEXT_PUBLIC_SITE_URL`.
- [ ] Add the Google Search Console verification token.
- [ ] Replace placeholder email and social links.
- [ ] Replace the two palm product photos if needed.
- [ ] Test rich results: https://search.google.com/test/rich-results
- [ ] Submit the sitemap in Google Search Console.
- [ ] Add a Google Business Profile for local search in Tirunelveli.

Product benefit descriptions are traditional descriptions and are not medical
advice.
# kurinchi-health
