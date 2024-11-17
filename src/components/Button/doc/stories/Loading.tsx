import type { StoryObj } from '@storybook/react';
import { Example } from '../Example';

export const Loading: StoryObj<typeof Example> = {
  args: {
    text: 'Button',
    disabled: false,
    size: 'lg',
    variant: 'filled',
    fullWidth: false,
    loading: true,
  },
};
