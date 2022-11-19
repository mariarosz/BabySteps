import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import SignUp from './Signup';

import '@testing-library/jest-dom';

describe('Signup Component', () => {
  test('it should render the Signup component', () => {
    render(<SignUp />, { wrapper: BrowserRouter });

    const header = screen.getByRole('heading', { name: /BabySteps/i });

    expect(header).toBeInTheDocument;
  });
});
