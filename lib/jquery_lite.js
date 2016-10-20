/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	let DOMNodeCollection = __webpack_require__(1);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

	class DOMNodeCollection {
	  constructor(nodeList){
	    this.nodeList = nodeList;
	  }

	  html(string) {
	    if (string) {
	      this.nodeList.forEach( (el) => {
	        el.innerHTML = string;
	      });

	      return this.nodeList[0].innerHTML;
	    }
	    else {
	      return this.nodeList[0].innerHTML;
	    }
	  }

	  empty() {
	    this.nodeList.forEach( (el) => {
	      el.innerHTML = "";
	    });

	    return this.nodeList[0].innerHTML;
	  }

	  append(elements) {
	    if(typeof elements === "string"){
	      this.nodeList.forEach(el => {
	        el.innerHTML += elements;
	      });
	    } else if (elements instanceof DOMNodeCollection){
	      elements = elements.nodeList;
	      this.nodeList.forEach( el => {
	        elements.forEach(el2 => {
	          el.innerHTML += el2.outerHTML;
	        });
	      });
	    } else {
	      this.nodeList.forEach(el => {
	        el.innerHTML += elements.outerHTML;
	      });
	    }
	  }

	  attr(name, value) {
	    if (value) {
	      this.nodeList.forEach ( el => {
	        el.setAttribute(name, value);
	      });
	    }
	    else {
	      return this.nodeList[0].getAttribute(name);
	    }
	  }

	  addClass(className) {
	    this.nodeList.forEach( el => {
	      if (el.hasAttribute('class')) {
	        let classValues = el.getAttribute('class');
	        el.setAttribute('class', `${classValues} ${className}`);
	      }
	      else {
	        el.setAttribute('class', className);
	      }
	    });
	  }

	  removeClass(className) {
	    this.nodeList.forEach( el => {
	      let classArray = el.getAttribute('class').split(" ");
	      if (classArray.length > 1) {
	        classArray = classArray.filter( element => element !== className );
	        let classString = classArray.join(" ");
	        el.setAttribute('class', classString);
	      }
	      else {
	        el.removeAttribute('class');
	      }
	    });
	  }

	}







	module.exports = DOMNodeCollection;


/***/ }
/******/ ]);