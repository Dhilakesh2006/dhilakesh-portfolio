# Dhilakesh B — Developer Portfolio

Personal developer portfolio for **Dhilakesh B**, a final-year B.E. Computer
Science and Engineering student and aspiring Java Full Stack Developer.

Built with React + Vite + Tailwind CSS, with Framer Motion for scroll
reveals and EmailJS for the contact form.

## Sections

- Hero (Home)
- About
- Skills
- Experience
- Projects
- Achievements
- Certifications
- Contact

## Editing content

Almost everything on the site (profile info, skills, experience, projects,
achievements, certifications) lives in one file:

```
src/data/portfolio.js
```

Update that file and the relevant sections will reflect the change — no
need to touch the component markup for routine content updates.

The résumé served by the "Download Resume" button lives at
`public/resume.pdf`; replace that file to update the download.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

This project already includes `gh-pages` as a dev dependency and a
`deploy` script:

```bash
npm run deploy
```

## Tech stack

- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion
- EmailJS (contact form)
