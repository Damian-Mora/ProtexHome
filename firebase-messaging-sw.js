// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDt4bPEKjStdFY-i5VLz-yx79wGModi9GM",
    authDomain: "alarmaip-e0868.firebaseapp.com",
    databaseURL: "https://alarmaip-e0868-default-rtdb.firebaseio.com",
    projectId: "alarmaip-e0868",
    storageBucket: "alarmaip-e0868.appspot.com",
    messagingSenderId: "137552335402",
    appId: "1:137552335402:web:579a6e7fe8455ce78ca953"
});

const messaging = firebase.messaging();

function formatEventMessage(payload) {
    const { A: partition, D: zoneOrUser, E: eventType, N: name, S: serial } = payload;
    const zonaNum = String(zoneOrUser || 0).padStart(2, '0');
    const nombre = name || 'Usuario';
    const serialDisplay = serial || '';

    let title = `📢 ${serialDisplay}`;
    let body = '';
    let icon = '🔔';
    let color = '#6b7280';

    switch (Number(eventType)) {
        case 1:
            title = `🚨 Alarma en Zona ${zonaNum}`;
            body = `Partición ${partition} • ${nombre}`;
            icon = '🚨';
            color = '#dc2626';
            break;
        case 2:
            title = `✅ Restauración en Zona ${zonaNum}`;
            body = `Partición ${partition} • ${nombre}`;
            icon = '✅';
            color = '#16a34a';
            break;
        case 3: {
            const fallaMap = {
                1: 'Batería baja',
                2: 'Falla de sirena',
                3: 'Falla de línea telefónica',
                4: 'Falla de comunicación'
            };
            const fallaDesc = fallaMap[zoneOrUser] || `Falla (código ${zoneOrUser})`;
            title = `⚠️ Falla: ${fallaDesc}`;
            body = `Partición ${partition}`;
            icon = '⚠️';
            color = '#d97706';
            break;
        }
        case 4: {
            const restFallaMap = {
                1: 'Batería baja restaurada',
                2: 'Sirena restaurada',
                3: 'Línea telefónica restaurada',
                4: 'Comunicación restaurada'
            };
            const restDesc = restFallaMap[zoneOrUser] || `Falla restaurada (código ${zoneOrUser})`;
            title = `🔄 ${restDesc}`;
            body = `Partición ${partition}`;
            icon = '🔄';
            color = '#a16207';
            break;
        }
        case 5:
            title = `🔓 Apertura por usuario ${zonaNum}`;
            body = `${nombre} • Partición ${partition}`;
            icon = '🔓';
            color = '#2563eb';
            break;
        case 6:
            title = `🔒 Cierre por usuario ${zonaNum}`;
            body = `${nombre} • Partición ${partition}`;
            icon = '🔒';
            color = '#7c3aed';
            break;
        case 7: {
            const tipoMap = {
                0: 'Fuego',
                1: 'Alarma médica',
                2: 'Pánico de teclado'
            };
            const tipo = tipoMap[zoneOrUser] || `Alarma (código ${zoneOrUser})`;
            title = `🔥 ${tipo}`;
            body = `Partición ${partition}`;
            icon = '🔥';
            color = '#b91c1c';
            break;
        }
        default:
            title = `📩 Evento ${eventType}`;
            body = `Partición ${partition} • ${nombre}`;
            icon = '📩';
            color = '#6b7280';
    }

    if (partition == 9) {
        body = body.replace('Partición', 'Global');
    }

    return { title, body, icon, color };
}

messaging.onBackgroundMessage((payload) => {
    console.log('📩 Notificación en segundo plano (SW):', payload);
    const eventData = payload.data || {};
    if (eventData.E === undefined) {
        const notificationTitle = payload.notification?.title || 'ProtexHome';
        const notificationBody = payload.notification?.body || 'Nuevo evento';
        const options = {
            body: notificationBody,
            icon: './assets/icon-512.png',
            badge: './assets/icon-512.png',
            requireInteraction: true,
        };
        return self.registration.showNotification(notificationTitle, options);
    }
    const { title, body, icon, color } = formatEventMessage(eventData);
    const options = {
        body: body,
        icon: './assets/icon-512.png',
        badge: './assets/icon-512.png',
        tag: `event-${eventData.S || 'unknown'}-${eventData.D}-${Date.now()}`,
        requireInteraction: true,
        data: { payload: eventData }
    };
    if (Notification.prototype.hasOwnProperty('color')) {
        options.color = color;
    }
    self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const payload = event.notification.data?.payload;
    if (payload) {
        console.log('🔔 Usuario hizo clic en la notificación (SW):', payload);
        const urlToOpen = new URL('/', self.location.origin).href;
        event.waitUntil(
            clients.openWindow(urlToOpen)
        );
    }
});