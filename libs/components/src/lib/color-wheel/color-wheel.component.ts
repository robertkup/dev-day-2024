import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './color-wheel.styles';
import '@spectrum-web-components/color-wheel/sp-color-wheel.js';
import '@spectrum-web-components/theme/sp-theme.js';
@customElement('color-wheel-component')
export class ColorWheelComponent extends LitElement {
  static override styles = styles;

  @property({ type: String })
  label: string = 'Some hint';

  override render() {
    return html`
      <sp-theme theme="express" color="light" scale="medium">
        <label>${this.label}</label>
        <sp-color-wheel></sp-color-wheel>
      </sp-theme>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'color-wheel-component': ColorWheelComponent;
  }
}
