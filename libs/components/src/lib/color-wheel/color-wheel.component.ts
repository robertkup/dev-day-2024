import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './color-wheel.styles';
import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/color-wheel/sp-color-wheel.js';
import '@spectrum-web-components/theme/express/theme-light.js';
import { ColorArea, ColorWheel } from '@spectrum-web-components/bundle';
import { ColorWheel } from '@spectrum-web-components/color-wheel';

@customElement('color-wheel-component')
export class ColorWheelComponent extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        gap: var(--spectrum-global-dimension-size-200);
        margin-bottom: var(--spectrum-global-dimension-size-200);
      }
      .combined {
        flex-shrink: 0;
        display: grid;
        place-content: center center;
        grid-template-areas: main;
      }
      sp-color-wheel {
        width: 300px;
        height: 300px;
        grid-area: main;
      }
      sp-color-area {
        grid-area: main;
        z-index: 1;
        margin: auto;
        width: 160px;
        height: 160px;
      }
      .color {
        display: flex;
        flex-direction: column;
        gap: var(--spectrum-global-dimension-size-200);
      }
      .color > div {
        text-align: center;
        width: 75px;
      }
      .output {
        border: 1px solid;
        padding: var(--spectrum-global-dimension-size-50);
        align-self: flex-start;
      }
    `,
  ];

  @property({ type: String }) public color = '#00ff00';

  private handleInput(event: Event & { target: ColorArea | ColorWheel }) {
    this.color = event.target.color as string;
  }

  @property({ type: String })
  label = 'Some hint';

  override render() {
    return html`
      <div class="combined">
        <sp-color-wheel
          color=${this.color}
          @input=${this.handleInput}
        ></sp-color-wheel>
        <sp-color-area
          color=${this.color}
          @input=${this.handleInput}
        ></sp-color-area>
      </div>
      <sp-theme theme="express" color="light" scale="medium">
        <label>${this.label}</label>
        <sp-color-wheel style="width: 300px; height: 300px;"></sp-color-wheel>
      </sp-theme>
      <sp-color-area
        color=${this.color}
        @input=${this.handleInput}
      ></sp-color-area>
      <div class="color">
        <div style="color: ${this.color}" class="output">${this.color}</div>
        <div class="output">${this.color}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'color-wheel-component': ColorWheelComponent;
  }
}
