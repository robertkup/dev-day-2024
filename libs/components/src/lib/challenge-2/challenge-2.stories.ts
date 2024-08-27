import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge2component } from './challenge-2component';

const component = new Challenge2component();

const meta: Meta<Challenge2component> = {
  title: 'challenge 2 Component',
  component: component.tagName,
  argTypes: {
    alert: {
      control: 'text',
      description: 'Some default waring',
      defaultValue: {
        summary: 'This is a alert!',
      },
    },
  },
  args: {
    alert: 'This is a alert!',
  },
  render: (args: Challenge2component) =>
    html`<challenge-2-component alert=${args.alert} />,`,
};

export default meta;

export const Default = {};
export const warning = {
  args: {
    alert: 'warning',
  },
};
