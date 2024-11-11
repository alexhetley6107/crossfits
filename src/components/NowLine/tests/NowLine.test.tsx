import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { NowLine } from '../NowLine';
import '@testing-library/jest-dom';
import 'jest-styled-components';

describe('NowLine component', () => {
  describe('General', () => {
    it('Render', () => {
      render(<NowLine text="Now" />);
      const target = screen.getByTestId('NowLine');
      expect(target).toBeInTheDocument();
    });
  });
  describe('Props', () => {
    it('Text', () => {
      render(<NowLine text="Now" />);
      const text = screen.getByText('Now');
      expect(text).toBeInTheDocument();
    });
    it('Top', () => {
      render(<NowLine text="Now" top={35} />);
      const target = screen.getByTestId('NowLine');
      expect(target).toMatchSnapshot();
    });
  });
});
