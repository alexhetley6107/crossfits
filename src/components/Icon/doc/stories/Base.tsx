import type { StoryObj } from '@storybook/react';
import { Example } from '../Example';

export const Base: StoryObj<typeof Example> = {
  args: {
    name: 'Alarm',
    color: 'grey',
  },
};
