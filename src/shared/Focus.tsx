import { theme } from '@/themes';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

type FocusProps = {
  inset?: number;
};

const StyledFocus = styled.div<{ $inset: number }>`
  opacity: 0;
  z-index: -1;
  position: absolute;
  border-radius: ${theme.radius.R7};
  transition: opacity 0.1s ease-in-out;
  inset: ${({ $inset }) => `-${$inset}`}px;
  border: 3px solid ${theme.colors.primary};
`;

const StyledBox = styled.div`
  position: relative;
`;

export const Focus: FC<PropsWithChildren<FocusProps>> = ({ children, inset = 2 }) => (
  <StyledBox>
    {children}
    <StyledFocus $inset={inset} className="focus" />
  </StyledBox>
);
