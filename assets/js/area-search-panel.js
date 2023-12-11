const searchArea = {
  "northern": {
    "keelong": {
      "keelongCity": {
        salonNum: 67,
        url: "#",
      }
    },
    "yilan": {
      "yilanCounty": {
        salonNum: 42,
        url: "#",
      }
    },
    "taipei": {
      "taipeiCity": {
        salonNum: 156,
        url: "#",
      },
      "newTaipeiCity": {
        salonNum: 92,
        url: "#",
      }
    },
    "taoyuan": {
      "taoyuanCity": {
        salonNum: 102,
        url: "#",
      }
    },
    "hsinchu": {
      "hsinchuCity": {
        salonNum: 95,
        url: "#",
      }
    }
  },
  "central": {
    "miaoli": {
      "miaoliCounty": {
        salonNum: 50,
        url: "#",
      }
    },
    "taichung": {
      "taichungCity": {
        salonNum: 125,
        url: "#",
      }
    }
  },
  "southern": {
    "tainan": {
      "tainanCity": {
        salonNum: 105,
        url: "#",
      },
      "chiayiCounty": {
        salonNum: 62,
        url: "#",
      }
    },
    "kaohsiung": {
      "kaohsiungCity": {
        salonNum: 104,
        url: "#",
      },
      "pingtungCounty": {
        salonNum: 47,
        url: "#",
      }
    }
  },
  "outside-of-mainland": {
    "penghu": {
      "penghuCounty": {
        salonNum: 21,
        url: "#",
      }
    },
    "kinmen": {
      "kinmenCounty": {
        salonNum: 37,
        url: "#",
      },
      "matsuCounty": {
        salonNum: 7,
        url: "#",
      }
    }
  }
};

const enchTable = {
  "northern": "北部",
  "central": "中部",
  "southern": "南部",
  "outside-of-mainland": "離島",
  "keelong": "基隆",
  "keelongCity": "基隆市",
  "yilan": "宜蘭",
  "yilanCounty": "宜蘭縣",
  "taipei": "台北",
  "taipeiCity": "台北市",
  "taoyuan": "桃園",
  "taoyuanCity": "桃園市",
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
  "newTaipei": "新北",
  "newTaipeiCity": "新北市",
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
          <a href="./searchHairSalon.html" class="search-item search-link">
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
      console.log(hookedRegion);

      // add style to hovered region
      $(`.${region}-region`).addClass("bg-primary-light");

      // show incoming area while hovering region
      $(".search-area").show();
      Object.keys(searchArea[region]).forEach(area => {
        $(`.${area}-area`).show();
        $(`.${area}-area`).hover(function() {
          // store current region
          hookedArea = area;
          console.log(hookedArea);

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