import { FC } from 'react';
import { AuthLayout } from '../layouts/AuthLayout';
import { Button, LogoText } from '@/components';

export const LoginPage: FC = () => {
  return (
    <AuthLayout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          width: '370px',
          minWidth: '370px',
        }}
      >
        <LogoText />
        <Button text="Log In" size="lg" fullWidth />
      </div>
    </AuthLayout>
  );
};
