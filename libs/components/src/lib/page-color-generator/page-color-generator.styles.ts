import { css } from 'lit';

export const styles = [
  css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .color-generator {
      text-align: center;
      padding: 20px;
    }

    .color-preview {
      margin-top: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
    }

    .header, .footer {
      color: white;
      padding: 20px;
    }

    .header {
      font-size: 24px;
    }

    .content {
      color: #333;
      padding: 20px;
      background: #f4f4f4;
    }

    .footer {
      font-size: 14px;
    }
  `,
];
