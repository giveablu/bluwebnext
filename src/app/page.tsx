// Homepage last updated: forced redeploy
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--blu-lightest)] to-[var(--blu-lighter)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
                Change a life{" "}
                <span className="text-[var(--blu-primary)]">directly</span>
              </h1>
              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                Blu connects donors directly with people in need through peer-to-peer donations. 
                No intermediaries, maximum impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/login" 
                  className="bg-[var(--blu-primary)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[var(--blu-secondary)] transition-colors text-center"
                >
                  Download App
                </Link>
                <Link 
                  href="/why-blu" 
                  className="border-2 border-[var(--blu-primary)] text-[var(--blu-primary)] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[var(--blu-lightest)] transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
              <p className="text-sm text-[var(--text-muted)] mt-4">
                Change a life directly
              </p>
            </div>
            
            {/* Right Content - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[var(--blu-lightest)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[var(--blu-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Direct Impact</h3>
                    <p className="text-[var(--text-secondary)]">Your donation goes directly to those who need it most</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Blu Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Why Blu Works</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Our platform is designed for maximum transparency and impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--blu-lightest)] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[var(--blu-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Peer-to-Peer</h3>
              <p className="text-[var(--text-secondary)]">Direct connection between donors and recipients</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--blu-warm)] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[var(--blu-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">High Impact</h3>
              <p className="text-[var(--text-secondary)]">Maximum impact with minimal overhead</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--blu-light)] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[var(--blu-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Blockchain</h3>
              <p className="text-[var(--text-secondary)]">Secure and transparent transactions</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--blu-lighter)] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[var(--blu-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Global</h3>
              <p className="text-[var(--text-secondary)]">Reach people worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--blu-primary)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to make a difference?
          </h2>
          <p className="text-xl text-[var(--blu-light)] mb-8">
            Join thousands of donors making direct impact
          </p>
          <Link 
            href="/login" 
            className="bg-white text-[var(--blu-primary)] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[var(--blu-lightest)] transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
