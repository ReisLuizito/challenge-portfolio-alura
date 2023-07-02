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