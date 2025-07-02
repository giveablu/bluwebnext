'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-[var(--blu-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-[var(--blu-primary)]">blu</span>
              <span className="text-sm text-[var(--text-secondary)]">Better Lives United</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[var(--text-primary)] hover:text-[var(--blu-primary)] px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/why-blu" className="text-[var(--text-primary)] hover:text-[var(--blu-primary)] px-3 py-2 text-sm font-medium transition-colors">
              Why Blu
            </Link>
            <Link href="/roadmap" className="text-[var(--text-primary)] hover:text-[var(--blu-primary)] px-3 py-2 text-sm font-medium transition-colors">
              Roadmap
            </Link>
            <Link href="/login" className="bg-[var(--blu-primary)] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[var(--blu-secondary)] transition-colors">
              Download App
            </Link>
            <a 
              href="https://x.com/betterlivesunited" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--text-primary)] hover:text-[var(--blu-primary)] focus:outline-none focus:text-[var(--blu-primary)] transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-[var(--blu-light)]">
              <Link 
                href="/" 
                className="text-[var(--text-primary)] hover:text-[var(--blu-primary)] block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/why-blu" 
                className="text-[var(--text-primary)] hover:text-[var(--blu-primary)] block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Blu
              </Link>
              <Link 
                href="/roadmap" 
                className="text-[var(--text-primary)] hover:text-[var(--blu-primary)] block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Roadmap
              </Link>
              <Link 
                href="/login" 
                className="bg-[var(--blu-primary)] text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[var(--blu-secondary)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Download App
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 