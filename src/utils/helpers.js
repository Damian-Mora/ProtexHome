// src/utils/helpers.js

// Verificar conexión a internet
export function isOnline() {
  return navigator.onLine;
}

// Mostrar toast en cualquier página
export function showToast(message, type = 'error') {
  const old = document.getElementById('global-toast');
  if (old) old.remove();

  const toast = document.createElement('div');
  toast.id = 'global-toast';
  toast.style.cssText = `
    position:fixed;bottom:30px;left:20px;right:20px;
    background:${type==='error'?'#fef2f2':'#f0fdf4'};
    color:${type==='error'?'#991b1b':'#166534'};
    padding:14px 18px;border-radius:12px;font-size:0.9rem;
    font-weight:500;text-align:center;z-index:9999;
    box-shadow:0 10px 30px rgba(0,0,0,0.15);
    animation:toastIn 0.3s ease;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.animation = 'toastOut 0.3s ease'; setTimeout(() => toast.remove(), 300); }, 3000);
}

// Verificar conexión antes de ejecutar una acción
export function requireConnection(action) {
  if (!navigator.onLine) {
    showToast('⚠️ Sin conexión a internet');
    return false;
  }
  action();
  return true;
}