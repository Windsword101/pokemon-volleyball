// 最小 Service Worker：讓瀏覽器把這個網頁視為可安裝的 App（加入主畫面後可全螢幕開啟）。不做任何快取。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
