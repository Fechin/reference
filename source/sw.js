// CheatSheets.zip Service Worker
const STATIC_CACHE = 'cheatsheets-static-v1';
const DYNAMIC_CACHE = 'cheatsheets-dynamic-v1';

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/css/style.css',
  '/js/main.js',
  '/js/fuse_7.1.0.js',
  '/manifest.json',
  '/search.json'
];

// Page patterns to cache
const CACHE_PATTERNS = [
  /^\/$/, // Home page
  /^\/[a-z-]+\.html$/, // Cheat sheet pages
  /^\/assets\//, // Static assets
  /^\/css\//, // CSS files
  /^\/js\//, // JavaScript files
  /^\/images\// // Image files
];

// Service Worker installevent
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');

  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Cache failed', error);
      })
  );
});

// Service Worker activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Delete old cache versions
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Network request interception
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Check if matches cache pattern
  const shouldCache = CACHE_PATTERNS.some((pattern) => pattern.test(url.pathname));

  if (shouldCache) {
    event.respondWith(handleCacheRequest(request));
  }
});

// Cache request handling strategy
async function handleCacheRequest(request) {
  const url = new URL(request.url);

  try {
    // 1. Try to get from cache
    const cachedResponse = await caches.match(request);

    // 2. If it's a static asset and cached, return directly
    if (cachedResponse && isStaticAsset(url.pathname)) {
      return cachedResponse;
    }

    // 3. Try network request
    const networkResponse = await fetch(request);

    // 4. If network request succeeds, update cache
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }

    // 5. Network failed, return cache (if available)
    if (cachedResponse) {
      return cachedResponse;
    }

    // 6. Nothing available, return offline page
    return createOfflineResponse(url.pathname);
  } catch (error) {
    console.error('Service Worker: Fetch failed', error);

    // Network error, try to return cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Return offline page
    return createOfflineResponse(url.pathname);
  }
}

// Check if it's a static asset
function isStaticAsset(pathname) {
  return /\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/.test(pathname);
}

// Create offline response
function createOfflineResponse(pathname) {
  const isHtmlPage = pathname.endsWith('.html') || pathname === '/';

  if (isHtmlPage) {
    return new Response(
      `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Offline - CheatSheets.zip</title>
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            margin: 0; 
            background: #f8f9fa;
            color: #333;
          }
          .offline-container {
            text-align: center;
            max-width: 400px;
            padding: 2rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .offline-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
          }
          .offline-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #10b981;
          }
          .offline-message {
            margin-bottom: 1.5rem;
            line-height: 1.6;
          }
          .retry-button {
            background: #10b981;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
          }
          .retry-button:hover {
            background: #059669;
          }
        </style>
      </head>
      <body>
        <div class="offline-container">
          <div class="offline-icon">📚</div>
          <h1 class="offline-title">You're Offline</h1>
          <p class="offline-message">
            This page isn't available offline yet. Please check your internet connection and try again.
          </p>
          <button class="retry-button" onclick="window.location.reload()">
            Try Again
          </button>
        </div>
      </body>
      </html>
    `,
      {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache'
        }
      }
    );
  }

  return new Response('Offline', {
    status: 503,
    statusText: 'Service Unavailable'
  });
}

// Background sync (if supported)
if ('sync' in self.registration) {
  self.addEventListener('sync', (event) => {
    if (event.tag === 'background-sync') {
      event.waitUntil(doBackgroundSync());
    }
  });
}

async function doBackgroundSync() {
  try {
    // Sync search data
    const response = await fetch('/search.json');
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put('/search.json', response);
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Push notifications (if needed)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/assets/icons/icon-192x192.png',
      badge: '/assets/icons/icon-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey
      },
      actions: [
        {
          action: 'explore',
          title: 'View Cheat Sheet',
          icon: '/assets/icons/icon-96x96.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/assets/icons/icon-96x96.png'
        }
      ]
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(clients.openWindow('/'));
  }
});
