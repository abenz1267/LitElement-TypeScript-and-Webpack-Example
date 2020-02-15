import { LitElement, html, customElement, property } from "lit-element";

@customElement("action-button")
export class ActionButton extends LitElement {
  @property({ type: String }) foo: string;

  alert() {
    alert("You have pressed a button.");
  }

  render() {
    return html`
      <button @click="${this.alert}">${this.foo}</button>
    `;
  }
}
