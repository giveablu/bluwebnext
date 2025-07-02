'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Better Lives United</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering communities through technology and compassion. 
              Join us in making a difference in people's lives.
            </p>
            <div className="ct-social-box flex space-x-4">
              <a 
                href="https://twitter.com/betterlivesunited" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#e74c3c] transition-colors duration-200"
              >
                <svg 
                  className="ct-icon" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/betterlivesunited" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#e74c3c] transition-colors duration-200"
              >
                <svg 
                  className="ct-icon" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/betterlivesunited" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#e74c3c] transition-colors duration-200"
              >
                <svg 
                  className="ct-icon" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.927-.175-1.297-.49-.37-.315-.49-.807-.49-1.297 0-.49.12-.982.49-1.297.37-.315.807-.49 1.297-.49s.927.175 1.297.49c.37.315.49.807.49 1.297 0 .49-.12.982-.49 1.297-.37.315-.807.49-1.297.49z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#e74c3c] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-[#e74c3c] transition-colors duration-200">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/donations" className="text-gray-300 hover:text-[#e74c3c] transition-colors duration-200">
                  Donations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#e74c3c] transition-colors duration-200">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="ct-contact-info space-y-2">
              <div className="icon-inline text-gray-300">
                <svg 
                  className="ct-icon" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>123 Main St, City, State</span>
              </div>
              <div className="icon-inline text-gray-300">
                <svg 
                  className="ct-icon" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@betterlivesunited.com</span>
              </div>
              <div className="icon-inline text-gray-300">
                <svg 
                  className="ct-icon" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Better Lives United. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-300 hover:text-[#e74c3c] text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-[#e74c3c] text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 