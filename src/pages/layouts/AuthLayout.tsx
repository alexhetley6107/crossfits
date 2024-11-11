import React, { PropsWithChildren } from 'react';

export const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100svh',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          flexGrow: 1,
          backgroundColor: 'red',
        }}
      />
      <div style={{ width: '400px' }}>{children}</div>
    </div>
  );
};
