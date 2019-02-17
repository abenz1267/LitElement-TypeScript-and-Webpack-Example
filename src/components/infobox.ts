import { LitElement, html, customElement, property } from 'lit-element';

@customElement('text-box')
export class Infobox extends LitElement {
  @property({ type: String }) content = '';
  @property({ type: String }) id = '';

  render() {
    return html`
      <p id="${this.id}">${this.content}</p>
    `;
  }
}
