"use client";

import { useEffect } from 'react';

export default function SchedulePage() {
  useEffect(() => {
    // Optional: prefetch Calendly or other widget
  }, []);

  return (
    <div className="w-full">
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Schedule a Call</h1>
          <p className="text-gray-300">Pick a time that works for you. We'll connect you with a senior architect.</p>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 md:p-6">
            <div className="aspect-[4/3] w-full">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://calendly.com/your-calendly/30min"
                title="Schedule a Call"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

