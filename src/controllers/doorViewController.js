// src/controllers/doorViewController.js
import doorHTML from '../pages/door.html?raw';
import { DeviceController } from './deviceController.js';
import { HistoryController } from './historyController.js';
import { getDatabase, ref, update, remove, get } from 'firebase/database';
import { showToast } from '../utils/helpers.js';
import dashboardHTML from '../pages/dashboard.html?raw';
import { updateDoorUI, updateDoorButtonUI } from './door/doorUI.js';
import { applyDoorPermissions } from './door/doorPermissions.js';
import { setupDoorActions } from './door/doorActions.js';
import { unsubscribeFromSerial } from '../services/notifications.js';

export async function openDoorView(user, serial, onBack) {
  const mainContent = document.getElementById('main-content');

  // Loading
  mainContent.innerHTML = `
    <div class="loading-screen-dash">
      <div class="spinner"></div>
      <p>Cargando dispositivo...</p>
    </div>
  `;

  const controller = new DeviceController(user, serial);
  const device = await controller.loadDeviceData();

  if (!device) {
    alert('Dispositivo no encontrado');
    return;
  }

  mainContent.innerHTML = doorHTML;

  // Permisos
  const userRole = await controller.getUserRole();
  const { canManage } = applyDoorPermissions(controller, userRole);

  // Llenar datos
  document.getElementById('device-name').textContent = device.name;
  document.getElementById('info-serial').textContent = device.serial;
  document.getElementById('edit-device-name').value = device.name;
  document.getElementById('info-role').textContent = userRole;

  // Estado y ping
  updateDoorUI(device.status);
  controller.pingDevice();

  // Historial en tiempo real
  const canDelete = userRole === 'PRO' || userRole === 'ADM';
  const historyController = new HistoryController(serial);
  historyController.listenNewEvents((events) => {
    historyController.renderHistory(events, 'history-list', canDelete);
  });

  // Nombres de puertas
  const doorNames = await controller.loadDoorNames();
  document.getElementById('door1-title').textContent = doorNames.door1;
  document.getElementById('door2-title').textContent = doorNames.door2;

  if (canManage) {
    document.getElementById('edit-door1')?.addEventListener('click', () => editDoorName(1, controller));
    document.getElementById('edit-door2')?.addEventListener('click', () => editDoorName(2, controller));
  }

  // Escuchar estado online/offline
  controller.listenOnlineStatus((status) => updateDoorUI(status));

  // Escuchar posición de puertas
  controller.listenDoorPosition((doorNumber, state) => {
    const newState = state === 1 ? 2 : 1;
    updateDoorButtonUI(doorNumber, newState);

    const btn = document.getElementById('btn-door' + doorNumber);
    const text = document.getElementById('door' + doorNumber + '-text');
    if (btn && text) {
      text.textContent = state === 1 ? 'Cerrar Puerta' : 'Abrir Puerta';
    }

    const badge = document.getElementById('door' + doorNumber + '-status-badge');
    if (badge) {
      badge.textContent = state === 1 ? 'Abierta' : 'Cerrada';
      badge.style.background = state === 1 ? '#fef2f2' : 'var(--success-bg)';
      badge.style.color = state === 1 ? '#991b1b' : 'var(--success)';
    }
  });

  // Acciones de puertas
  setupDoorActions(controller, historyController, user, serial, 1);
  setupDoorActions(controller, historyController, user, serial, 2);

  // ========== VOLVER ==========
  document.getElementById('back-to-dashboard')?.addEventListener('click', () => {
    if (typeof onBack === 'function') {
      if (!navigator.onLine) {
        const cachedUser = JSON.parse(localStorage.getItem('user') || '{}');
        mainContent.innerHTML = dashboardHTML;
        const cachedSites = JSON.parse(localStorage.getItem('sites_' + cachedUser.uid) || '[]');
        const sitesList = document.getElementById('sites-list');
        if (sitesList && cachedSites.length > 0) {
          sitesList.innerHTML = cachedSites.map(site => `
          <div class="site-card">
            <div class="site-icon offline"><span class="material-symbols-outlined">${site.icon || 'devices'}</span></div>
            <div class="site-info"><h3>${site.name}</h3><p class="site-serial">${site.typeName || ''} • ${site.serial}</p>
              <div class="site-status"><span class="status-dot offline"></span><span class="status-text">Sin conexión</span></div>
            </div>
          </div>`).join('');
        }
      } else {
        onBack();
      }
    }
  });

  // ========== MENÚ CONFIGURACIÓN ==========
  document.getElementById('device-menu-btn')?.addEventListener('click', () => {
    const currentName = document.getElementById('device-name').textContent;
    document.getElementById('edit-device-name').value = currentName;
    document.getElementById('edit-device-name').dataset.original = currentName;
    const saveBtn = document.getElementById('save-device-name');
    if (saveBtn) saveBtn.style.display = 'none';
    document.getElementById('device-settings-modal').style.display = 'flex';
  });

  document.getElementById('edit-device-name')?.addEventListener('input', () => {
    const input = document.getElementById('edit-device-name');
    const saveBtn = document.getElementById('save-device-name');
    const original = input.dataset.original || '';
    saveBtn.style.display = input.value !== original ? 'flex' : 'none';
  });

  document.getElementById('close-settings-modal')?.addEventListener('click', () => {
    document.getElementById('device-settings-modal').style.display = 'none';
  });

  document.getElementById('save-device-name')?.addEventListener('click', async () => {
    const newName = document.getElementById('edit-device-name').value;
    if (!newName) return alert('Ingresa un nombre');
    const db = getDatabase();
    await update(ref(db, 'US/' + user.uid + '/M/' + serial), { N: newName });
    document.getElementById('device-name').textContent = newName;
    document.getElementById('save-device-name').style.display = 'none';
    document.getElementById('device-settings-modal').style.display = 'none';
  });

  // ========== ELIMINAR ==========
  document.getElementById('delete-device-btn')?.addEventListener('click', async () => {
    const role = await controller.getUserRole();
    if (role === 'PRO') {
      if (confirm('Eres el Propietario.\n\n¿Eliminar el sitio para TODOS los usuarios?')) {
        if (confirm('Esta acción no se puede deshacer. ¿Continuar?')) {
          const result = await controller.deleteDeviceForAll();
          if (result.success) {
            showToast('✅ Sitio eliminado', 'success');
            setTimeout(() => onBack(), 1000);
          } else {
            showToast('❌ ' + result.error, 'error');
          }
        }
      }
    } else {
      if (confirm('¿Eliminar este sitio de tu cuenta? Los demás usuarios no se verán afectados.')) {
        const result = await controller.removeDeviceFromMyAccount();
        if (result.success) {
          showToast('✅ Sitio eliminado de tu cuenta', 'success');
          setTimeout(() => onBack(), 1000);
        } else {
          showToast('❌ ' + result.error, 'error');
        }
      }
    }
  });

  // ========== COMPARTIR ==========
  document.getElementById('share-device-btn')?.addEventListener('click', async () => {
    if (!canManage) {
      showToast('❌ No tienes permisos para ver usuarios', 'error');
      return;
    }
    document.getElementById('device-settings-modal').style.display = 'none';
    document.getElementById('share-modal').style.display = 'flex';
    const sharedUsers = await controller.loadSharedUsers();
    const sharedList = document.getElementById('shared-list');

    if (sharedList) {
      if (sharedUsers.length === 0) {
        sharedList.innerHTML = '<p style="color:var(--text-light);text-align:center;padding:10px;">No has compartido este sitio</p>';
      } else {
        sharedList.innerHTML = sharedUsers.map(u => `
  <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border-color);">
    <div style="flex:1;">
      <p style="font-weight:600;margin:0;font-size:0.9rem;">${u.name}</p>
      <p style="font-size:0.7rem;color:var(--text-light);margin:2px 0 0;">${u.email}</p>
    </div>
    <select class="role-select" data-uid="${u.uid}" ${userRole !== 'PRO' ? 'disabled' : ''} style="font-size:0.75rem;padding:4px 8px;border-radius:6px;border:1px solid var(--border-color);margin-right:8px;">
      <option value="INV" ${u.role === 'INV' ? 'selected' : ''}>Invitado</option>
      <option value="ADM" ${u.role === 'ADM' ? 'selected' : ''}>Admin</option>
    </select>
    <button class="btn-remove-user" data-uid="${u.uid}" style="background:none;border:none;color:var(--error);cursor:pointer;font-size:16px;">🗑️</button>
  </div>`).join('');

        if (userRole === 'PRO') {
          sharedList.querySelectorAll('.role-select').forEach(select => {
            select.addEventListener('change', async (e) => {
              e.stopPropagation();
              if (confirm('¿Cambiar el rol de este usuario?')) {
                await changeUserRole(select.dataset.uid, select.value, controller);
              }
            });
          });
        }

        sharedList.querySelectorAll('.btn-remove-user').forEach(btn => {
          btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            if (confirm('¿Eliminar este usuario del sitio?')) {
              const result = await controller.removeSharedUser(btn.dataset.uid);
              if (result.success) {
                showToast('✅ Usuario eliminado', 'success');
                document.getElementById('share-device-btn')?.click();
              } else {
                showToast('❌ ' + result.error, 'error');
              }
            }
          });
        });
      }
    }
  });

  document.getElementById('close-share-modal')?.addEventListener('click', () => {
    document.getElementById('share-modal').style.display = 'none';
  });

  document.getElementById('confirm-share')?.addEventListener('click', async () => {
    if (!canManage) {
      showToast('❌ No tienes permisos para compartir', 'error');
      return;
    }
    const email = document.getElementById('share-email').value;
    const role = document.getElementById('share-role').value;
    if (!email) {
      showToast('⚠️ Ingresa un correo', 'error');
      return;
    }
    const result = await controller.shareDevice(email, role);
    if (result.success) {
      showToast('✅ ' + result.message, 'success');
      document.getElementById('share-email').value = '';
      document.getElementById('share-device-btn')?.click();
    } else {
      showToast('❌ ' + result.error, 'error');
    }
  });

  // ========== QUITAR NOTIFICACIONES ==========
  document.getElementById('unsubscribe-btn')?.addEventListener('click', async () => {
    if (confirm('¿Desactivar notificaciones de este sitio?')) {
      const result = await unsubscribeFromSerial(serial);
      if (result.success) {
        showToast('✅ Notificaciones desactivadas', 'success');
      } else {
        showToast('❌ ' + (result.error || 'Error al desactivar'), 'error');
      }
    }
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function (e) {
      if (e.target === this) this.style.display = 'none';
    });
  });
}

// Funciones auxiliares
async function editDoorName(doorNumber, controller) {
  const titleEl = document.getElementById('door' + doorNumber + '-title');
  const currentName = titleEl.textContent;
  const newName = prompt('Nombre de la puerta:', currentName);
  if (newName && newName.trim() && newName !== currentName) {
    const success = await controller.saveDoorName(doorNumber, newName.trim());
    if (success) {
      titleEl.textContent = newName.trim();
      showToast('✅ Nombre guardado', 'success');
    } else {
      showToast('❌ Error al guardar', 'error');
    }
  }
}

async function changeUserRole(uid, role, controller) {
  const result = await controller.updateSharedUserRole(uid, role);
  if (result.success) {
    showToast('✅ Rol actualizado', 'success');
    document.getElementById('share-device-btn')?.click();
  } else {
    showToast('❌ Error al actualizar', 'error');
  }
}