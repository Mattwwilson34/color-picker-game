import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button component', () => {
  it('renders correctly with correct Label', () => {
    render(<Button label='RESET' />);
    expect(screen.getByRole('button').textContent).toMatch('RESET');
  });
});
