function showLayer(item) {
  item.classList.add("d-block");
}
function hideLayer(item) {
  item.classList.remove("d-block");
}
function hideLayersBetween(menu, start, end) {
  for (let i = start + 1; i <= end; i++) {
    const layer = menu.querySelector(`.layer-${i}`);
    hideLayer(layer);
  }
}

function addItemStyle(item) {
  item.classList.add("menu-item-hover");
}
function removeItemStyle(item) {
  item.classList.remove("menu-item-hover");
}

class MultipleLayersMenu {
  constructor(container, options) {
    this.menu = document.querySelector(container);

    // add property "hookItem" to each layer
    this.initialize(options);

    this.menu.addEventListener("mouseover", e => {
      const isOpenBtn = e.target.getAttribute("data-menu-type") === "open";
      const isItem = e.target.getAttribute("data-menu-type") === "item";
      const isLayer = e.target.getAttribute("data-menu-type") === "layer";

      const layerNum = Number(e.target.getAttribute("data-menu-layer"));
      const nextLayerNum = Number(e.target.getAttribute("data-menu-next-layer"));

      // 1. hide layers from next layer all the way to last layer
      // 2. show next layer
      if (isOpenBtn || isItem) {
        const nextLayer = this.menu.querySelector(`.layer-${nextLayerNum}`);
        hideLayersBetween(this.menu, nextLayerNum - 1, options.layers);
        if(nextLayer.innerHTML) {
          showLayer(nextLayer);
        }
      }
      // 1. hide layers from next layer all the way to last layer
      // 2. remove style of current layer's hooked item
      if (isLayer) {
        const layer = this.menu.querySelector(`.layer-${layerNum}`);
        hideLayersBetween(this.menu, layerNum, options.layers);
        if (layer.hookItem) {
          removeItemStyle(layer.hookItem);
        }
      }
      // 1. remove style of current layer's hooked item
      // 2. add style to current item
      if (isItem) {
        const layer = this.menu.querySelector(`.layer-${nextLayerNum - 1}`);
        if (layer.hookItem) {
          removeItemStyle(layer.hookItem);
        }
        addItemStyle(e.target);
        layer.hookItem = e.target;
      }

      // show these layer while menu is visible
      options.nonePointer.forEach(layerClass => {
        const layer = this.menu.querySelector(layerClass);
        showLayer(layer);
      });
    });

    this.menu.addEventListener("mouseleave", e => {
      hideLayersBetween(this.menu, 0, options.layers);
      options.nonePointer.forEach(itemClass => {
        const item = this.menu.querySelector(itemClass);
        hideLayer(item);
      });
    });
  }

  initialize(options) {
    for (let i = 1; i < options.layers; i++) {
      const layer = this.menu.querySelector(`.layer-${i}`);
      layer.hookItem = null;
    }
  }
}

export default MultipleLayersMenu;