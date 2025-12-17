# SoftNanoLab Website

React + Vite site for SoftNanoLab published to GitHub Pages with a custom domain.

## Prerequisites
- Node.js 20.x (matches the CI deploy workflow)
- npm (ships with Node)

## Install & Run Locally
- Install dependencies: `npm ci`
- Start dev server: `npm run dev` (Vite will print the local URL, typically http://localhost:5173)
- Build for production: `npm run build` (output in `dist/`)
- Preview the production build locally: `npm run preview`

## Deploy
- Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys `dist/` to GitHub Pages.
- You can also run the workflow manually from the GitHub Actions tab via **Run workflow**.
- The custom domain is set to `softnanolab.com` via the `CNAME` file; keep that file in the repository so the domain stays mapped after deploys.
