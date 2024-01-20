import { firebaseConfig } from "@js/components/config";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, onSnapshot, orderBy, query, where } from "firebase/firestore";

// the id that we're looking for
let id = location.href.split("=")[1];

// global data
const statsData = JSON.parse(localStorage.getItem("statsData"));
let salons = [];

// init app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection refs
const salonsRef = collection(db, "salons");

// DOM elements
const filterTags = document.querySelector(".filter-tags");
const ddAreaFilter = document.querySelector(".dropdown-area-filter");
const salonsList = document.querySelector(".salon-list");

// setting UI up
setupUI();

// filtering the salon list with data ID
ddAreaFilter.addEventListener("click", e => {
  const btnId = e.target.getAttribute("data-id");
  if(btnId === "all") {
    id = "";
    setupUI();
  }
  else if(btnId) {
    id = btnId;
    setupUI();
  }
});

async function getSalons(id) {
  // retrive specific data
  let q = query(collection(db, "salons"), orderBy("createdAt"));

  // retrive all data if id is not true
  if (id) {
    q = query(collection(db, "salons"), where("districtId", "==", id), orderBy("createdAt"));
  }

  const snapshot = await getDocs(q);
  salons = snapshot.docs.map(doc => {
    let salon = doc.data();
    salon.id = doc.id;
    return salon;
  });
}

function setupFilterTags(data) {
  if (data) {
    filterTags.innerHTML = data.reduce((html, district) => {
      return html + `
          <li class="fs-28 ls-tiny-5">#${district.parent.name["zh-tw"]}</li>
          <li class="fs-28 ls-tiny-5">#${district.name["zh-tw"]}</li>
        `;
    }, "");
    return;
  }
  filterTags.innerHTML = `
    <li class="fs-28 ls-tiny-5 invisible">#所有區域</li>
  `;
}

function setupSalonsList(data) {
  if (data) {
    salonsList.innerHTML = data.reduce((html, salon) => {
      return html + `
        <li class="col-lg-4 mb-6 overflow-hidden">
          <a href="./salonInfo.html?id=${salon.id}" class="position-relative">
            <div class="position-absolute top-0 start-0 opacity-20 w-100 h-100 fullMask"></div>
            <img class="object-fit-cover w-100" src="${salon.view}" alt="A thumbnail">
            <h3
              class="searchInfo d-flex gap-2 align-items-center py-2 px-4 position-absolute start-0 bg-black-60 bg-opacity-50 w-100">
              <img class="rounded-circle object-fit-cover" src="${salon.thumbnail}"
                alt="">
              <p class="text-black-0 ls-tiny-5 font-noto-serif">${salon.name}</p>
            </h3>
          </a>
        </li>
      `;
    }, "");
    return;
  }
  salonsList.innerHTML = `
    <div class="my-25 fs-48 text-center">查無資料! 請稍後再嘗試<div>
  `;
}

function setupDdAreaFilter(data) {
  const ul = ddAreaFilter.querySelector("ul");
  ul.innerHTML = data.reduce((html, district) => {
    return html + `
      <li><button class="dropdown-item py-2 fs-md-20 fs-16" href="./searchHairStyle.html" data-id="${district.id}">${district.name["zh-tw"]}</button></li>
    `;
  }, `<li><button class="dropdown-item py-2 fs-md-20 fs-16" href="./searchHairStyle.html" data-id="all">所有區域</button></li>`);
}

async function setupUI() {
  if (id) { // show specific data
    await getSalons(id);
    setupFilterTags(statsData.filter(item => item.id === id));
    if (salons.length) {
      setupSalonsList(salons);
    } else {
      setupSalonsList();
    }
  } else { // show all data
    await getSalons();
    setupFilterTags();
    setupSalonsList(salons);
  }
  setupDdAreaFilter(statsData);
}