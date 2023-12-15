// const searchArea = JSON.parse(localStorage.getItem("searchArea"));
const areaEnCh = JSON.parse(localStorage.getItem("areaEnCh"));
const areaSearchPanelResult = JSON.parse(localStorage.getItem("areaSearchPanelResult"));
const areaTags = document.querySelector(".area-tags");
const dropdownSearchCategory = document.querySelector(".dropdown-search-category");
const dropdownSearchArea = document.querySelector(".dropdown-search-area");
const searchResult = document.querySelector(".searchSalon");

function getAreaCh(en) {
  if(areaEnCh[en] === undefined)
    return "not found";
  return areaEnCh[en];
}

function init() {
  // clear area tags
  areaTags.innerHTML = "";

  // clear dropdown search category
  dropdownSearchCategory.innerHTML = "";
  
  // clear dropdown search area
  dropdownSearchArea.innerHTML = "";
  
  // clear search result
  searchResult.innerHTML = "";
}
function render() {
  let districtLists = "", salonLists = "";
  if(areaSearchPanelResult.districts === undefined) {
    salonLists = `
      <p class="text-center fs-md-32 fs-20">查無資料，請重新搜尋！</p>
    `;
  }
  else {
    areaSearchPanelResult.districts.forEach( district => {
      districtLists += `
        <li><button type="button" class="dropdown-item py-2 fs-md-20 fs-16" data-search-district="${district.districtName}">${getAreaCh(district.districtName)}</button></li>
      `;
      district.salons.forEach(salon => {
        salonLists += `
          <li class="col-lg-4 mb-6 overflow-hidden">
            <a href="./salonInfo.html" class="position-relative">
              <div class="position-absolute top-0 start-0 opacity-20 w-100 h-100 fullMask"></div>
              <img class="object-fit-cover w-100" src="../assets/images/searchSalonpage/${salon.thumbnail}" alt="">
              <h3 class="searchInfo d-flex gap-2 align-items-center py-2 px-4 position-absolute start-0 bg-black-60 bg-opacity-50 w-100">
                <img class="rounded-circle object-fit-cover" src="../assets/images/searchSalonpage/salon-logo-01.png" alt="">
                <p class="text-black-0 ls-tiny-5 font-noto-serif">${salon.salonName}</p>
              </h3>
            </a>
          </li>
        `;
      });
    });
  }

  // render default result
  areaTags.innerHTML = `
    <li class="fs-28 ls-tiny-5">#${getAreaCh(areaSearchPanelResult.cityName)}</li>
  `;
  dropdownSearchCategory.innerHTML = `
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
  `;
  dropdownSearchArea.innerHTML = `
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
      ${districtLists}
    </ul>
  `;
  searchResult.innerHTML = salonLists;
}
function renderTarget(target) {
  // show all area if it's "allArea"
  if(target === "allArea") {
    if(areaSearchPanelResult.districts === undefined) {
      return;
    }
    // render default result
    dropdownSearchArea.querySelector("button:first-child span").textContent = "所有區域";
    areaTags.innerHTML = `
      <li class="fs-28 ls-tiny-5">#${getAreaCh(areaSearchPanelResult.cityName)}</li>
    `;
    let salonLists = "";
    areaSearchPanelResult.districts.forEach( district => {
      district.salons.forEach(salon => {
        salonLists += `
          <li class="col-lg-4 mb-6 overflow-hidden">
            <a href="./salonInfo.html" class="position-relative">
              <div class="position-absolute top-0 start-0 opacity-20 w-100 h-100 fullMask"></div>
              <img class="object-fit-cover w-100" src="../assets/images/searchSalonpage/${salon.thumbnail}" alt="">
              <h3 class="searchInfo d-flex gap-2 align-items-center py-2 px-4 position-absolute start-0 bg-black-60 bg-opacity-50 w-100">
                <img class="rounded-circle object-fit-cover" src="../assets/images/searchSalonpage/salon-logo-01.png" alt="">
                <p class="text-black-0 ls-tiny-5 font-noto-serif">${salon.salonName}</p>
              </h3>
            </a>
          </li>
        `;
      });
    });
    searchResult.innerHTML = salonLists;
    return;
  }

  // show other areas
  let salonLists = "";
  dropdownSearchArea.querySelector("button:first-child span").textContent = getAreaCh(target);
  areaTags.innerHTML = `
    <li class="fs-28 ls-tiny-5">#${getAreaCh(areaSearchPanelResult.cityName)}</li>
    <li class="fs-28 ls-tiny-5">#${getAreaCh(target)}</li>
  `;
  areaSearchPanelResult.districts.forEach(district => {
    if(district.districtName === target) {
      district.salons.forEach(salon => {
        salonLists += `
          <li class="col-lg-4 mb-6 overflow-hidden">
            <a href="./salonInfo.html" class="position-relative">
              <div class="position-absolute top-0 start-0 opacity-20 w-100 h-100 fullMask"></div>
              <img class="object-fit-cover w-100" src="../assets/images/searchSalonpage/${salon.thumbnail}" alt="">
              <h3 class="searchInfo d-flex gap-2 align-items-center py-2 px-4 position-absolute start-0 bg-black-60 bg-opacity-50 w-100">
                <img class="rounded-circle object-fit-cover" src="../assets/images/searchSalonpage/salon-logo-01.png" alt="">
                <p class="text-black-0 ls-tiny-5 font-noto-serif">${salon.salonName}</p>
              </h3>
            </a>
          </li>
        `;
      });
    }
  });
  searchResult.innerHTML = salonLists;
}

// initialize current page
init();
render();

// add listener
const dropdownSearchAreaLists = dropdownSearchArea.querySelectorAll(".dropdown-menu button");
dropdownSearchAreaLists.forEach(btn => {
  btn.addEventListener("click", event => {
    // event.preventDefault();
    renderTarget(btn.getAttribute("data-search-district"));
  });
});