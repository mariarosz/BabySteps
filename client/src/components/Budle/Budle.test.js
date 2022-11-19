import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Budle } from './Budle';

import '@testing-library/jest-dom';

const budle = {
  index: 1,
  key: 1,
  age: 1,
  steps: [1, 2],
};

describe('Budle Component', () => {
  test('it should render the Budle component', () => {
    render(<Budle budle={budle} />);

    const navbar = screen.getByRole('heading', { name: /1/i });

    expect(navbar).toBeInTheDocument;
  });
});
