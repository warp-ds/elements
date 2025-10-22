import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpPagination } from './index.js';
import './index.js';

const { events, args, argTypes } = getStorybookHelpers<WarpPagination>('w-pagination');

const meta: Meta<typeof args> = {
  title: 'Navigation/Pagination',
  render(args) {
    return html`<w-pagination ${spread(prespread(args))}></w-pagination>`;
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
type Story = StoryObj<typeof args>;

export const BasicPagination: Story = {
  args: {
    'current-page': 1,
    pages: 5,
    'base-url': '/search?page=',
  },
};

export const MiddlePageSelected: Story = {
  args: {
    'current-page': 3,
    pages: 7,
    'base-url': '/search?page=',
  },
};

export const LastPageSelected: Story = {
  args: {
    'current-page': 10,
    pages: 10,
    'base-url': '/search?page=',
  },
};

export const ManyPagesWithLimitedVisible: Story = {
  args: {
    'current-page': 15,
    pages: 50,
    'visible-pages': 5,
    'base-url': '/search?page=',
  },
};

export const SinglePage: Story = {
  args: {
    'current-page': 1,
    pages: 1,
    'base-url': '/search?page=',
  },
};
