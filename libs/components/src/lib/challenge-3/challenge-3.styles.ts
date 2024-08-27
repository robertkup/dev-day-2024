import { css } from 'lit';

export const styles = [
  css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .alert {
      background-color: #f44336;
      color: white;
      padding: 1rem;
      border-radius: 0.25rem;
    }

    .primary {
      background-color: blue;
    }
    .success {
      background-color: green;
    }
    .neutral {
      background-color: gray;
    }
    .warning {
      background-color: orange;
    }
    .danger {
      background-color: red;
    }

    .title {
      font-weight: bold;
      margin-bottom: 5px;
    }
  `,
];
