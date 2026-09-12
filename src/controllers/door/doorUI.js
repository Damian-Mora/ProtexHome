// src/controllers/door/doorUI.js

// Actualizar indicador online/offline en el header
export function updateDoorUI(status) {
  const badge = document.getElementById('device-status-badge');
  if (!badge) return;

  const dot = badge.querySelector('.status-dot');
  const text = badge.querySelector('span:last-child');

  if (status === 'online') {
    dot.className = 'status-dot online';
    text.textContent = 'En línea';
  } else {
    dot.className = 'status-dot offline';
    text.textContent = 'Sin conexión';
  }
}

// Actualizar botón, icono, texto y badge de una puerta
export function updateDoorButtonUI(doorNumber, state) {
  const btn = document.getElementById('btn-door' + doorNumber);
  const icon = document.getElementById('door' + doorNumber + '-icon');
  const text = document.getElementById('door' + doorNumber + '-text');
  const badge = document.getElementById('door' + doorNumber + '-status-badge');

  if (!btn || !icon || !text) return;

  if (state === 1) {
    btn.style.background = 'var(--bg-light)';
    btn.style.color = 'var(--text-primary)';
    btn.style.borderColor = 'var(--border-color)';
    icon.textContent = 'lock_open';
    text.textContent = 'Abrir Puerta';
    if (badge) {
      badge.textContent = 'Cerrada';
      badge.style.background = 'var(--success-bg)';
      badge.style.color = 'var(--success)';
    }
  } else {
    btn.style.background = '#fef2f2';
    btn.style.color = '#991b1b';
    btn.style.borderColor = '#fecaca';
    icon.textContent = 'lock';
    text.textContent = 'Cerrar Puerta';
    if (badge) {
      badge.textContent = 'Abierta';
      badge.style.background = '#fef2f2';
      badge.style.color = '#991b1b';
    }
  }
}