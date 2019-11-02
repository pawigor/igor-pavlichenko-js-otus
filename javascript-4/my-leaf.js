import { html, LitElement } from './node_modules/lit-element/lit-element.js'

class MyLeaf extends LitElement {

  static get properties () { return {leaf: Object}};

  render () {
    this.leafObj = (typeof this.leaf === 'string' ? JSON.parse(this.leaf) : this.leaf)
    return html`<li>${this.leafObj.id}<slot></slot></li>`
  }
}

customElements.define('my-leaf', MyLeaf)