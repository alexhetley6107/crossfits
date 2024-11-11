import type { StoryObj } from '@storybook/react';
import { Example } from '../Example';

export const Base: StoryObj<typeof Example> = {
  args: {
    text: 'Button',
    disabled: false,
    size: 'sm',
    variant: 'filled',
    fullWidth: false,
  },
};
