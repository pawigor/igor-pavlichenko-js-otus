class CustomTreeElement extends HTMLElement {
  connectedCallback () {
    alert(1)
  }
}

customElements.define('custom-tree', CustomTreeElement)