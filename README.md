# SoftNanoLab Website

🌐 **Live site**: [softnanolab.com](https://softnanolab.com)

React + Vite site for SoftNanoLab deployed to Vercel.

## Prerequisites

- Node.js 20.x (matches the CI deploy workflow)
- npm (ships with Node)

## Install & Run Locally

- Install dependencies: `npm ci`
- Start dev server: `npm run dev` (Vite will print the local URL, typically http://localhost:5173)
- Build for production: `npm run build` (output in `dist/`)
- Preview the production build locally: `npm run preview`

## Deploy

- Pushing to `main` automatically triggers a deployment to Vercel.
- The site is available at [softnanolab.com](https://softnanolab.com).
