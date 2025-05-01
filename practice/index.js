// Smooth Scrolling for Navigation Links
document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".mobile-menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("mobile-nav-open");
});

// Scroll Animations
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.clientHeight;

    if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
      section.classList.add("in-view");
    } else {
      section.classList.remove("in-view");
    }
  });
});
