import { html, LitElement } from 'lit-element'

class MyLeaf extends LitElement {

  static get properties () { return {leaf: String}};

  render () {
    this.leafObj = (typeof this.leaf === 'string' ? JSON.parse(this.leaf) : this.leaf)
    return html`<li>${this.leafObj.id}<slot></slot></li>`
  }
}

customElements.define('my-leaf', MyLeaf)