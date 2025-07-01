import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DonationsPage from '../app/donations';
jest.mock('../services/apiService', () => ({
  getDonations: jest.fn(() => Promise.resolve({ data: [{ recipient_name: 'Test Recipient', amount: 20, date: '2025-07-01', status: 'Completed' }] })),
}));
describe('DonationsPage', () => {
  test('renders donation history', async () => {
    render(<DonationsPage />);
    await waitFor(() => expect(screen.queryByText(/loading donations/i)).not.toBeInTheDocument());
    const recipient = await screen.findByText(/test recipient/i);
    expect(recipient).toBeInTheDocument();
    const status = await screen.findByText(/completed/i);
    expect(status).toBeInTheDocument();
  });
}); 