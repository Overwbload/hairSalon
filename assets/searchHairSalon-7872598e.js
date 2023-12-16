import"./main-fc620cef.js";const d=JSON.parse(localStorage.getItem("areaEnCh")),s=JSON.parse(localStorage.getItem("areaSearchPanelResult")),i=document.querySelector(".area-tags"),f=document.querySelector(".dropdown-search-category"),l=document.querySelector(".dropdown-search-area"),r=document.querySelector(".searchSalon");function n(t){return d[t]===void 0?"not found":d[t]}function p(){i.innerHTML="",f.innerHTML="",l.innerHTML="",r.innerHTML=""}function u(){let t="",a="";s.districts===void 0?a=`
      <p class="text-center fs-md-32 fs-20">查無資料，請重新搜尋！</p>
    `:s.districts.forEach(e=>{t+=`
        <li><button type="button" class="dropdown-item py-2 fs-md-20 fs-16" data-search-district="${e.districtName}">${n(e.districtName)}</button></li>
      `,e.salons.forEach(o=>{a+=`
          <li class="col-lg-4 mb-6 overflow-hidden">
            <a href="./salonInfo.html" class="position-relative">
              <div class="position-absolute top-0 start-0 opacity-20 w-100 h-100 fullMask"></div>
              <img class="object-fit-cover w-100" src="./${o.thumbnail}" alt="">
              <h3 class="searchInfo d-flex gap-2 align-items-center py-2 px-4 position-absolute start-0 bg-black-60 bg-opacity-50 w-100">
                <img class="rounded-circle object-fit-cover" src="./salon-logo-01.png" alt="">
                <p class="text-black-0 ls-tiny-5 font-noto-serif">${o.salonName}</p>
              </h3>
            </a>
          </li>
        `})}),i.innerHTML=`
    <li class="fs-28 ls-tiny-5">#${n(s.cityName)}</li>
  `,f.innerHTML=`
    <button type="button"
      class="d-flex justify-content-between align-items-center btn btn-black-0 dropdown-toggle py-3 border-black-100 fs-md-20 fs-16 w-100 text-start"
      id="searchOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,10">
      找店家
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
              d="M12.2963 16.844C12.56 16.8365 12.786 16.7386 12.9894 16.5352L18.7224 10.6741C18.8881 10.5008 18.9785 10.2974 18.9785 10.0488C18.9785 9.54408 18.5868 9.15234 18.082 9.15234C17.841 9.15234 17.615 9.25028 17.4417 9.42355L12.2963 14.697L7.15095 9.42355C6.97768 9.25028 6.75921 9.15234 6.5106 9.15234C6.00586 9.15234 5.61412 9.54408 5.61412 10.0488C5.61412 10.2899 5.70452 10.5008 5.87026 10.6741L11.6108 16.5352C11.8066 16.7461 12.0326 16.844 12.2963 16.844Z"
              fill="#1C1C1E" />
      </svg>
    </button>
    <ul class="dropdown-menu" aria-labelledby="searchOffset">
      <li><button type="button" class="dropdown-item py-2 fs-md-20 fs-16">找髮型</button></li>
      <li><button type="button" class="dropdown-item py-2 fs-md-20 fs-16">找店家</button></li>
      <li><button type="button" class="dropdown-item py-2 fs-md-20 fs-16">找設計師</button></li>
    </ul>
  `,l.innerHTML=`
    <button type="button"
      class="d-flex justify-content-between align-items-center btn btn-black-0 dropdown-toggle py-3 border-black-100 fs-md-20 fs-16 w-100 text-start"
      id="searchAreaOffset" data-bs-toggle="dropdown" aria-expanded="false"
      data-bs-offset="0,10">
      <span>請選擇區域</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.2963 16.844C12.56 16.8365 12.786 16.7386 12.9894 16.5352L18.7224 10.6741C18.8881 10.5008 18.9785 10.2974 18.9785 10.0488C18.9785 9.54408 18.5868 9.15234 18.082 9.15234C17.841 9.15234 17.615 9.25028 17.4417 9.42355L12.2963 14.697L7.15095 9.42355C6.97768 9.25028 6.75921 9.15234 6.5106 9.15234C6.00586 9.15234 5.61412 9.54408 5.61412 10.0488C5.61412 10.2899 5.70452 10.5008 5.87026 10.6741L11.6108 16.5352C11.8066 16.7461 12.0326 16.844 12.2963 16.844Z"
          fill="#1C1C1E" />
      </svg>
    </button>
    <ul class="dropdown-menu" aria-labelledby="searchAreaOffset">
      <li><button type="button" class="dropdown-item py-2 fs-md-20 fs-16" data-search-district="allArea">所有區域</button></li>
      ${t}
    </ul>
  `,r.innerHTML=a}function b(t){if(t==="allArea"){if(s.districts===void 0)return;l.querySelector("button:first-child span").textContent="所有區域",i.innerHTML=`
      <li class="fs-28 ls-tiny-5">#${n(s.cityName)}</li>
    `;let e="";s.districts.forEach(o=>{o.salons.forEach(c=>{e+=`
          <li class="col-lg-4 mb-6 overflow-hidden">
            <a href="./salonInfo.html" class="position-relative">
              <div class="position-absolute top-0 start-0 opacity-20 w-100 h-100 fullMask"></div>
              <img class="object-fit-cover w-100" src="./${c.thumbnail}" alt="">
              <h3 class="searchInfo d-flex gap-2 align-items-center py-2 px-4 position-absolute start-0 bg-black-60 bg-opacity-50 w-100">
                <img class="rounded-circle object-fit-cover" src="./salon-logo-01.png" alt="">
                <p class="text-black-0 ls-tiny-5 font-noto-serif">${c.salonName}</p>
              </h3>
            </a>
          </li>
        `})}),r.innerHTML=e;return}let a="";l.querySelector("button:first-child span").textContent=n(t),i.innerHTML=`
    <li class="fs-28 ls-tiny-5">#${n(s.cityName)}</li>
    <li class="fs-28 ls-tiny-5">#${n(t)}</li>
  `,s.districts.forEach(e=>{e.districtName===t&&e.salons.forEach(o=>{a+=`
          <li class="col-lg-4 mb-6 overflow-hidden">
            <a href="./salonInfo.html" class="position-relative">
              <div class="position-absolute top-0 start-0 opacity-20 w-100 h-100 fullMask"></div>
              <img class="object-fit-cover w-100" src="./${o.thumbnail}" alt="">
              <h3 class="searchInfo d-flex gap-2 align-items-center py-2 px-4 position-absolute start-0 bg-black-60 bg-opacity-50 w-100">
                <img class="rounded-circle object-fit-cover" src="./salon-logo-01.png" alt="">
                <p class="text-black-0 ls-tiny-5 font-noto-serif">${o.salonName}</p>
              </h3>
            </a>
          </li>
        `})}),r.innerHTML=a}p();u();const h=l.querySelectorAll(".dropdown-menu button");h.forEach(t=>{t.addEventListener("click",a=>{b(t.getAttribute("data-search-district"))})});
