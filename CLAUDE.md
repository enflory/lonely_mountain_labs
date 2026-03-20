# CLAUDE.md

## Project Overview

This is the Lonely Mountain Labs website — a portfolio/landing page for personal software projects. Hosted on GitHub Pages at lonelymtnlabs.com.

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite 7, Tailwind CSS 4, Framer Motion
- **UI Components:** Radix UI primitives with shadcn/ui patterns
- **Routing:** Wouter
- **Hosting:** GitHub Pages (static), served from `docs/` on `main` branch
- **Domain:** lonelymtnlabs.com (DNS via Squarespace)

## Key Directories

- `client/src/components/sections/` — main page sections (Hero, About, Projects, Contact)
- `client/src/components/layout/` — Navbar and Footer
- `client/src/components/ui/` — reusable UI primitives (shadcn/ui)
- `docs/` — built static output deployed by GitHub Pages
- `docs/particle-life/` — standalone Particle Life app (single HTML file, not part of the React build)
- `server/` — Express server from original Replit setup, not used in current static hosting

## Build & Deploy

```bash
npx vite build                           # builds to dist/public/
cp -r dist/public/* docs/                # copy to GitHub Pages dir
# push to main — auto-deploys
```

## Important Notes

- The `docs/` directory is the live deployment. Changes to `client/` source need to be built and copied to `docs/` to take effect.
- Particle Life (`docs/particle-life/index.html`) is a standalone file — edit it directly, no build step needed.
- The `server/` directory and database config (`drizzle.config.ts`) are artifacts from the original Replit full-stack setup. They are not used for the current static deployment.
- The Replit-specific Vite plugins are conditionally loaded and only activate in a Replit environment.
