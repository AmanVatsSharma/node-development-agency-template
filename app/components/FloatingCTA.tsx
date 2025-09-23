"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsVisible(y > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed z-50 right-4 bottom-6 md:right-6 md:bottom-8">
      <div className="flex items-center gap-3 bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800 px-4 py-3 rounded-full">
        <Link href="/pages/enterprise" className="hidden md:inline text-sm text-gray-700 dark:text-gray-200 font-medium">
          Enterprise Solutions
        </Link>
        <Link href="/pages/schedule" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold">
          Schedule a Call
        </Link>
      </div>
    </div>
  );
}

