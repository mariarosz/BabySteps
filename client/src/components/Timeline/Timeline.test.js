import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Timeline from './Timeline';
import { Confirmation } from '../Confirmation/Confirmation';
import { Budle } from '../Budle/Budle';

const steps = [];
const setCreated = jest.fn(true);

import '@testing-library/jest-dom';

describe('Timeline Component', () => {
  test('it should render the Timeline component', () => {
    render(<Timeline setCreated={setCreated} />, steps);

    expect(header).toBeInTheDocument;
  });
});

// FAILS
