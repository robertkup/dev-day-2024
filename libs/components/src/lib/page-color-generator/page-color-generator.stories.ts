import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { PageColorGeneratorComponent } from './page-color-generator.component';

const component = new PageColorGeneratorComponent();

const meta: Meta<PageColorGeneratorComponent> = {
  title: 'Page Color Generator Component',
  component: component.tagName,
  argTypes: {
    header: {
      control: 'text',
      description: 'Website header color',
    },
    content: {
      control: 'text',
      description: 'Website content color',
    },
    footer: {
      control: 'text',
      description: 'Website footer color',
    },
  },
  args: {
    header: '#000',
    content: '#c8c8c8',
    footer: '#000',
  },
  render: (args: PageColorGeneratorComponent) =>
    html`<page-color-generator-component header=${args.header} .content=${args.content} .footer=${args.footer}/>,`,
};

export default meta;

export const Default = {};

