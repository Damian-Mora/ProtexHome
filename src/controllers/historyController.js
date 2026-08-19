// src/controllers/historyController.js
import { getDatabase, ref, get, onValue, set } from 'firebase/database';
import { showToast } from '../utils/helpers.js';

export class HistoryController {
    constructor(serial) {
        this.serial = serial;
        this.db = getDatabase();
    }

    // Cargar historial desde la estructura del ESP32
    async loadHistory(limit = 50) {
        const historyRef = ref(this.db, 'M/' + this.serial + '/H');

        try {
            const snapshot = await get(historyRef);

            if (snapshot.exists()) {
                const data = snapshot.val();
                const events = [];

                // Recorrer TODAS las claves (sin filtrar por número)
                for (const key of Object.keys(data)) {
                    const event = data[key];
                    events.push({
                        id: key,  // Guardar la clave generada por Firebase
                        accion: event.A || 0,
                        dispositivo: event.D || 0,
                        evento: event.E || 0,
                        fecha: event.F || '',
                        nombre: event.N || '',
                        serial: event.S || this.serial
                    });
                }

                // Ordenar por fecha (string) descendente
                events.reverse();
                return events.slice(0, limit);  // o callback(events.slice(0, 50));
            }
        } catch (error) {
            console.error('Error al cargar historial:', error);
        }

        return [];
    }

    // Escuchar nuevos eventos en tiempo real
    listenNewEvents(callback) {
        const historyRef = ref(this.db, 'M/' + this.serial + '/H');

        return onValue(historyRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const events = [];

                for (const key of Object.keys(data)) {
                    const event = data[key];
                    events.push({
                        id: key,
                        accion: event.A || 0,
                        dispositivo: event.D || 0,
                        evento: event.E || 0,
                        fecha: event.F || '',
                        nombre: event.N || '',
                        serial: event.S || this.serial
                    });
                }

                // Invertir para que el más nuevo esté arriba
                events.reverse();
                callback(events.slice(0, 50));
            }
        });
    }

    // Obtener descripción de evento
    getEventDescription(eventCode) {
        const events = {
            1: { text: 'Puerta abierta', icon: 'door_open', color: '#16a34a' },
            2: { text: 'Puerta cerrada', icon: 'door_closed', color: '#1a73e8' },
            3: { text: 'Alarma activada', icon: 'alarm_on', color: '#dc2626' },   // ← mantener si existe
            4: { text: 'Alarma desactivada', icon: 'alarm_off', color: '#888888' }, // ← mantener
            5: { text: 'Acceso permitido', icon: 'check_circle', color: '#16a34a' },
            6: { text: 'Acceso denegado', icon: 'block', color: '#dc2626' },
            7: { text: 'Dispositivo conectado', icon: 'link', color: '#16a34a' },
            8: { text: 'Dispositivo desconectado', icon: 'link_off', color: '#f59e0b' },
            21: { text: 'Comando: Abrir', icon: 'send', color: '#f59e0b' },   // ← Nuevo
            22: { text: 'Comando: Cerrar', icon: 'send', color: '#f59e0b' }   // ← Nuevo
        };
        return events[eventCode] || { text: 'Evento ' + eventCode, icon: 'info', color: '#888888' };
    }

    // Renderizar historial en un contenedor
    async renderHistory(events, containerId = 'history-list', canDelete = false) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (events.length === 0) {
            container.innerHTML = '<p style="color:var(--text-light);text-align:center;">Sin eventos registrados</p>';
            return;
        }

        // Cargar nombres de puertas
        const doorNames = await this.loadDoorNames();

        container.innerHTML = events.map(event => {
            const desc = this.getEventDescription(event.evento);
            const doorName = event.dispositivo === 1 ? doorNames.door1 :
                event.dispositivo === 2 ? doorNames.door2 : '';

            let text = desc.text;

            return `
    <div class="history-item">
      <div class="history-icon" style="background:${desc.color}20;color:${desc.color};">
        <span class="material-symbols-outlined">${desc.icon}</span>
      </div>
      <div class="history-info">
        <p class="history-text">${doorName} - ${text}</p>
        <p class="history-meta">${event.nombre} • ${event.fecha}</p>
      </div>
      ${canDelete ? `<button class="btn-delete-event" data-id="${event.id}">🗑️</button>` : ''}
    </div>`;
        }).join('');

        // Eventos de eliminar
        if (canDelete) {
            container.querySelectorAll('.btn-delete-event').forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    e.stopPropagation();
                    if (confirm('¿Eliminar este evento?')) {
                        const result = await this.deleteEvent(btn.dataset.id);
                        if (result.success) {
                            showToast('✅ Evento eliminado', 'success');
                            const events = await this.loadHistory(50);
                            this.renderHistory(events, containerId, canDelete);
                        } else {
                            showToast('❌ Error al eliminar', 'error');
                        }
                    }
                });
            });
        }
    }

    // Eliminar un evento
    async deleteEvent(eventId) {
        try {
            const eventRef = ref(this.db, 'M/' + this.serial + '/H/' + eventId);
            await set(eventRef, null);  // Necesitas importar set
            return { success: true };
        } catch (error) {
            console.error('Error al eliminar evento:', error);
            return { success: false, error: 'Error al eliminar' };
        }
    }
    // Cargar nombres de puertas
    async loadDoorNames() {
        const n1Ref = ref(this.db, 'M/' + this.serial + '/W/NPG/1/N');
        const n2Ref = ref(this.db, 'M/' + this.serial + '/W/NPG/2/N');

        try {
            const [snap1, snap2] = await Promise.all([get(n1Ref), get(n2Ref)]);
            return {
                door1: snap1.exists() ? snap1.val() : 'Puerta 1',
                door2: snap2.exists() ? snap2.val() : 'Puerta 2'
            };
        } catch (error) {
            return { door1: 'Puerta 1', door2: 'Puerta 2' };
        }
    }
    // Agregar evento de comando enviado
    async addCommandEvent(doorNumber, action, userName) {
        try {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const fecha = `${year}/${month}/${day} ${hours}:${minutes}`;

            // E: 21 = Comando Abrir, E: 22 = Comando Cerrar
            const E = action === 'open' ? 21 : 22;

            const eventRef = ref(this.db, 'M/' + this.serial + '/H/' + Date.now());
            await set(eventRef, {
                A: 1,
                D: doorNumber,
                E: E,
                F: fecha,
                N: userName || 'Usuario',
                S: this.serial
            });
            return true;
        } catch (error) {
            console.error('Error al guardar comando:', error);
            return false;
        }
    }
}