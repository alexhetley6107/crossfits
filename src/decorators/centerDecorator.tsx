import React from 'react';

export const CenterDecorator = (Story: React.FC) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  );
};
