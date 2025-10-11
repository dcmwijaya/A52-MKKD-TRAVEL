const hamburger = document.querySelector(".hamburger");
const navbarRight = document.querySelector(".navbar-right");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbarRight.classList.toggle("active");
});

document.querySelectorAll(".navbar-right a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbarRight.classList.remove("active");
  });
});