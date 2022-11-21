import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { AddBaby } from './AddBaby';

import '@testing-library/jest-dom';

describe('AddBaby Component', () => {
  test('it should render the AddBaby component', () => {
    render(<AddBaby />, { wrapper: BrowserRouter });

    const navbar = screen.getByRole('heading', { name: /little one/i });

    expect(navbar).toBeInTheDocument;
  });
});
