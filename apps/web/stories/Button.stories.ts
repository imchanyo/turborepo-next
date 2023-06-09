import type { Meta, StoryObj } from '@storybook/react';
import { ButtonStyle } from "ui";
// import { Button } from './Button'
const meta: Meta<typeof ButtonStyle> = {
  title: 'Example/Button',
  component: ButtonStyle,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonStyle>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    children : 'Button'
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    children : 'Button'
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
    children : 'Button'
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    children : 'Button'
  },
};
