import { FC } from 'react';
import { Button, ButtonProps } from '../Button';

export const Example: FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
