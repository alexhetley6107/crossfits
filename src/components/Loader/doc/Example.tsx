import { FC } from 'react';
import { Loader, LoaderProps } from '../Loader';

export const Example: FC<LoaderProps> = (props) => {
   return (
    <div>
      <Loader {...props}/>
    </div>
  );
};