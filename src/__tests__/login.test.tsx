import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from '../app/login';

jest.mock('../services/apiService', () => ({ signIn: jest.fn(() => Promise.resolve()) }));
jest.mock('next/navigation', () => ({ useRouter: () => ({ push: jest.fn() }) }));

describe('LoginPage', () => {
  test('renders and submits login form', async () => {
    render(<LoginPage />);
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    await waitFor(() => expect(screen.queryByText(/logging in/i)).not.toBeInTheDocument());
  });
}); 