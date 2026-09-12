// src/controllers/dashboardController.js
import { logoutUser } from '../firebase.js';
import { getDatabase, ref, get, set, onValue } from 'firebase/database';
import { getActiveView, getActiveSerial, isSerialActive } from '../services/activeSerial.js';
import {
    isOnlineValue,
    readOnlineStatus,
    listenOnlineStatus,
    pingDevice,
    pingAllModules
} from '../services/onlineStatus.js';

export class DashboardController {
    constructor(user) {
        this.user = user;
        this.db = getDatabase();
        this.deviceTimers = {};
        this.listeners = [];
        this.pendingTimeouts = [];
        this.healthCheckListeners = [];
    }

    // ========== CARGAR SITIOS ==========
    async loadSites() {
        const modulesRef = ref(this.db, 'US/' + this.user.uid + '/M');
        try {
            const snapshot = await get(modulesRef);
            if (!snapshot.exists()) {
                console.log('📭 No hay módulos para el usuario');
                return [];
            }

            const data = snapshot.val();
            const serials = Object.keys(data);

            console.log('🔍 Seriales encontrados:', serials);

            // Leer estado online de forma independiente para cada serial
            const onlineStatuses = await Promise.all(
                serials.map(async (serial) => {
                    const status = await readOnlineStatus(serial);
                    console.log(`   → Serial ${serial} online = ${status}`);
                    return status;
                })
            );

            const sites = serials.map((serial, index) => {
                const isOnline = onlineStatuses[index];

                const iconos = { 1: 'door_open', 2: 'fingerprint', 3: 'location_city', 4: 'garage_door', 5: 'garage_door' };
                const colores = { 1: 'blue', 2: 'green', 3: 'red', 4: 'purple', 5: 'orange' };
                const tipos = { 1: 'Puerta Motorizada', 2: 'Control de Acceso', 3: 'Alarma Comunitaria', 4: 'Alarma', 5: 'Alarma DSC' };

                return {
                    serial,
                    name: data[serial].N || 'Sin nombre',
                    type: data[serial].T || 0,
                    typeName: tipos[data[serial].T] || 'Desconocido',
                    icon: iconos[data[serial].T] || 'devices',
                    color: colores[data[serial].T] || 'blue',
                    role: data[serial].U || 'INV',
                    status: isOnline ? 'online' : 'offline'
                };
            });

            localStorage.setItem('sites_' + this.user.uid, JSON.stringify(sites));
            return sites;
        } catch (error) {
            console.error('Error al cargar sitios:', error);
            const cached = localStorage.getItem('sites_' + this.user.uid);
            if (cached) return JSON.parse(cached);
            return [];
        }
    }

    // ========== RENDERIZAR SITIOS ==========
    renderSites(sites) {
        const sitesList = document.getElementById('sites-list');
        if (!sitesList) return;

        if (sites.length === 0) {
            sitesList.innerHTML = `
                <div class="empty-state">
                    <span class="material-symbols-outlined">home_work</span>
                    <h3>No tienes sitios</h3>
                    <p>Agrega tu primer sitio para empezar</p>
                </div>`;
            return;
        }

        sitesList.innerHTML = sites.map(site => `
            <div class="site-card" data-serial="${site.serial}" data-type="${site.type}" data-search="${site.name} ${site.serial}">
                <div class="site-icon ${site.status === 'online' ? 'online' : 'offline'}">
                    <span class="material-symbols-outlined">${site.icon || 'devices'}</span>
                </div>
                <div class="site-info">
                    <h3>${site.name}</h3>
                    <p class="site-serial">${site.typeName || 'Dispositivo'} • ${site.serial}</p>
                    <div class="site-status">
                        <span class="status-dot ${site.status === 'online' ? 'online' : 'offline'}"></span>
                        <span class="status-text">${site.status === 'online' ? 'En línea' : 'Sin conexión'}</span>
                    </div>
                </div>
                <span class="material-symbols-outlined arrow-icon">chevron_right</span>
            </div>
        `).join('');
    }

    // ========== AGREGAR SITIO ==========
    async addSite(serial, name, location, password, role) {
        try {
            await set(ref(this.db, 'US/' + this.user.uid + '/M/' + serial), {
                C: password || '1234',
                N: name,
                L: location || 'Sin ubicación',
                U: role || 'ADM'
            });
            return true;
        } catch (error) {
            console.error('Error al agregar sitio:', error);
            return false;
        }
    }

    // ========== BUSCADOR ==========
    setupSearch() {
        document.getElementById('search-input')?.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('.site-card').forEach(card => {
                card.style.display = card.dataset.search.toLowerCase().includes(query) ? 'flex' : 'none';
            });
        });
    }

    // ========== PING MÓDULOS (usa servicio centralizado) ==========
    async pingAllModules() {
        await pingAllModules(this.user.uid);
    }

    // ========== ESCUCHAR ESTADOS (usa servicio) ==========
    async listenModulesStatus() {
        // Limpiar listeners anteriores para evitar duplicados
        if (this.listeners) {
            this.listeners.forEach(fn => {
                if (typeof fn === 'function') fn();
            });
            this.listeners = [];
        }

        const modulesRef = ref(this.db, 'US/' + this.user.uid + '/M');
        const snapshot = await get(modulesRef);
        if (!snapshot.exists()) return;

        for (const serial of Object.keys(snapshot.val())) {
            const unsubscribe = listenOnlineStatus(serial, (status) => {
                this.updateSiteStatus(serial, status === 'online');
            });
            this.listeners.push(unsubscribe);
        }
    }

    updateSiteStatus(serial, isOnline) {
        // Si hay contexto activo y no es dashboard, ignorar
        if (getActiveView() === 'device' && !isSerialActive(serial)) {
            console.warn(`⛔ Ignorada actualización de ${serial} (vista device, serial activo ${getActiveSerial()})`);
            return;
        }
        const card = document.querySelector(`.site-card[data-serial="${serial}"]`);
        if (!card) {
            console.warn(`⚠️ No se encontró tarjeta para ${serial}`);
            return;
        }

        const dot = card.querySelector('.status-dot');
        const text = card.querySelector('.status-text');
        const icon = card.querySelector('.site-icon');

        if (dot) dot.className = 'status-dot ' + (isOnline ? 'online' : 'offline');
        if (text) text.textContent = isOnline ? 'En línea' : 'Sin conexión';
        if (icon) icon.className = 'site-icon ' + (isOnline ? 'online' : 'offline');

        console.log(`🔄 Actualizada tarjeta ${serial}: ${isOnline ? 'online' : 'offline'}`);
    }

    // ========== HEALTH CHECK (usa servicio) ==========
    startHealthCheck(uid) {
        this.stopHealthCheck();

        // Limpiar listeners viejos del health check
        if (this.healthCheckListeners) {
            this.healthCheckListeners.forEach(unsub => {
                if (typeof unsub === 'function') unsub();
            });
            this.healthCheckListeners = [];
        }

        get(ref(this.db, 'US/' + uid + '/M')).then((snapshot) => {
            if (snapshot.exists()) {
                for (const serial of Object.keys(snapshot.val())) {
                    const unsub = onValue(ref(this.db, 'P/' + serial + '/L'), (snap) => {
                        const isOnline = snap.exists() && isOnlineValue(snap.val());

                        if (isOnline) {
                            if (!this.deviceTimers[serial]) {
                                this.deviceTimers[serial] = setInterval(() => pingDevice(serial), 60000);
                            }
                        } else {
                            if (this.deviceTimers[serial]) {
                                clearInterval(this.deviceTimers[serial]);
                                this.deviceTimers[serial] = null;
                            }
                        }
                    });

                    this.healthCheckListeners.push(unsub);
                }
            }
        });
    }

    stopHealthCheck() {
        if (this.deviceTimers) {
            Object.values(this.deviceTimers).forEach(timer => clearInterval(timer));
            this.deviceTimers = {};
        }
    }

    // ========== DETENER TODO ==========
    stopAllListeners() {
        this.stopHealthCheck();

        if (this.listeners) {
            this.listeners.forEach(fn => {
                if (typeof fn === 'function') fn();
            });
            this.listeners = [];
        }

        if (this.healthCheckListeners) {
            this.healthCheckListeners.forEach(unsub => {
                if (typeof unsub === 'function') unsub();
            });
            this.healthCheckListeners = [];
        }

        if (this.pendingTimeouts) {
            this.pendingTimeouts.forEach(timeout => clearTimeout(timeout));
            this.pendingTimeouts = [];
        }

        console.log('🔇 Dashboard detenido');
    }
    /*
    stopAllListeners() {
        this.stopHealthCheck();

        if (this.listeners) {
            this.listeners.forEach(fn => {
                if (typeof fn === 'function') fn();
            });
            this.listeners = [];
        }

        if (this.healthCheckListeners) {
            this.healthCheckListeners.forEach(unsub => {
                if (typeof unsub === 'function') unsub();
            });
            this.healthCheckListeners = [];
        }

        if (this.pendingTimeouts) {
            this.pendingTimeouts.forEach(timeout => clearTimeout(timeout));
            this.pendingTimeouts = [];
        }

        console.log('🔇 Dashboard detenido se va a cancelar cada serial');
    }
*/

    async disconnectAllModules() {
        const snapshot = await get(ref(this.db, 'US/' + this.user.uid + '/M'));
        if (snapshot.exists()) {
            for (const serial of Object.keys(snapshot.val())) {
                await set(ref(this.db, `P/${serial}/L`), 0);
                console.log('🔇 serial :' + serial + ' detenid0 ');
            }
        }
    }

    async logout() {
        this.stopAllListeners();
        await this.disconnectAllModules();
        await logoutUser();
    }
}