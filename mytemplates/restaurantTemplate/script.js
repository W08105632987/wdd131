// script.js

// Typing effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Developer", "Designer", "Freelancer", "Creator"];
const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Toggle dark/light mode
const toggle = document.querySelector("#theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Smoke cursor
const cursor = document.querySelector(".cursor-smoke");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// Glitch text flicker
const glitchText = document.querySelectorAll(".glitch");
glitchText.forEach((el) => {
  setInterval(() => {
    el.classList.toggle("flicker");
  }, 1500);
});

// Scroll reveal effect (basic)
const revealElements = document.querySelectorAll(".reveal");
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
document.addEventListener("DOMContentLoaded", revealOnScroll);
