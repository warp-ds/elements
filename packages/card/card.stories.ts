import { spread } from '@open-wc/lit-helpers';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit';

import { prespread } from '../../.storybook/utilities.js';

import type { WarpCard } from './card.js';
import './card.js';

const { events, args, argTypes } = getStorybookHelpers<WarpCard>('w-card');

const meta: Meta<typeof args> = {
  title: 'Navigation/Card',
  render(args) {
    return html`
      <w-card ${spread(prespread(args))}>
        <div style="padding: 16px;">
          <h3>Card Title</h3>
          <p>This is card content with some example text.</p>
        </div>
      </w-card>
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
type Story = StoryObj<typeof args>;

export const Default: Story = {
  args: {
    selected: false,
    flat: false,
    clickable: false,
  },
};

export const TwoCardHorizontal: Story = {
  render() {
    return html`
      <section style="display: grid; grid-auto-rows: 1fr; grid-template-columns: repeat(2, 1fr); gap: 16px;">
        <w-card>
          <ul>
            <li>First item</li>
            <li>Second item</li>
          </ul>
          <button>Click me</button>
        </w-card>
        <w-card>
          <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
            <li>Fourth item</li>
          </ul>
          <button>Click me</button>
        </w-card>
      </section>
    `
  }
}

export const TwoCardVertical: Story = {
  render() {
    return html`
      <section style="display: grid; grid-auto-rows: 1fr; gap: 16px;">
        <w-card>
          <ul>
            <li>First item</li>
            <li>Second item</li>
          </ul>
          <button>Click me</button>
        </w-card>
        <w-card>
          <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
            <li>Fourth item</li>
          </ul>
          <button>Click me</button>
        </w-card>
      </section>
    `
  }
}

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
    return html`
      <w-card ${spread(prespread(args))} style="max-width: 300px;">
        <img style="width: 100%; height: 200px; object-fit: cover;" src="https://unsplash.it/300/200?random" alt="Example image" />
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
