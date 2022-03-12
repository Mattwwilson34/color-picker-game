import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button component', () => {
  it('renders correctly with correct Label', () => {
    render(<Button label='RESET' />);
    expect(screen.getByRole('button').textContent).toMatch('RESET');
  });

  it('Calls reset function after button click', () => {
    const reset = jest.fn(() => '');
    render(<Button label='RESET' onClick={reset} />);
    const button = screen.getByRole('button', { name: 'RESET' });

    userEvent.click(button);

    expect(reset).toHaveBeenCalled();
  });
});
