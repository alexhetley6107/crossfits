---
to: src/pages/<%= name %>/doc/<%= name %>.stories.tsx
---
import type { Meta, StoryObj } from '@storybook/react';
import { <%= name %>Page } from '../<%= name %>Page';
import { ThemeDecorator } from '@/decorators';

const meta: Meta<typeof <%= name %>Page> = {
  title: 'Pages/<%= name %>',
  decorators: [ ThemeDecorator ],
  component: <%= name %>Page,
};

export default meta;
export const <%= name %>: StoryObj<typeof <%= name %>Page> = {};