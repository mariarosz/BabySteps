import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Step } from './Step';

const step = {
  title: 'TITLE',
  notes: 'NOTES',
};

import '@testing-library/jest-dom';

describe('Signup Component', () => {
  test('it should render the Signup component', () => {
    render(<Step step={step} />, { wrapper: BrowserRouter });

    const header = screen.getByRole('heading', { name: /TITLE/i });

    expect(header).toBeInTheDocument;
  });
});
