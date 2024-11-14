import { FC } from 'react';
import { AuthLayout } from '../layouts/AuthLayout';
import { Button, Input, LogoText } from '@/components';

export const LoginPage: FC = () => {
  return (
    <AuthLayout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '370px',
          minWidth: '370px',
          padding: '20px',
        }}
      >
        <LogoText size="lg" />
        <Input placeholder="Email" />
        <Button text="Log In" size="lg" fullWidth />
      </div>
    </AuthLayout>
  );
};
