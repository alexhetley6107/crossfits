import { FC } from 'react';
import { NavCalendar, NavCalendarProps } from '../NavCalendar';

export const Example: FC<NavCalendarProps> = (props) => {
   return (
    <div>
      <NavCalendar {...props}/>
    </div>
  );
};