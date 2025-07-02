'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#1a1a1a]">Better Lives United</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#1a1a1a] hover:text-[#e74c3c] transition-colors duration-200">
              Home
            </Link>
            <Link href="/donate" className="text-[#1a1a1a] hover:text-[#e74c3c] transition-colors duration-200">
              Donate
            </Link>
            <Link href="/donations" className="text-[#1a1a1a] hover:text-[#e74c3c] transition-colors duration-200">
              Donations
            </Link>
            <Link href="/about" className="text-[#1a1a1a] hover:text-[#e74c3c] transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="text-[#1a1a1a] hover:text-[#e74c3c] transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/donate"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#e74c3c] hover:bg-[#c0392b] transition-colors duration-200"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                style={{ width: '15px', height: '15px' }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#1a1a1a] hover:text-[#e74c3c] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e74c3c] transition-colors duration-200"
              style={{ width: '40px', height: '40px' }}
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                style={{ width: '15px', height: '15px' }}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link 
                href="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-[#1a1a1a] hover:text-[#e74c3c] hover:bg-gray-50 transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/donate" 
                className="block px-3 py-2 rounded-md text-base font-medium text-[#1a1a1a] hover:text-[#e74c3c] hover:bg-gray-50 transition-colors duration-200"
              >
                Donate
              </Link>
              <Link 
                href="/donations" 
                className="block px-3 py-2 rounded-md text-base font-medium text-[#1a1a1a] hover:text-[#e74c3c] hover:bg-gray-50 transition-colors duration-200"
              >
                Donations
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 rounded-md text-base font-medium text-[#1a1a1a] hover:text-[#e74c3c] hover:bg-gray-50 transition-colors duration-200"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 rounded-md text-base font-medium text-[#1a1a1a] hover:text-[#e74c3c] hover:bg-gray-50 transition-colors duration-200"
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link 
                  href="/donate"
                  className="inline-flex items-center w-full justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#e74c3c] hover:bg-[#c0392b] transition-colors duration-200"
                >
                  <svg 
                    className="w-4 h-4 mr-2" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    style={{ width: '15px', height: '15px' }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 