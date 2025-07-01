import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from '../app/login';
import RegisterPage from '../app/register';
import DonatePage from '../app/donate';
import ProfilePage from '../app/profile';
import DonationsPage from '../app/donations';

jest.mock('../services/apiService', () => ({
  signIn: jest.fn(() => Promise.resolve()),
  register: jest.fn(() => Promise.resolve()),
  getRecipients: jest.fn(() => Promise.resolve({ data: [{ id: 1, name: 'Test Recipient', requested_help: 'Help needed', image: '/images/receiver-home.png' }] })),
  createDonation: jest.fn(() => Promise.resolve()),
  getProfile: jest.fn(() => Promise.resolve({ data: { name: 'Test User', email: 'test@example.com' } })),
  updateProfile: jest.fn(() => Promise.resolve()),
  getDonations: jest.fn(() => Promise.resolve({ data: [{ recipient_name: 'Test Recipient', amount: 20, date: '2025-07-01', status: 'Completed' }] })),
}));

jest.mock('next/navigation', () => ({ useRouter: () => ({ push: jest.fn() }) }));

describe('Blu Charity App Flows', () => {
  test('renders login page and submits form', async () => {
    render(<LoginPage />);
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    await waitFor(() => expect(screen.queryByText(/logging in/i)).not.toBeInTheDocument());
  });

  test('renders registration page and submits form', async () => {
    render(<RegisterPage />);
    fireEvent.change(screen.getByPlaceholderText(/name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /register/i }));
    await waitFor(() => expect(screen.queryByText(/registering/i)).not.toBeInTheDocument());
  });

  test('renders donation/swipe page and donates', async () => {
    render(<DonatePage />);
    await waitFor(() => expect(screen.queryByText(/loading recipients/i)).not.toBeInTheDocument());
    const recipient = await screen.findByText(/test recipient/i);
    expect(recipient).toBeInTheDocument();
    const donateButton = await screen.findByRole('button', { name: /donate/i });
    fireEvent.click(donateButton);
    await waitFor(() => screen.getByText(/donation successful/i));
  });

  test('renders profile page and updates profile', async () => {
    render(<ProfilePage />);
    await waitFor(() => expect(screen.queryByText(/loading profile/i)).not.toBeInTheDocument());
    const editButton = await screen.findByRole('button', { name: /edit profile/i });
    fireEvent.click(editButton);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Updated User' } });
    fireEvent.click(screen.getByRole('button', { name: /save/i }));
    await waitFor(() => screen.getByText(/profile updated/i));
  });

  test('renders donation history page', async () => {
    render(<DonationsPage />);
    await waitFor(() => expect(screen.queryByText(/loading donations/i)).not.toBeInTheDocument());
    const recipient = await screen.findByText(/test recipient/i);
    expect(recipient).toBeInTheDocument();
    const status = await screen.findByText(/completed/i);
    expect(status).toBeInTheDocument();
  });
}); 