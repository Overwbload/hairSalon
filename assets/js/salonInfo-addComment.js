const addCommentModal = document.querySelector('.addCommentModal');
const aTags = document.querySelectorAll('a[star-num]');

aTags.forEach((aTag, index) => {
  // 判斷點擊到的星星數
  aTag.addEventListener('click', e=> {
    e.preventDefault();
    if (aTag.getAttribute('star-num') == index) {
      let starNum = index+1;
      for (let k = 4; k > index; k--) {
        aTags[k].classList.remove('starActive')
      }
      for (let i = 1; i <= index; i++) {
        aTags[i].classList.add('starActive')
      }
      return starNum;
    }
  });
  // 控制滑鼠滑入、滑出星星顯示/隱藏的效果
  aTag.addEventListener('mouseenter', function () {
    if (aTag.getAttribute('star-num') == index) {
      for (let i = 1; i <= index; i++) {
        aTags[i].classList.add('starHover')
        aTag.addEventListener('mouseleave', function () {
          aTags[i].classList.remove('starHover')
        });
      }
    }
  });
});


let commentData = [
  {
    imgSrc: "../assets/images/salonInfopage/Rectangle 146.png",
    userName: "蔡1玲",
    starNum: 5,
    comment: "設計師非常細心聆聽我的想法",
    serviceType: "染髮",
    serviceDate: "2023年05月10日",
  },
  {
    imgSrc: "../assets/images/salonInfopage/Rectangle 146.png",
    userName: "盧廣眾",
    starNum: 4,
    comment: "設計師超讚",
    serviceType: "燙髮",
    serviceDate: "2022年04月25日",
  },
  {
    imgSrc: "../assets/images/salonInfopage/Rectangle 146.png",
    userName: "劉得滑",
    starNum: 2,
    comment: "太貴了",
    serviceType: "剪髮",
    serviceDate: "2021年03月18日",
  },
];


// 評論資料初始化
function renderCommentData() {
  let str = '';
  // 打印星星次數的函式
  function starPrint(num) {
    let str2 = '';
    for (let i = 1; i <= num; i++) {
      str2 += `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.99959 11.0663L10.2796 13.453C10.7996 13.8396 11.5063 13.3196 11.3063 12.7063L10.0529 8.85298L13.2929 6.54631C13.8263 6.17298 13.5596 5.33298 12.9063 5.33298H8.93292L7.63959 1.30631C7.43959 0.69298 6.57292 0.69298 6.37292 1.30631L5.06626 5.33298H1.09292C0.43959 5.33298 0.172923 6.17298 0.706257 6.54631L3.94626 8.85298L2.69292 12.7063C2.49292 13.3196 3.19959 13.8263 3.71959 13.453L6.99959 11.0663Z"
        fill="#B9A37F" />
    </svg>`
    }
    return str2;
  }
  commentData.forEach(item => {
    str += `
    <div class="pb-6">
      <div class="d-flex justify-content-between ">
        <div class="d-flex">
          <img src="${item.imgSrc}">
          <p class=" lh-md ls-tiny-5 text-black-100 fw-medium ms-2">${item.userName}</p>
        </div>
        <!-- 星星顯示顆數 -->
        <div class="">
          ${starPrint(item.starNum)}
        </div>
      </div>
      <p class="lh-md ls-tiny-5 text-black-100 px-1 pt-3 pb-15">${item.comment}</p>
      <div class="d-flex justify-content-between">
        <p class="fs-14 lh-md ls-tiny-5 text-black-80">預約服務：${item.serviceType}</p>
        <p class="fs-14 lh-md ls-tiny-5 text-black-80">${item.serviceDate}</p>
      </div>
    </div>  `
  });
  const salonInfoComment = document.querySelector('.salonInfoComment');
  salonInfoComment.innerHTML = str;
}
renderCommentData();

// 撰寫評論-
// addCommentModal.addEventListener('click', e => {
//   e.preventDefault();
//   // if (e.target.getAttribute('class') == 'save') {
//   //   let obj = {};
//   //   obj.content = txt.value;
//   //   data.push(obj);
//   //   renderDate();
//   // }
// });


