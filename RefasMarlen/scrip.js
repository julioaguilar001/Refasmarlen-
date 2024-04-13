let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.gallery img');
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  const offset = -slideIndex * 100;
  document.querySelector('.gallery').style.transform = `translateX(${offset}%)`;
}
