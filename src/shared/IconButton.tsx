import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { theme } from '@/themes';

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0 2px;
  border-radius: ${theme.radius.RFull};
  outline: none;
`;

export const IconButton: FC<PropsWithChildren> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
