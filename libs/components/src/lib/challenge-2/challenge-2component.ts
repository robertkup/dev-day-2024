import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './challenge-2.styles';

@customElement('challenge-2-component')
export class Challenge2component extends LitElement {
  static override styles = styles;

  @property({ type: String })
  alert = 'some alert warning';

  override render() {
    return html` <div class="alert">${this.alert}</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'challenge-2-component': Challenge2component;
  }
}
