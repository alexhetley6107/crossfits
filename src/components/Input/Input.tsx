import { Focus, IconButton } from '@/shared';
import { theme } from '@/themes';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { IconsUnion } from '@/types';

type InputType = 'text' | 'password';

export type InputProps = {
  className?: string;
  title?: string;
  placeholder?: string;
  name?: string;
  icon?: IconsUnion;
  type?: InputType;
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

const StyledInput = styled.input<{ $icon: boolean }>`
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid ${theme.colors.grey};
  border-radius: ${theme.radius.R6};
  padding: 8px 12px;
  padding-left: ${({ $icon }) => ($icon ? '36px' : '12px')};
  font-size: 18px;
  &:focus ~ .focus {
    opacity: 1;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 9px;
  background-color: ${theme.colors.white};
`;

export const Input: React.FC<InputProps> = ({
  className,
  title,
  type = 'text',
  icon,
  ...props
}) => {
  const [openPassword, setOpenPassword] = useState(false);

  const inputType = type === 'password' && !openPassword ? 'password' : 'text';

  return (
    <InputWrapper data-testid="Input" className={className}>
      {title && <StyledTitle>{title}</StyledTitle>}
      <Focus>
        <IconWrapper style={{ left: '10px' }}>
          {icon && <Icon name={icon} size="20" color={theme.colors.grey} />}
        </IconWrapper>

        <StyledInput type={inputType} $icon={Boolean(icon)} {...props} />

        {type === 'password' && (
          <IconWrapper style={{ right: '8px' }} onClick={() => setOpenPassword(!openPassword)}>
            <IconButton>
              <Icon name={openPassword ? 'Eye' : 'EyeOff'} size="20" color={theme.colors.grey} />
            </IconButton>
          </IconWrapper>
        )}
      </Focus>
    </InputWrapper>
  );
};
