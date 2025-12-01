
# Kwini's Portfolio Blueprint

This document outlines the structure, design, and features of Kwini's personal portfolio website.

## **I. Overview**

The portfolio is a single-page application designed to showcase Kwini's skills and services in web development, design, and SEO. It features a clean, modern design with interactive elements and a responsive layout that adapts to various screen sizes.

## **II. Project Structure**

The project consists of the following files:

*   `index.html`: The main HTML file containing the structure of the website.
*   `style.css`: The CSS file for styling the website.
*   `main.js`: The JavaScript file for dynamic features and interactivity.
*   `designer.html`: A page with more information about Kwini's design services.
*   `frontend.html`: A page with more information about Kwini's frontend development services.
*   `seo.html`: A page with more information about Kwini's SEO services.
*   `images/`: A folder to store images for the website.

## **III. Design and Style**

### **A. Colors**

*   Background: `#1f242d` (dark blue-gray)
*   Secondary Background: `#323946` (medium blue-gray)
*   Text: `#fff` (white)
*   Main/Accent: `#0ef` (cyan)

### **B. Typography**

*   Font: "Poppins", sans-serif
*   The site uses a range of font sizes and weights to create a clear visual hierarchy.

### **C. Layout**

*   The website is a single-page layout with sections for Home, Services, Tools, About Me, and Contact Me.
*   It uses a responsive design that adapts to different screen sizes, with breakpoints at 1200px, 991px, 768px, 617px, and 450px.

## **IV. Features**

### **A. Navigation**

*   A fixed navigation bar at the top of the page allows for easy navigation between sections.
*   On smaller screens, the navigation bar collapses into a menu icon.

### **B. Home Section**

*   A hero section with a brief introduction and a call-to-action button.
*   A dynamic text animation that cycles through Kwini's different roles (Frontend Developer, UI/UX Designer, SEO Specialist).

### **C. Services Section**

*   A section that highlights Kwini's main services: Code/Programming, Email & Design, and SEO.
*   Each service has a "Read More" button that links to a separate page with more information.

### **D. Tools Section**

*   A section that showcases the tools and technologies Kwini uses, categorized by area (Design, Development, Platforms, SEO, Communication, Productivity).

### **E. About Me Section**

*   A section with a more detailed description of Kwini's background and skills.

### **F. Contact Me Section**

*   A contact form that allows visitors to send a message to Kwini.

### **G. Footer**

*   A footer with copyright information and a button that scrolls back to the top of the page.

## **V. Current Task: Fix Image and Dynamic Text (Completed)**

### **A. Plan**

1.  **Diagnose the root cause of the issue:** The external image link was unreliable and causing display issues.
2.  **Store the image locally:** Create an `images` folder within the project and download the image to it. This ensures the image is always available and avoids external dependencies.
3.  **Update `index.html`:** Change the `src` attribute of the `<img>` tags to point to the new local image path (`images/portfolio-image.jpg`).
4.  **Update `style.css`:** Update the `background-image` property in the CSS to use the same local image path.

### **B. Steps Taken**

1.  An `images` folder was created in the project root.
2.  The portfolio image was downloaded from its external URL and saved as `portfolio-image.jpg` inside the `images` folder.
3.  The `index.html` file was updated to use `<img src="images/portfolio-image.jpg">`.
4.  The `style.css` file was updated with `background-image: url('images/portfolio-image.jpg');`.
5.  The website now correctly displays the portfolio image from the local project files.
