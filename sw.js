// Listener untuk menangani notifikasi masuk
self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {
    title: 'Growth³⁰ Update',
    body: 'Ada pesan baru untukmu, Sengg! 🌿'
  };

  const options = {
    body: data.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/1043/1043440.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/1043/1043440.png',
    vibrate: [100, 50, 100],
    data: { url: 'index.html' }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Listener saat notifikasi diklik
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
