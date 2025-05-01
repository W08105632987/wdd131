const images = document.querySelectorAll(".image-stack img");
let index = 0;

setInterval(() => {
  images.forEach((img, i) => {
    img.style.opacity = i === index ? "1" : "0.4";
    img.style.zIndex = i === index ? "1" : "0";
  });
  index = (index + 1) % images.length;
}, 5000);

// Typing animation
const textEl = document.querySelector(".typing");
const phrases = ["Landing Pages", "Portfolios", "Design Concepts"];
let phraseIndex = 0;
let charIndex = 0;
let typing = true;

function type() {
  if (typing) {
    if (charIndex < phrases[phraseIndex].length) {
      textEl.textContent += phrases[phraseIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      typing = false;
      setTimeout(type, 2000);
    }
  } else {
    if (charIndex > 0) {
      textEl.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, 50);
    } else {
      typing = true;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 500);
    }
  }
}

type();
