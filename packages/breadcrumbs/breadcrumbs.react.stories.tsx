import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Breadcrumbs } from './react';
import { BreadcrumbItem } from '../breadcrumb-item/react';

export default {
  title: 'Navigation/Breadcrumbs',
  render(args) {
    return (
      <Breadcrumbs {...args}>
        <BreadcrumbItem href="#/home">Home</BreadcrumbItem>
        <BreadcrumbItem href="#/category">Category</BreadcrumbItem>
        <BreadcrumbItem href="#/subcategory">Subcategory</BreadcrumbItem>
        <BreadcrumbItem current-page>Current Page</BreadcrumbItem>
      </Breadcrumbs>
    );
  },
  component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

export type Story = StoryObj<typeof Breadcrumbs>;

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
    return (
      <Breadcrumbs {...args}>
        <BreadcrumbItem href="#/eiendom">Eiendom</BreadcrumbItem>
        <BreadcrumbItem href="#/bolig-til-salgs">Bolig til salgs</BreadcrumbItem>
        <BreadcrumbItem href="#/oslo" current-page>
          Oslo
        </BreadcrumbItem>
      </Breadcrumbs>
    );
  },
};

export const WithSpanForCurrentPage: Story = {
  args: {
    'aria-label': 'You are here',
  },
  render(args) {
    return (
      <Breadcrumbs {...args}>
        <BreadcrumbItem href="#/eiendom">Eiendom</BreadcrumbItem>
        <BreadcrumbItem href="#/bolig-til-salgs">Bolig til salgs</BreadcrumbItem>
        <BreadcrumbItem current-page>
          Oslo
        </BreadcrumbItem>
      </Breadcrumbs>
    );
  },
};
