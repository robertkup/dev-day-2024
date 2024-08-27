import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './challenge-3.styles';

@customElement('challenge-3-component')
export class Challenge3Component extends LitElement {
  static override styles = styles;

  @property({ type: String })
  alert = 'some alert warning';

  @property({ type: String })
  warningType = 'primary';

  override render() {
    return html`
      <div class="alert ${this.warningType}">
        ${this.warningType}: ${this.alert}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'challenge-3-component': Challenge3Component;
  }
}
