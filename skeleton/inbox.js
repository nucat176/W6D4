class Inbox {
  render(){
    let list = document.createElement('ul');
    list.className = 'messages';
    list.innerHTML = "An Inbox Message";
    return list;
  }
}
