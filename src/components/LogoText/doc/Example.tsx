import { FC } from 'react';
import { LogoText, LogoTextProps } from '../LogoText';

export const Example: FC<LogoTextProps> = (props) => {
   return (
    <div>
      <LogoText {...props}/>
    </div>
  );
};