const searchStyle = {
  "lady": {
    "longhair": {
      url: "#",
    },
    "mediumhair": {
      url: "#",
    },
    "shorthair": {
      url: "#",
    },
    "hairdyeing": {
      url: "#",
    },
    "hairperming": {
      url: "#",
    },
  },
  "man": {
    // "longhair": {
    //   url: "#",
    // },
    "mediumhair": {
      url: "#",
    },
    "shorthair": {
      url: "#",
    },
    "hairdyeing": {
      url: "#",
    },
    "hairperming": {
      url: "#",
    },
  },
};

const enchTable = {
  "lady": "LADY",
  "man": "MAN",
  "longhair": "長髮",
  "mediumhair": "中長髮",
  "shorthair": "短髮",
  "hairdyeing": "染髮",
  "hairperming": "燙髮",
};

function getStyleCh(en) {
  if (enchTable[en] === undefined)
    return "not found";
  return enchTable[en];
}

function initStyleSearchPanel() {
  const elementGender = document.querySelector(".search-gender");
  const elementHaircut = document.querySelector(".search-haircut");
  Object.keys(searchStyle).forEach(gender => {
    elementGender.innerHTML += `
      <div class="${gender}-style">
        <div class="search-item">
          <span class="d-block fw-bold">${getStyleCh(gender)}</span>
          <img src="../assets/images/icons/arrow.right.svg" alt="">
        </div>
      </div>
    `;
  });
  Object.keys(searchStyle).forEach(gender => {
    let haircuts = "";
    Object.keys(searchStyle[gender]).forEach(haircut => {
      haircuts += `
        <a href="./searchHairStyle.html" class="search-item search-link hairTypeLink">
          <span class="d-block fw-bold searchHairType">${getStyleCh(haircut)}</span>
        </a>
      `;
    });
    elementHaircut.innerHTML += `
      <div class="${gender}-haircut">
        ${haircuts}
      </div>
    `;
  });
}

initStyleSearchPanel();

let hookedGender;
$(function () {

  //let hookedGender; 原本位置
  // initialize style search panel
  $(".style-search-panel-content").hide();
  $(".search-haircut").hide();
  Object.keys(searchStyle).forEach(gender => {
    $(`.${gender}-haircut`).hide();
  });

  // keep search panel opened while hovering
  $(".style-search-panel-entry, .style-search-panel-entry .nav-link-ench, .style-search-panel-content").hover(function() {
    $(".style-search-panel-content").show();
    $(".style-search-panel-entry .nav-link-ench .en").addClass("opacity-0");
    $(".style-search-panel-entry .nav-link-ench .ch").addClass("opacity-100");
  }, function() {
    $(".style-search-panel-content").hide();
    $(".style-search-panel-entry .nav-link-ench .en").removeClass("opacity-0");
    $(".style-search-panel-entry .nav-link-ench .ch").removeClass("opacity-100");
  });

  // show selected gender, haircut
  Object.keys(searchStyle).forEach(gender => {
    $(`.${gender}-style`).hover(function() {
      // store current gender
      hookedGender = gender;
      console.log(hookedGender);

      // add style to hovered gender
      $(`.${gender}-style`).addClass("bg-primary-light");

      // show incoming haircut while hovering gender
      $(".search-haircut").show();
      $(`.${gender}-haircut`).show();

      // keep haircut opened while hovering haircut
      $(".search-haircut").hover(function() {
        $(`.${hookedGender}-gender`).addClass("bg-primary-light");
        $(".search-haircut").show();
        $(`.${hookedGender}-haircut`).show();
      }, function() {
        $(`.${hookedGender}-gender`).removeClass("bg-primary-light");
        $(".search-haircut").hide();
        $(`.${hookedGender}-haircut`).hide();
      });
    }, function() {
      $(".search-haircut").hide();
      $(`.${gender}-style`).removeClass("bg-primary-light");
      $(`.${gender}-haircut`).hide();
    });
  });
});


// Jason code
// initStyleSearchPanel()函式中 增加了class名稱 (hairTypeLink) (searchHairType)
// 將let hookedGender; 移出函式外 並取用其值
const hairTypeLinks = document.querySelectorAll('.hairTypeLink')

hairTypeLinks.forEach(aTag =>{
  aTag.addEventListener('click',e=>{
    localStorage.setItem('searchGender',hookedGender);
    localStorage.setItem('searchHairType',aTag.querySelector('.searchHairType').textContent);
  });
});


