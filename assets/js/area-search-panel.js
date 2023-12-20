import $ from "jquery";

const searchArea = {
  "northern": {
    "keelong": {
      "keelongCity": {
        cityName: "keelongCity",
        salonNum: 67,
        districts: [
          {
            districtName: "zhongshanDistrict",
            salons: [
              {
                salonName: "時光造型廊A",
                location: "桃園市桃園區介壽路1號",
                phoneNumber: "03-3361235",
                openTime: "10:00 - 19:30",
                thumbnail: "salon13.png",
                reviews: [
                  {
                    clientName: "陳小美A",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推",
                    service: "燙髮",
                    time: "2023年10月7日"
                  },
                  {
                    clientName: "陳小美B",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推",
                    service: "燙髮",
                    time: "2023年9月7日"
                  },
                  {
                    clientName: "陳小美C",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然!",
                    service: "燙髮",
                    time: "2023年8月7日"
                  }
                ]
              }
            ]
          },
          {
            districtName: "zhongzhengDistrict",
            salons: [
              {
                salonName: "時光造型廊B",
                location: "桃園市桃園區介壽路1號",
                phoneNumber: "03-3361235",
                openTime: "10:00 - 19:30",
                thumbnail: "salon2.png",
                reviews: [
                  {
                    clientName: "陳小美A",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推",
                    service: "燙髮",
                    time: "2023年10月7日"
                  },
                  {
                    clientName: "陳小美B",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推",
                    service: "燙髮",
                    time: "2023年9月7日"
                  },
                  {
                    clientName: "陳小美C",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然!",
                    service: "燙髮",
                    time: "2023年8月7日"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    "yilan": {
      "yilanCounty": {
        cityName: "yilanCounty",
        salonNum: 42,
      }
    },
    "taipei": {
      "taipeiCity": {
        cityName: "taipeiCity",
        salonNum: 156,
      },
      "newtaipeiCity": {
        cityName: "newtaipeiCity",
        salonNum: 92,
      }
    },
    "taoyuan": {
      "taoyuanCity": {
        cityName: "taoyuanCity",
        salonNum: 102,
        districts: [
          {
            districtName: "taoyuanDistrict",
            salons: [
              {
                salonName: "時光造型廊A",
                location: "桃園市桃園區介壽路1號",
                phoneNumber: "03-3361235",
                openTime: "10:00 - 19:30",
                thumbnail: "salon11.png",
                reviews: [
                  {
                    clientName: "陳小美A",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推",
                    service: "燙髮",
                    time: "2023年10月7日"
                  },
                  {
                    clientName: "陳小美B",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推",
                    service: "燙髮",
                    time: "2023年9月7日"
                  },
                  {
                    clientName: "陳小美C",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然!",
                    service: "燙髮",
                    time: "2023年8月7日"
                  }
                ]
              }
            ]
          },
          {
            districtName: "zhongLiDistrict",
            salons: [
              {
                salonName: "時光造型廊B",
                location: "桃園市桃園區介壽路1號",
                phoneNumber: "03-3361235",
                openTime: "10:00 - 19:30",
                thumbnail: "salon4.png",
                reviews: [
                  {
                    clientName: "陳小美A",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推",
                    service: "燙髮",
                    time: "2023年10月7日"
                  },
                  {
                    clientName: "陳小美B",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推",
                    service: "燙髮",
                    time: "2023年9月7日"
                  },
                  {
                    clientName: "陳小美C",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然!",
                    service: "燙髮",
                    time: "2023年8月7日"
                  }
                ]
              }
            ]
          },
          {
            districtName: "pingzhenDistrict",
            salons: [
              {
                salonName: "時光造型廊C",
                location: "桃園市桃園區介壽路1號",
                phoneNumber: "03-3361235",
                openTime: "10:00 - 19:30",
                thumbnail: "salon5.png",
                reviews: [
                  {
                    clientName: "陳小美A",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推",
                    service: "燙髮",
                    time: "2023年10月7日"
                  },
                  {
                    clientName: "陳小美B",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推",
                    service: "燙髮",
                    time: "2023年9月7日"
                  },
                  {
                    clientName: "陳小美C",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然!",
                    service: "燙髮",
                    time: "2023年8月7日"
                  }
                ]
              }
            ]
          },
          {
            districtName: "BadeDistrict",
            salons: [
              {
                salonName: "時光造型廊D",
                location: "桃園市桃園區介壽路1號",
                phoneNumber: "03-3361235",
                openTime: "10:00 - 19:30",
                thumbnail: "salon6.png",
                reviews: [
                  {
                    clientName: "陳小美A",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推",
                    service: "燙髮",
                    time: "2023年10月7日"
                  },
                  {
                    clientName: "陳小美B",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然，超級喜歡!推推",
                    service: "燙髮",
                    time: "2023年9月7日"
                  },
                  {
                    clientName: "陳小美C",
                    message: "設計師非常細心聆聽我的想法，燙出來的捲髮也非常自然!",
                    service: "燙髮",
                    time: "2023年8月7日"
                  }
                ]
              }
            ]
          },
        ]
      }
    },
    "hsinchu": {
      "hsinchuCity": {
        cityName: "hsinchuCity",
        salonNum: 95,
      }
    }
  },
  "central": {
    "miaoli": {
      "miaoliCounty": {
        cityName: "miaoliCounty",
        salonNum: 50,
      }
    },
    "taichung": {
      "taichungCity": {
        cityName: "taichungCity",
        salonNum: 125,
      }
    }
  },
  "southern": {
    "tainan": {
      "tainanCity": {
        cityName: "tainanCity",
        salonNum: 105,
      },
      "chiayiCounty": {
        cityName: "chiayiCounty",
        salonNum: 62,
      }
    },
    "kaohsiung": {
      "kaohsiungCity": {
        cityName: "kaohsiungCity",
        salonNum: 104,
      },
      "pingtungCounty": {
        cityName: "pingtungCounty",
        salonNum: 47,
      }
    }
  },
  "outsideOfMainland": {
    "penghu": {
      "penghuCounty": {
        cityName: "penghuCounty",
        salonNum: 21,
      }
    },
    "kinmen": {
      "kinmenCounty": {
        cityName: "kinmenCounty",
        salonNum: 37,
      },
      "matsuCounty": {
        cityName: "matsuCounty",
        salonNum: 7,
      }
    }
  }
};

const enchTable = {
  "northern": "北部",
  "central": "中部",
  "southern": "南部",
  "outsideOfMainland": "離島",
  "keelong": "基隆",
  "keelongCity": "基隆市",
  "zhongshanDistrict": "中山區",
  "zhongzhengDistrict": "中正區",
  "yilan": "宜蘭",
  "yilanCounty": "宜蘭縣",
  "taipei": "台北",
  "taipeiCity": "台北市",
  "taoyuan": "桃園",
  "taoyuanCity": "桃園市",
  "taoyuanDistrict": "桃園區",
  "zhongLiDistrict": "中壢區",
  "pingzhenDistrict": "平鎮區",
  "BadeDistrict": "八德區",
  "hsinchu": "新竹",
  "hsinchuCity": "新竹市",
  "miaoli": "苗栗",
  "miaoliCounty": "苗栗縣",
  "taichung": "台中",
  "taichungCity": "台中市",
  "tainan": "台南",
  "tainanCity": "台南市",
  "kaohsiung": "高雄",
  "kaohsiungCity": "高雄市",
  "penghu": "澎湖",
  "penghuCounty": "澎湖縣",
  "kinmen": "金門",
  "kinmenCounty": "金門縣",
  "newtaipei": "新北",
  "newtaipeiCity": "新北市",
  "chiayi": "嘉義",
  "chiayiCounty": "嘉義縣",
  "pingtung": "屏東",
  "pingtungCounty": "屏東縣",
  "matsu": "馬祖",
  "matsuCounty": "馬祖縣",
};

function getAreaCh(en) {
  if(enchTable[en] === undefined)
    return "not found";
  return enchTable[en];
}

function initAreaSearchPanel() {
  const elementRegion = document.querySelector(".search-region");
  const elementlArea = document.querySelector(".search-area");
  const elementCity = document.querySelector(".search-city");
  Object.keys(searchArea).forEach(region => {
    elementRegion.innerHTML += `
      <div class="${region}-region">
        <div class="search-item">
          <span class="d-block fw-bold">${getAreaCh(region)}</span>
          <img src="../assets/images/icons/arrow.right.svg" alt="">
        </div>
      </div>
    `;
  });
  Object.keys(searchArea).forEach(region => {
    Object.keys(searchArea[region]).forEach(area => {
      elementlArea.innerHTML += `
        <div class="${area}-area">
          <div class="search-item">
            <span class="d-block fw-bold">${getAreaCh(area)}地區</span>
            <img src="../assets/images/icons/arrow.right.svg" alt="">
          </div>
        </div>
      `;
    });
  });
  Object.keys(searchArea).forEach(region => {
    Object.keys(searchArea[region]).forEach(area => {
      let cities = "";
      Object.keys(searchArea[region][area]).forEach(city => {
        cities += `
          <a href="./searchHairSalon.html" class="search-item search-link" data-search-area="${city}">
            <span class="d-block fw-bold">${getAreaCh(city)}</span>
            <span class="d-block font-prata fs-12">(${searchArea[region][area][city].salonNum})</span>
          </a>
        `;
      });
      elementCity.innerHTML += `
        <div class="${area}-cities">
          ${cities}
        </div>
      `;
    });
  });
}

function getSearchCity(searchResult) {
  let result;
  Object.keys(searchArea).forEach(region => {
    Object.keys(searchArea[region]).forEach(area => {
      Object.keys(searchArea[region][area]).forEach(city => {
        if(searchResult === city) {
          result = searchArea[region][area][city];
          return;
        }
      });
      return;
    });
    return;
  });
  return result;
}

initAreaSearchPanel();


$(function(){

  let hookedRegion, hookedArea;

  // initialize area search panel
  $(".area-search-panel-content").hide();
  $(".search-area").hide();
  $(".search-city").hide();
  Object.keys(searchArea).forEach(region => {
    Object.keys(searchArea[region]).forEach(area => {
      $(`.${area}-area`).hide();
      $(`.${area}-cities`).hide();
    });
  });

  // keep search panel opened while hovering
  $(".area-search-panel-entry, .area-search-panel-entry .nav-link-ench, .area-search-panel-content").hover(function() {
    $(".area-search-panel-content").show();
    $(".area-search-panel-entry .nav-link-ench .en").addClass("opacity-0");
    $(".area-search-panel-entry .nav-link-ench .ch").addClass("opacity-100");
  }, function() {
    $(".area-search-panel-content").hide();
    $(".area-search-panel-entry .nav-link-ench .en").removeClass("opacity-0");
    $(".area-search-panel-entry .nav-link-ench .ch").removeClass("opacity-100");
  });

  // show selected region, area and cities
  Object.keys(searchArea).forEach(region => {
    $(`.${region}-region`).hover(function() {
      // store current region
      hookedRegion = region;

      // add style to hovered region
      $(`.${region}-region`).addClass("bg-primary-light");

      // show incoming area while hovering region
      $(".search-area").show();
      Object.keys(searchArea[region]).forEach(area => {
        $(`.${area}-area`).show();
        $(`.${area}-area`).hover(function() {
          // store current region
          hookedArea = area;

          // add style to hovered area
          $(`.${area}-area`).addClass("bg-black-0");

          // show incoming city while hovering area
          $(".search-city").show();
          $(`.${area}-cities`).show();
        }, function() {
          $(`.${area}-area`).removeClass("bg-black-0");
          $(".search-city").hide();
          $(`.${area}-cities`).hide();
        });
      });


      // keep area opened while hovering area
      $(".search-area").hover(function() {
        // keep region style taking effect
        $(`.${hookedRegion}-region`).addClass("bg-primary-light");

        // keep showing area
        $(".search-area").show();
        Object.keys(searchArea[hookedRegion]).forEach(area => {
          $(`.${area}-area`).show();
        });
      }, function() {
        $(`.${hookedRegion}-region`).removeClass("bg-primary-light");
        $(".search-area").hide();
        Object.keys(searchArea[hookedRegion]).forEach(area => {
          $(`.${area}-area`).hide();
        });
      });

      // keep city opened while hovering city
      $(".search-city").hover(function() {
        // keep region style taking effect
        $(`.${hookedRegion}-region`).addClass("bg-primary-light");

        // keep showing area
        $(".search-area").show();
        Object.keys(searchArea[hookedRegion]).forEach(area => {
          $(`.${area}-area`).show();
        });

        // keep area style taking effect
        $(`.${hookedArea}-area`).addClass("bg-black-0");

        // keep showing city
        $(".search-city").show();
        $(`.${hookedArea}-cities`).show();
      }, function() {
        $(`.${hookedRegion}-region`).removeClass("bg-primary-light");
        $(`.${hookedArea}-area`).removeClass("bg-black-0");
        $(".search-area").hide();
        Object.keys(searchArea[hookedRegion]).forEach(area => {
          $(`.${area}-area`).hide();
        });
        $(".search-city").hide();
        $(`.${hookedArea}-cities`).hide();
      });

    }, function() {
      $(".search-area").hide();
      $(`.${region}-region`).removeClass("bg-primary-light");
      Object.keys(searchArea[region]).forEach(area => {
        $(`.${area}-area`).hide();
      });
    });
  });
});

// navigation
const searchAreaBtns = document.querySelectorAll(".search-link");
searchAreaBtns.forEach(btn => {
  btn.addEventListener("click", event => {
    event.preventDefault();
    localStorage.setItem("areaEnCh", JSON.stringify(enchTable));
    localStorage.setItem("areaSearchPanelResult", JSON.stringify(getSearchCity(btn.getAttribute("data-search-area"))));
    window.location.href = "./searchHairSalon.html";
  });
});