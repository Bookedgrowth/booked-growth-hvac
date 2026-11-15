# Booked Growth: HVAC Site (Phase 1 prototype)

Marketing site for Booked Growth's HVAC and plumbing positioning. Design prototype for a later GoHighLevel rebuild.
Separate from the live bookedgrowth.net repo and Vercel project.

## Stack
Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, MDX blog (next-mdx-remote).

## Where things live
- `content/site.ts`: values that don't change by industry (brand, phone, email, Cal.com, guarantees, GA4 ID, `indexing` flag).
- `content/industries/hvac.ts`: every piece of HVAC copy (headlines, services, page copy, form fields, metadata, schema text).
- `content/industries/hvac-faq.ts`: the single FAQ source (shown on /faq and filtered onto service pages).
- `content/index.ts`: the one switch for which industry the build shows. A future `therapy.ts` plugs in here.
- `content/blog/*.mdx`: blog posts. Frontmatter: title, seoTitle, slug, date, category, excerpt, cover, draft, services.
- `content/legal.ts`: Privacy Policy and Terms copy.
- `app/globals.css`: design tokens and the spacing scale (one place).

Headlines use `**double asterisks**` around the gradient words.

## Launch checklist
1. Search the repo for `TODO(stefano)` and fill each one.
2. Set `indexing: true` in `content/site.ts` (removes noindex and opens robots.txt).
3. Add the GA4 ID in `content/site.ts`.

## Commands
`npm run dev`, `npm run build`, `npm run start`
