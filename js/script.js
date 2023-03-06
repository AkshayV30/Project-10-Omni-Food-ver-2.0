console.log("hello");
// const h1 = document.querySelector("#heading-primary");
// console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = "hallo"; //to change the html content

//   h1.style.color = "orange"; //to change the css style
// });

const yearUpdate = document.querySelector("#year");
const currentYear = new Date().getFullYear();
console.log(yearUpdate);

yearUpdate.textContent = currentYear;

//to make mobile nav work
const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      // document.body.classList.add("sticky");
      headerEL.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      // document.body.classList.remove("sticky");
      headerEL.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);
