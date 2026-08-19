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

import {
    onAuthChange,
    logoutUser
} from './firebase.js';

import {
    requestNotificationPermission,
    onForegroundMessage,
    syncSubscriptions,
    subscribeToNewSerial,
    clearSubscriptions
} from './services/notifications.js';

import { AuthController } from './controllers/authController.js';
import { DashboardController } from './controllers/dashboardController.js';
import { showToast } from './utils/helpers.js';

export class ProtexHomeApp {
    constructor() {
        this.pwa = null;
        this.authController = null;
        this.dashboardController = null;
        this.currentUser = null;
        this.cachedDashboard = null;
        this.activeView = null;
        this.init();
    }

    async init() {
        console.log('🚀 Iniciando ProtexHome...');

        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

        if (!isStandalone) {
            // SOLO en web: crear y mostrar splash
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

        // Manejar notificaciones en primer plano (una sola vez)
        onForegroundMessage((payload) => {
            console.log('📩 Notificación en primer plano:', payload);
            showToast(
                (payload.notification?.title || 'ProtexHome') + ': ' + (payload.notification?.body || ''),
                'info'
            );
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

                    // PRECARGAR sitios desde caché INMEDIATAMENTE
                    const cached = localStorage.getItem('sites_' + user.uid);
                    if (cached && this.dashboardController) {
                        this.dashboardController.renderSites(JSON.parse(cached));
                    }

                    // Mostrar dashboard
                    this.showDashboardAfterSplash(user);

                    // Solicitar permiso de notificaciones
                    requestNotificationPermission(user.uid);

                    // EN SEGUNDO PLANO: Conectar Firebase y hacer ping
                    this.loadAndPingModules(user);

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

        // 1. Cargar sitios desde Firebase
        const sites = await this.dashboardController.loadSites();

        // 2. Actualizar UI si el dashboard ya está visible
        const sitesList = document.getElementById('sites-list');
        if (sitesList) {
            this.dashboardController.renderSites(sites);
        }

        // 3. Sincronizar suscripciones a topics con los seriales actuales
        syncSubscriptions(user.uid, sites.map(s => s.serial));

        // 4. Hacer ping a cada módulo
        this.dashboardController.pingAllModules();
        // Iniciar health check cada 60 segundos
        this.dashboardController.startHealthCheck(user.uid);

        // 5. Escuchar cambios en tiempo real
        this.dashboardController.listenModulesStatus();
    }

    // ========== SPLASH ==========
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

    // ========== DASHBOARD ==========
    async showDashboard(user) {
        this.stopActiveView();
        this.activeView = 'dashboard';
        localStorage.setItem('user', JSON.stringify(user));
        this.cachedDashboard = { user: user, html: dashboardHTML };

        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = dashboardHTML;
        this.dashboardController = new DashboardController(user);

        // Mostrar skeleton
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

        // Cargar sitios (puede tardar)
        const sites = await this.dashboardController.loadSites();
        this.dashboardController.renderSites(sites);
        this.dashboardController.setupSearch();

        // Activar eventos DESPUÉS de renderizar
        this._initDashboardEvents(user);

        // Segundo plano
        setTimeout(() => {
            this.dashboardController.pingAllModules();
            this.dashboardController.listenModulesStatus();
            this.dashboardController.startHealthCheck(user.uid);
        }, 500);
    }

    _initDashboardEvents(user) {
        const dc = this.dashboardController;

        // Perfil
        document.getElementById('profile-btn')?.addEventListener('click', () => {
            document.getElementById('profile-name').textContent = user.name || user.email;
            document.getElementById('profile-email').textContent = user.email;
            document.getElementById('profile-modal').style.display = 'flex';
        });

        document.getElementById('close-profile-modal')?.addEventListener('click', () => {
            document.getElementById('profile-modal').style.display = 'none';
        });

        // Logout
        document.getElementById('logout-btn')?.addEventListener('click', async () => {
            if (confirm('¿Cerrar sesión?')) {
                clearSubscriptions();
                await dc.logout();
            }
        });

        // Eliminar cuenta
        document.getElementById('delete-account-btn')?.addEventListener('click', async () => {
            if (confirm('¿Eliminar cuenta permanentemente?')) {
                if (confirm('¿Totalmente seguro?')) {
                    clearSubscriptions();
                    const { deleteAccount } = await import('./firebase.js');
                    await deleteAccount(user.uid);
                }
            }
        });

        // Agregar sitio
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

                // Suscribirse al nuevo serial
                await subscribeToNewSerial(user.uid, serial);
            }
        });

        // Click en sitio (delegación de eventos)
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
                console.log('🖱️ Click en sitio:', serial, 'Tipo:', type);
                this.openDeviceView(serial, type);
            };
        }

        // Cerrar modales
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', function (e) {
                if (e.target === this) this.style.display = 'none';
            });
        });

        // Desconectar al salir
        window.addEventListener('beforeunload', () => {
            if (dc) {
                dc.disconnectAllModules();
                dc.stopHealthCheck();
            }
        });
    }

    // ========== LOGIN ==========
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

    // ========== OFFLINE ==========
    async showOfflineDashboard() {
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
        if (this.activeView === 'dashboard' && this.dashboardController) {
            this.dashboardController.stopAllListeners();
        }
    }

    async openDeviceView(serial, type) {
        this.stopActiveView();
        this.activeView = 'device';

        if (type === 1 || type === '1') {
            const { openDoorView } = await import('./controllers/doorViewController.js');
            openDoorView(this.currentUser, serial, () => {
                this.activeView = 'dashboard';
                this.showDashboard(this.currentUser);
            });
        } else {
            alert(`Vista para tipo ${type} en desarrollo`);
        }
    }
}

// ========== FUNCIONES EXPORTADAS PARA OTRAS VISTAS ==========
export function setupDashboardEvents(user, dashController) {
    const sitesList = document.getElementById('sites-list');
    if (sitesList) {
        const newSitesList = sitesList.cloneNode(false);
        sitesList.parentNode.replaceChild(newSitesList, sitesList);
    }

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
            clearSubscriptions();
            await dashController.logout();
        }
    });

    document.getElementById('delete-account-btn')?.addEventListener('click', async () => {
        if (confirm('¿Eliminar cuenta permanentemente?')) {
            if (confirm('¿Totalmente seguro?')) {
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

        const success = await dashController.addSite(serial, name, location, password, role);

        if (success) {
            document.getElementById('add-modal').style.display = 'none';
            const sites = await dashController.loadSites();
            dashController.renderSites(sites);
            setupSiteCardEvents(user, dashController);
            await subscribeToNewSerial(user.uid, serial);
        }
    });

    setupSiteCardEvents(user, dashController);

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function (e) {
            if (e.target === this) this.style.display = 'none';
        });
    });
}

function setupSiteCardEvents(user, dashController) {
    const currentUser = user || JSON.parse(localStorage.getItem('user') || '{}');

    document.querySelectorAll('.site-card').forEach(card => {
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);

        newCard.addEventListener('click', () => {
            if (!navigator.onLine) {
                alert('⚠️ Sin conexión a internet');
                return;
            }
            const serial = newCard.dataset.serial;
            const type = newCard.dataset.type || '1';

            import('./controllers/doorViewController.js').then(module => {
                module.openDoorView(currentUser, serial, () => {
                    const app = document.querySelector('main')._app;
                    if (app) app.showDashboard(currentUser);
                    else window.location.reload();
                });
            });
        });
    });
}