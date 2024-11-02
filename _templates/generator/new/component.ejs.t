---
to: src/components/<%= name %>/<%= name %>.tsx
---
import React from 'react';
import styled from 'styled-components';

export type <%= name %>Props = {
  error?: boolean;
}

const <%= name %>Wrapper= styled.div``;

export const <%= name %>:React.FC<<%= name %>Props> = () => {
  return <<%= name %>Wrapper><%= name %></<%= name %>Wrapper>;
};


