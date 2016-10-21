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
