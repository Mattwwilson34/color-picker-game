import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders correct heading', () => {
    const { getAllByRole } = render(<App />);
    expect(getAllByRole('heading')[0].textContent).toMatch(
      /Color Picker Game/i
    );
  });
});
