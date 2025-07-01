// Homepage last updated: forced redeploy
import Image from 'next/image';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to Blu 💙</h1>
      <p className="text-lg text-gray-300 max-w-xl">
        Peer-to-peer micro-donations that change lives.
      </p>
      <div className="mt-8 space-x-4">
        <a href="/login" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Login</a>
        <a href="/register" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">Register</a>
      </div>
    </section>
  );
}
