import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from "./react";

export default {
  title: 'Navigation/Breadcrumbs',
  render(args) {
    return (
      <Breadcrumbs {...args}>
        <a href="#/home">Home</a>
        <a href="#/category">Category</a>
        <a href="#/subcategory">Subcategory</a>
        <span aria-current="page">Current Page</span>
      </Breadcrumbs>
    )
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
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <a href="#/oslo" aria-current="page">Oslo</a>
      </Breadcrumbs>
    )
  },
};

export const WithSpanForCurrentPage: Story = {
  args: {
    'aria-label': 'You are here',
  },
  render(args) {
    return (
      <Breadcrumbs {...args}>
        <a href="#/eiendom">Eiendom</a>
        <a href="#/bolig-til-salgs">Bolig til salgs</a>
        <span aria-current="page">Oslo</span>
      </Breadcrumbs>
    )
  },
};