// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// import images for swiper
const gallery = Object.values(import.meta.glob("@assets/images/homepage/swiper/*.{jpg,png}", { eager: true, as: 'url' }));

// bundle with DOM element
const swiperWrapper = document.querySelector(".swiper-wrapper");

function renderData() {
  const table = [1, 0, 0, 1];
  let swiperSlide = "", swiperSlides = "";
  gallery.forEach((imgURL, imgIndex) => {
    if(table[imgIndex % 4]) {
      swiperSlide += `
        <li>
          <img src="${imgURL}" alt="trending image" class="img-shorter">
        </li>
      `;
    }
    else {
      swiperSlide += `
        <li>
          <img src="${imgURL}" alt="trending image" class="img-longer">
        </li>
      `;
    }
    if(imgIndex % 2) {
      swiperSlides += `
        <div class="swiper-slide">
          <ul class="list-unstyled">
            ${swiperSlide}
          </ul>
        </div>
      `;
      swiperSlide = "";
    }
  });
  swiperWrapper.innerHTML = swiperSlides;
}

// init DOM element
renderData();

// init swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 24,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletActiveClass: "swiper-pagination-bullet-active bg-black-100"
  },
  keyboard: {
    enable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 4
    }
  }
});