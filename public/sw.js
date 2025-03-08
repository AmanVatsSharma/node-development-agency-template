// Service Worker for Enterprise Hero website
// This improves performance through caching and provides offline capabilities

const CACHE_NAME = 'enterprise-hero-cache-v1';

// Assets to cache on install
const PRECACHE_ASSETS = [
  '/',
  '/favicon.ico',
  '/logo.png',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml',
  // Add other essential assets here
];

// Install event - precache essential resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const currentCaches = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
    }).then((cachesToDelete) => {
      return Promise.all(cachesToDelete.map((cacheToDelete) => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return;
  
  // Skip API endpoints to ensure fresh data
  if (event.request.url.includes('/api/')) return;
  
  // Cache strategy: Stale-While-Revalidate
  // This serves cached content first (if available) for fast loading,
  // then updates the cache with the latest version from network in background
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((response) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          // Don't cache error responses
          if (networkResponse.ok) {
            // Clone the response as it can only be consumed once
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch((error) => {
          console.error('Fetch failed:', error);
          // If fetch fails, we still return the cached response if we have one
          return response;
        });
        
        // Return cached response immediately or wait for network
        return response || fetchPromise;
      });
    })
  );
}); 