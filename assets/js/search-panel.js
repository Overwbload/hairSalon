const searchTaiwan = {
  "northern": ["keelong", "yilan", "taipei", "taoyuan", "hsinchu"],
  "central": ["taichung"],
  "southern": [""],
  "outside-of-mainland": [""]
}

let hookedRegion, hookedArea;

$(document).ready(function(){
  // initialize search panel
  $(".search-panel-content").hide();
  $(".search-area").hide();
  $(".search-city").hide();
  Object.keys(searchTaiwan).forEach(region => {
    searchTaiwan[region].forEach(area => {
      $(`.${area}-area`).hide();
      $(`.${area}-cities`).hide();
    });
  });

  // keep search panel opened while hovering
  $(".search-panel-entry, .search-panel-indicator, .search-panel-content").hover(function() {
    $(".search-panel-content").show();
  }, function() {
    $(".search-panel-content").hide();
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
      searchTaiwan[region].forEach(area => {
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
        searchTaiwan[hookedRegion].forEach(area => {
          $(`.${area}-area`).show();
        });
      }, function() {
        $(`.${hookedRegion}-region`).removeClass("bg-primary-light");
        $(".search-area").hide();
        searchTaiwan[hookedRegion].forEach(area => {
          $(`.${area}-area`).hide();
        });
      });

      // keep city opened while hovering city
      $(".search-city").hover(function() {
        // keep region style taking effect
        $(`.${hookedRegion}-region`).addClass("bg-primary-light");

        // keep showing area
        $(".search-area").show();
        searchTaiwan[hookedRegion].forEach(area => {
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
        searchTaiwan[hookedRegion].forEach(area => {
          $(`.${area}-area`).hide();
        });
        $(".search-city").hide();
        $(`.${hookedArea}-cities`).hide();
      });

    }, function() {
      $(".search-area").hide();
      $(`.${region}-region`).removeClass("bg-primary-light");
      searchTaiwan[region].forEach(area => {
        $(`.${area}-area`).hide();
      });
    });
  });
});