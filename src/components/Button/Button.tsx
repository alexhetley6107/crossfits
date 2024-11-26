import React from 'react';
import { theme } from '@/themes/theme';
import { ButtonVariant, SizeUnion } from '@/types';
import styled from 'styled-components';
import { Loader } from '../Loader';

export type ButtonProps = {
  className?: string;
  text: string;
  disabled?: boolean;
  size?: SizeUnion;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

const sizeMap: Record<string, Record<SizeUnion, string>> = {
  padding: {
    sm: '5px 12px',
    lg: '10px 24px',
  },
  height: {
    sm: '28px',
    lg: '40px',
  },
  font: {
    sm: '14px',
    lg: '18px',
  },
  loader: {
    sm: '20',
    lg: '24',
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
  loader: {
    filled: theme.colors.white,
    outlined: theme.colors.primary,
  },
};

const StyledButton = styled.button<{
  $size: SizeUnion;
  $variant: ButtonVariant;
  $fullWidth?: boolean;
  disabled?: boolean;
}>`
  position: relative;
  outline: none;
  border-radius: ${theme.radius.R6};
  cursor: pointer;
  transition: all 0.1s;
  border: 1px solid ${theme.colors.primary};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  padding: ${({ $size }) => sizeMap.padding[$size]};
  height: ${({ $size }) => sizeMap.height[$size]};
  font-size: ${({ $size }) => sizeMap.font[$size]};
  color: ${({ $variant }) => variantMap.color[$variant]};
  background-color: ${({ $variant }) => variantMap.background[$variant]};
  &:focus ~ .focus {
    opacity: 1;
  }
`;

const LoaderWrapper = styled.div`
  position: absolute;
  inset: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border-radius: ${theme.radius.R6};
`;

export const Button: React.FC<ButtonProps> = ({
  text,
  disabled,
  onClick,
  size = 'sm',
  variant = 'filled',
  fullWidth = false,
  className,
  loading,
  ...props
}) => {
  return (
    <div className={className}>
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

        {loading && (
          <LoaderWrapper>
            <Loader size={+sizeMap.loader[size]} color={variantMap.loader[variant]} />
          </LoaderWrapper>
        )}
      </StyledButton>
    </div>
  );
};
