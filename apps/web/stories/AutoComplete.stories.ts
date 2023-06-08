import type { Meta, StoryObj } from '@storybook/react';
import {AutocompleteStyled} from 'ui/AutocompleteStyled'
// import { Button } from './Button'
const meta: Meta<typeof AutocompleteStyled> = {
  title: 'Example/AutocompleteStyled',
  component: AutocompleteStyled,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AutocompleteStyled>;

export const Primary: Story = {
  args: {
    notchedOutline: true,
    borderColor: 'red',    
  },
};

export const Secondary: Story = {
  args: {
    label: 'AutocompleteStyled',
 
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'AutocompleteStyled',
  
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'AutocompleteStyled',
 
  },
};
