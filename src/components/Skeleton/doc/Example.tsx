import { FC } from 'react';
import { Skeleton, SkeletonProps } from '../Skeleton';

export const Example: FC<SkeletonProps> = (props) => {
   return (
    <div>
      <Skeleton {...props}/>
    </div>
  );
};