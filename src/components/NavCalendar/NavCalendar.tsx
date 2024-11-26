import { FC, useState } from 'react';
import { Flex, IconButton } from '@/shared';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { theme } from '@/themes';

export type NavCalendarProps = {
  className?: string;
};

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const NavCalendarWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: ${theme.radius.R12};
  padding: 12px;
  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.08), 0 1px 12px 0 rgba(0, 0, 0, 0.08);
  color: ${theme.colors.black};
`;

const Calendar = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(7, min-content);
  grid-template-rows: repeat(6, min-content);
  margin-top: 12px;
`;

const WeekDay = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
`;

const StyledDay = styled.div<{ $today: boolean; $chosen: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  border-radius: ${theme.radius.R8};
  border: 2px solid ${theme.colors.white};
  cursor: pointer;
  border-color: ${({ $today }) => ($today ? theme.colors.primary : theme.colors.white)};
  background-color: ${({ $chosen }) => ($chosen ? theme.colors.primary : 'transparent')};
  color: ${({ $today }) => ($today ? theme.colors.primary : 'inherit')};
  color: ${({ $chosen }) => ($chosen ? theme.colors.white : 'inherit')};
`;

const getOffsetDays = (year: number, month: number) => {
  const value = new Date(year, month, 1).getDay() - 1;
  return value < 0 ? 6 : value;
};

export const NavCalendar: FC<NavCalendarProps> = ({ ...props }) => {
  const currentDate = new Date(Date.now());
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();

  const [chosenDate, setChosenDate] = useState(currentDate);
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const offsetDays = getOffsetDays(year, month);

  const days = [...Array(daysInMonth)].map((_, index) => {
    const day = index + 1;

    const today = day === currentDay && month === currentMonth && year === currentYear;
    const chosen =
      day === chosenDate.getDate() &&
      month === chosenDate.getMonth() &&
      year === chosenDate.getFullYear();

    return { day, today, chosen, tasks: 0 };
  });

  const isTodayDisabled =
    currentDay === chosenDate.getDate() && month === currentMonth && year === currentYear;

  const handleMonthChange = (dir: number) => {
    if (dir < 0 && month === 1) {
      setMonth(11);
      setYear(year - 1);
    } else if (dir > 0 && month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + dir);
    }
  };

  const handleDayClick = (day: number) => {
    setChosenDate(new Date(year, month, day));
  };

  const handleTodayClick = () => {
    setChosenDate(currentDate);
    setMonth(currentMonth);
    setYear(currentYear);
  };

  return (
    <NavCalendarWrapper data-testid="NavCalendar" {...props}>
      <Flex styles={{ justifyContent: 'space-between' }}>
        <Flex>
          <IconButton onClick={() => handleMonthChange(-1)}>
            <Icon name="ChevronLeft" size={20} />
          </IconButton>

          <span>{`${months[month]} ${year}`}</span>
          <IconButton onClick={() => handleMonthChange(1)}>
            <Icon name="ChevronRight" size={20} />
          </IconButton>
        </Flex>

        <Button
          disabled={isTodayDisabled}
          text={'Today'}
          variant="outlined"
          onClick={handleTodayClick}
        />
      </Flex>

      <Calendar>
        {weekDays.map((day) => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
        {[...Array(offsetDays)].map((_, index) => (
          <div key={index}></div>
        ))}
        {days.map(({ day, chosen, today }, index) => (
          <StyledDay
            key={index}
            $chosen={chosen}
            $today={today}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </StyledDay>
        ))}
      </Calendar>
    </NavCalendarWrapper>
  );
};
