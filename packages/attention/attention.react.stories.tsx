import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button/react';

import { Attention } from './react';

export default {
  title: 'Overlays/Attention',
  component: Attention,
} satisfies Meta<typeof Attention>;

export type Story = StoryObj<typeof Attention>;

export const Default: Story = {
  args: {
    placement: 'bottom',
    popover: true,
    flip: true,
  },
  render: (args) => {
    const [show, setShow] = useState(false);

    return (
      <Attention {...args} show={show}>
        <Button onClick={() => setShow(!show)} slot="target">
          Click to toggle a popover
        </Button>
        <span slot="message">I'm a popover</span>
      </Attention>
    );
  },
};

export const ToolTip: Story = {
  args: {
    placement: 'right',
    id: 'tooltip-element',
    tooltip: true,
    flip: true,
  },
  render: (args) => {
    const [show, setShow] = useState(false);

    return (
      <Attention {...args} show={show}>
        <Button
          slot="target"
          onMouseEnter={() => {
            setShow(true);
          }}
          onMouseLeave={() => setShow(false)}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}>
          hover me
        </Button>
        <span slot="message">Tooltip content</span>
      </Attention>
    );
  },
};

export const Callout: Story = {
  args: {
    placement: 'right',
    callout: false,
    show: true,
    className: 'flex items-center gap-8',
  },
  render: (args) => {
    return (
      <Attention {...args}>
        <Button slot="target">I need a callout</Button>
        <span slot="message">Callout</span>
      </Attention>
    );
  },
};

export const Highlight: Story = {
  args: {
    placement: 'right',
    highlight: true,
    flip: true,
  },
  render: (args) => {
    const [show, setShow] = useState(false);

    return (
      <Attention {...args} show={show}>
        <Button onClick={() => setShow(!show)} slot="target">
          I'm highlighted
        </Button>
        <span slot="message">Highlighted content</span>
      </Attention>
    );
  },
};

export const DismissibleHighlight: Story = {
  args: {
    className: 'flex items-center gap-8',
    placement: 'right',
    canClose: true,
    crossAxis: true,
    highlight: true,
    flip: true,
  },
  render: (args) => {
    const [show, setShow] = useState(false);

    return (
      <Attention {...args} show={show} onClose={() => setShow(false)}>
        <Button onClick={() => setShow(!show)} slot="target">
          click me
        </Button>
        <span slot="message">Dismissible highlight content</span>
      </Attention>
    );
  },
};

export const AccessibleTooltip: Story = {
  args: {
    placement: 'right',
    popover: true,
  },
  render: (args) => {
    const [show, setShow] = useState(false);

    return (
      <Attention {...args} show={show}>
        <div slot="message">
          <p id="aria-content" role="tooltip">
            I'm a popover with ARIA "tooltip" role
          </p>
          <p>(this text is less relevant)</p>
        </div>
        <button
          onClick={() => setShow(!show)}
          aria-details="aria-content"
          id="accessible-target"
          className="group block relative break-words last-child:mb-0 p-16 rounded-8 s-bg-subtle"
          slot="target">
          Click to toggle a popover
        </button>
      </Attention>
    );
  },
};
