const searchTaiwan = {
  "northern": ["keelong", "yilan", "taipei", "taoyuan", "hsinchu"],
  "central": [""],
  "southern": [""],
  "outside-of-mainland": [""]
}

$(document).ready(function(){
  // init
  $(".search-panel-content").hide();
  $(".search-area").hide();
  $(".search-city").hide();
  searchAreas.forEach(area => {
    $(`.${area}-cities`).hide();
  });

  // 
  $(".search-panel-entry, .search-panel-indicator, .search-panel-content").hover(function() {
    $(".search-panel-content").show();
  }, function() {
    $(".search-panel-content").hide();
  });

});