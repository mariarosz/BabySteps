import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const babyName = 'Tim';

describe('Navbar Component', () => {
  test('it should render the Navbar component', () => {
    render(<Navbar babyName={babyName} />, { wrapper: BrowserRouter });

    const header = screen.getByRole('heading', { name: /Tim's Steps/i });

    expect(header).toBeInTheDocument;
  });
  test('logout button should navigate to login route', async () => {
    render(<Navbar babyName={babyName} />, { wrapper: BrowserRouter });

    const button = screen.getByRole('button', { name: /log/i });
    userEvent.click(button);

    await waitFor(() => expect(screen.getByText(/log/i)).toBeInTheDocument());
  });
});
