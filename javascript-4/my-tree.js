import './my-leaf.js'
import { html, LitElement } from './node_modules/lit-element/lit-element.js'

class MyTree extends LitElement {

  static get properties () { return {tree: Object}};

  render () {
    this.treeObj = (typeof this.tree === 'string' ? JSON.parse(this.tree) : this.tree)
    return html`<ul>${this.treeObj.items && this.treeObj.items.length > 0
      ? html`<my-leaf leaf="${JSON.stringify(this.treeObj)}">${this.treeObj.items.map(i => html`<my-tree tree="${JSON.stringify(i)}"></my-tree>`)}</my-leaf>`
      : html`<my-leaf leaf="${JSON.stringify(this.treeObj)}"></my-leaf>`
    }</ul>`
  }
}

customElements.define('my-tree', MyTree)