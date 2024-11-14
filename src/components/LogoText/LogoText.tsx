import { theme } from '@/themes';
import React from 'react';
import styled from 'styled-components';

export type LogoTextProps = {
  className?: string;
};

const LogoTextWrapper = styled.div`
  margin: 0;
  padding: 0;
  font-size: 32px;
  font-weight: 600;
  font-style: italic;
  color: ${theme.colors.black};
  span {
    color: ${theme.colors.orange};
  }
`;

export const LogoText: React.FC<LogoTextProps> = ({ ...props }) => {
  return (
    <LogoTextWrapper data-testid="LogoText" {...props}>
      Remin<span>Dee</span>
    </LogoTextWrapper>
  );
};
