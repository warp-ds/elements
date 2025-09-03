import type { StoryObj } from '@storybook/web-components-vite';
import { getWcStorybookHelpers } from 'wc-storybook-helpers';

import { toAttributeString } from '../../.storybook/utilities.js';
import './index.js';

const { events, args, argTypes } = getWcStorybookHelpers('w-pagination');

const meta = {
  title: 'Navigation/Pagination',
  component: 'w-pagination',
  render(args) {
    return `<w-pagination ${toAttributeString(args)}></w-pagination>`;
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
