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
