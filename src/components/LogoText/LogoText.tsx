import { theme } from '@/themes';
import React from 'react';
import styled from 'styled-components';

type SizeUnion = 'sm' | 'lg';

export type LogoTextProps = {
  className?: string;
  size?: SizeUnion;
};

const sizeMap: Record<SizeUnion, string> = {
  sm: '24px',
  lg: '32px',
};

const LogoTextWrapper = styled.div<{ $size: SizeUnion }>`
  margin: 0;
  padding: 0;
  font-size: ${({ $size }) => sizeMap[$size]};
  font-weight: 600;
  font-style: italic;
  color: ${theme.colors.black};
  span {
    color: ${theme.colors.orange};
  }
`;

export const LogoText: React.FC<LogoTextProps> = ({ size = 'sm', ...props }) => {
  return (
    <LogoTextWrapper data-testid="LogoText" $size={size} {...props}>
      Remin<span>Dee</span>
    </LogoTextWrapper>
  );
};
