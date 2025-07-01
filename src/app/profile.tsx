import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import apiService from '../services/apiService';
import { User } from '../types';

export default function ProfilePage() {
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState<{ name: string; email: string }>({ name: '', email: '' });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await apiService.getProfile();
        setProfile(data.data || data);
        setForm({
          name: data.data?.name || '',
          email: data.data?.email || '',
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      await apiService.updateProfile(form);
      setProfile(profile ? { ...profile, ...form } : { ...form } as User);
      setSuccess(true);
      setEdit(false);
      setTimeout(() => setSuccess(false), 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8">
      <Image src="/images/logo-small.png" alt="Blu Logo Small" width={60} height={60} />
      <h2 className="text-2xl font-bold mb-4 mt-2">Profile</h2>
      {loading && <div>Loading profile...</div>}
      {error && <div className="text-red-600 mb-2">{error}</div>}
      {success && <div className="text-green-600 mb-2">Profile updated!</div>}
      {!loading && profile && !edit && (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <div className="mb-4">
            <div className="font-semibold">Name:</div>
            <div>{profile.name}</div>
          </div>
          <div className="mb-4">
            <div className="font-semibold">Email:</div>
            <div>{profile.email}</div>
          </div>
          <button
            onClick={() => setEdit(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit Profile
          </button>
        </div>
      )}
      {!loading && profile && edit && (
        <form onSubmit={handleUpdate} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setEdit(false)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
} 