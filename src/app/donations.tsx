import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import apiService from '../services/apiService';
import { Donation } from '../types';

export default function DonationsPage() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDonations = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await apiService.getDonations();
        setDonations(data.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchDonations();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8">
      <Image src="/images/heart-color.png" alt="Donations" width={60} height={60} />
      <h2 className="text-2xl font-bold mb-4 mt-2">Donation History</h2>
      {loading && <div>Loading donations...</div>}
      {error && <div className="text-red-600 mb-2">{error}</div>}
      {!loading && donations.length === 0 && (
        <div className="text-gray-600 mt-8">No donations found.</div>
      )}
      {!loading && donations.length > 0 && (
        <div className="w-full max-w-md mt-4 space-y-4">
          {donations.map((donation, idx) => (
            <div key={donation.id || `${donation.recipient_name || (donation.recipient?.name || 'N/A')}-${donation.amount}-${donation.date || donation.created_at || idx}`}
              className="bg-white p-4 rounded shadow flex flex-col">
              <div className="font-semibold">Recipient: {donation.recipient_name || donation.recipient?.name || 'N/A'}</div>
              <div>Amount: ${donation.amount}</div>
              <div>Date: {donation.date || donation.created_at || 'N/A'}</div>
              <div>Status: Completed</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 