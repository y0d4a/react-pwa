const cacheName = 'v1';
const cacheAssets = [
    'css/*',
    'images/*',
    'js/*',
    'index.html'
];

self.addEventListener('install', e => {
    console.log('Installed');
    e.waitUntil(self.skipWaiting());
});
self.addEventListener('message', e => {
    if (e.data.type === 'CACHE_URLS') {
        e.waitUntil(
            caches
                .open(cacheName)
                .then(cache => {
                    console.log('Caching Files');
                    return cache.addAll(e.data.payload);
                })
        )
    }
})

self.addEventListener('activate', e => console.log('Activated'));

self.addEventListener('fetch', e => {
    console.log('Fetching');
    e.respondWith(
        fetch(e.request)
            .then(res => {
                const resClone = res.clone();
                // Open cache
                caches
                    .open(cacheName)
                    .then(cache => cache.put(e.request, resClone));
                return res;
            }).catch((err) => caches.match(e.request).then(res => res))
    );
})