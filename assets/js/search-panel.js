const searchTaiwan = {
  "northern": {
    "keelong": ["keelong"],
    "yilan": ["yilan"],
    "taipei": ["taipei", "newtaipei"],
    "taoyuan": ["taoyuan"],
    "hsinchu": ["hsinchu"]
  },
  "central": {
    "miaoli": ["miaoli"],
    "taichung": ["taichung"]
  },
  "southern": {
    "tainan": ["tainan", "chiayi"],
    "kaohsiung": ["kaohsiung", "pingtung"]
  },
  "outside-of-mainland": {
    "penghu": ["penghu"],
    "kinmen": ["kinmen", "matsu"]
  }
}

let hookedRegion, hookedArea;

$(function(){
  // initialize search panel
  $(".area-search-panel-content").hide();
  $(".search-area").hide();
  $(".search-city").hide();
  Object.keys(searchTaiwan).forEach(region => {
    Object.keys(searchTaiwan[region]).forEach(area => {
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
  Object.keys(searchTaiwan).forEach(region => {
    $(`.${region}-region`).hover(function() {
      // store current region
      hookedRegion = region;
      console.log(hookedRegion);

      // add style to hovered region
      $(`.${region}-region`).addClass("bg-primary-light");

      // show incoming area while hovering region
      $(".search-area").show();
      Object.keys(searchTaiwan[region]).forEach(area => {
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
        Object.keys(searchTaiwan[hookedRegion]).forEach(area => {
          $(`.${area}-area`).show();
        });
      }, function() {
        $(`.${hookedRegion}-region`).removeClass("bg-primary-light");
        $(".search-area").hide();
        Object.keys(searchTaiwan[hookedRegion]).forEach(area => {
          $(`.${area}-area`).hide();
        });
      });

      // keep city opened while hovering city
      $(".search-city").hover(function() {
        // keep region style taking effect
        $(`.${hookedRegion}-region`).addClass("bg-primary-light");

        // keep showing area
        $(".search-area").show();
        Object.keys(searchTaiwan[hookedRegion]).forEach(area => {
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
        Object.keys(searchTaiwan[hookedRegion]).forEach(area => {
          $(`.${area}-area`).hide();
        });
        $(".search-city").hide();
        $(`.${hookedArea}-cities`).hide();
      });

    }, function() {
      $(".search-area").hide();
      $(`.${region}-region`).removeClass("bg-primary-light");
      Object.keys(searchTaiwan[region]).forEach(area => {
        $(`.${area}-area`).hide();
      });
    });
  });
});