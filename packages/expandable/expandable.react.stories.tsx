import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button/react';

import { Expandable } from './react';

export default {
  title: 'Layout/Expandable',
  render(args) {
    return (
      <Expandable {...args}>
        <p>This is the expandable content that can be shown or hidden.</p>
        <p>It can contain multiple paragraphs and other elements.</p>
      </Expandable>
    );
  },
  component: Expandable,
} satisfies Meta<typeof Expandable>;

export type Story = StoryObj<typeof Expandable>;

export const Default: Story = {
  args: {
    title: "I'm expandable",
    expanded: false,
    box: false,
    bleed: false,
    animated: false,
    noChevron: false,
  },
};

export const Expanded: Story = {
  args: {
    title: "I'm expanded by default",
    expanded: true,
    box: false,
    bleed: false,
    animated: false,
    noChevron: false,
  },
};

export const Box: Story = {
  args: {
    title: "I'm a box expandable",
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    noChevron: false,
  },
};

export const Animated: Story = {
  args: {
    title: "I'm animated",
    expanded: false,
    box: true,
    bleed: false,
    animated: true,
    noChevron: false,
  },
};

export const WithHeading: Story = {
  args: {
    title: "I'm wrapped in h2",
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    noChevron: false,
    headingLevel: 2,
  },
};

export const NoChevron: Story = {
  args: {
    title: 'I have no chevron',
    expanded: false,
    box: false,
    bleed: false,
    animated: false,
    noChevron: true,
  },
};

export const CustomTitle: Story = {
  args: {
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    noChevron: false,
  },
  render(args) {
    return (
      <Expandable {...args}>
        <div slot="title" style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px' }}>🎯</span>
          <span>Custom title with icon</span>
        </div>
        <p>This expandable has a custom title slot with an icon.</p>
      </Expandable>
    );
  },
};

export const NoTitle: Story = {
  args: {
    expanded: true,
    box: true,
    animated: true,
  },
  render(args) {
    const [expanded, setExpanded] = useState(false);
    return (
      <>
        <Button
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle expandable content without title"
          aria-controls="expandableWithoutTitle">
          Toggle
        </Button>
        <Expandable {...args} id="expandableWithoutTitle" expanded={expanded}>
          <p>with expanded content</p>
        </Expandable>
      </>
    );
  },
};
