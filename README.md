# Personal Developer Portfolio

A personal portfolio for presenting Veeramani's work and background as a full-stack developer. Its terminal-inspired interface showcases projects, skills, and professional experience.

## Features

- Terminal-inspired interface with responsive navigation.
- Day and night theme toggle, defaulting to night mode and remembering the selected theme.
- Home page with an animated terminal introduction, featured skills, and selected projects.
- Project gallery with filters for project type.
- Pages for biography, skills, work experience, and contact links.
- Animated page sections, terminal typewriter prompts, and smooth scrolling.
- Downloadable resume.

## Tech Stack

- [Next.js](https://nextjs.org/) 14 with the App Router
- [React](https://react.dev/) 18
- JavaScript
- Custom CSS, organized in `public/assets/css/` (no Bootstrap dependency)
- `next-themes` for theme switching
- Framer Motion for animations
- Lenis for smooth scrolling
- React Icons
- npm for package management

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/skills` | Skills |
| `/projects` | Projects |
| `/experience` | Experience |
| `/contact` | Contact |

## Project Structure

```text
.
├── public/
│   ├── assets/css/       # Global, shared, and page-specific stylesheets
│   └── resume.pdf        # Downloadable resume
├── src/
│   ├── app/              # App Router layout and page routes
│   ├── components/       # Shared UI, navigation, terminal, and page components
│   ├── data/             # Portfolio profile, projects, and skills
│   └── lib/              # Shared utilities and animation variants
├── package.json
└── package-lock.json
```

## Getting Started

### Requirements

- Node.js 18.17 or newer
- npm
- Git

### Clone the repository

Replace `<repository-url>` with the URL of this repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

## Installation

Install the project dependencies using the lockfile:

```bash
npm ci
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |

## Customization

- Update profile details, navigation links, featured skills, and experience in `src/data/profile.js`.
- Update project entries in `src/data/projects.js` and skill categories in `src/data/skills.js`.
- Edit shared styles in `public/assets/css/global.css`, or change page and component styles in the corresponding CSS files in that folder.
- Replace `public/resume.pdf` to update the downloadable resume.

## Future Improvements

Potential enhancements, not currently implemented:

- Add automated tests for pages and interactive features.
- Add accessibility checks for keyboard navigation and color contrast.
- Add a project detail page for selected work.
