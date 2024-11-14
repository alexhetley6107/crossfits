import { Focus } from '@/shared';
import { theme } from '@/themes';
import React from 'react';
import styled from 'styled-components';

export type InputProps = {
  className?: string;
  title?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputWrapper = styled.div``;

const StyledTitle = styled.span`
  display: block;
  margin-bottom: 6px;
  font-size: 18px;
  font-weight: 600;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid ${theme.colors.grey};
  border-radius: ${theme.radius.R5};
  padding: 8px 12px;
  font-size: 18px;

  &:focus ~ .focus {
    opacity: 1;
  }
`;

export const Input: React.FC<InputProps> = ({ className, title, ...props }) => {
  return (
    <InputWrapper data-testid="Input" className={className}>
      {title && <StyledTitle>{title}</StyledTitle>}
      <Focus>
        <StyledInput {...props} />
      </Focus>
    </InputWrapper>
  );
};
