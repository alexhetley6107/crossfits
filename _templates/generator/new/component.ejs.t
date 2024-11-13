---
to: src/components/<%= name %>/<%= name %>.tsx
---
import React from 'react';
import styled from 'styled-components';

export type <%= name %>Props = {
  className?: string;
}

const <%= name %>Wrapper= styled.div``;

export const <%= name %>:React.FC<<%= name %>Props> = ({...props}) => {
  return <<%= name %>Wrapper {...props}><%= name %></<%= name %>Wrapper>;
};


