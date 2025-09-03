import type { StoryObj } from '@storybook/web-components-vite';
import { getWcStorybookHelpers } from 'wc-storybook-helpers';

import { toAttributeString } from '../../.storybook/utilities.js';
import './index.js';

const { events, args, argTypes } = getWcStorybookHelpers('w-breadcrumbs');

const meta = {
  title: 'Navigation/Breadcrumbs',
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
  args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};

export default meta;
type Story = StoryObj;

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
