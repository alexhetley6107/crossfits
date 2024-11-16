import { theme } from '@/themes';
import React from 'react';
import styled from 'styled-components';

export type AvatarProps = {
  className?: string;
  text?: string;
};

const AvatarWrapper = styled.div`
  height: 32px;
  width: 32px;
  border-radius: ${theme.radius.RFull};
  border: 1px solid ${theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Text = styled.span`
  color: ${theme.colors.black};
`;

export const Avatar: React.FC<AvatarProps> = ({ text = 'U', ...props }) => {
  return (
    <AvatarWrapper data-testid="Avatar" {...props}>
      <Text>{text}</Text>
    </AvatarWrapper>
  );
};
