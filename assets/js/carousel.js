let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides");
const indicators = document.querySelectorAll(".slide-indicator");

function showSlide(n) {
  slides.forEach((s, i) => {
    s.classList.toggle("active", i === n);
    indicators[i].classList.toggle("active", i === n);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);
indicators.forEach((dot, i) => dot.addEventListener("click", () => {
  slideIndex = i;
  showSlide(slideIndex);
}));

setInterval(nextSlide, 15000);
showSlide(slideIndex);