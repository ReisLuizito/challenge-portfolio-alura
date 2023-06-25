/*
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});

*/

/*
const slides = document.querySelectorAll('.experiencie__box');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

const prevButton = document.querySelector('.arrow-left');
const nextButton = document.querySelector('.arrow-right');

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Exibir o primeiro slide inicialmente

*/

const galleryWrapper = document.querySelector('.gallery__wrapper');
const leftButton = document.querySelector('#left-button');
const rightButton = document.querySelector('#right-button');

const scrollAmount = 300;

leftButton.addEventListener('click', () => {
  galleryWrapper.scrollLeft -= scrollAmount;
});

rightButton.addEventListener('click', () => {
  galleryWrapper.scrollLeft += scrollAmount;
});