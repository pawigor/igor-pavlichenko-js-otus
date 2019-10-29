import {customElement, html, LitElement, property} from "lit-element";

@customElement('my-tree')
class MyTree extends LitElement {
    @property() id;
    @property() items;

    render() {
        html`<ul>${this.items
            ? html`<li><span>${this.id}</span>${this.items.map(i => html`<my-tree id=${i.id} items="${i.items}"></my-tree>`)}</li>`
            : html`<my-leaf id="${this.id}"></my-leaf>`
        }</ul>`
    }
}
