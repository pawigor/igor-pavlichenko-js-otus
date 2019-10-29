import {customElement, html, LitElement, property} from "lit-element";

@customElement('my-leaf')
class MyLeaf extends LitElement {

    @property() id;

    render() {
        html`<li><span>${this.id}</span></li>`
    }
}

