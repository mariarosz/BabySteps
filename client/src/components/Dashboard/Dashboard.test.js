import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

import fetch, { Response } from 'node-fetch';

import Dashboard from './Dashboard';
import { Navbar } from '../Navbar/Navbar';

import '@testing-library/jest-dom';

jest.mock('node-fetch');
jest.mock('firebase/auth');

const currentUserMock = {
  uid: '21332312',
  name: 'username',
};

jest.mock('firebase/auth', () => {
  const authInstance = {
    currentUser: currentUserMock,
  };
  return {
    getAuth: jest.fn(() => 'test123'),
  };
});

// getAuth.mockReturnValue('test123');

describe('Dashboard Component', () => {
  test.only('it should render the Dashboard component', () => {
    render(<Dashboard />);

    // const navbar = screen.getByRole('heading', { name: /log in/i });

    // expect(navbar).toBeInTheDocument;
  });
});
