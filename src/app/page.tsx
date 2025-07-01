// Homepage last updated: forced redeploy
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Image src="/images/logo.png" alt="Blu Logo" width={120} height={40} />
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm mt-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Blu!</h1>
        <nav className="flex flex-col gap-6 w-full">
          <a href="/login" className="text-blue-600 text-lg font-medium text-center hover:underline">Login</a>
          <a href="/register" className="text-blue-600 text-lg font-medium text-center hover:underline">Register</a>
          <a href="/donate" className="text-blue-600 text-lg font-medium text-center hover:underline">Donate</a>
          <a href="/donations" className="text-blue-600 text-lg font-medium text-center hover:underline">Donation History</a>
        </nav>
      </div>
    </div>
  );
}
