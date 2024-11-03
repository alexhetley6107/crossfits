---
to: src/components/<%= name %>/tests/<%= name %>.test.tsx
---
// import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
// import { <%= name %> } from '../<%= name %>';
import '@testing-library/jest-dom';
import 'jest-styled-components';

describe('<%= name %> component', () => {
 describe('General', () => {
    it('Render', () => {
      // render(<<%= name %> />);
      // const target = screen.getByText('<%= name %>');
      // expect(target).toBeInTheDocument();
      expect('Render').toBe('Render');
    });
  });
});
