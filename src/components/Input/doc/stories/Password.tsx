import type { StoryObj } from '@storybook/react';
import { Example } from '../Example';

export const Password: StoryObj<typeof Example> = {
  args: {
    title: 'Password',
    placeholder: 'Input your password...',
    type: 'password',
  },
};
