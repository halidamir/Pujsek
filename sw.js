const CACHE = 'pujsek-v5';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Pass everything through - no caching at all
self.addEventListener('fetch', e => {
  // Just fetch normally, no interception
  return;
});
