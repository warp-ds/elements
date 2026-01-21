import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Pagination } from './react';

export default {
  title: 'Navigation/Pagination',
  render(args) {
    return <Pagination {...args} />;
  },
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export type Story = StoryObj<typeof Pagination>;

export const BasicPagination: Story = {
  args: {
    currentPageNumber: 1,
    pages: 5,
    baseUrl: '/search?page=',
  },
};

export const MiddlePageSelected: Story = {
  args: {
    currentPageNumber: 3,
    pages: 7,
    baseUrl: '/search?page=',
  },
};

export const LastPageSelected: Story = {
  args: {
    currentPageNumber: 10,
    pages: 10,
    baseUrl: '/search?page=',
  },
};

export const ManyPagesWithLimitedVisible: Story = {
  args: {
    currentPageNumber: 15,
    pages: 50,
    visiblePages: 5,
    baseUrl: '/search?page=',
  },
};

export const SinglePage: Story = {
  args: {
    currentPageNumber: 1,
    pages: 1,
    baseUrl: '/search?page=',
  },
};
