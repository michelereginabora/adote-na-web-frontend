// Evento de instalação (sem cache)
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
});

// Evento de ativação (sem cache)
self.addEventListener('activate', (event) => {
  console.log('Service Worker ativado.');
});

// Evento de fetch sem cache (busca diretamente do servidor)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
///