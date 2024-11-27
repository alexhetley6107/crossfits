import type { StoryObj } from '@storybook/react';
import { Example } from '../Example';

export const Base: StoryObj<typeof Example> = {
  args: {
    monthInfo: [
      { tasks: 3, date: 'Sat Nov 16 2024 00:00:00 GMT+0200 (Eastern European Standard Time)' },
      { tasks: 21, date: 'Sat Nov 6 2024 00:00:00 GMT+0200 (Eastern European Standard Time)' },
    ],
    onChange: (date) => console.log(date),
  },
};
