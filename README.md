# Carlos Parra Camacho — Portfolio

Bilingual (EN/ES) personal portfolio. Astro, static output, **zero client-side
JavaScript**, 40 KB built.

```bash
npm install
npm run dev      # http://localhost:4321  and  /es/
npm run build    # → dist/
```

## Where things live

| I want to change… | Edit |
|---|---|
| Any text, in either language | `src/data/content.ts` |
| A project, its stack, or its repo link | `projects` in `src/data/content.ts` |
| A job or its dates | `season` in `src/data/content.ts` |
| Colors, type, spacing | `:root` in `src/styles/global.css` |
| The pitch line markings | `src/components/Markings.astro` |
| Page structure | `src/components/Site.astro` |

`PRODUCT.md` records who this is for and what is true. `DESIGN.md` records the visual
system. Both are kept in sync with the code — if you change the design, update DESIGN.md.

Adding a language means adding a key to `ui` and `projects[n]` / `season[n]`, then a page
under `src/pages/<lang>/`. Nothing else is locale-aware.

## Before you deploy

**1. Set the site URL.** `astro.config.mjs` defaults to `https://carlospc13.netlify.app`
because this replaces that site in place. If it ships anywhere else, build with:

```bash
SITE_URL=https://your-domain.com npm run build
```

Canonical, `og:url`, and `hreflang` tags all derive from it.

**2. Add a share image.** There is no `og:image`, so LinkedIn and X will render a blank
preview card — and LinkedIn is where most of your traffic arrives from. Screenshot the
hero at 1200×630, save it as `public/og.png`, and add to `src/layouts/Base.astro`:

```html
<meta property="og:image" content={new URL('/og.png', Astro.site)} />
```

## Things I deliberately did not invent

Everything on this site is traceable to your old site or to your answers. Nothing was
filled in with plausible-sounding fiction. These gaps are real and are yours to close:

- **Your internship company.** `facts.internshipCompany` in `src/data/content.ts` is an
  empty string. While it is empty the season row shows the role with no employer — no
  placeholder text is displayed. Fill it in and it appears automatically.
- **Repos for projects 02 and 04.** The CUDA/OpenMP and Skin Lesion projects show
  "No public repository" / "Sin repositorio público". If those repos exist, add the URL
  to `repo` and the link replaces the note.
- **No screenshots or live demos.** None were supplied, so the squad is text-only. Real
  project imagery would be the single biggest upgrade available to this page.
- **No metrics.** No accuracy figures, no user counts, no benchmarks, no star ratings.
  The football world invites FIFA-style attribute cards; there is no data behind them, so
  there are none. Do not add them unless you can cite the number.
- **No CV file.** If you want a downloadable résumé, drop it in `public/` and add a link
  to the contact section.
- **Graduation date** is not stated anywhere.

## Notes

- The one animation is the chalk pitch markings drawing themselves on, once, on load. It
  is off under `prefers-reduced-motion`, as is smooth scrolling and the availability LED.
- Archivo is loaded from Google Fonts. Self-hosting it would remove a third-party request
  and the brief fallback flash — worth doing if you care about the last few points of
  Lighthouse.
- Verified: no horizontal overflow at 375 / 768 / 1440, no tap target under 24px, and
  every text/background pair passes WCAG AA in both languages.
