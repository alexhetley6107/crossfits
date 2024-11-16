import { FC } from 'react';
import { AuthLayout } from '../layouts';
import { Button, Input, LogoText } from '@/components';
import { Flex } from '@/shared';

export const LoginPage: FC = () => {
  return (
    <AuthLayout>
      <Flex
        styles={{
          flexDirection: 'column',
          gap: '20px',
          width: '370px',
          minWidth: '370px',
          padding: '20px',
          alignItems: 'stretch',
        }}
      >
        <LogoText size="lg" />
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Button text="Log In" size="lg" fullWidth />
      </Flex>
    </AuthLayout>
  );
};
