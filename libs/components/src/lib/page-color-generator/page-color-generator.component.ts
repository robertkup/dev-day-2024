import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './page-color-generator.styles';

@customElement('page-color-generator-component')
export class PageColorGeneratorComponent extends LitElement {
  static override styles = styles;

  @property({ type: String })
  header: string = this.getRandomColor();

  @property({ type: String })
  content: string = this.getRandomColor();

  @property({ type: String })
  footer: string = this.getRandomColor();

  override render() {
    return html`
      <div class="color-generator">
        <h2>Website Color Generator</h2>
        <button @click=${this.generateColors}>Generate Website Colors</button>

        <div class="color-preview">
          <div class="header" style="background:${this.header}">
            <h1>Header</h1>
          </div>
          <div class="content" style="background:${this.content}">
            <p>
              This is a sample content area where the main text of your website would
              would be displayed.
            </p>
          </div>
          <div class="footer" style="background:${this.footer}">
            <p>Footer</p>
          </div>
        </div>
      </div>
    `;
  }

  generateColors(): void {
    this.header = this.getRandomColor();
    this.content = this.getRandomColor();
    this.footer = this.getRandomColor();
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'page-color-generator-component': PageColorGeneratorComponent;
  }
}
