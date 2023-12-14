// Jason code
//searchHairStyle.html  <!-- search tag --> 外層增加class (searchTag) 、 <!-- search 髮型結果 --> ul 增加class (searchHairResult)
//data資料開始///
let hairData = [
    {
      category: 'lady',
      長髮: [
        {
          imgSrc: "../assets/images/searchStylepage/hairStyle-long-1-1.jpg",
          storeImgSrc: "",
          storeName: "",
          stroeAddress: "",
          modalPic1: "",
          modalPic2: "",
          modalPic3: "",
          styleIntro: "",
          styListImg: "",
          styListName: "",
          styListIntro: "",
        },
        {
          imgSrc: "../assets/images/searchStylepage/hairStyle-long-1-1.jpg",
          storeImgSrc: "",
          storeName: "",
          stroeAddress: "",
          modalPic1: "",
          modalPic2: "",
          modalPic3: "",
          styleIntro: "",
          styListImg: "",
          styListName: "",
          styListIntro: "",
        },
      ],
      短髮: [
        {
          imgSrc: "../assets/images/searchStylepage/hairStyle-short-1-1.jpg",
          storeImgSrc: "",
          storeName: "",
          stroeAddress: "",
          modalPic1: "",
          modalPic2: "",
          modalPic3: "",
          styleIntro: "",
          styListImg: "",
          styListName: "",
          styListIntro: "",
        },
      ]
    },
    {
      category: 'man',
      短髮: [
        {
          imgSrc: "../assets/images/salonInfopage/Rectangle 146.png",
          storeImgSrc: "",
          storeName: "",
          stroeAddress: "",
          modalPic1: "",
          modalPic2: "",
          modalPic3: "",
          styleIntro: "",
          styListImg: "",
          styListName: "",
          styListIntro: "",
        },
      ]
    }
  ];
// data資料結束///

const searchTag = document.querySelector('.searchTag');
const searchHairResult = document.querySelector('.searchHairResult');
// 搜尋結果資料渲染
function renderHairData() {
  if (localStorage.getItem('searchGender') == 'lady') {
    tagGender = "女生";
  } else {
    tagGender = "男生";
  }
  // search tag的資料渲染
  let str = ''
  str += `
  <!-- search tag -->
  <div class="row mb-10 searchTag">
      <div class="col-9">
          <ul class="d-flex ps-0 mb-0 gap-4 list-unstyled">
              <li class="fs-28 ls-tiny-5">#${tagGender}</li>
              <li class="fs-28 ls-tiny-5">#${localStorage.getItem('searchHairType')}</li>
          </ul>
      </div>
      <div class="col-3">
          <p class="text-black-60 text-end ls-tiny-5 fs-14 fs-md-16">(設計師作品)</p>
      </div>
  </div>`
  searchTag.innerHTML = str;

  // search髮型結果的資料渲染
  let str2 = '';
  hairData.forEach(item => {
    const searchHairType = localStorage.getItem('searchHairType');
    if (item.category === localStorage.getItem('searchGender')) {
      if (item[searchHairType] === undefined) {
        alert('查無資料');
        return;
      }
      item[searchHairType].forEach(item2 => {
        str2 += `
          <li class="col-6 col-md-4 mb-6">
            <button type="button" class="hairStyle w-100 btn btn-black-0 p-0 position-relative" data-bs-toggle="modal"
                data-bs-target="#searchStyle-short1">
                <img class="w-100 h-100 object-fit-cover" src="${item2.imgSrc}" alt="短髮">
                <svg class="position-absolute icon-heart" width="32" height="32" viewBox="0 0 32 32" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.8252 12.7823C5.8252 17.0714 9.43122 21.3102 15.0361 24.9263C15.3475 25.1272 15.7292 25.3281 15.9904 25.3281C16.2515 25.3281 16.6332 25.1272 16.9446 24.9263C22.5596 21.3102 26.1556 17.0714 26.1556 12.7823C26.1556 9.07582 23.5942 6.50439 20.3096 6.50439C18.391 6.50439 16.8944 7.37828 15.9904 8.70417C15.1064 7.38832 13.5997 6.50439 11.6812 6.50439C8.38658 6.50439 5.8252 9.07582 5.8252 12.7823ZM7.89439 12.7723C7.89439 10.241 9.5618 8.52337 11.8018 8.52337C13.6098 8.52337 14.6243 9.61823 15.2571 10.5725C15.5384 10.9843 15.7292 11.1149 15.9904 11.1149C16.2616 11.1149 16.4323 10.9743 16.7236 10.5725C17.4067 9.63832 18.381 8.52337 20.179 8.52337C22.429 8.52337 24.0964 10.241 24.0964 12.7723C24.0964 16.308 20.4201 20.2254 16.1812 23.0379C16.0908 23.0981 16.0306 23.1383 15.9904 23.1383C15.9502 23.1383 15.8899 23.0981 15.8096 23.0379C11.5707 20.2254 7.89439 16.308 7.89439 12.7723Z"
                        fill="white" />
                </svg>
            </button>
          
            <div class="modal fade" id="searchStyle-short1" tabindex="-1"
                aria-labelledby="searchHairLabel-short1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content position-relative">
                        <button type="button" class="btn-close btn-close-white position-absolute" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        <div class="modal-header px-4 py-3 px-lg-8 py-lg-4 border-black-40 border-bottom">
                            <div class="modal-title d-flex justify-content-between" id="searchHairLabel-short1">
                                <div class="d-flex gap-3 justify-content-center align-items-center">
                                    <div class="salon-logo">
                                        <img src="../assets/images/searchSalonpage/salon-logo-01.png"
                                            alt="時光造型廊 logo">
                                    </div>
                                    <div class="salon-content">
                                        <h4 class="ls-tiny-5 mb-1">時光造型廊</h4>
                                        <p class="fs-14 ls-tiny-5 d-flex align-items-center gap-1"><span><svg
                                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.58929 11.3232L8.98493 12.6591C9.10547 12.7244 9.20592 12.7746 9.33147 12.8048V4.46268L7.00112 3.05643C6.85045 2.96603 6.70982 2.90074 6.58929 2.87061V11.3232ZM2.70703 11.9962C2.70703 12.4331 2.98326 12.6742 3.38504 12.6742C3.53069 12.6742 3.68136 12.629 3.85212 12.5386L5.851 11.4538V2.92585C5.74051 2.97105 5.60993 3.0263 5.47433 3.10665L3.20424 4.39739C2.86272 4.58824 2.70703 4.85944 2.70703 5.24114V11.9962ZM10.0647 12.7796C10.125 12.7646 10.1853 12.7395 10.2405 12.6993L12.7818 11.2629C13.1334 11.067 13.2941 10.8009 13.2941 10.4192V3.69929C13.2941 3.24226 13.0128 3.01625 12.5859 3.01625C12.4302 3.01625 12.2645 3.06145 12.0887 3.15688L10.0647 4.28188V12.7796Z"
                                                        fill="#1C1C1E" />
                                                </svg></span>桃園市桃園區介壽路1號</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#" class="btn btn-black-100 px-lg-16 py-lg-4 p-3 fs-lg-20 ls-tiny-5 fw-black">立即預約</a>
          
                        </div>
                        <div class="modal-body d-flex pe-lg-8 p-0">
                            <div class="col-lg-6 col-12">
                                <div class="swiper mySwiper-lg-1 swiper-lg-img">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img class="w-100 h-100 object-fit-cover"
                                                src="../assets/images/searchStylepage/hairStyle-short-1-1.jpg"
                                                alt="短髮">
                                        </div>
                                        <div class="swiper-slide">
                                            <img class="w-100 h-100 object-fit-cover"
                                                src="../assets/images/searchStylepage/hairStyle-short-1-2.jpg"
                                                alt="短髮">
                                        </div>
                                        <div class="swiper-slide">
                                            <img class="w-100 h-100 object-fit-cover"
                                                src="../assets/images/searchStylepage/hairStyle-short-1-3.jpg"
                                                alt="短髮">
                                        </div>
                                    </div>
                                </div>
                                <div thumbsSlider="" class="swiper mySwiper-sm-1 swiper-sm-img">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img class="w-100 h-100 object-fit-cover"
                                                src="../assets/images/searchStylepage/hairStyle-short-1-1.jpg"
                                                alt="短髮">
                                        </div>
                                        <div class="swiper-slide">
                                            <img class="w-100 h-100 object-fit-cover"
                                                src="../assets/images/searchStylepage/hairStyle-short-1-2.jpg"
                                                alt="短髮">
                                        </div>
                                        <div class="swiper-slide">
                                            <img class="w-100 h-100 object-fit-cover"
                                                src="../assets/images/searchStylepage/hairStyle-short-1-3.jpg"
                                                alt="短髮">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-none col-6 d-lg-flex gap-8 flex-column ps-6">
                                <div class="pt-6">
                                    <h3 class="fw-bold p-3 bg-primary-main ls-tiny-5 mb-4">作品介紹</h3>
                                    <p class="ps-3 lh-md mb-4">
                                        為您的髮型注入新的生命和個性。選擇了柔和的巧克力棕色作為基底色，以營造出自然而豐富的底層。巧妙地融入了金棕和琥珀色的亮點，為整體造型增添了層次感和光澤。
                                    </p>
                                    <ul class="ps-3 mb-0 d-flex gap-2 list-unstyled">
                                        <li>#挑染</li>
                                        <li>#染髮</li>
                                        <li>#燙髮</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 class="fw-bold p-3 bg-primary-main ls-tiny-5 mb-4">設計師</h3>
                                    <div class="d-flex gap-6">
                                        <img class="search-hairdesigner"
                                            src="../assets/images/searchStylepage/hairdesigner-1.png"
                                            alt="Olivia">
                                        <div>
                                            <p class="fs-20 mb-4">Olivia</p>
                                            <p class="lh-md fs-14">
                                                髮型不僅僅是一種表面的裝飾，更是一種身份的象徵。將每位客戶的個性和風格融入髮型的設計之中，成為時尚舞台上的閃耀之星。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </li>`
      });
    }
  });

  searchHairResult.innerHTML = str2;
}

renderHairData();
