import React, { HTMLAttributes } from 'react';
import { IconsUnion } from '@/types';

export type IconProps = HTMLAttributes<SVGElement> & {
  className?: string;
  name: IconsUnion;
  color?: string;
  size?: string;
};

export const Icon: React.FC<IconProps> = ({ name, size, ...props }) => {
  return (
    <svg data-testid="Icon" width={size || '20'} height={size || '20'} fill="none" {...props}>
      <use href={`/sprite.svg#${name}`}></use>
    </svg>
  );
};
