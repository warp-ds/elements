import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { toAttributeString } from '../../.storybook/utilities.js';
import './index.js';

type Args = {
  'base-url': string;
  pages: number;
  'current-page': number;
  'visible-pages': number;
};

const meta: Meta<Args> = {
  component: 'w-pagination',
  render(args) {
    return `<w-pagination ${toAttributeString(args)}></w-pagination>`;
  },
  argTypes: {
    'base-url': { 
      type: 'string',
      description: 'Base URL pattern for generating page links'
    },
    pages: { 
      type: 'number',
      description: 'Total number of pages available'
    },
    'current-page': { 
      type: 'number',
      description: 'The currently active page number (1-indexed)'
    },
    'visible-pages': { 
      type: 'number',
      description: 'Maximum number of page links to display at once'
    },
  },
};

export default meta;
type Story = StoryObj<Args>;

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
