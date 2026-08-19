// src/services/notifications.js
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getDatabase, ref, get } from 'firebase/database';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { app } from '../firebase.js';

const db = getDatabase();
const TOKEN_KEY = 'fcm_token';
const SUBSCRIPTIONS_KEY = 'fcm_subscriptions';

let messaging = null;
try {
    messaging = getMessaging(app);
} catch (error) {
    console.warn('⚠️ Messaging no disponible:', error.message);
}

// Solicitar permiso, obtener token y guardarlo localmente
export async function requestNotificationPermission() {
    if (!messaging) return { success: false, error: 'Messaging no disponible' };

    try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            const token = await getToken(messaging, {
                vapidKey: 'BGqsW_ZEnJVC5kfKwtLdz6QUhhciFu53Z-ObyRwNsWscwYNA14eBFHxNn1HFVxsGSUpniXgnddgsRbGfqcmuQyI'
            });

            if (token) {
                localStorage.setItem(TOKEN_KEY, token);
                return { success: true, token };
            }
            return { success: false, error: 'No se pudo obtener el token' };
        }
        return { success: false, error: 'Permiso denegado' };
    } catch (error) {
        console.error('❌ Error solicitando permiso:', error);
        return { success: false, error: error.message };
    }
}

// Sincronizar suscripciones con la lista actual de seriales
export async function syncSubscriptions(userId, serials) {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return;

    const storedSubs = JSON.parse(localStorage.getItem(SUBSCRIPTIONS_KEY) || '{}');
    const functions = getFunctions(app);
    const subscribeToSerialTopic = httpsCallable(functions, 'subscribeToSerialTopic');

    for (const serial of serials) {
        if (storedSubs[serial] !== token) {
            try {
                await subscribeToSerialTopic({ serial, token });
                storedSubs[serial] = token;
                console.log('✅ Suscrito al topic', serial);
            } catch (error) {
                console.warn('⚠️ No se pudo suscribir al topic', serial, error.message);
            }
        }
    }

    // Eliminar suscripciones de seriales que ya no tiene el usuario
    for (const serial of Object.keys(storedSubs)) {
        if (!serials.includes(serial)) {
            delete storedSubs[serial];
        }
    }

    localStorage.setItem(SUBSCRIPTIONS_KEY, JSON.stringify(storedSubs));
}

// Suscribirse a un solo serial nuevo
export async function subscribeToNewSerial(userId, serial) {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return;

    const storedSubs = JSON.parse(localStorage.getItem(SUBSCRIPTIONS_KEY) || '{}');
    if (storedSubs[serial] === token) return;

    const functions = getFunctions(app);
    const subscribeToSerialTopic = httpsCallable(functions, 'subscribeToSerialTopic');

    try {
        await subscribeToSerialTopic({ serial, token });
        storedSubs[serial] = token;
        localStorage.setItem(SUBSCRIPTIONS_KEY, JSON.stringify(storedSubs));
        console.log('✅ Suscrito al nuevo topic', serial);
    } catch (error) {
        console.warn('⚠️ No se pudo suscribir al topic', serial, error.message);
    }
}

// Desuscribir de un serial (botón dentro del sitio)
export async function unsubscribeFromSerial(serial) {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return { success: false, error: 'No hay token' };

    const functions = getFunctions(app);
    const unsubscribeFromSerialTopic = httpsCallable(functions, 'unsubscribeFromSerialTopic');

    try {
        await unsubscribeFromSerialTopic({ serial, token });
        const storedSubs = JSON.parse(localStorage.getItem(SUBSCRIPTIONS_KEY) || '{}');
        delete storedSubs[serial];
        localStorage.setItem(SUBSCRIPTIONS_KEY, JSON.stringify(storedSubs));
        return { success: true };
    } catch (error) {
        console.error('❌ Error desuscribiendo:', error);
        return { success: false, error: error.message };
    }
}

// Limpiar marcas locales (al cerrar sesión o eliminar cuenta)
export function clearSubscriptions() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(SUBSCRIPTIONS_KEY);
}

// Manejar notificaciones en primer plano
export function onForegroundMessage(callback) {
    if (!messaging) return;
    onMessage(messaging, (payload) => callback(payload));
}