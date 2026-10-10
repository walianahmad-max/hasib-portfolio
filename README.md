# Hasib Waliyan Portfolio — React

React + Vite project converted from the original portfolio at
https://my-portfolio-gamma-five-76.vercel.app/

## Run
Install Node.js 20.19+ or 22.12+.
Extract the ZIP into a new folder and open the folder containing package.json.

    npm install
    npm run dev

Open the URL shown by Vite. Do not open index.html directly.

## Build

    npm run build
    npm run preview

## Files
- src/pages: all four original pages, converted to JSX.
- src/components/Header.jsx: responsive navigation and mobile menu.
- src/components/Footer.jsx: original footer, contact and social links.
- src/components/ProjectCard.jsx: reusable project card.
- src/data/projects.js: original project information.
- src/assets: original portrait and local social SVG icons.
- src/style.css: original design rules with Tailwind utilities support.
- src/App.jsx: routes and scroll reveal lifecycle.
- vite.config.js: automatic React JSX runtime configuration.

The original site uses CSS artwork for project and experiment cards; those
same gradients and lettering are preserved. The original stylesheet and
system font stack are retained. No external image URLs are required.

Deployment using BrowserRouter requires a rewrite of page routes to index.html.
