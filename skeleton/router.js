class Router {
  constructor(node) {
    this.node = node;
  }

  start() {
    this.render();

    let that = this;
    window.addEventListener("hashchange", () => {
      that.render();
    });
  }

  activeRoute() {
    return window.location.hash.slice(1);
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
