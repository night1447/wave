var swiper = new Swiper(".reviews__swiper", {
  slidesPerView: 2,
  centeredSlides: true,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  simulateTouch: true,
  keyboard: {
    enabled: true,
  },
  loop: true,
  loopedSlides: 2,
  loopPreventsSlide: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: false,
      slidesPerGroupSkip: 0,
    },
    992: {
      centeredSlides: true,
      slidesPerGroupSkip: 0,
    },
    1100: {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: -150,
      slidesPerGroupSkip: 0,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
