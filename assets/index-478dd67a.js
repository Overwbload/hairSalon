import"./main-1a113a02.js";const g=[["person-3-resized.png","person-4-resized.png"],["person-5-resized.png","person-6-resized.png"],["person-7-resized.png","person-8-resized.png"],["person-9-resized.png","person-10-resized.png"],["person-12.jpg","person-13.jpg"],["person-14.jpg","person-15.jpg"],["person-16.jpg","person-17.jpg"],["person-18.jpg","person-19.jpg"],["person-20.jpg","person-21.jpg"]],o=document.querySelector(".hairstyle-trends-swiper .swiper-wrapper");let s="";g.forEach((p,n)=>{let e="";p.forEach((r,i)=>{n%2^i?e+=`
        <li>
          <img src="./${r}" alt="trending image" class="img-longer">
        </li>
      `:e+=`
        <li>
          <img src="./${r}" alt="trending image" class="img-shorter">
        </li>
      `}),s+=`
    <div class="swiper-slide">
      <ul class="list-unstyled">
        ${e}
      </ul>
    </div>
  `});o.innerHTML=s;
