import type { StoryObj } from '@storybook/react';
import { Example } from '../Example';
import { Flex } from '@/shared';

export const Sizes: StoryObj<typeof Example> = {
  render: () => (
    <Flex>
      <Example text="Small" size="sm" />
      <Example text="Large" size="lg" />
    </Flex>
  ),
};
