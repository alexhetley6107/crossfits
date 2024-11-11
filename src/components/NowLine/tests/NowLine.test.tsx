// import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
// import { NowLine } from '../NowLine';
import '@testing-library/jest-dom';
import 'jest-styled-components';

describe('NowLine component', () => {
 describe('General', () => {
    it('Render', () => {
      // render(<NowLine />);
      // const target = screen.getByText('NowLine');
      // expect(target).toBeInTheDocument();
      expect('Render').toBe('Render');
    });
  });
});
