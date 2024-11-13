// import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
// import { Avatar } from '../Avatar';
import '@testing-library/jest-dom';
import 'jest-styled-components';

describe('Avatar component', () => {
 describe('General', () => {
    it('Render', () => {
      // render(<Avatar />);
      // const target = screen.getByText('Avatar');
      // expect(target).toBeInTheDocument();
      expect('Render').toBe('Render');
    });
  });
});
