---
to: src/components/<%= name %>/doc/<%= name %>.stories.tsx
---
import type { Meta } from '@storybook/react';
import { Example } from './Example';
import { MarginDecorator } from '@/decorators';

const meta: Meta<typeof Example> = {
  title: 'Components/<%= name %>',
  decorators: [ MarginDecorator ],
  component: Example,
};

export default meta;
export { Base } from './stories/Base';