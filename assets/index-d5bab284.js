import{_,a as g,b as o,c as r,d as t,e as l,f as n,h as m,i as w,j as b,k as c,l as v,m as h,n as d,o as u,p as j,q as f,r as y}from"./main-6296f0c4.js";import{S as k}from"./swiper-bundle-136d2510.js";const S=Object.values(Object.assign({"/assets/images/homepage/swiper/person-001.png":_,"/assets/images/homepage/swiper/person-002.png":g,"/assets/images/homepage/swiper/person-003.png":o,"/assets/images/homepage/swiper/person-004.png":r,"/assets/images/homepage/swiper/person-005.png":t,"/assets/images/homepage/swiper/person-006.png":l,"/assets/images/homepage/swiper/person-007.png":n,"/assets/images/homepage/swiper/person-008.png":m,"/assets/images/homepage/swiper/person-009.jpg":w,"/assets/images/homepage/swiper/person-010.jpg":b,"/assets/images/homepage/swiper/person-011.jpg":c,"/assets/images/homepage/swiper/person-012.jpg":v,"/assets/images/homepage/swiper/person-013.jpg":h,"/assets/images/homepage/swiper/person-014.jpg":d,"/assets/images/homepage/swiper/person-015.jpg":u,"/assets/images/homepage/swiper/person-016.jpg":j,"/assets/images/homepage/swiper/person-017.jpg":f,"/assets/images/homepage/swiper/person-018.jpg":y})),O=document.querySelector(".swiper-wrapper");function $(){const p=[1,0,0,1];let e="",s="";S.forEach((a,i)=>{p[i%4]?e+=`
        <li>
          <img src="${a}" alt="trending image" class="img-shorter">
        </li>
      `:e+=`
        <li>
          <img src="${a}" alt="trending image" class="img-longer">
        </li>
      `,i%2&&(s+=`
        <div class="swiper-slide">
          <ul class="list-unstyled">
            ${e}
          </ul>
        </div>
      `,e="")}),O.innerHTML=s}$();new k(".swiper",{slidesPerView:2,spaceBetween:24,freeMode:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0,bulletActiveClass:"swiper-pagination-bullet-active bg-black-100"},keyboard:{enable:!0},autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{768:{slidesPerView:4}}});
