import React from 'react';

export const MarginDecorator = (Story: React.FC) => {
  return (
    <div style={{ margin: '1em' }}>
      <Story />
    </div>
  );
};
