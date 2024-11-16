import type { StoryObj } from '@storybook/react';
import { Example } from '../Example';
import { Flex } from '@/shared';
import { IconsList } from '@/types/icons';
import { theme } from '@/themes';

export const List: StoryObj<typeof Example> = {
  render: () => (
    <Flex>
      {IconsList.map((name) => (
        <Flex key={name}>
          <Example name={name} color={theme.colors.grey} />
          <span>{name}</span>
        </Flex>
      ))}
    </Flex>
  ),
};
