# Lonely Mountain Labs

The website for [Lonely Mountain Labs](https://lonelymtnlabs.com) — an outpost experimenting with ways technology can give people more space for what matters.

## What's Here

This repo contains two things:

1. **The main website** — a React + Vite single-page site showcasing Lonely Mountain Labs and its projects (Project Legacy, Giftwise, Particle Life).
2. **Particle Life** — an interactive artificial life simulation hosted at [lonelymtnlabs.com/particle-life](https://lonelymtnlabs.com/particle-life). It's a standalone HTML/JS project that lives in `docs/particle-life/`.

## Project Structure

```
├── client/                  # React frontend source
│   ├── src/
│   │   ├── components/      # UI components and page sections
│   │   ├── pages/           # Route pages (Home, 404)
│   │   └── main.tsx         # App entry point
│   └── index.html           # HTML template
├── server/                  # Express server (used in Replit, not needed for static hosting)
├── attached_assets/         # Images and static assets used by the site
├── docs/                    # GitHub Pages deployment directory
│   ├── particle-life/       # Particle Life standalone app
│   └── ...                  # Built site output
└── shared/                  # Shared types/schemas
```

## Hosting

The site is hosted via **GitHub Pages**, served from the `docs/` directory on the `main` branch with a custom domain (`lonelymtnlabs.com`) managed through Squarespace DNS.

## Development

The site was originally built on Replit using React, Vite, Tailwind CSS, and Framer Motion.

To run locally:

```bash
npm install
npm run dev
```

## Deploying Changes

1. Make changes to the source in `client/`
2. Build: `npx vite build`
3. Copy output to docs: `cp -r dist/public/* docs/`
4. If updating Particle Life, also copy: `cp <source>/index.html docs/particle-life/index.html`
5. Commit and push to `main` — GitHub Pages will automatically redeploy

## Particle Life

The Particle Life simulation is a self-contained `index.html` file at `docs/particle-life/`. Colored particles attract and repel each other based on randomly generated rules, producing emergent organic behaviors — flocking, orbiting, clustering. Controls let you adjust particle count, species, interaction radius, friction, and force strength. Click and drag to attract particles toward your cursor.
