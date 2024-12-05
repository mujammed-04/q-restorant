const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Track current slide
let currentIndex = 0;

// Move the slider
const moveSlider = (index) => {
  slider.style.transform = `translateX(-${index * 370}px)`;
};

// Click event for previous button
prevBtn.addEventListener('click', () => {
  currentIndex = Math.max(0, currentIndex - 1);
  moveSlider(currentIndex);
});

// Click event for next button
nextBtn.addEventListener('click', () => {
  currentIndex = Math.min(slider.children.length - 1, currentIndex + 1);
  moveSlider(currentIndex);
});
