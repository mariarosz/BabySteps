import { render, screen } from '@testing-library/react';
import { CreateStep } from './CreateStep';
import UploadWidget from './../UploadWidget/UploadWidget';

import '@testing-library/jest-dom';

describe('CreateStep Component', () => {
  test('it should render the CreateStep component', () => {
    render(<CreateStep />, <UploadWidget />);

    const h2 = screen.getByRole('heading', { name: /what/i });

    expect(h2).toBeInTheDocument;
  });
});
