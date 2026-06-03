import React from 'react';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        
        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 md:order-2">
          <Link key="about" href="/about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link key="privacy" href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Privacy Policy
          </Link>
          <Link key="contact" href="/contact" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </div>

        {/* Copyright Information */}
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} Next Commerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
