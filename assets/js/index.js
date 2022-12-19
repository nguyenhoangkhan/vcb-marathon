var swiper = new Swiper(".mySwiper", {
  cssMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
const arr = ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng"];
const place = document.querySelector(".banner-pl");
const btn = document.querySelector("#d");
btn.addEventListener("click", () => {
  let crindex = swiper.realIndex;
  swiper.slideNext();
});

// * handle menu
const menu = document.querySelector("#nav-menu");
const toggleMenu = document.querySelector("#toggleMenu");

toggleMenu.addEventListener("click", (e) => {
  menu.classList.toggle("open-menu");
});
