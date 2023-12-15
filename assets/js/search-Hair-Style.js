// Jason code
//searchHairStyle.html  <!-- search tag --> 外層增加class (searchTag) 、 <!-- search 髮型結果 --> ul 增加class (searchHairResult)
//data資料開始///
let hairData = [
    {
      category: 'lady',
      長髮: [
        {
          id: 1,
          imgSrc: "../assets/images/searchStylepage/hairStyle-long-1-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-01.png",
          storeName: "Time Styling",
          stroeAddress: "桃園市桃園區介壽路1號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-long-1-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-long-1-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-long-1-3.jpg",
          styleIntro: "為您的髮型注入新的生命和個性。選擇了柔和的巧克力棕色作為基底色，以營造出自然而豐富的底層。巧妙地融入了金棕和琥珀色的亮點，為整體造型增添了層次感和光澤。",
          styListImg: "../assets/images/searchHairDesigner/designer-1.png",
          styListName: "Olivia",
          styListIntro: "髮型不僅僅是一種表面的裝飾，更是一種身份的象徵。將每位客戶的個性和風格融入髮型的設計之中，成為時尚舞台上的閃耀之星。",
        },
        {
          id: 2,
          imgSrc: "../assets/images/searchStylepage/hairStyle-long-2-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-02.png",
          storeName: "時光造型廊",
          stroeAddress: "台北市信義區光明路15號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-long-2-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-long-2-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-long-2-3.jpg",
          styleIntro: "這款髮型不僅為注入時尚元素，更讓您在人群中成為注目焦點。透過巧妙的挑染技巧，我們打破了單調，創造出層次豐富的色彩層次。而紫紅的色調，象徵著獨立、優雅和神祕，完美詮釋客戶的喜好。",
          styListImg: "../assets/images/searchHairDesigner/designer-2.png",
          styListName: "Emily",
          styListIntro: "設計風格融合了時尚趨勢和個性化元素，讓每位客戶都能散發自信光采。",
        },{
          id: 3,
          imgSrc: "../assets/images/searchStylepage/hairStyle-long-3-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-04.png",
          storeName: "璀璨時光",
          stroeAddress: "台北市東區中山路66號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-long-3-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-long-3-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-long-3-3.jpg",
          styleIntro: "染燙捲髮層次感強烈。",
          styListImg: "../assets/images/searchHairDesigner/designer-4.png",
          styListName: "Ethan",
          styListIntro: "注重細節，，追求完美的髮型藝術。",
        },{
          id: 4,
          imgSrc: "../assets/images/searchStylepage/hairStyle-long-4-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-02.png",
          storeName: "時光造型廊",
          stroeAddress: "台北市信義區光明路15號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-long-4-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-long-4-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-long-4-3.jpg",
          styleIntro: "簡單自然，好整理長髮。",
          styListImg: "../assets/images/searchHairDesigner/designer-2.png",
          styListName: "Emily",
          styListIntro: "設計風格融合了時尚趨勢和個性化元素，讓每位客戶都能散發自信光采。",
        },
      ],
      中長髮: [
        {
          id: 1,
          imgSrc: "../assets/images/searchStylepage/hairStyle-medium-1-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-03.png",
          storeName: "STAR SALON",
          stroeAddress: "基隆市暖暖區中正路2號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-medium-1-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-medium-1-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-medium-1-3.jpg",
          styleIntro: "中短髮造型，燙捲增添慵懶感，簡單整理推薦髮型",
          styListImg: "../assets/images/searchHairDesigner/designer-3.png",
          styListName: "Ava",
          styListIntro: "無論您是追求獨特風格還是注重實用性，我都能夠滿足您對髮型的各種期望。",
        },
        {
          id: 2,
          imgSrc: "../assets/images/searchStylepage/hairStyle-medium-2-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-09.png",
          storeName: "藝品",
          stroeAddress: "台北市東區健行路98號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-medium-2-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-medium-2-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-medium-2-3.jpg",
          styleIntro: "層次強烈燙捲髮型",
          styListImg: "../assets/images/searchHairDesigner/designer-9.jpg",
          styListName: "Mira",
          styListIntro: "擁有5年髮型造型經驗，滿足您對髮型的無限想像。",
        },
        {
          id: 3,
          imgSrc: "../assets/images/searchStylepage/hairStyle-medium-3-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-05.png",
          storeName: "時尚髮藝",
          stroeAddress: "桃園市桃園區介壽路52號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-medium-3-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-medium-3-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-medium-3-3.jpg",
          styleIntro: "中長髮造型，挑染金，展現個性化風格，簡單好整理",
          styListImg: "../assets/images/searchHairDesigner/designer-5.png",
          styListName: "Jack",
          styListIntro: "專攻染髮領域的專業設計師。",
        },
        {
          id: 4,
          imgSrc: "../assets/images/searchStylepage/hairStyle-medium-4-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-03.png",
          storeName: "STAR SALON",
          stroeAddress: "基隆市暖暖區中正路2號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-medium-4-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-medium-4-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-medium-4-3.jpg",
          styleIntro: "中長髮造型，挑染金，展現個性化風格，簡單好整理",
          styListImg: "../assets/images/searchHairDesigner/designer-3.png",
          styListName: "Ava",
          styListIntro: "無論您是追求獨特風格還是注重實用性，我都能夠滿足您對髮型的各種期望。",
        }
      ],
      短髮: [
        {
          id: 1,
          imgSrc: "../assets/images/searchStylepage/hairStyle-short-1-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-03.png",
          storeName: "STAR SALON",
          stroeAddress: "基隆市暖暖區中正路2號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-short-1-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-short-1-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-short-1-3.jpg",
          styleIntro: "俐落短髮造型，讓每一根髮絲都散發輕盈感。這款短髮風格不僅時尚，還能突顯您的臉龐輪廓，展現出迷人的氣質。",
          styListImg: "../assets/images/searchHairDesigner/designer-3.png",
          styListName: "Ava",
          styListIntro: "無論您是追求獨特風格還是注重實用性，我都能夠滿足您對髮型的各種期望。",
        },
        {
          id: 2,
          imgSrc: "../assets/images/searchStylepage/hairStyle-short-2-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-05.png",
          storeName: "時尚髮藝",
          stroeAddress: "桃園市桃園區介壽路52號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-short-2-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-short-2-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-short-2-3.jpg",
          styleIntro: "帥性短捲髮，凸顯個人特色髮型。",
          styListImg: "../assets/images/searchHairDesigner/designer-5.png",
          styListName: "Jack",
          styListIntro: "專攻染髮領域的專業設計師。",
        },
        {
          id: 3,
          imgSrc: "../assets/images/searchStylepage/hairStyle-short-3-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-06.png",
          storeName: "style salon",
          stroeAddress: "高雄市左營區仁愛路72號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-short-3-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-short-3-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-short-3-3.jpg",
          styleIntro: "簡單俐落短髮造型，擁有強烈個人風格。",
          styListImg: "../assets/images/searchHairDesigner/designer-6.png",
          styListName: "Mia",
          styListIntro: "髮型設計不僅僅是一項工作，更是我的熱情所在。",
        },
        {
          id: 4,
          imgSrc: "../assets/images/searchStylepage/hairStyle-short-4-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-03.png",
          storeName: "STAR SALON",
          stroeAddress: "基隆市暖暖區中正路2號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-short-4-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-short-4-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-short-4-3.jpg",
          styleIntro: "簡短造型，展現與眾不同個人的氣質。",
          styListImg: "../assets/images/searchHairDesigner/designer-3.png",
          styListName: "Ava",
          styListIntro: "無論您是追求獨特風格還是注重實用性，我都能夠滿足您對髮型的各種期望。",
        },
      ]
    },
    {
      category: 'man',
      短髮: [
        {
          id: 1,
          imgSrc: "../assets/images/searchStylepage/hairStyle-man-short-1-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-07.png",
          storeName: "植柔美髮",
          stroeAddress: "新竹市北區力行路5號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-man-short-1-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-man-short-1-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-man-short-1-3.jpg",
          styleIntro: "挑染宗咖色，展現帥性、俐落造型",
          styListImg: "../assets/images/searchHairDesigner/designer-7.png",
          styListName: "Daniel",
          styListIntro: "豐富的經驗和專業知識，致力於為客人打造一個既符合時尚潮流又適合個人風格的髮型。",
        },
        {
          id: 2,
          imgSrc: "../assets/images/searchStylepage/hairStyle-man-short-2-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-03.png",
          storeName: "STAR SALON",
          stroeAddress: "基隆市暖暖區中正路2號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-man-short-2-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-man-short-2-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-man-short-2-3.jpg",
          styleIntro: "帥性捲髮瀏海造型",
          styListImg: "../assets/images/searchHairDesigner/designer-3.png",
          styListName: "Ava",
          styListIntro: "無論您是追求獨特風格還是注重實用性，我都能夠滿足您對髮型的各種期望。",
        },
        {
          id: 3,
          imgSrc: "../assets/images/searchStylepage/hairStyle-man-short-3-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-07.png",
          storeName: "植柔美髮",
          stroeAddress: "新竹市北區力行路5號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-man-short-3-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-man-short-3-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-man-short-3-3.jpg",
          styleIntro: "側邊維修短，讓髮型更加請爽",
          styListImg: "../assets/images/searchHairDesigner/designer-7.png",
          styListName: "Daniel",
          styListIntro: "豐富的經驗和專業知識，致力於為客人打造一個既符合時尚潮流又適合個人風格的髮型。",
        },
        {
          id: 4,
          imgSrc: "../assets/images/searchStylepage/hairStyle-man-short-4-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-05.png",
          storeName: "時尚髮藝",
          stroeAddress: "桃園市桃園區介壽路52號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-man-short-4-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-man-short-4-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-man-short-4-3.jpg",
          styleIntro: "強調層次感和自然蓬鬆，展現時尚品味。",
          styListImg: "../assets/images/searchHairDesigner/designer-5.png",
          styListName: "Jack",
          styListIntro: "豐富的經驗和專業知識，致力於為客人打造一個既符合時尚潮流又適合個人風格的髮型。",
        },
        {
          id: 5,
          imgSrc: "../assets/images/searchStylepage/hairStyle-man-short-5-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-03.png",
          storeName: "STAR SALON",
          stroeAddress: "基隆市暖暖區中正路2號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-man-short-5-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-man-short-5-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-man-short-5-3.jpg",
          styleIntro: "側邊剃髮，展現前衛造型。",
          styListImg: "../assets/images/searchHairDesigner/designer-3.png",
          styListName: "Ava",
          styListIntro: "無論您是追求獨特風格還是注重實用性，我都能夠滿足您對髮型的各種期望。",
        },
        {
          id: 6,
          imgSrc: "../assets/images/searchStylepage/hairStyle-man-short-6-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-08.png",
          storeName: "晨曦髮藝",
          stroeAddress: "桃園市八德區介壽路一段8號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-man-short-6-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-man-short-6-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-man-short-6-3.jpg",
          styleIntro: "漂白髮藝，染燙層次造型。",
          styListImg: "../assets/images/searchHairDesigner/designer-8.jpg",
          styListName: "Grace",
          styListIntro: "透過精心設計，幫助您找到最適合的風格",
        },
      ],
      中長髮: [
        {
          id: 1,
          imgSrc: "../assets/images/searchStylepage/hairStyle-man-medium-1-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-09.png",
          storeName: "藝品",
          stroeAddress: "台北市東區健行路98號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-man-medium-1-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-man-medium-1-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-man-medium-1-3.jpg",
          styleIntro: "捲髮造型",
          styListImg: "../assets/images/searchHairDesigner/designer-9.jpg",
          styListName: "Mira",
          styListIntro: "擁有5年髮型造型經驗，滿足您對髮型的無限想像。",
        },
        {
          id: 2,
          imgSrc: "../assets/images/searchStylepage/hairStyle-man-medium-2-1.jpg",
          storeImgSrc: "../assets/images/searchSalonpage/salon-logo-10.png",
          storeName: "拾光造型",
          stroeAddress: "桃園市大溪區光明路13號",
          modalPic1: "../assets/images/searchStylepage/hairStyle-man-medium-2-1.jpg",
          modalPic2: "../assets/images/searchStylepage/hairStyle-man-medium-2-2.jpg",
          modalPic3: "../assets/images/searchStylepage/hairStyle-man-medium-2-3.jpg",
          styleIntro: "微捲層次感造型",
          styListImg: "../assets/images/searchHairDesigner/designer-10.jpg",
          styListName: "Amelia",
          styListIntro: "擅長染髮、燙髮，髮型造型經驗豐富。",
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
        // alert('查無資料');
        searchHairResult.innerHTML = `<div class="text-center fs-md-32 fs-20">查無資料，請重新搜尋！</div>`;
        return;
      }
      item[searchHairType].forEach(item2 => {
        str2 += `
          <li class="col-6 col-md-4 mb-6">
            <button type="button" class="hairStyle w-100 btn btn-black-0 p-0 position-relative" data-bs-toggle="modal"
                data-bs-target="#searchStyle-short${item2.id}">
                <img class="w-100 h-100 object-fit-cover" src="${item2.imgSrc}" alt="短髮">
                <svg class="position-absolute icon-heart" width="32" height="32" viewBox="0 0 32 32" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.8252 12.7823C5.8252 17.0714 9.43122 21.3102 15.0361 24.9263C15.3475 25.1272 15.7292 25.3281 15.9904 25.3281C16.2515 25.3281 16.6332 25.1272 16.9446 24.9263C22.5596 21.3102 26.1556 17.0714 26.1556 12.7823C26.1556 9.07582 23.5942 6.50439 20.3096 6.50439C18.391 6.50439 16.8944 7.37828 15.9904 8.70417C15.1064 7.38832 13.5997 6.50439 11.6812 6.50439C8.38658 6.50439 5.8252 9.07582 5.8252 12.7823ZM7.89439 12.7723C7.89439 10.241 9.5618 8.52337 11.8018 8.52337C13.6098 8.52337 14.6243 9.61823 15.2571 10.5725C15.5384 10.9843 15.7292 11.1149 15.9904 11.1149C16.2616 11.1149 16.4323 10.9743 16.7236 10.5725C17.4067 9.63832 18.381 8.52337 20.179 8.52337C22.429 8.52337 24.0964 10.241 24.0964 12.7723C24.0964 16.308 20.4201 20.2254 16.1812 23.0379C16.0908 23.0981 16.0306 23.1383 15.9904 23.1383C15.9502 23.1383 15.8899 23.0981 15.8096 23.0379C11.5707 20.2254 7.89439 16.308 7.89439 12.7723Z"
                        fill="white" />
                </svg>
            </button>
          
            <div class="modal fade" id="searchStyle-short${item2.id}" tabindex="-1"
                aria-labelledby="searchHairLabel-short${item2.id}" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content position-relative">
                        <button type="button" class="btn-close btn-close-white position-absolute" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        <div class="modal-header px-4 py-3 px-lg-8 py-lg-4 border-black-40 border-bottom">
                            <div class="modal-title d-flex justify-content-between" id="searchHairLabel-short${item2.id}">
                                <div class="d-flex gap-3 justify-content-center align-items-center">
                                    <div class="salon-logo">
                                        <img src="${item2.storeImgSrc}"
                                            alt="${item2.storeName} logo" class="border rounded-circle">
                                    </div>
                                    <div class="salon-content">
                                        <h4 class="ls-tiny-5 mb-1">${item2.storeName}</h4>
                                        <p class="fs-14 ls-tiny-5 d-flex align-items-center gap-1"><span><svg
                                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.58929 11.3232L8.98493 12.6591C9.10547 12.7244 9.20592 12.7746 9.33147 12.8048V4.46268L7.00112 3.05643C6.85045 2.96603 6.70982 2.90074 6.58929 2.87061V11.3232ZM2.70703 11.9962C2.70703 12.4331 2.98326 12.6742 3.38504 12.6742C3.53069 12.6742 3.68136 12.629 3.85212 12.5386L5.851 11.4538V2.92585C5.74051 2.97105 5.60993 3.0263 5.47433 3.10665L3.20424 4.39739C2.86272 4.58824 2.70703 4.85944 2.70703 5.24114V11.9962ZM10.0647 12.7796C10.125 12.7646 10.1853 12.7395 10.2405 12.6993L12.7818 11.2629C13.1334 11.067 13.2941 10.8009 13.2941 10.4192V3.69929C13.2941 3.24226 13.0128 3.01625 12.5859 3.01625C12.4302 3.01625 12.2645 3.06145 12.0887 3.15688L10.0647 4.28188V12.7796Z"
                                                        fill="#1C1C1E" />
                                                </svg></span>${item2.stroeAddress}</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#" class="btn btn-black-100 px-lg-16 py-lg-4 p-3 fs-lg-20 ls-tiny-5 fw-black">立即預約</a>
          
                        </div>
                        <div class="modal-body d-flex pe-lg-8 p-0">
                            <div class="col-lg-6 col-12">
                                <div class="swiper mySwiper-lg-${item2.id} swiper-lg-img">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img class="w-100 h-100 object-fit-cover"
                                                src="${item2.modalPic1}"
                                                alt="短髮">
                                        </div>
                                        <div class="swiper-slide">
                                            <img class="w-100 h-100 object-fit-cover"
                                                src="${item2.modalPic2}"
                                                alt="短髮">
                                        </div>
                                        <div class="swiper-slide">
                                            <img class="w-100 h-100 object-fit-cover"
                                                src="${item2.modalPic3}"
                                                alt="短髮">
                                        </div>
                                    </div>
                                </div>
                                <div thumbsSlider="" class="swiper mySwiper-sm-${item2.id} swiper-sm-img">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img class="w-100 h-100 object-fit-cover"
                                                src="${item2.modalPic1}"
                                                alt="短髮">
                                        </div>
                                        <div class="swiper-slide">
                                            <img class="w-100 h-100 object-fit-cover"
                                                src="${item2.modalPic2}"
                                                alt="短髮">
                                        </div>
                                        <div class="swiper-slide">
                                            <img class="w-100 h-100 object-fit-cover"
                                                src="${item2.modalPic3}"
                                                alt="短髮">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-none col-6 d-lg-flex gap-8 flex-column ps-6">
                                <div class="pt-6">
                                    <h3 class="fw-bold p-3 bg-primary-main ls-tiny-5 mb-4">作品介紹</h3>
                                    <p class="ps-3 lh-md mb-4">
                                        ${item2.styleIntro}
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
                                        <img class="search-hairdesigner col-4 object-fit-cover"
                                            src="${item2.styListImg}" alt="${item2.styListName}">
                                        <div>
                                            <p class="fs-20 mb-4">${item2.styListName}</p>
                                            <p class="lh-md fs-14">${item2.styListIntro}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </li>`
          document.addEventListener("DOMContentLoaded", function () {
            hairData.forEach(item => {
              const searchHairType = localStorage.getItem('searchHairType');
              if (item.category === localStorage.getItem('searchGender')) {
                if (item[searchHairType] === undefined) {
                  alert('查無資料');
                  return;
                }
        
                item[searchHairType].forEach(item2 => {
                  // 初始化 Swiper
                  let swiper = new Swiper(`.mySwiper-sm-${item2.id}`, {
                    loop: true,
                    spaceBetween: 2,
                    slidesPerView: 3,
                    freeMode: true,
                    watchSlidesProgress: true,
                  });
        
                  let swiper2 = new Swiper(`.mySwiper-lg-${item2.id}`, {
                    loop: true,
                    spaceBetween: 0,
                    thumbs: {
                      swiper: swiper,
                    },
                  });
        
                  // 將 Swiper 實例附加到對應的元素上，方便後續存取
                  document.querySelector(`.mySwiper-sm-${item2.id}`).swiper = swiper;
                  document.querySelector(`.mySwiper-lg-${item2.id}`).swiper = swiper2;
                });
              }
            });
          });
        searchHairResult.innerHTML = str2;
      });
    }
  });
}

renderHairData();
