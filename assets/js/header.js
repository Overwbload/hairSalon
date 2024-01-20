import { firebaseConfig } from "@js/components/config";
import MultipleLayersMenu from "@js/components/multipleLayersMenu";
import { initializeApp } from "firebase/app";
import {
  collection, getFirestore, onSnapshot, orderBy,
  query, where
} from "firebase/firestore";

// 宣告變數儲存即時資料
const areaData = {
  layer1: [],
  layer2: [],
  layer3: []
};
const styleData = {
  layer1: [],
  layer2: []
};
const statsData = [];

// 初始化firebase核心
initializeApp(firebaseConfig);

// 初始化firebase各項服務
const db = getFirestore();

// 取得collection references
const regionsRef = collection(db, "divisions/regions/items");
const citiesRef = collection(db, "divisions/cities/items");
const districtsRef = collection(db, "divisions/districts/items");
const statsRef = collection(db, "statistics");

// 取得即時資料
onSnapshot(query(regionsRef, orderBy("id")), snapshot => {
  snapshot.docs.forEach(doc => {
    areaData.layer1.push(doc.data());
  });
});
onSnapshot(query(citiesRef, orderBy("id")), snapshot => {
  snapshot.docs.forEach(doc => {
    areaData.layer2.push(doc.data());
  });
});
onSnapshot(query(districtsRef, orderBy("id")), snapshot => {
  snapshot.docs.forEach(doc => {
    areaData.layer3.push(doc.data());
  });
});
onSnapshot(query(statsRef, orderBy("id")), snapshot => {
  snapshot.docs.forEach(doc => {
    statsData.push(doc.data());
  });
  localStorage.setItem("statsData", JSON.stringify(statsData));
});

// 渲染area三層選單
const areaOpenBtn = document.querySelector(".area-menu .menu-open-btn");
const areaLayer1 = document.querySelector(".area-menu .layer-1");
const areaLayer2 = document.querySelector(".area-menu .layer-2");
const areaLayer3 = document.querySelector(".area-menu .layer-3");

areaOpenBtn.addEventListener("mouseover", e => {
  let html = "";
  areaData.layer1.forEach(item => {
    html += `
    <div class="menu-item" data-menu-type="item" data-menu-next-layer="2" data-menu-id="${item.id}">
      <span class="d-block fw-bold">${item.name["zh-tw"]}</span>
      <span class="icon-arrow-right"></span>
    </div>
    `;
  });
  areaLayer1.innerHTML = html;
});

areaLayer1.addEventListener("mouseover", e => {
  const id = e.target.getAttribute("data-menu-id");
  let html = "";
  areaData.layer2.filter(item => item.parent.id === id)
    .forEach(item => {
      html += `
      <div class="menu-item" data-menu-type="item" data-menu-next-layer="3" data-menu-id="${item.id}">
        <span class="d-block fw-bold">${item.name["zh-tw"]}</span>
        <span class="icon-arrow-right"></span>
      </div>
    `;
    });
  areaLayer2.innerHTML = html;
});

areaLayer2.addEventListener("mouseover", e => {
  const id = e.target.getAttribute("data-menu-id");
  let html = "";
  statsData.filter(item => item.parent.id === id)
    .forEach(item => {
      html += `
      <a href="./searchHairSalon.html?id=${item.id}" class="menu-item">
        <span class="d-block fw-bold">${item.name["zh-tw"]}</span>
        <span class="d-block">(${item.salonNum})</span>
      </a>
    `;
    });
  areaLayer3.innerHTML = html;
});

// 渲染style三層選單

// 產生三層選單
const areaMlm = new MultipleLayersMenu(".area-menu", {
  layers: 3,
  nonePointer: [".menu-guide"]
});
// const styleMenu = new TripleLayersMenu(".style-menu");