import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { ColorWheelComponent } from './color-wheel.component';

const component = new ColorWheelComponent();

const meta: Meta<ColorWheelComponent> = {
  title: 'Color Wheel Component',
  component: component.tagName,
  argTypes: {
    label: {
      control: 'text',
      description: 'hint text',
    },
  },
  args: {
    label: 'Some hint',
  },
  render: (args: ColorWheelComponent) =>
    html`<color-wheel-component label=${args.label} />,`,
};

export default meta;

export const colorWheel = {};
