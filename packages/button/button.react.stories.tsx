import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from "./react";

export default {
  title: 'Buttons/Button',
  render(args) {
    return (<Button {...args}>Button Text</Button>);
  },
  component: Button,
} satisfies Meta<typeof Button>;

export type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    type: 'button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    type: 'button',
  },
};

export const Negative: Story = {
  args: {
    variant: 'negative',
    type: 'button',
  },
};

export const Utility: Story = {
  args: {
    variant: 'utility',
    type: 'button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    type: 'button',
    href: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_components',
    target: '_new',
  },
};

export const Pill: Story = {
  args: {
    variant: 'pill',
    type: 'button',
  },
  render(args) {
    return (<Button {...args}>💙</Button>);
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    small: true,
    type: 'button',
  },
};

export const Quiet: Story = {
  args: {
    variant: 'secondary',
    quiet: true,
    type: 'button',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    type: 'button',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    fullWidth: true,
    type: 'button',
  },
  render(args) {
    return (
      <div className="w-full flex flex-col gap-8">
        <Button {...args}>Full width</Button>
      </div>
    );
  },
};

export const AsLink: Story = {
  args: {
    variant: 'primary',
    href: 'https://example.com',
    target: '_blank',
    type: 'button',
  },
  render(args) {
    return (<Button {...args}>Visit Example</Button>);
  },
};

export const FormControl: Story = {
  args: {},
  render() {
    return (
      <form name="form-control">
        <input type="text" defaultValue="I am an input field" name="demoValue" style={{border: "1px solid lime"}} />
        <Button type="reset" name="resetButton" value="fooyoo">Reset</Button>
        <Button type="submit" name="submuitButtton" value="fooyoo">Send thing</Button>
      </form>
    );
  },
};
