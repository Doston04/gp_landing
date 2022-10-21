var swiper = new Swiper(".newSwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 20,
  mousewheel: true,
  navigation: {
    prevEl: "#prevVS",
    nextEl: "#nextVS",
  },
  speed: 1200
});