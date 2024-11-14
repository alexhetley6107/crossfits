import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Avatar } from '../Avatar';
import '@testing-library/jest-dom';
import 'jest-styled-components';

describe('Avatar component', () => {
  describe('General', () => {
    it('Render', () => {
      render(<Avatar />);
      const target = screen.getByTestId('Avatar');
      expect(target).toBeInTheDocument();
    });
  });
  describe('Props', () => {
    it('Text', () => {
      render(<Avatar text="AB" />);
      const target = screen.getByTestId('Avatar');
      const text = screen.getByText('AB');
      expect(text).toBeInTheDocument();
      expect(target).toMatchSnapshot();
    });
  });
});
