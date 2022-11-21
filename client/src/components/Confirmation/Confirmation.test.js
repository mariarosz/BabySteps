import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Confirmation } from './Confirmation';

import '@testing-library/jest-dom';

const babyName = 'Filip';

describe('Confirmation Component', () => {
  test('it should render the Confirmation component', () => {
    render(<Confirmation babyName={babyName} />);

    const h3 = screen.getByRole('heading', { name: /Filip,/i });

    expect(h3).toBeInTheDocument;
  });
});
