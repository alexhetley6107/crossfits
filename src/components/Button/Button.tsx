import { Focus } from '@/shared';
import { theme } from '@/themes/theme';
import React from 'react';
import styled from 'styled-components';

type ButtonSize = 'sm' | 'lg';
type ButtonVariant = 'filled' | 'outlined';

export type ButtonProps = {
  className?: string;
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
  outline: none;
  border-radius: ${theme.radius.R6};
  cursor: pointer;
  transition: all 0.1s;
  border: 1px solid ${theme.colors.primary};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  padding: ${({ $size }) => sizeMap.padding[$size]};
  font-size: ${({ $size }) => sizeMap.font[$size]};
  color: ${({ $variant }) => variantMap.color[$variant]};
  background-color: ${({ $variant }) => variantMap.background[$variant]};
  &:focus ~ .focus {
    opacity: 1;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  text,
  disabled,
  onClick,
  size = 'sm',
  variant = 'filled',
  fullWidth = false,
  className,
  ...props
}) => {
  return (
    <div className={className}>
      <Focus inset={4}>
        <StyledButton
          data-testid="button"
          $size={size}
          $variant={variant}
          $fullWidth={fullWidth}
          onClick={onClick}
          disabled={disabled}
          {...props}
        >
          {text}
        </StyledButton>
      </Focus>
    </div>
  );
};
