import React from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  error?: boolean;
};

const ButtonWrapper = styled.div``;

export const Button: React.FC<ButtonProps> = () => {
  return <ButtonWrapper>Button</ButtonWrapper>;
};
