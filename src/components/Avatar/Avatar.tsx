import React from 'react';
import styled from 'styled-components';

export type AvatarProps = {
  className?: string;
}

const AvatarWrapper= styled.div``;

export const Avatar:React.FC<AvatarProps> = ({...props}) => {
  return <AvatarWrapper {...props}>Avatar</AvatarWrapper>;
};


