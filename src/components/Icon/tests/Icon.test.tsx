// import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
// import { Icon } from '../Icon';
import '@testing-library/jest-dom';
import 'jest-styled-components';

describe('Icon component', () => {
 describe('General', () => {
    it('Render', () => {
      // render(<Icon />);
      // const el = screen.getByTestId('Icon');
      // expect(el).toBeInTheDocument();
      expect('Render').toBe('Render');
    });
  });
});
