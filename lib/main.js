let DOMNodeCollection = require("./dom_node_collection.js");

function $l(selector) {
  if (selector instanceof HTMLElement){
    let elementArray = [selector];
    return new DOMNodeCollection(elementArray);
  } else {
    let nodeList = Array.from(document.querySelectorAll(selector));
    return new DOMNodeCollection(nodeList);
  }
}

window.$l = $l;
