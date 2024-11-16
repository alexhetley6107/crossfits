import type { StoryObj } from '@storybook/react';
import { Example } from '../Example';

export const Icon: StoryObj<typeof Example> = {
  args: {
    title: 'Search',
    icon: 'Search',
    placeholder: 'Search something...',
  },
};
