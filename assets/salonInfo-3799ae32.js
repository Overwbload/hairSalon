import"./main-fc620cef.js";document.querySelector(".addCommentModal");const l=document.querySelectorAll("a[star-num]");l.forEach((s,r)=>{s.addEventListener("click",c=>{if(c.preventDefault(),s.getAttribute("star-num")==r){let e=r+1;for(let t=4;t>r;t--)l[t].classList.remove("starActive");for(let t=1;t<=r;t++)l[t].classList.add("starActive");return e}}),s.addEventListener("mouseenter",function(){if(s.getAttribute("star-num")==r)for(let c=1;c<=r;c++)l[c].classList.add("starHover"),s.addEventListener("mouseleave",function(){l[c].classList.remove("starHover")})})});let i=[{imgSrc:"./hairStyle-long-1-1.jpg",userName:"蔡1玲",starNum:5,comment:"設計師非常細心聆聽我的想法",serviceType:"染髮",serviceDate:"2023年05月10日"},{imgSrc:"./hairStyle-man-short-1-1.jpg",userName:"盧廣眾",starNum:4,comment:"設計師超讚",serviceType:"燙髮",serviceDate:"2022年04月25日"},{imgSrc:"./hairStyle-man-short-3-1.jpg",userName:"劉得滑",starNum:2,comment:"太貴了",serviceType:"剪髮",serviceDate:"2021年03月18日"}];function n(){let s="";function r(e){let t="";for(let a=1;a<=e;a++)t+=`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.99959 11.0663L10.2796 13.453C10.7996 13.8396 11.5063 13.3196 11.3063 12.7063L10.0529 8.85298L13.2929 6.54631C13.8263 6.17298 13.5596 5.33298 12.9063 5.33298H8.93292L7.63959 1.30631C7.43959 0.69298 6.57292 0.69298 6.37292 1.30631L5.06626 5.33298H1.09292C0.43959 5.33298 0.172923 6.17298 0.706257 6.54631L3.94626 8.85298L2.69292 12.7063C2.49292 13.3196 3.19959 13.8263 3.71959 13.453L6.99959 11.0663Z"
        fill="#B9A37F" />
    </svg>`;return t}i.forEach(e=>{s+=`
    <div class="pb-6">
      <div class="d-flex justify-content-between ">
        <div class="d-flex">
          <img class="customer-img rounded-circle object-fit-cover" src="${e.imgSrc}">
          <p class=" lh-md ls-tiny-5 text-black-100 fw-medium ms-2">${e.userName}</p>
        </div>
        <!-- 星星顯示顆數 -->
        <div class="">
          ${r(e.starNum)}
        </div>
      </div>
      <p class="lh-md ls-tiny-5 text-black-100 px-1 pt-3 pb-15">${e.comment}</p>
      <div class="d-flex justify-content-between">
        <p class="fs-14 lh-md ls-tiny-5 text-black-80">預約服務：${e.serviceType}</p>
        <p class="fs-14 lh-md ls-tiny-5 text-black-80">${e.serviceDate}</p>
      </div>
    </div>  `});const c=document.querySelector(".salonInfoComment");c.innerHTML=s}n();
