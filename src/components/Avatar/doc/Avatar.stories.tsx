import type { Meta } from '@storybook/react';
import { Example } from './Example';
import { MarginDecorator, ThemeDecorator } from '@/decorators';

const meta: Meta<typeof Example> = {
  title: 'Components/Avatar',
  decorators: [ ThemeDecorator, MarginDecorator ],
  component: Example,
};

export default meta;
export { Base } from './stories/Base';