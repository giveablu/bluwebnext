import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import apiService from '../services/apiService';
import SwipeCard from '../components/SwipeCard';
import { Recipient } from '../types';

export default function DonatePage() {
  const [recipients, setRecipients] = useState<Recipient[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [donating, setDonating] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(false);

  useEffect(() => {
    const fetchRecipients = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await apiService.getRecipients();
        setRecipients(data.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchRecipients();
  }, []);

  const handleDonate = async () => {
    if (!recipients[current]) return;
    setDonating(true);
    setError('');
    try {
      await apiService.createDonation(recipients[current].id, 20);
      setDonationSuccess(true);
      setTimeout(() => setDonationSuccess(false), 2000);
      setCurrent((prev) => prev + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setDonating(false);
    }
  };

  const handlePass = () => {
    setCurrent((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8">
      <Image src="/images/donate.png" alt="Donate" width={80} height={80} />
      <h2 className="text-2xl font-bold mb-4 mt-2">Donate</h2>
      {loading && <div>Loading recipients...</div>}
      {error && <div className="text-red-600 mb-2">{error}</div>}
      {donationSuccess && <div className="text-green-600 mb-2">Donation successful!</div>}
      {!loading && recipients.length > 0 && recipients[current] && (
        <div className="w-full max-w-md">
          <SwipeCard
            recipient={recipients[current]}
            onSwipeLeft={handlePass}
            onSwipeRight={handleDonate}
            isExiting={false}
          />
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePass}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              disabled={donating}
            >
              Pass
            </button>
            <button
              onClick={handleDonate}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              disabled={donating}
            >
              {donating ? 'Donating...' : 'Donate $20'}
            </button>
          </div>
        </div>
      )}
      {!loading && recipients.length > 0 && !recipients[current] && (
        <div className="mt-8 text-lg text-gray-600">No more recipients to show.</div>
      )}
    </div>
  );
} 