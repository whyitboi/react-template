import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './src/App';

// describe('something truthy and falsey', () => {
//   it('true to be tru', () => {
//     expect(true).toBe(true);
//   });
//   it('false to be false', () => {
//     expect(false).toBe(false);
//   });
// });

describe('App component', () => {
  it('renders correct heading', () => {
    render(<App />);
    expect(screen.getByRole('heading').textContent).toMatch(/our first query/i);
  });
});
