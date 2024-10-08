
window.onscroll = function () {
  const backToTopBtn = document.getElementById("back-to-top");

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const offset = -index * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

setInterval(nextSlide, 5000);

