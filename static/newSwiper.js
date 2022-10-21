var swiper1 = new Swiper(".horizontal_swiper", {
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 300,
  allowTouchMove: false
});

var swiper2 = new Swiper(".vertical_swiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  speed: 300,
  allowTouchMove: false
});

swiper1.controller.control = swiper2
swiper2.controller.control = swiper1
