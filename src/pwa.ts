import { registerSW } from 'virtual:pwa-register'

registerSW({
  onNeedRefresh() {
    // Lógica para notificar o usuário sobre atualização disponível
  },
  onOfflineReady() {
    // Lógica para notificar o usuário que o app está pronto para uso offline
  },
})