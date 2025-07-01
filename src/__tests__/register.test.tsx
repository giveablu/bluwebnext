import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RegisterPage from '../app/register';
jest.mock('../services/apiService', () => ({ register: jest.fn(() => Promise.resolve()) }));
jest.mock('next/navigation', () => ({ useRouter: () => ({ push: jest.fn() }) }));
describe('RegisterPage', () => {
  test('renders and submits registration form', async () => {
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText(/name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /register/i }));
    await waitFor(() => expect(screen.queryByText(/registering/i)).not.toBeInTheDocument());
  });
}); 