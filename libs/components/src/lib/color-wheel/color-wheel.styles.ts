import { css } from 'lit';

export const styles = [
  css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;

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
