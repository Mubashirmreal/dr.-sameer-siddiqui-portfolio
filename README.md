# Dr. Sameer Siddiqui — Portfolio

Single-page portfolio built with React 19, Tailwind CSS, Framer Motion, and [Vike](https://vike.dev) (pre-rendered to static HTML). Deployed on Vercel.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev` (http://localhost:3000)
3. Production build: `npm run build` → static output in `dist/client`

## Structure

- `pages/index/` — the single pre-rendered page
- `renderer/` — HTML shell (meta tags, JSON-LD, GTM) and client hydration
- `components/` — page sections
- `constants.ts` — page content and shared links
- `public/` — images, fonts, `robots.txt`, `sitemap.xml`, `llms.txt`
