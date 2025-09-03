import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { toAttributeString } from '../../.storybook/utilities.js';
import './index.js';

type Args = {
  selected: boolean;
  flat: boolean;
  clickable: boolean;
};

const meta: Meta<Args> = {
  component: 'w-card',
  render(args) {
    return `
      <w-card ${toAttributeString(args)}>
        <div style="padding: 16px;">
          <h3>Card Title</h3>
          <p>This is card content with some example text.</p>
        </div>
      </w-card>
    `;
  },
  argTypes: {
    selected: {
      type: 'boolean',
      description: 'Whether the card appears selected',
    },
    flat: {
      type: 'boolean',
      description: 'Flat styling without shadow',
    },
    clickable: {
      type: 'boolean',
      description: 'Makes the card interactive and focusable',
    },
  },
};

export default meta;
type Story = StoryObj<Args>;

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
    return `
      <w-card ${toAttributeString(args)} style="max-width: 300px;">
        <img style="width: 100%; height: 200px; object-fit: cover;" src="https://source.unsplash.com/300x200" alt="Example image" />
        <div style="padding: 16px;">
          <p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">DNB Eiendom</p>
          <p style="margin: 0 0 8px 0;">Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.</p>
          <p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">Bøgata 25C, 0655 Oslo</p>
          <p style="font-weight: bold; margin: 0;">52 m² Totalpris: 4 869 039 kr</p>
        </div>
      </w-card>
    `;
  },
};
