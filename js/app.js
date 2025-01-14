/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");
const navLinks = []; // you can edit them later, without having to query the dom for them again

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// Helper function to remove active classes from sections and links
const removeActiveClasses = () => {
  sections.forEach((section) => section.classList.remove("your-active-class"));
  navLinks.forEach((link) => link.classList.remove("active"));
};

// Initialize the nav toggle button
const initializeNavToggle = () => {
  const navToggle = document.querySelector(".nav-toggle");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Build the navigation menu dynamically
const buildNav = () => {
  const fragment = document.createDocumentFragment();

  // Early exit if no sections exist
  if (!sections.length) return;

  sections.forEach((section) => {
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");

    const sectionId = section.id;
    const sectionTitle =
      section.querySelector("h2")?.textContent || "Untitled Section"; // Fallback for missing h2

    navLink.textContent = sectionTitle;
    navLink.href = `#${sectionId}`;
    navLink.classList.add("menu__link");
    navLink.setAttribute("data-target", sectionId);

    // Store the link for later reference
    navLinks.push(navLink);

    navItem.appendChild(navLink);
    fragment.appendChild(navItem);
  });

  // Insert the generated menu into the navbar container
  navList.appendChild(fragment);
};

// Add 'active' class to section when near top of viewport
const setActiveSection = () => {
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    // Check if the section is in the viewport
    if (rect.top >= -50 && rect.top <= 300) {
      removeActiveClasses();

      // Add 'your-active-class' to the section
      section.classList.add("your-active-class");

      // Add 'active' class to the corresponding nav link
      navLinks[index].classList.add("active");
    }
  });
};

// Scroll to anchor ID and close menu on small screens
const enableSmoothScrolling = () => {
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default anchor behavior

      // Get the target section's ID from the data-target attribute
      const targetId = link.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      // Scroll to the target section with smooth behavior
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Close the menu on small screens
      if (navList.classList.contains("active")) {
        navList.classList.remove("active");
      }
    });
  });
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  // Build menu
  buildNav();

  // Highlight active section and nav link on scroll
  window.addEventListener("scroll", setActiveSection);

  // Scroll to section on nav link click
  enableSmoothScrolling();

  // Initialize the nav toggle
  initializeNavToggle();
});
