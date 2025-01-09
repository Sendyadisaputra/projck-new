//work patener slider

var swiper = new Swiper(".Swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    deley: 100,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 1,
    },
  },
});

//show mwnu

let bar = document.querySelector(".bras");
let menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});
