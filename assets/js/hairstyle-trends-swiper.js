const trendingModels = [
  ["person-3-resized.png", "person-4-resized.png"],
  ["person-5-resized.png", "person-6-resized.png"],
  ["person-7-resized.png", "person-8-resized.png"],
  ["person-9-resized.png", "person-10-resized.png"],
  ["person-12.jpg", "person-13.jpg"],
  ["person-14.jpg", "person-15.jpg"],
  ["person-16.jpg", "person-17.jpg"],
  ["person-18.jpg", "person-19.jpg"],
  ["person-20.jpg", "person-21.jpg"],
]

const swiperWrapper = document.querySelector(".hairstyle-trends-swiper .swiper-wrapper");

let swiperHtml = "";
trendingModels.forEach((imgColumn, imgColumnIndex) => {
  let imgHtml = "";
  imgColumn.forEach((img, imgIndex) => {
    if((imgColumnIndex % 2) ^ imgIndex) {
      imgHtml += `
        <li>
          <img src="./${img}" alt="trending image" class="img-longer">
        </li>
      `
    }
    else {
      imgHtml += `
        <li>
          <img src="./${img}" alt="trending image" class="img-shorter">
        </li>
      `
    }
  });
  swiperHtml += `
    <div class="swiper-slide">
      <ul class="list-unstyled">
        ${imgHtml}
      </ul>
    </div>
  `
});

// render the element
swiperWrapper.innerHTML = swiperHtml;