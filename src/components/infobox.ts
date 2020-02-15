import { LitElement, html, customElement, property } from "lit-element";

@customElement("text-box")
export class TextBox extends LitElement {
  @property({ type: String }) content: string = "";
  @property({ type: String }) id: string = "";

  render() {
    return html`
      <p id="${this.id}">${this.content}</p>
    `;
  }
}
