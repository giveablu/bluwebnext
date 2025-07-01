// Homepage last updated: forced redeploy
export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1>Welcome to Blu!</h1>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/donate">Donate</a>
        <a href="/donations">Donation History</a>
      </nav>
    </div>
  );
}
