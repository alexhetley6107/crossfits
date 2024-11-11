import type { Meta } from '@storybook/react';
import { Example } from './Example';
import { MarginDecorator, CenterDecorator } from '@/decorators';

const meta: Meta<typeof Example> = {
  title: 'Components/NowLine',
  decorators: [MarginDecorator, CenterDecorator],
  component: Example,
};

export default meta;
export { Base } from './stories/Base';
