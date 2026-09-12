// src/app.js
import loginHTML from './pages/login.html?raw';
import registerHTML from './pages/register.html?raw';
import forgotHTML from './pages/forgot.html?raw';
import verifyHTML from './pages/verify.html?raw';
import dashboardHTML from './pages/dashboard.html?raw';
import offlineHTML from './pages/offline.html?raw';
import './styles/variables.css';
import './styles/base.css';
import './styles/auth.css';
import './styles/dashboard.css';
import './styles/components.css';
import './styles/device.css';

import { PWAManager } from './pwa.js';
import { onAuthChange, logoutUser } from './firebase.js';
import { AuthController } from './controllers/authController.js';
import { DashboardController } from './controllers/dashboardController.js';
import { showToast } from './utils/helpers.js';
import { setActiveContext, clearActiveContext } from './services/activeSerial.js';
import { setAllModulesStandby, pingDevice } from './services/onlineStatus.js';
import {
    requestNotificationPermission,
    onForegroundMessage,
    showEventNotification,
    syncSubscriptions,
    subscribeToNewSerial,
    clearSubscriptions
} from './services/notifications.js';

export class ProtexHomeApp {
    constructor() {
        this.pwa = null;
        this.authController = null;
        this.dashboardController = null;
        this.currentUser = null;
        this.cachedDashboard = null;
        this.activeView = null;
        this.backgroundTimer = null;
        this.currentSerial = null;
        this.init();
    }

    async init() {
        console.log('🚀 Iniciando ProtexHome...');

        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

        if (!isStandalone) {
            const splash = document.createElement('div');
            splash.id = 'splash-screen';
            splash.innerHTML = `
                <div class="splash-content">
                    <h1>ProtexHome</h1>
                    <p>Protección Inteligente</p>
                    <div class="splash-loader"></div>
                </div>
            `;
            document.body.prepend(splash);
        }

        if (screen.orientation && screen.orientation.lock) {
            try { await screen.orientation.lock('portrait'); } catch (e) { }
        }

        this.pwa = new PWAManager();

        // 🔔 Registrar listener de mensajes en primer plano
        await onForegroundMessage((payload) => {
            console.log('📩 Notificación en primer plano:', payload);
            const eventData = payload.data;
            if (eventData && eventData.E !== undefined) {
                console.log('✅ Mostrando notificación nativa');
                showEventNotification(eventData);
            } else {
                showToast(
                    (payload.notification?.title || 'ProtexHome') + ': ' + (payload.notification?.body || ''),
                    'info'
                );
            }
        });

        window.addEventListener('popstate', () => {
            if (this.activeView === 'device') {
                clearActiveContext();
                history.replaceState({ view: 'dashboard' }, '');
                this.activeView = 'dashboard';
                this.showDashboard(this.currentUser);
            }
        });

        window.addEventListener('online', () => {
            console.log('🟢 Conexión restaurada');
            const user = JSON.parse(localStorage.getItem('user') || 'null');
            if (user && user.uid) {
                const sitesList = document.getElementById('sites-list');
                if (sitesList) {
                    this.showDashboard(user);
                }
            }
        });

        document.addEventListener('visibilitychange', () => this.handleVisibilityChange());
        window.addEventListener('pagehide', () => this.handleAppClose());

        if (!navigator.onLine) {
            console.log('⚠️ Sin conexión - Cargando offline');
            this.showOfflineDashboard();
            return;
        }

        this.setupAuthListener();
    }

    setupAuthListener() {
        onAuthChange(async (user) => {
            this.currentUser = user;

            if (user) {
                if (user.emailVerified || user.providerData?.[0]?.providerId === 'google.com') {
                    console.log('✅ Dashboard');
                    this.showDashboardAfterSplash(user);
                } else {
                    console.log('⚠️ Verificación');
                    this.showVerificationAfterSplash(user);
                }
            } else {
                console.log('👤 Login');
                this.showLoginAfterSplash();
            }
        });
    }

    async loadAndPingModules(user) {
        if (!this.dashboardController) {
            this.dashboardController = new DashboardController(user);
        }

        const sites = await this.dashboardController.loadSites();

        const sitesList = document.getElementById('sites-list');
        if (sitesList) {
            this.dashboardController.renderSites(sites);
        }

        this.dashboardController.pingAllModules();
        this.dashboardController.startHealthCheck(user.uid);
        this.dashboardController.listenModulesStatus();
    }

    hideSplashAndShow(callback) {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.style.opacity = '0';
            splash.style.transition = 'opacity 0.3s ease';
            setTimeout(() => { splash.remove(); callback(); }, 1);
        } else {
            callback();
        }
    }

    showDashboardAfterSplash(user) {
        this.hideSplashAndShow(() => this.showDashboard(user));
    }

    showVerificationAfterSplash(user) {
        this.hideSplashAndShow(() => this.showVerification(user));
    }

    showLoginAfterSplash() {
        this.hideSplashAndShow(() => this.showLogin());
    }

    async showDashboard(user) {
        this.stopActiveView();
        this.activeView = 'dashboard';
        localStorage.setItem('user', JSON.stringify(user));
        this.cachedDashboard = { user, html: dashboardHTML };

        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = dashboardHTML;
        this.dashboardController = new DashboardController(user);

        const sitesList = document.getElementById('sites-list');
        if (sitesList) {
            sitesList.innerHTML = `
                ${[1, 2, 3, 4].map(() => `
                    <div style="display:flex;align-items:center;gap:12px;background:white;padding:14px;border-radius:14px;margin-bottom:8px;animation:pulse 1.5s infinite;">
                        <div style="width:44px;height:44px;background:#e0e0e0;border-radius:12px;"></div>
                        <div style="flex:1;">
                            <div style="width:60%;height:14px;background:#e0e0e0;border-radius:4px;margin-bottom:8px;"></div>
                            <div style="width:40%;height:10px;background:#e8e8e8;border-radius:4px;"></div>
                        </div>
                        <div style="width:20px;height:20px;background:#e8e8e8;border-radius:50%;"></div>
                    </div>
                `).join('')}
                <style>@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}</style>
            `;
        }

        const sites = await this.dashboardController.loadSites();

        // 🔔 Gestionar permisos y suscripciones
        console.log('🔔 Comprobando FCM...');

        // Verificar si ya hay token y permiso
        const existingToken = localStorage.getItem('fcm_token');
        const permissionGranted = Notification.permission === 'granted';

        if (existingToken && permissionGranted) {
            console.log('✅ Ya hay token y permiso, sincronizando suscripciones...');
            await syncSubscriptions(user.uid, sites.map(s => s.serial));
        } else {
            console.log('🔔 Solicitando permiso de notificaciones...');
            const result = await requestNotificationPermission();
            if (result.success) {
                console.log('✅ Token obtenido, sincronizando suscripciones...');
                await syncSubscriptions(user.uid, sites.map(s => s.serial));
            } else {
                console.warn('⚠️ No se pudo obtener permiso para notificaciones:', result.error);
            }
        }

        this.dashboardController.renderSites(sites);
        this.dashboardController.setupSearch();
        this._initDashboardEvents(user);

        await this.loadAndPingModules(user);
    }

    _initDashboardEvents(user) {
        const dc = this.dashboardController;

        document.getElementById('profile-btn')?.addEventListener('click', () => {
            document.getElementById('profile-name').textContent = user.name || user.email;
            document.getElementById('profile-email').textContent = user.email;
            document.getElementById('profile-modal').style.display = 'flex';
        });

        document.getElementById('close-profile-modal')?.addEventListener('click', () => {
            document.getElementById('profile-modal').style.display = 'none';
        });

        document.getElementById('logout-btn')?.addEventListener('click', async () => {
            if (confirm('¿Cerrar sesión?')) {
                clearActiveContext();
                clearSubscriptions();
                await dc.logout();
            }
        });

        document.getElementById('delete-account-btn')?.addEventListener('click', async () => {
            if (confirm('¿Eliminar cuenta permanentemente?')) {
                if (confirm('¿Totalmente seguro?')) {
                    clearActiveContext();
                    clearSubscriptions();
                    const { deleteAccount } = await import('./firebase.js');
                    await deleteAccount(user.uid);
                }
            }
        });

        document.getElementById('add-site-btn')?.addEventListener('click', () => {
            document.getElementById('add-modal').style.display = 'flex';
        });

        document.getElementById('close-add-modal')?.addEventListener('click', () => {
            document.getElementById('add-modal').style.display = 'none';
        });

        document.getElementById('save-site')?.addEventListener('click', async () => {
            const serial = document.getElementById('site-serial').value;
            const name = document.getElementById('site-name').value;
            const location = document.getElementById('site-location').value;
            const password = document.getElementById('site-password').value;
            const role = document.getElementById('site-role').value;

            if (!serial || !name) return alert('Serial y nombre son obligatorios');

            const success = await dc.addSite(serial, name, location, password, role);

            if (success) {
                document.getElementById('add-modal').style.display = 'none';
                const sites = await dc.loadSites();
                dc.renderSites(sites);
                await subscribeToNewSerial(user.uid, serial);
            }
        });

        const sitesList = document.getElementById('sites-list');
        if (sitesList) {
            sitesList.onclick = (e) => {
                const card = e.target.closest('.site-card');
                if (!card) return;

                if (!navigator.onLine) {
                    alert('⚠️ Sin conexión a internet');
                    return;
                }
                const serial = card.dataset.serial;
                const type = card.dataset.type || '1';
                this.openDeviceView(serial, type);
            };
        }

        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', function (e) {
                if (e.target === this) this.style.display = 'none';
            });
        });

        window.addEventListener('beforeunload', () => {
            if (dc) {
                dc.disconnectAllModules();
                dc.stopHealthCheck();
            }
        });
    }

    showLogin() {
        console.log('📝 Mostrando login...');
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;

        mainContent.innerHTML = `
            <div class="auth-container">
                <div class="auth-background">
                    <div class="bg-circle bg-circle-1"></div>
                    <div class="bg-circle bg-circle-2"></div>
                    <div class="bg-circle bg-circle-3"></div>
                </div>
                <div class="auth-card">
                    <div class="auth-header">
                        <div class="auth-logo">
                            <span class="material-symbols-outlined">shield_lock</span>
                        </div>
                        <h1>ProtexHome</h1>
                        <p>Protección Inteligente</p>
                    </div>
                    <div id="auth-views" class="auth-views">
                        <div id="login-view" class="auth-view active"></div>
                        <div id="register-view" class="auth-view"></div>
                        <div id="forgot-view" class="auth-view"></div>
                        <div id="verify-view" class="auth-view"></div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('login-view').innerHTML = loginHTML;
        document.getElementById('register-view').innerHTML = registerHTML;
        document.getElementById('forgot-view').innerHTML = forgotHTML;
        document.getElementById('verify-view').innerHTML = verifyHTML;

        this.authController = new AuthController();

        setTimeout(() => {
            this.setupAuthEvents();
        }, 100);
    }

    setupAuthEvents() {
        document.getElementById('switch-to-register')?.addEventListener('click', () => this.authController.showView('register'));
        document.getElementById('switch-to-login')?.addEventListener('click', () => this.authController.showView('login'));
        document.getElementById('forgot-password-btn')?.addEventListener('click', () => this.authController.showView('forgot'));
        document.getElementById('back-to-login')?.addEventListener('click', () => this.authController.showView('login'));
        document.getElementById('back-to-login-from-verify')?.addEventListener('click', () => this.authController.showView('login'));

        document.getElementById('toggle-login-password')?.addEventListener('click', () => this.authController.togglePassword('login-password'));
        document.getElementById('toggle-register-password')?.addEventListener('click', () => this.authController.togglePassword('register-password'));

        document.getElementById('login-form')?.addEventListener('submit', (e) => this.authController.handleLogin(e));
        document.getElementById('register-form')?.addEventListener('submit', (e) => this.authController.handleRegister(e));
        document.getElementById('forgot-form')?.addEventListener('submit', (e) => this.authController.handleForgotPassword(e));

        document.getElementById('google-login-btn')?.addEventListener('click', () => this.authController.handleGoogleLogin());
        document.getElementById('google-register-btn')?.addEventListener('click', () => this.authController.handleGoogleLogin());

        document.getElementById('resend-verification-btn')?.addEventListener('click', () => this.authController.handleResendVerification());
        document.getElementById('check-verification-btn')?.addEventListener('click', () => this.authController.handleCheckVerification());
        document.getElementById('logout-from-verify')?.addEventListener('click', async () => await logoutUser());
    }

    showVerification(user) {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = `
            <div class="auth-container">
                <div class="auth-background">
                    <div class="bg-circle bg-circle-1"></div>
                    <div class="bg-circle bg-circle-2"></div>
                    <div class="bg-circle bg-circle-3"></div>
                </div>
                <div class="auth-card fade-in">
                    <div class="verify-content">
                        <span class="material-symbols-outlined verify-icon">mark_email_unread</span>
                        <h2>Verifica tu correo</h2>
                        <p id="verify-message">Enlace enviado a <strong>${user.email}</strong></p>
                        <div class="verify-actions">
                            <button class="auth-button primary-button" id="check-verification-btn">
                                <span class="button-text">Ya verifiqué</span>
                            </button>
                            <button class="link-button" id="logout-from-verify">Cerrar sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('check-verification-btn')?.addEventListener('click', async () => {
            const { checkEmailVerification } = await import('./firebase.js');
            const result = await checkEmailVerification();
            if (result.verified) window.location.reload();
        });
        document.getElementById('logout-from-verify')?.addEventListener('click', async () => await logoutUser());
    }

    showOfflineDashboard() {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.style.opacity = '0';
            splash.style.transition = 'opacity 0.2s ease';
            setTimeout(() => splash.remove(), 150);
        }

        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = offlineHTML;

        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const cachedSites = JSON.parse(localStorage.getItem('sites_' + user.uid) || '[]');

        const sitesList = document.getElementById('offline-sites-list');
        if (sitesList) {
            if (cachedSites.length > 0) {
                sitesList.innerHTML = cachedSites.map(site => `
                    <div class="site-card">
                        <div class="site-icon offline">
                            <span class="material-symbols-outlined">${site.icon || 'devices'}</span>
                        </div>
                        <div class="site-info">
                            <h3>${site.name}</h3>
                            <p class="site-serial">${site.typeName || 'Dispositivo'} • ${site.serial}</p>
                            <div class="site-status">
                                <span class="status-dot offline"></span>
                                <span class="status-text">Sin conexión</span>
                            </div>
                        </div>
                    </div>
                `).join('');
            } else {
                sitesList.innerHTML = `
                    <div class="empty-state">
                        <span class="material-symbols-outlined">cloud_off</span>
                        <h3>Sin sitios guardados</h3>
                        <p>Conéctate para cargar tus sitios</p>
                    </div>`;
            }
        }

        const addBtn = document.querySelector('.add-site-container');
        if (addBtn) addBtn.style.display = 'none';
    }

    stopActiveView() {
        if (this.dashboardController) {
            this.dashboardController.stopAllListeners();
        }
    }

    async openDeviceView(serial, type) {
        this.stopActiveView();
        this.activeView = 'device';
        this.currentSerial = serial;
        history.pushState({ view: 'device' }, '');

        if (type === 1 || type === '1') {
            const { openDoorView } = await import('./controllers/doorViewController.js');
            openDoorView(this.currentUser, serial, () => {
                clearActiveContext();
                history.replaceState({ view: 'dashboard' }, '');
                this.activeView = 'dashboard';
                this.showDashboard(this.currentUser);
            });
        } else if (type === 5 || type === '5') {
            const { openAlarmDscView } = await import('./controllers/alarmDscViewController.js');
            openAlarmDscView(this.currentUser, serial, () => {
                clearActiveContext();
                history.replaceState({ view: 'dashboard' }, '');
                this.activeView = 'dashboard';
                this.showDashboard(this.currentUser);
            });
        } else {
            alert(`Vista para tipo ${type} en desarrollo`);
        }
    }

    handleVisibilityChange() {
        if (document.hidden) {
            if (!this.backgroundTimer) {
                this.backgroundTimer = setTimeout(async () => {
                    console.log('⏰ 10s en segundo plano, poniendo módulos en reposo');
                    const user = this.currentUser || JSON.parse(localStorage.getItem('user') || 'null');
                    if (user && user.uid) {
                        await setAllModulesStandby(user.uid);
                    }
                    this.backgroundTimer = null;
                }, 10000);
            }
        } else {
            if (this.backgroundTimer) {
                clearTimeout(this.backgroundTimer);
                this.backgroundTimer = null;
                console.log('✅ Regresó antes de 10s, continuando normal');
            } else {
                console.log('🔄 Regresó después de reposo, restaurando pings');
                const user = this.currentUser || JSON.parse(localStorage.getItem('user') || 'null');
                if (user && user.uid) {
                    if (this.activeView === 'dashboard') {
                        this.showDashboard(user);
                    } else if (this.activeView === 'device' && this.currentSerial) {
                        pingDevice(this.currentSerial);
                    }
                }
            }
        }
    }

    handleAppClose() {
        const user = this.currentUser || JSON.parse(localStorage.getItem('user') || 'null');
        if (user && user.uid) {
            setAllModulesStandby(user.uid);
        }
    }
}