const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slides');
const slideItems = slider.querySelectorAll('.slide');
const prevButton = slider.querySelector('.prev');
const nextButton = slider.querySelector('.next');

let currentIndex = 0;

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
  showSlide();
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slideItems.length;
  showSlide();
}

function showSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;

  slideItems.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

showSlide();

const slider2 = document.querySelector('.slider1');
const slides2 = slider2.querySelector('.slides1');
const slideItems2 = slider2.querySelectorAll('.slide1');
const prevButton2 = slider2.querySelector('.controls1 .prev');
const nextButton2 = slider2.querySelector('.controls1 .next');

let currentIndex2 = 0;

prevButton2.addEventListener('click', showPrevSlide2);
nextButton2.addEventListener('click', showNextSlide2);

function showPrevSlide2() {
  currentIndex2 = (currentIndex2 - 1 + slideItems2.length) % slideItems2.length;
  showSlide2();
}

function showNextSlide2() {
  currentIndex2 = (currentIndex2 + 1) % slideItems2.length;
  showSlide2();
}

function showSlide2() {
  slides2.style.transform = `translateX(-${currentIndex2 * 100}%)`;

  slideItems2.forEach((slide, index) => {
    if (index === currentIndex2) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

showSlide2();