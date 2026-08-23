# ruhulamin.dev

[![screenshot](public/assets/site-screenshot.png)](https://ruhulamin.dev)

My personal site. One page, no fluff — if you landed here from a LinkedIn DM or an Upwork proposal, it should take you about fifteen seconds to decide whether I'm worth a reply.

It's a Vite + React + TypeScript app that prerenders to static HTML, so there's no blank flash while JavaScript loads. The whole thing is a handful of components and one CSS file, because it's a landing page, not an application — keeping it small is the feature.

## Running it

```sh
npm install
npm run dev
```

Build works the same anywhere Node does:

```sh
npm run build    # typecheck + build + prerender
npm run preview  # serve the built site locally
```

## Notes to future me

- All content lives as constants inside `src/components/` — no CMS, no data layer. Editing the site means editing those files.
- The prerender step (`scripts/prerender.mjs`) is what bakes the rendered HTML into `dist/index.html`. Don't remove it; it's the reason the page shows content before JS loads.
- `vercel.json` holds redirects from the old Gatsby routes (`/about`, `/work`, etc.) — those pages don't exist anymore.
