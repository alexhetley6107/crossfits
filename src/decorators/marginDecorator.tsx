import React from 'react';

export const MarginDecorator = (Story: React.FC) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '1em' }}>
      <Story />
    </div>
  );
};
