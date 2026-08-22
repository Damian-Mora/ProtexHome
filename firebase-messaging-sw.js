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

messaging.onBackgroundMessage((payload) => {
    console.log('📩 Notificación en segundo plano:', payload);

    const data = payload.data || {};
    const serial = data.S || 'ProtexHome';
    const estado = data.E || '';
    const nombre = data.N || 'Usuario';
    const cuerpo = `${getEventText(estado)} - ${nombre}`;

    const notificationOptions = {
        body: cuerpo,
        icon: './assets/icon-512.png',
        badge: './assets/icon-512.png',
        data: data
    };

    self.registration.showNotification(`Alerta en ${serial}`, notificationOptions);
});

function getEventText(eventCode) {
    const events = {
        1: 'Puerta abierta',
        2: 'Puerta cerrada',
        3: 'Alarma activada',
        4: 'Alarma desactivada',
        5: 'Acceso permitido',
        6: 'Acceso denegado',
        7: 'Dispositivo conectado',
        8: 'Dispositivo desconectado',
        21: 'Comando: Abrir',
        22: 'Comando: Cerrar'
    };
    return events[eventCode] || 'Evento ' + eventCode;
}