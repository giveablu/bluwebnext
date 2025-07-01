// Homepage last updated: forced redeploy
export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#111' }}>
      <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', color: 'white', marginBottom: '2.5rem', letterSpacing: '0.02em' }}>
        Welcome to Blu!
      </h1>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <a href="/login" style={{ color: 'white', fontSize: '1.3rem', textDecoration: 'none', textAlign: 'center' }}>Login</a>
        <a href="/register" style={{ color: 'white', fontSize: '1.3rem', textDecoration: 'none', textAlign: 'center' }}>Register</a>
        <a href="/donate" style={{ color: 'white', fontSize: '1.3rem', textDecoration: 'none', textAlign: 'center' }}>Donate</a>
        <a href="/donations" style={{ color: 'white', fontSize: '1.3rem', textDecoration: 'none', textAlign: 'center' }}>Donation History</a>
      </nav>
    </div>
  );
}
