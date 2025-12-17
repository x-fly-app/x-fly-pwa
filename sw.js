self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  clients.claim();
});

// Минимальный SW — только для регистрации
self.addEventListener('fetch', () => {});
