// src/controllers/dashboardController.js
import { logoutUser } from '../firebase.js';
import { getDatabase, ref, get, set, onValue } from 'firebase/database';

export class DashboardController {
    constructor(user) {
        this.user = user;
        this.db = getDatabase();
        this.deviceTimers = {};
        this.listeners = [];
        this.pendingTimeouts = [];
    }

    // ========== CARGAR SITIOS ==========
    async loadSites() {
        const modulesRef = ref(this.db, 'US/' + this.user.uid + '/M');
        try {
            const snapshot = await get(modulesRef);
            if (snapshot.exists()) {
                const data = snapshot.val();
                const sites = [];
                for (const serial of Object.keys(data)) {
                    const statusRef = ref(this.db, 'P/' + serial + '/L');
                    const statusSnapshot = await get(statusRef);
                    const isOnline = statusSnapshot.exists() && statusSnapshot.val() === 1;

                    const iconos = { 1: 'door_open', 2: 'fingerprint', 3: 'location_city', 4: 'garage_door', 5: 'garage_door' };
                    const colores = { 1: 'blue', 2: 'green', 3: 'red', 4: 'purple', 5: 'orange' };
                    const tipos = { 1: 'Puerta Motorizada', 2: 'Control de Acceso', 3: 'Alarma Comunitaria', 4: 'Alarma', 5: 'Alarma DSC' };

                    sites.push({
                        serial, name: data[serial].N || 'Sin nombre', type: data[serial].T || 0,
                        typeName: tipos[data[serial].T] || 'Desconocido', icon: iconos[data[serial].T] || 'devices',
                        color: colores[data[serial].T] || 'blue', role: data[serial].U || 'INV',
                        status: isOnline ? 'online' : 'offline'
                    });
                }
                localStorage.setItem('sites_' + this.user.uid, JSON.stringify(sites));
                return sites;
            }
        } catch (error) {
            const cached = localStorage.getItem('sites_' + this.user.uid);
            if (cached) return JSON.parse(cached);
        }
        return [];
    }

    // ========== RENDERIZAR SITIOS ==========
    renderSites(sites) {
        const sitesList = document.getElementById('sites-list');
        if (!sitesList) return;
        if (sites.length === 0) {
            sitesList.innerHTML = `<div class="empty-state"><span class="material-symbols-outlined">home_work</span><h3>No tienes sitios</h3><p>Agrega tu primer sitio para empezar</p></div>`;
            return;
        }
        sitesList.innerHTML = sites.map(site => `
     <div class="site-card" data-serial="${site.serial}" data-type="${site.type}" data-search="${site.name} ${site.serial}">
        <div class="site-icon ${site.status === 'online' ? 'online' : 'offline'}"><span class="material-symbols-outlined">${site.icon || 'devices'}</span></div>
        <div class="site-info"><h3>${site.name}</h3><p class="site-serial">${site.typeName || 'Dispositivo'} • ${site.serial}</p>
          <div class="site-status"><span class="status-dot ${site.status === 'online' ? 'online' : 'offline'}"></span><span class="status-text">${site.status === 'online' ? 'En línea' : 'Sin conexión'}</span></div>
        </div><span class="material-symbols-outlined arrow-icon">chevron_right</span></div>`).join('');
    }

    // ========== AGREGAR SITIO ==========
    async addSite(serial, name, location, password, role) {
        try {
            await set(ref(this.db, 'US/' + this.user.uid + '/M/' + serial), { C: password || '1234', N: name, L: location || 'Sin ubicación', U: role || 'ADM' });
            return true;
        } catch (error) { return false; }
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

    // ========== PING MÓDULOS ==========
    async pingAllModules() {
        const snapshot = await get(ref(this.db, 'US/' + this.user.uid + '/M'));
        if (snapshot.exists()) {
            for (const serial of Object.keys(snapshot.val())) {
                await set(ref(this.db, 'P/' + serial), { L: 0 });
                await set(ref(this.db, 'M/' + serial + '/X/D'), { L: 1 });
            }
        }
    }

    // ========== ESCUCHAR ESTADOS ==========
    listenModulesStatus() {
        get(ref(this.db, 'US/' + this.user.uid + '/M')).then((snapshot) => {
            if (snapshot.exists()) {
                for (const serial of Object.keys(snapshot.val())) {
                    const statusRef = ref(this.db, 'P/' + serial + '/L');
                    let lastOnline = true;
                    const unsubscribe = onValue(statusRef, (statusSnapshot) => {
                        const isOnline = statusSnapshot.exists() && statusSnapshot.val() === 1;
                        if (!isOnline && lastOnline) {
                            const timeoutId = setTimeout(() => {
                                get(statusRef).then((recheck) => {
                                    if (!recheck.exists() || recheck.val() !== 1) this.updateSiteStatus(serial, false);
                                });
                            }, 30000);
                            this.pendingTimeouts.push(timeoutId);
                        } else if (isOnline) {
                            this.updateSiteStatus(serial, true);
                        }
                        lastOnline = isOnline;
                    });
                    this.listeners.push(unsubscribe);
                }
            }
        });
    }

    updateSiteStatus(serial, isOnline) {
        const card = document.querySelector(`.site-card[data-serial="${serial}"]`);
        if (!card) return;
        const dot = card.querySelector('.status-dot');
        const text = card.querySelector('.status-text');
        const icon = card.querySelector('.site-icon');
        if (dot) dot.className = 'status-dot ' + (isOnline ? 'online' : 'offline');
        if (text) text.textContent = isOnline ? 'En línea' : 'Sin conexión';
        if (icon) icon.className = 'site-icon ' + (isOnline ? 'online' : 'offline');
    }

    // ========== HEALTH CHECK ==========
    startHealthCheck(uid) {
        this.stopHealthCheck();
        get(ref(this.db, 'US/' + uid + '/M')).then((snapshot) => {
            if (snapshot.exists()) {
                for (const serial of Object.keys(snapshot.val())) {
                    onValue(ref(this.db, 'P/' + serial + '/L'), (snap) => {
                        const isOnline = snap.exists() && snap.val() === 1;
                        if (isOnline) {
                            if (!this.deviceTimers[serial]) {
                                this.deviceTimers[serial] = setInterval(() => this.pingDevice(serial), 60000);
                            }
                        } else {
                            if (this.deviceTimers[serial]) {
                                clearInterval(this.deviceTimers[serial]);
                                this.deviceTimers[serial] = null;
                            }
                        }
                    });
                }
            }
        });
    }

    async pingDevice(serial) {
        try {
            await set(ref(this.db, 'P/' + serial), { L: 0 });
            await set(ref(this.db, 'M/' + serial + '/X/D'), { L: 0 });
            await new Promise(r => setTimeout(r, 3000));
            await set(ref(this.db, 'M/' + serial + '/X/D'), { L: 1 });
        } catch (error) { console.error('Error en ping:', error); }
    }

    stopHealthCheck() {
        if (this.deviceTimers) {
            Object.values(this.deviceTimers).forEach(t => clearInterval(t));
            this.deviceTimers = {};
        }
    }

    // ========== DETENER TODO ==========
    stopAllListeners() {
        this.stopHealthCheck();
        if (this.listeners) {
            this.listeners.forEach(fn => { if (typeof fn === 'function') fn(); });
            this.listeners = [];
        }
        if (this.pendingTimeouts) {
            this.pendingTimeouts.forEach(t => clearTimeout(t));
            this.pendingTimeouts = [];
        }
        console.log('🔇 Dashboard detenido');
    }

    async disconnectAllModules() {
        const snapshot = await get(ref(this.db, 'US/' + this.user.uid + '/M'));
        if (snapshot.exists()) {
            for (const serial of Object.keys(snapshot.val())) {
                await set(ref(this.db, 'P/' + serial), { L: 0 });
            }
        }
    }

    async logout() {
        await this.disconnectAllModules();
        await logoutUser();
    }
}