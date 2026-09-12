// src/services/notifications.js

import {
    getMessaging,
    getToken,
    onMessage
} from 'firebase/messaging';

import {
    getFunctions,
    httpsCallable
} from 'firebase/functions';

import { app } from '../firebase.js';

const TOKEN_KEY = 'fcm_token';
const SUBSCRIPTIONS_KEY = 'fcm_subscriptions';

const VAPID_KEY =
    'BGqsW_ZEnJVC5kfKwtLdz6QUhhciFu53Z-ObyRwNsWscwYNA14eBFHxNn1HFVxsGSUpniXgnddgsRbGfqcmuQyI';

const FCM_SW_URL =
    '/ProtexHome/firebase-messaging-sw.js';

const FCM_SW_SCOPE =
    '/ProtexHome/fcm/';

let messaging = null;
let swRegistration = null;
let messagingReady = null;
let permissionRequested = false;


// ============================================================
// INICIALIZACIÓN FCM
// ============================================================

async function initMessaging() {

    if (messaging && swRegistration) {
        return;
    }

    console.log('----------------------------------------');
    console.log('🔔 Inicializando Firebase Messaging');
    console.log('🌐 Origin:', window.location.origin);
    console.log('📍 URL:', window.location.href);
    console.log('🔐 Secure context:', window.isSecureContext);
    console.log(
        '⚙️ Service Worker disponible:',
        'serviceWorker' in navigator
    );
    console.log(
        '🔔 Notification disponible:',
        'Notification' in window
    );

    if (!('serviceWorker' in navigator)) {
        console.error(
            '❌ Este navegador no soporta Service Worker'
        );
        return;
    }

    if (!window.isSecureContext) {
        console.error(
            '❌ FCM requiere HTTPS'
        );
        return;
    }

    try {

        console.log(
            '🔧 Registrando FCM SW:',
            FCM_SW_URL
        );

        console.log(
            '🔧 FCM SW scope:',
            FCM_SW_SCOPE
        );

        swRegistration =
            await navigator.serviceWorker.register(
                FCM_SW_URL,
                {
                    scope: FCM_SW_SCOPE
                }
            );

        console.log(
            '✅ FCM Service Worker registrado'
        );

        console.log(
            '✅ FCM registration scope:',
            swRegistration.scope
        );

        await navigator.serviceWorker.ready;

        console.log(
            '✅ Service Workers listos'
        );

        messaging = getMessaging(app);

        console.log(
            '✅ Firebase Messaging inicializado'
        );

        // Escuchar mensajes enviados por el FCM SW
        navigator.serviceWorker.addEventListener(
            'message',
            (event) => {

                if (
                    event.data &&
                    event.data.type === 'FCM_SW_LOG'
                ) {

                    console.log(
                        '📩 Mensaje desde FCM SW:',
                        event.data
                    );
                }
            }
        );

    } catch (error) {

        console.error(
            '❌ ERROR INICIALIZANDO FCM'
        );

        console.error(error);

        messaging = null;
        swRegistration = null;
    }
}


// Iniciar inmediatamente
messagingReady = initMessaging();


// ============================================================
// FORMATEO DE EVENTOS
// ============================================================

export function formatEventMessage(payload) {

    const {
        A: partition,
        D: zoneOrUser,
        E: eventType,
        N: name,
        S: serial
    } = payload;

    const zonaNum =
        String(zoneOrUser || 0).padStart(2, '0');

    const nombre =
        name || 'Usuario';

    const serialDisplay =
        serial || '';

    let title = `📢 ${serialDisplay}`;
    let body = '';
    let icon = '🔔';
    let color = '#6b7280';

    switch (Number(eventType)) {

        case 1:

            title =
                `🚨 Alarma en Zona ${zonaNum}`;

            body =
                `Partición ${partition} • ${nombre}`;

            icon = '🚨';
            color = '#dc2626';

            break;


        case 2:

            title =
                `✅ Restauración en Zona ${zonaNum}`;

            body =
                `Partición ${partition} • ${nombre}`;

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

            const fallaDesc =
                fallaMap[zoneOrUser] ||
                `Falla (código ${zoneOrUser})`;

            title =
                `⚠️ Falla: ${fallaDesc}`;

            body =
                `Partición ${partition}`;

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

            const restDesc =
                restFallaMap[zoneOrUser] ||
                `Falla restaurada (código ${zoneOrUser})`;

            title =
                `🔄 ${restDesc}`;

            body =
                `Partición ${partition}`;

            icon = '🔄';
            color = '#a16207';

            break;
        }


        case 5:

            title =
                `🔓 Apertura por usuario ${zonaNum}`;

            body =
                `${nombre} • Partición ${partition}`;

            icon = '🔓';
            color = '#2563eb';

            break;


        case 6:

            title =
                `🔒 Cierre por usuario ${zonaNum}`;

            body =
                `${nombre} • Partición ${partition}`;

            icon = '🔒';
            color = '#7c3aed';

            break;


        case 7: {

            const tipoMap = {
                0: 'Fuego',
                1: 'Alarma médica',
                2: 'Pánico de teclado'
            };

            const tipo =
                tipoMap[zoneOrUser] ||
                `Alarma (código ${zoneOrUser})`;

            title = `🔥 ${tipo}`;

            body =
                `Partición ${partition}`;

            icon = '🔥';
            color = '#b91c1c';

            break;
        }


        default:

            title =
                `📩 Evento ${eventType}`;

            body =
                `Partición ${partition} • ${nombre}`;

            icon = '📩';
            color = '#6b7280';
    }


    if (partition == 9) {

        body =
            body.replace(
                'Partición',
                'Global'
            );
    }


    return {
        title,
        body,
        icon,
        color
    };
}


// ============================================================
// NOTIFICACIÓN FOREGROUND
// ============================================================

export function showEventNotification(payload) {

    console.log(
        '🔔 showEventNotification:',
        payload
    );

    if (!('Notification' in window)) {

        console.error(
            '❌ Notification API no disponible'
        );

        return false;
    }


    if (Notification.permission !== 'granted') {

        console.warn(
            '🔕 Permiso no concedido:',
            Notification.permission
        );

        return false;
    }


    const {
        title,
        body,
        color
    } =
        formatEventMessage(payload);


    const options = {

        body,

        icon:
            '/ProtexHome/assets/icon-512.png',

        badge:
            '/ProtexHome/assets/icon-512.png',

        tag:
            `event-${payload.S || 'unknown'}-${Date.now()}`,

        requireInteraction: true,

        vibrate: [
            200,
            100,
            200
        ],

        data: {
            payload
        }
    };


    if (
        'color' in Notification.prototype
    ) {

        options.color = color;
    }


    try {

        const notification =
            new Notification(
                title,
                options
            );


        notification.onclick =
            (event) => {

                event.preventDefault();

                window.focus();

                console.log(
                    '🔔 Click foreground:',
                    payload
                );

                if (payload.S) {

                    window.location.href =
                        `/ProtexHome/?serial=${payload.S}`;
                }
            };


        console.log(
            '✅ Notificación foreground creada'
        );

        return true;

    } catch (error) {

        console.error(
            '❌ Error Notification():',
            error
        );

        return false;
    }
}


// ============================================================
// PERMISO + TOKEN
// ============================================================


export async function requestNotificationPermission() {

    if (permissionRequested) {
        return {
            success: false,
            error: 'Solicitud de permiso en curso'
        };
    }

    permissionRequested = true;

    try {

        await messagingReady;

        if (!messaging || !swRegistration) {
            throw new Error(
                'Firebase Messaging no está disponible'
            );
        }

        let permission = Notification.permission;

        if (permission === 'default') {
            permission =
                await Notification.requestPermission();
        }

        console.log(
            '🔔 Permiso:',
            permission
        );

        if (permission !== 'granted') {
            return {
                success: false,
                error: 'Permiso no concedido'
            };
        }

        console.log(
            '🔑 Obteniendo token FCM actual...'
        );

        const token = await getToken(
            messaging,
            {
                vapidKey: VAPID_KEY,
                serviceWorkerRegistration:
                    swRegistration
            }
        );

        if (!token) {
            throw new Error(
                'Firebase no devolvió token FCM'
            );
        }

        const oldToken =
            localStorage.getItem(TOKEN_KEY);

        if (oldToken !== token) {

            console.log(
                '🔄 Token FCM actualizado'
            );

            localStorage.setItem(
                TOKEN_KEY,
                token
            );

        } else {

            console.log(
                '✅ Token FCM actual confirmado'
            );
        }

        console.log(
            '🔥 Token:',
            token
        );

        return {
            success: true,
            token
        };

    } catch (error) {

        console.error(
            '❌ Error obteniendo FCM:',
            error
        );

        return {
            success: false,
            error: error.message
        };

    } finally {

        permissionRequested = false;
    }
}

/*
export async function requestNotificationPermission() {

    const existingToken =
        localStorage.getItem(TOKEN_KEY);


    if (
        existingToken &&
        Notification.permission === 'granted'
    ) {

        console.log(
            'ℹ️ Token FCM existente'
        );

        return {
            success: true,
            token: existingToken
        };
    }


    if (permissionRequested) {

        console.log(
            'ℹ️ Solicitud de permiso en curso'
        );

        return new Promise(
            (resolve) => {

                const check =
                    setInterval(() => {

                        if (!permissionRequested) {

                            clearInterval(check);

                            resolve(
                                requestNotificationPermission()
                            );
                        }

                    }, 200);
            }
        );
    }


    permissionRequested = true;


    try {

        await messagingReady;


        if (
            !messaging ||
            !swRegistration
        ) {

            throw new Error(
                'Firebase Messaging no está disponible'
            );
        }


        const permission =
            await Notification.requestPermission();


        console.log(
            '🔔 Permiso:',
            permission
        );


        if (permission !== 'granted') {

            return {
                success: false,
                error:
                    'Permiso de notificaciones no concedido'
            };
        }


        console.log(
            '🔑 Solicitando token FCM...'
        );


        const token =
            await getToken(
                messaging,
                {
                    vapidKey: VAPID_KEY,

                    serviceWorkerRegistration:
                        swRegistration
                }
            );


        if (!token) {

            throw new Error(
                'Firebase no devolvió token'
            );
        }


        console.log(
            '✅ Token FCM obtenido:',
            token
        );


        localStorage.setItem(
            TOKEN_KEY,
            token
        );


        return {
            success: true,
            token
        };


    } catch (error) {

        console.error(
            '❌ Error obteniendo token FCM:',
            error
        );

        return {
            success: false,
            error: error.message
        };


    } finally {

        permissionRequested = false;
    }
}*/


// ============================================================
// SINCRONIZAR TOPICS
// ============================================================

export async function syncSubscriptions(
    userId,
    serials
) {

    const token =
        localStorage.getItem(TOKEN_KEY);


    if (!token) {

        console.warn(
            '⚠️ No existe token FCM'
        );

        return;
    }


    const storedSubs =
        JSON.parse(
            localStorage.getItem(
                SUBSCRIPTIONS_KEY
            ) || '{}'
        );


    const functions =
        getFunctions(app);


    const subscribeToSerialTopic =
        httpsCallable(
            functions,
            'subscribeToSerialTopic'
        );


    for (const serial of serials) {

        if (
            storedSubs[serial] !== token
        ) {

            try {

                await subscribeToSerialTopic({
                    serial,
                    token
                });


                storedSubs[serial] =
                    token;


                console.log(
                    '✅ Suscrito:',
                    serial
                );


            } catch (error) {

                console.error(
                    '❌ Error topic:',
                    serial,
                    error
                );
            }
        }
    }


    for (
        const serial of Object.keys(storedSubs)
    ) {

        if (!serials.includes(serial)) {

            delete storedSubs[serial];
        }
    }


    localStorage.setItem(
        SUBSCRIPTIONS_KEY,
        JSON.stringify(storedSubs)
    );
}


// ============================================================
// NUEVO SERIAL
// ============================================================

export async function subscribeToNewSerial(
    userId,
    serial
) {

    const token =
        localStorage.getItem(TOKEN_KEY);


    if (!token) {

        console.warn(
            '⚠️ No existe token FCM'
        );

        return;
    }


    const storedSubs =
        JSON.parse(
            localStorage.getItem(
                SUBSCRIPTIONS_KEY
            ) || '{}'
        );


    if (
        storedSubs[serial] === token
    ) {

        return;
    }


    const functions =
        getFunctions(app);


    const subscribeToSerialTopic =
        httpsCallable(
            functions,
            'subscribeToSerialTopic'
        );


    try {

        await subscribeToSerialTopic({
            serial,
            token
        });


        storedSubs[serial] =
            token;


        localStorage.setItem(
            SUBSCRIPTIONS_KEY,
            JSON.stringify(storedSubs)
        );


        console.log(
            '✅ Suscrito nuevo serial:',
            serial
        );


    } catch (error) {

        console.error(
            '❌ Error nuevo serial:',
            serial,
            error
        );
    }
}


// ============================================================
// DESUSCRIBIR
// ============================================================

export async function unsubscribeFromSerial(
    serial
) {

    const token =
        localStorage.getItem(TOKEN_KEY);


    if (!token) {

        return {
            success: false,
            error: 'No existe token'
        };
    }


    const functions =
        getFunctions(app);


    const unsubscribe =
        httpsCallable(
            functions,
            'unsubscribeFromSerialTopic'
        );


    try {

        await unsubscribe({
            serial,
            token
        });


        const storedSubs =
            JSON.parse(
                localStorage.getItem(
                    SUBSCRIPTIONS_KEY
                ) || '{}'
            );


        delete storedSubs[serial];


        localStorage.setItem(
            SUBSCRIPTIONS_KEY,
            JSON.stringify(storedSubs)
        );


        return {
            success: true
        };


    } catch (error) {

        console.error(
            '❌ Error desuscribiendo:',
            error
        );


        return {
            success: false,
            error: error.message
        };
    }
}


// ============================================================
// LIMPIAR
// ============================================================

export function clearSubscriptions() {

    localStorage.removeItem(
        TOKEN_KEY
    );

    localStorage.removeItem(
        SUBSCRIPTIONS_KEY
    );
}


// ============================================================
// FOREGROUND
// ============================================================

export async function onForegroundMessage(
    callback
) {

    try {

        await messagingReady;


        if (!messaging) {

            console.error(
                '❌ Messaging no inicializado'
            );

            return;
        }


        onMessage(
            messaging,
            (payload) => {

                console.log(
                    '📩 FCM foreground:',
                    payload
                );

                callback(payload);
            }
        );


        console.log(
            '✅ Listener FCM foreground registrado'
        );


    } catch (error) {

        console.error(
            '❌ Error registrando onMessage:',
            error
        );
    }
}


// ============================================================
// COMPROBAR / RENOVAR TOKEN
// ============================================================

export async function refreshTokenIfNeeded() {

    try {

        await messagingReady;


        if (
            !messaging ||
            !swRegistration
        ) {

            return;
        }


        const currentToken =
            localStorage.getItem(TOKEN_KEY);


        if (!currentToken) {

            return;
        }


        const newToken =
            await getToken(
                messaging,
                {
                    vapidKey: VAPID_KEY,

                    serviceWorkerRegistration:
                        swRegistration
                }
            );


        if (
            newToken &&
            newToken !== currentToken
        ) {

            console.log(
                '🔄 Token FCM cambiado'
            );


            localStorage.setItem(
                TOKEN_KEY,
                newToken
            );


            window.dispatchEvent(
                new CustomEvent(
                    'tokenRefreshed',
                    {
                        detail: {
                            oldToken: currentToken,
                            token: newToken
                        }
                    }
                )
            );
        }


    } catch (error) {

        console.warn(
            '⚠️ No se pudo comprobar token:',
            error
        );
    }
}