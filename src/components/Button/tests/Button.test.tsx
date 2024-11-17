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
  describe('Props', () => {
    it('text', () => {
      render(<Button text="Button" />);
      const text = screen.getByText('Button');
      expect(text).toBeInTheDocument();
    });
    describe('Size', () => {
      it('Small', () => {
        render(<Button text="Button" size="sm" />);
        const button = screen.getByTestId('button');
        expect(button).toMatchSnapshot();
      });
      it('Large', () => {
        render(<Button text="Button" size="lg" />);
        const button = screen.getByTestId('button');
        expect(button).toMatchSnapshot();
      });
    });
    describe('Variant', () => {
      it('Filled', () => {
        render(<Button text="Button" variant="filled" />);
        const button = screen.getByTestId('button');
        expect(button).toMatchSnapshot();
      });
      it('Outlined', () => {
        render(<Button text="Button" variant="outlined" />);
        const button = screen.getByTestId('button');
        expect(button).toMatchSnapshot();
      });
    });
    it('Full Width', () => {
      render(<Button text="Button" fullWidth />);
      const button = screen.getByTestId('button');
      expect(button).toMatchSnapshot();
    });
    it('Disabled', () => {
      render(<Button text="Button" disabled />);
      const button = screen.getByTestId('button');
      expect(button).toMatchSnapshot();
    });
    describe('Loading', () => {
      it('Filled', () => {
        render(<Button text="Button" variant="filled" loading />);
        const button = screen.getByTestId('button');
        expect(button).toMatchSnapshot();
      });
      it('Outlined', () => {
        render(<Button text="Button" variant="outlined" loading />);
        const button = screen.getByTestId('button');
        expect(button).toMatchSnapshot();
      });
    });
  });
});
