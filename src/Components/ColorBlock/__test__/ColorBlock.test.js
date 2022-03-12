import React from 'react';
import { render } from '@testing-library/react';
import ColorBlock from '../ColorBlock';

describe('ColorBlock component', () => {
  it('renders empty div with ColorBlock class', () => {
    const { container } = render(<ColorBlock />);
    expect(container.firstChild.classList[0]).toBe('ColorBlock');
    expect(container.firstChild.textContent).toBe('');
  });
});
