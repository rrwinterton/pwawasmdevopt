//simple service worker

//precache version information
const PRECACHE = 'precache-v1';
//runtime version information
const RUNTIME = 'runtime-v1';

//resources
const PRECACHE_URLS = [
  "/pwawasmdevopt/maininit.js",
  "/pwawasmdevopt/main.js",
  "/pwawasmdevopt/main.html",
  "/pwawasmdevopt/main.wasm",
  "/pwawasmdevopt/pwa-192.png",
  "/pwawasmdevopt/pwa-512.png",
];

//add pwa install handler and precache urls
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

//runtime active handler
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

//fetch handler
self.addEventListener('fetch', event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
