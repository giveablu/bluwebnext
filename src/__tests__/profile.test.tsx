import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProfilePage from '../app/profile';
jest.mock('../services/apiService', () => ({
  getProfile: jest.fn(() => Promise.resolve({ data: { name: 'Test User', email: 'test@example.com' } })),
  updateProfile: jest.fn(() => Promise.resolve()),
}));
describe('ProfilePage', () => {
  test('renders and updates profile', async () => {
    render(<ProfilePage />);
    await waitFor(() => expect(screen.queryByText(/loading profile/i)).not.toBeInTheDocument());
    const editButton = await screen.findByRole('button', { name: /edit profile/i });
    fireEvent.click(editButton);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Updated User' } });
    fireEvent.click(screen.getByRole('button', { name: /save/i }));
    await waitFor(() => screen.getByText(/profile updated/i));
  });
}); 