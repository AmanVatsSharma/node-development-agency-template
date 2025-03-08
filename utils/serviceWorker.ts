/**
 * Service Worker Registration Utility
 * 
 * This file provides functions to register, update, and manage service workers
 * for improved caching and offline capabilities.
 */

// Check if service workers are supported
export const isServiceWorkerSupported = () => {
  return 'serviceWorker' in navigator;
};

// Register the service worker
export const registerServiceWorker = async () => {
  if (!isServiceWorkerSupported()) {
    console.log('Service workers are not supported in this browser');
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
    });

    if (registration.installing) {
      console.log('Service worker installing');
    } else if (registration.waiting) {
      console.log('Service worker installed but waiting');
    } else if (registration.active) {
      console.log('Service worker active');
    }

    // Handle updates when detected
    registration.addEventListener('updatefound', () => {
      // An updated service worker has appeared in registration.installing
      const newWorker = registration.installing;
      newWorker?.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          // New service worker available, but old service worker still controlling the page
          // Notify the user about update availability
          const updateEvent = new CustomEvent('serviceWorkerUpdateAvailable');
          window.dispatchEvent(updateEvent);
        }
      });
    });

    // Check for updates every hour
    setInterval(() => {
      registration.update();
    }, 60 * 60 * 1000);

    return true;
  } catch (error) {
    console.error('Service worker registration failed:', error);
    return false;
  }
};

// Unregister service worker (useful for development or troubleshooting)
export const unregisterServiceWorker = async () => {
  if (!isServiceWorkerSupported()) return false;

  try {
    const registration = await navigator.serviceWorker.getRegistration();
    if (registration) {
      const result = await registration.unregister();
      return result;
    }
    return false;
  } catch (error) {
    console.error('Service worker unregistration failed:', error);
    return false;
  }
};

// Update service worker immediately (when user accepts the update)
export const updateServiceWorker = async () => {
  if (!isServiceWorkerSupported()) return false;

  try {
    const registration = await navigator.serviceWorker.getRegistration();
    if (registration && registration.waiting) {
      // Trigger the 'skipWaiting' method in the waiting service worker
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      
      // Reload the page to let the new service worker take control
      window.location.reload();
      return true;
    }
    return false;
  } catch (error) {
    console.error('Service worker update failed:', error);
    return false;
  }
}; 