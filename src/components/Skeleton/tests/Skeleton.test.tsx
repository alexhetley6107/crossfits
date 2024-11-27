import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Skeleton } from '../Skeleton';
import '@testing-library/jest-dom';
import 'jest-styled-components';

describe('Skeleton component', () => {
  describe('General', () => {
    it('Render', () => {
      render(<Skeleton width={30} height={30} />);
      const el = screen.getByTestId('skeleton');
      expect(el).toBeInTheDocument();
    });
  });
});
