var swiper = new Swiper(".quotesSwiper", {
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    prevEl: "#prev",
    nextEl: "#next",
  },
  loop: true,
  speed: 2500
});