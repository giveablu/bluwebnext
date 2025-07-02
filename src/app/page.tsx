// Homepage last updated: forced redeploy
import Link from 'next/link';
import SwipeCard from '../components/SwipeCard';
import '../app/globals.css';

const mockUsers = [
  {
    name: 'Maria',
    requested_help: 'Single mother affected by hurricane',
    image: '/images/v_1.jpg',
  },
  {
    name: 'Adeel',
    requested_help: 'Lost home due to war in Gaza',
    image: '/images/v_2.jpeg',
  },
  {
    name: 'Sophia',
    requested_help: 'Disabled and struggling with bills',
    image: '/images/v_3.png',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blu 💙</h1>
        <nav className="space-x-4">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
          <Link href="/donate">Donate</Link>
          <Link href="/donations">Donation History</Link>
        </nav>
      </header>

      <main className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Swipe to Give</h2>
        <div className="w-full max-w-md">
          {mockUsers.map((user, index) => (
            <SwipeCard
              key={index}
              recipient={user}
              onSwipeLeft={() => {}}
              onSwipeRight={() => {}}
              isExiting={false}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
