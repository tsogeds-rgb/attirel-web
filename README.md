# attirel-web

Attirel's content & marketing site — [attirel.com](https://attirel.com).

Built with [Astro](https://astro.build) + Tailwind CSS. Fully static, deployed on Vercel.

## Stack

- **Astro 5** with strict TypeScript
- **Tailwind CSS 3** via `@astrojs/tailwind`
- **@astrojs/sitemap** — sitemap generated at build time
- Fonts: Inter (UI) + Fraunces (display) via Google Fonts

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, features, featured guides |
| `/app/` | How Attirel works, fit confidence labels, feature list |
| `/how-to-measure/` | Body measuring guide (women's + men's) |
| `/how-to-measure-feet/` | Shoe measuring guide (length, width, calf) |
| `/size-guides/` | Size guides hub |
| `/size-guides/nike/`, `/size-guides/zara/`, `/size-guides/hm/` | Brand size guides |
| `/blog/why-clothes-dont-fit/` | Flagship article |
| `/about/` | Story + affiliate disclosure |
| `/privacy/`, `/terms/` | Legal |

## Development

```bash
npm install
npm run dev      # dev server at localhost:4321
npm run build    # static build to dist/
npm run preview  # preview the build
```

## Deployment

Deployed as a standalone Vercel project (separate from the `f-ap` app project).
`astro.config.mjs` sets `site: 'https://attirel.com'` for canonical URLs and the sitemap.

The Attirel app lives at [attirel.ai](https://attirel.ai); this site is the marketing/content
companion at attirel.com.
