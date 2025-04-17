const track = document.getElementById('menuTrack');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let index = 0;
const itemWidth = 320; // menu item width + gap
const visibleItems = Math.floor(window.innerWidth / itemWidth);

nextBtn.addEventListener('click', () => {
  const maxIndex = track.children.length - visibleItems;
  if (index < maxIndex) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

function updateCarousel() {
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}
