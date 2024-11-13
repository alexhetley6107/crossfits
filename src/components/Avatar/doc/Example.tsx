import { FC } from 'react';
import { Avatar, AvatarProps } from '../Avatar';

export const Example: FC<AvatarProps> = (props) => {
   return (
    <div>
      <Avatar {...props}/>
    </div>
  );
};