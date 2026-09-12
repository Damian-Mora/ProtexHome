// ==============================================
// SecureHome - PWA Manager
// ==============================================

export class PWAManager {
  constructor() {
    this.deferredPrompt = null;
    this.isOnline = navigator.onLine;
    this.init();
  }

  init() {
    this.setupOnlineStatus();
    this.setupInstallPrompt();
    this.checkPWAStatus();
  }

  setupOnlineStatus() {
    window.addEventListener('online', () => {
      this.isOnline = true;
      document.body.classList.remove('offline');
      this.showToast('Conexión restaurada', 'success');
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      document.body.classList.add('offline');
      this.showToast('Sin conexión a internet', 'error');
    });

    // Estado inicial
    if (!navigator.onLine) {
      document.body.classList.add('offline');
    }
  }

  setupInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Guardar el evento para usar después si quieres
      this.deferredPrompt = e;
      // NO llamar a preventDefault() - dejar que Chrome muestre su banner
    });

    window.addEventListener('appinstalled', () => {
      console.log('PWA instalada exitosamente');
      this.deferredPrompt = null;
      this.hideInstallButton();

      // Registrar evento en analytics si tienes
      if (typeof gtag !== 'undefined') {
        gtag('event', 'pwa_install', {
          'event_category': 'PWA',
          'event_label': 'Instalación completada'
        });
      }
    });
  }

  async showInstallButton() {
    // Solo mostrar si no está instalada
    if (window.matchMedia('(display-mode: standalone)').matches) return;

    const installBtn = document.createElement('button');
    installBtn.id = 'pwa-install-btn';
    installBtn.className = 'pwa-install-btn';
    installBtn.innerHTML = `
      <span class="material-symbols-outlined">download</span>
      <span>Instalar App</span>
    `;

    installBtn.addEventListener('click', () => this.installPWA());

    document.body.appendChild(installBtn);

    setTimeout(() => installBtn.classList.add('show'), 100);
  }

  hideInstallButton() {
    const btn = document.getElementById('pwa-install-btn');
    if (btn) {
      btn.classList.remove('show');
      setTimeout(() => btn.remove(), 300);
    }
  }

  async installPWA() {
    if (!this.deferredPrompt) {
      // Si no está disponible, mostrar instrucciones
      this.showInstallInstructions();
      return;
    }

    this.deferredPrompt.prompt();
    const { outcome } = await this.deferredPrompt.userChoice;

    console.log(`Usuario: ${outcome === 'accepted' ? 'Aceptó' : 'Rechazó'} la instalación`);
    this.deferredPrompt = null;
    this.hideInstallButton();
  }

  showInstallInstructions() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    let message = '';

    if (isIOS) {
      message = 'Toca el botón Compartir y luego "Agregar a inicio"';
    } else if (isAndroid) {
      message = 'Toca el menú (⋮) y luego "Instalar aplicación"';
    } else {
      message = 'Usa el menú de tu navegador para instalar la app';
    }

    this.showToast(message, 'info');
  }

  checkPWAStatus() {
    // Verificar si está en modo standalone
    if (window.matchMedia('(display-mode: standalone)').matches) {
      document.body.classList.add('pwa-standalone');
    }

    // Escuchar cambios
    window.matchMedia('(display-mode: standalone)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('pwa-standalone');
      } else {
        document.body.classList.remove('pwa-standalone');
      }
    });
  }

  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
      success: 'check_circle',
      error: 'error',
      info: 'info'
    };

    toast.innerHTML = `
      <span class="material-symbols-outlined">${icons[type] || 'info'}</span>
      <span>${message}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}

// Detectar iOS y mostrar instrucciones de instalación
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

if (isIOS && !isStandalone) {
  // Crear banner instructivo estilo iOS
  const banner = document.createElement('div');
  banner.id = 'ios-install-banner';
  banner.innerHTML = `
    <div style="
      position: fixed; bottom: 20px; left: 15px; right: 15px;
      background: white; border-radius: 16px; padding: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 9999;
      display: flex; align-items: center; gap: 12px;
      font-family: -apple-system, sans-serif;
    ">
      <span style="font-size: 32px;">📱</span>
      <div style="flex:1;">
        <p style="font-weight:700; margin:0; color:#1a1a1a;">Instalar ProtexHome</p>
        <p style="font-size:0.85rem; color:#888; margin:4px 0 0;">
          Toca <strong>Compartir</strong> <span style="font-size:16px;">📤</span> y luego <strong>"Agregar a inicio"</strong>
        </p>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" 
        style="background:#f0f0f0; border:none; border-radius:50%; width:30px; height:30px; font-size:16px; cursor:pointer;">
        ✕
      </button>
    </div>
  `;
  document.body.appendChild(banner);

  // Ocultar después de 8 segundos
  setTimeout(() => {
    if (banner) banner.remove();
  }, 8000);
}