'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[var(--blu-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-[var(--blu-primary)]">blu</span>
              <span className="text-sm text-[var(--blu-light)]">Better Lives United</span>
            </div>
            <p className="text-[var(--blu-light)] mb-4 max-w-md">
              Empowering direct peer-to-peer donations to change lives globally. 
              Transparent, secure, and impactful giving through blockchain technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/betterlivesunited" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-white transition-colors p-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[var(--blu-light)] hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/why-blu" className="text-[var(--blu-light)] hover:text-white transition-colors">
                  Why Blu
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-[var(--blu-light)] hover:text-white transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-[var(--blu-light)] hover:text-white transition-colors">
                  Download App
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-[var(--blu-light)] hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[var(--blu-light)] hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[var(--blu-light)] hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[var(--blu-light)] hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--blu-accent)] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--text-muted)] text-sm">
              © 2024 Better Lives United. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-[var(--text-muted)] hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-[var(--text-muted)] hover:text-white text-sm transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-[var(--text-muted)] hover:text-white text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 