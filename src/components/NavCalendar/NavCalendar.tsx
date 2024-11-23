import React from 'react';
import styled from 'styled-components';

export type NavCalendarProps = {
  className?: string;
}

const NavCalendarWrapper= styled.div``;

export const NavCalendar:React.FC<NavCalendarProps> = ({...props}) => {
  return <NavCalendarWrapper data-testid="NavCalendar" {...props}>NavCalendar</NavCalendarWrapper>;
};


