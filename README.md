# Portfolio

Personal site, built with [Astro](https://astro.build) as a static page with no client-side JavaScript.
Live at https://priest110.github.io.

## Edit content

All text lives in [`src/data/profile.ts`](src/data/profile.ts): headline, summary, experience, skills,
education and languages. Colours and layout are in [`src/styles/global.css`](src/styles/global.css).
The page itself is [`src/pages/index.astro`](src/pages/index.astro).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy

Every push to `master` builds the site and publishes it with GitHub Actions
(`.github/workflows/deploy.yml`). In the repository settings, **Pages → Source** must be set to
**GitHub Actions**.
