import type { StoryObj } from '@storybook/react';
import { Example } from '../Example';
import { Flex } from '@/shared';
import { IconsList } from '@/types/icons';

export const List: StoryObj<typeof Example> = {
  render: () => (
    <Flex>
      {IconsList.map((name) => (
        <Flex key={name}>
          <Example name={name} />
          <span>{name}</span>
        </Flex>
      ))}
    </Flex>
  ),
};
