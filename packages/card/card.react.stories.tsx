import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Card } from './react';

export default {
  title: 'Navigation/Card',
  render(args) {
    return (
      <Card {...args}>
        <div style={{ padding: '16px' }}>
          <h3>Card Title</h3>
          <p>This is card content with some example text.</p>
        </div>
      </Card>
    );
  },
  component: Card,
} satisfies Meta<typeof Card>;

export type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    selected: false,
    flat: false,
    clickable: false,
  },
};

export const Selected: Story = {
  args: {
    selected: true,
    flat: false,
    clickable: false,
  },
};

export const Flat: Story = {
  args: {
    selected: false,
    flat: true,
    clickable: false,
  },
};

export const FlatSelected: Story = {
  args: {
    selected: true,
    flat: true,
    clickable: false,
  },
};

export const Clickable: Story = {
  args: {
    selected: false,
    flat: false,
    clickable: true,
  },
};

export const PropertyExample: Story = {
  args: {
    selected: false,
    flat: false,
    clickable: true,
  },
  render(args) {
    return (
      <Card {...args} style={{ maxWidth: '300px' }}>
        <img
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          src="https://unsplash.it/300/200?random"
          alt="Example image"
        />
        <div style={{ padding: '16px' }}>
          <p style={{ fontSize: '12px', color: '#666', margin: '0 0 8px 0' }}>DNB Eiendom</p>
          <p style={{ margin: '0 0 8px 0' }}>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.</p>
          <p style={{ fontSize: '14px', color: '#666', margin: '0 0 8px 0' }}>Bøgata 25C, 0655 Oslo</p>
          <p style={{ fontWeight: 'bold', margin: '0' }}>52 m² Totalpris: 4 869 039 kr</p>
        </div>
      </Card>
    );
  },
};
