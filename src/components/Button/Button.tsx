import { theme } from '@/themes';
import React from 'react';
import styled from 'styled-components';

type ButtonSize = 'sm' | 'lg';
type ButtonVariant = 'filled' | 'outlined';

export type ButtonProps = {
  text: string;
  disabled?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  onClick?: () => void;
};

const sizeMap: Record<string, Record<ButtonSize, string>> = {
  padding: {
    sm: '5px 12px',
    lg: '10px 24px',
  },
  font: {
    sm: '14px',
    lg: '18px',
  },
};
const variantMap: Record<string, Record<ButtonVariant, string>> = {
  color: {
    filled: theme.colors.white,
    outlined: theme.colors.primary,
  },
  background: {
    filled: theme.colors.primary,
    outlined: theme.colors.white,
  },
};

const StyledButton = styled.button<{
  $size: ButtonSize;
  $variant: ButtonVariant;
  $fullWidth?: boolean;
  disabled?: boolean;
}>`
  border-radius: ${theme.radius.R5};
  cursor: pointer;
  transition: all 0.1s;
  &:hover:not([disabled]) {
    transform: translateY(-1px);
  }
  &:active:not([disabled]) {
    transform: translateY(1px);
  }
  border: 1px solid ${theme.colors.primary};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  padding: ${({ $size }) => sizeMap.padding[$size]};
  font-size: ${({ $size }) => sizeMap.font[$size]};
  color: ${({ $variant }) => variantMap.color[$variant]};
  background-color: ${({ $variant }) => variantMap.background[$variant]};
`;

export const Button: React.FC<ButtonProps> = ({
  text,
  disabled,
  onClick,
  size = 'sm',
  variant = 'filled',
  fullWidth = false,
}) => {
  return (
    <StyledButton
      data-testid="button"
      $size={size}
      $variant={variant}
      $fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};
