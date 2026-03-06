import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpBreadcrumbs } from './breadcrumbs.js';
import './breadcrumbs.js';

const { events, args, argTypes } = getStorybookHelpers<WarpBreadcrumbs>('w-breadcrumbs');

const meta: Meta<typeof args> = {
  title: 'Navigation/Breadcrumbs',
  render(args) {
    return html`
      <w-breadcrumbs ${spread(prespread(args))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <span aria-current="page">Current page</span>
      </w-breadcrumbs>
    `;
  },
  args: {
    'aria-label': 'You are here',
  },
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};

export default meta;
type Story = StoryObj<typeof args>;

export const Default: Story = {};

export const WithLinks: Story = {
  render(args) {
    return html`
      <w-breadcrumbs ${spread(prespread(args))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory" aria-current="page">Current page</a>
      </w-breadcrumbs>
    `;
  },
};

export const WithSpanForCurrentPage: Story = {
  render(args) {
    return html`
      <w-breadcrumbs ${spread(prespread(args))}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <span aria-current="page">Current page</span>
      </w-breadcrumbs>
    `;
  },
};
