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

	let Router = __webpack_require__(1);
	let Inbox = __webpack_require__(2);

	document.addEventListener("DOMContentLoaded", () => {
	  let sidebarEls = document.querySelectorAll(".sidebar-nav li");

	  sidebarEls.forEach(el => {
	    el.addEventListener("click", () => {
	      let innerText = el.innerText.toLowerCase();
	      window.location.hash = innerText;
	    });
	  });

	  let pageContent = document.querySelector(".content");
	  let router = new Router(pageContent, routes);
	  router.start();

	});

	let routes = {
	  inbox: new Inbox
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Router {
	  constructor(node, routes) {
	    this.node = node;
	    this.routes = routes;
	  }

	  start() {
	    this.render();

	    let that = this;
	    window.addEventListener("hashchange", () => {
	      that.render();
	    });
	  }

	  activeRoute() {
	    let hash = window.location.hash.slice(1);
	    return this.routes[hash];
	  }

	  render() {
	    this.node.innerHTML = "";

	    let currentRoute = this.activeRoute();
	    let newNode = document.createElement("p");
	    newNode.innerHTML = currentRoute;
	    this.node.appendChild(newNode);
	  }
	}

	module.exports = Router;


/***/ },
/* 2 */
/***/ function(module, exports) {

	class Inbox {
	  render(){
	    let list = document.createElement('ul');
	    list.className = 'messages';
	    list.innerHTML = "An Inbox Message";
	    return list;
	  }
	}


/***/ }
/******/ ]);