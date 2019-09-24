if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js', { scope: '/' })
      .then(reg => {
        const data = {
          type: 'CACHE_URLS',
          payload: [
            location.href,
            ...performance.getEntriesByType('resource').map(r => r.name)
          ]
        };
        reg.active.postMessage(data);
      })
      .catch(err => console.log(`Error: ${err}`));
  })
}