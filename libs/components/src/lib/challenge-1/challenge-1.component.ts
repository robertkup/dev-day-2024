import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './challenge-1.styles';

@customElement('challenge-1-component')
export class Challenge1Component extends LitElement {
  static override styles = styles;

  @property({ type: String })
  alert = 'some alert warning';

  override render() {
    return html` <div class="alert">${this.alert}</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'challenge-1-component': Challenge1Component;
  }
}
