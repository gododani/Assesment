const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.slider-buttons span');
let index = 0;

function updateCarousel() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    slides[i].classList.remove('active-img');
    dots[i].classList.remove('active');
  }
  slides[index].style.display = 'block';
  slides[index].classList.add('active-img');
  dots[index].classList.add('active');
}

function nextSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  updateCarousel();
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  updateCarousel();
}

function goToSlide(n) {
  index = n;
  updateCarousel();
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    goToSlide(i);
  });
});

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
updateCarousel();
