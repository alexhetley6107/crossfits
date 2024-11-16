import type { StoryObj } from '@storybook/react';
import { Example } from '../Example';
import { Flex } from '@/shared';

export const Variants: StoryObj<typeof Example> = {
  render: () => (
    <Flex>
      <Example text="Filled" variant="filled" />
      <Example text="Outlined" variant="outlined" />
    </Flex>
  ),
};
