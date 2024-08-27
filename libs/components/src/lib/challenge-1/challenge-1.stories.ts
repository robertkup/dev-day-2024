import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge1Component } from './challenge-1.component';

const component = new Challenge1Component();

const meta: Meta<Challenge1Component> = {
  title: 'challenge 1 Component',
  component: component.tagName,
  argTypes: {
    // alert: {
    //   control: 'text',
    //   description: 'Some default waring',
    //   defaultValue: {
    //     summary: 'This is a alert!',
    //   },
    // },
  },
  // args: {
  //   alert: 'This is a alert!',
  // },
  render: (args: Challenge1Component) =>
    html`<challenge-1-component alert="this is a test warning!!!" />,`,
};

export default meta;

export const Default = {};
export const warning = {
  args: {
    alert: 'warning',
  },
};
