import type { Meta, StoryObj } from '@storybook/react';
import { Login } from '../Login';
import { ThemeDecorator } from '@/decorators';

const meta: Meta<typeof Login> = {
  title: 'Pages/Login',
  decorators: [ThemeDecorator],
  component: Login,
};

export default meta;

export const LoginPage: StoryObj<typeof Login> = {};
