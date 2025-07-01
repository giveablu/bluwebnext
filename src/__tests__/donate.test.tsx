import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DonatePage from '../app/donate';
jest.mock('../services/apiService', () => ({
  getRecipients: jest.fn(() => Promise.resolve({ data: [{ id: 1, name: 'Test Recipient', requested_help: 'Help needed', image: '/images/receiver-home.png' }] })),
  createDonation: jest.fn(() => Promise.resolve()),
}));
describe('DonatePage', () => {
  test('renders recipients and donates', async () => {
    render(<DonatePage />);
    const recipient = await screen.findByText(/test recipient/i);
    expect(recipient).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /donate/i }));
    await waitFor(() => screen.getByText(/donation successful/i));
  });
}); 