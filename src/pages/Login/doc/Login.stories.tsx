import type { Meta, StoryObj } from '@storybook/react';
import { LoginPage } from '../LoginPage';
import { ThemeDecorator } from '@/decorators';

const meta: Meta<typeof LoginPage> = {
  title: 'Pages/Login',
  decorators: [ ThemeDecorator ],
  component: LoginPage,
};

export default meta;
export const Login: StoryObj<typeof LoginPage> = {};