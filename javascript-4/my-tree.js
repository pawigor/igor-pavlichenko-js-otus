import { html, LitElement } from 'lit-element'
import './my-leaf'

class MyTree extends LitElement {

  static get properties () { return {tree: String}};

  render () {
    this.treeObj = (typeof this.tree === 'string' ? JSON.parse(this.tree) : this.tree)
    return html`<ul>${this.treeObj.items && this.treeObj.items.length > 0
      ? html`<my-leaf leaf="${JSON.stringify(this.treeObj)}">${this.treeObj.items.map(i => html`<my-tree tree="${JSON.stringify(i)}"></my-tree>`)}</my-leaf>`
      : html`<my-leaf leaf="${JSON.stringify(this.treeObj)}"></my-leaf>`
    }</ul>`
  }
}

customElements.define('my-tree', MyTree)