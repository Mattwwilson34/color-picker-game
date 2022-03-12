import React from 'react';
import { render, screen } from '@testing-library/react';
import RgbDisplay from '../RgbDisplay';

describe('RgbDisplay component', () => {
  it('renders correctly', () => {
    render(<RgbDisplay RGB='RGB(255,255,255)' />);
    expect(screen.getAllByRole('heading')[0].textContent).toMatch(
      'RGB(255,255,255)'
    );
  });
});
