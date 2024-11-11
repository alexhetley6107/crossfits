import { FC } from 'react';
import { NowLine, NowLineProps } from '../NowLine';

export const Example: FC<NowLineProps> = (props) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '400px',
      }}
    >
      <NowLine {...props} />
    </div>
  );
};
