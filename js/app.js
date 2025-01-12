/**
 *
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
 *
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

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildNav() {
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

    navItem.appendChild(navLink);
    fragment.appendChild(navItem);
  });

  // Insert the generated menu into the navbar container
  const navbarList = document.getElementById("navbar__list");
  navbarList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
window.onload = buildNav;

// Scroll to section on link click

// Set sections as active
