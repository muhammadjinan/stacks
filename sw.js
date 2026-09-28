// Bump this string every time you redeploy updated files. It clears out
// caches from older versions so nobody is stuck on an old copy.
var CACHE_NAME = 'stacks-cache-v2';

var ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-32.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(function(k){ return k !== CACHE_NAME; })
            .map(function(k){ return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

// Network-first: when online, always get the latest files (and refresh the
// offline copy). The cache is only used when the network isn't available.
// Note: this only handles the app's own files. Your saved books and profile
// live in the browser's local storage, which this file never touches.
self.addEventListener('fetch', function(event){
  var req = event.request;
  if(req.method !== 'GET') return;
  if(new URL(req.url).origin !== self.location.origin) return; // fonts etc. load normally

  event.respondWith(
    fetch(req, { cache: 'no-cache' }).then(function(response){
      if(response && response.status === 200 && response.type === 'basic'){
        var copy = response.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(req, copy); });
      }
      return response;
    }).catch(function(){
      return caches.match(req, { ignoreSearch: true }).then(function(hit){
        return hit || caches.match('./index.html');
      });
    })
  );
});
