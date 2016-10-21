let Router = require("./router.js");
let Inbox = require("./inbox.js");

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
