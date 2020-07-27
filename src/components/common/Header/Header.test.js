import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders the tile of the header', () => {
  const { getByText, container } = render(
    <Header headerTitle='The Online Pokedex' />
  );

  expect(getByText('The Online Pokedex')).toBeTruthy();
  expect(container).toBeTruthy();
});
