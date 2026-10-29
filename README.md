# Direct Installations

Marketing website for **Direct Installations** — Authorised VELFAC Distributor & Approved DOVISTA Service Agent, based in Denton, Manchester.

Rebuilt as a fast, modern, interactive static site with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed to **Cloudflare Pages**.

## Tech stack

- **Astro 4** — ships near-zero JavaScript; content rendered at build time
- **Tailwind CSS 3** — Direct Installations red/black brand with a premium product-gallery visual system
- **Static sitemap** — search-engine sitemap at `public/sitemap.xml`
- Vanilla JS "islands" for interactivity (scroll reveal, counters, carousel, filters, mobile menu)

## Project structure

```
src/
  components/      Reusable UI (Header, Footer, Hero, ServicesInteractive, Coverage, Testimonials, ProjectsGrid, CtaBand, PageHero, Logo, ServiceIcon)
  data/site.ts     Single source of truth for all site content
  layouts/Base.astro  Shared HTML shell, SEO, fonts, scroll-reveal
  pages/           index, services, projects, about, contact, 404
  styles/global.css   Tailwind layers + reveal animation
public/
  projects/        Placeholder project images (SVG) — swap for real photos
  favicon.svg, robots.txt, sitemap.xml, _headers, _redirects
```

## Local development

Requires Node.js 18.14+ (20 LTS recommended).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Editing content

All copy, services, testimonials, contact details and projects live in **`src/data/site.ts`**. Edit there and everything updates across the site.

### Swapping placeholder project images

Project photos are placeholders in `public/projects/`. Replace the `project-*.svg` files (or add real `.jpg`/`.webp` images) and update the `image` paths in the `projects` array in `src/data/site.ts`.

## Deploying to Cloudflare Pages

### Option A — Git integration (recommended)

1. Push this repo to GitHub (already wired to `DanOrm94/DirectInstallations`).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository, then set:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** set env var `NODE_VERSION = 20`
4. Save and deploy. Every push to the default branch triggers a new deploy; pull requests get preview URLs.

### Option B — Wrangler CLI

```bash
npm run build
npx wrangler pages deploy dist
```

### Custom domain

In the Pages project → **Custom domains**, add `directinstallations.co.uk` and `www.directinstallations.co.uk`. If the domain is already on Cloudflare, DNS records are added automatically; otherwise point the domain's nameservers to Cloudflare first.

## Contact

Content on the site is email/phone only (the original contact form was disabled for maintenance):

- Phone: 0161 320 4993
- Supply & Installation: sales@directinstall.co.uk
- Servicing & Repairs: service@directinstall.co.uk
- Unit 24b Alpha Court, Denton, Manchester, M34 3RB
