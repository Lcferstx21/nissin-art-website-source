# Nissin Art Website Source Code

Source code for the official website of Nissin Art, built as a responsive multilingual web experience for presenting the school, courses, admissions information, student results, teachers, FAQs, and contact flow.

I served as the project lead for this website. My responsibilities covered overall communication and coordination with stakeholders, participation in the visual and interaction design process, and the independent implementation, production deployment, launch, and ongoing maintenance of the site.

## Project Highlights

- Led end-to-end project coordination, including requirement communication, schedule alignment, implementation planning, and delivery.
- Participated in page structure, visual direction, interaction details, and responsive experience design.
- Independently developed the frontend using React, TypeScript, Vite, Tailwind CSS, and modern component-based architecture.
- Implemented a multilingual content structure for Chinese, Japanese, and English audiences.
- Built reusable UI components for navigation, animated text, results, teacher profiles, contact blocks, FAQ sections, and page-level layouts.
- Completed production deployment, launch support, and post-launch maintenance.

## Technical Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- i18next / react-i18next
- GSAP
- Formspree
- Lucide React

## Main Features

- Responsive home page with desktop and mobile-specific presentation.
- Multilingual pages and content files for Chinese, Japanese, and English.
- Course, schedule, admission, results, team, Q&A, and contact sections.
- Animated UI elements and visual transitions.
- Structured student result and teacher profile data.
- Contact form integration.
- Static asset management for images, video, PDFs, and public media.

## Project Structure

```text
public/              Static public assets
src/
  Pages/             Page-level React views
  components/        Reusable UI and data components
  layout/            Navigation and shared layout elements
  locales/           Multilingual content resources
  assets/            Local media and brand assets
```

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Portfolio Note

This repository is prepared as a portfolio source-code version. Server deployment scripts, environment files, build output, dependency folders, and machine-local cache files are intentionally excluded from the public repository.

