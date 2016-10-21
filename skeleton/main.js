let Router = require("./router.js");

document.addEventListener("DOMContentLoaded", () => {
  let sidebarEls = document.querySelectorAll(".sidebar-nav li");

  sidebarEls.forEach(el => {
    el.addEventListener("click", () => {
      let innerText = el.innerText.toLowerCase();
      window.location.hash = innerText;
    });
  });

  let pageContent = document.querySelector(".content");
  let router = new Router(pageContent);
  router.start();

});
