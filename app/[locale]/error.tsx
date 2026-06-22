'use client'

import { Link } from '@/i18n/navigation';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function LocaleError({ error, reset }: ErrorPageProps) {
  const params = useParams();
  const locale = params.locale as string;

  useEffect(() => {
    console.error('Captured Locale Segment Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm max-w-md w-full">
        {/* Warning Icon Graphic */}
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
          <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
        </div>

        {/* Messaging Text */}
        <h2 className="text-2xl font-extrabold text-gray-950 tracking-tight mb-2">
          Something went wrong!
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          An unexpected application runtime execution error occurred. Please attempt to reload the view context state.
        </p>

        {/* Unique Error Hash Tracker (Useful for debugging logs) */}
        {error.digest && (
          <div className="bg-gray-50 border border-gray-100 rounded-lg p-2 mb-6 font-mono text-[11px] text-gray-500 break-all">
            Error ID: {error.digest}
          </div>
        )}

        {/* Operational CTA Action Grid */}
        <div className="flex flex-col gap-2.5">
          <button
            onClick={() => reset()}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm"
          >
            Try Again
          </button>


          <Link
            key='homepage'
            href="/"
            locale={locale}
            className="w-full py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl text-sm transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
