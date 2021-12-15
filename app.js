// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
navToggle.addEventListener("click", () => {
  // linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;

  const linksHeight = links.getBoundingClientRect().height;
  // console.log(containerHeight);
  // console.log(linksHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const goUpbtn = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
  // console.log(window.pageYOffset);
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    goUpbtn.classList.add("show-link");
  } else {
    goUpbtn.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Stop default event from happening
    e.preventDefault();
    // Navigate to target section
    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(id);
    const element = document.getElementById(id);
    // Get navbar height
    const navHeight = navbar.getBoundingClientRect().height;
    // Get container height
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // Flag
    const isNavFixed = navbar.classList.contains("fixed-nav");
    let pos = element.offsetTop - navHeight;
    // console.log(pos);

    if (!isNavFixed) {
      pos = pos - navHeight;
    }
    if (navHeight > 70) {
      pos = pos + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: pos,
    });
    // Closing off navbar
    linksContainer.style.height = 0;
  });
});
