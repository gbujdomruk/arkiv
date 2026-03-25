// Service Worker — Ma CDthèque
// Change this version number to force all clients to update
const CACHE_VERSION = 'cdtheque-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Installation : mise en cache des ressources
self.addEventListener('install', event => {
  self.skipWaiting(); // Active immédiatement le nouveau SW
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(ASSETS))
  );
});

// Activation : supprime les anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    ).then(() => self.clients.claim()) // Prend le contrôle immédiatement
  );
});

// Fetch : réseau d'abord, cache en fallback (network-first)
// Cela garantit que la dernière version est toujours chargée si en ligne
self.addEventListener('fetch', event => {
  // Ne gère que les requêtes GET vers notre propre domaine
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  // Laisse passer les appels API externes (Discogs, MusicBrainz...)
  if (!url.pathname.match(/\.(html|js|css|png|json|svg)$/) && !url.pathname.endsWith('/')) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Met à jour le cache avec la nouvelle version
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request)) // Hors ligne : utilise le cache
  );
});
