import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App component', () => {
  it('renders correct heading', () => {
    render(<App />);
    expect(screen.getAllByRole('heading')[0].textContent).toMatch(
      /RGB GUESSING GAME/i
    );
  });

  it('Renders a reset button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'RESET' });
    expect(button).toBeInTheDocument();
  });
});
