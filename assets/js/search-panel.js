const searchRegions = ["northern", "central", "southern", "outside-of-mainland"];
const searchAreas = ["keelong", "yilan", "taipei", "taoyuan", "hsinchu"];

$(document).ready(function(){
  // init
  $(".search-panel-content").hide();
  $(`.search-area`).hide();
  $(`.search-city`).hide();

  // 
  $(".search-panel-entry, .search-panel-indicator, .search-panel-content").hover(function() {
    $(".search-panel-content").show();
  }, function() {
    $(".search-panel-content").hide();
  });

  // 
  searchRegions.forEach(region => {
    $(`.${region}-region, .search-area`).hover(function() {
      $(".search-area").show();
      $(`.${region}-areas`).show();
    }, function() {
      $(".search-area").hide();
      $(`.${region}-areas`).hide();
    });
  });

  // 
  searchAreas.forEach(area => {
    $(`.${area}-area, .search-city`).hover(function() {
      $(`${area}-cities`).show();
      $(".search-city").show();
      $(".search-area").show();
    }, function() {
      $(`${area}-cities`).hide();
      $(".search-city").hide();
    });
  });
});