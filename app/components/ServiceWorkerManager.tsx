'use client';

import { useEffect, useState } from 'react';
import { registerServiceWorker, updateServiceWorker } from '../utils/serviceWorker';

/**
 * ServiceWorkerManager component
 * 
 * This component handles service worker registration and update notifications.
 * It should be included near the root of your application for proper functionality.
 */
export default function ServiceWorkerManager() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  
  useEffect(() => {
    // Register service worker when component mounts
    const initServiceWorker = async () => {
      await registerServiceWorker();
    };
    
    initServiceWorker();
    
    // Listen for service worker update events
    const handleUpdateAvailable = () => {
      setUpdateAvailable(true);
    };
    
    window.addEventListener('serviceWorkerUpdateAvailable', handleUpdateAvailable);
    
    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('serviceWorkerUpdateAvailable', handleUpdateAvailable);
    };
  }, []);
  
  // Handle update installation
  const handleUpdate = async () => {
    await updateServiceWorker();
    setUpdateAvailable(false);
  };
  
  // If no update is available, component doesn't render anything visible
  if (!updateAvailable) {
    return null;
  }
  
  // Render update notification when an update is available
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
          <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
            Update Available
          </h3>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            A new version of the application is available. Update now for the latest features and improvements.
          </div>
          <div className="mt-4 flex">
            <button
              type="button"
              onClick={handleUpdate}
              className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Update Now
            </button>
            <button
              type="button"
              onClick={() => setUpdateAvailable(false)}
              className="ml-3 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 