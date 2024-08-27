import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { Challenge3Component } from './challenge-3.component';

const component = new Challenge3Component();

const meta: Meta<Challenge3Component> = {
  title: 'challenge 3 Component',
  component: component.tagName,
  argTypes: {
    warningType: {
      control: 'select',
      options: ['primary', 'success', 'neutral', 'warning', 'danger'],
      description: 'Choose the alert type',
      defaultValue: {
        summary: 'primary',
      },
    },
    alert: {
      control: 'text',
      description: 'The alert message to display',
      defaultValue: {
        summary: 'This is an alert message!',
      },
    },
  },
  args: {
    warningType: 'primary',
    alert: 'This is an alert message!',
  },
  render: (args: Challenge3Component) =>
    html`<challenge-3-component alert=${args.alert} .variant=${args.warningType}/>,`,
};

export default meta;

export const Default = {};
export const success = {
  args: {
    alert: 'success',
    warningType: 'success',
  },
};
export const warning = {
  args: {
    alert: 'warning',
    warningType: 'warning',
  },
};
