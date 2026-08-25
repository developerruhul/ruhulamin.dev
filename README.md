# ruhulamin.dev

<p align="center">
  <img src="public/assets/readme-banner.png" alt="ruhulamin.dev — full-stack engineer" width="840" />
</p>

<p align="center">
  <a href="https://ruhulamin.dev"><strong>ruhulamin.dev →</strong></a>
</p>

My personal site. Everything a stranger needs to know at a glance: what I do, where I've worked, and how to reach me. It should load fast and be readable end to end in under a minute.

<p align="center">
  <img src="public/assets/site-screenshot.png" alt="The site" width="640" />
</p>

Built with Next.js (App Router, static export) + Tailwind CSS + TypeScript. The page prerenders to plain HTML — no blank flash while JavaScript loads — and deploys as static files.

## Running it

```sh
npm install
npm run dev
```

Build works the same anywhere Node does:

```sh
npm run build    # static export into out/
npx serve out    # serve the built site locally
```