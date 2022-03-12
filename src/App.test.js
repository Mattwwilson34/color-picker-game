import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  it('renders correct heading', () => {
    render(<App />);
    expect(screen.getAllByRole('heading')[0].textContent).toMatch(
      /RGB GUESSING GAME/i
    );
  });

  it('Renders a reset button and on click resets game', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: 'RESET' });
    const winColor = screen.getAllByRole('heading')[1].textContent;

    userEvent.click(button);

    expect(button.textContent).toBe('RESET');
    expect(button).toBeInTheDocument();
    expect(screen.getAllByRole('heading')[1].textContent).not.toBe(winColor);
  });
});

it('Color Block opacity set to zero on click', () => {
  render(<App />);

  const colorBlock = screen.getAllByText('')[4];
  userEvent.click(colorBlock);
  expect(colorBlock.style['_values'].opacity).toBe('0');
});
