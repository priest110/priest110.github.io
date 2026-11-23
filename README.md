# Portfolio

Personal site of Rui Oliveira, built with [Astro](https://astro.build) as a single static page.
Live at https://priest110.github.io.

## Edit content

- **Text:** everything lives in [`src/data/profile.ts`](src/data/profile.ts): name, role, summary,
  experience and projects. To link a phrase inside an experience entry, wrap it in `{braces}` and add
  its URL under `links`.
- **Colours, layout and light/dark themes:** [`src/styles/global.css`](src/styles/global.css).
- **The page:** [`src/pages/index.astro`](src/pages/index.astro).
- **Small interactions:** [`src/scripts/site.ts`](src/scripts/site.ts) handles the theme switch, the
  avatar that follows the cursor, the card glow, the nav highlight and the end-of-page scene. The page
  works and reads fine without it.
- **Images:** the cartoon avatar and the landscape are in [`src/assets/`](src/assets/). The link-preview
  image is [`public/og.png`](public/og.png).

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
