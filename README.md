# Vempalli Fazil · The Series

A cinematic portfolio for my work as a Test Engineer at Infosys in Chennai. Choose a viewer profile to explore my experience, projects and skills in a different order.

![Portfolio cover](public/assets/og-image.jpg)

## Explore the series

- **Recruiter** opens with my résumé, achievements and certifications.
- **Developer** puts LearnMoreApp, its enrollment workflow and my automation training first.
- **Fazil** follows the complete story from engineering college to Infosys.
- **Explorer** starts with the career timeline and highlights.

LearnMoreApp is my Infosys training capstone. It connects Angular screens to an ASP.NET Core API and SQL Server for course management and enrollment. The automation feature covers browser interactions, locators, waits and TestNG suite execution in Java.

## Run locally

With Node.js 22 installed, run `npm ci` followed by `npm run dev`. To launch the included build, run `node launch.mjs` or double-click `Launch-Windows.cmd`.

## Customize and publish

Edit `src/data/portfolio.ts` for content, `src/components/` for presentation, and `public/assets/` for images and the résumé. Run `npm run build` to type-check and build the site. The included GitHub Pages workflow builds for the repository path and deploys pushes to main once GitHub Actions is selected as the Pages source.

Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and Lenis. Adapted from [Portfolio_series by Sushmita Dasari](https://github.com/Sushmitadasari/Portfolio_series).
