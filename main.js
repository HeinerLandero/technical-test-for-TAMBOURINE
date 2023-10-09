document.addEventListener('DOMContentLoaded', function () {
  const counterElement = document.getElementById('counter');
  const incrementButton = document.getElementById('right-arrow');
  const decrementButton = document.getElementById('left-arrow');

  let count = 0;

  function updateCounter() {
    counterElement.textContent = count.toString().padStart(2, '0');
  }

  incrementButton.addEventListener('click', function () {
      count += 1;
      updateCounter();
  });

  decrementButton.addEventListener('click', function () {
      count -= 1;
      updateCounter();
  });

  document.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowRight') {
          count += 1; 
          updateCounter();
      } else if (event.key === 'ArrowLeft') {
          count -= 1; 
          updateCounter();
      }
  });
});



/* Swiper */
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });