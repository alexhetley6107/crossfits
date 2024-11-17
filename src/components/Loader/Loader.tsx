import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';

export type LoaderProps = {
  className?: string;
  size?: number;
  color?: string;
};

const LoaderWrapper = styled.div`
  & svg {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader: React.FC<LoaderProps> = ({ size = 20, color, className }) => {
  return (
    <LoaderWrapper data-testid="Loader" className={className} style={{ height: size + 'px' }}>
      <Icon name="Load" size={size} color={color} />
    </LoaderWrapper>
  );
};
