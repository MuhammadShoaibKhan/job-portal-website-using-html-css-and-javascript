// Home page JS: slider + footer year
document.getElementById('year').textContent = new Date().getFullYear();

let idx = 0;
const slides = document.getElementById('slides');
const total = slides.children.length;

function updateSlider() {
  slides.style.transform = `translateX(-${idx * 100}%)`;
}

setInterval(() => {
  idx = (idx + 1) % total;
  updateSlider();
}, 3000);
