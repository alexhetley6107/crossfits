import { FC } from 'react';
import { Input, InputProps } from '../Input';

export const Example: FC<InputProps> = (props) => {
  return (
    <div style={{ width: '300px' }}>
      <Input {...props} />
    </div>
  );
};
