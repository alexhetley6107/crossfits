import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LogoText } from '../LogoText';
import '@testing-library/jest-dom';
import 'jest-styled-components';

describe('LogoText component', () => {
  describe('General', () => {
    it('Render', () => {
      render(<LogoText />);
      const el = screen.getByTestId('LogoText');
      expect(el).toBeInTheDocument();
    });
  });
});
