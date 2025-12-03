
# Project Blueprint

## Overview

This is a personal portfolio website for Kwini, a professional with expertise in SEO, Email & Design, and Programming. The site showcases her skills, services, and projects.

## Implemented Features

*   **Homepage:** A landing page with a hero section, projects overview, tools, an about me summary, and a contact form.
*   **Projects Section:** A four-card layout showcasing projects in SEO & Web Copywriting, Email & Designs, Code Programming, and AI Generation.
*   **Project Pages:** Separate pages for each project with detailed information and visuals.
*   **About Me Page:** A more detailed about me page with a CV.
*   **Responsive Design:** The website is designed to be responsive and work on different screen sizes.
*   **Interactive Animations:** Advanced hover animations on project cards to enhance user experience.
*   **Layout Adjustments:** Reduced padding in the "Hero" and "About Me" sections for a more compact design.
*   **Content Correction:** Corrected job description mismatches on the "About Me" page.
*   **Copyright Update:** Updated the copyright year to 2025 across all pages.
*   **Web Component Footer:** Replaced the static footer with a reusable `<main-footer>` web component for better code management and consistency.

## Current Task: Footer Web Component Implementation

*   **Problem:** The footer was a static HTML block repeated across multiple pages, making it difficult to maintain and update.
*   **Solution:**
    *   Created a new web component, `<main-footer>`, to encapsulate the footer's HTML structure, styling, and behavior.
    *   The component is defined in `main.js` and includes the copyright notice and a "scroll to top" button.
    *   Replaced the static footer with the `<main-footer>` tag in all relevant HTML files (`index.html`, `about.html`, `ai-generation.html`, `bfcm-project.html`, `design.html`, `designer.html`, `email-project.html`, `frontend.html`, `maintenance.html`, `programming.html`, `zenita-project.html`).
    *   Updated the script tags to be of `type="module"` to support the web component.
