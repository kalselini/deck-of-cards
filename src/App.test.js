import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

afterEach(cleanup);

// TODO: Write tests to cover lines 61,62,75,82,89

describe('App', () => {
  test('should render correctly', () => {
    const { container } = render(<App />);
    expect(container.firstChild.classList.contains('container')).toBe(true);
  });
});
