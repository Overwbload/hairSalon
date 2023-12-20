import{g as o}from"./main-6296f0c4.js";document.querySelector(".addCommentModal");const c=document.querySelectorAll("a[star-num]");c.forEach((t,e)=>{t.addEventListener("click",a=>{if(a.preventDefault(),t.getAttribute("star-num")==e){let s=e+1;for(let r=4;r>e;r--)c[r].classList.remove("starActive");for(let r=1;r<=e;r++)c[r].classList.add("starActive");return s}}),t.addEventListener("mouseenter",function(){if(t.getAttribute("star-num")==e)for(let a=1;a<=e;a++)c[a].classList.add("starHover"),t.addEventListener("mouseleave",function(){c[a].classList.remove("starHover")})})});let n=[{imgSrc:`${o("/assets/images/searchStylepage/hairStyle-long-1-1.jpg")}`,userName:"蔡1玲",starNum:5,comment:"設計師非常細心聆聽我的想法",serviceType:"染髮",serviceDate:"2023年05月10日"},{imgSrc:`${o("/assets/images/searchStylepage/hairStyle-man-short-1-1.jpg")}`,userName:"盧廣眾",starNum:4,comment:"設計師超讚",serviceType:"燙髮",serviceDate:"2022年04月25日"},{imgSrc:`${o("/assets/images/searchStylepage/hairStyle-man-short-3-1.jpg")}`,userName:"劉得滑",starNum:2,comment:"太貴了",serviceType:"剪髮",serviceDate:"2021年03月18日"}];function i(){let t="";function e(s){let r="";for(let l=1;l<=s;l++)r+=`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.99959 11.0663L10.2796 13.453C10.7996 13.8396 11.5063 13.3196 11.3063 12.7063L10.0529 8.85298L13.2929 6.54631C13.8263 6.17298 13.5596 5.33298 12.9063 5.33298H8.93292L7.63959 1.30631C7.43959 0.69298 6.57292 0.69298 6.37292 1.30631L5.06626 5.33298H1.09292C0.43959 5.33298 0.172923 6.17298 0.706257 6.54631L3.94626 8.85298L2.69292 12.7063C2.49292 13.3196 3.19959 13.8263 3.71959 13.453L6.99959 11.0663Z"
        fill="#B9A37F" />
    </svg>`;return r}n.forEach(s=>{t+=`
    <div class="pb-6">
      <div class="d-flex justify-content-between ">
        <div class="d-flex">
          <img class="customer-img rounded-circle object-fit-cover" src="${s.imgSrc}">
          <p class=" lh-md ls-tiny-5 text-black-100 fw-medium ms-2">${s.userName}</p>
        </div>
        <!-- 星星顯示顆數 -->
        <div class="">
          ${e(s.starNum)}
        </div>
      </div>
      <p class="lh-md ls-tiny-5 text-black-100 px-1 pt-3 pb-15">${s.comment}</p>
      <div class="d-flex justify-content-between">
        <p class="fs-14 lh-md ls-tiny-5 text-black-80">預約服務：${s.serviceType}</p>
        <p class="fs-14 lh-md ls-tiny-5 text-black-80">${s.serviceDate}</p>
      </div>
    </div>  `});const a=document.querySelector(".salonInfoComment");a.innerHTML=t}i();const m=document.querySelector(".pageSelect"),d=document.querySelectorAll(".pageChoose"),u=document.querySelectorAll(".pageInfo");m.addEventListener("click",t=>{t.preventDefault(),t.target.classList.contains("pageChoose")&&(d.forEach(e=>{e.classList.remove("border-bottom","border-5","border-secondary-main")}),u.forEach(e=>{e.classList.remove("d-block"),e.getAttribute("data-value")==t.target.textContent&&(e.classList.add("d-block"),t.target.classList.add("border-bottom","border-5","border-secondary-main"))}))});
