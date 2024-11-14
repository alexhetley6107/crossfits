import type { StoryObj } from '@storybook/react';
import { Example } from '../Example';
import { LogoText } from '../../LogoText';
import { Flex } from '@/shared';

export const Sizes: StoryObj<typeof Example> = {
  render: () => (
    <Flex>
      <LogoText size="sm" />
      <LogoText size="lg" />
    </Flex>
  ),
};
