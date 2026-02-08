self.addEventListener('install', function(event) {
  console.log('Service Worker Installed');
  event.waitUntil(
    caches.open('static-v1').then(function(cache) {
      return cache.addAll([
        './',
        './index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
