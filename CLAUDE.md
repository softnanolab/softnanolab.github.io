# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SoftNanoLab website built with React + Vite, deployed to GitHub Pages at softnanolab.com. The site features a retro/pixel aesthetic with animations powered by Framer Motion.

## Development Commands

```bash
# Install dependencies (use ci for reproducible builds)
npm ci

# Development server (typically runs at http://localhost:5173)
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview

# Linting and formatting
npm run lint              # Check for linting errors
npm run lint:fix          # Auto-fix linting issues
npm run format            # Format all code
npm run format:check      # Check formatting without changes
```

## Deployment

- Pushing to `main` triggers `.github/workflows/deploy.yml` which builds and deploys to GitHub Pages
- Can also run workflow manually from GitHub Actions tab
- Custom domain `softnanolab.com` is configured via CNAME file (keep this file in repo)
- Requires Node.js 20.x (matches CI environment)

## Architecture

### Data-Driven Content System

All content is managed through TypeScript data files in `src/data/`:

- **`team.ts`**: Current team members (`team[]`) and past members (`pastMembers[]`). Each member has optional `image`, `email`, and `socialLinks`. The `getNameSlug()` function converts names to URL-friendly slugs for person detail pages.

- **`publications.ts`**: Publication list with authors. Authors marked with `isTeamMember: true` become clickable links to their person pages (includes past members).

- **`projects.ts`**: Project metadata that can link to detail pages with markdown content in `src/content/projects/`.

- **`site.ts`**: Global site configuration including nav links, marquee text, and footer. To add a new navigation item, add to `navLinks` array and ensure corresponding route exists in `src/main.tsx`.

- **`hooks.ts`**: Custom React hooks. `usePersonBySlug()` searches both `team` and `pastMembers` arrays to support linking to past member profiles.

- **`updates.ts`**, **`opensource.ts`**: Content for lab updates and open source projects pages.

### Routing & Navigation

**HashRouter** is used (not BrowserRouter) for GitHub Pages compatibility. Routes are defined in `src/main.tsx`:

- Static pages: `/`, `/team`, `/publications`, `/updates`, `/opensource`, `/outreach`
- Dynamic routes: `/person/:id` (team member detail), `/project/:id` (project detail)

**Important**: The person slug uses `getNameSlug()` helper. When linking to team members from publications or other pages, always use:

```tsx
<Link to={`/person/${getNameSlug(memberName)}`}>
```

### Page Components Architecture

**Layout wrapper** (`src/components/Layout.tsx`): All pages render inside this layout which provides header, nav, footer, and retro visual effects (scanlines, vintage overlay). Navigation is auto-generated from `site.navLinks`.

**Detail pages** (`PersonDetail.tsx`, `ProjectDetail.tsx`): These load optional markdown content from `src/content/people/` or `src/content/projects/` using Vite's `import.meta.glob()`. The markdown files are named using slugified IDs (e.g., `dr-stefano-angioletti-uberti.md`). Basic markdown parsing is implemented inline (headers, paragraphs, lists).

**Home page special sections**: Home displays the 2 most recent items from publications, updates, and open source projects, with "VIEW ALL" buttons linking to full pages.

### Media Assets

Media files are organized in `public/` subdirectories:

- `public/logos/`: Logo images (e.g., bagel-logo.png)
- `public/media/`: Videos, event photos (e.g., profam.mp4, in_silico.jpeg)
- `public/team/`: Team member photos

Reference these in code with absolute paths like `/logos/bagel-logo.png` (Vite serves from `public/` root).

### Styling

Single CSS file: `src/index.css` contains all styles including:

- CSS variables for colors and fonts (retro pixel theme)
- Component-specific classes (e.g., `.christmas-section`, `.team-card`)
- Pixel font styling and animations
- Responsive breakpoints

**Email display**: Use `.email-text` class for non-clickable email text, not `.email-link`.

**Link behavior**: Markdown-style links in bio text (`[text](url)`) are parsed by `parseBioLinks()` helper function found in relevant page components.

### Content Updates

**Adding a team member**: Add to `team[]` array in `src/data/team.ts`. If past member, add to `pastMembers[]` instead. Include `socialLinks` object for LinkedIn, GitHub, Google Scholar, X, or personal website.

**Adding a publication**: Add to `publications[]` in `src/data/publications.ts`. Mark authors with `isTeamMember: true` to make them clickable. The list auto-sorts by `date` field.

**Adding a lab update**: Add to `labUpdates[]` in `src/data/updates.ts`. Can include optional media (image or video) with clickable link.

**Updating navigation**: Modify `navLinks` in `src/data/site.ts` and add corresponding route in `src/main.tsx`.

## Code Quality

Pre-commit hooks (husky + lint-staged) automatically run ESLint and Prettier on staged files. Configurations:

- ESLint: `eslint.config.js`
- Prettier: `.prettierrc`
- TypeScript: `tsconfig.json`, `tsconfig.node.json`
