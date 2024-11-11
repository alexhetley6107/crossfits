import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from '../Button';
import '@testing-library/jest-dom';
import 'jest-styled-components';

describe('Button component', () => {
  describe('General', () => {
    it('Render', () => {
      render(<Button text="Button" />);
      const button = screen.getByTestId('button');
      expect(button).toBeInTheDocument();
    });
  });
});
