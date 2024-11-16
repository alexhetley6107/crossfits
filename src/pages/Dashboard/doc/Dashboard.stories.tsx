import type { Meta, StoryObj } from '@storybook/react';
import { DashboardPage } from '../DashboardPage';
import { ThemeDecorator } from '@/decorators';

const meta: Meta<typeof DashboardPage> = {
  title: 'Pages/Dashboard',
  decorators: [ ThemeDecorator ],
  component: DashboardPage,
};

export default meta;
export const Dashboard: StoryObj<typeof DashboardPage> = {};