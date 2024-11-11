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
          overflow: 'hidden',
        }}
      >
        <img
          src="./images/planning.jpg"
          alt="Welcome"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        style={{
          width: '450px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
};
