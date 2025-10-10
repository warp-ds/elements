import React, { useEffect, useRef, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Attention } from './react';
import { Button } from '../button/react';

export default {
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
    const [ show, setShow ] = useState(false);

    return (
      <Attention  {...args} show={show}>
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
    buttonText: 'hover me',
    id: 'tooltip-element',
    tooltip: true,
    flip: true,
    buttonId: 'tooltip-target',
  },
  render: (args) => {
    const [ show, setShow ] = useState(false);

    return (
      <Attention {...args} show={show}>
        <Button 
          slot="target"
          onMouseEnter={() => {setShow(true)}}
          onMouseLeave={() => setShow(false)}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
        >
          {args.buttonText}
        </Button>
        <span slot="message">Tooltip content</span>
      </Attention>
    );
  },
};

export const Callout: Story = {
  args: {
    buttonText: 'I need a callout',
    className: 'flex items-center gap-8',
    placement: 'right',
    callout: true,
    show: true,
  },
};

export const Highlight: Story = {
  args: {
    buttonId: 'highlight-target1',
    id: 'highlight-message',
    buttonText: "I'm highlighted",
    placement: 'right',
    highlight: true,
    flip: true,
  },
  render: (args) => {
    const buttonRef = useRef<HTMLElement | null>(null);
    const highlightRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const button = buttonRef.current;
      const highlight = highlightRef.current;
      if (!button || !highlight) return;

      const toggle = () => (highlight.show = !highlight.show);
      button.addEventListener('click', toggle);
      return () => button.removeEventListener('click', toggle);
    }, []);

    return (
      <Attention {...args} ref={highlightRef}>
        <Button ref={buttonRef} id={args.buttonId} slot="target">
          {args.buttonText}
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
    buttonId: 'highlight-target2',
    buttonText: 'click me',
    id: 'dismissible-highlight-message',
    ['can-close']: true,
    ['cross-axis']: true,
    highlight: true,
    flip: true,
  },
  render: (args) => {
    const buttonRef = useRef<HTMLElement | null>(null);
    const highlightRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const button = buttonRef.current;
      const highlight = highlightRef.current;
      if (!button || !highlight) return;

      const open = () => (highlight.show = true);
      const close = () => (highlight.show = false);

      button.addEventListener('click', open);
      highlight.addEventListener('close', close);

      return () => {
        button.removeEventListener('click', open);
        highlight.removeEventListener('close', close);
      };
    }, []);

    return (
      <Attention {...args} ref={highlightRef}>
        <Button ref={buttonRef} id={args.buttonId} slot="target">
          {args.buttonText}
        </Button>
        <span slot="message">Dismissible highlight content</span>
      </Attention>
    );
  },
};

export const AccessibleTooltip: Story = {
  args: {},
  render: (args) => {
    const buttonRef = useRef<HTMLElement | null>(null);
    const attentionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const button = buttonRef.current;
      const attention = attentionRef.current;
      if (!button || !attention) return;

      const toggle = () => (attention.show = !attention.show);
      button.addEventListener('click', toggle);
      return () => button.removeEventListener('click', toggle);
    }, []);

    return (
      <Attention {...args} ref={attentionRef} id="accessible-attention" placement="right" popover>
        <div slot="message">
          <p id="aria-content" role="tooltip">
            I'm a popover with ARIA "tooltip" role
          </p>
          <p>(this text is less relevant)</p>
        </div>
        <button
          ref={buttonRef}
          aria-details="aria-content"
          id="accessible-target"
          className="group block relative break-words last-child:mb-0 p-16 rounded-8 s-bg-subtle"
          slot="target"
        >
          Click to toggle a popover
        </button>
      </Attention>
    );
  },
};