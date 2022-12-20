// * handle menu
const menu = document.querySelector("#nav-menu");
const toggleMenu = document.querySelector("#toggleMenu");

toggleMenu.addEventListener("click", (e) => {
  menu.classList.toggle("open-menu");
});

const swiper = new Swiper(".mySwiper", {
  cssMode: true,
  speed: 3000,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    disabledClass: "disabled_swiper_button",
  },
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
});
const arr = ["Hồ Chí Minh", "Hà Nội", "Đà Nẵng"];
const place = document.querySelector(".banner-pl");

const prevSlideBtn = document.querySelector("#prevSlide");
const nextSlideBtn = document.querySelector("#nextSlide");

document.querySelector("#nextSlide span").innerText = arr[1];

prevSlideBtn.addEventListener("click", () => {
  swiper.slidePrev();
});
nextSlideBtn.addEventListener("click", () => {
  swiper.slideNext();
});

swiper.on("slideChange", function (e) {
  const prevSpan = document.querySelector("#prevSlide span");
  const nextSpan = document.querySelector("#nextSlide span");

  let currentIdx = swiper.activeIndex;
  let prevIdx = swiper.activeIndex - 1;
  let nextIdx = swiper.activeIndex + 1;

  if (currentIdx < 1) {
    prevSpan.innerText = "";
    nextSpan.innerText = arr[nextIdx];
    return;
  }
  if (currentIdx === arr.length - 1) {
    nextSpan.innerText = "";
    prevSpan.innerText = arr[prevIdx];
    return;
  }

  prevSpan.innerText = arr[prevIdx];
  nextSpan.innerText = arr[nextIdx];
});
