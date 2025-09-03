import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { toAttributeString } from '../../.storybook/utilities.js';
import './index.js';

type Args = {
  'aria-label': string;
};

const meta: Meta<Args> = {
  component: 'w-breadcrumbs',
  render(args) {
    return `
      <w-breadcrumbs ${toAttributeString(args)}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory">Subcategory</a>
        <span aria-current="page">Current Page</span>
      </w-breadcrumbs>
    `;
  },
  argTypes: {
    'aria-label': {
      type: 'string',
      description: 'Accessible label for the breadcrumb navigation',
    },
  },
};

export default meta;
type Story = StoryObj<Args>;

export const Default: Story = {
  args: {
    'aria-label': 'You are here',
  },
};

export const WithLinks: Story = {
  args: {
    'aria-label': 'Navigation breadcrumb',
  },
  render(args) {
    return `
      <w-breadcrumbs ${toAttributeString(args)}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <a href="#/oslo" aria-current="page">Oslo</a>
      </w-breadcrumbs>
    `;
  },
};

export const WithSpanForCurrentPage: Story = {
  args: {
    'aria-label': 'You are here',
  },
  render(args) {
    return `
      <w-breadcrumbs ${toAttributeString(args)}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <span aria-current="page">Oslo</span>
      </w-breadcrumbs>
    `;
  },
};
