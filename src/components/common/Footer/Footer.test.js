import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders the footer correctly', () => {
  const { container } = render(<Footer />);

  expect(container).toBeTruthy();
});
