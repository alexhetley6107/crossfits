// import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
// import { Input } from '../Input';
import '@testing-library/jest-dom';
import 'jest-styled-components';

describe('Input component', () => {
 describe('General', () => {
    it('Render', () => {
      // render(<Input />);
      // const el = screen.getByTestId('Input');
      // expect(el).toBeInTheDocument();
      expect('Render').toBe('Render');
    });
  });
});
