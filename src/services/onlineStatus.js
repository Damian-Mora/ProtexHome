// src/services/onlineStatus.js
import { getDatabase, ref, get, set, onValue } from 'firebase/database';
import { app } from '../firebase.js';
import { getActiveView, isSerialActive, getActiveSerial } from './activeSerial.js';

const db = getDatabase(app);

export function isOnlineValue(value) {
    return value === 1 || value === 11;
}

export async function readOnlineStatus(serial) {
    const onlineRef = ref(db, `P/${serial}/L`);
    const snap = await get(onlineRef);
    return snap.exists() && isOnlineValue(snap.val());
}

export function listenOnlineStatus(serial, callback) {
    if (getActiveView() === 'device' && !isSerialActive(serial)) {
        console.warn(`⛔ Listener de ${serial} ignorado (serial activo ${getActiveSerial()})`);
        return () => {};
    }

    const onlineRef = ref(db, `P/${serial}/L`);
    let lastOnline = null;
    let timeoutId = null;
    let isRecovering = false;

    const unsubscribe = onValue(onlineRef, (snapshot) => {
        const isOnline = snapshot.exists() && isOnlineValue(snapshot.val());

        if (lastOnline === null) {
            callback(isOnline ? 'online' : 'offline');
        } else if (!isOnline && lastOnline) {
            console.log(`⏳ Detectado offline: ${serial}`);

            if (!isRecovering && !document.hidden) {
                isRecovering = true;

                (async () => {
                    // Solo alternar X/D/L sin escribir P/L=0
                    await recoverDevice(serial);
                    isRecovering = false;
                })();
            }

            if (timeoutId) clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                get(onlineRef).then((recheck) => {
                    const stillOnline = recheck.exists() && isOnlineValue(recheck.val());
                    if (!stillOnline) {
                        console.log(`🔴 Confirmado offline: ${serial}`);
                        callback('offline');
                    } else {
                        console.log(`🟢 Recuperado: ${serial}`);
                        callback('online');
                    }
                });
            }, 30000);
        } else if (isOnline && !lastOnline) {
            console.log(`🟢 Online: ${serial}`);
            callback('online');
        }

        lastOnline = isOnline;
    });

    return () => {
        if (timeoutId) clearTimeout(timeoutId);
        unsubscribe();
    };
}

// Recuperación: alternar X/D/L sin tocar P/L
async function recoverDevice(serial) {
    try {
        const requestRef = ref(db, `M/${serial}/X/D/L`);
        const snap = await get(requestRef);
        const currentValue = snap.exists() ? snap.val() : 0;
        const newValue = (currentValue === 11) ? 1 : 11;

        await set(requestRef, newValue);
        console.log(`🔄 Recuperando ${serial}: X/D/L ${currentValue} → ${newValue}`);
    } catch (error) {
        console.error('Error en recuperación:', error);
    }
}

export async function pingDevice(serial) {
    try {
        const requestRef = ref(db, `M/${serial}/X/D/L`);
        const snap = await get(requestRef);
        const currentValue = snap.exists() ? snap.val() : 0;
        const newValue = (currentValue === 11) ? 1 : 11;

        await set(requestRef, newValue);
        // 🔧 CAMBIO CLAVE: solo escribir L, no reemplazar todo P/SERIAL
        await set(ref(db, `P/${serial}/L`), 0);

        console.log(`🩺 Ping a ${serial}: X/D/L ${currentValue} → ${newValue}, P/L=0`);
    } catch (error) {
        console.error('Error en ping:', error);
    }
}

export async function setModuleStandby(serial) {
    try {
        // 🔧 CAMBIO CLAVE: solo escribir L, no reemplazar todo P/SERIAL
        await set(ref(db, `P/${serial}/L`), 0);
        await set(ref(db, `M/${serial}/X/D/L`), 0);
        console.log(`😴 Módulo en reposo: ${serial}`);
    } catch (error) {
        console.error('Error al poner en reposo:', error);
    }
}

export async function setAllModulesStandby(userUid) {
    const modulesRef = ref(db, `US/${userUid}/M`);
    try {
        const snapshot = await get(modulesRef);
        if (snapshot.exists()) {
            const modules = snapshot.val();
            for (const serial of Object.keys(modules)) {
                await setModuleStandby(serial);
            }
        }
    } catch (error) {
        console.error('Error al poner todos en reposo:', error);
    }
}

export async function pingAllModules(userUid) {
    const modulesRef = ref(db, `US/${userUid}/M`);
    try {
        const snapshot = await get(modulesRef);
        if (snapshot.exists()) {
            const modules = snapshot.val();
            for (const serial of Object.keys(modules)) {
                await pingDevice(serial);
            }
        }
    } catch (error) {
        console.error('Error al hacer ping a todos:', error);
    }
}