import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Loader } from '../Loader';
import '@testing-library/jest-dom';
import 'jest-styled-components';

describe('Loader component', () => {
  describe('General', () => {
    it('Render', () => {
      render(<Loader />);
      const el = screen.getByTestId('Loader');
      expect(el).toBeInTheDocument();
    });
  });
  describe('Props', () => {
    it('Color', () => {
      render(<Loader color="red" />);
      const el = screen.getByTestId('Loader');
      expect(el).toMatchSnapshot();
    });
    it('Size', () => {
      render(<Loader size={30} />);
      const el = screen.getByTestId('Loader');
      expect(el).toMatchSnapshot();
    });
  });
});
