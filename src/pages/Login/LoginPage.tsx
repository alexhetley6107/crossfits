import { FC } from 'react';
import { AuthLayout } from '../layouts/AuthLayout';
import { Button } from '@/components';

export const LoginPage: FC = () => {
  return (
    <AuthLayout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '370px',
        }}
      >
        <Button text="Log In" size="lg" fullWidth />
      </div>
    </AuthLayout>
  );
};
