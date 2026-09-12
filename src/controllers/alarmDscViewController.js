// src/controllers/alarmDscViewController.js
import alarmDscHTML from '../pages/alarmDsc.html?raw';
import { DeviceController } from './deviceController.js';
import { getDatabase, ref, set, onValue, update } from 'firebase/database';
import { showToast } from '../utils/helpers.js';
import { setActiveContext, clearActiveContext } from '../services/activeSerial.js';

export async function openAlarmDscView(user, serial, onBack) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = alarmDscHTML;

  const controller = new DeviceController(user, serial);
  const device = await controller.loadDeviceData();
  if (!device) {
    alert('Dispositivo no encontrado');
    clearActiveContext();
    return;
  }
  setActiveContext(serial, 'device');

  const userRole = await controller.getUserRole();
  const canManage = userRole === 'PRO' || userRole === 'ADM';

  document.getElementById('device-name').textContent = device.name;
  document.getElementById('info-serial').textContent = device.serial;
  document.getElementById('edit-device-name').value = device.name;
  document.getElementById('info-role').textContent = userRole;

  const updateOnline = (status) => {
    const badge = document.getElementById('device-status-badge');
    const dot = badge?.querySelector('.status-dot');
    const text = badge?.querySelector('span:last-child');
    if (dot) dot.className = `status-dot ${status === 'online' ? 'online' : 'offline'}`;
    if (text) text.textContent = status === 'online' ? 'En línea' : 'Sin conexión';
  };
  updateOnline(device.status);

  const listeners = [];
  const unsubOnline = controller.listenOnlineStatus(updateOnline);
  listeners.push(unsubOnline);

  const db = getDatabase();

  // ============================================================
  // ========== PARTICIONES ==========
  // ============================================================
  let currentPartition = 1;
  let partitionListeners = [];
  const enabledPartitions = [];
  let uiReady = false;

  function buildPartitionSelector() {
    const selector = document.getElementById('partition-select');
    const selectorContainer = document.getElementById('partition-selector-container');

    selector.innerHTML = '';
    enabledPartitions.forEach((p) => {
      const option = document.createElement('option');
      option.value = p;
      option.textContent = `Partición ${p}`;
      if (p === currentPartition) option.selected = true;
      selector.appendChild(option);
    });

    if (enabledPartitions.length <= 1) {
      selectorContainer.style.display = 'none';
      currentPartition = enabledPartitions[0] || 1;
    } else {
      selectorContainer.style.display = 'flex';
      if (!enabledPartitions.includes(currentPartition)) {
        currentPartition = enabledPartitions[0];
        selector.value = currentPartition;
      }
    }

    updatePartitionName();
    loadPartitionState();

    if (!uiReady) {
      uiReady = true;
      setTimeout(() => {
        const overlay = document.getElementById('dsc-loading-overlay');
        if (overlay) {
          overlay.style.opacity = '0';
          setTimeout(() => overlay.remove(), 400);
        }
        document.getElementById('dsc-content')?.classList.add('ready');
      }, 1500);
    }
  }

  function updatePartitionName() {
    const nameEl = document.getElementById('partition-name');
    if (nameEl) nameEl.textContent = `Partición ${currentPartition}`;
  }

  function loadPartitionState() {
    partitionListeners.forEach((unsub) => {
      if (typeof unsub === 'function') unsub();
    });
    partitionListeners = [];

    const stateRef = ref(db, `P/${serial}/E${currentPartition}`);
    const unsub = onValue(stateRef, (snap) => {
      const state = snap.exists() ? Number(snap.val()) : 0;
      updatePartitionUI(state);
    });
    partitionListeners.push(unsub);
  }

  const partitionsRef = ref(db, `P/${serial}`);
  const unsubPartitions = onValue(partitionsRef, (snap) => {
    if (!snap.exists()) {
      enabledPartitions.length = 0;
      buildPartitionSelector();
      return;
    }
    const data = snap.val();
    enabledPartitions.length = 0;
    for (let i = 1; i <= 8; i++) {
      if (data[`P${i}`] === 2) {
        enabledPartitions.push(i);
      }
    }
    buildPartitionSelector();
  });
  listeners.push(unsubPartitions);

  document.getElementById('partition-select')?.addEventListener('change', (e) => {
    currentPartition = Number(e.target.value);
    updatePartitionName();
    loadPartitionState();
    renderZonasList();
    renderHistoryForPartition();
  });

  // ============================================================
  // ========== UI DE ESTADO Y BOTONES ==========
  // ============================================================
  function updatePartitionUI(state) {
    const stateText = document.getElementById('partition-state');
    const led = document.getElementById('partition-led');
    const btnAway = document.getElementById('btn-arm-away');
    const btnHome = document.getElementById('btn-arm-home');
    const btnDisarm = document.getElementById('btn-disarm');

    const stateMap = {
      0: { text: 'Desconocido', led: 'dsc-led disarmed' },
      1: { text: 'Listo para armar', led: 'dsc-led ready' },
      2: { text: 'Listo con zonas abiertas', led: 'dsc-led not-ready' },
      3: { text: 'No listo', led: 'dsc-led not-ready' },
      4: { text: 'Armado en Casa', led: 'dsc-led armed-home' },
      5: { text: 'Armado Ausente', led: 'dsc-led armed-away' },
      6: { text: 'Armado sin entrada', led: 'dsc-led armed-away' },
      9: { text: 'Armado sin entrada', led: 'dsc-led armed-away' },
      22: { text: 'Armado sin entrada', led: 'dsc-led armed-away' },
      7: { text: 'Falla al armar', led: 'dsc-led not-ready' },
      8: { text: 'Tiempo de salida', led: 'dsc-led armed-away' },
      11: { text: 'Salida rápida', led: 'dsc-led armed-away' },
      12: { text: 'Retardo de entrada', led: 'dsc-led armed-home' },
      13: { text: 'Retardo después de alarma', led: 'dsc-led armed-home' },
      17: { text: 'Área en alarma', led: 'dsc-led not-ready' },
      18: { text: 'Armado con zonas anuladas', led: 'dsc-led armed-away' },
      21: { text: 'Armado con zonas anuladas', led: 'dsc-led armed-away' },
      25: { text: 'Memoria de alarma', led: 'dsc-led disarmed' },
    };

    const info = stateMap[state] || stateMap[0];
    if (stateText) stateText.textContent = info.text;
    if (led) led.className = `dsc-led ${info.led}`;
    updateButtonsForState(state, btnAway, btnHome, btnDisarm);
  }

  function updateButtonsForState(state, btnAway, btnHome, btnDisarm) {
    btnAway.disabled = false;
    btnHome.disabled = false;
    btnDisarm.disabled = false;

    const allEnabledStates = [0, 7, 8, 11];
    if (allEnabledStates.includes(state)) {
      if (state === 8 || state === 11) {
        btnAway.classList.add('blink');
        btnHome.classList.add('blink');
      } else {
        btnAway.classList.remove('blink');
        btnHome.classList.remove('blink');
      }
      return;
    }

    if ([1, 2, 3, 25].includes(state)) {
      btnAway.disabled = false;
      btnHome.disabled = false;
      btnDisarm.disabled = true;
    } else if ([4, 12, 13].includes(state)) {
      btnAway.disabled = true;
      btnHome.disabled = true;
      btnDisarm.disabled = false;
    } else if ([5, 6, 9, 22, 18, 21].includes(state)) {
      btnAway.disabled = true;
      btnHome.disabled = true;
      btnDisarm.disabled = false;
    } else if (state === 17) {
      btnAway.disabled = true;
      btnHome.disabled = true;
      btnDisarm.disabled = false;
    }

    if (![8, 11].includes(state)) {
      btnAway.classList.remove('blink');
      btnHome.classList.remove('blink');
    }
  }

  // ============================================================
  // ========== ZONAS ==========
  // ============================================================
  let zonasUnsubscribe = null;
  let nombresUnsubscribe = null;
  let cachedZonasData = {};
  let cachedNombresData = {};

  let editingZoneId = null;
  let originalZoneName = '';

  function setupZonasListener() {
    if (zonasUnsubscribe) {
      zonasUnsubscribe();
      zonasUnsubscribe = null;
    }
    if (nombresUnsubscribe) {
      nombresUnsubscribe();
      nombresUnsubscribe = null;
    }

    const zonasRef = ref(db, `M/${serial}/W/Z`);
    zonasUnsubscribe = onValue(zonasRef, (snap) => {
      cachedZonasData = snap.exists() ? snap.val() : {};
      renderZonasList();
    });

    const nombresRef = ref(db, `M/${serial}/W/NZ`);
    nombresUnsubscribe = onValue(nombresRef, (snap) => {
      cachedNombresData = snap.exists() ? snap.val() : {};
      renderZonasList();
    });
  }

  function renderZonasList() {
    const container = document.getElementById('zones-list');
    if (!container) return;

    const zoneEntries = Object.entries(cachedZonasData || {});
    const filtered = zoneEntries.filter(([id, zone]) => {
      return zone.A === currentPartition && zone.E !== undefined;
    });

    if (filtered.length === 0) {
      container.innerHTML = '<p style="color:var(--text-light);text-align:center;">Sin zonas configuradas para esta partición</p>';
      return;
    }

    filtered.sort((a, b) => Number(a[0]) - Number(b[0]));

    container.innerHTML = filtered
      .map(([id, z]) => {
        const nombreData = cachedNombresData[id] || {};
        const nombre = (nombreData.A === currentPartition && nombreData.N) ? nombreData.N : `Zona ${id}`;

        const isOpen = z.E === 1;
        const isBypass = z.B === 1;
        const statusText = isBypass ? 'Anulada' : isOpen ? 'Abierta' : 'Cerrada';
        const icon = isOpen ? 'door_open' : 'door_front';
        const bypassLabel = isBypass ? 'Quitar anulación' : 'Anular zona';
        const zoneNumber = String(id).padStart(2, '0');

        return `
          <div class="zone-item">
            <div class="zone-info">
              <span class="zone-icon ${isOpen ? 'open' : 'closed'}">
                <span class="material-symbols-outlined">${icon}</span>
              </span>
              <div style="display:flex; flex-direction:column; gap:2px; flex:1;">
                <p style="margin:0; font-size:0.9rem; font-weight:600; color:var(--text-primary); display:flex; align-items:center; gap:8px;">
                  <span>Zona ${zoneNumber}</span>
                  <span class="zone-status ${isBypass ? 'bypassed' : ''}" style="font-weight:400; font-size:0.8rem; color:var(--text-light);">
                    ${statusText}
                  </span>
                </p>
                <div style="display:flex; align-items:center; gap:6px; cursor:pointer;" onclick="window.editZone('${id}')">
                  <p style="margin:0; font-size:0.85rem; color:var(--text-secondary);">${nombre}</p>
                  <span class="material-symbols-outlined" style="font-size:16px; color:var(--primary);">edit</span>
                </div>
              </div>
            </div>
            <button class="btn-bypass" 
                    style="white-space: nowrap; flex-shrink: 0;"
                    data-zone="${id}" 
                    data-current-bypass="${isBypass ? 1 : 0}">
              ${bypassLabel}
            </button>
          </div>
        `;
      })
      .join('');

    container.querySelectorAll('.btn-bypass').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const zoneId = btn.dataset.zone;
        const currentBypass = Number(btn.dataset.currentBypass);
        const newBypass = currentBypass === 1 ? 0 : 1;
        await set(ref(db, `M/${serial}/W/Z/${zoneId}/B`), newBypass);
        showToast(newBypass === 1 ? '✅ Zona anulada' : '✅ Zona restaurada', 'success');
      });
    });

    window.editZone = openEditZoneModal;
  }

  // ========== EDITAR NOMBRE DE ZONA ==========
  function openEditZoneModal(zoneId) {
    if (!zoneId) return;
    editingZoneId = zoneId;
    const modal = document.getElementById('edit-zone-modal');
    const input = document.getElementById('edit-zone-name-input');
    const saveBtn = document.getElementById('save-zone-name-btn');

    const nombreData = cachedNombresData[zoneId] || {};
    originalZoneName = (nombreData.A === currentPartition && nombreData.N) ? nombreData.N : '';
    input.value = originalZoneName;
    saveBtn.style.display = 'none';

    const validateChanges = () => {
      const currentValue = input.value.trim();
      const hasChanges = (currentValue !== originalZoneName) && currentValue.length > 0;
      saveBtn.style.display = hasChanges ? 'flex' : 'none';
    };

    input.addEventListener('input', validateChanges);
    modal._cleanupListener = () => input.removeEventListener('input', validateChanges);

    modal.style.display = 'flex';
    input.focus();
    input.select();
    setTimeout(validateChanges, 50);
  }

  function closeEditZoneModal() {
    const modal = document.getElementById('edit-zone-modal');
    if (modal._cleanupListener) {
      modal._cleanupListener();
      modal._cleanupListener = null;
    }
    modal.style.display = 'none';
    editingZoneId = null;
    document.getElementById('save-zone-name-btn').style.display = 'none';
  }

  async function saveZoneName() {
    if (!editingZoneId) return;
    const input = document.getElementById('edit-zone-name-input');
    const newName = input.value.trim();
    if (!newName) {
      showToast('⚠️ El nombre no puede estar vacío', 'error');
      return;
    }
    if (newName === originalZoneName) {
      showToast('ℹ️ El nombre no ha cambiado', 'info');
      closeEditZoneModal();
      return;
    }
    try {
      await update(ref(db, `M/${serial}/W/NZ/${editingZoneId}`), {
        A: currentPartition,
        N: newName
      });
      showToast('✅ Nombre actualizado correctamente', 'success');
      closeEditZoneModal();
    } catch (error) {
      console.error('Error al guardar nombre:', error);
      showToast('❌ Error al guardar el nombre', 'error');
    }
  }

  document.getElementById('save-zone-name-btn')?.addEventListener('click', saveZoneName);
  document.getElementById('close-zone-modal')?.addEventListener('click', closeEditZoneModal);
  document.getElementById('edit-zone-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeEditZoneModal();
  });
  document.getElementById('edit-zone-name-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const saveBtn = document.getElementById('save-zone-name-btn');
      if (saveBtn.style.display !== 'none') saveZoneName();
    }
    if (e.key === 'Escape') closeEditZoneModal();
  });

  // ============================================================
  // ========== HISTORIAL - ORDEN POR FECHA + CLAVE ==========
  // ============================================================
  let historyUnsubscribe = null;
  let cachedHistoryData = {};

  function setupHistoryListener() {
    if (historyUnsubscribe) {
      historyUnsubscribe();
      historyUnsubscribe = null;
    }

    const historyRef = ref(db, `M/${serial}/H`);
    historyUnsubscribe = onValue(historyRef, (snap) => {
      cachedHistoryData = snap.exists() ? snap.val() : {};
      renderHistoryForPartition();
    });
  }

  function renderHistoryForPartition() {
    const container = document.getElementById('history-list');
    if (!container) return;

    const entries = Object.entries(cachedHistoryData || {});

    // Filtrar: A === partición actual O A === 9 (todas)
    const filtered = entries.filter(([id, ev]) => {
      return ev.A === currentPartition || ev.A === 9;
    });

    if (filtered.length === 0) {
      container.innerHTML = '<p style="color:var(--text-light);text-align:center;">No hay eventos para esta partición</p>';
      return;
    }

    // 🔥 ORDEN: primero por fecha descendente, y si son iguales, por clave descendente (más reciente primero)
    filtered.sort((a, b) => {
      const [idA, evA] = a;
      const [idB, evB] = b;
      // Convertir fecha a objeto Date
      const dateA = new Date(evA.F.replace(/\//g, '-').replace(' ', 'T') + ':00');
      const dateB = new Date(evB.F.replace(/\//g, '-').replace(' ', 'T') + ':00');
      // Comparar fechas (más reciente primero)
      if (dateB - dateA !== 0) return dateB - dateA;
      // Si misma fecha, comparar por clave (timestamp de Firebase)
      return idB.localeCompare(idA); // descendente: -N... más reciente primero
    });

    // Función para formatear el texto del evento según E y D
    function getEventText(ev) {
      const e = ev.E;
      const d = ev.D || 0;
      const nombre = ev.N || 'Usuario';
      const zonaNum = String(d).padStart(2, '0');

      switch (e) {
        case 1:
          return `Alarma en Zona ${zonaNum}`;
        case 2:
          return `Restauración de alarma en Zona ${zonaNum}`;
        case 3: {
          const fallaMap = {
            1: 'Batería baja',
            2: 'Falla de sirena',
            3: 'Falla de línea telefónica',
            4: 'Falla de comunicación'
          };
          const desc = fallaMap[d] || `Falla (código ${d})`;
          return `Falla: ${desc}`;
        }
        case 4: {
          const fallaMap = {
            1: 'Batería baja restaurada',
            2: 'Sirena restaurada',
            3: 'Línea telefónica restaurada',
            4: 'Comunicación restaurada'
          };
          const desc = fallaMap[d] || `Falla restaurada (código ${d})`;
          return `Restauración de falla: ${desc}`;
        }
        case 5:
          return `Apertura por usuario ${zonaNum} (${nombre})`;
        case 6:
          return `Cierre por usuario ${zonaNum} (${nombre})`;
        case 7: {
          const tipoMap = {
            0: 'Fuego',
            1: 'Alarma médica',
            2: 'Pánico de teclado'
          };
          const tipo = tipoMap[d] || `Alarma (código ${d})`;
          return `${tipo}`;
        }
        default:
          return `Evento ${e}`;
      }
    }

    // Función para obtener color según E y D (diferenciando apertura y cierre)
    function getEventStyle(ev) {
      const e = ev.E;
      const d = ev.D || 0;
      switch (e) {
        case 1:
          return { bg: '#fee2e2', text: '#dc2626', icon: 'warning' };
        case 2:
          return { bg: '#dcfce7', text: '#16a34a', icon: 'check_circle' };
        case 3:
          return { bg: '#fef3c7', text: '#d97706', icon: 'error' };
        case 4:
          return { bg: '#fef9c3', text: '#a16207', icon: 'restart_alt' };
        case 5:
          // Apertura: verde claro
          return { bg: '#dcfce7', text: '#16a34a', icon: 'lock_open' };
        case 6:
          // Cierre: morado claro
          return { bg: '#ede9fe', text: '#7c3aed', icon: 'lock' };
        case 7: {
          if (d === 0) return { bg: '#fecaca', text: '#b91c1c', icon: 'fire' };
          if (d === 1) return { bg: '#fca5a5', text: '#991b1b', icon: 'medical_services' };
          if (d === 2) return { bg: '#f87171', text: '#7f1d1d', icon: 'warning' }; // pánico
          return { bg: '#fee2e2', text: '#dc2626', icon: 'warning' };
        }
        default:
          return { bg: '#f3f4f6', text: '#6b7280', icon: 'info' };
      }
    }

    container.innerHTML = filtered
      .map(([id, ev]) => {
        const style = getEventStyle(ev);
        const text = getEventText(ev);
        const fecha = ev.F || '';

        return `
          <div class="history-item" style="background: ${style.bg}; border-left: 4px solid ${style.text};">
            <div class="history-icon" style="color: ${style.text};">
              <span class="material-symbols-outlined">${style.icon}</span>
            </div>
            <div class="history-info">
              <p class="history-text" style="color: ${style.text};">
                ${text}
              </p>
              <p class="history-meta">${fecha}</p>
            </div>
          </div>
        `;
      })
      .join('');
  }

  setupHistoryListener();

  // ============================================================
  // ========== PESTAÑAS - HISTORIAL POR DEFECTO ==========
  // ============================================================
  // Al cargar, mostrar historial y ocultar zonas
  function switchTab(tab) {
    document.getElementById('tab-zonas').classList.toggle('active', tab === 'zonas');
    document.getElementById('tab-historial').classList.toggle('active', tab === 'historial');
    document.getElementById('panel-zonas').style.display = tab === 'zonas' ? 'block' : 'none';
    document.getElementById('panel-historial').style.display = tab === 'historial' ? 'block' : 'none';
    if (tab === 'historial') renderHistoryForPartition();
  }

  // Inicialmente, activar historial
  setTimeout(() => {
    switchTab('historial');
  }, 100);

  document.getElementById('tab-zonas')?.addEventListener('click', () => switchTab('zonas'));
  document.getElementById('tab-historial')?.addEventListener('click', () => switchTab('historial'));

  // ============================================================
  // ========== BOTONES DE ARMADO ==========
  // ============================================================
  document.getElementById('btn-arm-away')?.addEventListener('click', async () => {
    await set(ref(db, `M/${serial}/DSC/P${currentPartition}/CMD`), 1);
    showToast('🔒 Armado ausente', 'success');
  });
  document.getElementById('btn-arm-home')?.addEventListener('click', async () => {
    await set(ref(db, `M/${serial}/DSC/P${currentPartition}/CMD`), 2);
    showToast('🏠 Armado en casa', 'success');
  });
  document.getElementById('btn-disarm')?.addEventListener('click', async () => {
    await set(ref(db, `M/${serial}/DSC/P${currentPartition}/CMD`), 0);
    showToast('🔓 Desarmado', 'success');
  });

  // ============================================================
  // ========== LIMPIEZA ==========
  // ============================================================
  const cleanup = () => {
    listeners.forEach((unsub) => {
      if (typeof unsub === 'function') unsub();
    });
    partitionListeners.forEach((unsub) => {
      if (typeof unsub === 'function') unsub();
    });
    if (zonasUnsubscribe) {
      zonasUnsubscribe();
      zonasUnsubscribe = null;
    }
    if (nombresUnsubscribe) {
      nombresUnsubscribe();
      nombresUnsubscribe = null;
    }
    if (historyUnsubscribe) {
      historyUnsubscribe();
      historyUnsubscribe = null;
    }
    clearActiveContext();
  };

  document.getElementById('back-to-dashboard')?.addEventListener('click', () => {
    cleanup();
    onBack();
  });

  setTimeout(() => {
    const overlay = document.getElementById('dsc-loading-overlay');
    if (overlay && !uiReady) {
      uiReady = true;
      overlay.style.opacity = '0';
      setTimeout(() => overlay.remove(), 300);
      document.getElementById('dsc-content')?.classList.add('ready');
      console.warn('⚠️ Overlay ocultado por timeout de seguridad');
    }
  }, 5000);

  setupZonasListener();
}