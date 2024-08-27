import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { ColorWheelComponent } from './color-wheel.component';

const component = new ColorWheelComponent();

const meta: Meta<ColorWheelComponent> = {
  title: 'Color Wheel Component',
  component: component.tagName,
  argTypes: {
    hint: {
      control: 'text',
      description: 'hint text',
    },
    count: {
      control: 'number',
      description: 'start value',
      defaultValue: {
        summary: 0,
      },
    },
  },
  args: {
    hint: 'Some hint',
    count: 0,
  },
  render: (args: ColorWheelComponent) =>
    html`<color-wheel-component hint=${args.hint} .count=${args.count} />,`,
};

export default meta;

export const colorWheel = {};
