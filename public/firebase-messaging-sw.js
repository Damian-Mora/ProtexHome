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

    const notificationTitle = payload.notification?.title || 'ProtexHome';
    const notificationOptions = {
        body: payload.notification?.body || 'Nueva alerta',
        icon: '/assets/icon-512.png',
        badge: '/assets/icon-512.png',
        data: payload.data || {}
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});